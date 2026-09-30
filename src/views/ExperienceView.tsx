import { Briefcase, Building2, Calendar, UserRound } from 'lucide-react'
import type { PageTab } from '../types'
import { internships } from '../data/resume'
import { evidenceBy, type OpenEvidence } from '../data/evidence'
import { EvidenceCard } from '../components/EvidenceCard'
import { LogoScrollWheel } from '../components/LogoScrollWheel'
import { LinkButtons, PageBanner, Panel, PanelHead } from '../components/ui'

export function ExperienceView({ onNavigate, onOpen }: { onNavigate: (tab: PageTab) => void; onOpen: OpenEvidence }) {
  return (
    <div className="space-y-8 pb-16">
      <PageBanner
        tone="indigo"
        icon={Briefcase}
        eyebrow="INDUSTRY INTERNSHIPS"
        title="Professional Experience & Engineering"
        description="Building software in production: web development and RAG/LLM tooling at the Nine Leaps AI Centre of Excellence, and a customer-facing Gen AI chatbot at Address Makers."
      />

      <LogoScrollWheel onNavigate={onNavigate} />

      <div className="space-y-6">
        {internships.map((exp) => {
          const [company, unit] = exp.company.split(' — ')
          return (
            <div key={exp.company} className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-8 shadow-xs space-y-5 hover:border-emerald-300 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-emerald-700 font-bold mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{company}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500">Internship · {exp.location}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">{exp.role}</h3>
                  {unit && <p className="text-sm text-slate-500 mt-0.5">{unit}</p>}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold block">Core deliverables & technical implementation</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                  {exp.points.map((p) => (
                    <div key={p} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-50/60 border border-emerald-200/70 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {exp.contact && (
                  <div className="flex items-center gap-2">
                    <UserRound className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-emerald-800 font-bold uppercase block">Supervisor</span>
                      <span className="text-sm font-semibold text-emerald-950">{exp.contact}</span>
                    </div>
                  </div>
                )}
                <LinkButtons links={exp.links} />
              </div>
            </div>
          )
        })}
      </div>

      <Panel>
        <PanelHead title="Internship Certificates & Recommendations" sub="Click to inspect completion certificates and letters of recommendation." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {evidenceBy('experience').map((e, _i, all) => (
            <EvidenceCard key={e.id} item={e} onOpen={(x) => onOpen(x, all)} />
          ))}
        </div>
      </Panel>
    </div>
  )
}
