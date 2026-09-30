import { Leaf, Users, BookOpen, ShieldCheck, HeartHandshake, ArrowRight, Award, CheckCircle2 } from 'lucide-react';

export default function ImpactView() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
      {/* Header */}
      <div className="border-b border-white/10 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-green-400 font-semibold">
            EXTERNALITIES & TANGIBLE SOCIAL CAPITAL
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white">
          IMPACT
        </h1>
        <p className="text-base sm:text-xl text-slate-300 mt-2 max-w-3xl font-sans">
          Technology matters when it leaves the screen. Restoring native urban micro-forests, empowering elderly citizens against cyber exploitation, and tutoring students weekly.
        </p>
      </div>

      {/* Aggregate Impact Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
        <div className="bg-[#0b0e14] border border-green-500/30 rounded-2xl p-5">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
            NATIVE TREES PLANTED
          </span>
          <span className="text-3xl font-bold text-green-400 mt-1 block">
            100,000
          </span>
          <span className="text-[11px] text-slate-400 mt-1 block">
            Across 5 Bangalore Miyawaki sites
          </span>
        </div>

        <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-5">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
            CORPORATE CSR RAISED
          </span>
          <span className="text-3xl font-bold text-white mt-1 block">
            ₹500,000
          </span>
          <span className="text-[11px] text-slate-400 mt-1 block">
            Under "One Person One Tree"
          </span>
        </div>

        <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-5">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
            SENIORS EDUCATED
          </span>
          <span className="text-3xl font-bold text-amber-400 mt-1 block">
            1,000+
          </span>
          <span className="text-[11px] text-slate-400 mt-1 block">
            Interactive ScamSlayer workshops
          </span>
        </div>

        <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-5">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
            ACADEMIC PERFORMANCE BOOST
          </span>
          <span className="text-3xl font-bold text-purple-400 mt-1 block">
            +25% Marks
          </span>
          <span className="text-[11px] text-slate-400 mt-1 block">
            2-year weekly tutoring (RGH School)
          </span>
        </div>
      </div>

      {/* Feature 01: Shades of Tomorrow & Miyawaki Micro-Forests */}
      <div className="bg-[#0b0f15] border border-green-500/30 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-green-400 font-bold mb-1">
              <Leaf className="w-4 h-4" />
              <span>ECOLOGICAL RESTORATION // FOUNDER</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-white">
              Shades of Tomorrow & EcoWeave
            </h2>
          </div>
          <span className="bg-green-950/70 border border-green-500/30 text-green-300 font-mono text-xs px-3 py-1 rounded-full font-bold w-fit">
            100,000 TREES • 5 SITES
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm font-sans leading-relaxed">
            <p>
              Founded <strong>Shades of Tomorrow</strong> to combat Bangalore's severe urban heat islands and biodiversity loss. Using the high-density Akira Miyawaki afforestation methodology, we established multi-tiered native micro-forests that grow 10× faster and 30× denser than conventional plantations.
            </p>
            <p>
              Between 2022 and 2025, I spearheaded corporate fundraising under the <em>"One Person One Tree"</em> campaign, raising <strong>₹500,000 in CSR funding</strong> from enterprise partners to purchase saplings, bio-enrich soil, and sustain site irrigation.
            </p>
            <p className="bg-[#121922] p-4 rounded-xl border border-white/5 font-mono text-xs text-slate-200">
              <strong>Digital Companion:</strong> Designed and deployed <strong>EcoWeave</strong>, an AI-assisted web application that calculates 4-layer canopy stratification (canopy trees, sub-canopy, shrubs, and ground cover) to eliminate species choking and track quarterly sapling survival across all 5 plantation zones.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#121820] rounded-2xl p-5 border border-white/5 space-y-4 font-mono text-xs">
            <span className="text-slate-300 font-bold block uppercase tracking-wider text-[11px]">
              PLANTATION AUDIT METRICS
            </span>
            <div className="space-y-2.5">
              <div className="flex justify-between items-center p-2.5 bg-[#0a0d12] rounded-lg border border-white/5">
                <span className="text-slate-400">Total Saplings Planted</span>
                <span className="text-green-400 font-bold">100,000</span>
              </div>
              <div className="flex justify-between items-center p-2.5 bg-[#0a0d12] rounded-lg border border-white/5">
                <span className="text-slate-400">Bangalore Urban Sites</span>
                <span className="text-white font-bold">5 High-Stress Zones</span>
              </div>
              <div className="flex justify-between items-center p-2.5 bg-[#0a0d12] rounded-lg border border-white/5">
                <span className="text-slate-400">Philanthropic Capital Raised</span>
                <span className="text-white font-bold">₹500,000 (Corporate)</span>
              </div>
              <div className="flex justify-between items-center p-2.5 bg-[#0a0d12] rounded-lg border border-white/5">
                <span className="text-slate-400">Target Native Species</span>
                <span className="text-green-400 font-bold">35+ Indigenous Types</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 02: ScamSlayer Senior Citizen Outreach */}
      <div className="bg-[#0b0e14] border border-amber-500/30 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>COMMUNITY CYBERSECURITY DEFENSE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display text-white">
              Senior Citizen Fraud Prevention Workshops
            </h2>
          </div>
          <span className="bg-amber-950/70 border border-amber-500/30 text-amber-300 font-mono text-xs px-3 py-1 rounded-full font-bold w-fit">
            1,000+ SENIORS TRAINED
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm font-sans leading-relaxed">
            <p>
              In response to the surge of predatory "digital arrest" and bank KYC scams targeting elderly citizens in India, I transitioned the <strong>ScamSlayer</strong> threat engine from a digital website into physical, interactive workshops in senior-living communities and residential associations.
            </p>
            <p>
              Over <strong>1,000 senior citizens</strong> participated in guided threat sandboxing, learning to identify spoofed police caller IDs, phishing SMS gateways, and deceptive urgency cues.
            </p>
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs font-mono text-slate-300 flex items-start gap-2">
              <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Legislative Endorsement:</strong> Officially recognized and commended by <strong>MLA Mrs. Manjula</strong> (Mahadevpura Constituency, Government of Karnataka) and featured in <strong>Outlook India</strong> for community fraud awareness.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#121822] rounded-2xl p-5 border border-white/5 font-mono text-xs space-y-3">
            <span className="text-slate-300 font-bold uppercase tracking-wider block text-[11px]">
              OUTREACH HIGHLIGHTS
            </span>
            <ul className="space-y-2 text-slate-300 text-xs font-sans">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-mono font-bold mt-0.5">✔</span>
                <span>Trained 1,000+ elderly residents in Mahadevpura & greater Bangalore</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-mono font-bold mt-0.5">✔</span>
                <span>Published patent for experiential fraud-recognition systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-mono font-bold mt-0.5">✔</span>
                <span>Established 1930 Cyber Helpline reporting protocols in senior centers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Feature 03: RGH Government School & Project EcoFin */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* RGH School */}
        <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-purple-400 font-bold mb-1">
              <BookOpen className="w-4 h-4" />
              <span>ACADEMIC EQUITY // 2-YEAR VOLUNTEER</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              RGH Government School Tutoring
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Direct weekly academic mentorship for underprivileged students
            </p>
            <p className="text-sm text-slate-300 font-sans mt-3 leading-relaxed">
              Tutored 5 students in English consistently over 2 years at RGH Government School. Formulated customized visual aids, phonetic worksheets, and design-thinking exercises for Grades 6 and 8. The intervention helped students achieve a <strong>25% improvement</strong> in final examination scores.
            </p>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs">
            <span className="text-slate-400">MEASURABLE GAIN:</span>
            <span className="text-purple-400 font-bold bg-purple-950/50 px-2 py-0.5 rounded border border-purple-500/20">
              +25% Higher Marks
            </span>
          </div>
        </div>

        {/* Project EcoFin */}
        <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 font-bold mb-1">
              <HeartHandshake className="w-4 h-4" />
              <span>FINANCIAL INCLUSION // TRIBES FOR GOOD NGO</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              Project EcoFin & Social Stock Exchange
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Grassroots literacy for artisans, micro-entrepreneurs & youth
            </p>
            <p className="text-sm text-slate-300 font-sans mt-3 leading-relaxed">
              Volunteered with Tribes for Good NGO to teach personal and digital finance fundamentals to low-income families. Raised awareness about the emerging Indian Social Stock Exchange (SSE), enabling non-profits and social enterprises to tap retail and institutional impact capital.
            </p>
          </div>

          <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs">
            <span className="text-slate-400">OUTREACH SCOPE:</span>
            <span className="text-emerald-400 font-bold bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/20">
              Artisans & Youth
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
