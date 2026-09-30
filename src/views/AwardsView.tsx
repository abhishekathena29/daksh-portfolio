import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Filter, Trophy } from 'lucide-react'
import { honors, otherAwards } from '../data/resume'
import { EVIDENCE, type EvidenceCategory, type OpenEvidence } from '../data/evidence'
import { EvidencePreview } from '../components/EvidenceCard'
import { PageBanner } from '../components/ui'

const FILTERS: { id: 'all' | EvidenceCategory; label: string }[] = [
  { id: 'all', label: 'All records' },
  { id: 'honours', label: 'Primary honours & competitions' },
  { id: 'school-awards', label: 'Awards of excellence' },
  { id: 'academics', label: 'Academic transcripts' },
  { id: 'courses', label: 'Course certificates' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Project documents' },
  { id: 'experience', label: 'Internships' },
  { id: 'athletics', label: 'Athletics' },
  { id: 'service', label: 'Community' },
  { id: 'photos', label: 'Field photos' },
]

export function AwardsView({ onOpen }: { onOpen: OpenEvidence }) {
  const [filter, setFilter] = useState<'all' | EvidenceCategory>('all')
  const items = filter === 'all' ? EVIDENCE : EVIDENCE.filter((e) => e.category === filter)
  const count = (id: 'all' | EvidenceCategory) => (id === 'all' ? EVIDENCE.length : EVIDENCE.filter((e) => e.category === id).length)

  return (
    <div className="space-y-8 pb-16">
      <PageBanner
        icon={Trophy}
        eyebrow="HONOURS, RECOGNITIONS & RECORD ARCHIVE"
        title="Awards, Certifications & Evidence"
        description={`${honors.length + otherAwards.length} honours and awards — from Crest Gold and the Harvard Hackathon national win to Inventure's Awards of Excellence — plus every certificate, transcript, letter and field photograph on file. Click any card to inspect it.`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER BY:</span>
          </div>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                filter === f.id ? 'bg-slate-900 text-white font-semibold shadow-2xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
              }`}
            >
              {f.label} ({count(f.id)})
            </button>
          ))}
        </div>
      </PageBanner>

      <div key={filter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {items.map((e) => (
          <div key={e.id} className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
            <div>
              <button onClick={() => onOpen(e, items)} className="block w-full aspect-[16/10] cursor-pointer relative group overflow-hidden" aria-label={`Inspect ${e.title}`}>
                <EvidencePreview item={e} />
                {e.badge && (
                  <span className="absolute top-2.5 right-2.5 bg-white/95 text-slate-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-xs border border-slate-200">
                    {e.badge}
                  </span>
                )}
              </button>
              <div className="p-5 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-semibold text-emerald-700 uppercase truncate">{e.organization}</span>
                  <span className="text-[11px] font-mono text-slate-400 shrink-0">{e.date}</span>
                </div>
                <h3 onClick={() => onOpen(e, items)} className="text-base font-bold font-display text-slate-900 leading-snug hover:text-emerald-700 cursor-pointer transition-colors">
                  {e.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{e.caption}</p>
              </div>
            </div>
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                {e.links.length ? `${e.links.length} document${e.links.length > 1 ? 's' : ''} on file` : e.images.length ? 'Photograph' : 'Record'}
              </span>
              <button onClick={() => onOpen(e, items)} className="text-xs font-semibold text-slate-700 hover:text-emerald-700 flex items-center gap-1 cursor-pointer">
                <span>Inspect</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
