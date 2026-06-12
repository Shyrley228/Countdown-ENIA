import { BookOpen, Bot, CheckCircle2, Filter, Map, RotateCcw, Search, ShieldAlert, Sparkles, Trophy } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import ChatPanel from './components/ChatPanel.jsx';
import ObligationCard from './components/ObligationCard.jsx';
import Onboarding from './components/Onboarding.jsx';
import { ENIA_SOURCE_URL, getEntityType, getObligationsForProfile, getSpecialRole } from './data/enia.js';

const defaultProfile = {
  entityType: '',
  specialRole: 'general',
  usesAI: false,
};

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export default function App() {
  const [profile, setProfile] = useState(() => readStorage('enia-profile', defaultProfile));
  const [started, setStarted] = useState(() => Boolean(readStorage('enia-started', false)));
  const [completed, setCompleted] = useState(() => readStorage('enia-completed', []));
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [kind, setKind] = useState('all');
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => localStorage.setItem('enia-profile', JSON.stringify(profile)), [profile]);
  useEffect(() => localStorage.setItem('enia-started', JSON.stringify(started)), [started]);
  useEffect(() => localStorage.setItem('enia-completed', JSON.stringify(completed)), [completed]);

  const obligations = useMemo(() => getObligationsForProfile(profile), [profile]);
  const profileCategories = useMemo(() => [...new Set(obligations.map((item) => item.category))].sort(), [obligations]);
  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return obligations.filter((item) => {
      const matchesText = !term || `${item.title} ${item.summary} ${item.responsible}`.toLowerCase().includes(term);
      const matchesCategory = category === 'all' || item.category === category;
      const matchesKind = kind === 'all' || item.kind === kind;
      return matchesText && matchesCategory && matchesKind;
    });
  }, [obligations, search, category, kind]);

  if (!started || !profile.entityType) {
    return <Onboarding profile={profile} setProfile={setProfile} onStart={() => setStarted(true)} />;
  }

  const entity = getEntityType(profile.entityType);
  const special = getSpecialRole(profile.specialRole);
  const completedCount = obligations.filter((item) => completed.includes(item.id)).length;
  const progress = obligations.length ? Math.round((completedCount / obligations.length) * 100) : 0;
  const mandatoryCount = obligations.filter((item) => item.kind === 'obligacion').length;
  const annualCount = obligations.filter((item) => item.targets).length;

  function toggleCompleted(id) {
    setCompleted((current) => current.includes(id) ? current.filter((value) => value !== id) : [...current, id]);
  }

  function resetProfile() {
    setStarted(false);
    setSearch('');
    setCategory('all');
    setKind('all');
  }

  return (
    <div className="min-h-screen bg-[#070b17] text-slate-200">
      <div className="pointer-events-none fixed inset-0 grid-noise opacity-60" />
      <div className="pointer-events-none fixed left-1/4 top-0 h-96 w-96 rounded-full bg-violet-700/15 blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-600/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1600px] gap-4 px-3 py-3 lg:grid-cols-[minmax(0,1fr)_390px] lg:px-4 lg:py-4">
        <main className="min-w-0">
          <header className="glass mb-4 rounded-[2rem] p-5 sm:p-7">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-400/15 px-3 py-1 text-xs font-bold text-violet-200"><Map size={14} /> ENIA Quest</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{entity.emoji} {entity.label}</span>
                  {profile.usesAI && <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">Usa o desarrolla IA</span>}
                </div>
                <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">Tu mapa de obligaciones ENIA</h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400 sm:text-base">
                  Perfil: {entity.short}. {special.id !== 'general' ? `Responsabilidad específica: ${special.label}.` : 'Se muestran las obligaciones transversales y oportunidades aplicables.'}
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <button type="button" onClick={resetProfile} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-300 hover:bg-white/10 hover:text-white"><RotateCcw size={16} /> Cambiar entidad</button>
                <button type="button" onClick={() => setChatOpen(true)} className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2.5 text-sm font-black text-slate-950 shadow-lg shadow-violet-500/20 lg:hidden"><Bot size={17} /> Preguntar</button>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-wide text-slate-500">Misiones</span><Sparkles size={17} className="text-violet-300" /></div><p className="mt-2 text-3xl font-black text-white">{obligations.length}</p><p className="text-xs text-slate-500">Elementos de tu ruta</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-wide text-slate-500">Obligaciones</span><ShieldAlert size={17} className="text-rose-300" /></div><p className="mt-2 text-3xl font-black text-white">{mandatoryCount}</p><p className="text-xs text-slate-500">Mandatos aplicables</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-wide text-slate-500">Metas</span><Trophy size={17} className="text-amber-300" /></div><p className="mt-2 text-3xl font-black text-white">{annualCount}</p><p className="text-xs text-slate-500">Con indicador anual</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/[.035] p-4"><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-wide text-slate-500">Avance personal</span><CheckCircle2 size={17} className="text-emerald-300" /></div><p className="mt-2 text-3xl font-black text-white">{progress}%</p><div className="mt-2 h-2 overflow-hidden rounded-full bg-white/8"><div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all" style={{ width: `${progress}%` }} /></div></div>
            </div>
          </header>

          <section className="glass mb-4 rounded-[2rem] p-4 sm:p-5">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
              <div className="relative flex-1">
                <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar obligación, responsable o tema…" className="w-full rounded-2xl border border-white/10 bg-slate-950/60 py-3 pl-11 pr-4 text-sm text-white outline-none focus:border-violet-400" />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="relative"><Filter size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" /><select value={category} onChange={(event) => setCategory(event.target.value)} className="w-full appearance-none rounded-2xl border border-white/10 bg-slate-950/60 py-3 pl-9 pr-8 text-sm text-white outline-none focus:border-violet-400 sm:w-52"><option value="all">Todas las categorías</option>{profileCategories.map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
                <select value={kind} onChange={(event) => setKind(event.target.value)} className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none focus:border-violet-400"><option value="all">Todos los tipos</option><option value="obligacion">Obligaciones</option><option value="rol">Roles ENIA</option><option value="meta">Metas de hoja de ruta</option><option value="recomendacion">Recomendaciones</option><option value="oportunidad">Oportunidades</option></select>
              </div>
            </div>
          </section>

          <div className="mb-4 flex items-center justify-between px-1">
            <h2 className="text-lg font-black text-white">Misiones disponibles <span className="ml-1 text-sm font-semibold text-slate-500">({filtered.length})</span></h2>
            <span className="hidden text-xs text-slate-500 sm:block">Marca una misión para guardar tu avance en este dispositivo.</span>
          </div>

          <section className="grid gap-4 xl:grid-cols-2">
            {filtered.map((item) => <ObligationCard key={item.id} item={item} completed={completed.includes(item.id)} onToggle={toggleCompleted} />)}
          </section>

          {filtered.length === 0 && <div className="glass rounded-[2rem] p-10 text-center"><Search size={32} className="mx-auto text-slate-600" /><h3 className="mt-3 font-bold text-white">No encontramos misiones con esos filtros</h3><p className="mt-1 text-sm text-slate-500">Prueba otra palabra o restablece los filtros.</p></div>}

          <footer className="mt-6 rounded-[2rem] border border-white/10 bg-white/[.025] p-5 text-sm text-slate-400">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div><p className="font-semibold text-slate-200">Fuente bibliográfica principal</p><p className="mt-1 leading-5">Estrategia Nacional de Inteligencia Artificial 2026–2030, anexo de la RM N.° 152-2026-PCM.</p></div>
              <a href={ENIA_SOURCE_URL} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 font-semibold text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-400/5"><BookOpen size={17} /> Abrir fuente oficial</a>
            </div>
            <p className="mt-4 border-t border-white/8 pt-4 text-xs leading-5 text-slate-500">La herramienta es informativa y no sustituye la interpretación oficial, asesoría jurídica ni los lineamientos complementarios que emita la PCM. Las metas anuales de la ENIA son acumuladas y no siempre equivalen a una fecha límite individual para cada entidad.</p>
          </footer>
        </main>

        <ChatPanel profile={profile} open={chatOpen} onClose={() => setChatOpen(false)} />
      </div>
    </div>
  );
}
