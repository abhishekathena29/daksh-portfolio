import { useState } from 'react'
import { Trophy, Medal } from 'lucide-react'
import { Card, SectionHeading, Pill, FilterChips, EvidenceLinks } from '../components/ui'
import { honors, otherAwards } from '../data/resume'
import type { Award } from '../data/resume'

function tierPill(tier?: Award['tier']) {
  if (!tier) return null
  const label = tier === 'national' ? 'National' : tier === 'distinction' ? 'Distinction' : tier[0].toUpperCase() + tier.slice(1)
  const tone = tier === 'gold' ? 'gold' : tier === 'silver' ? 'silver' : tier === 'bronze' ? 'bronze' : tier === 'national' ? 'national' : 'distinction'
  return <Pill tone={tone as never}>{label}</Pill>
}

type Tier = NonNullable<Award['tier']>

const FILTERS: { key: 'all' | Tier; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'gold', label: 'Gold' },
  { key: 'national', label: 'National' },
  { key: 'distinction', label: 'Distinction' },
]

export function Awards() {
  const [filter, setFilter] = useState<'all' | Tier>('all')
  const filtered = filter === 'all' ? honors : honors.filter((h) => h.tier === filter)

  return (
    <div className="page">
      <SectionHeading
        eyebrow="Recognition"
        title="Academic Honors & Awards"
        description="From a national hackathon win to school-level excellence awards across five categories."
      />

      <FilterChips options={FILTERS} active={filter} onChange={setFilter} />

      <div className="award-grid">
        {filtered.map((h) => (
          <Card key={h.title} className="award-card">
            <div className="award-card__head">
              <span className="award-card__icon">
                <Trophy size={18} />
              </span>
              {tierPill(h.tier)}
            </div>
            <h4 className="award-card__title">{h.title}</h4>
            {h.detail && <p className="award-card__detail">{h.detail}</p>}
            <div className="award-card__date">{h.date}</div>
            <EvidenceLinks links={h.links} />
          </Card>
        ))}
        {filtered.length === 0 && <p className="filter-empty">No honors in this category.</p>}
      </div>

      <SectionHeading eyebrow="School Honors" title="Other Awards" />
      <div className="award-grid">
        {otherAwards.map((h) => (
          <Card key={h.title} className="award-card award-card--compact">
            <span className="award-card__icon award-card__icon--sm">
              <Medal size={16} />
            </span>
            <div>
              <h4 className="award-card__title award-card__title--sm">{h.title}</h4>
              {h.detail && <p className="award-card__detail">{h.detail}</p>}
              <div className="award-card__date">{h.date}</div>
              <EvidenceLinks links={h.links} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
