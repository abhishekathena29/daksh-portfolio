import { useState } from 'react'
import { FlaskConical, UserRound } from 'lucide-react'
import { research } from '../data/resume'
import { evidenceBy, type OpenEvidence } from '../data/evidence'
import { EvidenceCard } from '../components/EvidenceCard'
import { BifurcationCanvas } from '../components/BifurcationCanvas'
import { LinkButtons, PageBanner, Panel, PanelHead, Pill } from '../components/ui'

const STATUS_STYLE = {
  published: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  review: 'bg-amber-50 text-amber-800 border-amber-200',
  live: 'bg-blue-50 text-blue-800 border-blue-200',
} as const

export function ResearchView({ onOpen }: { onOpen: OpenEvidence }) {
  const [selected, setSelected] = useState(0)
  const paper = research[selected]
  const records = evidenceBy('research')

  return (
    <div className="space-y-8 pb-16">
      <PageBanner
        tone="blue"
        icon={FlaskConical}
        eyebrow="APPLIED MATHEMATICS & COMPUTATIONAL RESEARCH"
        title="Research: Dynamical Systems, NLP & Economics"
        description="Nonlinear dynamics at RSI-India under the IISc Dean of Mathematics, code-mixed NLP with a University of Cambridge lecturer (published in the Oxford Journal of Student Scholarship), and published work on UPI and financial inclusion."
      >
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {research.map((r, i) => (
            <Pill key={r.title} active={selected === i} onClick={() => setSelected(i)}>
              <span>{r.title.length > 40 ? `${r.title.slice(0, 40)}…` : r.title}</span>
              <span className={`text-[10px] font-mono px-1.5 rounded ${selected === i ? 'bg-blue-500/30 text-blue-200' : 'bg-slate-200 text-slate-600'}`}>
                {r.period.slice(-4)}
              </span>
            </Pill>
          ))}
        </div>
      </PageBanner>

      <div key={selected} className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 shadow-xs space-y-6 animate-fade-in">
        <div className="space-y-2 border-b border-slate-100 pb-5">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500">
            <span className="text-blue-700 font-bold uppercase">{paper.org}</span>
            <span>•</span>
            <span>{paper.period}</span>
            <span>•</span>
            <span className={`border px-2 py-0.5 rounded ${STATUS_STYLE[paper.statusTone]}`}>{paper.status}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">{paper.title}</h2>
        </div>

        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-2">
          <span className="text-xs font-mono text-slate-400 font-semibold uppercase block">Abstract & contribution</span>
          <p className="text-sm text-slate-700 leading-relaxed">{paper.summary}</p>
          {paper.abstract && <p className="text-sm text-slate-700 leading-relaxed pt-2">{paper.abstract}</p>}
        </div>

        {paper.metrics && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {paper.metrics.map((m) => (
              <div key={m.label} className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <div className="text-2xl font-bold font-display text-slate-900">{m.value}</div>
                <div className="text-xs font-medium text-slate-500 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {paper.findings && (
          <div className="space-y-2">
            <span className="text-xs font-mono text-emerald-700 font-semibold uppercase block">Findings & contribution</span>
            <ul className="space-y-2 text-sm text-slate-600 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
              {paper.findings.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {paper.images && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {paper.images.map((img) => {
              const rec = records.find((r) => r.images.some((i) => i.src === img.src))
              return (
                <button
                  key={img.src}
                  onClick={() => rec && onOpen(rec, records)}
                  className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 h-56 cursor-pointer text-left"
                >
                  <img src={img.src} alt={img.caption} className="w-full h-full object-contain bg-slate-900 group-hover:scale-[1.02] transition-transform duration-500" />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent text-white text-xs font-medium p-3 pt-8">{img.caption}</span>
                </button>
              )
            })}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-blue-700 font-semibold uppercase block">Mentorship</span>
            <div className="flex items-start gap-3 text-sm text-slate-600 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
              <UserRound className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
              <span>{paper.mentor ?? 'Independent research'}</span>
            </div>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono text-emerald-700 font-semibold uppercase block">Primary sources</span>
            <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
              <LinkButtons links={paper.links} />
            </div>
          </div>
        </div>

        {selected === 0 && (
          <div className="pt-4 border-t border-slate-100 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono text-blue-700 font-bold uppercase block">Interactive computational lab</span>
                <h3 className="text-lg font-bold font-display text-slate-900">Bifurcation & Lyapunov Visualiser</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">RSI-INDIA 2026</span>
            </div>
            <div className="bg-slate-900 rounded-2xl p-2 sm:p-4">
              <BifurcationCanvas />
            </div>
          </div>
        )}
      </div>

      <Panel>
        <PanelHead title="Research Records & Certificates" sub="Click to inspect the RSI-India certificate and award, the CCIR Cambridge Future Scholar certificate, or the IJSSER publication." />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {records.map((e) => (
            <EvidenceCard key={e.id} item={e} onOpen={(x) => onOpen(x, records)} />
          ))}
        </div>
      </Panel>
    </div>
  )
}
