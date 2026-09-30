import React from 'react';
import { GalleryAsset } from '../data/galleryAssets';
import { X, ShieldCheck, CheckCircle2, Calendar, MapPin, Building, ExternalLink, Award, FileText } from 'lucide-react';
import VisualAssetDisplay from './VisualAssetDisplay';

interface LightboxModalProps {
  asset: GalleryAsset | null;
  onClose: () => void;
}

export default function LightboxModal({ asset, onClose }: LightboxModalProps) {
  if (!asset) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden font-sans relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono text-xs font-bold text-slate-700 tracking-wider">
              DOCUMENT & PHOTOGRAPHIC INSPECTION
            </span>
            {asset.badge && (
              <span className="text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded border border-emerald-300">
                {asset.badge}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Main Visual Display */}
          <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200">
            <VisualAssetDisplay asset={asset} aspect="video" />
          </div>

          {/* Descriptive Information */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-mono text-emerald-700 font-semibold block uppercase">
                  {asset.organization}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-0.5">
                  {asset.title}
                </h3>
              </div>
              <div className="text-left sm:text-right font-mono text-xs text-slate-500">
                <span>{asset.date}</span>
                {asset.location && (
                  <span className="block text-[11px] text-slate-400">{asset.location}</span>
                )}
              </div>
            </div>

            <p className="text-sm text-slate-700 font-sans leading-relaxed">
              {asset.caption}
            </p>
          </div>

          {/* Metadata Grid */}
          {asset.metadata && asset.metadata.length > 0 && (
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-2">
              <span className="text-[11px] font-mono text-slate-500 uppercase font-semibold tracking-wider block">
                AUDIT ATTRIBUTES & SIGNATORIES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {asset.metadata.map((item, idx) => (
                  <div key={idx} className="bg-white p-2.5 rounded-lg border border-slate-200/60 text-xs">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">{item.label}</span>
                    <span className="font-semibold text-slate-800 font-sans">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Official Verification Notice */}
          <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Verified primary source asset submitted in official portfolio docket (CEE/IISc, BSA CREST, Patent Office, HackHarvard).
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white font-medium text-xs rounded-lg hover:bg-slate-800 transition-colors font-mono cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
