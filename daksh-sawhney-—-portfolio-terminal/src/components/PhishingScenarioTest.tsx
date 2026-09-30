import { useState } from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle, RefreshCw, PhoneCall, Mail, MessageSquare } from 'lucide-react';

interface ThreatScenario {
  id: string;
  type: string;
  sender: string;
  message: string;
  options: {
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
  forensicBreakdown: string[];
}

const SCENARIOS: ThreatScenario[] = [
  {
    id: "sc-1",
    type: "DIGITAL ARREST / POLICE SPOOF",
    sender: "TRAI_POLICE_DELHI (Spoofed ID)",
    message: "URGENT NOTICE: Your Aadhaar linked mobile number has been involved in 24 money laundering transactions. A non-bailable warrant is issued. Do not disconnect this line or inform family; click here to connect to virtual CBI interrogation room immediately.",
    options: [
      {
        text: "Panic and immediately click the link to clarify you are innocent.",
        isCorrect: false,
        explanation: "INCORRECT: Attackers use adrenaline and fear. Legitimate law enforcement agencies NEVER issue arrest warrants over WhatsApp or conduct video-call arrests."
      },
      {
        text: "Disconnect immediately, do not click links, and report to 1930 Cyber Helpline.",
        isCorrect: true,
        explanation: "CORRECT! This is the notorious 'Digital Arrest' scam. Law enforcement never isolates citizens on video calls or demands asset verification funds."
      }
    ],
    forensicBreakdown: [
      "Artificial urgency: 'Do not disconnect or inform family'",
      "Spoofed official identities to intimidate elderly victims",
      "Vulnerability target: Senior citizens unfamiliar with legal procedures"
    ]
  },
  {
    id: "sc-2",
    type: "FAKE BANK KYC SUSPENSION",
    sender: "SBI-ALERT (Shortcode: +91-98402-XXXXX)",
    message: "Dear Customer, your bank account #XXXX4829 is BLOCKED due to incomplete PAN KYC. Update details within 2 hours at http://sbi-kyc-verify-portal.in to avoid permanent closure.",
    options: [
      {
        text: "Inspect the URL: Note that it is hosted on an unverified domain (not official sbi.co.in). Call your branch directly.",
        isCorrect: true,
        explanation: "CORRECT! Legitimate banks never send external third-party domain links threatening 2-hour suspensions."
      },
      {
        text: "Open the link and enter netbanking credentials quickly to prevent block.",
        isCorrect: false,
        explanation: "INCORRECT: Entering credentials transfers complete banking session access to attackers' command server."
      }
    ],
    forensicBreakdown: [
      "Deceptive domain URL designed to mimic genuine banking portal",
      "Manufactured deadline (2 hours) to bypass rational skepticism",
      "Unregistered 10-digit mobile number spoofing bank shortcodes"
    ]
  }
];

export default function PhishingScenarioTest() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const scenario = SCENARIOS[currentIdx];

  const handleSelect = (idx: number) => {
    setSelectedOption(idx);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setCurrentIdx((prev) => (prev + 1) % SCENARIOS.length);
  };

  return (
    <div className="w-full bg-[#0a0e14] border border-amber-500/30 rounded-2xl p-5 sm:p-7 backdrop-blur-xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
            <span className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold">
              SCAMSLAYER // INTERACTIVE EXPERIENTIAL DEFENSE
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
            Simulated Threat Sandboxing for Senior Citizens
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            1,000+ senior citizens trained in workshops • Outlook India featured • Patent Published
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-slate-400">SCENARIO:</span>
          <span className="bg-amber-950/70 border border-amber-500/30 text-amber-400 px-2 py-0.5 rounded font-bold">
            {currentIdx + 1} / {SCENARIOS.length}
          </span>
        </div>
      </div>

      {/* Simulated threat device box */}
      <div className="bg-[#121822] border border-white/10 rounded-xl p-4 sm:p-5 relative overflow-hidden">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3 font-mono text-xs">
          <div className="flex items-center gap-2 text-rose-400">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-bold">{scenario.type}</span>
          </div>
          <div className="text-slate-400 text-[11px]">
            SENDER: <span className="text-slate-200">{scenario.sender}</span>
          </div>
        </div>

        {/* Message Bubble */}
        <div className="bg-[#1a2332] border-l-4 border-rose-500 p-3.5 rounded-r-lg font-mono text-xs sm:text-sm text-slate-200 leading-relaxed">
          {scenario.message}
        </div>

        {/* Interactive Choices */}
        <div className="mt-5 space-y-2.5">
          <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
            WHAT IS YOUR IMMEDIATE ACTION?
          </span>
          {scenario.options.map((opt, idx) => {
            const isChosen = selectedOption === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left p-3.5 rounded-xl border font-sans text-xs sm:text-sm transition-all cursor-pointer ${
                  isChosen
                    ? opt.isCorrect
                      ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200'
                      : 'bg-rose-950/60 border-rose-500 text-rose-200'
                    : 'bg-[#0e131b] border-white/10 text-slate-300 hover:border-white/25'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-bold mt-0.5 text-slate-400">
                    [{String.fromCharCode(65 + idx)}]
                  </span>
                  <div className="space-y-1">
                    <p className="font-medium">{opt.text}</p>
                    {isChosen && (
                      <p className={`text-xs font-mono pt-1 ${opt.isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {opt.explanation}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Forensic Breakdown */}
        {selectedOption !== null && (
          <div className="mt-5 bg-[#0a0e14] border border-white/10 rounded-xl p-4 animate-fade-in">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
              SCAMSLAYER FORENSIC RED FLAGS IDENTIFIED:
            </span>
            <ul className="space-y-1.5 font-mono text-xs text-slate-300">
              {scenario.forensicBreakdown.map((flag, fIdx) => (
                <li key={fIdx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex justify-end">
              <button
                onClick={handleNext}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>NEXT SIMULATION CASE</span>
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
