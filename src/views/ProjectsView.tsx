import { useEffect, useState } from 'react'
import { Banknote, Camera, ChevronDown, ExternalLink, CheckCircle2, FileText, HeartHandshake, MapPin, MonitorPlay, Rocket, Users } from 'lucide-react'
import type { Focus } from '../types'
import { projects, volunteering, type ProjectT } from '../data/resume'
import { EVIDENCE, photosFor, slug, type OpenEvidence } from '../data/evidence'
import { EvidenceCard, PhotoGallery } from '../components/EvidenceCard'
import { PersifolioSimulator } from '../components/PersifolioSimulator'
import { ScamSlayerTest } from '../components/ScamSlayerTest'
import { Chip, LinkButtons, PageBanner, Panel, PanelHead } from '../components/ui'

const NARRATIVE = [
  { label: 'THE PLATFORM', tone: 'text-emerald-700' },
  { label: 'HOW IT HELPS', tone: 'text-blue-700' },
  { label: 'TRACTION & RECOGNITION', tone: 'text-indigo-700' },
]

const TAGS: Record<string, string> = { Persifolio: 'PATENT', 'Scam Slayer': '1,000+ SENIORS', Polaris: 'WINNER' }

export function ProjectsView({ onOpen, focus }: { onOpen: OpenEvidence; focus: Focus }) {
  const [expanded, setExpanded] = useState<string[]>(focus ? [focus.anchor] : [])
  // A jump from the menu tree opens that project's details
  const [handled, setHandled] = useState(focus)
  if (handled !== focus) {
    setHandled(focus)
    if (focus && !expanded.includes(focus.anchor)) setExpanded([...expanded, focus.anchor])
  }

  useEffect(() => {
    if (focus) document.getElementById(`project-${focus.anchor}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [focus])

  const toggle = (anchor: string) =>
    setExpanded((list) => (list.includes(anchor) ? list.filter((a) => a !== anchor) : [...list, anchor]))

  return (
    <div className="space-y-8 pb-16">
      <PageBanner
        icon={Rocket}
        eyebrow="PORTFOLIO HOLDINGS & PRODUCT VENTURES"
        title="Projects"
        description="Ventures and products shipped to real users, and community initiatives run on the ground. Select Inspect on any project for the full story, demos, photos and records."
      >
        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold block mb-2">Jump to</span>
        <div className="flex flex-wrap items-center gap-2">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={`#projects/${slug(p.name)}`}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200/70 hover:text-slate-900 transition-colors flex items-center gap-2"
            >
              <span className="font-mono text-xs text-slate-400 num">{String(i + 1).padStart(2, '0')}</span>
              {p.name.split(':')[0]}
            </a>
          ))}
        </div>
      </PageBanner>

      <div className="space-y-8">
        {projects.map((p, i) => {
          const anchor = slug(p.name)
          return (
            <ProjectCard
              key={p.name}
              project={p}
              anchor={anchor}
              index={i}
              expanded={expanded.includes(anchor)}
              onToggle={() => toggle(anchor)}
              onOpen={onOpen}
            />
          )
        })}
      </div>

      <CommunityImpact onOpen={onOpen} />
    </div>
  )
}

function ProjectCard({
  project,
  anchor,
  index,
  expanded,
  onToggle,
  onOpen,
}: {
  project: ProjectT
  anchor: string
  index: number
  expanded: boolean
  onToggle: () => void
  onOpen: OpenEvidence
}) {
  const photos = photosFor(anchor)
  const cover = photos[0]
  // Documents: link records attached to the project
  const records = EVIDENCE.filter((e) => e.category === 'projects' && e.organization === project.name)
  const isPersifolio = project.name === 'Persifolio'
  const isScamSlayer = project.name === 'Scam Slayer'
  const hasDemo = isPersifolio || isScamSlayer
  const detailsId = `project-${anchor}-details`

  return (
    <article
      id={`project-${anchor}`}
      className={`scroll-mt-32 bg-white rounded-3xl border overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 ${expanded ? 'border-emerald-300' : 'border-slate-200/80'}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <button
          onClick={() => cover && onOpen(cover, photos)}
          disabled={!cover}
          className="group relative lg:col-span-2 aspect-[16/10] lg:aspect-auto lg:min-h-80 overflow-hidden bg-slate-100 cursor-pointer disabled:cursor-default text-left"
          aria-label={cover ? `View ${project.name} photos` : undefined}
        >
          {cover ? (
            <img src={cover.images[0].src} alt={cover.caption} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center">
              <Rocket className="w-16 h-16 text-emerald-200" />
            </div>
          )}
          <span className="absolute top-3 left-3 bg-white/95 text-slate-800 text-xs font-mono font-bold px-2 py-0.5 rounded shadow-xs border border-slate-200 num">
            {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          {TAGS[project.name] && (
            <span className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-mono font-bold px-2 py-0.5 rounded shadow-xs">{TAGS[project.name]}</span>
          )}
          {photos.length > 1 && (
            <span className="theme-fixed absolute bottom-3 right-3 bg-slate-900/80 text-white text-xs font-mono px-2.5 py-1 rounded-lg flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5" /> {photos.length} photos
            </span>
          )}
        </button>

        <div className="lg:col-span-3 p-6 sm:p-8 space-y-5">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500">
              <span className="text-emerald-700 font-bold uppercase">{project.role}</span>
              <span aria-hidden>•</span>
              <span>{project.period}</span>
            </div>
            <div className="flex items-center gap-3">
              {project.logo && <img src={project.logo} alt={`${project.name} logo`} className="h-10 w-10 rounded-xl object-contain bg-white border border-slate-200" />}
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">{project.name}</h2>
            </div>
            <p className="text-base sm:text-lg text-slate-600">{project.tagline}</p>
          </div>

          {project.funding && (
            <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
              <Banknote className="w-4 h-4" aria-hidden />
              Funding: <span className="num font-bold">{project.funding.amount}</span> from {project.funding.source}
              {project.funding.date && <span className="text-emerald-700/70">· {project.funding.date}</span>}
            </p>
          )}

          <div className={`grid grid-cols-2 gap-3 ${project.highlights.length >= 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
            {project.highlights.map((h) => (
              <div key={h.label} className="bg-slate-50 rounded-2xl p-3.5 border border-slate-100">
                <div className="text-lg sm:text-xl font-bold font-display text-slate-900 leading-tight">{h.value}</div>
                <div className="text-xs font-medium text-slate-500 mt-1">{h.label}</div>
              </div>
            ))}
          </div>

          {!expanded && <p className="text-sm sm:text-base text-slate-700 leading-relaxed line-clamp-3">{project.description[0]}</p>}

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors"
            >
              Visit {project.url.replace(/^https?:\/\/|\/$/g, '')}
              <ExternalLink className="w-4 h-4 text-emerald-300" />
            </a>
          )}
        </div>
      </div>

      <div className="px-6 sm:px-8 py-3.5 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-mono text-slate-500 flex flex-wrap items-center gap-x-3 gap-y-1">
          {photos.length > 0 && (
            <span className="flex items-center gap-1">
              <Camera className="w-3.5 h-3.5 text-emerald-600" /> {photos.length} photo{photos.length > 1 ? 's' : ''}
            </span>
          )}
          {records.length > 0 && (
            <span className="flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-emerald-600" /> {records.length} record{records.length > 1 ? 's' : ''}
            </span>
          )}
          {hasDemo && (
            <span className="flex items-center gap-1">
              <MonitorPlay className="w-3.5 h-3.5 text-emerald-600" /> Interactive demo
            </span>
          )}
        </span>
        <button
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls={detailsId}
          className={`text-sm font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer ${
            expanded ? 'bg-white border border-slate-200 text-slate-700 hover:text-slate-900' : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}
        >
          {expanded ? 'Hide details' : 'Inspect project'}
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {expanded && (
        <div id={detailsId} className="p-6 sm:p-8 space-y-8 border-t border-slate-100 animate-fade-in">
          <div className={`grid grid-cols-1 gap-5 ${project.description.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            {project.description.map((d, i) => (
              <div key={i} className="bg-slate-50/70 rounded-2xl p-5 border border-slate-100 space-y-2">
                <span className={`text-xs font-mono font-semibold block uppercase ${NARRATIVE[i]?.tone ?? 'text-slate-500'}`}>{NARRATIVE[i]?.label ?? 'DETAIL'}</span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          {project.features && (
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold block">Features & technical implementation</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {project.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(project.stack || project.links) && (
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
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
              {project.links && (
                <div className="space-y-2 md:max-w-md">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold block">Links</span>
                  <LinkButtons links={project.links} />
                </div>
              )}
            </div>
          )}

          {hasDemo && (
            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className={`text-xs font-mono font-bold uppercase block ${isPersifolio ? 'text-emerald-700' : 'text-amber-700'}`}>
                    {isPersifolio ? 'Live interactive engine' : 'Cybersecurity simulator'}
                  </span>
                  <h3 className="text-lg font-bold font-display text-slate-900">{isPersifolio ? 'Persifolio Risk Allocation & Paper Trading' : 'Try a Scam Slayer Scenario'}</h3>
                </div>
                <span className="text-xs font-mono text-slate-400">INTERACTIVE DEMO</span>
              </div>
              <div className="theme-fixed bg-slate-900 rounded-2xl p-2 sm:p-4">{isPersifolio ? <PersifolioSimulator /> : <ScamSlayerTest />}</div>
            </div>
          )}

          {photos.length > 1 && (
            <div className="space-y-5 pt-6 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-lg font-bold font-display text-slate-900">{isScamSlayer ? 'Workshops & Press' : isPersifolio ? 'Workshops & Outreach' : 'Gallery'}</h3>
                </div>
                <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 w-fit">{photos.length - 1} more photos</span>
              </div>
              <PhotoGallery items={photos.slice(1)} onOpen={(p) => onOpen(p, photos)} />
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
      )}
    </article>
  )
}

function CommunityImpact({ onOpen }: { onOpen: OpenEvidence }) {
  return (
    <Panel>
      <PanelHead
        eyebrow="Community impact"
        title="Service Projects"
        sub="Initiatives run on the ground: urban forests, tutoring and financial-literacy workshops."
        right={<span className="text-sm font-mono bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-semibold w-fit">100,000+ trees • ₹5,00,000 raised</span>}
      />
      <div className="space-y-5">
        {volunteering.map((v, i) => {
          const photos = photosFor(slug(v.name))
          const cert = EVIDENCE.find((e) => e.category === 'service' && e.title === v.name && e.images.length)
          return (
            <div key={v.name} className={`rounded-2xl border p-5 sm:p-6 space-y-4 ${i === 0 ? 'bg-emerald-50/40 border-emerald-200' : 'bg-slate-50/60 border-slate-100'}`}>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900">{v.name}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm font-mono text-slate-500 mt-0.5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {v.location}
                      </span>
                      {v.contact && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3.5 h-3.5" />
                            {v.contact}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full w-fit shrink-0">{v.period}</span>
              </div>
              <p className="text-base text-slate-700 leading-relaxed">{v.detail}</p>
              {photos.length > 0 && <PhotoGallery items={photos} onOpen={(p) => onOpen(p, photos)} />}
              {cert && (
                <button onClick={() => onOpen(cert)} className="group flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-2 pr-4 hover:border-emerald-300 transition-colors cursor-pointer text-left">
                  <img src={cert.images[0].src} alt="" className="w-24 h-16 object-cover rounded-lg" />
                  <span>
                    <span className="text-xs font-mono text-emerald-700 font-bold uppercase block">Certificate</span>
                    <span className="text-sm text-slate-700 font-medium">{cert.images[0].caption}</span>
                  </span>
                </button>
              )}
              <LinkButtons links={v.links} />
            </div>
          )
        })}
      </div>
    </Panel>
  )
}
