import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, FileText, ShieldCheck, X } from 'lucide-react'
import type { Evidence } from '../data/evidence'
import { EvidencePreview } from './EvidenceCard'

export type Inspection = { list: Evidence[]; index: number }

export function LightboxModal({ state, onChange, onClose }: { state: Inspection | null; onChange: (s: Inspection) => void; onClose: () => void }) {
  const [imageIdx, setImageIdx] = useState(0)
  const item = state ? state.list[state.index] : null
  const count = state?.list.length ?? 0

  const step = (d: number) => {
    if (!state || count < 2) return
    setImageIdx(0)
    onChange({ ...state, index: (state.index + d + count) % count })
  }

  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  })

  if (!item) return null
  const idx = Math.min(imageIdx, Math.max(0, item.images.length - 1))
  const hasImage = item.images.length > 0

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative" onClick={(e) => e.stopPropagation()}>
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="font-mono text-xs font-bold text-slate-700 tracking-wider truncate">RECORD INSPECTION</span>
            {item.badge && (
              <span className="text-[12px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-300 shrink-0">{item.badge}</span>
            )}
            {count > 1 && (
              <span className="text-[12px] font-mono text-slate-500 shrink-0">
                {state!.index + 1} / {count}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1">
            {count > 1 && (
              <>
                <button onClick={() => step(-1)} className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 cursor-pointer" aria-label="Previous record">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => step(1)} className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 cursor-pointer" aria-label="Next record">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
            <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6 max-h-[78vh] overflow-y-auto">
          <div key={item.id + idx} className={`rounded-xl overflow-hidden shadow-sm border border-slate-200 animate-fade-in ${hasImage ? 'h-[46vh] bg-slate-900' : 'aspect-[16/7]'}`}>
            <EvidencePreview item={item} index={idx} fit="contain" />
          </div>

          {item.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none -mt-3">
              {item.images.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setImageIdx(i)}
                  className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 cursor-pointer ${i === idx ? 'border-emerald-500' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  aria-label={img.caption}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-mono text-emerald-700 font-semibold block uppercase">{item.organization}</span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-0.5">{item.title}</h3>
              </div>
              <span className="font-mono text-xs text-slate-500 shrink-0">{item.date}</span>
            </div>
            {hasImage && item.images[idx].caption !== item.title && <p className="text-xs font-mono text-slate-500">{item.images[idx].caption}</p>}
            {item.caption !== item.title && <p className="text-sm text-slate-700 leading-relaxed">{item.caption}</p>}
          </div>

          {item.metadata.length > 0 && (
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase font-semibold tracking-wider block">RECORD ATTRIBUTES</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {item.metadata.map((m) => (
                  <div key={m.label} className="bg-white p-2.5 rounded-lg border border-slate-200/60 text-xs">
                    <span className="text-[12px] font-mono text-slate-400 block uppercase">{m.label}</span>
                    <span className="font-semibold text-slate-800">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {item.links.length > 0 && (
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase font-semibold tracking-wider block">PRIMARY SOURCE DOCUMENTS</span>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                {item.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-mono font-semibold transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      {l.href.endsWith('.pdf') && <FileText className="w-3.5 h-3.5" />}
                      {l.label}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{item.category === 'photos' ? 'Original photograph from Daksh’s portfolio archive.' : 'Original documents open in a new tab.'}</span>
          </div>
        </div>

        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex justify-between items-center">
          <span className="text-xs font-mono text-slate-400 hidden sm:inline">{count > 1 ? '← → to browse · Esc to close' : 'Esc to close'}</span>
          <button onClick={onClose} className="px-4 py-2 bg-slate-900 text-white font-medium text-xs rounded-lg hover:bg-slate-800 transition-colors font-mono cursor-pointer ml-auto">
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  )
}
