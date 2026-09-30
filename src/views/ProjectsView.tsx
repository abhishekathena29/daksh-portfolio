import { useState } from 'react'
import { Camera, CheckCircle2, FileText, Rocket } from 'lucide-react'
import { projects } from '../data/resume'
import { EVIDENCE, photosFor, slug, type OpenEvidence } from '../data/evidence'
import { EvidenceCard, PhotoGallery } from '../components/EvidenceCard'
import { PersifolioSimulator } from '../components/PersifolioSimulator'
import { ScamSlayerTest } from '../components/ScamSlayerTest'
import { Chip, LinkButtons, PageBanner, Pill } from '../components/ui'

const NARRATIVE = [
  { label: 'THE PLATFORM', tone: 'text-emerald-700' },
  { label: 'HOW IT HELPS', tone: 'text-blue-700' },
  { label: 'TRACTION & RECOGNITION', tone: 'text-indigo-700' },
]

const TAGS: Record<string, string> = { Persifolio: 'PATENT', 'Scam Slayer': '1,000+ SENIORS', Polaris: 'WINNER' }

export function ProjectsView({ onOpen }: { onOpen: OpenEvidence }) {
  const [selected, setSelected] = useState(0)
  const project = projects[selected]
  const photos = photosFor(slug(project.name))
  // Documents: link records plus certificate images attached to the project
  const records = EVIDENCE.filter((e) => e.category === 'projects' && e.organization === project.name)
  const isPersifolio = project.name === 'Persifolio'
  const isScamSlayer = project.name === 'Scam Slayer'

  return (
    <div className="space-y-8 pb-16">
      <PageBanner
        icon={Rocket}
        eyebrow="PORTFOLIO HOLDINGS & PRODUCT VENTURES"
        title="Projects, Products & Intellectual Property"
        description="Shipped software for real users: an AI investment-education platform with a published patent, a scam-awareness app used in workshops with 1,000+ seniors, a hackathon-winning résumé roadmap, and a sports-analytics ML project."
      >
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {projects.map((p, i) => (
            <Pill key={p.name} active={selected === i} onClick={() => setSelected(i)}>
              <span>{p.name}</span>
              {TAGS[p.name] && (
                <span className={`text-[10px] font-mono px-1.5 rounded ${selected === i ? 'bg-emerald-500/30 text-emerald-300' : 'bg-slate-200 text-slate-600'}`}>{TAGS[p.name]}</span>
              )}
            </Pill>
          ))}
        </div>
      </PageBanner>

      <div key={selected} className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 shadow-xs space-y-8 animate-fade-in">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500">
              <span className="text-emerald-700 font-bold uppercase">{project.role}</span>
              <span>•</span>
              <span>{project.period}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">{project.name}</h2>
            <p className="text-sm sm:text-base text-slate-600">{project.tagline}</p>
          </div>
          <div className="lg:max-w-sm">
            <LinkButtons links={project.links} />
          </div>
        </div>

        {photos[0] && (
          <button
            onClick={() => onOpen(photos[0], photos)}
            className="group relative block w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 cursor-pointer text-left"
          >
            <img src={photos[0].images[0].src} alt={photos[0].caption} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent p-5 pt-16 flex items-end justify-between gap-3">
              <span className="text-white text-sm font-medium">{photos[0].caption}</span>
              {photos.length > 1 && (
                <span className="shrink-0 text-[11px] font-mono bg-white/95 text-slate-800 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5" /> {photos.length} photos
                </span>
              )}
            </div>
          </button>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.highlights.map((h) => (
            <div key={h.label} className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="text-xl sm:text-2xl font-bold font-display text-slate-900">{h.value}</div>
              <div className="text-xs font-medium text-slate-500 mt-1">{h.label}</div>
            </div>
          ))}
        </div>

        <div className={`grid grid-cols-1 gap-6 ${project.description.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
          {project.description.map((d, i) => (
            <div key={i} className="bg-slate-50/70 rounded-2xl p-5 border border-slate-100 space-y-2">
              <span className={`text-xs font-mono font-semibold block uppercase ${NARRATIVE[i]?.tone ?? 'text-slate-500'}`}>{NARRATIVE[i]?.label ?? 'DETAIL'}</span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        {project.features && (
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold block">Features & technical implementation</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {project.features.map((f) => (
                <div key={f} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.stack && (
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold block">Technology stack</span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
        )}

        {(isPersifolio || isScamSlayer) && (
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className={`text-xs font-mono font-bold uppercase block ${isPersifolio ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {isPersifolio ? 'Live interactive engine' : 'Cybersecurity simulator'}
                </span>
                <h3 className="text-lg font-bold font-display text-slate-900">{isPersifolio ? 'Persifolio Risk Allocation & Paper Trading' : 'Try a Scam Slayer Scenario'}</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">INTERACTIVE DEMO</span>
            </div>
            <div className="bg-slate-900 rounded-2xl p-2 sm:p-4">{isPersifolio ? <PersifolioSimulator /> : <ScamSlayerTest />}</div>
          </div>
        )}

        {photos.length > 1 && (
          <div className="space-y-5 pt-6 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-emerald-600" />
                <h3 className="text-lg font-bold font-display text-slate-900">{isScamSlayer ? 'Workshops & Press' : isPersifolio ? 'Workshops & Outreach' : 'Gallery'}</h3>
              </div>
              <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 w-fit">{photos.length} photos</span>
            </div>
            <PhotoGallery items={photos} onOpen={(p) => onOpen(p, photos)} />
          </div>
        )}

        {records.length > 0 && (
          <div className="space-y-5 pt-6 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-600" />
                <h3 className="text-lg font-bold font-display text-slate-900">{project.name} Records & Documentation</h3>
              </div>
              <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 w-fit">{records.length} records</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {records.map((e) => (
                <EvidenceCard key={e.id} item={e} onOpen={(x) => onOpen(x, records)} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
