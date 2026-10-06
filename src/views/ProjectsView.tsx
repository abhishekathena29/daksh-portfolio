import { useState } from 'react'
import { Banknote, Camera, ExternalLink, CheckCircle2, FileText, HeartHandshake, MapPin, Rocket, Users } from 'lucide-react'
import { projects, volunteering } from '../data/resume'
import { EVIDENCE, photosFor, slug, type OpenEvidence } from '../data/evidence'
import { EvidenceCard, PhotoGallery } from '../components/EvidenceCard'
import { PersifolioSimulator } from '../components/PersifolioSimulator'
import { ScamSlayerTest } from '../components/ScamSlayerTest'
import { Chip, LinkButtons, PageBanner, Panel, PanelHead, Pill } from '../components/ui'

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
        title="Projects"
        description="Ventures and products shipped to real users, and community initiatives run on the ground."
      >
        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold block mb-2">Ventures & products</span>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {projects.map((p, i) => (
            <Pill key={p.name} active={selected === i} onClick={() => setSelected(i)}>
              <span>{p.name}</span>
              {TAGS[p.name] && (
                <span className={`text-[12px] font-mono px-1.5 rounded ${selected === i ? 'bg-emerald-500/30 text-emerald-300' : 'bg-slate-200 text-slate-600'}`}>{TAGS[p.name]}</span>
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
            <div className="flex items-center gap-3">
              {project.logo && <img src={project.logo} alt={`${project.name} logo`} className="h-10 w-10 rounded-xl object-contain bg-white border border-slate-200" />}
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">{project.name}</h2>
            </div>
            <p className="text-base sm:text-lg text-slate-600">{project.tagline}</p>
            {project.funding && (
              <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
                <Banknote className="w-4 h-4" aria-hidden />
                Funding: <span className="num font-bold">{project.funding.amount}</span> from {project.funding.source}
                {project.funding.date && <span className="text-emerald-700/70">· {project.funding.date}</span>}
              </p>
            )}
          </div>
          <div className="lg:max-w-sm">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mb-3 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors"
              >
                Visit {project.url.replace(/^https?:\/\/|\/$/g, '')}
                <ExternalLink className="w-4 h-4 text-emerald-300" />
              </a>
            )}
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
                <span className="shrink-0 text-xs font-mono bg-white/95 text-slate-800 px-2.5 py-1 rounded-lg flex items-center gap-1.5">
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

      <CommunityImpact onOpen={onOpen} />
    </div>
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
