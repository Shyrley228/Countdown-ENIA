"use strict";

const config = window.ENIA_CONFIG;

if (!config) {
  throw new Error("No se encontró la configuración ENIA.");
}

const PUBLICATION_DATE = config.publicationDate;
const officialNonBusinessDays = new Set(config.officialNonBusinessDays);
const deadlines = config.deadlines;

const cardsContainer = document.getElementById("cards");
const asOfDateInput = document.getElementById("asOfDate");
const todayButton = document.getElementById("todayButton");
const exportButton = document.getElementById("exportButton");

function toISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseLocalDate(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day, 12, 0, 0, 0);
}

function addCalendarDays(date, amount) {
  const result = new Date(date);
  result.setDate(result.getDate() + amount);
  return result;
}

function isBusinessDay(date) {
  const day = date.getDay();
  return day !== 0 && day !== 6 && !officialNonBusinessDays.has(toISODate(date));
}

function addBusinessDays(startDate, totalDays) {
  let cursor = new Date(startDate);
  let counted = 0;
  while (counted < totalDays) {
    cursor = addCalendarDays(cursor, 1);
    if (isBusinessDay(cursor)) counted += 1;
  }
  return cursor;
}

function businessDaysElapsed(startDate, asOfDate, maximum) {
  if (asOfDate <= startDate) return 0;
  let cursor = new Date(startDate);
  let counted = 0;
  while (cursor < asOfDate && counted < maximum) {
    cursor = addCalendarDays(cursor, 1);
    if (isBusinessDay(cursor)) counted += 1;
  }
  return counted;
}

function businessDaysBetweenExclusiveStart(startDate, endDate) {
  if (endDate <= startDate) return 0;
  let cursor = new Date(startDate);
  let counted = 0;
  while (cursor < endDate) {
    cursor = addCalendarDays(cursor, 1);
    if (isBusinessDay(cursor)) counted += 1;
  }
  return counted;
}

function statusFromRemaining(remaining, overdue) {
  if (overdue > 0) return { key: "red", label: "Vencido" };
  if (remaining > 30) return { key: "green", label: "En plazo" };
  if (remaining >= 10) return { key: "yellow", label: "Atención" };
  return { key: "red", label: remaining === 0 ? "Vence hoy" : "Crítico" };
}

function formatDate(date) {
  return new Intl.DateTimeFormat("es-PE", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date).replace(" de ", " ").replace(" de ", " ");
}

function calculateDeadline(item, asOfDate) {
  const publication = parseLocalDate(PUBLICATION_DATE);
  const dueDate = addBusinessDays(publication, item.businessDays);
  const elapsed = businessDaysElapsed(publication, asOfDate, item.businessDays);
  const remaining = Math.max(item.businessDays - elapsed, 0);
  const overdue = asOfDate > dueDate ? businessDaysBetweenExclusiveStart(dueDate, asOfDate) : 0;
  const progress = Math.min(100, Math.max(0, (elapsed / item.businessDays) * 100));
  const status = statusFromRemaining(remaining, overdue);
  return { ...item, dueDate, elapsed, remaining, overdue, progress, status };
}

function render() {
  if (!asOfDateInput.value) return;
  const asOfDate = parseLocalDate(asOfDateInput.value);
  const results = deadlines.map(item => calculateDeadline(item, asOfDate));

  cardsContainer.innerHTML = results.map((item, index) => {
    const remainingLabel = item.overdue > 0 ? `-${item.overdue}` : item.remaining;
    const remainingCaption = item.overdue > 0 ? "días hábiles de atraso" : "días hábiles restantes";
    return `
      <article class="card">
        <div class="card-top">
          <div class="card-index" aria-hidden="true">${index + 1}</div>
          <span class="status ${item.status.key}">${item.status.label}</span>
        </div>
        <h3>${item.name}</h3>
        <p class="basis">${item.basis}</p>
        <p class="description">${item.description}</p>
        <div class="deadline-grid">
          <div class="metric">
            <span>Fecha límite calculada</span>
            <strong>${formatDate(item.dueDate)}</strong>
          </div>
          <div class="metric">
            <span>${remainingCaption}</span>
            <strong>${remainingLabel}</strong>
          </div>
        </div>
        <div class="progress-wrap">
          <div class="progress-meta">
            <span>${item.elapsed} de ${item.businessDays} días consumidos</span>
            <strong>${item.progress.toFixed(0)}%</strong>
          </div>
          <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${item.progress.toFixed(0)}" aria-label="Avance del plazo">
            <div class="${item.status.key}" style="width:${item.progress}%"></div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function setToday() {
  asOfDateInput.value = toISODate(new Date());
  render();
}

function exportCSV() {
  const asOfDate = parseLocalDate(asOfDateInput.value);
  const rows = deadlines.map(item => calculateDeadline(item, asOfDate));
  const header = ["Nombre", "Base normativa", "Fecha límite", "Días hábiles restantes", "Estado", "Avance porcentual"];
  const body = rows.map(item => [
    item.name,
    item.basis,
    toISODate(item.dueDate),
    item.overdue > 0 ? -item.overdue : item.remaining,
    item.status.label,
    item.progress.toFixed(0) + "%"
  ]);
  const escape = value => `"${String(value).replaceAll('"', '""')}"`;
  const csv = [header, ...body].map(row => row.map(escape).join(",")).join("\n");
  const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `plazos_enia_${asOfDateInput.value}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

asOfDateInput.min = PUBLICATION_DATE;
asOfDateInput.addEventListener("change", render);
todayButton.addEventListener("click", setToday);
exportButton.addEventListener("click", exportCSV);

setToday();
