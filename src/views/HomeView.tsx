import { useMemo, useState } from 'react'
import { ArrowUpRight, Clock, Sigma, TrendingUp } from 'lucide-react'
import type { PageTab } from '../types'
import { dashboardMetrics, milestones, type Metric, type MilestoneCategory } from '../data/resume'
import { AnimatedNumber } from '../components/AnimatedNumber'
import { LogoScrollWheel } from '../components/LogoScrollWheel'
import { BifurcationCanvas } from '../components/BifurcationCanvas'
import { Panel, PanelHead } from '../components/ui'

const MILESTONE_TABS: { key: MilestoneCategory | 'all'; label: string; dot: string }[] = [
  { key: 'all', label: 'All', dot: 'bg-slate-400' },
  { key: 'build', label: 'Build', dot: 'bg-emerald-500' },
  { key: 'research', label: 'Research', dot: 'bg-blue-500' },
  { key: 'recognition', label: 'Recognition', dot: 'bg-amber-500' },
  { key: 'service', label: 'Service', dot: 'bg-indigo-500' },
]

export function HomeView({ onNavigate }: { onNavigate: (tab: PageTab) => void }) {
  return (
    <div className="space-y-10 pb-16">
      <Dashboard onNavigate={onNavigate} />
      <LogoScrollWheel onNavigate={onNavigate} />
      <ChaosLab onNavigate={onNavigate} />
      <Ledger />
    </div>
  )
}

// ── Dashboard ──────────────────────────────────────────────────────────────

function Dashboard({ onNavigate }: { onNavigate: (tab: PageTab) => void }) {
  return (
    <section className="space-y-4" aria-labelledby="dashboard-title">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <span className="text-sm font-mono text-emerald-700 font-bold uppercase tracking-wide block">Dashboard overview</span>
          <h2 id="dashboard-title" className="text-3xl font-bold font-display text-slate-900">Impact at a glance</h2>
        </div>
        <span className="text-sm text-slate-500">Select a tile to see the work behind it.</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {dashboardMetrics.map((m) => (
          <MetricTile key={m.symbol} m={m} onClick={() => onNavigate(m.section)} />
        ))}
      </div>
    </section>
  )
}

function MetricTile({ m, onClick }: { m: Metric; onClick: () => void }) {
  const pending = m.value === null
  return (
    <button
      onClick={onClick}
      className="group text-left bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all cursor-pointer"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-mono font-bold tracking-wider text-slate-500">{m.symbol}</span>
        {pending ? (
          <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
            <Clock className="w-3.5 h-3.5" aria-hidden /> Update pending
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
            <TrendingUp className="w-3.5 h-3.5" aria-hidden /> On record
          </span>
        )}
      </div>
      <div className="mt-4 text-4xl font-bold font-display text-slate-900 num leading-none">
        {pending ? <span className="text-slate-300">—</span> : <AnimatedNumber target={m.value!} prefix={m.prefix} suffix={m.suffix} indian={m.indian} />}
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="text-base font-semibold text-slate-800">{m.label}</span>
        <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-600 transition-colors" />
      </div>
      <div className="text-sm text-slate-500 mt-0.5">{m.note}</div>
    </button>
  )
}

// ── Applied maths ──────────────────────────────────────────────────────────

function ChaosLab({ onNavigate }: { onNavigate: (tab: PageTab) => void }) {
  return (
    <Panel>
      <PanelHead
        eyebrow="Applied mathematics lab"
        title="Where order turns into chaos"
        sub="An interactive version of the bifurcation simulator behind my RSI-India research. Drag the parameter and watch period-doubling give way to chaos."
        right={
          <button
            onClick={() => onNavigate('research')}
            className="text-sm font-medium text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/70 px-3.5 py-2 rounded-lg border border-emerald-200 transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
          >
            <Sigma className="w-4 h-4" />
            <span>Read the research</span>
          </button>
        }
      />
      <div className="rounded-2xl bg-slate-900 p-2 sm:p-4 text-white">
        <BifurcationCanvas />
      </div>
    </Panel>
  )
}

function Ledger() {
  const [tab, setTab] = useState<MilestoneCategory | 'all'>('all')
  const rows = useMemo(() => {
    const list = tab === 'all' ? milestones : milestones.filter((m) => m.category === tab)
    return [...list].sort((a, b) => (a.date < b.date ? 1 : -1))
  }, [tab])

  return (
    <Panel>
      <PanelHead
        eyebrow="Trade log"
        title="Milestone Timeline"
        sub="Every build, paper, award and service commitment, newest first."
        right={
          <div className="inline-flex flex-wrap p-1 rounded-xl bg-slate-100 border border-slate-200">
            {MILESTONE_TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  tab === t.key ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
                {t.label}
              </button>
            ))}
          </div>
        }
      />
      <div className="max-h-[460px] overflow-y-auto pr-1 -mr-1">
        <table className="w-full text-base">
          <thead className="sticky top-0 bg-white">
            <tr className="text-xs font-mono uppercase tracking-wider text-slate-500 text-left">
              <th className="py-2 pr-4 font-semibold w-24">Date</th>
              <th className="py-2 pr-4 font-semibold">Event</th>
              <th className="py-2 font-semibold w-32 hidden sm:table-cell">Type</th>
            </tr>
          </thead>
          <tbody key={tab} className="animate-fade-in">
            {rows.map((m) => {
              const t = MILESTONE_TABS.find((x) => x.key === m.category)!
              return (
                <tr key={m.date + m.label} className="border-t border-slate-100 hover:bg-slate-50/70">
                  <td className="py-3 pr-4 font-mono text-sm text-slate-500 whitespace-nowrap num">{m.date}</td>
                  <td className="py-3 pr-4 text-slate-800">{m.label}</td>
                  <td className="py-3 hidden sm:table-cell">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
                      {t.label}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Panel>
  )
}
