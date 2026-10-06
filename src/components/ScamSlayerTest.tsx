import { useState } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

type Scenario = {
  type: string
  sender: string
  message: string
  options: { text: string; correct: boolean; explanation: string }[]
  redFlags: string[]
}

// Sample scenarios in the style of Scam Slayer's quiz: fake arrest, phishing, impersonation.
const SCENARIOS: Scenario[] = [
  {
    type: 'FAKE ARREST SCAM',
    sender: '"Cyber Crime Police" (unknown number)',
    message:
      'URGENT: Your Aadhaar-linked number is involved in money laundering. An arrest warrant has been issued. Do not disconnect or inform your family. Join this video call now for verification.',
    options: [
      { text: 'Stay on the call and follow instructions to prove you are innocent.', correct: false, explanation: 'Wrong: police never arrest anyone over a video call or ask you to keep it secret from family.' },
      { text: 'Hang up, do not click anything, and report it on the 1930 cyber-crime helpline.', correct: true, explanation: 'Correct! This is a "digital arrest" scam. Fear and secrecy are the attacker\'s main tools.' },
    ],
    redFlags: ['Artificial urgency and threats', 'Demand for secrecy from family', 'Official-sounding identity from an unknown number'],
  },
  {
    type: 'PHISHING EMAIL',
    sender: 'support@bank-kyc-update.in',
    message:
      'Dear Customer, your account will be BLOCKED within 2 hours due to incomplete KYC. Click http://bank-kyc-update.in/verify and enter your net-banking details to avoid closure.',
    options: [
      { text: 'Check the domain — it is not your bank\'s official site. Call your branch using the number on your card.', correct: true, explanation: 'Correct! Banks do not send third-party links with deadlines. Always verify through official channels.' },
      { text: 'Open the link quickly and enter your details before the deadline.', correct: false, explanation: 'Wrong: entering credentials hands full account access to the attacker.' },
    ],
    redFlags: ['Look-alike domain name', 'Two-hour deadline to rush you', 'Request for login credentials'],
  },
  {
    type: 'IMPERSONATION',
    sender: 'WhatsApp: "Beta, new number"',
    message: 'Hi Papa, this is my new number, my phone broke. I urgently need ₹25,000 for a hospital bill. Please send to this UPI ID, I\'ll explain later.',
    options: [
      { text: 'Send the money right away — it\'s an emergency.', correct: false, explanation: 'Wrong: scammers pose as family members and rely on panic to skip verification.' },
      { text: 'Call your child on their old number or ask a question only they would know.', correct: true, explanation: 'Correct! Always verify identity through a known channel before sending money.' },
    ],
    redFlags: ['Unknown "new number"', 'Urgent money request', 'Avoids a voice call'],
  },
]

export function ScamSlayerTest() {
  const [idx, setIdx] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState({ right: 0, answered: 0 })
  const s = SCENARIOS[idx]

  const pick = (i: number) => {
    if (choice !== null) return
    setChoice(i)
    setScore((sc) => ({ right: sc.right + (s.options[i].correct ? 1 : 0), answered: sc.answered + 1 }))
  }

  const next = () => {
    setChoice(null)
    setIdx((i) => (i + 1) % SCENARIOS.length)
  }

  return (
    <div className="w-full bg-[#0a0e14] border border-amber-500/30 rounded-2xl p-5 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold">Scam Slayer // Don't be a victim, be a slayer</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">Simulated Threat Scenarios for Senior Citizens</h3>
          <p className="text-xs text-slate-400 font-mono mt-0.5">1,000+ seniors trained • Fake arrests, phishing & impersonation</p>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-slate-400">CASE</span>
          <span className="bg-amber-950/70 border border-amber-500/30 text-amber-400 px-2 py-0.5 rounded font-bold">
            {idx + 1} / {SCENARIOS.length}
          </span>
          <span className="text-slate-400 ml-2">SCORE</span>
          <span className="bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 px-2 py-0.5 rounded font-bold">
            {score.right}/{score.answered}
          </span>
        </div>
      </div>

      <div key={idx} className="bg-[#121822] border border-white/10 rounded-xl p-4 sm:p-5 animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5 mb-3 font-mono text-xs">
          <div className="flex items-center gap-2 text-rose-400">
            <AlertTriangle className="w-4 h-4" />
            <span className="font-bold">{s.type}</span>
          </div>
          <div className="text-slate-400 text-xs">
            FROM: <span className="text-slate-200">{s.sender}</span>
          </div>
        </div>

        <div className="bg-[#1a2332] border-l-4 border-rose-500 p-3.5 rounded-r-lg font-mono text-xs sm:text-sm text-slate-200 leading-relaxed">{s.message}</div>

        <div className="mt-5 space-y-2.5">
          <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">What do you do?</span>
          {s.options.map((opt, i) => {
            const chosen = choice === i
            return (
              <button
                key={i}
                onClick={() => pick(i)}
                disabled={choice !== null && !chosen}
                className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all cursor-pointer disabled:opacity-50 disabled:cursor-default ${
                  chosen
                    ? opt.correct
                      ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200'
                      : 'bg-rose-950/60 border-rose-500 text-rose-200'
                    : 'bg-[#0e131b] border-white/10 text-slate-300 hover:border-white/25'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-bold mt-0.5 text-slate-400">[{String.fromCharCode(65 + i)}]</span>
                  <div className="space-y-1">
                    <p className="font-medium">{opt.text}</p>
                    {chosen && <p className={`text-xs font-mono pt-1 ${opt.correct ? 'text-emerald-400' : 'text-rose-400'}`}>{opt.explanation}</p>}
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {choice !== null && (
          <div className="mt-5 bg-[#0a0e14] border border-white/10 rounded-xl p-4 animate-fade-in">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">Red flags in this message</span>
            <ul className="space-y-1.5 font-mono text-xs text-slate-300">
              {s.redFlags.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-end">
              <button
                onClick={next}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>NEXT CASE</span>
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
