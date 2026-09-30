import { Menu, X, FileDown } from 'lucide-react'
import type { PageTab } from '../types'

const TAB_TITLES: Record<PageTab, { title: string; subtitle: string }> = {
  overview: { title: 'Dashboard Overview', subtitle: 'Live metrics, primary holdings & milestone ledger' },
  education: { title: 'Academic Profile', subtitle: 'Cambridge A Level, IGCSE & university coursework' },
  research: { title: 'Research Science', subtitle: 'Nonlinear dynamics (RSI-India), NLP (CCIR) & UPI economics' },
  projects: { title: 'Projects & Products', subtitle: 'Persifolio (patent published), Scam Slayer, Polaris & Moneyball' },
  experience: { title: 'Experience Ledger', subtitle: 'Nine Leaps / Noviro.ai and Address Makers internships' },
  awards: { title: 'Honours & Awards', subtitle: 'Crest Gold, Harvard Hackathon, Cambridge Distinction & more' },
  activities: { title: 'Field Initiatives', subtitle: '100,000+ trees planted, tutoring, athletics & clubs' },
  contact: { title: 'Inquiries & Contact', subtitle: 'Direct channel for research & admissions correspondence' },
}

export function TopNavbar({
  currentTab,
  onNavigate,
  onToggleMobileMenu,
  mobileMenuOpen,
}: {
  currentTab: PageTab
  onNavigate: (tab: PageTab) => void
  onToggleMobileMenu: () => void
  mobileMenuOpen: boolean
}) {
  const info = TAB_TITLES[currentTab]

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-3">
      <div className="flex items-center gap-4 min-w-0">
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="text-lg sm:text-xl font-bold font-display text-slate-900 leading-tight truncate">{info.title}</h1>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              LIVE
            </span>
          </div>
          <p className="text-xs text-slate-500 hidden sm:block truncate">{info.subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-mono text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-semibold">MARKET: OPEN</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-500">BANGALORE</span>
        </div>

        <a
          href="/Daksh-Sawhney-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium text-xs px-3 py-2 rounded-xl transition-colors"
        >
          <FileDown className="w-3.5 h-3.5 text-emerald-600" />
          <span>Résumé</span>
        </a>

        <button
          onClick={() => onNavigate('contact')}
          className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs px-4 py-2 rounded-xl shadow-xs transition-colors cursor-pointer"
        >
          Connect
        </button>
      </div>
    </header>
  )
}
