import { useState } from 'react';
import { PageTab } from '../types/portfolio';
import { GALLERY_ASSETS, GalleryAsset } from '../data/galleryAssets';
import VisualAssetDisplay from '../components/VisualAssetDisplay';
import LogoScrollWheel from '../components/LogoScrollWheel';
import PersifolioSimulator from '../components/PersifolioSimulator';
import BifurcationCanvas from '../components/BifurcationCanvas';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  BookOpen, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  Users, 
  Trees, 
  DollarSign, 
  FileText, 
  ExternalLink,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  FlaskConical,
  Rocket
} from 'lucide-react';

interface LightOverviewViewProps {
  onNavigate: (tab: PageTab) => void;
  onOpenAssetModal: (asset: GalleryAsset) => void;
}

export default function LightOverviewView({ onNavigate, onOpenAssetModal }: LightOverviewViewProps) {
  const [activeInteractiveTab, setActiveInteractiveTab] = useState<'persifolio' | 'chaos'>('persifolio');

  // Featured gallery assets for visual showcase representing all categories
  const featuredVisuals = GALLERY_ASSETS.filter(a => 
    [
      'crest-gold', 
      'hackharvard-award', 
      'hackharvard-photo', 
      'rsi-stage-award', 
      'patent-persifolio', 
      'persifolio-flyer-students',
      'outlook-media', 
      'scam-workshop-wide', 
      'ecity-forest-mature', 
      'chandapura-forest-dense',
      'plantation-daksh-mask',
      'inventure-shotput-annual'
    ].includes(a.id)
  );

  return (
    <div className="space-y-8 pb-16">
      {/* 1. TOP TICKER METRICS BAR */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
        <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono font-bold tracking-wider text-slate-800 uppercase">
              LIVE PORTFOLIO METRICS & VERIFIED MILESTONES
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            BANGALORE / BOSTON / CAMBRIDGE • MARCH 2026
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-50/70 rounded-xl p-3.5 border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-slate-900 leading-none">
                4,000+
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                People Reached & Impacted
              </div>
            </div>
          </div>

          <div className="bg-slate-50/70 rounded-xl p-3.5 border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Trees className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-slate-900 leading-none">
                100,000+
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                Miyawaki Trees Planted
              </div>
            </div>
          </div>

          <div className="bg-slate-50/70 rounded-xl p-3.5 border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-slate-900 leading-none">
                $50,000+
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                Eco & Social Funding Mobilized
              </div>
            </div>
          </div>

          <div className="bg-slate-50/70 rounded-xl p-3.5 border border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-display text-slate-900 leading-none">
                2 Patents
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                Published & 3 Research Papers
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ANIMATED SCROLL WHEEL FOR COMPANIES & INSTITUTIONS */}
      <LogoScrollWheel onNavigate={onNavigate} />

      {/* 3. HERO PROFILE & THESIS CARD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Hero Main Card (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 shadow-xs relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-100/50 via-teal-50/30 to-transparent rounded-bl-full pointer-events-none -mr-10 -mt-10"></div>

          <div className="space-y-6 relative z-10">
            {/* Top badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                GRADE 11 / HIGH SCHOOL RESEARCHER
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium">
                INVENTURE ACADEMY, BANGALORE
              </span>
            </div>

            {/* Title Statement */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-950 tracking-tight leading-[1.15]">
                I invest in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700">
                  problems worth solving.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
                I am <span className="font-semibold text-slate-900">Daksh Sawhney</span>. My work operates at the confluence of nonlinear mathematical dynamics, computational economics, scalable fintech architectures, and real-world environmental afforestation.
              </p>
            </div>

            {/* Quick Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3.5">
                <span className="text-xs font-mono text-emerald-700 font-semibold block uppercase">
                  FINTECH & PATENTS
                </span>
                <p className="text-xs text-slate-600 mt-1 font-sans">
                  Creator of <strong>Persifolio</strong> (CREST Gold, 4k+ users, Indian Patent Published).
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3.5">
                <span className="text-xs font-mono text-blue-700 font-semibold block uppercase">
                  APPLIED RESEARCH
                </span>
                <p className="text-xs text-slate-600 mt-1 font-sans">
                  RSI-India Fellow (IISc / MIT CEE). Chaos transitions & Lyapunov invariants.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/70 rounded-xl p-3.5">
                <span className="text-xs font-mono text-indigo-700 font-semibold block uppercase">
                  CYBERSECURITY & IMPACT
                </span>
                <p className="text-xs text-slate-600 mt-1 font-sans">
                  Founder of <strong>ScamSlayer</strong> & 100k Miyawaki trees planted across Karnataka.
                </p>
              </div>
            </div>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-8 border-t border-slate-100 mt-8 relative z-10">
            <button
              onClick={() => onNavigate('projects')}
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-2.5 rounded-xl text-xs sm:text-sm font-sans flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <span>Explore Projects & Holdings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('awards')}
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium px-4 py-2.5 rounded-xl text-xs sm:text-sm font-sans flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Inspect All Visual Proofs</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs sm:text-sm font-sans text-slate-500 hover:text-slate-900 px-3 py-2 cursor-pointer font-medium"
            >
              Dakshsawhney2008@gmail.com
            </button>
          </div>
        </div>

        {/* Right Feature Card: Identity & Primary Recognition (4 cols) */}
        <div className="lg:col-span-4 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-7 shadow-md flex flex-col justify-between border border-slate-800">
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
                FEATURED DISTINCTION
              </span>
              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">
                OCT 2025
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                BRITISH SCIENCE ASSOCIATION
              </span>
              <h3 className="text-xl font-bold font-display text-white">
                CREST Gold Award
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Conferred the highest international science distinction by BSA (London, UK) for independent scientific rigor in <em>Persifolio: Customized Portfolio & Virtual Stock Investment Simulator</em>.
              </p>
            </div>

            {/* Quick Preview Thumbnail */}
            <div 
              onClick={() => {
                const crest = GALLERY_ASSETS.find(a => a.id === 'crest-gold');
                if (crest) onOpenAssetModal(crest);
              }}
              className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 hover:border-emerald-500/50 cursor-pointer group transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold text-xs">
                    BSA
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200 group-hover:text-emerald-300 transition-colors">
                      CREST Gold Certificate
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      Click to inspect official seal
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-300 transition-colors" />
              </div>
            </div>

            {/* HackHarvard Preview Thumbnail */}
            <div 
              onClick={() => {
                const hack = GALLERY_ASSETS.find(a => a.id === 'hackharvard-award');
                if (hack) onOpenAssetModal(hack);
              }}
              className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 hover:border-emerald-500/50 cursor-pointer group transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-400/20 text-red-300 flex items-center justify-center font-bold text-xs">
                    #1
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200 group-hover:text-emerald-300 transition-colors">
                      HackHarvard 2026 Champion
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">
                      Invited to HackHarvard USA
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-300 transition-colors" />
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Official Credentials</span>
            <button 
              onClick={() => onNavigate('awards')} 
              className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
            >
              <span>View All 30+ Proofs</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. VISUAL GALLERY SHOWCASE (All uploaded pictures, certificates & field evidence) */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-7 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-600" />
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                Visual Evidence & Primary Document Archive
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Photographs, institutional seals, and field documentation uploaded for Daksh Sawhney's verified dossier. Click any card to inspect.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('awards')}
              className="text-xs font-medium text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/70 px-3.5 py-1.5 rounded-lg border border-emerald-200 transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>View Complete Archive ({GALLERY_ASSETS.length} items)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Grid of Visual Assets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredVisuals.map((asset) => (
            <VisualAssetDisplay
              key={asset.id}
              asset={asset}
              onOpenLightbox={onOpenAssetModal}
              aspect="video"
            />
          ))}
        </div>
      </div>

      {/* 5. INTERACTIVE TERMINAL SIMULATORS */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-7 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                Interactive Systems Terminal
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Live computational models created by Daksh: Test the dynamic asset allocator or the nonlinear chaos simulator.
            </p>
          </div>

          {/* Toggle buttons */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveInteractiveTab('persifolio')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeInteractiveTab === 'persifolio'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Persifolio Asset Allocator
            </button>
            <button
              onClick={() => setActiveInteractiveTab('chaos')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeInteractiveTab === 'chaos'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Nonlinear Chaos Simulator
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-900 p-2 sm:p-4 text-white">
          {activeInteractiveTab === 'persifolio' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2 pt-1 text-xs font-mono text-emerald-400">
                <span>SIMULATOR: PERSIFOLIO DYNAMIC WEALTH ENGINE (PATENT PUBLISHED)</span>
                <span className="text-slate-400">STATUS: LIVE</span>
              </div>
              <PersifolioSimulator />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2 pt-1 text-xs font-mono text-emerald-400">
                <span>RESEARCH: BIFURCATION & TRANSIENT DYNAMICS ENGINE (IISc MENTORSHIP)</span>
                <span className="text-slate-400">STATUS: ACTIVE</span>
              </div>
              <BifurcationCanvas />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
