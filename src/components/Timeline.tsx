import { useMemo, useState } from 'react'
import { milestones, type MilestoneCategory } from '../data/resume'

const TABS: { key: MilestoneCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'build', label: 'Build' },
  { key: 'research', label: 'Research' },
  { key: 'recognition', label: 'Recognition' },
  { key: 'service', label: 'Service' },
]

export function Timeline() {
  const [tab, setTab] = useState<MilestoneCategory | 'all'>('all')

  const grouped = useMemo(() => {
    const filtered =
      tab === 'all' ? milestones : milestones.filter((m) => m.category === tab)
    const sorted = [...filtered].sort((a, b) => (a.date < b.date ? 1 : -1))
    const byYear = new Map<string, typeof sorted>()
    for (const m of sorted) {
      const arr = byYear.get(m.year) ?? []
      arr.push(m)
      byYear.set(m.year, arr)
    }
    return Array.from(byYear.entries())
  }, [tab])

  return (
    <div className="timeline-card">
      <div className="timeline-card__head">
        <div>
          <h3 className="timeline-card__title">Journey</h3>
          <p className="timeline-card__sub">Milestones across ventures, research, recognition & service</p>
        </div>
        <div className="tab-group">
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`tab-group__btn ${tab === t.key ? 'tab-group__btn--active' : ''}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="timeline">
        {grouped.map(([year, items]) => (
          <div className="timeline__year-group" key={year}>
            <div className="timeline__year">{year}</div>
            <div className="timeline__items">
              {items.map((m, i) => (
                <div className={`timeline__item timeline__item--${m.category}`} key={i}>
                  <span className="timeline__dot" />
                  <span className="timeline__text">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {grouped.length === 0 && <div className="timeline__empty">No milestones in this category yet.</div>}
      </div>
    </div>
  )
}
