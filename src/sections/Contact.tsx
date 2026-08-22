import { useState } from 'react'
import { Mail, FileDown, MapPin, School, Newspaper, Copy, Check } from 'lucide-react'
import { Card, SectionHeading } from '../components/ui'
import { profile, otherPursuits } from '../data/resume'

export function Contact() {
  const blog = otherPursuits.find((p) => 'link' in p && p.link)
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // clipboard permission denied — mailto link still works
    }
  }

  return (
    <div className="page">
      <SectionHeading
        eyebrow="Get in touch"
        title="Contact"
        description="Open to research collaborations, fintech-for-good conversations, and admissions correspondence."
      />

      <div className="contact-grid">
        <Card className="contact-card">
          <span className="contact-card__icon">
            <Mail size={20} />
          </span>
          <div>
            <div className="contact-card__label">Email</div>
            <a className="contact-card__value" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
          <button className="contact-card__copy" onClick={copyEmail} aria-label="Copy email">
            {copied ? <Check size={15} /> : <Copy size={15} />}
          </button>
        </Card>

        <Card className="contact-card">
          <span className="contact-card__icon">
            <School size={20} />
          </span>
          <div>
            <div className="contact-card__label">School</div>
            <div className="contact-card__value">{profile.school}</div>
          </div>
        </Card>

        <Card className="contact-card">
          <span className="contact-card__icon">
            <MapPin size={20} />
          </span>
          <div>
            <div className="contact-card__label">Location</div>
            <div className="contact-card__value">{profile.location}</div>
          </div>
        </Card>

        {blog && 'link' in blog && (
          <Card className="contact-card">
            <span className="contact-card__icon">
              <Newspaper size={20} />
            </span>
            <div>
              <div className="contact-card__label">Writing</div>
              <a className="contact-card__value" href={blog.link} target="_blank" rel="noreferrer">
                Medium — @dakshsawhney2008
              </a>
            </div>
          </Card>
        )}
      </div>

      <Card className="contact-cta">
        <div>
          <h3 className="panel-head__title">Prefer the paper trail?</h3>
          <p className="panel-head__sub">Grab the full résumé — education, research, awards & references.</p>
        </div>
        <a className="btn-primary" href="/Daksh-Sawhney-Resume.pdf" target="_blank" rel="noreferrer">
          <FileDown size={16} /> Download Résumé
        </a>
      </Card>
    </div>
  )
}
