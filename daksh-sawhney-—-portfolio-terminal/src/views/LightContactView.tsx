import { useState } from 'react';
import { PageTab } from '../types/portfolio';
import { Mail, MapPin, Send, CheckCircle2, Copy, ExternalLink, Calendar, Phone, Award } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface LightContactViewProps {
  onNavigate?: (tab: PageTab) => void;
}

export default function LightContactView({}: LightContactViewProps) {
  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Research Inquiry / Portfolio Collaboration', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-9 shadow-xs">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-semibold">
            <Mail className="w-3.5 h-3.5 text-emerald-600" />
            <span>CONNECT & INQUIRIES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Get in Touch with Daksh Sawhney
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Open for academic discussions, research collaboration in nonlinear dynamical systems or fintech architecture, and selective university admissions dialogue.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Information Card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-xs space-y-6">
            <h2 className="text-lg font-bold font-display text-slate-900 border-b border-slate-100 pb-3">
              Direct Contact Channels
            </h2>

            {/* Email Box */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70 space-y-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                PRIMARY EMAIL
              </span>
              <div className="flex items-center justify-between">
                <a
                  href={`mailto:${PROFILE_INFO.contact.email}`}
                  className="font-mono text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors break-all"
                >
                  {PROFILE_INFO.contact.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all cursor-pointer shrink-0 ml-2"
                  title="Copy email"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <span className="text-[11px] font-mono text-emerald-700 block">
                  ✓ Copied email to clipboard!
                </span>
              )}
            </div>

            {/* Location & School */}
            <div className="space-y-4 text-sm text-slate-600 font-sans">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Current Location</div>
                  <div className="text-xs text-slate-500">{PROFILE_INFO.location}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Timezone: IST (UTC+05:30)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Academic Institution</div>
                  <div className="text-xs text-slate-500">{PROFILE_INFO.school}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Cambridge A-Levels (Class of 2026/2027)</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                VERIFIED LINKS
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href={`https://${PROFILE_INFO.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-mono text-slate-700 hover:text-slate-900 border border-slate-200/60 transition-colors"
                >
                  <span>GitHub: {PROFILE_INFO.contact.github}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={`https://${PROFILE_INFO.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-mono text-slate-700 hover:text-slate-900 border border-slate-200/60 transition-colors"
                >
                  <span>LinkedIn: {PROFILE_INFO.contact.linkedin}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Message Transmission Terminal (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold font-display text-slate-900 mb-2">
              Send a Message to Daksh
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Transmits directly to Daksh's verified inbox for academic correspondence.
            </p>

            {messageSent ? (
              <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display text-emerald-950">
                  Message Prepared Successfully
                </h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out! You can also send directly via email at <span className="font-mono font-bold">{PROFILE_INFO.contact.email}</span>.
                </p>
                <button
                  onClick={() => setMessageSent(false)}
                  className="text-xs font-mono text-emerald-700 underline pt-2 cursor-pointer"
                >
                  Send another transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1.5 font-medium">
                      YOUR NAME / INSTITUTION *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Kaushal / Admissions Officer"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 mb-1.5 font-medium">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@university.edu"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1.5 font-medium">
                    SUBJECT TOPIC
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 mb-1.5 font-medium">
                    MESSAGE / INQUIRY DETAILS *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your note regarding research, patents, or university admissions..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-sans resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    * Daksh typically responds within 24-48 hours.
                  </span>

                  <button
                    type="submit"
                    className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-2.5 rounded-xl text-xs sm:text-sm font-sans flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
