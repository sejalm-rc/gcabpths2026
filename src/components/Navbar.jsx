import { useState, useEffect } from 'react'
import Icon from './Icon'

export const NAV_LINKS = [
  { label: 'About SIARE', href: '#about-siare' },
  { label: 'Conference', href: '#about-conf' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Submission', href: '#submission' },
  { label: 'Registration', href: '#registration' },
  { label: 'Dates', href: '#dates' },
  { label: 'Committee', href: '#committee' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── active section via IntersectionObserver ── */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#', ''))
    const observers = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(`#${id}`)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  /* ── close menu on resize to desktop ── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const offset = 72
      const top = target.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const isActive = (href) => activeSection === href

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ── Logo ── */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-2.5 flex-shrink-0"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
              style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}
            >
              <Icon name="flask" className="w-4.5 h-4.5 text-white w-5 h-5" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-slate-800 text-sm leading-none">GCABPTHS</div>
              <div className="text-xs text-blue-500 font-semibold mt-0.5">2026 Conference</div>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(l.href)
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* ── Desktop CTA ── */}


          {/* ── Hamburger ── */}
          <button
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-blue-600 transition-all duration-200"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <div
              className={`transition-all duration-300 ${open ? 'rotate-90 opacity-0 absolute' : 'rotate-0 opacity-100'}`}
              style={{ position: open ? 'absolute' : 'relative' }}
            >
              <Icon name="menu" />
            </div>
            <div className={`transition-all duration-300 ${open ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0 absolute'}`}
              style={{ position: open ? 'relative' : 'absolute' }}
            >
              <Icon name="x" />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-slate-100 px-4 py-3 space-y-1 shadow-xl">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive(l.href)
                  ? 'text-blue-600 bg-blue-50 font-semibold'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {isActive(l.href) && (
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              )}
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
