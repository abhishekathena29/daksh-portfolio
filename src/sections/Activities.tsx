import { useState } from 'react'
import { Dumbbell, Users, Code2, Compass } from 'lucide-react'
import { Card, SectionHeading, Pill, Tag, FilterChips } from '../components/ui'
import { sports, clubsAndMun, skills, otherPursuits } from '../data/resume'
import type { Activity } from '../data/resume'

type Tier = NonNullable<Activity['tier']>

const SPORT_FILTERS: { key: 'all' | Tier; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'gold', label: 'Gold' },
  { key: 'silver', label: 'Silver' },
  { key: 'bronze', label: 'Bronze' },
  { key: 'national', label: 'National' },
]

export function Activities() {
  const [filter, setFilter] = useState<'all' | Tier>('all')
  const filteredSports = filter === 'all' ? sports : sports.filter((s) => s.tier === filter)

  return (
    <div className="page">
      <SectionHeading
        eyebrow="Beyond Academics"
        title="Extra-Curricular Activities"
        description="Competitive athletics, Model UN, school clubs, and the tools I build with."
      />

      <h3 className="subsection-title">
        <Dumbbell size={16} /> Sports
      </h3>
      <FilterChips options={SPORT_FILTERS} active={filter} onChange={setFilter} />
      <div className="sport-grid">
        {filteredSports.map((s, i) => (
          <Card key={i} className="sport-card">
            <div className="sport-card__head">
              <span>{s.name}</span>
              <Pill tone={(s.tier ?? 'default') as never}>{s.achievement}</Pill>
            </div>
            <div className="sport-card__meta">
              {s.level} · {s.date}
            </div>
          </Card>
        ))}
        {filteredSports.length === 0 && <p className="filter-empty">No results in this category.</p>}
      </div>

      <h3 className="subsection-title">
        <Users size={16} /> Clubs & Model UN
      </h3>
      <div className="course-grid">
        {clubsAndMun.map((c) => (
          <Card key={c.name} className="course-card">
            <h4 className="course-card__name">{c.name}</h4>
            <p className="course-card__details">{c.detail}</p>
            <div className="course-card__date">{c.date}</div>
          </Card>
        ))}
      </div>

      <h3 className="subsection-title">
        <Code2 size={16} /> Coding Skills
      </h3>
      <Card>
        <div className="skills-grid">
          <div>
            <span className="detail-panel__k">AI / ML</span>
            <div className="detail-panel__tags">
              {skills.aiml.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
          <div>
            <span className="detail-panel__k">Cloud Platforms</span>
            <div className="detail-panel__tags">
              {skills.cloud.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
          <div>
            <span className="detail-panel__k">Databases</span>
            <div className="detail-panel__tags">
              {skills.databases.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
          <div>
            <span className="detail-panel__k">Programming</span>
            <div className="detail-panel__tags">
              {skills.programming.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <h3 className="subsection-title">
        <Compass size={16} /> Other Interests & Pursuits
      </h3>
      <div className="course-grid">
        {otherPursuits.map((o) => (
          <Card key={o.title} className="course-card">
            <h4 className="course-card__name">{o.title}</h4>
            <div className="course-card__org">
              {o.type} · {o.date}
            </div>
            {'link' in o && o.link && (
              <a className="link-btn" href={o.link} target="_blank" rel="noreferrer">
                Read more
              </a>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
