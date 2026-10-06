import { TrendingUp } from 'lucide-react'
import { tickerTape } from '../data/resume'

// Exchange-style tape of headline achievements. Duplicated once so the
// marquee loops seamlessly at -50%.
export function StockTicker() {
  const row = [...tickerTape, ...tickerTape]
  return (
    <div className="bg-[#0b1220] text-slate-200 border-b border-slate-800 overflow-hidden" aria-label="Achievement ticker">
      <div className="flex w-max animate-ticker">
        {row.map((t, i) => (
          <span key={i} aria-hidden={i >= tickerTape.length} className="flex items-center gap-2 px-5 py-2 text-xs font-mono whitespace-nowrap border-r border-slate-800">
            <span className="font-bold text-white">{t.symbol}</span>
            <span className="num text-emerald-400 font-semibold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" aria-hidden />
              {t.value}
            </span>
            <span className="text-slate-400">{t.note}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
