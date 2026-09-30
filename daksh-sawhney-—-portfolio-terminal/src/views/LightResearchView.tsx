import { useState } from 'react';
import { PageTab } from '../types/portfolio';
import { RESEARCH_PAPERS } from '../data/portfolioData';
import { GALLERY_ASSETS, GalleryAsset } from '../data/galleryAssets';
import VisualAssetDisplay from '../components/VisualAssetDisplay';
import BifurcationCanvas from '../components/BifurcationCanvas';
import { 
  FlaskConical, 
  ExternalLink, 
  Activity, 
  CheckCircle2, 
  ArrowUpRight, 
  BookOpen, 
  Sigma, 
  ShieldCheck,
  FileText
} from 'lucide-react';

interface LightResearchViewProps {
  onOpenAssetModal: (asset: GalleryAsset) => void;
  onNavigate?: (tab: PageTab) => void;
}

export default function LightResearchView({ onOpenAssetModal }: LightResearchViewProps) {
  const [selectedPaperId, setSelectedPaperId] = useState<string>('nonlinear-dynamics');

  const selectedPaper = RESEARCH_PAPERS.find(p => p.id === selectedPaperId) || RESEARCH_PAPERS[0];

  // Research related assets (RSI IISc award, CCIR Cambridge cert, HackHarvard cohort, etc.)
  const researchAssets = GALLERY_ASSETS.filter(a => 
    ['rsi-stage-award', 'rsi-iisc-cert', 'ccir-cambridge-cert', 'hackharvard-photo', 'ai-sports-analytics'].includes(a.id)
  );

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-xs font-mono font-semibold">
            <FlaskConical className="w-3.5 h-3.5 text-blue-600" />
            <span>APPLIED MATHEMATICS & THEORETICAL RESEARCH</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Research Science & Computational Economics
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Under mentorship with IISc Dean of Mathematics Prof. Kaushal Verma (RSI-India / MIT CEE) and international university researchers, investigating nonlinear chaos, code-mixed NLP transformers, and digital financial inclusion.
          </p>
        </div>

        {/* Paper Selector Pills */}
        <div className="flex items-center gap-2 pt-6 mt-6 border-t border-slate-100 overflow-x-auto pb-1 scrollbar-none">
          {RESEARCH_PAPERS.map((paper) => {
            const isSelected = selectedPaperId === paper.id;
            return (
              <button
                key={paper.id}
                onClick={() => setSelectedPaperId(paper.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-slate-900 text-white font-semibold shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                <span>{paper.title.slice(0, 36)}...</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  isSelected ? 'bg-blue-500/30 text-blue-200' : 'bg-slate-200 text-slate-600'
                }`}>
                  {paper.year}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Selected Paper Card */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 shadow-xs space-y-6">
        <div className="space-y-2 border-b border-slate-100 pb-5">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500">
            <span className="text-blue-700 font-bold uppercase">{selectedPaper.field}</span>
            <span>•</span>
            <span className="text-slate-700 font-semibold">{selectedPaper.mentorOrPublisher}</span>
            <span>•</span>
            <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-mono">
              {selectedPaper.status}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            {selectedPaper.title}
          </h2>
        </div>

        {/* Abstract Box */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-2">
          <span className="text-xs font-mono text-slate-400 font-semibold uppercase block">
            ABSTRACT & FORMAL PROBLEM STATEMENT
          </span>
          <p className="text-sm text-slate-700 font-sans leading-relaxed">
            {selectedPaper.abstract}
          </p>
        </div>

        {/* Methodology & Findings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="space-y-2">
            <span className="text-xs font-mono text-blue-700 font-semibold uppercase block">
              METHODOLOGICAL FRAMEWORK
            </span>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans bg-slate-50/50 p-4 rounded-xl border border-slate-100">
              {selectedPaper.methodology}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-emerald-700 font-semibold uppercase block">
              PROVEN FINDINGS & CONTRIBUTION
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-sans bg-slate-50/50 p-4 rounded-xl border border-slate-100">
              {selectedPaper.findings.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Embedded Interactive Bifurcation Lab if first paper */}
        {selectedPaper.id === 'nonlinear-dynamics' && (
          <div className="pt-4 border-t border-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-blue-700 font-bold uppercase block">
                  INTERACTIVE COMPUTATIONAL LAB
                </span>
                <h3 className="text-lg font-bold font-display text-slate-900">
                  Real-time Bifurcation & Lyapunov Dynamic Visualizer
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                IISc RESEARCH FELLOWSHIP
              </span>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-4">
              <BifurcationCanvas />
            </div>
          </div>
        )}
      </div>

      {/* Verified Research Credentials Gallery */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-7 shadow-xs space-y-5">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-lg font-bold font-display text-slate-900">
            Verified Research Credentials & Fellowships
          </h3>
          <p className="text-xs text-slate-500">
            Click to inspect official RSI-India award at IISc, CCIR Cambridge Future Scholar certificate, or HackHarvard national championship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {researchAssets.map((asset) => (
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
