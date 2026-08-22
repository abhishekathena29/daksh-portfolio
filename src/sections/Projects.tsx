import { Rocket } from 'lucide-react'
import { Card, SectionHeading, Tag } from '../components/ui'
import { projects } from '../data/resume'

export function Projects() {
  return (
    <div className="page">
      <SectionHeading
        eyebrow="Leadership & Ventures"
        title="Projects"
        description="Founder-led products built to solve real problems — financial literacy at scale, and digital-safety for people left behind by it."
      />

      <div className="project-list">
        {projects.map((p) => (
          <Card key={p.name} className="project-card">
            <div className="project-card__head">
              <span className="project-card__icon">
                <Rocket size={20} />
              </span>
              <div>
                <h3 className="project-card__name">{p.name}</h3>
                <div className="project-card__role">
                  {p.role} · {p.period}
                </div>
              </div>
            </div>
            <p className="project-card__tagline">{p.tagline}</p>

            <div className="project-card__highlights">
              {p.highlights.map((h) => (
                <div className="project-card__highlight" key={h.label}>
                  <span className="project-card__highlight-value">{h.value}</span>
                  <span className="project-card__highlight-label">{h.label}</span>
                </div>
              ))}
            </div>

            {p.description.map((d, i) => (
              <p className="project-card__desc" key={i}>
                {d}
              </p>
            ))}

            {p.stack && (
              <div className="project-card__stack">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
