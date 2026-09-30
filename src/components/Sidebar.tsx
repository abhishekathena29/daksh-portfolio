import type { ComponentType } from 'react'
import {
  LayoutGrid,
  GraduationCap,
  FlaskConical,
  Rocket,
  Briefcase,
  Trophy,
  Activity,
  Mail,
  MapPin,
  FileDown,
} from 'lucide-react'
import type { PageTab } from '../types'
import { profile } from '../data/resume'

const MENU_ITEMS: { tab: PageTab; label: string; icon: ComponentType<{ className?: string }> }[] = [
  { tab: 'overview', label: 'Overview', icon: LayoutGrid },
  { tab: 'education', label: 'Education', icon: GraduationCap },
  { tab: 'research', label: 'Research', icon: FlaskConical },
  { tab: 'projects', label: 'Projects', icon: Rocket },
  { tab: 'experience', label: 'Experience', icon: Briefcase },
  { tab: 'awards', label: 'Awards', icon: Trophy },
  { tab: 'activities', label: 'Activities', icon: Activity },
  { tab: 'contact', label: 'Contact', icon: Mail },
]

export function Sidebar({
  currentTab,
  onNavigate,
  mobileMenuOpen,
}: {
  currentTab: PageTab
  onNavigate: (tab: PageTab) => void
  mobileMenuOpen: boolean
}) {
  return (
    <aside
      className={`fixed lg:sticky top-0 left-0 h-screen z-40 w-64 shrink-0 bg-white border-r border-slate-200 flex flex-col justify-between p-5 transition-transform duration-300 ${
        mobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      <div>
        <div className="flex items-center justify-between pb-6 mb-4 border-b border-slate-100">
          <button onClick={() => onNavigate('overview')} className="flex items-center gap-2 text-left group cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
              {profile.initials}
            </div>
            <div>
              <span className="font-display font-bold text-base tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                DAKSH.SN
              </span>
              <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">PORTFOLIO TERMINAL</span>
            </div>
          </button>
        </div>

        <div className="mb-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold px-3">MAIN MENU</span>
        </div>

        <nav className="space-y-1">
          {MENU_ITEMS.map(({ tab, label, icon: Icon }) => {
            const isActive = currentTab === tab
            return (
              <button
                key={tab}
                onClick={() => onNavigate(tab)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left cursor-pointer border ${
                  isActive
                    ? 'bg-slate-100 text-slate-900 font-semibold shadow-2xs border-slate-200/60'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span>{label}</span>
                {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500" />}
              </button>
            )
          })}
        </nav>

        <div className="mt-6 mb-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold px-3">RESOURCES</span>
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
          <p className="text-[10px] text-slate-500 font-mono leading-relaxed">{profile.currentlyBuilding}</p>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
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
