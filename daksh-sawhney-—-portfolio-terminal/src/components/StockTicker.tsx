import { TICKER_ITEMS } from '../data/portfolioData';

export default function StockTicker() {
  // Duplicate array for seamless infinite loop
  const displayItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="w-full bg-[#0a0d11] border-y border-white/5 py-2.5 overflow-hidden select-none relative z-20">
      <div className="flex items-center">
        {/* Static badge on the left */}
        <div className="hidden sm:flex items-center gap-2 pl-4 pr-3 py-0.5 border-r border-white/10 text-[11px] font-mono shrink-0 bg-[#0a0d11] z-10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-slate-400 uppercase tracking-widest font-semibold">TICKER</span>
        </div>

        {/* Marquee track */}
        <div className="flex items-center space-x-8 animate-ticker whitespace-nowrap pl-4">
          {displayItems.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="inline-flex items-center space-x-2 text-xs font-mono group cursor-default"
            >
              <span className="text-slate-400 font-medium group-hover:text-slate-200 transition-colors">
                {item.label}
              </span>
              <span className="text-emerald-400 font-bold bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/20">
                {item.value}
              </span>
              <span className="text-slate-600 text-xs">/</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
