import { useState } from 'react';
import { PageTab, Holding } from '../types/portfolio';
import { HOLDINGS, PROFILE_INFO, HONOURS } from '../data/portfolioData';
import AnimatedFinancialChart from '../components/AnimatedFinancialChart';
import PersifolioSimulator from '../components/PersifolioSimulator';
import BifurcationCanvas from '../components/BifurcationCanvas';
import { ArrowRight, ArrowUpRight, TrendingUp, ShieldCheck, Sparkles, BookOpen, Layers, Award, Terminal } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: PageTab) => void;
  onOpenTradeTicket: (holding: Holding) => void;
}

export default function HomeView({ onNavigate, onOpenTradeTicket }: HomeViewProps) {
  const [activeTabFeature, setActiveTabFeature] = useState<'persifolio' | 'chaos'>('persifolio');

  return (
    <div className="space-y-24 pb-20">
      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-6 max-w-4xl">
            {/* Top terminal badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#101721] border border-emerald-500/30 text-emerald-400 font-mono text-xs w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold tracking-wider">DAKSH // PERSONAL PORTFOLIO TERMINAL</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">GRADE 11/12</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.05]">
              I INVEST IN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                PROBLEMS WORTH SOLVING.
              </span>
            </h1>

            {/* Subtitle */}
            <div className="space-y-3 max-w-2xl text-slate-300 font-sans">
              <p className="text-lg sm:text-xl font-medium text-slate-200">
                {PROFILE_INFO.name} — Student, Builder, Researcher & Investor in Ideas.
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                A personal portfolio of applied research in nonlinear dynamics, fintech systems scaling to 4,000+ users, 100,000 Miyawaki trees planted, and 2 published national patents.
              </p>
            </div>

            {/* Fast action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  const element = document.getElementById('my-holdings');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm font-mono transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <span>EXPLORE MY HOLDINGS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="bg-[#121822] hover:bg-[#1a2332] text-slate-200 border border-white/10 px-5 py-3 rounded-xl text-xs sm:text-sm font-mono transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>READ INVESTMENT THESIS</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Animated financial chart component */}
          <div className="mt-12 sm:mt-16">
            <AnimatedFinancialChart />
          </div>
        </div>
      </section>

      {/* PORTFOLIO SNAPSHOT TICKER DASHBOARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
            <div>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block font-semibold">
                PORTFOLIO SNAPSHOT // DAKSH SAWHNEY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                Asset Allocation by Problem Domain
              </h3>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                ACTIVE POSITIONS
              </span>
              <span>•</span>
              <span className="text-slate-300">BANGALORE HQ</span>
            </div>
          </div>

          {/* Allocation Metric Cards with Qualitative Labels */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { category: "RESEARCH", status: "PUBLISHED", tag: "RSI-INDIA", icon: "▲", color: "text-cyan-400", border: "border-cyan-500/20" },
              { category: "TECHNOLOGY", status: "DEPLOYED", tag: "4,000+ USERS", icon: "▲", color: "text-emerald-400", border: "border-emerald-500/20" },
              { category: "FINANCE", status: "ACTIVE", tag: "+55% 2-YR RETURN", icon: "▲", color: "text-emerald-400", border: "border-emerald-500/20" },
              { category: "ENVIRONMENT", status: "SCALED", tag: "100K TREES", icon: "▲", color: "text-green-400", border: "border-green-500/20" },
              { category: "COMMUNITY", status: "ONGOING", tag: "1,000+ SENIORS", icon: "▲", color: "text-purple-400", border: "border-purple-500/20" },
              { category: "LEADERSHIP", status: "AWARDED", tag: "2 PATENTS", icon: "▲", color: "text-amber-400", border: "border-amber-500/20" },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-[#10151f] rounded-xl p-4 border ${item.border} hover:border-white/30 transition-all`}
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-slate-400">
                  <span>0{i + 1}</span>
                  <span className={`${item.color} font-bold`}>{item.icon} {item.status}</span>
                </div>
                <h4 className="text-xs sm:text-sm font-mono font-bold text-white mt-2 tracking-wide">
                  {item.category}
                </h4>
                <div className="mt-2 text-[10px] font-mono font-medium text-slate-300 bg-white/5 px-2 py-1 rounded inline-block">
                  {item.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MY HOLDINGS SECTION (SIGNATURE INTERACTIVE SECTION) */}
      <section id="my-holdings" className="max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-24">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              SECTION 01 // PRINCIPAL POSITIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white">
            MY HOLDINGS
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mt-2 max-w-2xl font-sans">
            The core problems I have chosen to invest my time, curiosity, and effort into.
          </p>
        </div>

        {/* 6 Large Interactive Holding Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOLDINGS.map((holding, index) => (
            <div
              key={holding.id}
              className="bg-[#0b0f15] border border-white/10 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              {/* Subtle gradient background highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

              <div>
                {/* Top card metadata */}
                <div className="flex items-center justify-between text-xs font-mono mb-4">
                  <span className="text-slate-400">0{index + 1} — {holding.category}</span>
                  <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px] font-bold">
                    {holding.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-display text-white group-hover:text-emerald-300 transition-colors">
                  {holding.title}
                </h3>

                <p className="text-xs text-slate-400 font-mono mt-1 mb-4">
                  {holding.tagline}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-2 my-4 bg-[#121822] p-3 rounded-xl border border-white/5">
                  {holding.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">
                        {m.label}
                      </span>
                      <span className="text-sm font-bold font-mono text-emerald-400 block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mini SVG Sparkline */}
                <div className="w-full h-10 my-2">
                  <svg className="w-full h-full" viewBox="0 0 160 35" preserveAspectRatio="none">
                    <polyline
                      fill="none"
                      stroke={holding.accentColor}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={holding.sparklineData.map((d, i) => `${i * 22},${35 - (d / 100) * 30}`).join(' ')}
                    />
                  </svg>
                </div>
              </div>

              {/* Action: Open Trade Ticket Modal */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-slate-400 text-[11px]">{holding.year}</span>
                <button
                  onClick={() => onOpenTradeTicket(holding)}
                  className="text-emerald-400 hover:text-white font-bold flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-1"
                >
                  <span>VIEW HOLDING</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED SPOTLIGHT SECTION (PERSIFOLIO & BIFURCATION SIMULATOR TABS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest block font-semibold">
              CORE LABS & VERIFICATIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-white mt-1">
              Featured Holding Deep-Dive
            </h2>
          </div>

          {/* Toggle buttons between Persifolio and Chaos Research */}
          <div className="flex items-center gap-2 p-1 bg-[#10151f] border border-white/10 rounded-xl font-mono text-xs">
            <button
              onClick={() => setActiveTabFeature('persifolio')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTabFeature === 'persifolio'
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              PERSIFOLIO (FINTECH)
            </button>
            <button
              onClick={() => setActiveTabFeature('chaos')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeTabFeature === 'chaos'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              NONLINEAR CHAOS (IISc)
            </button>
          </div>
        </div>

        {/* Dynamic Display of Featured Component */}
        {activeTabFeature === 'persifolio' ? (
          <div className="space-y-4">
            <PersifolioSimulator />
            <div className="flex justify-end">
              <button
                onClick={() => onNavigate('projects')}
                className="text-xs font-mono text-emerald-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Read Full Persifolio Architecture & Patent Documentation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <BifurcationCanvas />
            <div className="flex justify-end">
              <button
                onClick={() => onNavigate('research')}
                className="text-xs font-mono text-cyan-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Explore Full Mathematical Manuscript & Cambridge NLP Paper</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* HONOURS & TRANSACTIONS TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
            <div>
              <span className="font-mono text-xs text-amber-400 uppercase tracking-widest block font-semibold">
                VALIDATION LEDGER
              </span>
              <h3 className="text-xl sm:text-3xl font-bold font-display text-white mt-1">
                Recent Market Recognitions & Awards
              </h3>
            </div>

            <button
              onClick={() => onNavigate('honours')}
              className="bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 px-4 py-2 rounded-xl text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer w-fit"
            >
              <span>VIEW ALL TRANSACTIONS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3 font-mono">
            {HONOURS.slice(0, 5).map((honour, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 rounded-xl bg-[#10151f] border border-white/5 hover:border-emerald-500/30 transition-all text-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 font-bold shrink-0">{honour.year}</span>
                  <div>
                    <span className="font-bold text-slate-200 block text-sm font-sans">{honour.title}</span>
                    <span className="text-[11px] text-slate-400">{honour.issuer}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto">
                  <span className="text-[10px] text-slate-400 px-2 py-0.5 rounded bg-white/5">
                    {honour.level}
                  </span>
                  {honour.badge && (
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2 py-0.5 rounded font-bold">
                      {honour.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / THESIS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0c141d] via-[#0e1724] to-[#0c1017] border border-emerald-500/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              INVESTMENT PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              “Instead of asking what I did, ask what I have invested myself in.”
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
              Explore the intellectual framework that links nonlinear dynamics, accessible financial software, and urban afforestation into one coherent worldview.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs font-mono transition-colors flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>READ COMPLETE INVESTMENT THESIS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
