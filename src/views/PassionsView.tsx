import { ChartCandlestick, ExternalLink, Medal, Mountain, PenLine, TrendingUp, Users } from 'lucide-react'
import { clubsAndMun, otherPursuits, sports, trading } from '../data/resume'
import { EVIDENCE, slug, type OpenEvidence } from '../data/evidence'
import { LinkButtons, PageBanner, Panel, PanelHead } from '../components/ui'

const TIER = {
  gold: 'bg-amber-100 text-amber-800 border-amber-300',
  silver: 'bg-slate-100 text-slate-700 border-slate-300',
  bronze: 'bg-orange-100 text-orange-800 border-orange-300',
  national: 'bg-violet-100 text-violet-800 border-violet-300',
} as const

export function PassionsView({ onOpen }: { onOpen: OpenEvidence }) {
  const sportRecords = EVIDENCE.filter((e) => e.category === 'athletics' && e.images.length)

  return (
    <div className="space-y-8 pb-16">
      <PageBanner
        icon={ChartCandlestick}
        eyebrow="BEYOND THE CLASSROOM"
        title="Hobbies & Passions"
        description="When I'm not building or researching, I can be found trading on the stock exchange, on the basketball court, on the athletics field, or in the gym."
      />

      <Trading />

      <Panel>
        <PanelHead
          eyebrow="Athletics"
          title="Sports"
          right={<span className="text-sm font-mono bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold w-fit">Shot put • Basketball • Swimming • Badminton</span>}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sports.map((s) => {
            const rec = sportRecords.find((r) => r.id === `sport-${slug(s.name)}-${s.date}`)
            return (
              <div key={s.name + s.date + s.achievement} className="bg-white rounded-2xl border border-slate-200/80 p-4 flex flex-col justify-between gap-3 hover:shadow-md transition-all">
                {rec?.images[0] && (
                  <button onClick={() => onOpen(rec, sportRecords)} className="group relative -mx-4 -mt-4 h-32 overflow-hidden rounded-t-2xl bg-slate-100 cursor-pointer" aria-label={`Inspect ${s.name} certificate`}>
                    <img src={rec.images[0].src} alt="" loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  </button>
                )}
                <div className="flex items-start justify-between gap-2">
                  <Medal className={`w-6 h-6 shrink-0 ${s.tier === 'gold' ? 'text-amber-500' : s.tier === 'silver' ? 'text-slate-400' : s.tier === 'bronze' ? 'text-orange-500' : 'text-violet-500'}`} />
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${s.tier ? TIER[s.tier] : TIER.silver}`}>{s.achievement}</span>
                </div>
                <div>
                  <h4 className="text-base font-bold font-display text-slate-900 leading-snug">{s.name}</h4>
                  <p className="text-sm font-mono text-slate-500 mt-1">
                    {s.level} • {s.date}
                  </p>
                </div>
                {s.links?.[0] && (
                  <a href={s.links[0].href} target="_blank" rel="noreferrer" className="text-sm font-mono text-emerald-700 hover:text-emerald-800 flex items-center gap-1">
                    {s.links[0].label}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </Panel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Panel>
          <PanelHead eyebrow="Writing & the outdoors" title="Other Pursuits" />
          <div className="space-y-3">
            {otherPursuits.map((p) => (
              <div key={p.title} className="flex items-start justify-between gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                <div className="flex items-start gap-3">
                  {p.type === 'Hiking' ? <Mountain className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> : <PenLine className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />}
                  <div>
                    <span className="text-xs font-mono text-slate-500 font-bold uppercase">{p.type}</span>
                    <h4 className="text-base font-semibold text-slate-900">{p.title}</h4>
                    <span className="text-sm font-mono text-slate-400">{p.date}</span>
                  </div>
                </div>
                {'link' in p && p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-emerald-700 shrink-0" aria-label="Read article">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <PanelHead eyebrow="Leadership" title="Clubs & MUN" />
          <div className="space-y-3">
            {clubsAndMun.map((c) => (
              <div key={c.name} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                <Users className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-base font-semibold text-slate-900">{c.name}</h4>
                    <span className="text-sm font-mono text-slate-400 shrink-0">{c.date}</span>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  )
}

function Trading() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#0b1220] text-white border border-slate-800 shadow-md">
      <div className="absolute inset-0 chart-grid" aria-hidden />
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-7 sm:p-10">
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </span>
            <div>
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block">Main hobby</span>
              <h2 className="text-3xl font-bold font-display">{trading.title}</h2>
            </div>
          </div>
          <p className="text-lg text-slate-200 leading-relaxed">{trading.summary}</p>
          <ul className="space-y-2.5">
            {trading.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-base text-slate-300 leading-relaxed">
                <span className="text-emerald-400 font-mono mt-0.5" aria-hidden>▲</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <LinkButtons links={trading.links} />
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400 uppercase tracking-wider">Toolkit</span>
              <span className="text-slate-500">{trading.since}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {trading.tools.map((t) => (
                <span key={t} className="text-sm font-mono bg-white/5 border border-white/10 text-slate-200 px-3 py-1.5 rounded-lg">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-5 space-y-1">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Portfolio Strategy Challenge</span>
            <p className="text-3xl font-bold font-display text-emerald-300 num">1st place</p>
            <p className="text-sm text-slate-400">HDFC Credelia · Jan–Feb 2024</p>
          </div>
        </div>
      </div>
    </section>
  )
}
