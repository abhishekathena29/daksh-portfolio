import { Holding, PageTab } from '../types/portfolio';
import { X, ExternalLink, ArrowRight, ShieldCheck, Cpu, Award } from 'lucide-react';

interface TradeTicketModalProps {
  holding: Holding | null;
  onClose: () => void;
  onNavigateToTab: (tab: PageTab) => void;
}

export default function TradeTicketModal({ holding, onClose, onNavigateToTab }: TradeTicketModalProps) {
  if (!holding) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      {/* Outer Trade Ticket Box */}
      <div 
        className="w-full max-w-xl bg-[#0c1017] border border-emerald-500/40 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden font-sans relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div className="bg-[#121822] border-b border-white/10 px-5 py-3 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-400 font-bold tracking-wider">DAKSH // HOLDING AUDIT TICKET</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-500/30 text-[10px]">
              TICKET #{holding.ticker}
            </span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Ticket Body Content */}
        <div className="p-6 space-y-6">
          {/* Title and Category */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/5 pb-4">
            <div>
              <span className="text-[11px] font-mono text-emerald-400 tracking-wider font-semibold block">
                CATEGORY: {holding.category}
              </span>
              <h2 className="text-2xl font-bold font-display text-white mt-1">
                {holding.title}
              </h2>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono text-slate-400 block">EXECUTION STATUS</span>
              <span className="inline-block px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/40">
                {holding.status}
              </span>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-3 gap-3">
            {holding.metrics.map((m, idx) => (
              <div key={idx} className="bg-[#121822]/90 border border-white/5 rounded-xl p-3">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tight block">
                  {m.label}
                </span>
                <span className="text-base sm:text-lg font-bold font-mono text-emerald-400 mt-0.5 block">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Role & Core Description */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>ROLE: <strong className="text-slate-200">{holding.role}</strong></span>
              <span className="text-slate-600">|</span>
              <span>HORIZON: <strong className="text-slate-200">{holding.year}</strong></span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {holding.description}
            </p>
          </div>

          {/* Verified Highlights */}
          <div className="bg-[#080b0f] border border-white/5 rounded-xl p-4">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2.5 font-semibold flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              PORTFOLIO HIGHLIGHTS & VALIDATION
            </span>
            <ul className="space-y-2">
              {holding.highlights.map((h, i) => (
                <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-emerald-400 font-mono font-bold mt-0.5">▸</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies badge pill strip */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[10px] font-mono text-slate-500 mr-1">TECH STACK:</span>
            {holding.technologies.map((t, i) => (
              <span key={i} className="text-[10px] font-mono bg-white/5 text-slate-300 px-2 py-0.5 rounded border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-[#121822] border-t border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>VERIFIED FACTUAL RECORD</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onNavigateToTab(holding.route);
            }}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs font-mono transition-colors shadow-lg cursor-pointer"
          >
            <span>VIEW COMPLETE SECTION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
