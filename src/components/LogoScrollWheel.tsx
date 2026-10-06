import type { PageTab } from '../types'

type Category = 'Research' | 'University' | 'Company' | 'Award Body' | 'Social NGO' | 'Government'

type Entity = {
  id: string
  name: string
  monogram: string
  sub: string
  category: Category
  relation: string
  badge: string
  color: string // monogram tile background
  tone: string // badge classes
  border: string
  target: PageTab
  logo?: string // official logo in /public/media/logos
}

const ENTITIES: Entity[] = [
  { id: 'rsi', logo: '/media/logos/rsi-india.png', name: 'Research Science Institute – India', monogram: 'RSI', sub: 'MIT-affiliated', category: 'Research', relation: 'Selected researcher, <2% acceptance', badge: 'Jun–Jul 2026', color: 'bg-emerald-600', tone: 'bg-emerald-50 text-emerald-800', border: 'border-emerald-200', target: 'research' },
  { id: 'iisc', name: 'Indian Institute of Science', monogram: 'IISc', sub: 'Mathematics', category: 'Research', relation: 'Mentored by Dr. Kaushal Verma, Dean', badge: 'Dynamical systems', color: 'bg-cyan-700', tone: 'bg-cyan-50 text-cyan-800', border: 'border-cyan-200', target: 'research' },
  { id: 'ccir', logo: '/media/logos/ccir.svg', name: 'Cambridge Centre of International Research', monogram: 'CC', sub: 'Cambridge, UK', category: 'Research', relation: 'NLP research — Hinglish POS tagging', badge: 'Published', color: 'bg-[#002f6c]', tone: 'bg-blue-50 text-blue-800', border: 'border-blue-200', target: 'research' },
  { id: 'ijsser', name: 'IJSSER', monogram: 'IJ', sub: 'Journal', category: 'Research', relation: 'UPI & financial inclusion paper', badge: 'Published', color: 'bg-violet-700', tone: 'bg-violet-50 text-violet-800', border: 'border-violet-200', target: 'research' },
  { id: 'nineleaps', logo: '/media/logos/nine-leaps.png', name: 'Nine Leaps / Noviro.ai', monogram: 'NL', sub: 'AI Centre of Excellence', category: 'Company', relation: 'Summer Intern — RAG & LLM tooling', badge: 'Apr–May 2025', color: 'bg-blue-600', tone: 'bg-sky-50 text-sky-800', border: 'border-sky-200', target: 'experience' },
  { id: 'addressmakers', name: 'Address Makers Pvt Ltd', monogram: 'AM', sub: 'Software', category: 'Company', relation: 'Software Dev Intern — production Gen AI bot', badge: 'May–Oct 2025', color: 'bg-indigo-600', tone: 'bg-indigo-50 text-indigo-800', border: 'border-indigo-200', target: 'experience' },
  { id: 'upenn', name: 'University of Pennsylvania', monogram: 'UP', sub: 'via Coursera', category: 'University', relation: 'FinTech specialisation (5 courses)', badge: 'Dec 2025', color: 'bg-[#01256e]', tone: 'bg-blue-50 text-blue-800', border: 'border-blue-200', target: 'education' },
  { id: 'iitm', name: 'IIT Madras', monogram: 'IIT', sub: 'Data Science & AI', category: 'University', relation: 'Certificate course in Data Science & AI', badge: 'Oct–Dec 2025', color: 'bg-amber-700', tone: 'bg-amber-50 text-amber-800', border: 'border-amber-200', target: 'education' },
  { id: 'yale', name: 'Yale University', monogram: 'Y', sub: 'via Coursera', category: 'University', relation: 'Introduction to Psychology', badge: 'Aug 2023', color: 'bg-[#00356b]', tone: 'bg-slate-100 text-slate-800', border: 'border-slate-300', target: 'education' },
  { id: 'inspirit', logo: '/media/logos/inspirit-ai.png', name: 'Inspirit AI', monogram: 'AI', sub: 'Stanford graduates', category: 'Company', relation: 'Moneyball: AI, Sports & Business', badge: 'May–Jun 2024', color: 'bg-[#251d54]', tone: 'bg-purple-50 text-purple-800', border: 'border-purple-200', target: 'education' },
  { id: 'inventure', name: 'Inventure Academy', monogram: 'IA', sub: 'Bangalore', category: 'University', relation: 'Cambridge A Level · CS Topper', badge: 'Grade 12', color: 'bg-orange-600', tone: 'bg-orange-50 text-orange-800', border: 'border-orange-200', target: 'education' },
  { id: 'bsa', name: 'British Science Association', monogram: 'CG', sub: 'Crest Awards', category: 'Award Body', relation: 'Crest Gold for Persifolio', badge: 'Nov 2025', color: 'bg-emerald-600', tone: 'bg-emerald-50 text-emerald-800', border: 'border-emerald-200', target: 'awards' },
  { id: 'harvard', logo: '/media/logos/harvard-hackathon.svg', name: 'Harvard Hackathon', monogram: 'H', sub: '48-hour build', category: 'Award Body', relation: 'National Winner — built Polaris', badge: 'Jan 2026', color: 'bg-red-600', tone: 'bg-rose-50 text-rose-800', border: 'border-rose-200', target: 'awards' },
  { id: 'hdfc', name: 'HDFC Credelia', monogram: 'HC', sub: 'Strategy Challenge', category: 'Company', relation: 'Portfolio Strategy Challenge — 1st place', badge: 'Winner', color: 'bg-red-700', tone: 'bg-rose-50 text-rose-800', border: 'border-rose-200', target: 'awards' },
  { id: 'patent', name: 'Indian Patent Journal', monogram: 'IPJ', sub: 'Govt. of India', category: 'Government', relation: 'Persifolio patent published', badge: '2026', color: 'bg-slate-800', tone: 'bg-slate-100 text-slate-800', border: 'border-slate-300', target: 'projects' },
  { id: 'tribes', name: 'Tribes for Good', monogram: 'TG', sub: 'Empower-Fin', category: 'Social NGO', relation: 'Financial-literacy workshops', badge: 'May 2024', color: 'bg-teal-600', tone: 'bg-teal-50 text-teal-800', border: 'border-teal-200', target: 'projects' },
  { id: 'shades', name: 'Shades of Tomorrow', monogram: 'ST', sub: 'Miyawaki forests', category: 'Social NGO', relation: '100,000+ trees across 6 sites', badge: '₹5,00,000 raised', color: 'bg-lime-700', tone: 'bg-lime-50 text-lime-800', border: 'border-lime-200', target: 'projects' },
]

function Mark({ e }: { e: Entity }) {
  if (e.logo) return <img src={e.logo} alt="" className="h-8 w-auto max-w-[96px] object-contain shrink-0" />
  return (
    <span className={`h-8 min-w-8 px-1.5 rounded-lg ${e.color} text-white flex items-center justify-center font-mono font-bold text-xs shrink-0`}>
      {e.monogram}
    </span>
  )
}

// One slow row of institutions; pauses on hover, each links to its section.
export function LogoScrollWheel({ onNavigate }: { onNavigate: (tab: PageTab) => void }) {
  const row = [...ENTITIES, ...ENTITIES]
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold font-display text-slate-900">Institutions & Partners</h2>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max gap-3 animate-ticker hover:[animation-play-state:paused]" style={{ animationDuration: '70s' }}>
          {row.map((e, i) => (
            <button
              key={`${e.id}-${i}`}
              onClick={() => onNavigate(e.target)}
              aria-hidden={i >= ENTITIES.length}
              tabIndex={i >= ENTITIES.length ? -1 : 0}
              className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 hover:border-emerald-300 transition-colors cursor-pointer shrink-0 text-left"
            >
              <Mark e={e} />
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-slate-900 whitespace-nowrap">{e.name}</span>
                <span className="text-xs text-slate-500 whitespace-nowrap">{e.relation}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
