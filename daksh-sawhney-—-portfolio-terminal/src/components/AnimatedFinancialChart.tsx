import { useState } from 'react';
import { Sparkles, Terminal } from 'lucide-react';

interface TrajectoryNode {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  metric: string;
  detail: string;
}

const TRAJECTORY_NODES: TrajectoryNode[] = [
  { id: '1', name: 'FINANCE', category: 'CAPITAL ALLOCATION', x: 80, y: 240, metric: '+55% 2-Yr Return', detail: 'Disciplined valuation frameworks & funding Persifolio APIs' },
  { id: '2', name: 'TECHNOLOGY', category: 'PERSIFOLIO', x: 220, y: 190, metric: '4,000+ Users', detail: 'Fintech platform, Flutter, live AlphaVantage market engine' },
  { id: '3', name: 'ENVIRONMENT', category: 'SHADES OF TOMORROW', x: 370, y: 155, metric: '100K Trees', detail: 'Miyawaki afforestation & ₹500K corporate CSR funding' },
  { id: '4', name: 'COMMUNITY', category: 'SCAMSLAYER & TUTORING', x: 520, y: 125, metric: '1,000+ Seniors', detail: 'Cybersecurity workshops & 2-yr RGH Govt School tutoring' },
  { id: '5', name: 'RESEARCH', category: 'IISc & CAMBRIDGE', x: 670, y: 70, metric: 'RSI-India & 94.89% NLP', detail: 'Transient chaos with Dr. Kaushal Verma & Hinglish POS with Dr. Weiwei Sun' },
  { id: '6', name: 'LEADERSHIP', category: 'PATENTS & RECOGNITION', x: 820, y: 35, metric: '2 Patents & HackHarvard #1', detail: 'Rabindra Ratna Puraskar 2026, CREST Gold, Harvard Invitational' },
];

export default function AnimatedFinancialChart() {
  const [activeNode, setActiveNode] = useState<TrajectoryNode | null>(TRAJECTORY_NODES[4]);

  return (
    <div className="w-full bg-[#0a0d13]/90 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-xl relative overflow-hidden shadow-2xl">
      {/* Top Header metadata */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400">INDEX: DAKSH / PERSONAL PORTFOLIO</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1 flex items-center gap-2">
            CUMULATIVE EFFORT & RIGOR
            <span className="text-xs font-mono font-normal text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
              ALL WEATHER
            </span>
          </h3>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="text-right">
            <div className="text-slate-400 text-[10px]">CURRENT HORIZON</div>
            <div className="text-slate-200 font-semibold">2022 — 2026+</div>
          </div>
          <div className="h-6 w-px bg-white/10"></div>
          <div className="text-right">
            <div className="text-slate-400 text-[10px]">ALLOCATION PRINCIPLE</div>
            <div className="text-emerald-400 font-semibold">PROBLEMS WORTH SOLVING</div>
          </div>
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div className="w-full relative h-[280px] sm:h-[320px]">
        <svg
          viewBox="0 0 900 300"
          className="w-full h-full overflow-visible select-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
              <stop offset="60%" stopColor="#10b981" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>

            <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#34d399" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Grid lines horizontal */}
          <line x1="40" y1="60" x2="880" y2="60" stroke="#ffffff" strokeOpacity="0.06" strokeDasharray="3 3" />
          <line x1="40" y1="120" x2="880" y2="120" stroke="#ffffff" strokeOpacity="0.06" strokeDasharray="3 3" />
          <line x1="40" y1="180" x2="880" y2="180" stroke="#ffffff" strokeOpacity="0.06" strokeDasharray="3 3" />
          <line x1="40" y1="240" x2="880" y2="240" stroke="#ffffff" strokeOpacity="0.06" strokeDasharray="3 3" />

          {/* Area fill */}
          <path
            d="M 80 240 Q 150 220, 220 190 T 370 155 T 520 125 T 670 70 T 820 35 L 820 280 L 80 280 Z"
            fill="url(#chartGradient)"
          />

          {/* Glowing Trajectory Curve */}
          <path
            d="M 80 240 Q 150 220, 220 190 T 370 155 T 520 125 T 670 70 T 820 35"
            fill="none"
            stroke="url(#lineGlow)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#glow)"
          />

          {/* Interactive Nodes */}
          {TRAJECTORY_NODES.map((node) => {
            const isSelected = activeNode?.id === node.id;
            return (
              <g
                key={node.id}
                className="cursor-pointer group"
                onClick={() => setActiveNode(node)}
                onMouseEnter={() => setActiveNode(node)}
              >
                {/* Vertical drop line */}
                <line
                  x1={node.x}
                  y1={node.y}
                  x2={node.x}
                  y2="280"
                  stroke={isSelected ? "#10b981" : "#ffffff"}
                  strokeOpacity={isSelected ? 0.35 : 0.08}
                  strokeDasharray="2 2"
                />

                {/* Pulse ring when selected */}
                {isSelected && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="12"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    className="animate-ping"
                  />
                )}

                {/* Outer halo */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isSelected ? "8" : "5.5"}
                  fill={isSelected ? "#10b981" : "#0f172a"}
                  stroke={isSelected ? "#ffffff" : "#10b981"}
                  strokeWidth="2.5"
                  className="transition-all duration-300 group-hover:scale-125"
                />

                {/* Text Label on top of node */}
                <text
                  x={node.x}
                  y={node.y - 14}
                  textAnchor="middle"
                  className={`font-mono text-[11px] font-semibold tracking-wider transition-all duration-200 ${
                    isSelected ? "fill-emerald-300 font-bold" : "fill-slate-400 group-hover:fill-slate-200"
                  }`}
                >
                  {node.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Dynamic Detail Card of Focused Holding */}
      {activeNode && (
        <div className="mt-3 bg-[#0d121a] border border-emerald-500/25 rounded-xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all duration-300">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
              <Terminal className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider">
                  [{activeNode.name}]
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeNode.category}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5 font-sans leading-relaxed">
                {activeNode.detail}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-white/5 pt-2 sm:pt-0">
            <div className="text-left sm:text-right font-mono">
              <span className="text-[10px] text-slate-400 uppercase block">KEY BENCHMARK</span>
              <span className="text-xs sm:text-sm font-bold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/20">
                {activeNode.metric}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
