import Icon from './Icon'
import { NAV_LINKS } from './Navbar'

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 72
  window.scrollTo({ top, behavior: 'smooth' })
}

const quickLinks = NAV_LINKS

const importantLinks = [
  { label: 'Call for Papers', href: '#submission' },
  { label: 'Paper Guidelines', href: '#submission' },
  { label: 'Registration Fees', href: '#registration' },
  { label: 'Publication Info', href: '#submission' },
  { label: 'Important Dates', href: '#dates' },
  { label: 'Contact Secretariat', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#0f172a' }} className="text-slate-400">
      {/* Top accent line */}
      <div
        className="h-1 w-full"
        style={{ background: 'linear-gradient(90deg,#2563eb,#4f46e5,#7c3aed)' }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Branding */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}
              >
                <Icon name="flask" className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-none">GCABPTHS 2026</div>
                <div className="text-blue-400 text-xs mt-0.5">SIARE Conference Series</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Global Conference on Advances in Biotechnology, Pharmacology, and Translational Health Sciences.
              Bringing science closer to humanity.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Icon name="calendar" className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>July 10–12, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="mapPin" className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Nagpur, India</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-2 mt-6">
              {['twitter', 'linkedin'].map((s) => (
                <button
                  key={s}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 border border-slate-700 hover:border-blue-600 transition-all duration-200"
                  aria-label={s}
                >
                  <Icon name={s} className="w-4 h-4" />
                </button>
              ))}
              <button
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 border border-slate-700 hover:border-blue-600 transition-all duration-200"
                aria-label="email"
              >
                <Icon name="mail" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(l.href) }}
                    className="text-sm flex items-center gap-2 hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <Icon
                      name="chevronRight"
                      className="w-3 h-3 text-slate-600 group-hover:text-blue-400 transition-colors"
                    />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Important Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2.5">
              {importantLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(l.href) }}
                    className="text-sm flex items-center gap-2 hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <Icon
                      name="chevronRight"
                      className="w-3 h-3 text-slate-600 group-hover:text-blue-400 transition-colors"
                    />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Icon name="mail" className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div>submissions@gcabpths2026.org</div>
                  <div>info@gcabpths2026.org</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="phone" className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div>+1 (800) 555-0192</div>
                  <div>+91 98765 43210</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="mapPin" className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  International Convention Centre,
                  Nagpur, Maharashtra, India
                </div>
              </li>
            </ul>

            {/* Newsletter mini-form */}
            <div className="mt-6">
              <p className="text-xs text-slate-500 mb-2">Get conference updates:</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-white flex-shrink-0 hover:opacity-90 transition-all"
                  style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="text-slate-500 text-center sm:text-left">
              © {year} GCABPTHS 2026. Part of the{' '}
              <span className="text-blue-400 font-medium">SIARE Global Conference Series</span>.
              All rights reserved.
            </div>
            <div className="flex items-center gap-4 text-slate-600">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <span>·</span>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Use</a>
              <span>·</span>
              <a href="#" className="hover:text-slate-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
