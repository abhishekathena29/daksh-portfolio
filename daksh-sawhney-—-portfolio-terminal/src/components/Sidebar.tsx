import React from 'react';
import { PageTab } from '../types/portfolio';
import { 
  LayoutGrid, 
  GraduationCap, 
  FlaskConical, 
  Rocket, 
  Briefcase, 
  Trophy, 
  Activity, 
  Mail,
  ShieldCheck,
  TrendingUp,
  MapPin,
  ExternalLink
} from 'lucide-react';

interface SidebarProps {
  currentTab: PageTab;
  onNavigate: (tab: PageTab) => void;
  mobileMenuOpen?: boolean;
  onCloseMobile?: () => void;
}

const MENU_ITEMS: { tab: PageTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { tab: 'overview', label: 'Overview', icon: LayoutGrid },
  { tab: 'education', label: 'Education', icon: GraduationCap },
  { tab: 'research', label: 'Research', icon: FlaskConical },
  { tab: 'projects', label: 'Projects', icon: Rocket },
  { tab: 'experience', label: 'Experience', icon: Briefcase },
  { tab: 'awards', label: 'Awards', icon: Trophy },
  { tab: 'activities', label: 'Activities', icon: Activity },
  { tab: 'contact', label: 'Contact', icon: Mail },
];

export default function Sidebar({ currentTab, onNavigate, mobileMenuOpen, onCloseMobile }: SidebarProps) {
  const handleSelect = (tab: PageTab) => {
    onNavigate(tab);
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <aside
      className={`fixed lg:sticky top-0 left-0 h-screen z-40 w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-5 transition-transform duration-300 ${
        mobileMenuOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      <div>
        {/* Brand Logo matching reference */}
        <div className="flex items-center justify-between pb-6 mb-4 border-b border-slate-100">
          <button
            onClick={() => handleSelect('overview')}
            className="flex items-center gap-2 text-left group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
              DS
            </div>
            <div>
              <span className="font-display font-bold text-base tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                DAKSH.SN
              </span>
              <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">
                PORTFOLIO TERMINAL
              </span>
            </div>
          </button>
        </div>

        {/* Main Menu Header */}
        <div className="mb-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold px-3">
            MAIN MENU
          </span>
        </div>

        {/* Menu Navigation Items */}
        <nav className="space-y-1">
          {MENU_ITEMS.map((item) => {
            const isActive = currentTab === item.tab;
            const Icon = item.icon;
            return (
              <button
                key={item.tab}
                onClick={() => handleSelect(item.tab)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left cursor-pointer ${
                  isActive
                    ? 'bg-slate-100 text-slate-900 font-semibold shadow-2xs border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-emerald-600' : 'text-slate-400 group-hover:text-slate-600'
                  }`}
                />
                <span>{item.label}</span>

                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Sidebar Footer info */}
      <div className="border-t border-slate-100 pt-4 space-y-3">
        <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>MARKET STATUS: OPEN</span>
          </div>
          <p className="text-[10px] text-slate-500 font-mono">
            Bangalore / Boston / Cambridge
          </p>
        </div>

        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-emerald-600" />
            Inventure Academy
          </span>
          <span>Grade 11/12</span>
        </div>
      </div>
    </aside>
  );
}
