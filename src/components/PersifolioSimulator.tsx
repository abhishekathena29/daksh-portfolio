import { useEffect, useRef, useState } from 'react'
import { ShieldAlert, ArrowUpRight, CheckCircle2, TrendingUp } from 'lucide-react'

type Quote = { symbol: string; name: string; price: number; change: string; up: boolean }

// Illustrative quotes for the demo — not live market data.
const QUOTES: Quote[] = [
  { symbol: 'NIFTY50', name: 'National Index', price: 24850.4, change: '+0.85%', up: true },
  { symbol: 'RELIANCE', name: 'Reliance Ind.', price: 2980.2, change: '+1.20%', up: true },
  { symbol: 'TCS', name: 'Tata Consultancy', price: 4195.0, change: '+0.45%', up: true },
  { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd', price: 1640.1, change: '-0.30%', up: false },
  { symbol: 'INFY', name: 'Infosys Ltd', price: 1890.65, change: '+1.65%', up: true },
]

function allocationFor(score: number) {
  if (score <= 3) return { equities: 25, debt: 55, gold: 15, cash: 5, profile: 'Conservative — capital preservation' }
  if (score <= 7) return { equities: 60, debt: 25, gold: 10, cash: 5, profile: 'Balanced — core & growth' }
  return { equities: 85, debt: 5, gold: 5, cash: 5, profile: 'Aggressive — equity growth' }
}

export function PersifolioSimulator() {
  const [riskScore, setRiskScore] = useState(6)
  const [cash, setCash] = useState(100000)
  const [holdings, setHoldings] = useState<Record<string, number>>({})
  const [selected, setSelected] = useState<Quote>(QUOTES[0])
  const [notice, setNotice] = useState<string | null>(null)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const allocation = allocationFor(riskScore)
  const held = holdings[selected.symbol] ?? 0

  const flash = (msg: string) => {
    setNotice(msg)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setNotice(null), 3500)
  }

  const trade = (side: 'BUY' | 'SELL') => {
    const px = Math.round(selected.price)
    if (side === 'BUY') {
      if (cash < px) return flash('Insufficient virtual balance for this order')
      setCash((c) => c - px)
      setHoldings((h) => ({ ...h, [selected.symbol]: held + 1 }))
      flash(`Executed BUY 1 × ${selected.symbol} at ₹${selected.price.toFixed(2)}`)
    } else {
      if (held === 0) return flash(`No ${selected.symbol} units to sell`)
      setCash((c) => c + px)
      setHoldings((h) => ({ ...h, [selected.symbol]: held - 1 }))
      flash(`Executed SELL 1 × ${selected.symbol} at ₹${selected.price.toFixed(2)}`)
    }
  }

  const bars = [
    { key: 'Eq', value: allocation.equities, color: 'bg-emerald-500' },
    { key: 'Debt', value: allocation.debt, color: 'bg-blue-500' },
    { key: 'Gold', value: allocation.gold, color: 'bg-amber-400' },
    { key: 'Cash', value: allocation.cash, color: 'bg-slate-400' },
  ]

  return (
    <div className="w-full bg-[#0c1017] border border-emerald-500/30 rounded-2xl p-5 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">Persifolio // Interactive simulation engine</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">Risk Profiling & Virtual Paper Trading</h3>
          <p className="text-xs text-slate-400 font-mono mt-0.5">4,000+ users onboarded • Flutter + Firebase • Market data APIs</p>
        </div>
        <div className="bg-[#121924] border border-white/10 rounded-xl px-4 py-2 font-mono text-right">
          <span className="text-[12px] text-slate-400 block uppercase">Virtual balance</span>
          <span className="text-base font-bold text-emerald-400">₹{cash.toLocaleString('en-IN')}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-[#10151f] rounded-xl p-4 border border-white/5 space-y-4">
            <div className="flex justify-between items-center font-mono">
              <span className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-emerald-400" />
                RISK SCORE
              </span>
              <span className="text-lg font-bold text-emerald-400 bg-emerald-950/70 px-2.5 py-0.5 rounded border border-emerald-500/30">{riskScore} / 10</span>
            </div>
            <div>
              <input
                type="range"
                min={1}
                max={10}
                value={riskScore}
                onChange={(e) => setRiskScore(parseInt(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer"
                aria-label="Risk score"
              />
              <div className="flex justify-between text-[12px] font-mono text-slate-400 mt-1.5">
                <span>1 · Low risk</span>
                <span>5 · Moderate</span>
                <span>10 · Aggressive</span>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-xs font-mono text-emerald-300 flex items-center justify-between gap-2">
              <span>MAPPED STRATEGY:</span>
              <span className="font-bold text-right">{allocation.profile}</span>
            </div>
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-slate-400 block">SUGGESTED DIVERSIFICATION</span>
              <div className="w-full h-3 rounded-full overflow-hidden flex bg-slate-800">
                {bars.map((b) => (
                  <div key={b.key} style={{ width: `${b.value}%` }} className={`${b.color} transition-all duration-300`} />
                ))}
              </div>
              <div className="grid grid-cols-4 gap-2 pt-1 font-mono text-xs">
                {bars.map((b) => (
                  <div key={b.key} className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-xs ${b.color}`} />
                    <span className="text-slate-300">
                      {b.key}: <strong className="text-white">{b.value}%</strong>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#0b0e14] border border-white/5 rounded-xl p-3 text-xs font-mono text-slate-400 space-y-1">
            <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>RECOGNITION</span>
            </div>
            <p className="text-xs leading-relaxed">
              Patent filed and published in the Indian Patent Journal. Crest Gold (British Science Association). Adopted by schools in Odisha, supported by a Member of the Rajya Sabha.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 bg-[#10151f] rounded-xl p-4 border border-white/5 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center font-mono text-xs mb-3 gap-2">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                VIRTUAL MARKET
              </span>
              <span className="text-amber-300 bg-amber-950/50 px-2 py-0.5 rounded text-[12px] border border-amber-500/20">DEMO QUOTES</span>
            </div>
            <div className="space-y-1.5">
              {QUOTES.map((q) => {
                const isSel = selected.symbol === q.symbol
                return (
                  <button
                    key={q.symbol}
                    onClick={() => setSelected(q)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-lg border font-mono text-xs transition-all cursor-pointer ${
                      isSel ? 'bg-emerald-950/40 border-emerald-500/50 text-white' : 'bg-[#0d121a] border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div className="text-left">
                      <span className="font-bold text-slate-200 block">
                        {q.symbol}
                        {holdings[q.symbol] ? <span className="ml-2 text-emerald-400 font-normal">×{holdings[q.symbol]}</span> : null}
                      </span>
                      <span className="text-[12px] text-slate-400">{q.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-white block">₹{q.price.toFixed(2)}</span>
                      <span className={`text-[12px] ${q.up ? 'text-emerald-400' : 'text-rose-400'}`}>{q.change}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">SELECTED:</span>
              <span className="text-white font-bold">
                {selected.symbol} (₹{selected.price.toFixed(2)}) · held {held}
              </span>
            </div>
            {notice && (
              <div className="p-2 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-xs animate-fade-in flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{notice}</span>
              </div>
            )}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => trade('BUY')}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-lg text-xs font-mono transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>PAPER BUY 1</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => trade('SELL')}
                className="w-full bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 font-bold py-2.5 rounded-lg text-xs font-mono transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                PAPER SELL 1
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
