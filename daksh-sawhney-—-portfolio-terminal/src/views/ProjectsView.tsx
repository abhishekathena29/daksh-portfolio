import { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import PersifolioSimulator from '../components/PersifolioSimulator';
import PhishingScenarioTest from '../components/PhishingScenarioTest';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Award, 
  Cpu, 
  ExternalLink, 
  FileText, 
  Layers, 
  ChevronRight, 
  CheckCircle2, 
  TrendingUp, 
  Leaf, 
  Compass, 
  Vote 
} from 'lucide-react';

interface ProjectsViewProps {
  onOpenProjectDetail?: (project: ProjectItem) => void;
}

export default function ProjectsView({ onOpenProjectDetail }: ProjectsViewProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('persifolio');

  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId) || PROJECTS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-16">
      {/* Header */}
      <div className="border-b border-white/10 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            PORTFOLIO POSITIONS // CAPITAL EXPENDITURE & CODE
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white">
          PROJECTS & PRODUCTS
        </h1>
        <p className="text-base sm:text-lg text-slate-300 mt-2 max-w-3xl font-sans">
          Production systems designed to bridge the divide between theoretical innovation and real-world adoption.
        </p>
      </div>

      {/* Project Selector Navigation Ribbon */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
        {PROJECTS.map((proj) => {
          const isSelected = selectedProjectId === proj.id;
          return (
            <button
              key={proj.id}
              onClick={() => setSelectedProjectId(proj.id)}
              className={`px-4 py-2.5 rounded-xl border whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold shadow-lg'
                  : 'bg-[#10151f] border-white/5 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <span>{proj.name}</span>
              {proj.featured && (
                <span className="text-[9px] bg-emerald-950/90 text-emerald-400 px-1.5 py-0.2 rounded border border-emerald-500/30">
                  FEATURED
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Project In-Depth Profile */}
      <div className="space-y-12">
        {/* Project Header Spec Sheet */}
        <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                <span className="text-emerald-400 font-semibold uppercase">{selectedProject.category}</span>
                <span>•</span>
                <span>{selectedProject.year}</span>
                <span>•</span>
                <span>ROLE: <strong className="text-slate-200">{selectedProject.role}</strong></span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold font-display text-white mt-2">
                {selectedProject.name}
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mt-2 font-sans font-medium">
                {selectedProject.tagline}
              </p>
            </div>

            {selectedProject.patent && (
              <div className="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl max-w-xs shrink-0 font-mono text-xs">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>PATENT PUBLISHED</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-tight">
                  Govt. of India Intellectual Property Office
                </p>
              </div>
            )}
          </div>

          {/* Metric Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {selectedProject.metrics.map((m, idx) => (
              <div key={idx} className="bg-[#121822] rounded-xl p-4 border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">
                  {m.label}
                </span>
                <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400 mt-0.5 block">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* The Story & Architectural Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-6">
              {/* The Problem */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-rose-400 uppercase tracking-wider font-semibold">
                  01 // THE PROBLEM
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              {/* The Idea */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold">
                  02 // THE CORE THESIS & IDEA
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedProject.idea}
                </p>
              </div>

              {/* What I Built */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
                  03 // WHAT I BUILT & ARCHITECTURE
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                  {selectedProject.built}
                </p>
              </div>

              {/* How it Works */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold">
                  04 // EXECUTION & MECHANICS
                </h4>
                <div className="bg-[#121822] p-4 rounded-xl border border-white/5 text-sm text-slate-300 whitespace-pre-line leading-relaxed font-sans">
                  {selectedProject.howItWorks}
                </div>
              </div>
            </div>

            {/* Right Side: Recognition & Tech Stack */}
            <div className="lg:col-span-4 space-y-6">
              {/* Recognitions */}
              <div className="bg-[#10151f] rounded-xl p-5 border border-white/5 space-y-3">
                <h4 className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>FORMAL VALIDATION & HONOURS</span>
                </h4>
                <ul className="space-y-2 font-sans text-xs text-slate-300">
                  {selectedProject.recognition.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono font-bold mt-0.5">✔</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="bg-[#10151f] rounded-xl p-5 border border-white/5 space-y-3">
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>TECHNOLOGIES & TOOLCHAIN</span>
                </h4>
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="bg-white/5 text-slate-300 px-2.5 py-1 rounded border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact Callout */}
              <div className="bg-emerald-950/20 rounded-xl p-5 border border-emerald-500/20 space-y-2">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
                  MEASURABLE ADOPTION & IMPACT
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {selectedProject.impact}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Simulators */}
        {selectedProject.id === 'persifolio' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
                INTERACTIVE LAB // TEST THE ALGORITHM
              </span>
            </div>
            <PersifolioSimulator />
          </div>
        )}

        {selectedProject.id === 'scamslayer' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
                INTERACTIVE LAB // EXPERIENTIAL FRAUD DEFENSE
              </span>
            </div>
            <PhishingScenarioTest />
          </div>
        )}
      </div>

      {/* Grid of Other Projects */}
      <div className="pt-8 border-t border-white/10">
        <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-6">
          All Project Holdings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              onClick={() => {
                setSelectedProjectId(proj.id);
                window.scrollTo({ top: 300, behavior: 'smooth' });
              }}
              className={`bg-[#0d121a] border rounded-xl p-5 cursor-pointer transition-all hover:-translate-y-1 ${
                selectedProjectId === proj.id
                  ? 'border-emerald-500/60 shadow-lg shadow-emerald-500/10'
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-2">
                <span>{proj.category}</span>
                <span className="text-emerald-400">{proj.year}</span>
              </div>
              <h4 className="text-lg font-bold font-display text-white mb-1">
                {proj.name}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2 mb-4 font-sans">
                {proj.summary}
              </p>
              <div className="flex items-center justify-between font-mono text-xs text-emerald-400 pt-2 border-t border-white/5">
                <span>VIEW SPECIFICATION</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
