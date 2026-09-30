import { useState } from 'react';
import { RESEARCH_PAPERS } from '../data/portfolioData';
import BifurcationCanvas from '../components/BifurcationCanvas';
import { BookOpen, ExternalLink, Activity, Sparkles, FileText, CheckCircle2, ChevronRight, Sigma, BarChart3 } from 'lucide-react';

export default function ResearchView() {
  const [activePaperId, setActivePaperId] = useState<string>('nonlinear-dynamics');

  const activePaper = RESEARCH_PAPERS.find(p => p.id === activePaperId) || RESEARCH_PAPERS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-16">
      {/* Header */}
      <div className="border-b border-white/10 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            THEORETICAL RIGOR // APPLIED COMPUTATION & MATHEMATICS
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white">
          RESEARCH
        </h1>
        <p className="text-base sm:text-xl text-slate-300 mt-2 max-w-3xl font-sans">
          Understanding systems that don't behave predictably: transient chaos in discrete-time mappings, code-mixed natural language processing, and macroeconomic digital inclusion.
        </p>
      </div>

      {/* Interactive Bifurcation Simulator Feature Hero */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold">
            <Activity className="w-4 h-4" />
            <span>INTERACTIVE EXPERIMENT: THE STRUCTURAL CLASSIFICATION COEFFICIENT (ξ)</span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            DR. KAUSHAL VERMA // DEAN OF MATHEMATICS, IISc
          </span>
        </div>

        <BifurcationCanvas />
      </div>

      {/* Paper Selection Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        {RESEARCH_PAPERS.map((paper, idx) => {
          const isSelected = activePaperId === paper.id;
          return (
            <button
              key={paper.id}
              onClick={() => setActivePaperId(paper.id)}
              className={`text-left p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#101724] border-cyan-500/70 shadow-lg shadow-cyan-500/10'
                  : 'bg-[#0b0e14] border-white/10 hover:border-white/30 text-slate-400'
              }`}
            >
              <div>
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-2">
                  <span>PAPER 0{idx + 1}</span>
                  <span className="text-cyan-400 font-bold">{paper.year}</span>
                </div>
                <h3 className={`text-base font-bold font-display mb-2 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {paper.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 line-clamp-2">
                  {paper.mentorOrPublisher}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs text-cyan-400">
                <span className="text-[11px] uppercase tracking-wider">{paper.field.split('&')[0]}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </button>
          );
        })}
      </div>

      {/* In-Depth Paper Reading Terminal */}
      <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-6 sm:p-10 space-y-8">
        <div className="border-b border-white/10 pb-6 space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 px-2.5 py-0.5 rounded font-bold">
              {activePaper.status}
            </span>
            <span className="text-slate-400">{activePaper.field}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-display text-white">
            {activePaper.title}
          </h2>

          <div className="text-xs sm:text-sm font-mono text-slate-300 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>{activePaper.mentorOrPublisher}</span>
          </div>
        </div>

        {/* Paper Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {activePaper.metrics.map((m, idx) => (
            <div key={idx} className="bg-[#121822] rounded-xl p-3.5 border border-white/5 font-mono">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                {m.label}
              </span>
              <span className="text-base sm:text-lg font-bold text-cyan-400 mt-0.5 block">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Abstract */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
            <FileText className="w-4 h-4" />
            <span>EXECUTIVE ABSTRACT & THEORETICAL FORMULATION</span>
          </h4>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans bg-[#0e131b] p-5 rounded-xl border border-white/5">
            {activePaper.abstract}
          </p>
        </div>

        {/* Custom Visual Presentation for Paper 2: Hinglish NLP Confusion Matrix & Error Cascade */}
        {activePaper.id === 'hinglish-nlp' && (
          <div className="bg-[#10151f] rounded-xl p-5 border border-white/5 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-slate-200 font-bold flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                HINDI-ENGLISH (HINGLISH) POS ACCURACY & ERROR CASCADE AUDIT
              </span>
              <span className="text-cyan-400 font-semibold">OXFORD SCHOLARSHIP</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-[#0c1017] rounded-lg border border-white/5">
                <span className="text-[10px] text-slate-400 block">MONOLINGUAL ENGLISH</span>
                <span className="text-xl font-bold text-white mt-1 block">93.60%</span>
                <span className="text-[9px] text-slate-500">Penn Treebank Baseline</span>
              </div>
              <div className="p-3 bg-[#0c1017] rounded-lg border border-white/5">
                <span className="text-[10px] text-slate-400 block">MONOLINGUAL HINDI</span>
                <span className="text-xl font-bold text-white mt-1 block">95.95%</span>
                <span className="text-[9px] text-slate-500">HDTB Benchmark</span>
              </div>
              <div className="p-3 bg-cyan-950/40 rounded-lg border border-cyan-500/40">
                <span className="text-[10px] text-cyan-300 block">CODE-MIXED HINGLISH</span>
                <span className="text-xl font-bold text-cyan-400 mt-1 block">94.89%</span>
                <span className="text-[9px] text-cyan-200">Novel Evaluated Model</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0c1017] border border-white/5 text-slate-300 text-xs font-sans space-y-1">
              <span className="font-mono text-[11px] font-bold text-slate-200 block">
                Primary Error Dynamics Identified:
              </span>
              <p>
                64% of all tagging discrepancies occurred at overlapping noun-verb-proper noun lexical boundaries in Romanized script (e.g. Hindi verbs spelled phonetically matching English nouns).
              </p>
              <p className="text-[11px] text-slate-400">
                Sentence length analysis proved medium sentences achieve optimal syntactic cohesion, with compounding multi-error cascades restricted to &lt;6.2% of compound sentences.
              </p>
            </div>
          </div>
        )}

        {/* Custom Visual Presentation for Paper 3: UPI Financial Inclusion */}
        {activePaper.id === 'upi-inclusion' && (
          <div className="bg-[#10151f] rounded-xl p-5 border border-white/5 space-y-3 font-mono text-xs">
            <span className="text-slate-200 font-bold block flex items-center gap-2">
              <Sigma className="w-4 h-4 text-emerald-400" />
              PEER-REVIEWED EMPIRICAL FINDINGS (IJSSER PUBLICATION)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded bg-[#0c1017] border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase block">MICRO-TRANSACTION VELOCITY</span>
                <span className="text-base font-bold text-emerald-400">+28% Frequency</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Post-QR deployment shift</span>
              </div>
              <div className="p-3 rounded bg-[#0c1017] border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase block">CREDIT FORMALIZATION</span>
                <span className="text-base font-bold text-cyan-400">Underwriting Gateway</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Transaction histories replacing collateral</span>
              </div>
              <div className="p-3 rounded bg-[#0c1017] border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase block">VULNERABILITY GAP</span>
                <span className="text-base font-bold text-amber-400">Elderly Adoption Anxiety</span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Direct foundation for ScamSlayer</span>
              </div>
            </div>
          </div>
        )}

        {/* Methodology */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">
            METHODOLOGY & COMPUTATIONAL REPRODUCIBILITY
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            {activePaper.methodology}
          </p>
        </div>

        {/* Core Findings */}
        <div className="space-y-3">
          <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
            KEY CONTRIBUTIONS & DISCOVERIES
          </h4>
          <ul className="space-y-2 font-sans text-xs sm:text-sm text-slate-300">
            {activePaper.findings.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 bg-[#121822] p-3 rounded-lg border border-white/5">
                <span className="text-emerald-400 font-mono font-bold mt-0.5">[{i + 1}]</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10 font-mono text-xs">
          <span className="text-slate-500 text-[10px] self-center mr-1">INDEX TERMS:</span>
          {activePaper.tags.map((t, idx) => (
            <span key={idx} className="bg-white/5 text-slate-300 px-2.5 py-1 rounded border border-white/10 text-[11px]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
