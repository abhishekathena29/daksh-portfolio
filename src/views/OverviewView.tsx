import { useMemo, useState } from 'react'
import { Award, ArrowRight, ArrowUpRight, ChevronRight, Sparkles, Trophy } from 'lucide-react'
import type { PageTab } from '../types'
import { milestones, profile, quickFacts, tickerStats, type MilestoneCategory } from '../data/resume'
import { EVIDENCE, findEvidence, type Evidence, type OpenEvidence } from '../data/evidence'
import { AnimatedNumber } from '../components/AnimatedNumber'
import { LogoScrollWheel } from '../components/LogoScrollWheel'
import { EvidenceCard } from '../components/EvidenceCard'
import { PersifolioSimulator } from '../components/PersifolioSimulator'
import { BifurcationCanvas } from '../components/BifurcationCanvas'
import { ScamSlayerTest } from '../components/ScamSlayerTest'
import { Chip, Panel, PanelHead } from '../components/ui'

const STAT_TONES = ['bg-blue-100 text-blue-700', 'bg-emerald-100 text-emerald-700', 'bg-amber-100 text-amber-700', 'bg-indigo-100 text-indigo-700', 'bg-slate-200 text-slate-700', 'bg-rose-100 text-rose-700']


const FEATURED_IDS = ['honour-crest-gold', 'honour-harvard-hackathon-national-winner', 'honour-cambridge-international-certificate-of-education-distinction']

const MILESTONE_TABS: { key: MilestoneCategory | 'all'; label: string; dot: string }[] = [
  { key: 'all', label: 'All', dot: 'bg-slate-400' },
  { key: 'build', label: 'Build', dot: 'bg-emerald-500' },
  { key: 'research', label: 'Research', dot: 'bg-blue-500' },
  { key: 'recognition', label: 'Recognition', dot: 'bg-amber-500' },
  { key: 'service', label: 'Service', dot: 'bg-indigo-500' },
]

type Sim = 'persifolio' | 'chaos' | 'cyberslayer'

export function OverviewView({ onNavigate, onOpen }: { onNavigate: (tab: PageTab) => void; onOpen: OpenEvidence }) {
  const [sim, setSim] = useState<Sim>('persifolio')
  const [aboutOpen, setAboutOpen] = useState(false)
  const [ledgerTab, setLedgerTab] = useState<MilestoneCategory | 'all'>('all')

  const featured = FEATURED_IDS.map(findEvidence).filter((e): e is Evidence => !!e)
  const archivePreview = EVIDENCE.filter((e) => e.images.length && e.category !== 'photos').slice(0, 6)

  const ledger = useMemo(() => {
    const list = ledgerTab === 'all' ? milestones : milestones.filter((m) => m.category === ledgerTab)
    return [...list].sort((a, b) => (a.date < b.date ? 1 : -1))
  }, [ledgerTab])

  return (
    <div className="space-y-8 pb-16">
      {/* 1. Metrics bar */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">Live portfolio metrics & milestones</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">{profile.location.toUpperCase()} • {profile.grade.toUpperCase()}</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
          {tickerStats.map((s, i) => (
            <button
              key={s.label}
              onClick={() => onNavigate(s.section)}
              className="text-left bg-slate-50/70 hover:bg-white hover:border-emerald-300 rounded-xl p-3.5 border border-slate-100 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${STAT_TONES[i % STAT_TONES.length]}`}>{s.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-600 transition-colors" />
              </div>
              <div className="text-xl font-bold font-display text-slate-900 leading-none mt-2.5">
                {'value' in s ? s.value : <AnimatedNumber target={s.target} prefix={s.prefix} suffix={s.suffix} indian={s.indian} />}
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">{s.unit}</div>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Institutions wheel */}
      <LogoScrollWheel onNavigate={onNavigate} />

      {/* 3. Snapshot + featured distinction */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-mono text-emerald-700 font-bold uppercase block">About me</span>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-0.5">{profile.tagline}</h2>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {profile.qualities.map((q) => (
                <span key={q} className="text-[11px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-md">
                  {q}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-5 space-y-1.5">
            <p className="text-base font-semibold text-slate-900 leading-snug">{profile.about.headline}</p>
            <p className="text-sm text-slate-600">{profile.about.lede}</p>
          </div>

          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            {(aboutOpen ? profile.about.paragraphs : profile.about.paragraphs.slice(0, 2)).map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <button onClick={() => setAboutOpen((o) => !o)} className="text-xs font-mono font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer">
              {aboutOpen ? '− Show less' : `+ Read more (${profile.about.paragraphs.length - 2} more)`}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
            {[
              ['Currently', quickFacts.currently],
              ['Standardised testing', quickFacts.standardisedTesting.map((t) => `${t.exam} — ${t.detail}`).join(', ')],
              ['Building', profile.currentlyBuilding],
              ['Interests', profile.interests.join(' · ')],
            ].map(([k, v]) => (
              <div key={k}>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold block">{k}</span>
                <span className="text-slate-800 font-medium">{v}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
            {[...quickFacts.focusAreas, ...quickFacts.languagesTools].map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('projects')}
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <span>Explore projects & holdings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('awards')}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Inspect all records</span>
            </button>
            <a href={`mailto:${profile.email}`} className="text-xs sm:text-sm text-slate-500 hover:text-slate-900 px-3 py-2 font-medium">
              {profile.email}
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-7 shadow-md flex flex-col justify-between border border-slate-800">
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-widest">Featured distinction</span>
              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">NOV 2025</span>
            </div>
            {featured[0]?.images[0] && (
              <button onClick={() => onOpen(featured[0], featured)} className="block w-full h-40 rounded-xl overflow-hidden border border-slate-700/60 bg-white cursor-pointer" aria-label="Inspect Crest Gold certificate">
                <img src={featured[0].images[0].src} alt="Crest Gold certificate" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
              </button>
            )}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">British Science Association</span>
              <h3 className="text-xl font-bold font-display text-white">Crest Gold Award</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Awarded for <em>Persifolio: Personalised Portfolio & Virtual Stock Investment Simulator</em>.
              </p>
            </div>

            {featured.map((f) => (
              <button
                key={f.id}
                onClick={() => onOpen(f, featured)}
                className="w-full text-left bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 hover:border-emerald-500/50 cursor-pointer group transition-all flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {f.images[0] ? (
                    <img src={f.images[0].src} alt="" className="w-8 h-8 rounded-lg object-cover shrink-0 bg-white" />
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                      <Trophy className="w-4 h-4" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-200 group-hover:text-emerald-300 transition-colors truncate">{f.title}</div>
                    <div className="text-[10px] font-mono text-slate-400">{f.date} · click to inspect</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-300 transition-colors shrink-0" />
              </button>
            ))}
          </div>

          <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Official credentials</span>
            <button onClick={() => onNavigate('awards')} className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer">
              <span>View all {EVIDENCE.length} records</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Milestone ledger */}
      <Panel>
        <PanelHead
          eyebrow="Transaction ledger"
          title="Milestone Timeline"
          sub="Every build, paper, award and service commitment — newest first."
          right={
            <div className="inline-flex flex-wrap p-1 rounded-xl bg-slate-100 border border-slate-200">
              {MILESTONE_TABS.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setLedgerTab(t.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    ledgerTab === t.key ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
                  {t.label}
                </button>
              ))}
            </div>
          }
        />
        <div className="max-h-[420px] overflow-y-auto pr-1 -mr-1">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-white">
              <tr className="text-[10px] font-mono uppercase tracking-wider text-slate-400 text-left">
                <th className="py-2 pr-4 font-semibold w-24">Date</th>
                <th className="py-2 pr-4 font-semibold">Event</th>
                <th className="py-2 font-semibold w-28 hidden sm:table-cell">Type</th>
              </tr>
            </thead>
            <tbody key={ledgerTab} className="animate-fade-in">
              {ledger.map((m) => {
                const tab = MILESTONE_TABS.find((t) => t.key === m.category)!
                return (
                  <tr key={m.date + m.label} className="border-t border-slate-100 hover:bg-slate-50/70">
                    <td className="py-2.5 pr-4 font-mono text-xs text-slate-500 whitespace-nowrap">{m.date}</td>
                    <td className="py-2.5 pr-4 text-slate-800">{m.label}</td>
                    <td className="py-2.5 hidden sm:table-cell">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        <span className={`w-1.5 h-1.5 rounded-full ${tab.dot}`} />
                        {tab.label}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Panel>

      {/* 5. Evidence archive */}
      <Panel>
        <PanelHead
          title="Evidence & Primary Document Archive"
          sub="Certificates, transcripts, letters and publications. Click any card to inspect and open the original."
          right={
            <button
              onClick={() => onNavigate('awards')}
              className="text-xs font-medium text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/70 px-3.5 py-1.5 rounded-lg border border-emerald-200 transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <span>View complete archive ({EVIDENCE.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {archivePreview.map((e) => (
            <EvidenceCard key={e.id} item={e} onOpen={(x) => onOpen(x, archivePreview)} />
          ))}
        </div>
      </Panel>

      {/* 6. Interactive terminal */}
      <Panel>
        <PanelHead
          title="Interactive Systems Terminal"
          sub="Hands-on models of Daksh's work: the Persifolio allocator, the chaos simulator, and the Scam Slayer quiz."
          right={
            <div className="inline-flex flex-wrap p-1 rounded-xl bg-slate-100 border border-slate-200">
              {(
                [
                  ['persifolio', 'Persifolio Allocator'],
                  ['chaos', 'Chaos Simulator'],
                  ['cyberslayer', 'Scam Slayer Quiz'],
                ] as [Sim, string][]
              ).map(([k, label]) => (
                <button
                  key={k}
                  onClick={() => setSim(k)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    sim === k ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          }
        />
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 p-2 sm:p-4 text-white">
          <div className="flex items-center justify-between px-2 pt-1 pb-3 text-xs font-mono text-emerald-400 gap-2">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {sim === 'persifolio' ? 'SIMULATOR: PERSIFOLIO WEALTH ENGINE' : sim === 'chaos' ? 'RESEARCH: BIFURCATION & TRANSIENT DYNAMICS' : 'SECURITY: SCAM SLAYER THREAT QUIZ'}
            </span>
            <span className="text-slate-400 hidden sm:inline">STATUS: LIVE</span>
          </div>
          {sim === 'persifolio' ? <PersifolioSimulator /> : sim === 'chaos' ? <BifurcationCanvas /> : <ScamSlayerTest />}
        </div>
      </Panel>
    </div>
  )
}
