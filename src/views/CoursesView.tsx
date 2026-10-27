import { BadgeCheck } from 'lucide-react'
import { courses } from '../data/resume'
import { evidenceBy, type OpenEvidence } from '../data/evidence'
import { EvidenceCard } from '../components/EvidenceCard'
import { PageBanner, Panel, PanelHead } from '../components/ui'

export function CoursesView({ onOpen }: { onOpen: OpenEvidence }) {
  const certs = evidenceBy('courses')
  const institutions = new Set(courses.map((c) => c.org.split(' (')[0].replace(/^Coursera \/ /, '')))

  return (
    <div className="space-y-8 pb-16">
      <PageBanner
        tone="blue"
        icon={BadgeCheck}
        eyebrow="CERTIFIED COURSEWORK"
        title="University Courses & Certifications"
        description="University-level coursework beyond the school curriculum, from the University of Pennsylvania, IIT Madras, Yale, Inspirit AI and Hexaurum Learning."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { v: `${courses.length}`, l: 'Courses & certifications' },
            { v: `${institutions.size}`, l: 'Institutions' },
            { v: `${courses.filter((c) => c.org.includes('Pennsylvania')).length}`, l: 'UPenn FinTech courses' },
            { v: 'Gr 9–11', l: 'Taken alongside school' },
          ].map((s) => (
            <div key={s.l} className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="text-xl sm:text-2xl font-bold font-display text-slate-900">{s.v}</div>
              <div className="text-xs font-medium text-slate-500 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </PageBanner>

      <Panel>
        <PanelHead
          eyebrow="Credentials"
          title="All Certificates"
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
