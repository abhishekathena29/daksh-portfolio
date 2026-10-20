import { useEffect, useState } from 'react'
import { Banknote, ChevronDown, ExternalLink, CheckCircle2, HeartHandshake, MapPin, Rocket, Users } from 'lucide-react'
import type { Focus } from '../types'
import { projects, volunteering, type ProjectT } from '../data/resume'
import { EVIDENCE, photosFor, slug, type OpenEvidence } from '../data/evidence'
import { EvidenceCard, PhotoGallery } from '../components/EvidenceCard'
import { AutoCarousel } from '../components/AutoCarousel'
import { PersifolioSimulator } from '../components/PersifolioSimulator'
import { ScamSlayerTest } from '../components/ScamSlayerTest'
import { Chip, LinkButtons, PageBanner, Panel, PanelHead } from '../components/ui'

const NARRATIVE = [
  { label: 'THE PLATFORM', tone: 'text-emerald-700' },
  { label: 'HOW IT HELPS', tone: 'text-blue-700' },
  { label: 'TRACTION & RECOGNITION', tone: 'text-indigo-700' },
]

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
        eyebrow="PORTFOLIO HOLDINGS"
        title="Projects"
        description="Ventures and products shipped to real users, and community initiatives run on the ground."
      >
        <div className="flex flex-wrap items-center gap-2">
          {projects.map((p) => (
            <a
              key={p.name}
              href={`#projects/${slug(p.name)}`}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-100 text-slate-700 hover:bg-slate-200/70 hover:text-slate-900 transition-colors"
            >
              {p.name.split(':')[0]}
            </a>
          ))}
        </div>
      </PageBanner>

      <div className="space-y-8">
        {projects.map((p) => {
          const anchor = slug(p.name)
          return (
            <ProjectCard
              key={p.name}
              project={p}
              anchor={anchor}
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
  expanded,
  onToggle,
  onOpen,
}: {
  project: ProjectT
  anchor: string
  expanded: boolean
  onToggle: () => void
  onOpen: OpenEvidence
}) {
  const photos = photosFor(anchor)
  // Documents: link records attached to the project
  const records = EVIDENCE.filter((e) => e.category === 'projects' && e.organization === project.name)
  const isPersifolio = project.name === 'Persifolio'
  const hasDemo = isPersifolio || project.name === 'Scam Slayer'
  const detailsId = `project-${anchor}-details`

  return (
    <article
      id={`project-${anchor}`}
      className={`scroll-mt-32 bg-white rounded-3xl border overflow-hidden shadow-xs transition-colors duration-300 ${expanded ? 'border-emerald-300' : 'border-slate-200/80'}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="relative lg:col-span-2 aspect-[16/10] lg:aspect-auto lg:min-h-80 bg-slate-100">
          {photos.length ? (
            <AutoCarousel photos={photos} onOpen={onOpen} />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center">
              <Rocket className="w-16 h-16 text-emerald-200" />
            </div>
          )}
        </div>

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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 border-y border-slate-100 py-4">
            {project.highlights.map((h) => (
              <div key={h.label}>
                <p className="text-lg sm:text-xl font-bold font-display text-slate-900 leading-tight num">{h.value}</p>
                <p className="text-xs text-slate-500 mt-1">{h.label}</p>
              </div>
            ))}
          </div>

          {!expanded && <p className="text-sm sm:text-base text-slate-700 leading-relaxed line-clamp-3">{project.description[0]}</p>}

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onToggle}
              aria-expanded={expanded}
              aria-controls={detailsId}
              className={`text-sm font-semibold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer ${
                expanded ? 'bg-white border border-slate-200 text-slate-700 hover:text-slate-900' : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              {expanded ? 'Hide details' : 'Inspect project'}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
            </button>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors"
              >
                {project.urlLabel ?? `Visit ${project.url.replace(/^https?:\/\/|\/$/g, '')}`}
                <ExternalLink className="w-4 h-4 text-emerald-600" />
              </a>
            )}
          </div>
        </div>
      </div>

      {expanded && (
        <div id={detailsId} className="p-6 sm:p-8 space-y-8 border-t border-slate-100 animate-fade-in">
          <div className={`grid grid-cols-1 gap-6 ${project.description.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
            {project.description.map((d, i) => (
              <div key={i} className="space-y-2">
                <span className={`text-xs font-mono font-semibold block uppercase ${NARRATIVE[i]?.tone ?? 'text-slate-500'}`}>{NARRATIVE[i]?.label ?? 'DETAIL'}</span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          {project.features && (
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold block">How it works</span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.stack && (
            <div className="flex flex-wrap items-center gap-1.5">
              {project.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          )}

          {hasDemo && (
            <div className="space-y-4 pt-6 border-t border-slate-100">
              <div>
                <span className={`text-xs font-mono font-bold uppercase block ${isPersifolio ? 'text-emerald-700' : 'text-amber-700'}`}>Interactive demo</span>
                <h3 className="text-lg font-bold font-display text-slate-900">{isPersifolio ? 'Persifolio Risk Allocation & Paper Trading' : 'Try a Scam Slayer Scenario'}</h3>
              </div>
              <div className="theme-fixed bg-slate-900 rounded-2xl p-2 sm:p-4">{isPersifolio ? <PersifolioSimulator /> : <ScamSlayerTest />}</div>
            </div>
          )}

          {records.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-slate-100">
              <h3 className="text-lg font-bold font-display text-slate-900">Documents & links</h3>
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
      <PanelHead eyebrow="Community impact" title="Service Projects" sub="Tutoring and financial-literacy workshops run on the ground." />
      <div className="divide-y divide-slate-100">
        {volunteering.map((v) => {
          const photos = photosFor(slug(v.name))
          const cert = EVIDENCE.find((e) => e.category === 'service' && e.title === v.name && e.images.length)
          return (
            <div key={v.name} className="py-6 first:pt-0 last:pb-0 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
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
                <span className="text-xs font-mono text-slate-500 shrink-0">{v.period}</span>
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
