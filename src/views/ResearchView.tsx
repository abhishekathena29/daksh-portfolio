import { Clock, ExternalLink, FileText, FlaskConical } from 'lucide-react'
import { research, type Research } from '../data/resume'
import { PageBanner } from '../components/ui'

const STATUS_STYLE = {
  published: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  review: 'bg-amber-50 text-amber-800 border-amber-200',
  live: 'bg-blue-50 text-blue-800 border-blue-200',
} as const

export function ResearchView() {
  return (
    <div className="space-y-8 pb-16">
      <PageBanner
        tone="blue"
        icon={FlaskConical}
        eyebrow="APPLIED MATHEMATICS & COMPUTATIONAL RESEARCH"
        title="Research"
        description="Three papers across nonlinear dynamics, natural-language processing and the economics of digital payments."
      />

      <div className="space-y-8">
        {research.map((r, i) => (
          <ResearchCard key={r.title} r={r} reverse={i % 2 === 1} />
        ))}
      </div>
    </div>
  )
}

function ResearchCard({ r, reverse }: { r: Research; reverse: boolean }) {
  return (
    <article className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden grid grid-cols-1 lg:grid-cols-5">
      <div className={`lg:col-span-2 bg-slate-900 min-h-60 ${reverse ? 'lg:order-2' : ''}`}>
        {r.cover ? (
          <img
            src={r.cover.src}
            alt={r.cover.caption}
            loading="lazy"
            className={`w-full h-full ${r.coverFit === 'contain' ? 'object-contain bg-slate-100 p-4' : 'object-cover'}`}
          />
        ) : (
          <UpiFigure />
        )}
      </div>

      <div className="lg:col-span-3 p-7 sm:p-9 space-y-5">
        <div className="flex flex-wrap items-center gap-2 text-sm font-mono text-slate-500">
          <span className="text-blue-700 font-bold">{r.period}</span>
          <span aria-hidden>•</span>
          <span className={`border px-2 py-0.5 rounded text-xs ${STATUS_STYLE[r.statusTone]}`}>{r.status}</span>
        </div>
        <div className="space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 leading-tight">{r.title}</h2>
          <p className="text-base text-slate-500">{r.org}</p>
        </div>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{r.summary}</p>
        {r.mentor && <p className="text-sm text-slate-500">Mentor: {r.mentor}</p>}

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {r.paper ? (
            <a
              href={r.paper.href}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-2.5 rounded-xl text-sm flex items-center gap-2 transition-colors"
            >
              <FileText className="w-4 h-4 text-emerald-300" />
              <span>{r.paper.label}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          ) : (
            <span className="bg-slate-100 text-slate-600 font-medium px-5 py-2.5 rounded-xl text-sm flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Paper available after review
            </span>
          )}
          {r.certificate && (
            <a href={r.certificate.href} target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-500 hover:text-emerald-700 flex items-center gap-1">
              {r.certificate.label}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

// Illustration for the UPI paper, which has no photograph: cash giving way to clicks.
function UpiFigure() {
  const bars = [
    { cash: 82, upi: 18 },
    { cash: 68, upi: 32 },
    { cash: 51, upi: 49 },
    { cash: 36, upi: 64 },
    { cash: 24, upi: 76 },
  ]
  return (
    <div className="w-full h-full chart-grid flex flex-col justify-center gap-4 p-8" role="img" aria-label="Illustration: cash payments giving way to UPI">
      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Cash → UPI · illustrative</span>
      <svg viewBox="0 0 250 140" className="w-full max-w-sm">
        {bars.map((b, i) => (
          <g key={i} transform={`translate(${12 + i * 48}, 0)`}>
            <rect y={130 - b.cash - b.upi} width={30} height={b.upi - 1} rx={3} fill="#34d399" />
            <rect y={130 - b.cash + 1} width={30} height={b.cash - 1} rx={3} fill="#475569" />
          </g>
        ))}
        <line x1={4} x2={246} y1={131} y2={131} stroke="#64748b" strokeWidth={1} />
      </svg>
      <div className="flex gap-4 text-xs font-mono text-slate-300">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />UPI</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-slate-600" />Cash</span>
      </div>
    </div>
  )
}
