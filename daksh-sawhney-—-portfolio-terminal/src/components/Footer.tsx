import { PageTab } from '../types/portfolio';
import { Mail, MapPin, Terminal, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (tab: PageTab) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full bg-[#07090c] border-t border-white/10 pt-16 pb-12 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-emerald-400">DS</span>
              </div>
              <span className="font-mono text-base font-bold text-white tracking-wider">
                DAKSH SAWHNEY
              </span>
            </div>

            <p className="text-lg text-slate-200 font-display font-medium">
              Investing in ideas worth building.
            </p>

            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              Grade 11/12 student researcher & builder at Inventure Academy, Bangalore. Focusing on applied mathematics, nonlinear dynamical systems, accessible fintech, and high-impact ecological models.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Bangalore, Karnataka, India</span>
              </div>
              <a
                href={`mailto:${PROFILE_INFO.email}`}
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PROFILE_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Holdings navigation */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-white uppercase tracking-wider font-semibold block text-[11px]">
              PORTFOLIO SECTIONS
            </span>
            <ul className="space-y-2">
              {[
                { tab: 'projects', label: 'Projects & Products' },
                { tab: 'research', label: 'Applied Research (IISc / Cambridge)' },
                { tab: 'finance', label: 'Capital Allocation & Markets' },
                { tab: 'experience', label: 'Engineering Experience' },
                { tab: 'impact', label: 'Community & Afforestation' },
                { tab: 'honours', label: 'Honours & Transactions' },
                { tab: 'about', label: 'Investment Thesis' },
              ].map((link) => (
                <li key={link.tab}>
                  <button
                    onClick={() => {
                      onNavigate(link.tab as PageTab);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-slate-600">›</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Benchmarks */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-white uppercase tracking-wider font-mono font-semibold block text-[11px]">
              PORTFOLIO BENCHMARKS
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="bg-[#0b0e14] border border-white/5 rounded-lg p-2.5">
                <span className="text-slate-500 text-[10px] block">USERS</span>
                <span className="text-emerald-400 font-bold">4,000+ (Persifolio)</span>
              </div>
              <div className="bg-[#0b0e14] border border-white/5 rounded-lg p-2.5">
                <span className="text-slate-500 text-[10px] block">PATENTS</span>
                <span className="text-emerald-400 font-bold">2 Published</span>
              </div>
              <div className="bg-[#0b0e14] border border-white/5 rounded-lg p-2.5">
                <span className="text-slate-500 text-[10px] block">AFFORESTATION</span>
                <span className="text-emerald-400 font-bold">100K Trees</span>
              </div>
              <div className="bg-[#0b0e14] border border-white/5 rounded-lg p-2.5">
                <span className="text-slate-500 text-[10px] block">RSI-INDIA</span>
                <span className="text-emerald-400 font-bold">&lt;2% Acceptance</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Factual record verified against primary activity filings, patents, and official institutional commendations.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-3">
          <div>© 2026 Daksh Sawhney. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>DAKSH // TERMINAL v2.6</span>
            <span>•</span>
            <span className="text-emerald-400/80">BUILT WITH DISCIPLINE & CARE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
