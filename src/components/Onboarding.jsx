import { ArrowRight, Bot, Building2, Check, Sparkles } from 'lucide-react';
import { ENTITY_TYPES, SPECIAL_ROLES } from '../data/enia.js';

export default function Onboarding({ profile, setProfile, onStart }) {
  const canStart = Boolean(profile.entityType);

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 grid-noise opacity-70" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-600/25 blur-3xl animate-pulse-soft" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse-soft" />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-slate-950 shadow-lg shadow-violet-500/20">
              <Building2 size={25} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.2em] text-cyan-300">ENIA Quest</p>
              <h1 className="text-lg font-bold text-white">Mapa de obligaciones</h1>
            </div>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 sm:flex">
            <Bot size={16} className="text-violet-300" /> Chat con Claude incluido
          </div>
        </header>

        <section className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-sm font-semibold text-violet-200">
            <Sparkles size={15} /> Diseñado para aprender haciendo
          </div>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            Descubre la ruta ENIA de <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">tu entidad</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Elige tu perfil institucional. La app separará obligaciones transversales, roles, metas anuales y oportunidades de la ENIA 2026–2030.
          </p>
        </section>

        <section className="glass rounded-[2rem] p-5 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500 text-sm font-black text-white">1</div>
            <div>
              <h3 className="font-bold text-white">¿Qué tipo de entidad eres?</h3>
              <p className="text-sm text-slate-400">Selecciona la opción más cercana.</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ENTITY_TYPES.map((entity) => {
              const active = profile.entityType === entity.id;
              return (
                <button
                  key={entity.id}
                  type="button"
                  onClick={() => setProfile((prev) => ({ ...prev, entityType: entity.id }))}
                  className={`relative rounded-2xl border p-4 text-left transition duration-200 hover:-translate-y-1 ${
                    active
                      ? 'border-violet-400 bg-violet-500/15 shadow-lg shadow-violet-500/10'
                      : 'border-white/10 bg-white/[.035] hover:border-white/20 hover:bg-white/[.06]'
                  }`}
                >
                  {active && <span className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-violet-400 text-slate-950"><Check size={15} /></span>}
                  <div className="mb-3 text-3xl">{entity.emoji}</div>
                  <p className="font-bold text-white">{entity.label}</p>
                  <p className="mt-1 text-sm leading-5 text-slate-400">{entity.short}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_.7fr]">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-200">¿La ENIA asigna a tu entidad una responsabilidad específica?</span>
              <select
                value={profile.specialRole}
                onChange={(event) => setProfile((prev) => ({ ...prev, specialRole: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-400"
              >
                {SPECIAL_ROLES.map((role) => <option key={role.id} value={role.id}>{role.label}</option>)}
              </select>
              <span className="mt-2 block text-xs leading-5 text-slate-500">Esta opción agrega las metas expresamente asignadas en la hoja de ruta. No convierte una meta nacional en obligación de todas las entidades.</span>
            </label>

            <label className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.035] p-4">
              <input
                type="checkbox"
                checked={profile.usesAI}
                onChange={(event) => setProfile((prev) => ({ ...prev, usesAI: event.target.checked }))}
                className="mt-1 h-5 w-5 accent-violet-500"
              />
              <span>
                <span className="block font-semibold text-white">Mi entidad desarrolla o usa sistemas de IA</span>
                <span className="mt-1 block text-sm leading-5 text-slate-400">Activa obligaciones asociadas a gestión de riesgos y NTP-ISO/IEC 42001.</span>
              </span>
            </label>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-xs leading-5 text-slate-500">
              Nota: la ENIA establece principalmente roles y metas anuales. Cuando no existe una fecha calendario, la app muestra el hito de planificación o la condición que activa la obligación.
            </p>
            <button
              type="button"
              disabled={!canStart}
              onClick={onStart}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 font-black text-slate-950 shadow-lg shadow-violet-500/20 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
            >
              Iniciar mi ruta <ArrowRight size={19} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
