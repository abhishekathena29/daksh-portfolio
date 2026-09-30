import { useState, useEffect } from 'react';
import { PageTab } from '../types/portfolio';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentTab: PageTab;
  onNavigate: (tab: PageTab) => void;
}

const NAV_LINKS: { tab: PageTab; label: string }[] = [
  { tab: 'home', label: 'TERMINAL' },
  { tab: 'projects', label: 'PROJECTS' },
  { tab: 'research', label: 'RESEARCH' },
  { tab: 'finance', label: 'FINANCE' },
  { tab: 'experience', label: 'EXPERIENCE' },
  { tab: 'impact', label: 'IMPACT' },
  { tab: 'honours', label: 'HONOURS' },
  { tab: 'about', label: 'THESIS' },
];

export default function Navbar({ currentTab, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTab = (tab: PageTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080a0e]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleSelectTab('home')}
          className="flex items-center gap-2.5 text-left group cursor-pointer select-none"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-400/80 transition-colors">
            <span className="font-mono text-xs font-bold text-emerald-400">DS</span>
          </div>
          <div>
            <div className="font-mono text-xs font-bold tracking-wider text-slate-100 group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span>DAKSH</span>
              <span className="text-emerald-500">//</span>
              <span>PORTFOLIO</span>
            </div>
            <div className="text-[9px] font-mono text-slate-400 tracking-tight">
              INVESTMENT TERMINAL
            </div>
          </div>
        </button>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0c1017]/80 border border-white/10 px-2 py-1 rounded-xl backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = currentTab === link.tab;
            return (
              <button
                key={link.tab}
                onClick={() => handleSelectTab(link.tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Status Indicator & Action */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-[#0e131b] border border-white/10 px-3 py-1.5 rounded-full font-mono text-[10px] text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-400 font-semibold">MARKET OPEN</span>
            <span className="text-slate-500 hidden xl:inline">| BLR / BOS</span>
          </div>

          <button
            onClick={() => handleSelectTab('about')}
            className="hidden md:inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors shadow-md cursor-pointer"
          >
            <span>THESIS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white bg-white/5 border border-white/10 cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0d13] border-b border-white/10 px-4 pt-3 pb-6 animate-fade-in">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              PORTFOLIO INDEX ACTIVE
            </span>
            <span className="font-mono text-[10px] text-slate-400">BANGALORE, IN</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = currentTab === link.tab;
              return (
                <button
                  key={link.tab}
                  onClick={() => handleSelectTab(link.tab)}
                  className={`p-2.5 rounded-lg text-xs font-mono text-left transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
