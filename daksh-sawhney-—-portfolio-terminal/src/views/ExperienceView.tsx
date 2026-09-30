import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Terminal, Award, CheckCircle2, Cpu, Calendar, Building2 } from 'lucide-react';

export default function ExperienceView() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-16">
      {/* Header */}
      <div className="border-b border-white/10 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 font-semibold">
            PROFESSIONAL LEDGER // ENGINEERING & APPLIED SYSTEMS
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white">
          EXPERIENCE
        </h1>
        <p className="text-base sm:text-xl text-slate-300 mt-2 max-w-3xl font-sans">
          Deploying production code in high-stakes environments: from client-facing generative AI and voice automation to sports analytics and early-stage startup architecture.
        </p>
      </div>

      {/* Stock-Chart Timeline Grid */}
      <div className="relative border-l border-emerald-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={exp.id} className="relative group">
            {/* Timeline node icon */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-[#0a0d13] border-2 border-emerald-400 flex items-center justify-center shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform"></span>
            </div>

            {/* Experience Card */}
            <div className="bg-[#0b0e14] border border-white/10 hover:border-emerald-500/40 rounded-2xl p-6 sm:p-8 transition-all space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold mb-1">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{exp.organization}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{exp.type}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                {exp.summary}
              </p>

              {/* Deliverables List */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold block">
                  KEY DELIVERABLES & TECHNICAL SCOPE
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                  {exp.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 bg-[#121822] p-3 rounded-lg border border-white/5">
                      <span className="text-emerald-400 font-mono font-bold mt-0.5">▸</span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Impact Banner */}
              <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl flex items-start gap-2 text-xs font-mono text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>VERIFIED IMPACT:</strong> {exp.verifiedImpact}
                </span>
              </div>

              {/* Skills pill list */}
              <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-xs">
                {exp.skills.map((s, sIdx) => (
                  <span key={sIdx} className="bg-white/5 text-slate-300 px-2.5 py-0.5 rounded border border-white/10 text-[11px]">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
