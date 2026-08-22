import { FlaskConical, User, ExternalLink } from 'lucide-react'
import { Card, SectionHeading, StatusBadge } from '../components/ui'
import { research } from '../data/resume'

export function Research() {
  return (
    <div className="page">
      <SectionHeading
        eyebrow="Research"
        title="Research Experience"
        description="Working at the intersection of nonlinear dynamics, NLP, and financial-inclusion economics — under mentorship from IISc and Cambridge."
      />

      <div className="research-list">
        {research.map((r) => {
          const withLink = r as typeof r & { link?: string }
          return (
            <Card key={r.title} className="research-card">
              <div className="research-card__head">
                <span className="research-card__icon">
                  <FlaskConical size={18} />
                </span>
                <StatusBadge tone={r.statusTone}>{r.status}</StatusBadge>
              </div>
              <h3 className="research-card__title">{r.title}</h3>
              <div className="research-card__org">{r.org}</div>
              <div className="research-card__period">{r.period}</div>
              {r.mentor && (
                <div className="research-card__mentor">
                  <User size={13} /> {r.mentor}
                </div>
              )}
              <p className="research-card__summary">{r.summary}</p>
              {withLink.link && (
                <a className="link-btn" href={withLink.link} target="_blank" rel="noreferrer">
                  Read publication <ExternalLink size={14} />
                </a>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}
