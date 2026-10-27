import { useState } from 'react'
import { Trophy } from 'lucide-react'
import { honors, otherAwards } from '../data/resume'
import { EVIDENCE, type OpenEvidence } from '../data/evidence'
import { EvidencePreview } from '../components/EvidenceCard'
import { PageBanner } from '../components/ui'

type Filter = 'all' | 'honours' | 'school-awards'

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All awards' },
  { id: 'honours', label: 'Honours & competitions' },
  { id: 'school-awards', label: 'Awards of excellence' },
]

// Awards only; certificates for courses, research and sport live in their own sections.
const AWARDS = EVIDENCE.filter((e) => e.category === 'honours' || e.category === 'school-awards')

export function AwardsView({ onOpen }: { onOpen: OpenEvidence }) {
  const [filter, setFilter] = useState<Filter>('all')
  const items = filter === 'all' ? AWARDS : AWARDS.filter((e) => e.category === filter)
  const count = (id: Filter) => (id === 'all' ? AWARDS.length : AWARDS.filter((e) => e.category === id).length)

  return (
    <div className="space-y-8 pb-16">
      <PageBanner
        icon={Trophy}
        eyebrow="HONOURS & RECOGNITION"
        title="Awards"
        description={`${honors.length + otherAwards.length} honours and awards, from RSI-India, HackHarvard India 1st place and Crest Gold to Inventure's Awards of Excellence. Select any card to view the certificate.`}
      >
        <div className="flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
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
          <div key={e.id} className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:border-emerald-300 transition-colors duration-300">
            <div>
              <button onClick={() => onOpen(e, items)} className="block w-full aspect-[16/10] cursor-pointer relative group overflow-hidden" aria-label={`Inspect ${e.title}`}>
                <EvidencePreview item={e} />
                {e.badge && (
                  <span className="absolute top-2.5 right-2.5 bg-white/95 text-slate-800 text-[12px] font-mono font-bold px-2 py-0.5 rounded shadow-xs border border-slate-200">
                    {e.badge}
                  </span>
                )}
              </button>
              <div className="p-5 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-semibold text-emerald-700 uppercase truncate">{e.organization}</span>
                  <span className="text-xs font-mono text-slate-400 shrink-0">{e.date}</span>
                </div>
                <h3 onClick={() => onOpen(e, items)} className="text-lg font-bold font-display text-slate-900 leading-snug hover:text-emerald-700 cursor-pointer transition-colors">
                  {e.title}
                </h3>
                {e.caption !== e.title && <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{e.caption}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
