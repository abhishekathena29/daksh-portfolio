import type { ComponentType, ReactNode } from 'react'
import { ExternalLink } from 'lucide-react'
import type { LinkRef } from '../data/resume'
import { previewFor } from '../data/evidence'

const TONES = {
  emerald: 'bg-emerald-50 text-emerald-800 border-emerald-200 [&>svg]:text-emerald-600',
  blue: 'bg-blue-50 text-blue-800 border-blue-200 [&>svg]:text-blue-600',
  indigo: 'bg-indigo-50 text-indigo-800 border-indigo-200 [&>svg]:text-indigo-600',
} as const

export function PageBanner({
  icon: Icon,
  eyebrow,
  title,
  description,
  tone = 'emerald',
  children,
}: {
  icon: ComponentType<{ className?: string }>
  eyebrow: string
  title: string
  description: string
  tone?: keyof typeof TONES
  children?: ReactNode
}) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 shadow-xs">
      <div className="max-w-3xl space-y-3">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-semibold ${TONES[tone]}`}>
          <Icon className="w-3.5 h-3.5" />
          <span>{eyebrow}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">{title}</h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{description}</p>
      </div>
      {children && <div className="pt-6 mt-6 border-t border-slate-100">{children}</div>}
    </div>
  )
}

export function Pill({
  active,
  onClick,
  children,
  activeClass = 'bg-slate-900 text-white font-semibold shadow-2xs',
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
  activeClass?: string
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
        active ? activeClass : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
      }`}
    >
      {children}
    </button>
  )
}

export function Panel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-xs ${className}`}>{children}</div>
}

export function PanelHead({ eyebrow, title, sub, right }: { eyebrow?: string; title: string; sub?: string; right?: ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4 mb-6">
      <div>
        {eyebrow && <span className="text-xs font-mono text-emerald-700 font-bold uppercase block">{eyebrow}</span>}
        <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-0.5">{title}</h2>
        {sub && <p className="text-xs sm:text-sm text-slate-500 mt-1">{sub}</p>}
      </div>
      {right}
    </div>
  )
}

// Links to documents with a preview show the document's first page; the rest are chips.
export function LinkButtons({ links }: { links?: LinkRef[] }) {
  if (!links?.length) return null
  const previewed = links.flatMap((l) => {
    const src = previewFor(l)
    return src ? [{ ...l, src }] : []
  })
  const plain = links.filter((l) => !previewFor(l))
  return (
    <div className="space-y-3">
      {previewed.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {previewed.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group w-36 bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-emerald-300 transition-colors"
            >
              <span className="block aspect-[4/3] bg-slate-100 overflow-hidden">
                <img src={l.src} alt="" loading="lazy" className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500" />
              </span>
              <span className="flex items-start justify-between gap-1.5 px-2.5 py-2 text-xs font-mono font-semibold text-emerald-800 leading-snug">
                <span>{l.label}</span>
                <ExternalLink className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
              </span>
            </a>
          ))}
        </div>
      )}
      {plain.length > 0 && <LinkChips links={plain} />}
    </div>
  )
}

function LinkChips({ links }: { links: LinkRef[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((l) => (
        <a
          key={l.href + l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-mono font-semibold px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors"
        >
          <span>{l.label}</span>
          <ExternalLink className="w-3 h-3 text-emerald-600" />
        </a>
      ))}
    </div>
  )
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">{children}</span>
}
