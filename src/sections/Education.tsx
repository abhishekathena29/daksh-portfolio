import { GraduationCap, Calendar } from 'lucide-react'
import { Card, SectionHeading, Pill, EvidenceLinks } from '../components/ui'
import { education, courses, quickFacts } from '../data/resume'

function gradeTone(grade: string): 'gold' | 'green' | 'default' {
  if (grade.includes('A*')) return 'gold'
  if (grade.includes('A')) return 'green'
  return 'default'
}

export function Education() {
  return (
    <div className="page">
      <SectionHeading
        eyebrow="Academics"
        title="Education"
        description="Cambridge curriculum at Inventure Academy, Bangalore — compressing AS & A Level Further Mathematics into a single year."
      />

      <div className="edu-grid">
        {education.map((e) => (
          <Card key={e.level} className="edu-card">
            <div className="edu-card__head">
              <span className="edu-card__icon">
                <GraduationCap size={18} />
              </span>
              {e.current && <Pill tone="green">Current</Pill>}
            </div>
            <h3 className="edu-card__level">{e.level}</h3>
            <div className="edu-card__institution">{e.institution}</div>
            <div className="edu-card__period">
              <Calendar size={13} /> {e.period}
            </div>
            <p className="edu-card__subjects">{e.subjects}</p>
            {e.grades && (
              <div className="edu-card__grades">
                <Pill tone={gradeTone(e.grades)}>Grade {e.grades}</Pill>
              </div>
            )}
            {e.level === 'IGCSE' && (
              <div className="edu-card__grades edu-card__grades--wrap">
                {['English Lang. A', 'English Lit. A*', 'Maths A*', 'Add. Maths A*', 'Biology A*', 'Physics A*', 'Chemistry A*', 'Economics A*', 'Computer Science A*', 'Spanish A'].map(
                  (g) => (
                    <Pill key={g} tone={gradeTone(g)}>
                      {g}
                    </Pill>
                  ),
                )}
              </div>
            )}
            <EvidenceLinks links={e.links} />
          </Card>
        ))}
      </div>

      <Card className="standardised-card">
        <h3 className="panel-head__title">Standardised Testing</h3>
        <div className="standardised-row">
          {quickFacts.standardisedTesting.map((t) => (
            <div key={t.exam} className="standardised-item">
              <span className="standardised-item__exam">{t.exam}</span>
              <span className="standardised-item__detail">{t.detail}</span>
            </div>
          ))}
        </div>
      </Card>

      <SectionHeading
        eyebrow="Beyond the classroom"
        title="Online Courses & Certifications"
        description="Subject-specific pursuits in fintech, data science, and applied AI — mostly Coursera / University of Pennsylvania and IIT Madras."
      />

      <div className="course-grid">
        {courses.map((c) => (
          <Card key={c.name} className="course-card">
            <div className="course-card__head">
              <h4 className="course-card__name">{c.name}</h4>
              {c.grade && <Pill tone="default">{c.grade}</Pill>}
            </div>
            <div className="course-card__org">{c.org}</div>
            <div className="course-card__date">
              <Calendar size={12} /> {c.date}
            </div>
            {c.details && <p className="course-card__details">{c.details}</p>}
            <EvidenceLinks links={c.links} />
          </Card>
        ))}
      </div>
    </div>
  )
}
