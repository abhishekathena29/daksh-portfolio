import type { ReactNode } from 'react'
import { Paperclip } from 'lucide-react'
import type { LinkRef } from '../data/resume'

export function Card({
  children,
  className = '',
  padded = true,
}: {
  children: ReactNode
  className?: string
  padded?: boolean
}) {
  return <div className={`card ${padded ? 'card--padded' : ''} ${className}`}>{children}</div>
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h1 className="section-heading__title">{title}</h1>
      {description && <p className="section-heading__desc">{description}</p>}
    </div>
  )
}

export function StatTile({
  label,
  value,
  unit,
}: {
  label: string
  value: ReactNode
  unit?: string
}) {
  return (
    <div className="stat-tile">
      <span className="stat-tile__label">{label}</span>
      <div className="stat-tile__value-row">
        <span className="stat-tile__value">{value}</span>
        {unit && <span className="stat-tile__unit">{unit}</span>}
      </div>
    </div>
  )
}

export function Pill({
  children,
  tone = 'default',
}: {
  children: ReactNode
  tone?: 'default' | 'gold' | 'silver' | 'bronze' | 'national' | 'green' | 'blue' | 'distinction'
}) {
  return <span className={`pill pill--${tone}`}>{children}</span>
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="tag">{children}</span>
}

export function StatusBadge({ tone, children }: { tone: 'live' | 'review' | 'published'; children: ReactNode }) {
  return <span className={`status-badge status-badge--${tone}`}>{children}</span>
}

export function EvidenceLinks({ links }: { links?: LinkRef[] }) {
  if (!links || links.length === 0) return null
  return (
    <div className="evidence-links">
      {links.map((l) => (
        <a key={l.href} className="evidence-links__item" href={l.href} target="_blank" rel="noreferrer">
          <Paperclip size={12} />
          {l.label}
        </a>
      ))}
    </div>
  )
}

export function FilterChips<T extends string>({
  options,
  active,
  onChange,
}: {
  options: { key: T; label: string }[]
  active: T
  onChange: (key: T) => void
}) {
  return (
    <div className="filter-chips">
      {options.map((opt) => (
        <button
          key={opt.key}
          className={`filter-chips__btn ${active === opt.key ? 'filter-chips__btn--active' : ''}`}
          onClick={() => onChange(opt.key)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
