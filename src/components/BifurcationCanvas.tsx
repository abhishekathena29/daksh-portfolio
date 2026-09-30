import { useEffect, useMemo, useRef, useState } from 'react'

type MapType = 'logistic' | 'sine' | 'tent'

// Each map is a representative of one structural class from the RSI-India study.
// ξ values and ranges are from the RSI-India paper.
const MAPS: Record<MapType, { label: string; formula: string; klass: string; xi: string; rMin: number; rMax: number; start: number }> = {
  logistic: { label: 'Logistic', formula: 'x → r·x(1 − x)', klass: 'Smooth unimodal', xi: 'ξ = 0.5', rMin: 2.5, rMax: 4, start: 3.57 },
  sine: { label: 'Sine', formula: 'x → (r/4)·sin(πx)', klass: 'Smooth unimodal', xi: 'ξ = 0.5', rMin: 2.5, rMax: 4, start: 3.47 },
  tent: { label: 'Tent', formula: 'x → (r/2)(1 − 2|x − 0.5|)', klass: 'Piecewise linear', xi: '1.0 < ξ < 1.5', rMin: 1, rMax: 2, start: 1.5 },
}

const CLASSES = [
  { name: 'Smooth unimodal', xi: 'ξ = 0.5', note: 'Pitchfork cascade scaling with Feigenbaum δ ≈ 4.669' },
  { name: 'Smooth multimodal', xi: '0 < ξ < 0.5', note: 'e.g. r(x⁵ − x³ + x): wave-like structures, interior crises' },
  { name: 'Piecewise linear', xi: '1.0 < ξ < 1.5', note: 'No period doubling — fixed point jumps straight to a chaotic wedge' },
]

function iterate(type: MapType, r: number, x: number) {
  if (type === 'logistic') return r * x * (1 - x)
  if (type === 'sine') return (r / 4) * Math.sin(Math.PI * x)
  return r * Math.min(x, 1 - x)
}

function derivative(type: MapType, r: number, x: number) {
  if (type === 'logistic') return r * (1 - 2 * x)
  if (type === 'sine') return (r / 4) * Math.PI * Math.cos(Math.PI * x)
  return r
}

function lyapunov(type: MapType, r: number) {
  let x = 0.3
  for (let i = 0; i < 300; i++) x = iterate(type, r, x)
  let sum = 0
  const steps = 1500
  for (let i = 0; i < steps; i++) {
    sum += Math.log(Math.max(Math.abs(derivative(type, r, x)), 1e-12))
    x = iterate(type, r, x)
  }
  return sum / steps
}

export function BifurcationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [mapType, setMapType] = useState<MapType>('logistic')
  const [r, setR] = useState(MAPS.logistic.start)
  const cfg = MAPS[mapType]

  const lambda = useMemo(() => lyapunov(mapType, r), [mapType, r])
  const trajectory = useMemo(() => {
    let x = 0.3
    const pts: number[] = []
    for (let i = 0; i < 40; i++) {
      x = iterate(mapType, r, x)
      pts.push(x)
    }
    return pts
  }, [mapType, r])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const { width, height } = canvas

    ctx.fillStyle = '#090d13'
    ctx.fillRect(0, 0, width, height)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)'
    ctx.lineWidth = 1
    for (let x = 0; x < width; x += 60) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }

    ctx.fillStyle = 'rgba(16, 185, 129, 0.35)'
    for (let px = 0; px < width; px += 1) {
      const rr = cfg.rMin + (px / width) * (cfg.rMax - cfg.rMin)
      let x = 0.3
      for (let i = 0; i < 200; i++) x = iterate(mapType, rr, x)
      for (let i = 0; i < 120; i++) {
        x = iterate(mapType, rr, x)
        ctx.fillRect(px, height - x * height, 1.2, 1.2)
      }
    }

    const cursor = ((r - cfg.rMin) / (cfg.rMax - cfg.rMin)) * width
    ctx.strokeStyle = '#38bdf8'
    ctx.lineWidth = 2
    ctx.setLineDash([4, 4])
    ctx.beginPath()
    ctx.moveTo(cursor, 0)
    ctx.lineTo(cursor, height)
    ctx.stroke()
    ctx.setLineDash([])
  }, [mapType, r, cfg])

  const selectMap = (t: MapType) => {
    setMapType(t)
    setR(MAPS[t].start)
  }

  const chaotic = lambda > 0.001

  return (
    <div className="w-full bg-[#0a0e14] border border-white/10 rounded-2xl p-5 sm:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Simulator: Nonlinear geometric transitions</span>
          </div>
          <h4 className="text-lg font-bold font-display text-white mt-1">Bifurcation Cascade & Structural Class Explorer</h4>
          <p className="text-xs text-slate-400 font-mono mt-0.5">RSI-India · Mentored by Dr. Kaushal Verma (Dean of Mathematics, IISc)</p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-slate-500 text-[10px]">MAP:</span>
          {(Object.keys(MAPS) as MapType[]).map((t) => (
            <button
              key={t}
              onClick={() => selectMap(t)}
              className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                mapType === t ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {MAPS[t].label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-[#090d13]">
        <canvas
          ref={canvasRef}
          width={800}
          height={280}
          className="w-full h-[220px] sm:h-[280px] block cursor-crosshair"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect()
            const frac = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
            setR(+(cfg.rMin + frac * (cfg.rMax - cfg.rMin)).toFixed(3))
          }}
        />
        <div className="absolute bottom-2 left-3 text-[10px] font-mono text-slate-500 pointer-events-none">r = {cfg.rMin.toFixed(2)}</div>
        <div className="absolute bottom-2 right-3 text-[10px] font-mono text-slate-500 pointer-events-none">r = {cfg.rMax.toFixed(2)}</div>
        <div className="absolute top-2 left-3 text-[10px] font-mono text-slate-500 pointer-events-none">{cfg.formula}</div>
        <div className="absolute top-2 right-3 text-[10px] font-mono text-cyan-400/80 pointer-events-none">click to set r</div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#121822] rounded-xl p-3 border border-white/5">
          <div className="flex justify-between items-center text-xs font-mono mb-2">
            <span className="text-slate-400">CONTROL PARAMETER (r):</span>
            <span className="text-cyan-400 font-bold text-sm">{r.toFixed(3)}</span>
          </div>
          <input
            type="range"
            min={cfg.rMin}
            max={cfg.rMax}
            step={0.001}
            value={r}
            onChange={(e) => setR(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer"
            aria-label="Control parameter r"
          />
          <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
            <span>Stable</span>
            <span>Period doubling</span>
            <span>Chaos</span>
          </div>
        </div>

        <div className="bg-[#121822] rounded-xl p-3 border border-white/5 flex flex-col justify-center">
          <span className="text-[10px] font-mono text-slate-400 uppercase">Lyapunov exponent (λ)</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className={`text-xl font-bold font-mono ${chaotic ? 'text-amber-400' : 'text-emerald-400'}`}>
              {lambda > 0 ? '+' : ''}
              {lambda.toFixed(4)}
            </span>
            <span className="text-[10px] font-mono uppercase text-slate-400">{chaotic ? 'Chaotic attractor' : 'Periodic orbit'}</span>
          </div>
          <span className="text-[9px] font-mono text-slate-500 mt-0.5">λ &gt; 0 ⇒ nearby trajectories diverge exponentially</span>
        </div>

        <div className="bg-[#121822] rounded-xl p-3 border border-white/5 flex flex-col justify-center">
          <span className="text-[10px] font-mono text-slate-400 uppercase">Structural class</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-lg font-bold font-mono text-cyan-400">{cfg.xi}</span>
            <span className="text-[10px] font-mono uppercase text-slate-400">{cfg.klass}</span>
          </div>
          <div className="flex items-end gap-[2px] h-6 mt-1.5" aria-hidden="true">
            {trajectory.map((v, i) => (
              <span key={i} className="flex-1 bg-cyan-400/60 rounded-t-sm" style={{ height: `${Math.max(4, v * 100)}%` }} />
            ))}
          </div>
          <span className="text-[9px] font-mono text-slate-500 mt-1">Last 40 iterates of x at the chosen r</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2">
        {CLASSES.map((c) => (
          <div key={c.name} className={`rounded-xl p-3 border text-[11px] font-mono ${c.name === cfg.klass ? 'border-cyan-400/60 bg-cyan-400/10' : 'border-white/5 bg-[#121822]'}`}>
            <div className="flex items-center justify-between gap-2">
              <span className="text-slate-200 font-bold">{c.name}</span>
              <span className="text-cyan-400">{c.xi}</span>
            </div>
            <p className="text-slate-500 mt-1 leading-relaxed">{c.note}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-[10px] font-mono text-slate-500">Paper simulator: 1,000 settling iterations + 500 recorded steps per parameter value.</p>
    </div>
  )
}
