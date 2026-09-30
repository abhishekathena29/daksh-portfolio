import { GraduationCap, MapPin, Sparkles } from 'lucide-react'
import { courses, education, quickFacts } from '../data/resume'
import { evidenceBy, type OpenEvidence } from '../data/evidence'
import { EvidenceCard } from '../components/EvidenceCard'
import { LinkButtons, PageBanner, Panel, PanelHead } from '../components/ui'

// "Mathematics (Grade A)" / "Biology (A*)" → { name, grade }
function parseSubjects(s: string) {
  return s.split(', ').map((part) => {
    const m = part.match(/^(.*?)\s*\((?:Grade\s+)?([A-E]\*?)\)$/)
    return m ? { name: m[1], grade: m[2] } : { name: part, grade: undefined }
  })
}

export function EducationView({ onOpen }: { onOpen: OpenEvidence }) {
  const certs = evidenceBy('courses')
  const topGrades = education.flatMap((e) => parseSubjects(e.subjects)).filter((s) => s.grade === 'A*').length

  return (
    <div className="space-y-8 pb-16">
      <PageBanner
        icon={GraduationCap}
        eyebrow="ACADEMIC TRAJECTORY & ACCREDITATIONS"
        title="Education & University Coursework"
        description={`Cambridge curriculum at ${education[0].institution.split(',')[0]} with university-level coursework from the University of Pennsylvania, IIT Madras, Yale and Inspirit AI.`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { v: `${topGrades}`, l: 'IGCSE A* grades' },
            { v: 'Distinction', l: 'Cambridge ICE' },
            { v: `${courses.length}`, l: 'Courses & certifications' },
            { v: 'Single year', l: 'AS + A Level Further Maths' },
          ].map((s) => (
            <div key={s.l} className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="text-xl sm:text-2xl font-bold font-display text-slate-900">{s.v}</div>
              <div className="text-xs font-medium text-slate-500 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </PageBanner>

      <div className="space-y-6">
        {education.map((e) => {
          const subjects = parseSubjects(e.subjects)
          return (
            <div
              key={e.level}
              className={`bg-white rounded-3xl border p-6 sm:p-7 shadow-xs space-y-5 transition-all ${e.current ? 'border-emerald-300 ring-4 ring-emerald-50' : 'border-slate-200/80 hover:border-emerald-300'}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-mono text-emerald-700 font-bold uppercase">{e.level}</span>
                  <h2 className="text-2xl font-bold font-display text-slate-900 mt-0.5">{e.institution.split(',')[0]}</h2>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {e.institution.split(', ').slice(1).join(', ')}
                    </span>
                    <span>•</span>
                    <span>{e.period}</span>
                  </div>
                </div>
                {e.current ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    IN PROGRESS
                  </span>
                ) : (
                  <span className="text-xs font-mono bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-bold w-fit">COMPLETED</span>
                )}
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 font-semibold block uppercase mb-2">Subjects{subjects.some((s) => s.grade) ? ' & grades' : ''}</span>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((s) => (
                    <span key={s.name} className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200/70 rounded-xl pl-3 pr-1.5 py-1.5 text-xs text-slate-700">
                      {s.name}
                      {s.grade && (
                        <span className={`font-mono font-bold text-[11px] px-1.5 rounded ${s.grade === 'A*' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}`}>{s.grade}</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <LinkButtons links={e.links} />
            </div>
          )
        })}
      </div>

      <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-5 flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="text-sm">
          <div className="font-semibold text-slate-900">{quickFacts.currently}</div>
          <div className="text-xs text-slate-500 mt-0.5 font-mono">
            {quickFacts.standardisedTesting.map((t) => `${t.exam}: ${t.detail}`).join(' • ')}
          </div>
        </div>
      </div>

      <Panel>
        <PanelHead
          eyebrow="Certified coursework"
          title="University Courses & Certifications"
          sub="Click any certificate card to inspect details and open the original credential."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c) => (
            <EvidenceCard key={c.id} item={c} onOpen={(x) => onOpen(x, certs)} />
          ))}
        </div>
      </Panel>
    </div>
  )
}
