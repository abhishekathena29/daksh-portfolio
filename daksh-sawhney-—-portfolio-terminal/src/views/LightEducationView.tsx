import { useState } from 'react';
import { PageTab } from '../types/portfolio';
import { GALLERY_ASSETS, GalleryAsset } from '../data/galleryAssets';
import VisualAssetDisplay from '../components/VisualAssetDisplay';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface LightEducationViewProps {
  onOpenAssetModal: (asset: GalleryAsset) => void;
  onNavigate?: (tab: PageTab) => void;
}

export default function LightEducationView({ onOpenAssetModal }: LightEducationViewProps) {
  // Related education assets
  const eduAssets = GALLERY_ASSETS.filter(a => 
    ['iit-madras-cert', 'wharton-cert', 'ccir-cambridge-cert', 'inventure-cs-award', 'inventure-outreach-award'].includes(a.id)
  );

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            <span>ACADEMIC TRAJECTORY & ACCREDITATIONS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Education & University Accreditations
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Formal high school rigor combined with advanced university-level coursework at Wharton, IIT Madras, and the Cambridge Future Scholar program.
          </p>
        </div>
      </div>

      {/* Main School Card */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-7 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-mono text-emerald-700 font-bold uppercase">
              HIGH SCHOOL (GRADES 9 - 12)
            </span>
            <h2 className="text-2xl font-bold font-display text-slate-900 mt-0.5">
              Inventure Academy, Bangalore
            </h2>
            <div className="flex items-center gap-3 text-xs text-slate-500 font-mono mt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                Bangalore, India
              </span>
              <span>•</span>
              <span>Cambridge IGCSE & A-Levels</span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold">Distinction Profile</span>
            </div>
          </div>

          <div className="text-right">
            <span className="inline-flex items-center gap-1 text-xs font-mono bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">
              Cambridge ICE Distinction
            </span>
          </div>
        </div>

        {/* Subjects & Key Academic Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2">
            <span className="text-xs font-mono text-slate-400 font-semibold block uppercase">
              CORE CURRICULUM
            </span>
            <h4 className="text-sm font-bold text-slate-900">
              Mathematics & Sciences
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mathematics (Pure & Mechanics), Further Mathematics, Computer Science, Physics, and Economics.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2">
            <span className="text-xs font-mono text-slate-400 font-semibold block uppercase">
              ACADEMIC HONOUR
            </span>
            <h4 className="text-sm font-bold text-slate-900">
              Computer Science Subject Topper
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Awarded School Subject Topper for Highest Academic Achievement in Computer Science at Inventure Academy.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2">
            <span className="text-xs font-mono text-slate-400 font-semibold block uppercase">
              RECOGNITION
            </span>
            <h4 className="text-sm font-bold text-slate-900">
              Award of Excellence
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Inventure Academy Award of Academic Excellence & Student Leadership (Head of Tech for Change).
            </p>
          </div>
        </div>
      </div>

      {/* University Coursework & Certifications Grid */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-7 shadow-xs space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <span className="text-xs font-mono text-emerald-700 font-bold uppercase">
            CERTIFIED UNIVERSITY ACCREDITATIONS
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-0.5">
            Advanced University Certifications
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Click any certificate card to inspect verified institutional credentials and official seals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {eduAssets.map((asset) => (
            <div 
              key={asset.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <VisualAssetDisplay
                  asset={asset}
                  onOpenLightbox={onOpenAssetModal}
                  aspect="video"
                />
                <div className="p-4 space-y-1.5">
                  <span className="text-[10px] font-mono text-emerald-700 font-semibold uppercase">
                    {asset.organization}
                  </span>
                  <h3 
                    onClick={() => onOpenAssetModal(asset)}
                    className="text-sm font-bold font-display text-slate-900 leading-snug cursor-pointer hover:text-emerald-700 transition-colors"
                  >
                    {asset.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {asset.caption}
                  </p>
                </div>
              </div>

              <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">{asset.date}</span>
                <button
                  onClick={() => onOpenAssetModal(asset)}
                  className="text-emerald-700 font-semibold hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Inspect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
