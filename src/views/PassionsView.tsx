import { ChartCandlestick, ExternalLink, Medal, Mountain, PenLine, TrendingUp, Users } from 'lucide-react'
import { clubsAndMun, otherPursuits, sports, trading } from '../data/resume'
import { EVIDENCE, photosFor, slug, type Evidence, type OpenEvidence } from '../data/evidence'
import { AutoCarousel } from '../components/AutoCarousel'
import { LinkButtons, PageBanner, Panel, PanelHead } from '../components/ui'

const TIER = {
  gold: 'bg-amber-100 text-amber-800 border-amber-300',
  silver: 'bg-slate-100 text-slate-700 border-slate-300',
  bronze: 'bg-orange-100 text-orange-800 border-orange-300',
  national: 'bg-violet-100 text-violet-800 border-violet-300',
} as const

const MEDAL = { gold: 'text-amber-500', silver: 'text-slate-400', bronze: 'text-orange-500', national: 'text-violet-500' } as const

export function PassionsView({ onOpen }: { onOpen: OpenEvidence }) {
  const sportRecords = EVIDENCE.filter((e) => e.category === 'athletics' && e.images.length)
  const action = photosFor('sports')

  return (
    <div className="space-y-8 pb-16">
      <PageBanner
        icon={ChartCandlestick}
        eyebrow="BEYOND THE CLASSROOM"
        title="Hobbies & Passions"
        description="When I'm not building or researching, I can be found trading on the stock exchange, on the badminton or basketball court, in the pool, or on the athletics field."
      />

      <Trading onOpen={onOpen} />

      <Panel>
        <PanelHead eyebrow="Athletics" title="Sports" sub="Badminton · Basketball · Swimming · Shot put" />

        {action.length > 0 && (
          <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-2xl overflow-hidden bg-slate-100 mb-6">
            <AutoCarousel photos={action} onOpen={onOpen} />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sports.map((s) => {
            const rec = sportRecords.find((r) => r.id === `sport-${slug(s.name)}-${s.date}`)
            return (
              <div key={s.name + s.date + s.achievement} className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden flex flex-col">
                {rec?.images[0] ? (
                  <button onClick={() => onOpen(rec, sportRecords)} className="group relative aspect-[4/3] overflow-hidden bg-slate-50 cursor-pointer" aria-label={`View ${s.name} certificate`}>
                    <img src={rec.images[0].src} alt="" loading="lazy" className="w-full h-full object-contain p-3 group-hover:scale-[1.03] transition-transform duration-500" />
                  </button>
                ) : (
                  // No certificate on file: a medal tile keeps the grid even
                  <div className="aspect-[4/3] bg-slate-50 flex flex-col items-center justify-center gap-2" aria-hidden>
                    <Medal className={`w-12 h-12 ${s.tier ? MEDAL[s.tier] : 'text-slate-400'}`} />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">{s.achievement}</span>
                  </div>
                )}
                <div className="p-4 flex-1 flex flex-col justify-between gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold font-display text-slate-900 leading-snug">{s.name}</h4>
                      <p className="text-sm font-mono text-slate-500 mt-1">
                        {s.level} • {s.date}
                      </p>
                    </div>
                    <Medal className={`w-5 h-5 shrink-0 ${s.tier ? MEDAL[s.tier] : 'text-slate-400'}`} />
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${s.tier ? TIER[s.tier] : TIER.silver}`}>{s.achievement}</span>
                    {!rec && s.links?.[0] && (
                      <a href={s.links[0].href} target="_blank" rel="noreferrer" className="text-sm font-mono text-emerald-700 hover:text-emerald-800 flex items-center gap-1">
                        {s.links[0].label}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Panel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Panel>
          <PanelHead eyebrow="Writing & the outdoors" title="Other Pursuits" />
          <div className="divide-y divide-slate-100">
            {otherPursuits.map((p) => (
              <div key={p.title} className="flex items-start justify-between gap-3 py-3 first:pt-0 last:pb-0">
                <div className="flex items-start gap-3">
                  {p.type === 'Hiking' ? <Mountain className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" /> : <PenLine className="w-5 h-5 text-indigo-600 mt-0.5 shrink-0" />}
                  <div>
                    <span className="text-xs font-mono text-slate-500 font-bold uppercase">{p.type}</span>
                    <h4 className="text-base font-semibold text-slate-900">{p.title}</h4>
                    <span className="text-sm font-mono text-slate-400">{p.date}</span>
                  </div>
                </div>
                {'link' in p && p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="p-2 rounded-lg text-slate-500 hover:text-emerald-700 shrink-0" aria-label="Read article">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <PanelHead eyebrow="Leadership" title="Clubs & MUN" />
          <div className="divide-y divide-slate-100">
            {clubsAndMun.map((c) => (
              <div key={c.name} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
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

const STRATEGY_CHART: Evidence = {
  id: 'trading-strategy-chart',
  title: 'My trading strategy',
  category: 'photos',
  organization: 'Stock trading',
  date: trading.since,
  caption: 'YESBANK, 3-minute chart — reading structure in the swings.',
  links: [],
  images: [{ src: '/media/trading/yesbank-chart.jpg', caption: 'YESBANK, 3-minute chart' }],
  metadata: [],
}

function Trading({ onOpen }: { onOpen: OpenEvidence }) {
  return (
    <Panel>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </span>
            <div>
              <span className="text-xs font-mono text-emerald-700 font-bold uppercase tracking-widest block">Main hobby · {trading.since}</span>
              <h2 className="text-3xl font-bold font-display text-slate-900">{trading.title}</h2>
            </div>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed">{trading.summary}</p>
          <ul className="space-y-2">
            {trading.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-base text-slate-600 leading-relaxed">
                <span className="text-emerald-600 font-mono text-xs mt-1.5" aria-hidden>▲</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {trading.tools.map((t) => (
              <span key={t} className="text-sm font-mono bg-slate-100 text-slate-700 px-3 py-1 rounded-lg">
                {t}
              </span>
            ))}
          </div>
          <LinkButtons links={trading.links} />
        </div>

        <div className="lg:col-span-5 space-y-4">
          <figure className="space-y-2">
            <button
              onClick={() => onOpen(STRATEGY_CHART)}
              className="theme-fixed group block w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-800 bg-[#0b1220] cursor-pointer"
              aria-label="View my trading strategy chart"
            >
              <img src={STRATEGY_CHART.images[0].src} alt="YESBANK 3-minute candlestick chart" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
            </button>
            <figcaption className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <ChartCandlestick className="w-4 h-4 text-emerald-600" />
              My trading strategy
            </figcaption>
          </figure>
          <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
            <div>
              <p className="text-2xl font-bold font-display text-emerald-700 num">$25,000</p>
              <p className="text-sm text-slate-500">Trading earnings self-invested</p>
            </div>
            <div>
              <p className="text-2xl font-bold font-display text-emerald-700 num">1st place</p>
              <p className="text-sm text-slate-500">HDFC Credelia Portfolio Strategy Challenge</p>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  )
}
