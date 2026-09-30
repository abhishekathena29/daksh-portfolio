import type { ComponentType } from 'react'
import {
  Award,
  BookOpen,
  Briefcase,
  Camera,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Medal,
  Rocket,
  ShieldCheck,
  Trophy,
  ZoomIn,
} from 'lucide-react'
import type { Evidence, EvidenceCategory } from '../data/evidence'

type Theme = { icon: ComponentType<{ className?: string }>; label: string; bg: string; ink: string; ring: string }

const CATEGORY_THEME: Record<EvidenceCategory, Theme> = {
  honours: { icon: Trophy, label: 'PRIMARY HONOUR', bg: 'from-amber-50 to-white', ink: 'text-amber-700', ring: 'border-amber-200' },
  'school-awards': { icon: Award, label: 'AWARD OF EXCELLENCE', bg: 'from-orange-50 to-white', ink: 'text-orange-700', ring: 'border-orange-200' },
  academics: { icon: GraduationCap, label: 'ACADEMIC RECORD', bg: 'from-emerald-50 to-white', ink: 'text-emerald-700', ring: 'border-emerald-200' },
  courses: { icon: BookOpen, label: 'CERTIFICATION', bg: 'from-sky-50 to-white', ink: 'text-sky-700', ring: 'border-sky-200' },
  research: { icon: FlaskConical, label: 'RESEARCH', bg: 'from-blue-50 to-white', ink: 'text-blue-700', ring: 'border-blue-200' },
  projects: { icon: Rocket, label: 'PROJECT RECORD', bg: 'from-teal-50 to-white', ink: 'text-teal-700', ring: 'border-teal-200' },
  experience: { icon: Briefcase, label: 'INTERNSHIP', bg: 'from-indigo-50 to-white', ink: 'text-indigo-700', ring: 'border-indigo-200' },
  athletics: { icon: Medal, label: 'ATHLETICS', bg: 'from-rose-50 to-white', ink: 'text-rose-700', ring: 'border-rose-200' },
  service: { icon: HeartHandshake, label: 'COMMUNITY', bg: 'from-lime-50 to-white', ink: 'text-lime-700', ring: 'border-lime-200' },
  photos: { icon: Camera, label: 'FIELD PHOTO', bg: 'from-slate-50 to-white', ink: 'text-slate-700', ring: 'border-slate-200' },
}

// Shows the record's first image; falls back to a stylised document tile.
export function EvidencePreview({ item, index = 0, fit = 'cover' }: { item: Evidence; index?: number; fit?: 'cover' | 'contain' }) {
  const theme = CATEGORY_THEME[item.category]
  const Icon = theme.icon
  const img = item.images[index]

  if (img) {
    return (
      <div className="w-full h-full relative bg-slate-100">
        <img
          src={img.src}
          alt={img.caption}
          loading="lazy"
          className={`w-full h-full ${fit === 'contain' ? 'object-contain' : 'object-cover object-top'} transition-transform duration-500 group-hover:scale-[1.03]`}
        />
        <span className={`absolute bottom-2.5 left-2.5 flex items-center gap-1 bg-white/95 border ${theme.ring} ${theme.ink} text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-xs`}>
          <Icon className="w-3 h-3" />
          {theme.label}
        </span>
      </div>
    )
  }

  return (
    <div className={`w-full h-full bg-gradient-to-br ${theme.bg} p-5 flex flex-col justify-between relative overflow-hidden`}>
      <div className={`absolute -right-6 -bottom-6 opacity-[0.07] ${theme.ink}`}>
        <Icon className="w-40 h-40" />
      </div>
      <div className="flex items-center gap-2 relative">
        <div className={`w-8 h-8 rounded-lg bg-white border ${theme.ring} flex items-center justify-center ${theme.ink}`}>
          <Icon className="w-4 h-4" />
        </div>
        <span className={`text-[10px] font-mono font-bold tracking-wider ${theme.ink}`}>{theme.label}</span>
      </div>
      <div className="relative space-y-1">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block truncate">{item.organization}</span>
        <h5 className="text-base font-bold font-display text-slate-900 leading-snug line-clamp-2">{item.title}</h5>
      </div>
      <div className="relative flex items-center justify-between border-t border-slate-200/80 pt-2 text-[10px] font-mono text-slate-500">
        <span>{item.date}</span>
        <span>
          {item.links.length} document{item.links.length === 1 ? '' : 's'}
        </span>
      </div>
    </div>
  )
}

export function EvidenceCard({ item, onOpen }: { item: Evidence; onOpen: (item: Evidence) => void }) {
  return (
    <button
      onClick={() => onOpen(item)}
      className="group text-left relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
    >
      <div className="w-full aspect-[16/10] relative overflow-hidden bg-slate-100 select-none">
        <EvidencePreview item={item} />
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px] z-30">
          <ZoomIn className="w-4 h-4 text-emerald-300" />
          <span>Inspect record</span>
        </div>
        <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 pointer-events-none">
          {item.badge && (
            <span className="bg-white/95 text-slate-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-xs border border-slate-200">{item.badge}</span>
          )}
          {item.links.length > 0 && (
            <span className="bg-emerald-500 text-white text-[10px] font-mono font-semibold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              PROOF
            </span>
          )}
        </div>
        {item.images.length > 1 && (
          <span className="absolute bottom-2.5 right-2.5 z-20 bg-slate-900/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">+{item.images.length - 1} more</span>
        )}
      </div>
      <div className="p-3.5 bg-white border-t border-slate-100 space-y-1.5 flex-1">
        <div className="flex items-center justify-between gap-2 text-[11px] font-mono">
          <span className="truncate font-medium text-emerald-700">{item.organization}</span>
          <span className="text-slate-400 shrink-0">{item.date}</span>
        </div>
        <h4 className="text-sm font-bold font-display text-slate-900 line-clamp-1 group-hover:text-emerald-600 transition-colors">{item.title}</h4>
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{item.caption}</p>
      </div>
    </button>
  )
}

// Photo-first grid for field photographs.
export function PhotoGallery({ items, onOpen }: { items: Evidence[]; onOpen: (item: Evidence) => void }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {items.map((p) => (
        <button
          key={p.id}
          onClick={() => onOpen(p)}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 cursor-pointer text-left"
        >
          <img src={p.images[0].src} alt={p.caption} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-3 pt-8">
            <p className="text-[11px] sm:text-xs text-white font-medium leading-snug line-clamp-2">{p.caption}</p>
          </div>
          <span className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 rounded-lg p-1.5">
            <ZoomIn className="w-3.5 h-3.5 text-slate-700" />
          </span>
        </button>
      ))}
    </div>
  )
}
