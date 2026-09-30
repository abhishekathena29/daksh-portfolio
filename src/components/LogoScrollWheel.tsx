import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Pause, Play, Sparkles } from 'lucide-react'
import type { PageTab } from '../types'

type Category = 'Research' | 'University' | 'Company' | 'Award Body' | 'Social NGO' | 'Government'

type Entity = {
  id: string
  name: string
  monogram: string
  sub: string
  category: Category
  relation: string
  badge: string
  color: string // monogram tile background
  tone: string // badge classes
  border: string
  target: PageTab
  logo?: string // official logo in /public/media/logos
}

const ENTITIES: Entity[] = [
  { id: 'rsi', logo: '/media/logos/rsi-india.png', name: 'Research Science Institute – India', monogram: 'RSI', sub: 'MIT-affiliated', category: 'Research', relation: 'Selected researcher, <2% acceptance', badge: 'Jun–Jul 2026', color: 'bg-emerald-600', tone: 'bg-emerald-50 text-emerald-800', border: 'border-emerald-200', target: 'research' },
  { id: 'iisc', name: 'Indian Institute of Science', monogram: 'IISc', sub: 'Mathematics', category: 'Research', relation: 'Mentored by Dr. Kaushal Verma, Dean', badge: 'Dynamical systems', color: 'bg-cyan-700', tone: 'bg-cyan-50 text-cyan-800', border: 'border-cyan-200', target: 'research' },
  { id: 'ccir', logo: '/media/logos/ccir.svg', name: 'Cambridge Centre of International Research', monogram: 'CC', sub: 'Cambridge, UK', category: 'Research', relation: 'NLP research — Hinglish POS tagging', badge: 'Published', color: 'bg-[#002f6c]', tone: 'bg-blue-50 text-blue-800', border: 'border-blue-200', target: 'research' },
  { id: 'ijsser', name: 'IJSSER', monogram: 'IJ', sub: 'Journal', category: 'Research', relation: 'UPI & financial inclusion paper', badge: 'Published', color: 'bg-violet-700', tone: 'bg-violet-50 text-violet-800', border: 'border-violet-200', target: 'research' },
  { id: 'nineleaps', logo: '/media/logos/nine-leaps.png', name: 'Nine Leaps / Noviro.ai', monogram: 'NL', sub: 'AI Centre of Excellence', category: 'Company', relation: 'Summer Intern — RAG & LLM tooling', badge: 'Apr–May 2025', color: 'bg-blue-600', tone: 'bg-sky-50 text-sky-800', border: 'border-sky-200', target: 'experience' },
  { id: 'addressmakers', name: 'Address Makers Pvt Ltd', monogram: 'AM', sub: 'Software', category: 'Company', relation: 'Software Dev Intern — production Gen AI bot', badge: 'May–Oct 2025', color: 'bg-indigo-600', tone: 'bg-indigo-50 text-indigo-800', border: 'border-indigo-200', target: 'experience' },
  { id: 'upenn', name: 'University of Pennsylvania', monogram: 'UP', sub: 'via Coursera', category: 'University', relation: 'FinTech specialisation (5 courses)', badge: 'Dec 2025', color: 'bg-[#01256e]', tone: 'bg-blue-50 text-blue-800', border: 'border-blue-200', target: 'education' },
  { id: 'iitm', name: 'IIT Madras', monogram: 'IIT', sub: 'Data Science & AI', category: 'University', relation: 'Certificate course in Data Science & AI', badge: 'Oct–Dec 2025', color: 'bg-amber-700', tone: 'bg-amber-50 text-amber-800', border: 'border-amber-200', target: 'education' },
  { id: 'yale', name: 'Yale University', monogram: 'Y', sub: 'via Coursera', category: 'University', relation: 'Introduction to Psychology', badge: 'Aug 2023', color: 'bg-[#00356b]', tone: 'bg-slate-100 text-slate-800', border: 'border-slate-300', target: 'education' },
  { id: 'inspirit', logo: '/media/logos/inspirit-ai.png', name: 'Inspirit AI', monogram: 'AI', sub: 'Stanford graduates', category: 'Company', relation: 'Moneyball: AI, Sports & Business', badge: 'May–Jun 2024', color: 'bg-[#251d54]', tone: 'bg-purple-50 text-purple-800', border: 'border-purple-200', target: 'education' },
  { id: 'inventure', name: 'Inventure Academy', monogram: 'IA', sub: 'Bangalore', category: 'University', relation: 'Cambridge A Level · CS Topper', badge: 'Grade 12', color: 'bg-orange-600', tone: 'bg-orange-50 text-orange-800', border: 'border-orange-200', target: 'education' },
  { id: 'bsa', name: 'British Science Association', monogram: 'CG', sub: 'Crest Awards', category: 'Award Body', relation: 'Crest Gold for Persifolio', badge: 'Nov 2025', color: 'bg-emerald-600', tone: 'bg-emerald-50 text-emerald-800', border: 'border-emerald-200', target: 'awards' },
  { id: 'harvard', logo: '/media/logos/harvard-hackathon.svg', name: 'Harvard Hackathon', monogram: 'H', sub: '48-hour build', category: 'Award Body', relation: 'National Winner — built Polaris', badge: 'Jan 2026', color: 'bg-red-600', tone: 'bg-rose-50 text-rose-800', border: 'border-rose-200', target: 'awards' },
  { id: 'hdfc', name: 'HDFC Credelia', monogram: 'HC', sub: 'Strategy Challenge', category: 'Company', relation: 'Portfolio Strategy Challenge — 1st place', badge: 'Winner', color: 'bg-red-700', tone: 'bg-rose-50 text-rose-800', border: 'border-rose-200', target: 'awards' },
  { id: 'patent', name: 'Indian Patent Journal', monogram: 'IPJ', sub: 'Govt. of India', category: 'Government', relation: 'Persifolio patent published', badge: '2026', color: 'bg-slate-800', tone: 'bg-slate-100 text-slate-800', border: 'border-slate-300', target: 'projects' },
  { id: 'tribes', name: 'Tribes for Good', monogram: 'TG', sub: 'Empower-Fin', category: 'Social NGO', relation: 'Financial-literacy workshops', badge: 'May 2024', color: 'bg-teal-600', tone: 'bg-teal-50 text-teal-800', border: 'border-teal-200', target: 'activities' },
  { id: 'shades', name: 'Shades of Tomorrow', monogram: 'ST', sub: 'Miyawaki forests', category: 'Social NGO', relation: '100,000+ trees across 6 sites', badge: '₹5,00,000 raised', color: 'bg-lime-700', tone: 'bg-lime-50 text-lime-800', border: 'border-lime-200', target: 'activities' },
]

const CATEGORIES: ('all' | Category)[] = ['all', 'Research', 'University', 'Company', 'Award Body', 'Social NGO', 'Government']
const SPEEDS = { slow: '60s', normal: '42s', fast: '26s' } as const

function Logo({ e }: { e: Entity }) {
  if (e.logo) {
    return (
      <div className="flex items-center gap-2">
        <img src={e.logo} alt={e.name} className={`h-7 w-auto object-contain ${e.id === 'rsi' ? '' : 'max-w-[110px]'}`} />
        {e.id === 'rsi' && (
          <div className="flex flex-col text-left leading-none">
            <span className="text-slate-900 font-bold text-[11px] whitespace-nowrap">RSI-India</span>
            <span className="text-[9px] font-mono text-slate-500 mt-0.5 whitespace-nowrap">{e.sub}</span>
          </div>
        )}
      </div>
    )
  }
  return (
    <div className="flex items-center gap-1.5">
      <div className={`h-6 min-w-6 px-1 rounded-md ${e.color} text-white flex items-center justify-center font-mono font-bold text-[9px] shrink-0`}>
        {e.monogram}
      </div>
      <div className="flex flex-col text-left leading-none">
        <span className="text-slate-900 font-bold text-[11px] whitespace-nowrap">{e.name}</span>
        <span className="text-[9px] font-mono text-slate-500 mt-0.5 whitespace-nowrap">{e.sub}</span>
      </div>
    </div>
  )
}

export function LogoScrollWheel({ onNavigate }: { onNavigate: (tab: PageTab) => void }) {
  const [isPaused, setIsPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [speed, setSpeed] = useState<keyof typeof SPEEDS>('normal')
  const [category, setCategory] = useState<'all' | Category>('all')
  const [viewMode, setViewMode] = useState<'ticker' | 'wheel'>('ticker')
  const [wheelIndex, setWheelIndex] = useState(0)

  const filtered = category === 'all' ? ENTITIES : ENTITIES.filter((e) => e.category === category)
  const marquee = [...filtered, ...filtered]
  const current = filtered[Math.min(wheelIndex, filtered.length - 1)]

  const step = (d: number) => setWheelIndex((i) => (i + d + filtered.length) % filtered.length)

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs space-y-3.5 relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">Affiliated Institutions & Partners</span>
              <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-semibold hidden sm:inline">
                {ENTITIES.length} ENTITIES
              </span>
            </div>
            <p className="text-[11px] text-slate-500">Research institutes, universities, companies & award bodies. Click any to jump to the record.</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex p-0.5 rounded-lg bg-slate-100 border border-slate-200/80 text-[11px] font-mono">
            {(['ticker', 'wheel'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setViewMode(m)}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === m ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {m === 'ticker' ? 'Continuous Wheel' : 'Dial View'}
              </button>
            ))}
          </div>

          {viewMode === 'ticker' && (
            <>
              <button
                onClick={() => setIsPaused((p) => !p)}
                className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                aria-label={isPaused ? 'Resume scroll' : 'Pause scroll'}
              >
                {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-600" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
              <div className="hidden md:flex items-center gap-1 text-[10px] font-mono text-slate-500 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1">
                <span>SPEED:</span>
                {(['slow', 'normal', 'fast'] as const).map((s, i) => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={`px-1 py-0.5 rounded cursor-pointer ${speed === s ? 'bg-slate-900 text-white font-bold' : 'hover:text-slate-900'}`}
                  >
                    {i + 1}x
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] font-mono scrollbar-none">
        <span className="text-slate-400 mr-1 shrink-0">FILTER:</span>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCategory(c)
              setWheelIndex(0)
            }}
            className={`px-2.5 py-0.5 rounded-md whitespace-nowrap cursor-pointer transition-all ${
              category === c ? 'bg-slate-900 text-white font-bold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
            }`}
          >
            {c === 'all' ? `All (${ENTITIES.length})` : c}
          </button>
        ))}
      </div>

      {viewMode === 'ticker' ? (
        <div className="relative overflow-hidden py-1" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div
            className="flex items-center gap-3.5 w-max will-change-transform"
            style={{
              animation: `ticker ${SPEEDS[speed]} linear infinite`,
              animationPlayState: isPaused || hovered ? 'paused' : 'running',
            }}
          >
            {marquee.map((e, i) => (
              <button
                key={`${e.id}-${i}`}
                onClick={() => onNavigate(e.target)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border ${e.border} bg-white hover:bg-slate-50 hover:shadow-xs transition-all duration-200 cursor-pointer group shrink-0 select-none`}
              >
                <Logo e={e} />
                <div className="h-6 w-px bg-slate-200/80 mx-0.5" />
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors whitespace-nowrap">
                    {e.relation}
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className={`text-[9px] font-mono px-1.5 rounded font-medium ${e.tone}`}>{e.badge}</span>
                    <span className="text-[9px] font-mono text-slate-400 whitespace-nowrap">• {e.category}</span>
                  </div>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-emerald-600 transition-colors shrink-0 ml-1" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        current && (
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                Interactive dial: #{wheelIndex + 1} of {filtered.length}
              </span>
              <div className="flex items-center gap-1.5">
                <button onClick={() => step(-1)} className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer shadow-2xs" aria-label="Previous">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={() => step(1)} className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer shadow-2xs" aria-label="Next">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div key={current.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-5 animate-fade-in">
              <div className="flex items-center gap-4">
                {current.logo ? (
                  <div className="w-28 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center p-2 shrink-0">
                    <img src={current.logo} alt={current.name} className="max-w-full max-h-full object-contain" />
                  </div>
                ) : (
                  <div className={`w-14 h-14 rounded-2xl ${current.color} text-white flex items-center justify-center font-mono font-bold text-sm shrink-0`}>
                    {current.monogram}
                  </div>
                )}
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-lg font-bold font-display text-slate-900">{current.name}</h4>
                    <span className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold border border-slate-200">
                      {current.category}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-emerald-700 mt-0.5">{current.relation}</p>
                  <p className="text-xs text-slate-500 font-mono mt-1">{current.sub} · {current.badge}</p>
                </div>
              </div>
              <button
                onClick={() => onNavigate(current.target)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs px-4 py-2 rounded-xl transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
              >
                <span>Inspect associated records</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 mt-4 overflow-x-auto pb-1">
              {filtered.map((e, i) => (
                <button
                  key={e.id}
                  onClick={() => setWheelIndex(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer shrink-0 ${wheelIndex === i ? 'w-6 bg-emerald-600' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                  aria-label={e.name}
                />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  )
}
