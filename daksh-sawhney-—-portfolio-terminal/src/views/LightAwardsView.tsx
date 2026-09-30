import { useState } from 'react';
import { PageTab } from '../types/portfolio';
import { GALLERY_ASSETS, GalleryAsset } from '../data/galleryAssets';
import VisualAssetDisplay from '../components/VisualAssetDisplay';
import { 
  Trophy, 
  Award, 
  ExternalLink, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  Filter, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  BookOpen,
  Medal
} from 'lucide-react';

interface LightAwardsViewProps {
  onOpenAssetModal: (asset: GalleryAsset) => void;
  onNavigate?: (tab: PageTab) => void;
}

export default function LightAwardsView({ onOpenAssetModal }: LightAwardsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredAssets = selectedCategory === 'all' 
    ? GALLERY_ASSETS 
    : selectedCategory === 'athletics'
      ? GALLERY_ASSETS.filter(a => a.id.includes('inventure-shotput') || a.id.includes('tisb') || a.id.includes('isso'))
      : selectedCategory === 'academics'
        ? GALLERY_ASSETS.filter(a => ['iit-madras-cert', 'wharton-cert', 'ccir-cambridge-cert', 'inventure-cs-award', 'rsi-iisc-cert'].includes(a.id))
        : GALLERY_ASSETS.filter(a => a.category === selectedCategory);

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-semibold">
            <Trophy className="w-3.5 h-3.5 text-emerald-600" />
            <span>HONOURS, RECOGNITIONS & VERIFIED ARCHIVE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Awards, Certifications & Photographic Evidence
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Every entry represents a verified institutional honor, published patent, competition championship, athletic medal, or physical field initiative. Click any card to inspect high-resolution documents, official seals, and metadata.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-slate-100">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>FILTER BY:</span>
          </div>

          {[
            { id: 'all', label: `All Archives (${GALLERY_ASSETS.length})` },
            { id: 'awards', label: 'Primary Honors & Hackathons' },
            { id: 'academics', label: 'University & Academic Credentials' },
            { id: 'athletics', label: 'Sports & Athletic Championships (7)' },
            { id: 'persifolio', label: 'Patents & Fintech Workshops' },
            { id: 'environment', label: 'Miyawaki Afforestation (8)' },
            { id: 'outreach', label: 'Elder Cybersecurity Workshops' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white font-semibold shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Big Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map((asset) => (
          <div 
            key={asset.id} 
            className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
          >
            <div>
              {/* Visual Display Component */}
              <VisualAssetDisplay
                asset={asset}
                onOpenLightbox={onOpenAssetModal}
                aspect="video"
              />

              {/* Text Info */}
              <div className="p-5 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-emerald-700 uppercase">
                    {asset.organization}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {asset.date}
                  </span>
                </div>

                <h3 
                  onClick={() => onOpenAssetModal(asset)}
                  className="text-base font-bold font-display text-slate-900 leading-snug hover:text-emerald-700 cursor-pointer transition-colors"
                >
                  {asset.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                  {asset.caption}
                </p>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                {asset.badge || 'Verified Record'}
              </span>

              <button
                onClick={() => onOpenAssetModal(asset)}
                className="text-xs font-semibold text-slate-700 hover:text-emerald-700 flex items-center gap-1 cursor-pointer font-sans"
              >
                <span>Inspect</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
