import { useState } from 'react';
import { DollarSign, ShieldAlert, Award, ArrowUpRight, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

interface MockQuote {
  symbol: string;
  name: string;
  price: number;
  change: string;
  up: boolean;
}

const INITIAL_QUOTES: MockQuote[] = [
  { symbol: "NIFTY50", name: "National Index", price: 24850.40, change: "+0.85%", up: true },
  { symbol: "RELIANCE", name: "Reliance Ind.", price: 2980.20, change: "+1.20%", up: true },
  { symbol: "TCS", name: "Tata Consultancy", price: 4195.00, change: "+0.45%", up: true },
  { symbol: "HDFCBANK", name: "HDFC Bank Ltd", price: 1640.10, change: "-0.30%", up: false },
  { symbol: "INFY", name: "Infosys Ltd", price: 1890.65, change: "+1.65%", up: true },
];

export default function PersifolioSimulator() {
  const [riskScore, setRiskScore] = useState<number>(6);
  const [virtualCash, setVirtualCash] = useState<number>(100000);
  const [selectedStock, setSelectedStock] = useState<MockQuote>(INITIAL_QUOTES[0]);
  const [orderNotification, setOrderNotification] = useState<string | null>(null);

  // Dynamic portfolio allocation derived from risk score
  const getAssetAllocation = (score: number) => {
    if (score <= 3) {
      return { equities: 25, debt: 55, gold: 15, cash: 5, profile: "Conservative Wealth Preservation" };
    } else if (score <= 7) {
      return { equities: 60, debt: 25, gold: 10, cash: 5, profile: "Balanced Core & Growth" };
    } else {
      return { equities: 85, debt: 5, gold: 5, cash: 5, profile: "High-Alpha Capital Expansion" };
    }
  };

  const allocation = getAssetAllocation(riskScore);

  const handleSimulateTrade = (type: 'BUY' | 'SELL') => {
    if (type === 'BUY') {
      if (virtualCash >= selectedStock.price) {
        setVirtualCash(prev => prev - Math.round(selectedStock.price));
        setOrderNotification(`Executed BUY 1 unit of ${selectedStock.symbol} at ₹${selectedStock.price.toFixed(2)}`);
      }
    } else {
      setVirtualCash(prev => prev + Math.round(selectedStock.price));
      setOrderNotification(`Executed SELL 1 unit of ${selectedStock.symbol} at ₹${selectedStock.price.toFixed(2)}`);
    }
    setTimeout(() => setOrderNotification(null), 3500);
  };

  return (
    <div className="w-full bg-[#0c1017] border border-emerald-500/30 rounded-2xl p-5 sm:p-7 backdrop-blur-xl">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
              PERSIFOLIO // INTERACTIVE SIMULATION ENGINE
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
            Dynamic Risk Profiling & Virtual Paper Trading
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            4,000+ active users • Flutter + Firebase • AlphaVantage live feed architecture
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#121924] border border-white/10 rounded-xl px-4 py-2 font-mono text-right">
            <span className="text-[10px] text-slate-400 block uppercase">VIRTUAL SIMULATOR BALANCE</span>
            <span className="text-base font-bold text-emerald-400">₹{virtualCash.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Risk Profile Allocation Engine */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-[#10151f] rounded-xl p-4 border border-white/5 space-y-4">
            <div className="flex justify-between items-center font-mono">
              <span className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-emerald-400" />
                CALIBRATED RISK SCORE
              </span>
              <span className="text-lg font-bold text-emerald-400 bg-emerald-950/70 px-2.5 py-0.5 rounded border border-emerald-500/30">
                {riskScore} / 10
              </span>
            </div>

            {/* Slider */}
            <div>
              <input
                type="range"
                min="1"
                max="10"
                value={riskScore}
                onChange={(e) => setRiskScore(parseInt(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5">
                <span>1 (Low Risk / Preservation)</span>
                <span>5 (Moderate)</span>
                <span>10 (Aggressive Equity)</span>
              </div>
            </div>

            {/* Profile Label */}
            <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-xs font-mono text-emerald-300 flex items-center justify-between">
              <span>MAPPED STRATEGY:</span>
              <span className="font-bold">{allocation.profile}</span>
            </div>

            {/* Allocation Breakdown Bar */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-slate-400 block">OPTIMAL MPT DIVERSIFICATION BLUEPRINT</span>
              <div className="w-full h-3 rounded-full overflow-hidden flex bg-slate-800">
                <div style={{ width: `${allocation.equities}%` }} className="bg-emerald-500 transition-all duration-300" title={`Equities ${allocation.equities}%`}></div>
                <div style={{ width: `${allocation.debt}%` }} className="bg-blue-500 transition-all duration-300" title={`Debt ${allocation.debt}%`}></div>
                <div style={{ width: `${allocation.gold}%` }} className="bg-amber-400 transition-all duration-300" title={`Gold ${allocation.gold}%`}></div>
                <div style={{ width: `${allocation.cash}%` }} className="bg-slate-400 transition-all duration-300" title={`Cash ${allocation.cash}%`}></div>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-4 gap-2 pt-1 font-mono text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500"></span>
                  <span className="text-slate-300">Eq: <strong className="text-white">{allocation.equities}%</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-blue-500"></span>
                  <span className="text-slate-300">Debt: <strong className="text-white">{allocation.debt}%</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-amber-400"></span>
                  <span className="text-slate-300">Gold: <strong className="text-white">{allocation.gold}%</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-slate-400"></span>
                  <span className="text-slate-300">Cash: <strong className="text-white">{allocation.cash}%</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="bg-[#0b0e14] border border-white/5 rounded-xl p-3 text-xs font-mono text-slate-400 space-y-1">
            <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>PATENT & COMMENDATION VERIFICATION</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Patent Published by Govt. of India. Official Letter of Commendation & State Adoption from MP Sujeet Kumar (Parliament of India). $50,000 pre-seed commitment by Peacock Ventures.
            </p>
          </div>
        </div>

        {/* Right Column: Virtual Stock Paper-Trading Terminal */}
        <div className="lg:col-span-6 bg-[#10151f] rounded-xl p-4 border border-white/5 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center font-mono text-xs mb-3">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                VIRTUAL MARKET STREAM (SIMULATED ALPHAVANTAGE FEED)
              </span>
              <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded text-[10px] border border-emerald-500/20">
                REAL-TIME STREAM
              </span>
            </div>

            {/* Stock List selection */}
            <div className="space-y-1.5">
              {INITIAL_QUOTES.map((stock) => {
                const isSelected = selectedStock.symbol === stock.symbol;
                return (
                  <button
                    key={stock.symbol}
                    onClick={() => setSelectedStock(stock)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-lg border font-mono text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-950/40 border-emerald-500/50 text-white'
                        : 'bg-[#0d121a] border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div className="text-left">
                      <span className="font-bold text-slate-200 block">{stock.symbol}</span>
                      <span className="text-[10px] text-slate-400">{stock.name}</span>
                    </div>

                    <div className="text-right">
                      <span className="font-bold text-white block">₹{stock.price.toFixed(2)}</span>
                      <span className={`text-[10px] ${stock.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {stock.change}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Trade Execution Controls */}
          <div className="pt-3 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">SELECTED ASSET:</span>
              <span className="text-white font-bold">{selectedStock.symbol} (₹{selectedStock.price.toFixed(2)})</span>
            </div>

            {orderNotification && (
              <div className="p-2 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-[11px] animate-fade-in flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{orderNotification}</span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleSimulateTrade('BUY')}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-lg text-xs font-mono transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>PAPER BUY 1 UNIT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => handleSimulateTrade('SELL')}
                className="w-full bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 font-bold py-2.5 rounded-lg text-xs font-mono transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>PAPER SELL 1 UNIT</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
