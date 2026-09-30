import { PROFILE_INFO, CERTIFICATIONS } from '../data/portfolioData';
import { Sparkles, Terminal, Mail, MapPin, BookOpen, Compass, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function AboutThesisView() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-16">
      {/* Header */}
      <div className="border-b border-white/10 pb-8 space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            PHILOSOPHICAL CONSTITUTION // DAKSH SAWHNEY
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white">
          MY INVESTMENT THESIS
        </h1>
        <p className="text-xl sm:text-2xl text-slate-200 font-display font-medium leading-relaxed">
          “I am interested in the intersection of mathematics, computation, finance, and real-world problems.”
        </p>
      </div>

      {/* Narrative Essay */}
      <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-6 sm:p-10 space-y-6 text-slate-300 font-sans text-base sm:text-lg leading-relaxed">
        <p>
          Most student portfolios ask: <em>“What has this applicant accomplished?”</em>
        </p>
        <p>
          I have always found it more clarifying to ask an investor's question: <strong>“What has this person chosen to invest their limited capital of time, curiosity, and intellectual labor into?”</strong>
        </p>
        <p>
          Capital in high school is measured not in dollars, but in hours of focused attention. When I look at problems, I am drawn to systems characterized by <strong>high uncertainty and structural friction</strong>. In pure mathematics, this manifests as nonlinear recurrence relations where simple deterministic equations suddenly collapse into chaos. In consumer technology, it manifests as first-time retail investors intimidated by jargon, or senior citizens terrified into surrendering their life savings over fraudulent WhatsApp calls.
        </p>
        <p>
          My approach is consistently end-to-end: formulate the theoretical model, build the production code, test it under real-world constraints, and ensure it leaves the screen to impact human beings.
        </p>
      </div>

      {/* The 3 Pillars: What I Study, What I Build, What I Care About */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
        {/* Pillar 1 */}
        <div className="bg-[#0b0e14] border border-cyan-500/30 rounded-2xl p-6 space-y-4">
          <span className="text-xs text-cyan-400 uppercase tracking-wider font-bold block flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            WHAT I STUDY
          </span>
          <h3 className="text-xl font-bold font-display text-white">
            Theoretical Foundations
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">▸</span>
              <span>Applied Mathematics & Dynamical Systems</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">▸</span>
              <span>Computer Science & NLP Architectures</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">▸</span>
              <span>Quantitative Financial Economics</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">▸</span>
              <span>Computational Chaos & Bifurcation</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cyan-400">▸</span>
              <span>Behavioral Psychology & Decision Bias</span>
            </li>
          </ul>
        </div>

        {/* Pillar 2 */}
        <div className="bg-[#0b0e14] border border-emerald-500/30 rounded-2xl p-6 space-y-4">
          <span className="text-xs text-emerald-400 uppercase tracking-wider font-bold block flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            WHAT I BUILD
          </span>
          <h3 className="text-xl font-bold font-display text-white">
            Functional Artifacts
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">▸</span>
              <span>Fintech Platforms (Persifolio — 4K+ Users)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">▸</span>
              <span>Cybersecurity Simulators (ScamSlayer)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">▸</span>
              <span>Career Trajectory Vectoring (Polaris)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">▸</span>
              <span>Afforestation Synergy Web Apps (EcoWeave)</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-emerald-400">▸</span>
              <span>Democracy Hardware (School EVM)</span>
            </li>
          </ul>
        </div>

        {/* Pillar 3 */}
        <div className="bg-[#0b0e14] border border-amber-500/30 rounded-2xl p-6 space-y-4">
          <span className="text-xs text-amber-400 uppercase tracking-wider font-bold block flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            WHAT I CARE ABOUT
          </span>
          <h3 className="text-xl font-bold font-display text-white">
            Enduring Principles
          </h3>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <span className="text-amber-400">▸</span>
              <span>Financial Inclusion & Public Wealth Literacy</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400">▸</span>
              <span>Elder Safety in Digital Ecosystems</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400">▸</span>
              <span>High-Density Urban Biodiversity Restoration</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400">▸</span>
              <span>Equitable Education for Underprivileged Youth</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-amber-400">▸</span>
              <span>Intellectual Discipline & Integrity</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Formal Accreditations & Courses */}
      <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-6 sm:p-10 space-y-6">
        <div>
          <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block font-semibold">
            CONTINUOUS PROFESSIONAL EDUCATION
          </span>
          <h3 className="text-2xl font-bold font-display text-white mt-1">
            Specializations & Technical Certifications
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          {CERTIFICATIONS.map((cert, i) => (
            <div key={i} className="bg-[#121822] p-4 rounded-xl border border-white/5 space-y-2">
              <span className="text-emerald-400 font-bold block">{cert.issuer}</span>
              <h4 className="text-sm font-bold text-white font-sans">{cert.title}</h4>
              <p className="text-[11px] text-slate-400 font-sans">{cert.focus}</p>
              <div className="pt-2 flex items-center gap-1 text-[10px] text-slate-500">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Verified Curriculum ({cert.period})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Terminal Contact / Direct Channel Box */}
      <div className="bg-[#101724] border border-emerald-500/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
          <Terminal className="w-6 h-6" />
        </div>

        <div className="space-y-2 max-w-xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Connect with Daksh Sawhney
          </h3>
          <p className="text-sm text-slate-300 font-sans">
            Prospective university admissions committees, research collaborators, and venture builders are welcome to reach out directly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={`mailto:${PROFILE_INFO.email}`}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs font-mono transition-colors flex items-center gap-2 shadow-lg"
          >
            <Mail className="w-4 h-4" />
            <span>{PROFILE_INFO.email}</span>
          </a>

          <div className="px-4 py-3 rounded-xl bg-[#0a0d13] border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Inventure Academy, Bangalore, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
