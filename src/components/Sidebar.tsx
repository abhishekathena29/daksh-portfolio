import { useLayoutEffect, useRef, useState } from 'react'
import {
  LayoutDashboard,
  GraduationCap,
  FlaskConical,
  Rocket,
  Briefcase,
  Trophy,
  Activity,
  Mail,
  FileDown,
  X,
} from 'lucide-react'
import { profile } from '../data/resume'

export type SectionKey =
  | 'overview'
  | 'education'
  | 'research'
  | 'projects'
  | 'experience'
  | 'awards'
  | 'activities'
  | 'contact'

export const NAV: { key: SectionKey; label: string; icon: typeof LayoutDashboard }[] = [
  { key: 'overview', label: 'Overview', icon: LayoutDashboard },
  { key: 'education', label: 'Education', icon: GraduationCap },
  { key: 'research', label: 'Research', icon: FlaskConical },
  { key: 'projects', label: 'Projects', icon: Rocket },
  { key: 'experience', label: 'Experience', icon: Briefcase },
  { key: 'awards', label: 'Awards', icon: Trophy },
  { key: 'activities', label: 'Activities', icon: Activity },
  { key: 'contact', label: 'Contact', icon: Mail },
]

export function Sidebar({
  active,
  onNavigate,
  open,
  onClose,
}: {
  active: SectionKey
  onNavigate: (key: SectionKey) => void
  open: boolean
  onClose: () => void
}) {
  const navRef = useRef<HTMLDivElement>(null)
  const [indicator, setIndicator] = useState({ top: 0, height: 0 })

  useLayoutEffect(() => {
    const measure = () => {
      const activeEl = navRef.current?.querySelector<HTMLElement>(`[data-key="${active}"]`)
      if (activeEl) setIndicator({ top: activeEl.offsetTop, height: activeEl.offsetHeight })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  return (
    <>
      <div className={`sidebar-scrim ${open ? 'sidebar-scrim--visible' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        <div className="sidebar__brand">
          <div className="sidebar__brand-name">DAKSH.SN</div>
          <button className="sidebar__close" onClick={onClose} aria-label="Close menu">
            <X size={18} />
          </button>
        </div>

        <div className="sidebar__section-label">Main Menu</div>
        <nav className="sidebar__nav" ref={navRef}>
          <span
            className="sidebar__nav-indicator"
            style={{ transform: `translateY(${indicator.top}px)`, height: indicator.height }}
          />
          {NAV.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              data-key={key}
              className={`sidebar__item ${active === key ? 'sidebar__item--active' : ''}`}
              onClick={() => onNavigate(key)}
            >
              <Icon size={18} strokeWidth={2} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar__footer">
          <div className="sidebar__section-label">Resources</div>
          <a className="sidebar__item" href="/Daksh-Sawhney-Resume.pdf" target="_blank" rel="noreferrer">
            <FileDown size={18} strokeWidth={2} />
            <span>Download Résumé</span>
          </a>
          <div className="sidebar__contact">
            <span>{profile.email}</span>
          </div>
        </div>
      </aside>
    </>
  )
}
