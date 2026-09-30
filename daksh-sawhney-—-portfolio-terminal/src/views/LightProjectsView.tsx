import { useState } from 'react';
import { PageTab } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { GALLERY_ASSETS, GalleryAsset } from '../data/galleryAssets';
import VisualAssetDisplay from '../components/VisualAssetDisplay';
import PersifolioSimulator from '../components/PersifolioSimulator';
import PhishingScenarioTest from '../components/PhishingScenarioTest';
import { 
  Rocket, 
  ShieldCheck, 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  ArrowUpRight, 
  Layers, 
  Vote, 
  Leaf, 
  TrendingUp,
  Cpu,
  FileText,
  Calendar,
  Image as ImageIcon
} from 'lucide-react';

interface LightProjectsViewProps {
  onOpenAssetModal: (asset: GalleryAsset) => void;
  onNavigate?: (tab: PageTab) => void;
}

export default function LightProjectsView({ onOpenAssetModal }: LightProjectsViewProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('persifolio');

  const selectedProject = PROJECTS.find(p => p.id === selectedProjectId) || PROJECTS[0];

  // Specific visual assets associated with projects
  const persifolioAssets = GALLERY_ASSETS.filter(a => a.category === 'persifolio');
  const scamSlayerAssets = GALLERY_ASSETS.filter(a => a.category === 'outreach' && (a.id.includes('scam') || a.id.includes('outlook')));

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-semibold">
            <Rocket className="w-3.5 h-3.5 text-emerald-600" />
            <span>PORTFOLIO HOLDINGS & PRODUCT VENTURES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Projects, Systems & Intellectual Property
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Full-stack engineering, published patents, and community-deployed software platforms tackling fintech democratization, elder fraud prevention, and paperless democratic voting.
          </p>
        </div>

        {/* Project Selector Pills */}
        <div className="flex items-center gap-2 pt-6 mt-6 border-t border-slate-100 overflow-x-auto pb-1 scrollbar-none">
          {PROJECTS.map((proj) => {
            const isSelected = selectedProjectId === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-slate-900 text-white font-semibold shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                <span>{proj.name}</span>
                {proj.patent && (
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                    isSelected ? 'bg-emerald-500/30 text-emerald-300' : 'bg-slate-200 text-slate-600'
                  }`}>
                    PATENT
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Project Full Dossier */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 shadow-xs space-y-8">
        {/* Project Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-500">
              <span className="text-emerald-700 font-bold uppercase">{selectedProject.category}</span>
              <span>•</span>
              <span>{selectedProject.role}</span>
              <span>•</span>
              <span>{selectedProject.year}</span>
              {selectedProject.patent && (
                <>
                  <span>•</span>
                  <span className="text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    {selectedProject.patent}
                  </span>
                </>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              {selectedProject.name}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-sans">
              {selectedProject.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {selectedProject.id === 'persifolio' && (
              <button
                onClick={() => {
                  const patentAsset = GALLERY_ASSETS.find(a => a.id === 'patent-persifolio');
                  if (patentAsset) onOpenAssetModal(patentAsset);
                }}
                className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-mono font-semibold px-3 py-2 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-600" />
                <span>Inspect Patent Journal (01/2026)</span>
              </button>
            )}

            {selectedProject.recognition.map((rec, i) => (
              <span key={i} className="text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-xl font-medium">
                ★ {rec}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {selectedProject.metrics.map((m, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                {m.value}
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1 font-sans">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Grid: Problem, Idea, How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-100 space-y-2">
            <span className="text-xs font-mono text-red-600 font-semibold block uppercase">
              THE PROBLEM
            </span>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              {selectedProject.problem}
            </p>
          </div>

          <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-100 space-y-2">
            <span className="text-xs font-mono text-emerald-700 font-semibold block uppercase">
              THE SYSTEM ARCHITECTURE
            </span>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              {selectedProject.idea}
            </p>
          </div>

          <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-100 space-y-2">
            <span className="text-xs font-mono text-blue-700 font-semibold block uppercase">
              VERIFIED IMPACT
            </span>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              {selectedProject.impact}
            </p>
          </div>
        </div>

        {/* Embedded Interactive Engine depending on selected project */}
        {selectedProject.id === 'persifolio' && (
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-700 font-bold uppercase block">
                  LIVE INTERACTIVE ENGINE
                </span>
                <h3 className="text-lg font-bold font-display text-slate-900">
                  Persifolio Dynamic Wealth Allocation Simulator
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                PATENT NO. 202541127959 A / 202441088484
              </span>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-4">
              <PersifolioSimulator />
            </div>
          </div>
        )}

        {selectedProject.id === 'scamslayer' && (
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-indigo-700 font-bold uppercase block">
                  CYBERSECURITY SIMULATOR
                </span>
                <h3 className="text-lg font-bold font-display text-slate-900">
                  Phishing & Digital Arrest Threat Test
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                DEPLOYED IN SENIOR CITIZEN WORKSHOPS
              </span>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-4">
              <PhishingScenarioTest />
            </div>
          </div>
        )}

        {/* Visual Proof & Photographic Gallery for Persifolio */}
        {selectedProject.id === 'persifolio' && (
          <div className="space-y-5 pt-6 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-lg font-bold font-display text-slate-900">
                    College Workshops, QR Pamphlets & Shawl Felicitation
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Real photographic proof of Daksh conducting college financial literacy masterclasses, student app adoption, and faculty felicitation.
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                {persifolioAssets.length} Visual Records
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {persifolioAssets.map((asset) => (
                <VisualAssetDisplay
                  key={asset.id}
                  asset={asset}
                  onOpenLightbox={onOpenAssetModal}
                  aspect="video"
                />
              ))}
            </div>
          </div>
        )}

        {/* Visual Proof & Photographic Gallery for ScamSlayer */}
        {selectedProject.id === 'scamslayer' && (
          <div className="space-y-5 pt-6 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-blue-600" />
                  <h3 className="text-lg font-bold font-display text-slate-900">
                    ScamSlayer Courtyard Workshops & Outlook India Press Feature
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Direct photographic documentation of Daksh educating senior citizens on digital arrest scams, OTP fraud, and caretaker emergency protocols.
                </p>
              </div>
              <span className="text-xs font-mono text-blue-800 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                {scamSlayerAssets.length} Field Records
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {scamSlayerAssets.map((asset) => (
                <VisualAssetDisplay
                  key={asset.id}
                  asset={asset}
                  onOpenLightbox={onOpenAssetModal}
                  aspect="video"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
