import React from 'react';
import { GalleryAsset } from '../data/galleryAssets';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, Calendar, MapPin, Sparkles, Building, ZoomIn, FileText, Trees, Users, HeartHandshake, Medal, Trophy } from 'lucide-react';

interface VisualAssetDisplayProps {
  asset: GalleryAsset;
  onOpenLightbox?: (asset: GalleryAsset) => void;
  aspect?: 'video' | 'portrait' | 'square' | 'auto';
  className?: string;
}

export default function VisualAssetDisplay({ asset, onOpenLightbox, aspect = 'video', className = '' }: VisualAssetDisplayProps) {
  const handleClick = () => {
    if (onOpenLightbox) {
      onOpenLightbox(asset);
    }
  };

  const getAspectClass = () => {
    switch (aspect) {
      case 'portrait': return 'aspect-[3/4]';
      case 'square': return 'aspect-square';
      case 'video': return 'aspect-[16/10]';
      default: return 'aspect-[16/10]';
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer ${className}`}
    >
      {/* Visual Canvas Representation */}
      <div className={`w-full ${getAspectClass()} relative overflow-hidden bg-slate-100 flex items-center justify-center select-none`}>
        {/* Render specific visual by visualKey */}
        {renderVisualContent(asset)}

        {/* Hover overlay with zoom hint */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-sans text-xs font-semibold backdrop-blur-[2px] z-30">
          <ZoomIn className="w-4 h-4 text-emerald-300" />
          <span>Inspect Document & Official Seal</span>
        </div>

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-20 pointer-events-none">
          {asset.badge && (
            <span className="bg-white/95 text-slate-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-xs border border-slate-200">
              {asset.badge}
            </span>
          )}
        </div>

        {asset.verified && (
          <div className="absolute top-2.5 right-2.5 z-20 pointer-events-none">
            <span className="bg-emerald-500 text-white text-[10px] font-mono font-semibold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              <span>VERIFIED</span>
            </span>
          </div>
        )}
      </div>

      {/* Info Card Below */}
      <div className="p-3.5 bg-white border-t border-slate-100 space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span className="truncate max-w-[180px] font-medium text-emerald-700">{asset.organization}</span>
          <span className="text-slate-400">{asset.date}</span>
        </div>

        <h4 className="text-sm font-bold font-display text-slate-900 line-clamp-1 group-hover:text-emerald-600 transition-colors">
          {asset.title}
        </h4>

        <p className="text-xs text-slate-600 font-sans line-clamp-2 leading-relaxed">
          {asset.caption}
        </p>
      </div>
    </div>
  );
}

function renderVisualContent(asset: GalleryAsset) {
  switch (asset.visualKey) {
    // 1. CREST GOLD AWARD
    case 'crest-award':
      return (
        <div className="w-full h-full bg-[#fbfcfd] p-5 flex flex-col justify-between border-8 border-slate-100 relative">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                CG
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-slate-800 tracking-wider block">CREST AWARDS</span>
                <span className="text-[9px] text-slate-500 font-sans">BRITISH SCIENCE ASSOCIATION</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-600 border border-amber-300 bg-amber-50 px-2 py-0.5 rounded">
              GOLD
            </span>
          </div>

          <div className="my-auto text-center space-y-1">
            <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400">Presented to</span>
            <h5 className="text-base font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] text-emerald-800 font-mono font-medium max-w-[220px] mx-auto truncate">
              Persifolio: Virtual Stock Investment Simulator
            </p>
            <span className="text-[9px] text-slate-500 block">Inventure Academy • 28/10/2025</span>
          </div>

          <div className="flex justify-between items-end border-t border-slate-200 pt-2 text-[9px] font-mono text-slate-500">
            <span>Dr. Heather King (VP Education)</span>
            <span className="text-emerald-700 font-bold">Registered Charity #212479</span>
          </div>
        </div>
      );

    // 2. HACKHARVARD CERTIFICATE
    case 'hackharvard-cert':
      return (
        <div className="w-full h-full bg-[#fffefe] p-5 flex flex-col justify-between border-8 border-rose-50/60 relative">
          <div className="flex justify-between items-center border-b border-rose-100 pb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-rose-600 flex items-center justify-center text-white text-[10px] font-bold font-mono">
                H
              </div>
              <span className="text-xs font-bold font-mono text-rose-700 tracking-wider">HACKHARVARD 2026</span>
            </div>
            <span className="text-[9px] font-mono bg-rose-50 text-rose-700 px-2 py-0.5 rounded font-bold border border-rose-200">
              FIRST POSITION (#1)
            </span>
          </div>

          <div className="text-center my-auto space-y-1">
            <span className="text-[9px] font-mono text-slate-400 uppercase">Certificate of Achievement</span>
            <h5 className="text-base font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] text-slate-600 max-w-[240px] mx-auto leading-tight">
              For securing First Position in the HackHarvard Challenge 2026 hosted at Ashoka University.
            </p>
          </div>

          <div className="flex justify-between items-end text-[9px] font-mono text-slate-500 pt-2 border-t border-slate-100">
            <span>Luna Yin (Co-Director)</span>
            <span className="text-rose-600 font-bold">Harvard Mentorship</span>
          </div>
        </div>
      );

    // 3. HACKHARVARD GROUP COHORT
    case 'hackharvard-group':
      return (
        <div className="w-full h-full bg-[#1b2533] relative overflow-hidden flex flex-col justify-end p-4 text-white">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

          <div className="absolute top-3 left-3 z-20">
            <span className="bg-red-500/20 text-red-300 border border-red-500/40 text-[9px] font-mono px-2 py-0.5 rounded font-bold">
              ASHOKA UNIVERSITY CAMPUS LAWN
            </span>
          </div>

          <div className="relative z-20 space-y-1">
            <span className="text-[9px] font-mono text-rose-400 font-bold tracking-wider uppercase block">
              HACKHARVARD CHALLENGE 2026
            </span>
            <h5 className="text-sm font-bold font-display text-white">
              Where Ideas Became Reality Cohort
            </h5>
            <p className="text-[10px] text-slate-300 font-sans">
              Daksh Sawhney leading the #1 championship team on campus with faculty and participants.
            </p>
          </div>
        </div>
      );

    // 4. RSI STAGE AWARD AT IISc
    case 'rsi-stage':
      return (
        <div className="w-full h-full bg-[#131b26] relative overflow-hidden flex flex-col justify-end p-4 text-white">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent z-10"></div>
          <div className="absolute top-3 left-3 z-20">
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[9px] font-mono px-2 py-0.5 rounded font-bold">
              IISc FACULTY HALL
            </span>
          </div>

          <div className="relative z-20 space-y-1">
            <span className="text-[9px] font-mono text-emerald-400 font-bold block">
              RESEARCH SCIENCE INITIATIVE 2026
            </span>
            <h5 className="text-sm font-bold font-display text-white">
              Felicitation on Stage by IISc & CEE Leadership
            </h5>
            <p className="text-[10px] text-slate-300">
              Prof. Deepak K. Saini (Convenor, RSI-India) & Amy L. Sillman, PhD conferring award on Daksh Sawhney.
            </p>
          </div>
        </div>
      );

    // 5. RSI CERTIFICATE DOC
    case 'rsi-cert-doc':
      return (
        <div className="w-full h-full bg-[#fbfdfa] p-5 flex flex-col justify-between border-8 border-emerald-50/70 font-sans text-slate-800">
          <div className="text-center border-b border-emerald-100 pb-2">
            <span className="text-[11px] font-bold text-slate-900 tracking-wider block font-serif">
              RESEARCH SCIENCE INITIATIVE INDIA
            </span>
            <span className="text-[8px] text-emerald-700 font-mono">
              CEE • Adani Group • Indian Institute of Science (IISc)
            </span>
          </div>

          <div className="my-auto text-center space-y-1">
            <span className="text-[8px] font-mono text-slate-400">CERTIFIES THAT</span>
            <h5 className="text-base font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] text-slate-600">
              Has successfully completed the Research Science Initiative 2026 at IISc Bangalore
            </p>
          </div>

          <div className="flex justify-between items-end text-[8px] font-mono text-slate-500 border-t border-slate-200 pt-1.5">
            <span>Prof. Deepak K. Saini (IISc)</span>
            <span>Amy L. Sillman, PhD (CEE)</span>
          </div>
        </div>
      );

    // 6. OFFICIAL PATENT JOURNAL
    case 'patent-doc':
      return (
        <div className="w-full h-full bg-[#faf9f5] p-5 flex flex-col justify-between border-8 border-slate-200/80 font-mono text-slate-800">
          <div className="text-center border-b border-slate-300 pb-2">
            <span className="text-[10px] font-bold block text-slate-900">OFFICIAL JOURNAL OF THE PATENT OFFICE</span>
            <span className="text-[8px] text-slate-600">GOVERNMENT OF INDIA • ISSUE NO. 01/2026</span>
          </div>

          <div className="my-auto space-y-1.5 text-[9px]">
            <div className="bg-slate-100 p-2 rounded border border-slate-300 space-y-0.5">
              <span className="text-slate-500 block">APPLICATION NO: 202541127959 A</span>
              <strong className="text-slate-900 block font-bold text-[10px]">
                DYNAMIC AI-BASED INVESTMENT PORTFOLIO RECOMMENDATION SYSTEM WITH MARKET SIMULATION
              </strong>
              <span className="text-emerald-700 font-bold block">APPLICANT & INVENTOR: DAKSH SAWHNEY</span>
            </div>
            <p className="text-[8px] text-slate-600 line-clamp-2">
              Computer-implemented system generating personalized investment portfolios using an AI risk engine integrated with live market simulation.
            </p>
          </div>

          <div className="flex justify-between text-[8px] border-t border-slate-300 pt-1 text-slate-500">
            <span>Filing: 17/12/2025</span>
            <span className="font-bold text-slate-700">Published: 02/01/2026</span>
          </div>
        </div>
      );

    // 7. WHARTON ONLINE CERTIFICATE
    case 'wharton-cert':
      return (
        <div className="w-full h-full bg-[#fdfbf7] p-5 flex flex-col justify-between border-8 border-slate-100">
          <div className="flex justify-between items-center">
            <span className="font-serif text-sm font-bold text-red-900">Wharton Online</span>
            <span className="text-[9px] font-mono text-slate-500">UNIVERSITY OF PENNSYLVANIA</span>
          </div>

          <div className="text-center my-auto space-y-1">
            <span className="text-[8px] font-mono text-slate-400 uppercase">Specialization Certificate</span>
            <h5 className="text-base font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] font-bold text-slate-800">
              Fintech: Foundations & Applications of Financial Technology
            </p>
            <span className="text-[8px] text-slate-500 block">4 Courses: Payments, Crypto, Robo-advising, Crowdfunding</span>
          </div>

          <div className="flex justify-between items-end text-[8px] font-mono text-slate-500 border-t border-slate-200 pt-2">
            <span>David Musto (Stevens Center Director)</span>
            <span className="text-slate-700 font-bold">Dec 21, 2025</span>
          </div>
        </div>
      );

    // 8. IIT MADRAS CERTIFICATE
    case 'iit-madras':
      return (
        <div className="w-full h-full bg-[#fcfbfa] p-5 flex flex-col justify-between border-8 border-amber-100/70">
          <div className="text-center border-b border-amber-200 pb-2">
            <span className="text-[10px] font-bold text-amber-900 block font-serif">
              Indian Institute of Technology Madras
            </span>
            <span className="text-[8px] text-slate-600 font-sans">Centre for Outreach and Digital Education (CODE)</span>
          </div>

          <div className="text-center my-auto space-y-1">
            <span className="text-[8px] font-mono text-slate-400 uppercase">Certificate of Completion</span>
            <h5 className="text-base font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] font-bold text-slate-800">
              Introduction to Data Science and AI
            </p>
            <span className="text-[8px] text-slate-500 block">8-Week Certification Course • October 2025</span>
          </div>

          <div className="flex justify-between items-end text-[8px] font-mono text-slate-500 border-t border-slate-200 pt-2">
            <span>Prof. Andrew Thangaraj (Chair, IITM CODE)</span>
            <span className="text-amber-700 font-bold">Inventure Academy</span>
          </div>
        </div>
      );

    // 9. HDFC CREDILA FIRST PRIZE
    case 'hdfc-credila':
      return (
        <div className="w-full h-full bg-[#f8fafc] p-5 flex flex-col justify-between border-8 border-blue-50">
          <div className="flex justify-between items-center border-b border-slate-200 pb-2">
            <span className="text-xs font-bold text-blue-900 font-mono">PORTFOLIO STRATEGY CHALLENGE</span>
            <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              FIRST PRIZE
            </span>
          </div>

          <div className="text-center my-auto space-y-1">
            <span className="text-[8px] font-mono text-slate-400">ORGANIZED BY HDFC CREDILA</span>
            <h5 className="text-base font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] text-slate-600">
              Winning First Place for Comprehensive Client Asset Allocation & Strategy
            </p>
          </div>

          <div className="flex justify-between text-[8px] font-mono text-slate-500 border-t border-slate-200 pt-2">
            <span>Hitesh Parashar (Business Head)</span>
            <span>February 10th, 2024</span>
          </div>
        </div>
      );

    // 10. CAMBRIDGE CCIR FUTURE SCHOLAR
    case 'ccir-cert':
      return (
        <div className="w-full h-full bg-[#f6f9fc] p-5 flex flex-col justify-between border-8 border-sky-100">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-sky-950 font-serif">Cambridge Centre for Int. Research</span>
            <span className="text-[9px] font-mono text-sky-700 font-bold">UK SCIENCE PARK</span>
          </div>

          <div className="text-center my-auto space-y-1">
            <span className="text-[9px] font-mono text-sky-600 font-bold uppercase tracking-wider">Cambridge Future Scholar</span>
            <h5 className="text-base font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] text-slate-700 font-medium">
              Machine Learning & Natural Language Processing
            </p>
            <span className="text-[8px] text-slate-500 block">Mentored by Dr. Weiwei Sun (University of Cambridge)</span>
          </div>

          <div className="flex justify-between text-[8px] font-mono text-slate-500 border-t border-slate-200 pt-2">
            <span>Class of 2025</span>
            <span className="font-bold text-sky-900">17 March 2026</span>
          </div>
        </div>
      );

    // 11. INVENTURE CS TOPPER
    case 'inventure-cs':
      return (
        <div className="w-full h-full bg-[#fffcf7] p-5 flex flex-col justify-between border-8 border-orange-50">
          <div className="text-center border-b border-orange-100 pb-2">
            <span className="text-xs font-bold text-slate-900 font-serif">INVENTURE ACADEMY</span>
            <span className="text-[8px] text-orange-600 font-mono block">AWARD OF EXCELLENCE</span>
          </div>

          <div className="text-center my-auto space-y-1">
            <span className="text-[8px] font-mono text-slate-400 uppercase">SUBJECT TOPPER</span>
            <h5 className="text-base font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] font-bold text-orange-700">
              Grade 11D — Computer Science
            </p>
            <span className="text-[8px] text-slate-500 block">Academic Year 2025 - 2026</span>
          </div>

          <div className="flex justify-between text-[8px] font-mono text-slate-500 border-t border-slate-100 pt-2">
            <span>Meenakshi Myer (Principal)</span>
            <span>Nooraine Fazal (Founding CEO)</span>
          </div>
        </div>
      );

    // 12. INVENTURE OUTREACH AWARD
    case 'inventure-outreach':
      return (
        <div className="w-full h-full bg-[#f8fdf9] p-5 flex flex-col justify-between border-8 border-emerald-50">
          <div className="text-center border-b border-emerald-100 pb-2">
            <span className="text-xs font-bold text-slate-900 font-serif">INVENTURE ACADEMY</span>
            <span className="text-[8px] text-emerald-700 font-mono block">AWARD OF EXCELLENCE</span>
          </div>

          <div className="text-center my-auto space-y-1">
            <span className="text-[8px] font-mono text-slate-400 uppercase">HONORING</span>
            <h5 className="text-base font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] font-bold text-emerald-800">
              The Inventure Academy Community Outreach Award
            </p>
            <span className="text-[8px] text-slate-500 block">Grade 10D • Academic Year 2024 - 2025</span>
          </div>

          <div className="flex justify-between text-[8px] font-mono text-slate-500 border-t border-slate-100 pt-2">
            <span>Whitefield Sarjapur Campus</span>
            <span className="text-emerald-700 font-bold">Bangalore</span>
          </div>
        </div>
      );

    // 13. ATHLETIC MERIT: INVENTURE SHOTPUT 1
    case 'inventure-shotput-1':
      return (
        <div className="w-full h-full bg-[#fffefe] p-4 flex flex-col justify-between border-8 border-slate-100">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
            <div className="flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span className="text-[10px] font-mono font-bold text-slate-800">INVENTURE ACADEMY</span>
            </div>
            <span className="text-[9px] font-mono bg-slate-100 px-2 py-0.5 rounded font-bold">
              SECOND PLACE
            </span>
          </div>

          <div className="my-auto text-center space-y-1">
            <span className="text-[8px] font-mono text-slate-400">CERTIFICATE OF MERIT</span>
            <h5 className="text-sm font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] font-bold text-slate-700">
              Shotput, Division 8 - Boys
            </p>
            <span className="text-[8px] text-slate-500 block">Annual Athletics Meet • 03/11/2025</span>
          </div>

          <div className="flex justify-between text-[8px] font-mono text-slate-400 border-t border-slate-100 pt-1">
            <span>Inventors House</span>
            <span>Kishen Whabi (Beyond Academics)</span>
          </div>
        </div>
      );

    // 14. ATHLETIC MERIT: INVENTURE SHOTPUT 2
    case 'inventure-shotput-2':
      return (
        <div className="w-full h-full bg-[#fffefe] p-4 flex flex-col justify-between border-8 border-slate-100">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
            <div className="flex items-center gap-1.5">
              <Medal className="w-4 h-4 text-slate-600" />
              <span className="text-[10px] font-mono font-bold text-slate-800">INVENTURE SPORTS FEST</span>
            </div>
            <span className="text-[9px] font-mono bg-slate-100 px-2 py-0.5 rounded font-bold">
              SECOND
            </span>
          </div>

          <div className="my-auto text-center space-y-1">
            <span className="text-[8px] font-mono text-slate-400">CERTIFICATE OF MERIT</span>
            <h5 className="text-sm font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] font-bold text-slate-700">
              Grade 12 & Below - Boys — Shotput
            </p>
            <span className="text-[8px] text-slate-500 block">Sports Fest 2025 - 2026</span>
          </div>

          <div className="flex justify-between text-[8px] font-mono text-slate-400 border-t border-slate-100 pt-1">
            <span>Bangalore</span>
            <span>Managing Trustee & CEO</span>
          </div>
        </div>
      );

    // 15. TISB SWIMMING BUTTERFLY
    case 'tisb-butterfly':
      return (
        <div className="w-full h-full bg-[#f0f9ff] p-4 flex flex-col justify-between border-8 border-sky-100">
          <div className="flex items-center justify-between border-b border-sky-200 pb-1.5">
            <span className="text-[10px] font-mono font-bold text-sky-950">TISB AQUATIC CHAMPIONSHIP</span>
            <span className="text-[9px] font-mono bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold">
              THIRD PLACE
            </span>
          </div>

          <div className="my-auto text-center space-y-1">
            <span className="text-[8px] font-mono text-slate-400">CERTIFICATE OF MERIT</span>
            <h5 className="text-sm font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] font-bold text-sky-800">
              25m Butterfly — Division C Boys
            </p>
            <span className="text-[8px] text-slate-500 block">The International School Bangalore • 18/10/2022</span>
          </div>

          <div className="flex justify-between text-[8px] font-mono text-slate-500 border-t border-sky-100 pt-1">
            <span>Tarun Kr. Biswal (PE Director)</span>
            <span>Principal, TISB</span>
          </div>
        </div>
      );

    // 16. TISB SWIMMING BACKSTROKE
    case 'tisb-backstroke':
      return (
        <div className="w-full h-full bg-[#f0f9ff] p-4 flex flex-col justify-between border-8 border-sky-100">
          <div className="flex items-center justify-between border-b border-sky-200 pb-1.5">
            <span className="text-[10px] font-mono font-bold text-sky-950">TISB AQUATIC CHAMPIONSHIP</span>
            <span className="text-[9px] font-mono bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold">
              THIRD PLACE
            </span>
          </div>

          <div className="my-auto text-center space-y-1">
            <span className="text-[8px] font-mono text-slate-400">CERTIFICATE OF MERIT</span>
            <h5 className="text-sm font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] font-bold text-sky-800">
              25m Backstroke — Division C Boys
            </p>
            <span className="text-[8px] text-slate-500 block">The International School Bangalore • 18/10/2022</span>
          </div>

          <div className="flex justify-between text-[8px] font-mono text-slate-500 border-t border-sky-100 pt-1">
            <span>Tarun Kr. Biswal (PE Director)</span>
            <span>Principal, TISB</span>
          </div>
        </div>
      );

    // 17. TISB SHOTPUT FIRST PLACE
    case 'tisb-shotput':
      return (
        <div className="w-full h-full bg-[#fefce8] p-4 flex flex-col justify-between border-8 border-amber-100">
          <div className="flex items-center justify-between border-b border-amber-200 pb-1.5">
            <span className="text-[10px] font-mono font-bold text-amber-950">TISB TRACK & FIELD MEET</span>
            <span className="text-[9px] font-mono bg-amber-400 text-amber-950 px-2 py-0.5 rounded font-black">
              FIRST PLACE (#1)
            </span>
          </div>

          <div className="my-auto text-center space-y-1">
            <span className="text-[8px] font-mono text-slate-400">CERTIFICATE OF MERIT</span>
            <h5 className="text-sm font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] font-bold text-amber-900">
              Shot Put — 8 and Below Boys
            </p>
            <span className="text-[8px] text-slate-500 block">The International School Bangalore • 01/11/2022</span>
          </div>

          <div className="flex justify-between text-[8px] font-mono text-slate-500 border-t border-amber-200 pt-1">
            <span>Tarun Kr. Biswal (PE Director)</span>
            <span>Principal, TISB</span>
          </div>
        </div>
      );

    // 18. TISB 600M RELAY
    case 'tisb-relay':
      return (
        <div className="w-full h-full bg-[#f8fafc] p-4 flex flex-col justify-between border-8 border-slate-100">
          <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
            <span className="text-[10px] font-mono font-bold text-slate-800">TISB TRACK & FIELD MEET</span>
            <span className="text-[9px] font-mono bg-slate-200 text-slate-800 px-2 py-0.5 rounded font-bold">
              SECOND PLACE
            </span>
          </div>

          <div className="my-auto text-center space-y-1">
            <span className="text-[8px] font-mono text-slate-400">CERTIFICATE OF MERIT</span>
            <h5 className="text-sm font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] font-bold text-slate-700">
              600m Relay — 8 and Below Boys
            </p>
            <span className="text-[8px] text-slate-500 block">The International School Bangalore • 01/11/2022</span>
          </div>

          <div className="flex justify-between text-[8px] font-mono text-slate-500 border-t border-slate-100 pt-1">
            <span>Tarun Kr. Biswal</span>
            <span>Principal, TISB</span>
          </div>
        </div>
      );

    // 19. ISSO NATIONAL GAMES BADMINTON
    case 'isso-badminton':
      return (
        <div className="w-full h-full bg-[#fdfdfd] p-4 flex flex-col justify-between border-8 border-sky-50">
          <div className="text-center border-b border-sky-100 pb-1.5">
            <span className="text-[10px] font-bold text-sky-900 block font-mono">ISSO NATIONAL GAMES 2022-2023</span>
            <span className="text-[8px] text-slate-500 font-sans">School Games Federation of India (SGFI)</span>
          </div>

          <div className="my-auto text-center space-y-1">
            <span className="text-[8px] font-mono text-slate-400">PARTICIPATION CERTIFICATE</span>
            <h5 className="text-sm font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] font-bold text-slate-700">
              Badminton — Under 17 Boys
            </p>
            <span className="text-[8px] text-slate-500 block">Venue: BGS International Academia Bangalore</span>
          </div>

          <div className="flex justify-between text-[8px] font-mono text-slate-400 border-t border-slate-100 pt-1">
            <span>Director, ISSO</span>
            <span>Organising Secretary</span>
          </div>
        </div>
      );

    // 20. TRIBES FOR GOOD CERTIFICATE
    case 'tribes-cert':
      return (
        <div className="w-full h-full bg-[#f0fdfa] p-4 flex flex-col justify-between border-8 border-teal-100">
          <div className="flex items-center justify-between border-b border-teal-200 pb-1.5">
            <span className="text-[10px] font-mono font-bold text-teal-900">TRIBESFORGOOD</span>
            <span className="text-[8px] font-mono bg-teal-100 text-teal-800 px-2 py-0.5 rounded font-bold">
              25 HOURS COMMUNITY WORK
            </span>
          </div>

          <div className="my-auto text-center space-y-1">
            <span className="text-[8px] font-mono text-slate-400">CERTIFICATE OF COMPLETION</span>
            <h5 className="text-sm font-bold font-display text-slate-900">Daksh Sawhney</h5>
            <p className="text-[10px] font-bold text-teal-800">
              Student Advocate — Financial Management & Sports
            </p>
            <span className="text-[8px] text-slate-500 block">Global Challenges & Social Justice</span>
          </div>

          <div className="flex justify-between text-[8px] font-mono text-slate-500 border-t border-teal-100 pt-1">
            <span>Mandeep Kaur (Founder)</span>
            <span>ThinkSharp Foundation</span>
          </div>
        </div>
      );

    // 21. OUTLOOK INDIA MEDIA FEATURE
    case 'outlook-feature':
      return (
        <div className="w-full h-full bg-white p-4 flex flex-col justify-between border-4 border-slate-200 font-sans">
          <div className="flex items-center justify-between border-b border-red-200 pb-2">
            <span className="text-base font-bold text-red-600 tracking-tight font-serif">Outlook</span>
            <span className="text-[9px] font-mono text-slate-400">BUSINESS & SOCIETY • SEP 4, 2026</span>
          </div>

          <div className="my-auto space-y-2">
            <span className="text-[9px] font-mono bg-red-50 text-red-700 px-1.5 py-0.5 rounded font-bold">
              NATIONAL CYBER DEFENSE FEATURE
            </span>
            <h5 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
              High School Innovator Trains Senior Citizens Against Digital Arrest Scams
            </h5>
            <p className="text-[9px] text-slate-600 line-clamp-2">
              Daksh Sawhney demonstrates live threat simulations using ScamSlayer, empowering elderly citizens with fraud recognition and reporting protocols.
            </p>
          </div>

          <div className="flex justify-between text-[8px] font-mono text-slate-400 pt-2 border-t border-slate-100">
            <span>By Nexa Desk, Outlook India</span>
            <span className="text-emerald-700 font-bold">Bangalore Workshop</span>
          </div>
        </div>
      );

    // 22. PERSIFOLIO PAMPHLET STUDENTS
    case 'persifolio-pamphlet-students':
      return (
        <div className="w-full h-full bg-[#064e3b] relative overflow-hidden flex flex-col justify-end p-4 text-white">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-emerald-950/70 to-transparent z-10"></div>
          <div className="absolute top-3 left-3 z-20">
            <span className="bg-emerald-400 text-slate-950 font-mono text-[9px] px-2 py-0.5 rounded font-bold">
              PERSIFOLIO BROCHURE
            </span>
          </div>

          <div className="relative z-20 space-y-1">
            <span className="text-[9px] font-mono text-emerald-300 font-bold block">
              "INVEST IN COMFORT" // QR ONBOARDING
            </span>
            <h5 className="text-sm font-bold font-display text-white">
              Students Adopting Persifolio in College Hall
            </h5>
            <p className="text-[10px] text-emerald-100">
              Young attendees holding green Persifolio guide with direct Google Play Store QR download codes.
            </p>
          </div>
        </div>
      );

    // 23. PERSIFOLIO STUDENT THUMBSUP
    case 'persifolio-student-thumbsup':
      return (
        <div className="w-full h-full bg-[#042f2e] relative overflow-hidden flex flex-col justify-end p-4 text-white">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-teal-950/70 to-transparent z-10"></div>
          <div className="absolute top-3 right-3 z-20">
            <span className="bg-teal-400 text-slate-950 font-mono text-[9px] px-2 py-0.5 rounded font-bold">
              USER ENDORSEMENT
            </span>
          </div>

          <div className="relative z-20 space-y-1">
            <span className="text-[9px] font-mono text-teal-300 font-bold block">
              FINTECH ACCESSIBILITY
            </span>
            <h5 className="text-sm font-bold font-display text-white">
              Student Endorsement of Persifolio Simulator
            </h5>
            <p className="text-[10px] text-teal-100">
              Thumbs-up adoption of automated risk scoring and virtual investment paper trading.
            </p>
          </div>
        </div>
      );

    // 24. PERSIFOLIO WHAT IS INVESTMENT LECTURE
    case 'persifolio-lecture-intro':
      return (
        <div className="w-full h-full bg-[#0f172a] relative overflow-hidden flex flex-col justify-end p-4 text-white">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent z-10"></div>
          <div className="absolute top-3 left-3 z-20">
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] font-mono px-2 py-0.5 rounded font-bold">
              KEYNOTE LECTURE
            </span>
          </div>

          <div className="relative z-20 space-y-1">
            <span className="text-[9px] font-mono text-emerald-400 font-bold block">
              TOPIC: "WHAT IS INVESTMENT?"
            </span>
            <h5 className="text-sm font-bold font-display text-white">
              Daksh Presenting Investment Fundamentals
            </h5>
            <p className="text-[10px] text-slate-300">
              Opening keynote walking undergraduate students through risk profiling and long-term equity growth.
            </p>
          </div>
        </div>
      );

    // 25. PERSIFOLIO LECTURE SCREEN
    case 'persifolio-lecture-screen':
      return (
        <div className="w-full h-full bg-[#1e293b] relative overflow-hidden flex flex-col justify-end p-4 text-white">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent z-10"></div>
          <div className="relative z-20 space-y-1">
            <span className="text-[9px] font-mono text-emerald-400 font-bold block">
              RISK VS RETURN FRAMEWORK
            </span>
            <h5 className="text-sm font-bold font-display text-white">
              Comparative Asset Allocation Projection
            </h5>
            <p className="text-[10px] text-slate-300">
              Slide deck demonstrating mathematical Sharpe ratio balance between equities and debt instruments.
            </p>
          </div>
        </div>
      );

    // 26. PERSIFOLIO HALL WORKSHOP
    case 'persifolio-hall-workshop':
      return (
        <div className="w-full h-full bg-[#1e1b4b] relative overflow-hidden flex flex-col justify-end p-4 text-white">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent z-10"></div>
          <div className="relative z-20 space-y-1">
            <span className="text-[9px] font-mono text-indigo-400 font-bold block">
              AUDITORIUM MASTERCLASS
            </span>
            <h5 className="text-sm font-bold font-display text-white">
              Large Hall Student Participation
            </h5>
            <p className="text-[10px] text-slate-300">
              Over 150 students actively participating in algorithmic asset allocation seminar.
            </p>
          </div>
        </div>
      );

    // 27. PERSIFOLIO CLASSROOM SEMINAR
    case 'persifolio-classroom-seminar':
      return (
        <div className="w-full h-full bg-[#312e81] relative overflow-hidden flex flex-col justify-end p-4 text-white">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent z-10"></div>
          <div className="relative z-20 space-y-1">
            <span className="text-[9px] font-mono text-indigo-300 font-bold block">
              CLASSROOM LECTERN
            </span>
            <h5 className="text-sm font-bold font-display text-white">
              Daksh at Podium Demonstrating Wealth Engine
            </h5>
            <p className="text-[10px] text-indigo-100">
              Guiding students through live portfolio rebalancing scenarios on Persifolio.
            </p>
          </div>
        </div>
      );

    // 28. PERSIFOLIO STAGE FELICITATION
    case 'persifolio-stage-felicitation':
      return (
        <div className="w-full h-full bg-[#451a03] relative overflow-hidden flex flex-col justify-end p-4 text-white">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-amber-950/70 to-transparent z-10"></div>
          <div className="absolute top-3 left-3 z-20">
            <span className="bg-amber-500 text-slate-950 font-mono text-[9px] px-2 py-0.5 rounded font-bold">
              ST. JEROME COLLEGE
            </span>
          </div>

          <div className="relative z-20 space-y-1">
            <span className="text-[9px] font-mono text-amber-300 font-bold block">
              INSTITUTIONAL COMMENDATION
            </span>
            <h5 className="text-sm font-bold font-display text-white">
              Ceremonial Shawl Felicitation on Stage
            </h5>
            <p className="text-[10px] text-amber-100">
              Honored by college faculty leadership for public service in youth financial empowerment.
            </p>
          </div>
        </div>
      );

    // 29. SCAMSLAYER WORKSHOPS (ALL PHOTOS)
    case 'scam-workshop-wide':
    case 'scam-laptop-demo':
    case 'scam-elder-engagement':
    case 'scam-caretaker-sister':
    case 'scam-elder-listening':
      return (
        <div className="w-full h-full bg-[#1e293b] relative overflow-hidden flex flex-col justify-end p-4 text-white">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10"></div>
          <div className="absolute top-3 right-3 z-20">
            <span className="bg-blue-500/20 text-blue-300 border border-blue-500/40 text-[9px] font-mono px-2 py-0.5 rounded font-bold">
              SCAMSLAYER OUTREACH
            </span>
          </div>

          <div className="relative z-20 space-y-1">
            <span className="text-[9px] font-mono text-blue-400 font-bold block">
              SENIOR CITIZEN DEFENSE // 1,000+ TRAINED
            </span>
            <h5 className="text-sm font-bold font-display text-white">
              {asset.title}
            </h5>
            <p className="text-[10px] text-slate-300">
              Interactive courtyard workshop protecting senior residents against digital arrest and OTP theft.
            </p>
          </div>
        </div>
      );

    // 30. MIYAWAKI FORESTS (ALL FIELD PHOTOS)
    case 'ecity-forest':
    case 'chandapura-forest':
    case 'plantation-trench-prep':
    case 'plantation-daksh-mask':
    case 'plantation-spade-digging':
    case 'plantation-sarjapur-watering':
    case 'plantation-drive-rootball':
      return (
        <div className="w-full h-full bg-[#143022] relative overflow-hidden flex flex-col justify-end p-4 text-white">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-emerald-950/60 to-transparent z-10"></div>
          <div className="absolute top-3 left-3 z-20">
            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[9px] font-mono px-2 py-0.5 rounded font-bold">
              100,000 MIYAWAKI TREES
            </span>
          </div>

          <div className="relative z-20 space-y-1">
            <span className="text-[9px] font-mono text-green-300 font-bold block">
              SHADES OF TOMORROW
            </span>
            <h5 className="text-sm font-bold font-display text-white">
              {asset.title}
            </h5>
            <p className="text-[10px] text-slate-200">
              On-ground native afforestation across Bangalore's urban industrial belts.
            </p>
          </div>
        </div>
      );

    // 31. SPORTS AI ANALYTICS
    case 'sports-ai-diagram':
      return (
        <div className="w-full h-full bg-[#0a1426] relative overflow-hidden flex flex-col justify-end p-4 text-white">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10"></div>
          <div className="relative z-20 space-y-1">
            <span className="text-[9px] font-mono text-sky-400 font-bold block">
              INSPIRIT AI // MONEYBALL PROJECT
            </span>
            <h5 className="text-sm font-bold font-display text-white">
              Predictive Valuation & Clustering Models
            </h5>
            <p className="text-[10px] text-slate-300">
              Machine learning player evaluation optimizing multi-million dollar athletic payroll caps.
            </p>
          </div>
        </div>
      );

    // DEFAULT FALLBACK
    default:
      return (
        <div className="w-full h-full bg-slate-100 p-4 flex flex-col justify-center items-center text-center text-slate-700">
          <Award className="w-8 h-8 text-emerald-600 mb-2" />
          <span className="font-bold text-xs">{asset.title}</span>
          <span className="text-[10px] text-slate-500">{asset.organization}</span>
        </div>
      );
  }
}
