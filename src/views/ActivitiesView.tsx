import { useState } from 'react'
import { Activity, Camera, ExternalLink, HeartHandshake, MapPin, Medal, PenLine, Users, Wrench } from 'lucide-react'
import { clubsAndMun, otherPursuits, skills, sports, volunteering } from '../data/resume'
import { EVIDENCE, photosFor, slug, type OpenEvidence } from '../data/evidence'
import { PhotoGallery } from '../components/EvidenceCard'
import { LinkButtons, PageBanner, Panel, PanelHead, Pill } from '../components/ui'

type Sub = 'all' | 'service' | 'athletics' | 'clubs'

const TIER = {
  gold: 'bg-amber-100 text-amber-800 border-amber-300',
  silver: 'bg-slate-100 text-slate-700 border-slate-300',
  bronze: 'bg-orange-100 text-orange-800 border-orange-300',
  national: 'bg-violet-100 text-violet-800 border-violet-300',
} as const

const SKILL_GROUPS: [string, string[]][] = [
  ['AI / ML', skills.aiml],
  ['Programming', skills.programming],
  ['Cloud', skills.cloud],
  ['Databases', skills.databases],
]

export function ActivitiesView({ onOpen }: { onOpen: OpenEvidence }) {
  const [sub, setSub] = useState<Sub>('all')
  const show = (s: Sub) => sub === 'all' || sub === s
  const sportRecords = EVIDENCE.filter((e) => e.category === 'athletics' && e.images.length)
  const medals = sports.filter((s) => s.tier && s.tier !== 'national').length

  return (
    <div className="space-y-8 pb-16">
      <PageBanner
        icon={Activity}
        eyebrow="COMMUNITY, ATHLETICS & FIELD INITIATIVES"
        title="Field Action & Community Impact"
        description="Real impact off the screen: raising ₹5,00,000 to plant 100,000+ Miyawaki trees, tutoring government-school students, running financial-literacy workshops, and competing in athletics."
      >
        <div className="flex flex-wrap items-center gap-2">
          <Pill active={sub === 'all'} onClick={() => setSub('all')}>
            All initiatives
          </Pill>
          <Pill active={sub === 'service'} onClick={() => setSub('service')} activeClass="bg-emerald-600 text-white font-semibold shadow-2xs">
            Community service ({volunteering.length})
          </Pill>
          <Pill active={sub === 'athletics'} onClick={() => setSub('athletics')} activeClass="bg-blue-600 text-white font-semibold shadow-2xs">
            Athletics ({medals} medals)
          </Pill>
          <Pill active={sub === 'clubs'} onClick={() => setSub('clubs')} activeClass="bg-indigo-600 text-white font-semibold shadow-2xs">
            Clubs, writing & skills
          </Pill>
        </div>
      </PageBanner>

      {show('service') && (
        <Panel className="animate-fade-in">
          <PanelHead
            eyebrow="Community stewardship"
            title="Volunteering & Social Impact"
            right={<span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-semibold w-fit">100,000+ trees • ₹5,00,000 raised</span>}
          />
          <div className="space-y-4">
            {volunteering.map((v, i) => (
              <div key={v.name} className={`rounded-2xl border p-5 space-y-3 ${i === 0 ? 'bg-emerald-50/40 border-emerald-200' : 'bg-slate-50/60 border-slate-100'}`}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-display text-slate-900">{v.name}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-500 mt-0.5">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {v.location}
                        </span>
                        {v.contact && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {v.contact}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full w-fit shrink-0">{v.period}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{v.detail}</p>
                <VolunteerMedia name={v.name} onOpen={onOpen} />
                <LinkButtons links={v.links} />
              </div>
            ))}
          </div>
        </Panel>
      )}

      {show('athletics') && (
        <Panel className="animate-fade-in">
          <PanelHead
            eyebrow="Athletics"
            title="Sports & Athletic Record"
            right={<span className="text-xs font-mono bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold w-fit">Shot put • Basketball • Swimming • Badminton</span>}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sports.map((s) => {
              const rec = sportRecords.find((r) => r.id === `sport-${slug(s.name)}-${s.date}`)
              return (
              <div key={s.name + s.date + s.achievement} className="bg-white rounded-2xl border border-slate-200/80 p-4 flex flex-col justify-between gap-3 hover:shadow-md transition-all">
                {rec?.images[0] && (
                  <button onClick={() => onOpen(rec, sportRecords)} className="group relative -mx-4 -mt-4 h-32 overflow-hidden rounded-t-2xl bg-slate-100 cursor-pointer" aria-label={`Inspect ${s.name} certificate`}>
                    <img src={rec.images[0].src} alt="" loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    {rec.images.length > 1 && <span className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">{rec.images.length} certificates</span>}
                  </button>
                )}
                <div className="flex items-start justify-between gap-2">
                  <Medal className={`w-6 h-6 shrink-0 ${s.tier === 'gold' ? 'text-amber-500' : s.tier === 'silver' ? 'text-slate-400' : s.tier === 'bronze' ? 'text-orange-500' : 'text-violet-500'}`} />
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${s.tier ? TIER[s.tier] : TIER.silver}`}>{s.achievement}</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold font-display text-slate-900 leading-snug">{s.name}</h4>
                  <p className="text-[11px] font-mono text-slate-500 mt-1">
                    {s.level} • {s.date}
                  </p>
                </div>
                {s.links?.[0] && (
                  <a href={s.links[0].href} target="_blank" rel="noreferrer" className="text-[11px] font-mono text-emerald-700 hover:text-emerald-800 flex items-center gap-1">
                    {s.links[0].label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              )
            })}
          </div>
        </Panel>
      )}

      {show('clubs') && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
          <Panel>
            <PanelHead eyebrow="Leadership" title="Clubs & MUN" />
            <div className="space-y-3">
              {clubsAndMun.map((c) => (
                <div key={c.name} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-slate-900">{c.name}</h4>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0">{c.date}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">{c.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <PenLine className="w-3.5 h-3.5" /> Writing & other pursuits
              </span>
              {otherPursuits.map((p) => (
                <div key={p.title} className="flex items-start justify-between gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div>
                    <span className="text-[10px] font-mono text-indigo-700 font-bold uppercase">{p.type}</span>
                    <h4 className="text-sm font-semibold text-slate-900">{p.title}</h4>
                    <span className="text-[11px] font-mono text-slate-400">{p.date}</span>
                  </div>
                  {'link' in p && p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-emerald-700 shrink-0" aria-label="Read article">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Panel>

          <Panel>
            <PanelHead eyebrow="Toolkit" title="Technical Skills" />
            <div className="space-y-5">
              {SKILL_GROUPS.map(([label, list]) => (
                <div key={label}>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-1.5 mb-2">
                    <Wrench className="w-3.5 h-3.5" /> {label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {list.map((s) => (
                      <span key={s} className="text-xs font-mono bg-slate-900 text-emerald-300 px-3 py-1.5 rounded-lg">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      )}
    </div>
  )
}

// Photo gallery (or certificate) for one volunteering initiative
function VolunteerMedia({ name, onOpen }: { name: string; onOpen: OpenEvidence }) {
  const photos = photosFor(slug(name))
  if (photos.length) {
    return (
      <div className="space-y-2 pt-1">
        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold flex items-center gap-1.5">
          <Camera className="w-3.5 h-3.5" /> Field photographs ({photos.length})
        </span>
        <PhotoGallery items={photos} onOpen={(p) => onOpen(p, photos)} />
      </div>
    )
  }
  const cert = EVIDENCE.find((e) => e.category === 'service' && e.title === name && e.images.length)
  if (!cert) return null
  return (
    <button onClick={() => onOpen(cert)} className="group flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-2 pr-4 hover:border-emerald-300 transition-colors cursor-pointer text-left">
      <img src={cert.images[0].src} alt="" className="w-24 h-16 object-cover rounded-lg" />
      <span>
        <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase block">Certificate</span>
        <span className="text-xs text-slate-700 font-medium">{cert.images[0].caption}</span>
      </span>
    </button>
  )
}
