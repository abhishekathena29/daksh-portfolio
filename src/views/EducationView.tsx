import { GraduationCap, MapPin, Sparkles, Wrench } from 'lucide-react'
import type { PageTab } from '../types'
import { courses, education, quickFacts, skills, type Subject } from '../data/resume'
import { LinkButtons, PageBanner, Panel, PanelHead } from '../components/ui'

const QUALIFICATION_STYLE = {
  'A Level': 'bg-indigo-50 text-indigo-800 border-indigo-200',
  'AS Level': 'bg-amber-50 text-amber-800 border-amber-200',
} as const

function SubjectChip({ s }: { s: Subject }) {
  return (
    <span className="inline-flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 rounded-xl pl-3.5 pr-2 py-2 text-base text-slate-800">
      {s.name}
      {s.qualification && (
        <span className={`text-xs font-mono font-semibold px-1.5 py-0.5 rounded border ${QUALIFICATION_STYLE[s.qualification]}`}>{s.qualification}</span>
      )}
      {s.grade && (
        <span className={`font-mono font-bold text-sm px-2 py-0.5 rounded-md ${s.grade === 'A*' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}`}>{s.grade}</span>
      )}
    </span>
  )
}

export function EducationView({ onNavigate }: { onNavigate: (tab: PageTab) => void }) {
  const topGrades = education
    .filter((e) => e.level === 'IGCSE')
    .flatMap((e) => e.subjects)
    .filter((s) => s.grade === 'A*').length

  return (
    <div className="space-y-8 pb-16">
      <PageBanner
        icon={GraduationCap}
        eyebrow="ACADEMIC TRAJECTORY & ACCREDITATIONS"
        title="Education & Grades"
        description={`Cambridge curriculum at ${education[0].institution.split(',')[0]}: A Level, AS Level and IGCSE results.`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { v: `${topGrades}`, l: 'IGCSE A* grades' },
            { v: `${education[0].subjects.length}`, l: 'A & AS Level subjects in progress' },
            { v: 'Distinction', l: 'Cambridge ICE' },
            { v: `${courses.length}`, l: 'Courses & certifications' },
          ].map((s) => {
            const tile = (
              <>
                <div className="text-xl sm:text-2xl font-bold font-display text-slate-900">{s.v}</div>
                <div className="text-xs font-medium text-slate-500 mt-1">{s.l}</div>
              </>
            )
            // The coursework count links to its own section
            return s.l.startsWith('Courses') ? (
              <button
                key={s.l}
                onClick={() => onNavigate('courses')}
                className="text-left bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:border-emerald-300 transition-colors cursor-pointer"
              >
                {tile}
              </button>
            ) : (
              <div key={s.l} className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                {tile}
              </div>
            )
          })}
        </div>
      </PageBanner>

      <div className="space-y-6">
        {education.map((e) => {
          const subjects = e.subjects
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
                <span className="text-sm font-mono text-slate-500 font-semibold block uppercase mb-3">Subjects{subjects.some((s) => s.grade) ? ' & grades' : ''}</span>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((s) => (
                    <SubjectChip key={s.name} s={s} />
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
        <PanelHead eyebrow="Toolkit" title="Technical Skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(
            [
              ['AI / ML', skills.aiml],
              ['Programming', skills.programming],
              ['Cloud', skills.cloud],
              ['Databases', skills.databases],
            ] as [string, string[]][]
          ).map(([label, list]) => (
            <div key={label}>
              <span className="text-sm font-mono text-slate-500 uppercase tracking-wider font-semibold flex items-center gap-1.5 mb-2">
                <Wrench className="w-4 h-4" /> {label}
              </span>
              <div className="flex flex-wrap gap-2">
                {list.map((s) => (
                  <span key={s} className="text-sm font-mono bg-slate-900 text-emerald-300 px-3 py-1.5 rounded-lg">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  )
}
