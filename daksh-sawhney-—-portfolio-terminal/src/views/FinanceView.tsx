import { useState } from 'react';
import { TrendingUp, ShieldAlert, Award, ArrowUpRight, DollarSign, PieChart, CheckCircle2, BookOpen } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export default function FinanceView() {
  const [selectedStrategy, setSelectedStrategy] = useState<'zigzag' | 'dcf' | 'allocation'>('zigzag');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-16">
      {/* Header */}
      <div className="border-b border-white/10 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            CAPITAL ALLOCATION & QUANTITATIVE DISCIPLINE
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white">
          FINANCE & MARKETS
        </h1>
        <p className="text-base sm:text-xl text-slate-300 mt-2 max-w-3xl font-sans">
          The laboratory where I learned to think under uncertainty. Managing a self-directed equity portfolio, funding my own software APIs with investment gains, and understanding the behavioral physics of risk.
        </p>
      </div>

      {/* Hero Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono">
        <div className="bg-[#0b0e14] border border-emerald-500/30 rounded-2xl p-5">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
            PORTFOLIO 2-YR PERFORMANCE
          </span>
          <span className="text-3xl font-bold text-emerald-400 mt-1 block">
            +55%
          </span>
          <span className="text-[11px] text-slate-400 mt-1 block">
            Self-directed NSE long-term holdings
          </span>
        </div>

        <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-5">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
            COMPETITION DISTINCTION
          </span>
          <span className="text-3xl font-bold text-white mt-1 block">
            1st Place
          </span>
          <span className="text-[11px] text-slate-400 mt-1 block">
            HDFC Credila Portfolio Strategy Challenge
          </span>
        </div>

        <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-5">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
            VENTURE BOOTSTRAPPING
          </span>
          <span className="text-3xl font-bold text-cyan-400 mt-1 block">
            Self-Funded
          </span>
          <span className="text-[11px] text-slate-400 mt-1 block">
            Funded AlphaVantage API tokens for Persifolio
          </span>
        </div>

        <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-5">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
            ACADEMIC ACCREDITATION
          </span>
          <span className="text-3xl font-bold text-amber-400 mt-1 block">
            Wharton
          </span>
          <span className="text-[11px] text-slate-400 mt-1 block">
            U. Penn FinTech Specialization Series
          </span>
        </div>
      </div>

      {/* Main Philosophy & Self-Directed Portfolio Section */}
      <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-6 sm:p-10 space-y-8">
        <div className="border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 mb-1">
            <TrendingUp className="w-4 h-4" />
            <span>DISCIPLINED EQUITY INVESTMENT // CASE AUDIT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-white">
            Managing Capital in Real Market Conditions
          </h2>
          <p className="text-sm text-slate-400 font-mono mt-1">
            (Educational portfolio audit — documented strictly for personal learning and methodology review)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Narrative */}
          <div className="lg:col-span-7 space-y-5 text-sm text-slate-300 font-sans leading-relaxed">
            <p>
              Rather than treating finance as abstract spreadsheet exercises, I established a self-directed equity portfolio governed by strict risk-management principles and intrinsic valuation metrics. 
            </p>
            <p>
              I incorporated technical wave and trend filtration through the <strong>ZigZag strategy</strong> learned through advanced market coursework, identifying inflection points while filtering out high-frequency market noise. Over a 2-year multi-quarter holding period, the portfolio achieved a <strong>+55% return</strong> across Indian equity markets (National Stock Exchange).
            </p>
            <p className="bg-[#121822] p-4 rounded-xl border border-emerald-500/20 text-emerald-200 font-mono text-xs">
              <strong>The Closed Loop:</strong> The capital returns generated from this portfolio were not treated as consumer profit. Instead, they were channeled directly into purchasing live AlphaVantage market data API subscriptions and cloud server tiers to build <strong>Persifolio</strong>, ensuring the software remained completely self-sustaining.
            </p>
          </div>

          {/* Core Framework Pillars */}
          <div className="lg:col-span-5 bg-[#10151f] rounded-xl p-5 border border-white/5 space-y-4 font-mono text-xs">
            <span className="text-slate-200 font-bold block uppercase tracking-wider text-[11px]">
              CORE PORTFOLIO RULES
            </span>

            <div className="space-y-3">
              <div className="p-3 bg-[#0a0e14] rounded-lg border border-white/5">
                <span className="text-emerald-400 font-bold block">1. INTRINSIC VALUATION FIRST</span>
                <span className="text-slate-400 text-[11px] block mt-1 font-sans">
                  Fundamental screening for positive operating cash flows, low debt-to-equity leverage, and durable competitive moats.
                </span>
              </div>

              <div className="p-3 bg-[#0a0e14] rounded-lg border border-white/5">
                <span className="text-cyan-400 font-bold block">2. ZIGZAG TREND FILTRATION</span>
                <span className="text-slate-400 text-[11px] block mt-1 font-sans">
                  Systematic entry and trailing stop-loss triggers eliminating emotional panic during market pullbacks.
                </span>
              </div>

              <div className="p-3 bg-[#0a0e14] rounded-lg border border-white/5">
                <span className="text-amber-400 font-bold block">3. ASYMMETRIC REINVESTMENT</span>
                <span className="text-slate-400 text-[11px] block mt-1 font-sans">
                  Plowing market gains directly into software infrastructure, turning financial alpha into tangible intellectual property.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HDFC Credila Pitch Case Study */}
      <div className="bg-[#101724] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-5">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-semibold">
              <Award className="w-4 h-4" />
              <span>NATIONWIDE COMPETITION FIRST PLACE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
              HDFC Credila Portfolio Strategy Challenge
            </h3>
          </div>
          <span className="bg-amber-950/70 border border-amber-500/30 text-amber-300 font-mono text-xs px-3 py-1 rounded font-bold">
            1ST PLACE WINNER
          </span>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-3xl">
          Engineered a comprehensive client asset allocation pitch addressing diverse demographic liabilities, liquidity horizons, and downside shock scenarios. Delivered a rigorous quantitative presentation demonstrating client goal immunization and earned First Place out of competing student teams nationwide.
        </p>
      </div>

      {/* Continuing Education in Finance */}
      <div className="space-y-6">
        <div>
          <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block font-semibold">
            THEORETICAL FOUNDATIONS & FORMAL TRAINING
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
            Certifications & Academic Coursework
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="bg-[#0b0e14] border border-white/10 rounded-xl p-6 space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-2">
                  <span className="text-emerald-400 font-bold">{cert.issuer}</span>
                  <span>{cert.period}</span>
                </div>
                <h4 className="text-base font-bold font-display text-white">
                  {cert.title}
                </h4>
                <p className="text-xs text-slate-300 mt-2 font-sans leading-relaxed">
                  {cert.focus}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>VERIFIED COMPLETION</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
