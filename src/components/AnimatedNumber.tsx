import { useEffect, useRef, useState } from 'react'

function formatValue(n: number, indian?: boolean) {
  return Math.round(n).toLocaleString(indian ? 'en-IN' : 'en-US')
}

export function AnimatedNumber({
  target,
  prefix = '',
  suffix = '',
  indian = false,
  duration = 1100,
}: {
  target: number
  prefix?: string
  suffix?: string
  indian?: boolean
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setDisplay(target)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const start = performance.now()
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - t, 3)
              setDisplay(target * eased)
              if (t < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {prefix}
      {formatValue(display, indian)}
      {suffix}
    </span>
  )
}
