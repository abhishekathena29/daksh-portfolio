import { useState } from 'react'
import { ArrowDown, FileDown, Mail, MapPin } from 'lucide-react'
import type { PageTab } from '../types'
import { profile, quickFacts } from '../data/resume'

// Full-width landing that sits above the dashboard shell on the home page.
export function Landing({ onNavigate }: { onNavigate: (tab: PageTab) => void }) {
  const toDashboard = () => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden min-h-[100svh] flex flex-col">
        <CandlestickBackdrop />

        <header className="relative max-w-6xl w-full mx-auto px-6 sm:px-10 py-6 flex items-center justify-between">
          <span className="font-display font-bold text-lg text-slate-900">{profile.name}</span>
          <nav className="flex items-center gap-1 sm:gap-2 text-sm font-medium">
            <a href="/Daksh-Sawhney-Resume.pdf" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50">
              <FileDown className="w-4 h-4" /> Résumé
            </a>
            <button onClick={() => onNavigate('contact')} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-50 cursor-pointer">
              <Mail className="w-4 h-4" /> Contact
            </button>
          </nav>
        </header>

        <div className="relative flex-1 max-w-6xl w-full mx-auto px-6 sm:px-10 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <p className="text-lg text-slate-500">Hi, I'm</p>
            <h1 className="text-5xl sm:text-7xl font-bold font-display tracking-tight text-slate-900 leading-[1.02]">{profile.name}</h1>
            <p className="text-xl sm:text-2xl font-display text-emerald-700">{profile.tagline}</p>
            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-xl">{profile.about.headline}</p>
            <p className="flex items-center gap-1.5 text-base text-slate-500">
              <MapPin className="w-4 h-4 text-emerald-600" />
              {profile.grade} · {profile.school}, {profile.location}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={toDashboard}
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl text-base flex items-center gap-2 transition-colors cursor-pointer"
              >
                View dashboard
                <ArrowDown className="w-4 h-4" />
              </button>
              <a
                href="/Daksh-Sawhney-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-medium px-6 py-3 rounded-xl text-base flex items-center gap-2 transition-colors"
              >
                <FileDown className="w-4 h-4 text-emerald-600" />
                Résumé
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <Portrait />
          </div>
        </div>

        <button onClick={toDashboard} className="relative mx-auto mb-8 flex flex-col items-center gap-1 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-slate-700 cursor-pointer">
          Scroll
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </section>

      <About />
    </div>
  )
}

function Portrait() {
  const [failed, setFailed] = useState(!profile.photo)
  return (
    <div className="w-64 sm:w-80 lg:w-full lg:max-w-sm aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 shadow-xl ring-1 ring-slate-200">
      {failed ? (
        <div className="w-full h-full flex items-center justify-center text-7xl font-bold font-display text-emerald-600">{profile.initials}</div>
      ) : (
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          onError={() => setFailed(true)}
          className="w-full h-full object-cover object-[35%_center]"
        />
      )}
    </div>
  )
}

function About() {
  return (
    <section className="border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-5">
          <span className="text-sm font-mono text-emerald-700 font-bold uppercase tracking-wide block">About me</span>
          <p className="text-2xl font-display text-slate-900 leading-snug">{profile.about.lede}</p>
          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            {profile.about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-6 lg:border-l lg:border-slate-100 lg:pl-10">
          {[
            ['Currently', quickFacts.currently],
            ['Building', profile.currentlyBuilding],
            ['Interests', profile.interests.join(' · ')],
          ].map(([k, v]) => (
            <div key={k}>
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold block">{k}</span>
              <span className="text-base text-slate-900 font-medium">{v}</span>
            </div>
          ))}
          <div>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold block mb-2">In a few words</span>
            <div className="flex flex-wrap gap-2">
              {profile.qualities.map((q) => (
                <span key={q} className="text-sm text-slate-700 bg-slate-50 border border-slate-200 px-3 py-1 rounded-lg">
                  {q}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

// Soft candlestick chart behind the landing. Ornamental only, not real data.
const CANDLES = (() => {
  let price = 40
  let seed = 11
  const rand = () => (seed = (seed * 9301 + 49297) % 233280) / 233280
  return Array.from({ length: 48 }, (_, i) => {
    const open = price
    const close = Math.max(10, Math.min(150, open + (rand() - 0.38) * 12))
    const high = Math.max(open, close) + rand() * 5
    const low = Math.min(open, close) - rand() * 5
    price = close
    return { x: i * 25 + 12, open, close, high, low }
  })
})()

// Smooth trend line through the closes (Catmull-Rom → cubic Bézier).
const TREND = (() => {
  const pts = CANDLES.map((c) => [c.x + 5, 200 - (c.open + c.close) / 2] as const)
  let d = `M ${pts[0][0]} ${pts[0][1]}`
  for (let i = 0; i < pts.length - 1; i++) {
    const [p0, p1, p2, p3] = [pts[i - 1] ?? pts[i], pts[i], pts[i + 1], pts[i + 2] ?? pts[i + 1]]
    d += ` C ${p1[0] + (p2[0] - p0[0]) / 6} ${p1[1] + (p2[1] - p0[1]) / 6}, ${p2[0] - (p3[0] - p1[0]) / 6} ${p2[1] - (p3[1] - p1[1]) / 6}, ${p2[0]} ${p2[1]}`
  }
  return d
})()

function CandlestickBackdrop() {
  const y = (v: number) => 200 - v
  return (
    <svg
      viewBox="0 0 1210 210"
      preserveAspectRatio="none"
      className="absolute inset-x-0 bottom-0 h-[70%] w-full pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_35%,black_75%,transparent),linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [mask-composite:intersect]"
      aria-hidden
    >
      <defs>
        <linearGradient id="trend-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${TREND} L ${CANDLES.at(-1)!.x + 5} 210 L ${CANDLES[0].x + 5} 210 Z`} fill="url(#trend-fill)" />
      {CANDLES.map((c) => {
        const up = c.close >= c.open
        const color = up ? '#10b981' : '#f43f5e'
        return (
          <g key={c.x} opacity={0.16}>
            <line x1={c.x + 5} x2={c.x + 5} y1={y(c.high)} y2={y(c.low)} stroke={color} strokeWidth={1.2} />
            <rect x={c.x} width={10} y={y(Math.max(c.open, c.close))} height={Math.max(2, Math.abs(c.close - c.open))} rx={2} fill={color} />
          </g>
        )
      })}
      <path d={TREND} fill="none" stroke="#10b981" strokeOpacity={0.35} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
    </svg>
  )
}
