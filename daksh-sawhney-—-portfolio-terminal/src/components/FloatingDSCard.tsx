import { useState, useEffect } from 'react';
import { PageTab } from '../types/portfolio';
import { TrendingUp, Activity, Terminal, Shield, Sparkles, X } from 'lucide-react';

interface FloatingDSCardProps {
  currentTab: PageTab;
  onNavigate: (tab: PageTab) => void;
}

export default function FloatingDSCard({ currentTab, onNavigate }: FloatingDSCardProps) {
  const [minimized, setMinimized] = useState(false);
  const [pulse, setPulse] = useState(true);

  // Dynamic context tag based on current section
  const getContextInfo = () => {
    switch (currentTab) {
      case 'research':
        return { tag: 'DS / RESEARCH', metric: 'ξ = 0.842 // TRANSIENT CHAOS', icon: Activity, color: 'text-cyan-400', border: 'border-cyan-500/30' };
      case 'projects':
        return { tag: 'DS / PRODUCTS', metric: 'PERSIFOLIO // 4,000+ USERS', icon: Terminal, color: 'text-emerald-400', border: 'border-emerald-500/30' };
      case 'finance':
        return { tag: 'DS / ALPHA', metric: 'EQUITY // +55% 2-YR GAIN', icon: TrendingUp, color: 'text-emerald-400', border: 'border-emerald-500/30' };
      case 'impact':
        return { tag: 'DS / IMPACT', metric: '100K TREES // ₹500K RAISED', icon: Sparkles, color: 'text-green-400', border: 'border-green-500/30' };
      case 'honours':
        return { tag: 'DS / HONOURS', metric: 'RSI-INDIA // 2 PATENTS', icon: Shield, color: 'text-amber-400', border: 'border-amber-500/30' };
      case 'experience':
        return { tag: 'DS / SYSTEMS', metric: 'NINELEAPS // INSPIRIT AI', icon: Terminal, color: 'text-indigo-400', border: 'border-indigo-500/30' };
      case 'about':
        return { tag: 'DS / THESIS', metric: 'BANGALORE // INVENTURE ACAD.', icon: Sparkles, color: 'text-teal-400', border: 'border-teal-500/30' };
      default:
        return { tag: 'DAKSH // DS', metric: 'PERSONAL PORTFOLIO // ACTIVE', icon: TrendingUp, color: 'text-emerald-400', border: 'border-emerald-500/30' };
    }
  };

  const context = getContextInfo();
  const Icon = context.icon;

  useEffect(() => {
    const timer = setInterval(() => {
      setPulse(p => !p);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-6 right-6 z-50 bg-[#0d1218]/90 backdrop-blur-md border border-emerald-500/40 text-emerald-400 px-3.5 py-2 rounded-lg font-mono text-xs shadow-2xl flex items-center gap-2 hover:bg-emerald-950/40 transition-all cursor-pointer group"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span className="font-bold tracking-wider">DS // TERMINAL</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-300 pointer-events-auto select-none">
      <div className={`w-72 bg-[#0c1015]/90 backdrop-blur-xl border ${context.border} rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.7)] p-4 transition-colors duration-500 text-slate-200`}>
        {/* Header row */}
        <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <span className="text-[10px] font-mono font-bold text-emerald-400">DS</span>
            </div>
            <div>
              <div className="text-[11px] font-mono font-bold tracking-wider text-slate-200">
                {context.tag}
              </div>
              <div className="text-[9px] font-mono text-slate-400 tracking-tight">
                DAKSH SAWHNEY // PORTFOLIO
              </div>
            </div>
          </div>
          <button
            onClick={() => setMinimized(true)}
            className="text-slate-500 hover:text-slate-300 p-1 rounded hover:bg-white/5 transition-colors cursor-pointer"
            title="Minimize Widget"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Micro Candlestick / Trajectory Canvas Simulation */}
        <div className="bg-[#07090d]/80 rounded border border-white/5 p-2 mb-2 relative overflow-hidden">
          <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mb-1">
            <span className="flex items-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full ${pulse ? 'bg-emerald-400' : 'bg-emerald-500'}`}></span>
              CURIOUSITY & TIME
            </span>
            <span className="text-emerald-400 font-semibold">+DISCIPLINE</span>
          </div>

          <svg className="w-full h-12" viewBox="0 0 240 50">
            <defs>
              <linearGradient id="dsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Grid subtle lines */}
            <line x1="0" y1="12" x2="240" y2="12" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="2 2" />
            <line x1="0" y1="26" x2="240" y2="26" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="2 2" />
            <line x1="0" y1="38" x2="240" y2="38" stroke="#ffffff" strokeOpacity="0.05" strokeDasharray="2 2" />

            {/* Area fill */}
            <path
              d="M 10 40 L 40 35 L 75 38 L 110 24 L 145 28 L 180 14 L 210 16 L 230 6 L 230 48 L 10 48 Z"
              fill="url(#dsGradient)"
            />

            {/* Trajectory path */}
            <path
              d="M 10 40 L 40 35 L 75 38 L 110 24 L 145 28 L 180 14 L 210 16 L 230 6"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Glowing endpoint */}
            <circle cx="230" cy="6" r="3" fill="#10b981" />
            <circle cx="230" cy="6" r="6" fill="#10b981" fillOpacity="0.3" className="animate-ping" />
          </svg>

          {/* Micro Candlestick bars in background */}
          <div className="flex justify-between items-end h-3 px-1 mt-1 opacity-60">
            <div className="w-1 h-2 bg-emerald-500/70 rounded-xs"></div>
            <div className="w-1 h-3 bg-emerald-500/80 rounded-xs"></div>
            <div className="w-1 h-1.5 bg-rose-500/60 rounded-xs"></div>
            <div className="w-1 h-2.5 bg-emerald-500/80 rounded-xs"></div>
            <div className="w-1 h-3 bg-emerald-500/90 rounded-xs"></div>
            <div className="w-1 h-2 bg-emerald-500/70 rounded-xs"></div>
            <div className="w-1 h-3 bg-emerald-400 rounded-xs"></div>
          </div>
        </div>

        {/* Dynamic status footer */}
        <div className="flex items-center justify-between text-[10px] font-mono">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Icon className={`w-3.5 h-3.5 ${context.color}`} />
            <span className="truncate max-w-[170px] text-[9.5px] font-medium">{context.metric}</span>
          </div>
          <button
            onClick={() => onNavigate(currentTab === 'about' ? 'projects' : 'about')}
            className="text-[9px] text-slate-400 hover:text-emerald-400 underline underline-offset-2 transition-colors cursor-pointer"
          >
            {currentTab === 'about' ? 'Explore Holdings' : 'Read Thesis'}
          </button>
        </div>
      </div>
    </div>
  );
}
