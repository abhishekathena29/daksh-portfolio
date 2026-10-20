import { useEffect, useState, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Evidence } from '../data/evidence'

// Cross-fading photo carousel that advances on its own and pauses while the
// pointer or keyboard focus is on it. Selecting the photo opens the viewer.
export function AutoCarousel({
  photos,
  onOpen,
  interval = 4500,
  fit = 'cover',
  children,
}: {
  photos: Evidence[]
  onOpen: (item: Evidence, list: Evidence[]) => void
  interval?: number
  fit?: 'cover' | 'contain'
  children?: ReactNode
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = photos.length

  useEffect(() => {
    if (paused || count < 2) return
    const id = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % count)
    }, interval)
    return () => window.clearInterval(id)
  }, [paused, count, interval])

  if (!count) return null
  const current = photos[index % count]
  const step = (d: number) => setIndex((i) => (i + d + count) % count)

  return (
    <div
      className="group absolute inset-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <button onClick={() => onOpen(current, photos)} className="absolute inset-0 cursor-pointer" aria-label={`View photo: ${current.caption}`}>
        {photos.map((p, i) => (
          <img
            key={p.id}
            src={p.images[0].src}
            alt={i === index ? p.caption : ''}
            loading={i === 0 ? 'eager' : 'lazy'}
            style={p.images[0].position ? { objectPosition: p.images[0].position } : undefined}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${fit === 'contain' ? 'object-contain' : 'object-cover'} ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </button>

      {children}

      {count > 1 && (
        <>
          <button
            onClick={() => step(-1)}
            className="theme-fixed absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white flex items-center justify-center backdrop-blur-sm cursor-pointer"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => step(1)}
            className="theme-fixed absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white flex items-center justify-center backdrop-blur-sm cursor-pointer"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="theme-fixed absolute bottom-3 inset-x-0 flex justify-center gap-1.5 pointer-events-none">
            {photos.map((p, i) => (
              <span key={p.id} className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/50'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
