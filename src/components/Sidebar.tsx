import { useState, type ComponentType } from 'react'
import {
  ChevronRight,
  House,
  GraduationCap,
  FlaskConical,
  Rocket,
  Briefcase,
  Trophy,
  ChartCandlestick,
  Mail,
  MapPin,
  FileDown,
} from 'lucide-react'
import type { PageTab } from '../types'
import { profile, projects } from '../data/resume'
import { slug } from '../data/evidence'

// Children of the Projects entry in the menu tree
const PROJECT_LINKS = projects.map((p) => ({ anchor: slug(p.name), label: p.name.split(':')[0] }))

const MENU_ITEMS: { tab: PageTab; label: string; icon: ComponentType<{ className?: string }> }[] = [
  { tab: 'home', label: 'Home', icon: House },
  { tab: 'research', label: 'Research', icon: FlaskConical },
  { tab: 'projects', label: 'Projects', icon: Rocket },
  { tab: 'education', label: 'Education & Grades', icon: GraduationCap },
  { tab: 'awards', label: 'Awards', icon: Trophy },
  { tab: 'experience', label: 'Experience', icon: Briefcase },
  { tab: 'passions', label: 'Hobbies & Passions', icon: ChartCandlestick },
  { tab: 'contact', label: 'Contact', icon: Mail },
]

export function Sidebar({
  currentTab,
  activeAnchor,
  onNavigate,
  mobileMenuOpen,
}: {
  currentTab: PageTab
  activeAnchor?: string
  onNavigate: (tab: PageTab, anchor?: string) => void
  mobileMenuOpen: boolean
}) {
  const [projectsOpen, setProjectsOpen] = useState(currentTab === 'projects')
  // Opening the Projects page always unfolds its branch
  const [lastTab, setLastTab] = useState(currentTab)
  if (lastTab !== currentTab) {
    setLastTab(currentTab)
    if (currentTab === 'projects') setProjectsOpen(true)
  }

  return (
    <aside
      className={`fixed lg:sticky top-0 left-0 h-screen z-40 w-64 shrink-0 bg-white border-r border-slate-200 flex flex-col justify-between gap-6 p-5 overflow-y-auto transition-transform duration-300 ${
        mobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      <div>
        <div className="flex items-center justify-between pb-6 mb-4 border-b border-slate-100">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 text-left group cursor-pointer">
            <div>
              <span className="font-display font-bold text-base tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                DAKSH.SN
              </span>
              <span className="text-[12px] font-mono text-slate-400 block -mt-0.5">PORTFOLIO TERMINAL</span>
            </div>
          </button>
        </div>

        <div className="mb-2">
          <span className="text-[12px] font-mono uppercase tracking-widest text-slate-400 font-semibold px-3">MAIN MENU</span>
        </div>

        <nav className="space-y-1">
          {MENU_ITEMS.map(({ tab, label, icon: Icon }) => {
            const isActive = currentTab === tab
            const isTree = tab === 'projects'
            const item = (
              <button
                key={tab}
                onClick={() => {
                  if (isTree) setProjectsOpen(true)
                  onNavigate(tab)
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left cursor-pointer border ${
                  isActive
                    ? 'bg-slate-100 text-slate-900 font-semibold shadow-2xs border-slate-200/60'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span>{label}</span>
                {isActive && !isTree && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500" />}
              </button>
            )
            if (!isTree) return item

            return (
              <div key={tab}>
                <div className="relative">
                  {item}
                  <button
                    onClick={() => setProjectsOpen((o) => !o)}
                    aria-expanded={projectsOpen}
                    aria-controls="project-tree"
                    aria-label={projectsOpen ? 'Collapse projects' : 'Expand projects'}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-200/60 cursor-pointer"
                  >
                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${projectsOpen ? 'rotate-90' : ''}`} />
                  </button>
                </div>
                {projectsOpen && (
                  <ul id="project-tree" className="ml-5 mt-1 mb-1 border-l border-slate-200 animate-fade-in">
                    {PROJECT_LINKS.map((p) => {
                      const on = isActive && activeAnchor === p.anchor
                      return (
                        <li key={p.anchor} className="relative">
                          <span className="absolute left-0 top-1/2 w-3 border-t border-slate-200" aria-hidden />
                          <button
                            onClick={() => onNavigate('projects', p.anchor)}
                            className={`ml-4 w-[calc(100%-1rem)] text-left px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                              on ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                          >
                            {p.label}
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            )
          })}
        </nav>

        <div className="mt-6 mb-2">
          <span className="text-[12px] font-mono uppercase tracking-widest text-slate-400 font-semibold px-3">RESOURCES</span>
        </div>
        <a
          href="/Daksh-Sawhney-Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all"
        >
          <FileDown className="w-4 h-4 text-slate-400" />
          <span>Download Résumé</span>
        </a>
      </div>

      <div className="border-t border-slate-100 pt-4 space-y-3">
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>STATUS: BUILDING</span>
          </div>
          <p className="text-[12px] text-slate-500 font-mono leading-relaxed">{profile.currentlyBuilding}</p>
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-emerald-600" />
            {profile.school}
          </span>
          <span>Grade 12</span>
        </div>
      </div>
    </aside>
  )
}
