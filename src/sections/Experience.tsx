import { Briefcase, HeartHandshake, User } from 'lucide-react'
import { Card, SectionHeading } from '../components/ui'
import { internships, volunteering } from '../data/resume'

export function Experience() {
  return (
    <div className="page">
      <SectionHeading
        eyebrow="Experience"
        title="Internships & Community Work"
        description="Hands-on work across production software teams and grassroots community initiatives."
      />

      <h3 className="subsection-title">
        <Briefcase size={16} /> Internships
      </h3>
      <div className="timeline-list">
        {internships.map((i) => (
          <Card key={i.role + i.company} className="timeline-list__card">
            <div className="timeline-list__head">
              <h4 className="timeline-list__role">{i.role}</h4>
              <span className="timeline-list__period">{i.period}</span>
            </div>
            <div className="timeline-list__company">
              {i.company} · {i.location}
            </div>
            <ul className="timeline-list__points">
              {i.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
            {i.contact && (
              <div className="timeline-list__contact">
                <User size={12} /> {i.contact}
              </div>
            )}
          </Card>
        ))}
      </div>

      <h3 className="subsection-title">
        <HeartHandshake size={16} /> Volunteering & Community Outreach
      </h3>
      <div className="timeline-list">
        {volunteering.map((v) => (
          <Card key={v.name} className="timeline-list__card">
            <div className="timeline-list__head">
              <h4 className="timeline-list__role">{v.name}</h4>
              <span className="timeline-list__period">{v.period}</span>
            </div>
            <div className="timeline-list__company">{v.location}</div>
            <p className="timeline-list__desc">{v.detail}</p>
            {v.contact && (
              <div className="timeline-list__contact">
                <User size={12} /> {v.contact}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
