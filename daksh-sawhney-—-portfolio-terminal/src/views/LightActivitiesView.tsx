import { useState } from 'react';
import { PageTab } from '../types/portfolio';
import { GALLERY_ASSETS, GalleryAsset } from '../data/galleryAssets';
import VisualAssetDisplay from '../components/VisualAssetDisplay';
import { 
  Activity, 
  Trees, 
  ShieldCheck, 
  MapPin, 
  Users, 
  DollarSign, 
  HeartHandshake, 
  ArrowRight, 
  Award,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface LightActivitiesViewProps {
  onOpenAssetModal: (asset: GalleryAsset) => void;
  onNavigate?: (tab: PageTab) => void;
}

export default function LightActivitiesView({ onOpenAssetModal }: LightActivitiesViewProps) {
  const [selectedSubtab, setSelectedSubtab] = useState<'all' | 'environment' | 'outreach'>('all');

  const afforestationAssets = GALLERY_ASSETS.filter(a => a.category === 'environment');
  const outreachAssets = GALLERY_ASSETS.filter(a => a.category === 'outreach');

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-semibold">
            <Activity className="w-3.5 h-3.5 text-emerald-600" />
            <span>COMMUNITY, AFFORESTATION & FIELD INITIATIVES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Extensive Field Action & Community Impact
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Real impact happens off the screen. From planting over 100,000 Miyawaki trees across Bangalore's industrial corridors to conducting in-person digital fraud workshops for 1,000+ senior citizens.
          </p>
        </div>

        {/* Sub-tabs */}
        <div className="flex items-center gap-2 pt-6 mt-6 border-t border-slate-100">
          <button
            onClick={() => setSelectedSubtab('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium cursor-pointer transition-all ${
              selectedSubtab === 'all'
                ? 'bg-slate-900 text-white font-semibold shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            All Initiatives ({afforestationAssets.length + outreachAssets.length})
          </button>
          <button
            onClick={() => setSelectedSubtab('environment')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium cursor-pointer transition-all ${
              selectedSubtab === 'environment'
                ? 'bg-emerald-600 text-white font-semibold shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            Miyawaki Afforestation (100k+ Trees)
          </button>
          <button
            onClick={() => setSelectedSubtab('outreach')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium cursor-pointer transition-all ${
              selectedSubtab === 'outreach'
                ? 'bg-blue-600 text-white font-semibold shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
            }`}
          >
            Senior Citizen Cybersecurity (1,000+ Seniors)
          </button>
        </div>
      </div>

      {/* 1. Afforestation Section */}
      {(selectedSubtab === 'all' || selectedSubtab === 'environment') && (
        <div className="bg-white rounded-3xl border border-slate-200/80 p-7 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs font-bold uppercase">
                <Trees className="w-4 h-4" />
                <span>ENVIRONMENTAL STEWARDSHIP</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-1">
                100,000+ Miyawaki Trees Planted Across Bangalore
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-semibold">
                Electronic City • Chandapura • Sarjapur • Dommasandra
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-600 font-sans leading-relaxed">
            Utilizing the Miyawaki high-density native afforestation technique, we converted industrial corridors and depleted urban soil into thriving micro-ecosystems with 10x faster growth and 30x carbon absorption capacity. In addition, developed the <strong>EcoWeave</strong> mobile platform to geo-tag trees and monitor species survival rates.
          </p>

          {/* Environmental Drive Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {afforestationAssets.map((asset) => (
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

      {/* 2. Senior Citizen Cybersecurity Section */}
      {(selectedSubtab === 'all' || selectedSubtab === 'outreach') && (
        <div className="bg-white rounded-3xl border border-slate-200/80 p-7 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2 text-blue-700 font-mono text-xs font-bold uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>CYBER DEFENSE OUTREACH</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-1">
                ScamSlayer Senior Citizen Outreach Workshops
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                1,000+ Seniors Trained • Bangalore Communities
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-600 font-sans leading-relaxed">
            Conducted interactive cybersecurity awareness workshops across Bangalore residential communities, senior living homes, and civic groups in partnership with <em>Tribes for GOOD</em>. Seniors were trained to recognize phishing, digital arrest extortion schemes, OTP scams, and deceptive APK links using the ScamSlayer simulation tool.
          </p>

          {/* Outreach Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {outreachAssets.map((asset) => (
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
  );
}
