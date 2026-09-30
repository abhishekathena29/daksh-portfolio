// Evidence records derived from resume.ts — every certificate, letter and
// publication link becomes an inspectable card in the portfolio archive.
import {
  courses,
  education,
  honors,
  internships,
  otherAwards,
  projects,
  research,
  sports,
  volunteering,
  type LinkRef,
  type Photo,
} from './resume'

export type EvidenceCategory =
  | 'honours'
  | 'school-awards'
  | 'academics'
  | 'courses'
  | 'research'
  | 'projects'
  | 'experience'
  | 'athletics'
  | 'service'
  | 'photos'

export type Evidence = {
  id: string
  title: string
  category: EvidenceCategory
  organization: string
  date: string
  caption: string
  badge?: string
  links: LinkRef[]
  images: Photo[]
  // photo records: which gallery they belong to
  group?: string
  metadata: { label: string; value: string }[]
}

export const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const TIER_BADGE: Record<string, string> = {
  gold: 'Gold',
  silver: 'Silver',
  bronze: 'Bronze',
  national: 'National',
  distinction: 'Distinction',
}

// Rendered first pages of the PDFs in /public/docs
const DOC_THUMBS: Record<string, string> = {
  'crest-gold-certificate': '/media/awards/crest-gold-certificate.jpg',
  'cs-subject-topper': '/media/awards/cs-subject-topper.jpg',
  'community-outreach-award': '/media/awards/community-outreach-award.jpg',
  'hdfc-portfolio-strategy-challenge': '/media/awards/hdfc-portfolio-strategy-challenge.jpg',
  'rsi-india-certificate': '/media/research/rsi-india-certificate.jpg',
  'ccir-cambridge-future-scholar': '/media/research/ccir-cambridge-future-scholar.jpg',
  'upenn-fintech-specialisation': '/media/education/upenn-fintech-specialisation.jpg',
  'persifolio-patent-journal': '/media/persifolio/persifolio-patent-journal.jpg',
  'tisb-aquatic-meet': '/media/athletics/tisb-aquatic-meet.jpg',
  'shot-put-sports-fest-2025': '/media/athletics/shot-put-sports-fest-2025.jpg',
  'shot-put-athletics-meet-2025': '/media/athletics/shot-put-athletics-meet-2025.jpg',
  'empower-fin-certificate': '/media/service/empower-fin-certificate.jpg',
}

function withDocThumbs(e: Evidence): Evidence {
  if (e.images.length) return e
  const images = e.links.flatMap((l) => {
    const m = l.href.match(/^\/docs\/(.+)\.pdf$/)
    const src = m && DOC_THUMBS[m[1]]
    return src ? [{ src, caption: l.label }] : []
  })
  return { ...e, images }
}

export const EVIDENCE: Evidence[] = ([
  ...honors.map<Evidence>((h) => ({
    id: `honour-${slug(h.title)}`,
    title: h.title,
    category: 'honours',
    organization: h.title.startsWith('Crest')
      ? 'British Science Association'
      : h.title.startsWith('Harvard')
        ? 'Harvard Hackathon'
        : h.title.startsWith('Cambridge')
          ? 'Cambridge International'
          : 'Inventure Academy',
    date: h.date,
    caption: h.detail ?? h.title,
    badge: h.tier ? TIER_BADGE[h.tier] : undefined,
    links: h.links ?? [],
    images: h.images ?? [],
    metadata: [
      { label: 'Awarded', value: h.date },
      ...(h.tier ? [{ label: 'Tier', value: TIER_BADGE[h.tier] }] : []),
    ],
  })),
  ...otherAwards.map<Evidence>((a) => ({
    id: `award-${slug(a.title)}-${slug(a.date)}`,
    title: a.title,
    category: a.title.startsWith('Award of Excellence') ? 'school-awards' : 'honours',
    organization: a.title.includes('HDFC') ? 'HDFC Credelia' : 'Inventure Academy',
    date: a.date,
    caption: a.detail ?? `${a.title}, conferred ${a.date}.`,
    badge: a.title.includes('Winner') ? 'Winner' : 'Excellence',
    links: a.links ?? [],
    images: a.images ?? [],
    metadata: [{ label: 'Awarded', value: a.date }],
  })),
  ...education
    .filter((e) => e.links?.length)
    .map<Evidence>((e) => ({
      id: `edu-${slug(e.level)}`,
      title: e.level,
      category: 'academics',
      organization: e.institution,
      date: e.period,
      caption: e.subjects,
      badge: e.grades ? `Grade ${e.grades}` : 'Transcript',
      links: e.links ?? [],
      images: e.images ?? [],
      metadata: [
        { label: 'Period', value: e.period },
        { label: 'Level', value: e.level },
      ],
    })),
  ...courses.map<Evidence>((c) => ({
    id: `course-${slug(c.name)}`,
    title: c.name,
    category: 'courses',
    organization: c.org,
    date: c.date,
    caption: c.details ?? `${c.name} — ${c.org}.`,
    badge: c.grade,
    links: c.links ?? [],
    images: c.images ?? [],
    metadata: [
      { label: 'Institution', value: c.org },
      { label: 'Completed', value: c.date },
      ...(c.grade ? [{ label: 'Taken in', value: c.grade }] : []),
    ],
  })),
  ...research.map<Evidence>((r) => ({
    id: `research-${slug(r.title).slice(0, 40)}`,
    title: r.title,
    category: 'research',
    organization: r.org,
    date: r.period,
    caption: r.summary,
    badge: r.statusTone === 'published' ? 'Published' : 'Under review',
    links: r.links ?? [],
    images: r.images ?? [],
    metadata: [
      { label: 'Status', value: r.status },
      { label: 'Period', value: r.period },
      ...(r.mentor ? [{ label: 'Mentor', value: r.mentor }] : []),
    ],
  })),
  ...projects.flatMap<Evidence>((p) =>
    (p.links ?? []).map((l) => ({
      id: `project-${slug(p.name)}-${slug(l.label)}`,
      title: `${p.name} — ${l.label}`,
      category: 'projects',
      organization: p.name,
      date: p.period,
      caption: p.tagline,
      badge: p.name,
      links: [l],
      images: [],
      metadata: [
        { label: 'Project', value: p.name },
        { label: 'Role', value: p.role },
      ],
    })),
  ),
  ...internships.map<Evidence>((i) => ({
    id: `intern-${slug(i.company).slice(0, 30)}`,
    title: `${i.role} — ${i.company.split(' — ')[0]}`,
    category: 'experience',
    organization: i.company,
    date: i.period,
    caption: i.points[0],
    badge: 'Internship',
    links: i.links ?? [],
    images: i.images ?? [],
    metadata: [
      { label: 'Period', value: i.period },
      { label: 'Mode', value: i.location },
      ...(i.contact ? [{ label: 'Supervisor', value: i.contact }] : []),
    ],
  })),
  ...sports
    .filter((s) => s.links?.length)
    .map<Evidence>((s) => ({
      id: `sport-${slug(s.name)}-${s.date}`,
      title: `${s.name} — ${s.achievement}`,
      category: 'athletics',
      organization: s.level,
      date: s.date,
      caption: `${s.achievement} at ${s.name} (${s.level}), ${s.date}.`,
      badge: s.achievement,
      links: s.links ?? [],
      images: s.images ?? [],
      metadata: [
        { label: 'Level', value: s.level },
        { label: 'Result', value: s.achievement },
      ],
    })),
  ...volunteering
    .filter((v) => v.links?.length)
    .map<Evidence>((v) => ({
      id: `service-${slug(v.name)}`,
      title: v.name,
      category: 'service',
      organization: v.location,
      date: v.period,
      caption: v.detail,
      badge: 'Community',
      links: v.links ?? [],
      images: v.images ?? [],
      metadata: [
        { label: 'Period', value: v.period },
        ...(v.contact ? [{ label: 'Contact', value: v.contact }] : []),
      ],
    })),
  ...photoRecords(),
] as Evidence[]).map(withDocThumbs)

// Field photographs from projects and community work become their own records.
function photoRecords(): Evidence[] {
  const sets: { group: string; org: string; date: string; images: Photo[] }[] = [
    ...projects.map((p) => ({ group: slug(p.name), org: p.name, date: p.period, images: p.images ?? [] })),
    ...volunteering.map((v) => ({ group: slug(v.name), org: v.name.split(' — ')[0], date: v.period, images: v.images ?? [] })),
  ]
  const seen = new Set<string>()
  return sets.flatMap((set) =>
    set.images
      // certificates are already attached to their award / project records
      .filter((img) => !/certificate|patent|crest/i.test(img.src) && !seen.has(img.src) && seen.add(img.src))
      .map((img) => ({
        id: `photo-${slug(img.src)}`,
        title: img.caption,
        category: 'photos' as const,
        group: set.group,
        organization: set.org,
        date: set.date,
        caption: img.caption,
        badge: 'Field photo',
        links: [],
        images: [img],
        metadata: [{ label: 'Initiative', value: set.org }],
      })),
  )
}

export const photosFor = (group: string) => EVIDENCE.filter((e) => e.category === 'photos' && e.group === group)

export const evidenceBy = (...cats: EvidenceCategory[]) => EVIDENCE.filter((e) => cats.includes(e.category))

export type OpenEvidence = (item: Evidence, list?: Evidence[]) => void

export const findEvidence = (id: string) => EVIDENCE.find((e) => e.id === id)
