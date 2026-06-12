import { BookOpen, CalendarClock, Check, ChevronDown, CircleUserRound, Flag, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import TargetTimeline from './TargetTimeline.jsx';

const kindStyles = {
  obligacion: 'border-rose-400/25 bg-rose-400/10 text-rose-200',
  rol: 'border-cyan-400/25 bg-cyan-400/10 text-cyan-200',
  meta: 'border-violet-400/25 bg-violet-400/10 text-violet-200',
  recomendacion: 'border-amber-400/25 bg-amber-400/10 text-amber-200',
  oportunidad: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-200',
};

const kindLabels = {
  obligacion: 'Obligación',
  rol: 'Rol ENIA',
  meta: 'Meta de hoja de ruta',
  recomendacion: 'Recomendación',
  oportunidad: 'Oportunidad',
};

export default function ObligationCard({ item, completed, onToggle }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`quest-shadow rounded-3xl border p-5 transition ${completed ? 'border-emerald-400/25 bg-emerald-500/[.055]' : 'border-white/10 bg-slate-900/75 hover:border-white/20'}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className={`rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${kindStyles[item.kind]}`}>{kindLabels[item.kind]}</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-300">{item.category}</span>
            {item.priority === 'alta' && <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-300"><Flag size={12} /> Prioridad alta</span>}
          </div>
          <h3 className="text-lg font-black leading-6 text-white">{item.title}</h3>
        </div>
        <button
          type="button"
          aria-label={completed ? 'Marcar como pendiente' : 'Marcar como completada'}
          onClick={() => onToggle(item.id)}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border transition ${completed ? 'border-emerald-300 bg-emerald-400 text-slate-950' : 'border-white/10 bg-white/5 text-slate-400 hover:border-emerald-400/50 hover:text-emerald-300'}`}
        >
          <Check size={19} />
        </button>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-300">{item.summary}</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/8 bg-white/[.025] p-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500"><CircleUserRound size={14} /> Responsable</div>
          <p className="mt-1 text-sm font-semibold leading-5 text-slate-200">{item.responsible}</p>
        </div>
        <div className="rounded-2xl border border-white/8 bg-white/[.025] p-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500"><CalendarClock size={14} /> Plazo o hito</div>
          <p className="mt-1 text-sm font-semibold leading-5 text-slate-200">{item.deadline.label}</p>
        </div>
      </div>

      <TargetTimeline targets={item.targets} />

      <button type="button" onClick={() => setExpanded((value) => !value)} className="mt-4 flex w-full items-center justify-between border-t border-white/8 pt-4 text-sm font-semibold text-slate-400 hover:text-white">
        <span>{expanded ? 'Ocultar pasos' : 'Ver pasos sugeridos'}</span>
        <ChevronDown size={18} className={`transition ${expanded ? 'rotate-180' : ''}`} />
      </button>

      {expanded && (
        <div className="mt-3 rounded-2xl bg-slate-950/45 p-4">
          <ul className="space-y-2">
            {item.actions.map((action, index) => (
              <li key={action} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-[10px] font-black text-violet-200">{index + 1}</span>
                {action}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-white/8 pt-3 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1"><BookOpen size={13} /> Fuente ENIA, pp. {item.sourcePages.join(', ')}</span>
            <span className="inline-flex items-center gap-1"><ShieldCheck size={13} /> Verificar con asesoría jurídica institucional</span>
          </div>
        </div>
      )}
    </article>
  );
}
