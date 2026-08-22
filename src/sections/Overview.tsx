import { Sparkles, ArrowUpRight, Trophy, Newspaper } from 'lucide-react'
import { Card, StatTile, Pill } from '../components/ui'
import { Timeline } from '../components/Timeline'
import { AnimatedNumber } from '../components/AnimatedNumber'
import { profile, heroStats, quickFacts, projects, honors } from '../data/resume'
import type { SectionKey } from '../components/Sidebar'

const press = [
  { title: 'Harvard Hackathon — National Winner, 48-hour build', source: 'Harvard Hackathon', date: 'Jan 2026' },
  { title: 'Persifolio patent filed, published in the Indian Patent Journal', source: 'Indian Patent Journal', date: '2026' },
  { title: 'Persifolio adopted by schools in Odisha, backed by a Rajya Sabha MP', source: 'Govt. of India initiative', date: '2026' },
  { title: 'UPI research published in IJSSER', source: 'IJSSER', date: 'Jan 2025' },
]

export function Overview({ onNavigate }: { onNavigate: (key: SectionKey) => void }) {
  return (
    <div className="page">
      <Card className="hero-card">
        <div className="hero-card__main">
          <div className="hero-card__avatar">{profile.initials}</div>
          <div>
            <div className="hero-card__name-row">
              <h1 className="hero-card__name">{profile.name}</h1>
              <span className="hero-card__ticker">{profile.school.toUpperCase()}</span>
            </div>
            <p className="hero-card__tagline">{profile.tagline}</p>
            <div className="hero-card__live">
              <span className="hero-card__live-dot" />
              Currently: {profile.currentlyBuilding}
            </div>
          </div>
        </div>
        <p className="hero-card__objective">{profile.objective}</p>
        <div className="hero-card__qualities">
          {profile.qualities.map((q) => (
            <Pill key={q} tone="green">
              {q}
            </Pill>
          ))}
        </div>
      </Card>

      <div className="stat-row">
        {heroStats.map((s) => (
          <button key={s.label} className="card card--padded stat-card stat-card--clickable" onClick={() => onNavigate(s.section)}>
            <StatTile
              label={s.label}
              value={'value' in s ? s.value : <AnimatedNumber target={s.target} prefix={s.prefix} suffix={s.suffix} indian={s.indian} />}
              unit={s.unit}
            />
          </button>
        ))}
      </div>

      <div className="split-row">
        <Card className="timeline-wrap" padded={false}>
          <Timeline />
        </Card>

        <Card className="detail-panel">
          <h3 className="detail-panel__title">Quick Facts</h3>
          <p className="detail-panel__sub">Snapshot for admissions & collaborators</p>

          <div className="detail-panel__row">
            <span className="detail-panel__k">School</span>
            <span className="detail-panel__v">{profile.school}</span>
          </div>
          <div className="detail-panel__row">
            <span className="detail-panel__k">Grade</span>
            <span className="detail-panel__v">{profile.grade}</span>
          </div>
          <div className="detail-panel__row">
            <span className="detail-panel__k">Location</span>
            <span className="detail-panel__v">{profile.location}</span>
          </div>
          <div className="detail-panel__row">
            <span className="detail-panel__k">Standardised test</span>
            <span className="detail-panel__v">{quickFacts.standardisedTesting[0].detail}</span>
          </div>

          <div className="detail-panel__block">
            <span className="detail-panel__k">Focus areas</span>
            <div className="detail-panel__tags">
              {quickFacts.focusAreas.map((f) => (
                <span className="tag" key={f}>
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="detail-panel__block">
            <span className="detail-panel__k">Tools & platforms</span>
            <div className="detail-panel__tags">
              {quickFacts.languagesTools.map((f) => (
                <span className="tag" key={f}>
                  {f}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <div className="split-row split-row--bottom">
        <Card>
          <div className="panel-head">
            <div>
              <h3 className="panel-head__title">
                <Sparkles size={16} /> Featured ventures
              </h3>
              <p className="panel-head__sub">What I've built and shipped</p>
            </div>
            <button className="link-btn" onClick={() => onNavigate('projects')}>
              Show all <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="mini-project-row">
            {projects.map((p) => (
              <button key={p.name} className="mini-project-card" onClick={() => onNavigate('projects')}>
                <span className="mini-project-card__name">{p.name}</span>
                <span className="mini-project-card__tagline">{p.tagline}</span>
                <span className="mini-project-card__stat">{p.highlights[0]?.value}</span>
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <div className="panel-head">
            <div>
              <h3 className="panel-head__title">
                <Newspaper size={16} /> Press & recognition
              </h3>
              <p className="panel-head__sub">Latest updates and wins</p>
            </div>
            <button className="link-btn" onClick={() => onNavigate('awards')}>
              Show all <ArrowUpRight size={14} />
            </button>
          </div>
          <ul className="news-list">
            {press.map((item) => (
              <li className="news-list__item" key={item.title}>
                <span className="news-list__icon">
                  <Trophy size={14} />
                </span>
                <div>
                  <div className="news-list__title">{item.title}</div>
                  <div className="news-list__meta">
                    {item.source} · {item.date}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="honors-strip">
        {honors.map((h) => (
          <Pill key={h.title} tone={h.tier === 'gold' ? 'gold' : h.tier === 'national' ? 'national' : 'default'}>
            {h.title}
          </Pill>
        ))}
      </div>
    </div>
  )
}
