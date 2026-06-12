export default function TargetTimeline({ targets }) {
  if (!targets) return null;
  const entries = Object.entries(targets);
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-4 rounded-2xl border border-white/8 bg-slate-950/35 p-3">
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="font-semibold uppercase tracking-wider text-slate-400">Metas acumuladas</span>
        <span className="text-cyan-300">2026–2030</span>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5">
        {entries.map(([year, value]) => (
          <div key={year} className={`rounded-xl border px-2 py-2 text-center ${Number(year) === currentYear ? 'border-cyan-400/50 bg-cyan-400/10' : 'border-white/8 bg-white/[.025]'}`}>
            <div className="text-[11px] font-bold text-slate-500">{year}</div>
            <div className="mt-1 text-xs font-semibold leading-4 text-slate-200">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
