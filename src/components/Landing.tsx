import { ArrowDown, FileDown } from 'lucide-react'
import { profile, heroStats } from '../data/resume'
import { AnimatedNumber } from './AnimatedNumber'

export function Landing({ onExplore }: { onExplore: () => void }) {
  return (
    <section className="landing">
      <video
        className="landing__video"
        src="/landing-bg.mp4"
        autoPlay={!window.matchMedia('(prefers-reduced-motion: reduce)').matches}
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="landing__video-overlay" aria-hidden="true" />

      <div className="landing__grid">
        <div className="landing__text">
          <span className="landing__eyebrow">Portfolio · {profile.grade}</span>
          <h1 className="landing__name">{profile.name}</h1>
          <p className="landing__tagline">{profile.tagline}</p>
          <p className="landing__objective">{profile.objective}</p>
          <p className="landing__qualities">{profile.qualities.join(' · ')}</p>

          <div className="landing__cta">
            <button className="landing__btn landing__btn--primary" onClick={onExplore}>
              Explore the portfolio <ArrowDown size={16} />
            </button>
            <a
              className="landing__btn landing__btn--ghost"
              href="/Daksh-Sawhney-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <FileDown size={16} /> Résumé
            </a>
          </div>

          <div className="landing__stats">
            {heroStats.map((s) => (
              <div className="landing__stat" key={s.label}>
                <span className="landing__stat-value">
                  {'value' in s ? (
                    s.value
                  ) : (
                    <AnimatedNumber target={s.target} prefix={s.prefix} suffix={s.suffix} indian={s.indian} />
                  )}
                </span>
                <span className="landing__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="landing__portrait">
          <div className="landing__portrait-ring">
            <div className="landing__portrait-frame">
              {profile.photo ? (
                <img src={profile.photo} alt={profile.name} />
              ) : (
                <span className="landing__portrait-initials">{profile.initials}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <button className="landing__scroll-cue" onClick={onExplore} aria-label="Scroll to explore">
        <span>Scroll to explore</span>
        <ArrowDown size={16} className="landing__scroll-cue-icon" />
      </button>
    </section>
  )
}
