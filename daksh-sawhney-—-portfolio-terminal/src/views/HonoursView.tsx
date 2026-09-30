import { useState } from 'react';
import { HONOURS } from '../data/portfolioData';
import { HonourItem } from '../types/portfolio';
import { Award, ShieldCheck, Trophy, Filter, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

export default function HonoursView() {
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Research', 'Science & Technology', 'Hackathon', 'Academics', 'Leadership'];

  const filteredHonours = filterCategory === 'ALL'
    ? HONOURS
    : HONOURS.filter(h => h.category === filterCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-16">
      {/* Header */}
      <div className="border-b border-white/10 pb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-semibold">
            EXTERNAL VALIDATION // SETTLEMENT & TRANSACTION HISTORY
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white">
          HONOURS & AWARDS
        </h1>
        <p className="text-base sm:text-xl text-slate-300 mt-2 max-w-3xl font-sans">
          The market's transaction ledger of my work: peer-reviewed selections, published national patents, international distinction, and institutional leadership.
        </p>
      </div>

      {/* Filter Ribbon */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
        <span className="text-slate-500 text-[10px] uppercase flex items-center gap-1 mr-2 shrink-0">
          <Filter className="w-3.5 h-3.5" />
          FILTER:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
              filterCategory === cat
                ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                : 'bg-[#10151f] border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Transaction History Ledger Table / Cards */}
      <div className="space-y-4">
        {filteredHonours.map((honour, idx) => (
          <div
            key={idx}
            className="bg-[#0b0e14] border border-white/10 hover:border-amber-500/40 rounded-2xl p-5 sm:p-6 transition-all duration-200 group flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            {/* Left side: Year, Title, Issuer */}
            <div className="flex items-start gap-4">
              <div className="w-14 sm:w-16 shrink-0 font-mono text-slate-400 text-sm font-bold pt-0.5">
                <span className="text-emerald-400 font-bold block">{honour.year}</span>
                <span className="text-[10px] text-slate-500 uppercase block">{honour.level}</span>
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors">
                    {honour.title}
                  </h3>
                  {honour.badge && (
                    <span className="text-[10px] font-mono font-bold bg-amber-950/60 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded">
                      {honour.badge}
                    </span>
                  )}
                </div>

                <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <span>{honour.issuer}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-300">{honour.category}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed pt-1">
                  {honour.description}
                </p>
              </div>
            </div>

            {/* Right side: Category stamp */}
            <div className="shrink-0 self-end md:self-center font-mono text-xs">
              <span className="text-[10px] text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                SETTLED
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Compliance / Integrity Notice */}
      <div className="p-4 rounded-xl bg-[#10151f] border border-white/5 flex items-start gap-3 font-mono text-xs text-slate-400">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <span>
          Honours are strictly documented as officially conferred by respective granting institutions (British Science Association, Indian Institute of Science / RSI, Controller General of Patents, Cambridge International, Inventure Academy). Incomplete fields are left unaugmented in accordance with factual integrity standards.
        </span>
      </div>
    </div>
  );
}
