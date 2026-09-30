import React, { useState, useRef, useEffect } from 'react';
import { PageTab } from '../types/portfolio';
import { 
  Building2, 
  ExternalLink, 
  Sparkles, 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  Award,
  GraduationCap,
  Briefcase,
  Layers,
  Flame
} from 'lucide-react';

export interface CompanyLogoItem {
  id: string;
  name: string;
  category: 'Company' | 'University' | 'Research' | 'Award Body' | 'Social NGO' | 'Government';
  roleOrRelation: string;
  logoType: 'svg' | 'badge' | 'crest';
  primaryColor: string;
  bgLight: string;
  textColor: string;
  borderColor: string;
  targetTab?: PageTab;
  badgeText: string;
  symbol: string;
}

export const COMPANY_LOGOS: CompanyLogoItem[] = [
  {
    id: 'nineleaps',
    name: 'Nineleaps Technology',
    category: 'Company',
    roleOrRelation: 'Software & AI Engineering Intern',
    logoType: 'badge',
    primaryColor: '#0052cc',
    bgLight: 'bg-blue-50/80',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    targetTab: 'experience',
    badgeText: 'AI Agent Microservices',
    symbol: 'NINELEAPS'
  },
  {
    id: 'inspirit-ai',
    name: 'Inspirit AI',
    category: 'Company',
    roleOrRelation: 'Machine Learning Analytics Scholar',
    logoType: 'badge',
    primaryColor: '#3b28cc',
    bgLight: 'bg-indigo-50/80',
    textColor: 'text-indigo-700',
    borderColor: 'border-indigo-200',
    targetTab: 'experience',
    badgeText: 'Stanford Alumni Mentorship',
    symbol: 'INSPIRIT AI'
  },
  {
    id: 'hackharvard',
    name: 'HackHarvard (Harvard Univ)',
    category: 'University',
    roleOrRelation: '#1 First Position National Champions',
    logoType: 'badge',
    primaryColor: '#dc2626',
    bgLight: 'bg-red-50/80',
    textColor: 'text-red-700',
    borderColor: 'border-red-200',
    targetTab: 'awards',
    badgeText: 'Invited to Harvard USA',
    symbol: 'HACK HARVARD'
  },
  {
    id: 'rsi-iisc',
    name: 'RSI-India / IISc Bangalore',
    category: 'Research',
    roleOrRelation: 'Research Fellow in Nonlinear Dynamics',
    logoType: 'crest',
    primaryColor: '#059669',
    bgLight: 'bg-emerald-50/80',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200',
    targetTab: 'research',
    badgeText: 'CEE & Adani Group Fellow',
    symbol: 'RSI-INDIA IISc'
  },
  {
    id: 'ccir-cambridge',
    name: 'Cambridge Centre for Int. Research',
    category: 'Research',
    roleOrRelation: 'Cambridge Future Scholar (Dr. Weiwei Sun)',
    logoType: 'crest',
    primaryColor: '#0369a1',
    bgLight: 'bg-sky-50/80',
    textColor: 'text-sky-800',
    borderColor: 'border-sky-200',
    targetTab: 'research',
    badgeText: 'ML & NLP Research',
    symbol: 'CCIR CAMBRIDGE'
  },
  {
    id: 'wharton',
    name: 'Wharton Online (Univ of Penn)',
    category: 'University',
    roleOrRelation: 'Fintech Foundations Specialization',
    logoType: 'crest',
    primaryColor: '#1e3a8a',
    bgLight: 'bg-blue-50/80',
    textColor: 'text-blue-900',
    borderColor: 'border-blue-200',
    targetTab: 'education',
    badgeText: 'Wharton Credential',
    symbol: 'WHARTON PENN'
  },
  {
    id: 'iit-madras',
    name: 'IIT Madras (CODE)',
    category: 'University',
    roleOrRelation: 'Data Science & AI Certification',
    logoType: 'crest',
    primaryColor: '#b45309',
    bgLight: 'bg-amber-50/80',
    textColor: 'text-amber-800',
    borderColor: 'border-amber-200',
    targetTab: 'education',
    badgeText: 'Top National Institute',
    symbol: 'IIT MADRAS'
  },
  {
    id: 'crest-awards',
    name: 'British Science Association',
    category: 'Award Body',
    roleOrRelation: 'CREST Gold Award Conferred (London)',
    logoType: 'badge',
    primaryColor: '#10b981',
    bgLight: 'bg-emerald-50/80',
    textColor: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    targetTab: 'awards',
    badgeText: 'CREST Gold Medal',
    symbol: 'CREST AWARDS'
  },
  {
    id: 'patent-office',
    name: 'The Patent Office (Govt of India)',
    category: 'Government',
    roleOrRelation: '2 Published Patents (Fintech & EVM)',
    logoType: 'crest',
    primaryColor: '#475569',
    bgLight: 'bg-slate-100',
    textColor: 'text-slate-800',
    borderColor: 'border-slate-300',
    targetTab: 'projects',
    badgeText: 'Patent Journal 01/2026',
    symbol: 'PATENT OFFICE'
  },
  {
    id: 'hdfc-credila',
    name: 'HDFC Credila',
    category: 'Company',
    roleOrRelation: 'Portfolio Strategy Challenge Winner',
    logoType: 'badge',
    primaryColor: '#e11d48',
    bgLight: 'bg-rose-50/80',
    textColor: 'text-rose-700',
    borderColor: 'border-rose-200',
    targetTab: 'awards',
    badgeText: 'First Prize Winner',
    symbol: 'HDFC CREDILA'
  },
  {
    id: 'inventure',
    name: 'Inventure Academy',
    category: 'University',
    roleOrRelation: 'Subject Topper & Head Tech for Change',
    logoType: 'badge',
    primaryColor: '#ea580c',
    bgLight: 'bg-orange-50/80',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-200',
    targetTab: 'education',
    badgeText: 'Computer Science Topper',
    symbol: 'INVENTURE'
  },
  {
    id: 'tribes-for-good',
    name: 'TribesforGOOD & ThinkSharp',
    category: 'Social NGO',
    roleOrRelation: 'Student Advocate (Financial Literacy)',
    logoType: 'badge',
    primaryColor: '#0d9488',
    bgLight: 'bg-teal-50/80',
    textColor: 'text-teal-700',
    borderColor: 'border-teal-200',
    targetTab: 'activities',
    badgeText: 'Elder & Peer Outreach',
    symbol: 'TRIBESFORGOOD'
  },
  {
    id: 'tisb-sports',
    name: 'The International School Bangalore (TISB)',
    category: 'Award Body',
    roleOrRelation: 'Aquatic & Track & Field Championship',
    logoType: 'crest',
    primaryColor: '#4338ca',
    bgLight: 'bg-indigo-50/80',
    textColor: 'text-indigo-800',
    borderColor: 'border-indigo-200',
    targetTab: 'awards',
    badgeText: '1st in Shot Put, 3rd Butterfly',
    symbol: 'TISB SPORTS'
  },
  {
    id: 'isso-games',
    name: 'ISSO National Games (SGFI)',
    category: 'Award Body',
    roleOrRelation: 'National Games Participant (Badminton U17)',
    logoType: 'badge',
    primaryColor: '#0284c7',
    bgLight: 'bg-sky-50/80',
    textColor: 'text-sky-700',
    borderColor: 'border-sky-200',
    targetTab: 'awards',
    badgeText: 'National Games 2022-23',
    symbol: 'ISSO INDIA'
  },
  {
    id: 'outlook-india',
    name: 'Outlook India',
    category: 'Company',
    roleOrRelation: 'National Media Profile on ScamSlayer',
    logoType: 'badge',
    primaryColor: '#be123c',
    bgLight: 'bg-rose-50/80',
    textColor: 'text-rose-800',
    borderColor: 'border-rose-200',
    targetTab: 'projects',
    badgeText: 'National Press Feature',
    symbol: 'OUTLOOK'
  }
];

interface LogoScrollWheelProps {
  onNavigate?: (tab: PageTab) => void;
  className?: string;
}

export default function LogoScrollWheel({ onNavigate, className = '' }: LogoScrollWheelProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState<'normal' | 'fast' | 'slow'>('normal');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'ticker' | 'wheel'>('ticker');
  const [selectedWheelIndex, setSelectedWheelIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const filteredLogos = activeCategory === 'all' 
    ? COMPANY_LOGOS 
    : COMPANY_LOGOS.filter(l => l.category === activeCategory);

  // For seamless loop in ticker mode
  const marqueeItems = [...filteredLogos, ...filteredLogos];

  const handleNextWheel = () => {
    setSelectedWheelIndex((prev) => (prev + 1) % filteredLogos.length);
  };

  const handlePrevWheel = () => {
    setSelectedWheelIndex((prev) => (prev - 1 + filteredLogos.length) % filteredLogos.length);
  };

  const getAnimationDuration = () => {
    switch (speed) {
      case 'fast': return '22s';
      case 'slow': return '48s';
      case 'normal': 
      default: return '32s';
    }
  };

  const renderLogoGraphic = (logo: CompanyLogoItem) => {
    switch (logo.id) {
      case 'nineleaps':
        return (
          <div className="flex items-center gap-1.5 font-bold font-mono tracking-wider text-xs">
            <svg className="w-5 h-5 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8 12 2" fill="url(#nineleaps-grad)" />
              <defs>
                <linearGradient id="nineleaps-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00c6ff" />
                  <stop offset="100%" stopColor="#0052cc" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-slate-900 font-extrabold tracking-tighter text-[13px]">NINELE<span className="text-blue-600">A</span>PS</span>
          </div>
        );

      case 'inspirit-ai':
        return (
          <div className="flex items-center gap-1.5 font-sans font-bold text-xs">
            <div className="w-5 h-5 rounded-md bg-[#251d54] text-white flex items-center justify-center font-bold text-[10px] shrink-0">
              💡
            </div>
            <span className="text-[#1c183a] font-extrabold tracking-tight text-[12px]">INSPIRIT <span className="text-indigo-600">AI</span></span>
          </div>
        );

      case 'hackharvard':
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-red-600 text-white flex items-center justify-center font-mono font-black text-[10px] shrink-0">
              H
            </div>
            <span className="text-red-700 font-black tracking-tight text-[12px] font-sans uppercase">HACK<span className="text-slate-900">HARVARD</span></span>
          </div>
        );

      case 'rsi-iisc':
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full border-2 border-emerald-600 flex items-center justify-center text-[10px] font-mono font-bold text-emerald-700 shrink-0 bg-white">
              ⚛
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-slate-900 font-bold text-[11px]">RSI-INDIA</span>
              <span className="text-[9px] font-mono text-emerald-700 font-semibold">CEE • IISc</span>
            </div>
          </div>
        );

      case 'ccir-cambridge':
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full border-2 border-[#002f6c] flex items-center justify-center text-[9px] font-serif font-black text-[#002f6c] bg-white shrink-0">
              CC
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-[#002f6c] font-bold text-[11px] font-serif">CAMBRIDGE</span>
              <span className="text-[9px] font-mono text-slate-500">Research (CCIR)</span>
            </div>
          </div>
        );

      case 'wharton':
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-[#01256e] text-white flex items-center justify-center font-serif font-black text-[10px] shrink-0">
              W
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-[#01256e] font-serif font-bold text-[11px] tracking-wide">WHARTON</span>
              <span className="text-[8px] font-mono text-slate-500">Univ of Penn</span>
            </div>
          </div>
        );

      case 'iit-madras':
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-amber-700 text-white flex items-center justify-center font-serif font-bold text-[9px] shrink-0">
              IIT
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-slate-900 font-bold text-[11px]">IIT MADRAS</span>
              <span className="text-[8px] font-mono text-amber-700 font-semibold">CODE Outreach</span>
            </div>
          </div>
        );

      case 'crest-awards':
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[9px] shrink-0">
              CG
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-slate-900 font-bold text-[11px]">CREST GOLD</span>
              <span className="text-[8px] font-mono text-emerald-700">British Science</span>
            </div>
          </div>
        );

      case 'patent-office':
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-slate-800 text-white flex items-center justify-center text-[9px] font-mono font-bold shrink-0">
              IPO
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-slate-900 font-bold text-[11px]">PATENT OFFICE</span>
              <span className="text-[8px] font-mono text-slate-500">Govt of India</span>
            </div>
          </div>
        );

      case 'hdfc-credila':
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-red-700 text-white flex items-center justify-center font-mono font-bold text-[9px] shrink-0">
              H
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-red-700 font-bold text-[11px] font-sans">HDFC CREDILA</span>
              <span className="text-[8px] font-mono text-slate-500">Strategy Award</span>
            </div>
          </div>
        );

      case 'inventure':
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-[9px] shrink-0">
              IA
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-slate-900 font-bold text-[11px]">INVENTURE</span>
              <span className="text-[8px] font-mono text-orange-600 font-medium">Academy</span>
            </div>
          </div>
        );

      case 'tribes-for-good':
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-teal-600 text-white flex items-center justify-center font-bold text-[9px] shrink-0">
              TG
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-teal-800 font-bold text-[11px]">TRIBESFORGOOD</span>
              <span className="text-[8px] font-mono text-slate-500">Impact Partner</span>
            </div>
          </div>
        );

      case 'tisb-sports':
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-indigo-900 text-white flex items-center justify-center font-serif font-bold text-[9px] shrink-0">
              T
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-indigo-950 font-bold text-[11px]">TISB SPORTS</span>
              <span className="text-[8px] font-mono text-indigo-700">Track & Aquatic</span>
            </div>
          </div>
        );

      case 'isso-games':
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-sky-600 text-white flex items-center justify-center font-bold text-[9px] shrink-0">
              IS
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-sky-900 font-bold text-[11px]">ISSO NATIONALS</span>
              <span className="text-[8px] font-mono text-sky-600">Badminton U17</span>
            </div>
          </div>
        );

      case 'outlook-india':
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded bg-rose-700 text-white flex items-center justify-center font-serif font-black text-[9px] shrink-0">
              O
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-rose-800 font-serif font-black text-[11px] tracking-tight">OUTLOOK</span>
              <span className="text-[8px] font-mono text-slate-500">National Press</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex items-center gap-1.5">
            <Building2 className="w-4 h-4 text-slate-600" />
            <span className="text-slate-800 font-bold text-xs">{logo.name}</span>
          </div>
        );
    }
  };

  return (
    <div className={`bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-xs space-y-3.5 relative overflow-hidden ${className}`}>
      {/* Top Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">
                AFFILIATED INSTITUTIONS & PARTNERS
              </span>
              <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-semibold hidden sm:inline">
                {COMPANY_LOGOS.length} VERIFIED ENTITIES
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-sans">
              Continuous scroll wheel of academic mentors, tech companies, universities & competition organizers.
            </p>
          </div>
        </div>

        {/* Control buttons */}
        <div className="flex items-center gap-2">
          {/* Mode Switcher */}
          <div className="inline-flex p-0.5 rounded-lg bg-slate-100 border border-slate-200/80 text-[11px] font-mono">
            <button
              onClick={() => setViewMode('ticker')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                viewMode === 'ticker' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Continuous Wheel
            </button>
            <button
              onClick={() => setViewMode('wheel')}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                viewMode === 'wheel' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              3D Dial View
            </button>
          </div>

          {/* Pause / Play */}
          {viewMode === 'ticker' && (
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              title={isPaused ? 'Resume Scroll' : 'Pause Scroll'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-emerald-600" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
          )}

          {/* Speed selector */}
          {viewMode === 'ticker' && (
            <div className="hidden md:flex items-center gap-1 text-[10px] font-mono text-slate-500 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1">
              <span>SPEED:</span>
              <button
                onClick={() => setSpeed('slow')}
                className={`px-1 py-0.5 rounded ${speed === 'slow' ? 'bg-slate-900 text-white font-bold' : 'hover:text-slate-900 cursor-pointer'}`}
              >
                1x
              </button>
              <button
                onClick={() => setSpeed('normal')}
                className={`px-1 py-0.5 rounded ${speed === 'normal' ? 'bg-slate-900 text-white font-bold' : 'hover:text-slate-900 cursor-pointer'}`}
              >
                2x
              </button>
              <button
                onClick={() => setSpeed('fast')}
                className={`px-1 py-0.5 rounded ${speed === 'fast' ? 'bg-slate-900 text-white font-bold' : 'hover:text-slate-900 cursor-pointer'}`}
              >
                3x
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] font-mono scrollbar-none">
        <span className="text-slate-400 mr-1 shrink-0">FILTER:</span>
        {['all', 'Company', 'University', 'Research', 'Award Body', 'Social NGO'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-2.5 py-0.5 rounded-md whitespace-nowrap cursor-pointer transition-all ${
              activeCategory === cat
                ? 'bg-slate-900 text-white font-bold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
            }`}
          >
            {cat === 'all' ? `All (${COMPANY_LOGOS.length})` : cat}
          </button>
        ))}
      </div>

      {/* 1. CONTINUOUS TICKER / SCROLL WHEEL MODE */}
      {viewMode === 'ticker' ? (
        <div 
          className="relative overflow-hidden py-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle gradient edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div
            ref={containerRef}
            className="flex items-center gap-3.5 w-max will-change-transform"
            style={{
              animation: `ticker ${getAnimationDuration()} linear infinite`,
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          >
            {marqueeItems.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                onClick={() => {
                  if (logo.targetTab && onNavigate) {
                    onNavigate(logo.targetTab);
                  }
                }}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border ${logo.borderColor} bg-white hover:${logo.bgLight} hover:shadow-xs transition-all duration-200 cursor-pointer group shrink-0 select-none`}
              >
                {/* Logo graphic */}
                <div className="shrink-0">
                  {renderLogoGraphic(logo)}
                </div>

                <div className="h-6 w-[1px] bg-slate-200/80 mx-0.5"></div>

                {/* Role / Relation & Badge */}
                <div className="flex flex-col text-left">
                  <span className="text-[11px] font-semibold text-slate-800 font-sans group-hover:text-emerald-700 transition-colors">
                    {logo.roleOrRelation}
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-medium ${logo.bgLight} ${logo.textColor}`}>
                      {logo.badgeText}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400">
                      • {logo.category}
                    </span>
                  </div>
                </div>

                <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-emerald-600 transition-colors shrink-0 ml-1" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* 2. 3D WHEEL / DIAL MODE (Interactive Carousel Wheel) */
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 relative">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase">
              INTERACTIVE DIAL: LOGO #{selectedWheelIndex + 1} OF {filteredLogos.length}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrevWheel}
                className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer shadow-2xs"
                title="Previous Logo"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextWheel}
                className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer shadow-2xs"
                title="Next Logo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Wheel Item Card */}
          {filteredLogos[selectedWheelIndex] && (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row items-center justify-between gap-5 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                  {renderLogoGraphic(filteredLogos[selectedWheelIndex])}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold font-display text-slate-900">
                      {filteredLogos[selectedWheelIndex].name}
                    </h4>
                    <span className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold border border-slate-200">
                      {filteredLogos[selectedWheelIndex].category}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-emerald-700 font-sans mt-0.5">
                    {filteredLogos[selectedWheelIndex].roleOrRelation}
                  </p>
                  <p className="text-xs text-slate-500 font-mono mt-1">
                    Credential badge: {filteredLogos[selectedWheelIndex].badgeText}
                  </p>
                </div>
              </div>

              {filteredLogos[selectedWheelIndex].targetTab && onNavigate && (
                <button
                  onClick={() => onNavigate(filteredLogos[selectedWheelIndex].targetTab!)}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs px-4 py-2 rounded-xl transition-colors cursor-pointer shrink-0 flex items-center gap-1.5"
                >
                  <span>Inspect Associated Records</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}

          {/* Thumbnail dots selector */}
          <div className="flex items-center justify-center gap-1.5 mt-4 overflow-x-auto pb-1">
            {filteredLogos.map((l, i) => (
              <button
                key={l.id}
                onClick={() => setSelectedWheelIndex(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  selectedWheelIndex === i ? 'w-6 bg-emerald-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                title={l.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
