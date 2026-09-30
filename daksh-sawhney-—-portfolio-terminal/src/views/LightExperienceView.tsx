import { useState } from 'react';
import { PageTab } from '../types/portfolio';
import { EXPERIENCES } from '../data/portfolioData';
import { GALLERY_ASSETS, GalleryAsset } from '../data/galleryAssets';
import VisualAssetDisplay from '../components/VisualAssetDisplay';
import LogoScrollWheel from '../components/LogoScrollWheel';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  Award, 
  CheckCircle2, 
  ArrowUpRight, 
  ExternalLink,
  Code,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface LightExperienceViewProps {
  onOpenAssetModal: (asset: GalleryAsset) => void;
  onNavigate?: (tab: PageTab) => void;
}

export default function LightExperienceView({ onOpenAssetModal, onNavigate }: LightExperienceViewProps) {
  // Experience related assets (NineLeaps, Inspirit AI, HDFC Credila, Wharton, IIT Madras, etc.)
  const expAssets = GALLERY_ASSETS.filter(a => 
    ['wharton-cert', 'iit-madras-cert', 'hdfc-credila-cert', 'ai-sports-analytics', 'patent-persifolio'].includes(a.id)
  );

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200 text-xs font-mono font-semibold">
            <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
            <span>INDUSTRY INTERNSHIPS & VENTURE LEADERSHIP</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Professional Experience & Engineering Leadership
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Building software systems in production: software engineering and RAG agent pipelines at NineLeaps, machine learning analytics with Stanford alumni at Inspirit AI, and leading student technology at Inventure Academy.
          </p>
        </div>
      </div>

      {/* Animated Scroll Wheel for Tech Companies & Academic Partners */}
      <LogoScrollWheel onNavigate={onNavigate} />

      {/* Experience Timeline */}
      <div className="space-y-6">
        {EXPERIENCES.map((exp) => (
          <div 
            key={exp.id}
            className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-8 shadow-xs space-y-5 hover:border-emerald-300 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold mb-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{exp.organization}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">{exp.type}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                  {exp.role}
                </h3>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{exp.period}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              {exp.summary}
            </p>

            {/* Deliverables */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold block">
                CORE DELIVERABLES & TECHNICAL IMPLEMENTATION
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {exp.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Impact */}
            <div className="bg-emerald-50/60 border border-emerald-200/70 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-emerald-800 font-bold uppercase block">
                  VERIFIED OUTCOME
                </span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-950 font-sans">
                  {exp.verifiedImpact}
                </span>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-3" />
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {exp.skills.map((skill, i) => (
                <span key={i} className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Experience Evidence Gallery */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-7 shadow-xs space-y-5">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-lg font-bold font-display text-slate-900">
            Institutional Certifications & Challenge Awards
          </h3>
          <p className="text-xs text-slate-500">
            Click to inspect Wharton Online Fintech specialization, IIT Madras CODE credential, HDFC Credila First Prize, and sports analytics research.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expAssets.map((asset) => (
            <VisualAssetDisplay
              key={asset.id}
              asset={asset}
              onOpenLightbox={onOpenAssetModal}
              aspect="video"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
