import React, { useState } from 'react';
import { PageTab } from '../types/portfolio';
import { GalleryAsset } from '../data/galleryAssets';
import { 
  Menu, 
  X, 
  Search, 
  SlidersHorizontal, 
  Bell, 
  Sparkles, 
  ShieldCheck, 
  Sun,
  Moon,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

interface TopNavbarProps {
  currentTab: PageTab;
  onNavigate: (tab: PageTab) => void;
  onToggleMobileMenu: () => void;
  mobileMenuOpen: boolean;
  onOpenQuickModal?: (asset: GalleryAsset) => void;
}

const TAB_TITLES: Record<string, { title: string; subtitle: string }> = {
  overview: { title: 'Dashboard Overview', subtitle: 'Live metrics, primary holdings & verified milestones' },
  education: { title: 'Academic Profile', subtitle: 'Cambridge A-Levels, Wharton, IIT Madras & Subject Topper' },
  research: { title: 'Research Science', subtitle: 'Nonlinear dynamical systems, IISc mentorship & NLP' },
  projects: { title: 'Projects & Products', subtitle: 'Persifolio (Indian Patent), ScamSlayer & Digital EVM' },
  experience: { title: 'Experience Ledger', subtitle: 'NineLeaps AI internship, Inspirit AI, and venture leadership' },
  awards: { title: 'Honours & Awards', subtitle: 'CREST Gold, HackHarvard, RSI-India, Patents & Sports' },
  activities: { title: 'Field Initiatives', subtitle: '100k+ Miyawaki trees planted & 1,000+ seniors trained' },
  contact: { title: 'Inquiries & Contact', subtitle: 'Direct transmission channel for academic correspondence' },
  home: { title: 'Dashboard Overview', subtitle: 'Live metrics, primary holdings & verified milestones' },
  finance: { title: 'Financial Holdings', subtitle: 'Empirical equity strategy and portfolio management' },
  impact: { title: 'Impact Initiatives', subtitle: 'Community outreach and environmental afforestation' },
  honours: { title: 'Honours & Recognitions', subtitle: 'National and international award ledger' },
  about: { title: 'Investment Thesis', subtitle: 'Intellectual capital allocation and background' },
};

export default function TopNavbar({ 
  currentTab, 
  onNavigate, 
  onToggleMobileMenu, 
  mobileMenuOpen 
}: TopNavbarProps) {
  const currentInfo = TAB_TITLES[currentTab] || TAB_TITLES.overview;

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
      {/* Left: Mobile hamburger & Page header info */}
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-lg sm:text-xl font-bold font-display text-slate-900 leading-tight">
              {currentInfo.title}
            </h1>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              VERIFIED
            </span>
          </div>
          <p className="text-xs text-slate-500 font-sans hidden sm:block">
            {currentInfo.subtitle}
          </p>
        </div>
      </div>

      {/* Right: Quick actions, Live Status & Contact Button */}
      <div className="flex items-center gap-3">
        {/* Market Open Status Pill */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-mono text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold">MARKET: OPEN</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-500">BANGALORE</span>
        </div>

        {/* Quick Contact CTA */}
        <button
          onClick={() => onNavigate('contact')}
          className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs px-4 py-2 rounded-xl shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
        >
          <span>Connect</span>
        </button>
      </div>
    </header>
  );
}
