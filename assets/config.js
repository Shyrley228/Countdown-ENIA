"use strict";

/**
 * Configuración normativa del contador ENIA.
 * Para actualizar plazos o días no laborables, edite únicamente este archivo.
 */
window.ENIA_CONFIG = Object.freeze({
  publicationDate: "2026-05-01",
  calendarLastReviewed: "2026-06-11",
  officialNonBusinessDays: [
    "2026-01-01", "2026-01-02",
    "2026-04-02", "2026-04-03",
    "2026-05-01",
    "2026-06-07", "2026-06-29",
    "2026-07-23", "2026-07-27", "2026-07-28", "2026-07-29",
    "2026-08-06", "2026-08-30",
    "2026-10-08",
    "2026-11-01",
    "2026-12-08", "2026-12-09", "2026-12-25"
  ],
  deadlines: [
    {
      id: "oia",
      name: "Lineamientos del Oficial de Inteligencia Artificial y del Equipo Técnico",
      basis: "Primera Disposición Complementaria Final",
      description: "Aprobación de los lineamientos sobre perfil, responsabilidades, designación y articulación del OIA y del Equipo Técnico de Datos e Inteligencia Artificial.",
      businessDays: 90
    },
    {
      id: "catalogo",
      name: "Implementación del Catálogo IA Perú",
      basis: "Tercera Disposición Complementaria Final",
      description: "Implementación del Catálogo Nacional de Conjuntos de Datos y Modelos para Inteligencia Artificial.",
      businessDays: 120
    },
    {
      id: "marco",
      name: "Marco de referencia para Gobierno y Gestión de Tecnologías y Datos",
      basis: "Cuarta Disposición Complementaria Final",
      description: "Aprobación del marco aplicable a entidades públicas, incluyendo referencias para la intervención y participación humana en soluciones de IA.",
      businessDays: 120
    }
  ]
});
