import { useState, type FormEvent } from 'react'
import { Award, CheckCircle2, Copy, ExternalLink, FileDown, Mail, MapPin, Send } from 'lucide-react'
import { otherPursuits, profile } from '../data/resume'
import { PageBanner } from '../components/ui'

const inputClass =
  'w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500'

export function ContactView() {
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: 'Research inquiry / portfolio collaboration', message: '' })
  const blog = otherPursuits.find((p) => 'link' in p && p.link)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // clipboard permission denied — the mailto link still works
    }
  }

  // No backend: hand the drafted message to the visitor's mail client.
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <div className="space-y-8 pb-16">
      <PageBanner
        icon={Mail}
        eyebrow="CONNECT & INQUIRIES"
        title={`Get in Touch with ${profile.name}`}
        description="Open to research collaborations, fintech-for-good conversations, and admissions correspondence."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-xs space-y-6">
            <h2 className="text-lg font-bold font-display text-slate-900 border-b border-slate-100 pb-3">Direct Contact Channels</h2>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70 space-y-2">
              <span className="text-[12px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">Primary email</span>
              <div className="flex items-center justify-between">
                <a href={`mailto:${profile.email}`} className="font-mono text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors break-all">
                  {profile.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all cursor-pointer shrink-0 ml-2"
                  aria-label="Copy email"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && <span className="text-xs font-mono text-emerald-700 block">✓ Copied to clipboard</span>}
            </div>

            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Location</div>
                  <div className="text-xs text-slate-500">{profile.location}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Timezone: IST (UTC+05:30)</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">School</div>
                  <div className="text-xs text-slate-500">{profile.school}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{profile.grade}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <span className="text-[12px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">Links</span>
              <div className="flex flex-col gap-2">
                {blog && 'link' in blog && (
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-mono text-slate-700 hover:text-slate-900 border border-slate-200/60 transition-colors"
                  >
                    <span>Medium: @dakshsawhney2008</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                )}
                <a
                  href="/Daksh-Sawhney-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-xs font-mono text-slate-700 hover:text-slate-900 border border-slate-200/60 transition-colors"
                >
                  <span>Résumé (PDF)</span>
                  <FileDown className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-slate-200/80 p-7 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold font-display text-slate-900 mb-2">Send a Message to Daksh</h2>
            <p className="text-xs text-slate-500 mb-6">Drafts an email in your mail app, addressed to {profile.email}.</p>

            {sent ? (
              <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-8 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display text-emerald-950">Message drafted in your mail app</h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                  If nothing opened, write directly to <span className="font-mono font-bold">{profile.email}</span>.
                </p>
                <button onClick={() => setSent(false)} className="text-xs font-mono text-emerald-700 underline pt-2 cursor-pointer">
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="block text-xs font-mono text-slate-600 mb-1.5 font-medium">YOUR NAME / INSTITUTION *</span>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Admissions Officer" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className="block text-xs font-mono text-slate-600 mb-1.5 font-medium">EMAIL ADDRESS *</span>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="name@university.edu" className={inputClass} />
                  </label>
                </div>
                <label className="block">
                  <span className="block text-xs font-mono text-slate-600 mb-1.5 font-medium">SUBJECT</span>
                  <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass} />
                </label>
                <label className="block">
                  <span className="block text-xs font-mono text-slate-600 mb-1.5 font-medium">MESSAGE *</span>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your note regarding research, projects, or admissions…"
                    className={`${inputClass} resize-none`}
                  />
                </label>
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-xs font-mono text-slate-400">* Required fields</span>
                  <button
                    type="submit"
                    className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Send message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
