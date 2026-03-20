import Icon from './Icon'
import Card from './Card'
import SectionHeader from './SectionHeader'

const dates = [
  {
    label: 'Abstract Submission Opens',
    date: 'March 1, 2026',
    icon: 'fileText',
    color: '#6366f1',
    note: 'Early submissions encouraged',
  },
  {
    label: 'Paper Submission Deadline',
    date: 'May 15, 2026',
    icon: 'upload',
    color: '#2563eb',
    note: 'Full manuscripts due',
  },
  {
    label: 'Notification of Acceptance',
    date: 'June 1, 2026',
    icon: 'mail',
    color: '#0891b2',
    note: 'With reviewer feedback',
  },
  {
    label: 'Registration Deadline',
    date: 'June 15, 2026',
    icon: 'calendar',
    color: '#7c3aed',
    note: 'Early bird rates apply',
  },
  {
    label: 'Camera-Ready Submission',
    date: 'June 25, 2026',
    icon: 'book',
    color: '#d97706',
    note: 'Final version + copyright form',
  },
  {
    label: 'Conference Dates',
    date: 'July 10–12, 2026',
    icon: 'star',
    color: '#059669',
    note: 'Main event — three full days',
  },
]

export default function Dates() {
  return (
    <section
      id="dates"
      className="py-20"
      style={{ background: 'linear-gradient(135deg,#f0f6ff,#eef2ff)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="Important Dates"
          title="Key Deadlines & Milestones"
          subtitle="Plan your submission and registration around these critical milestones"
        />

        {/* Desktop timeline (alternating) */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-blue-100 -translate-x-px" />
          <div className="space-y-8">
            {dates.map((d, i) => (
              <div
                key={d.label}
                className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Card */}
                <div className="flex-1">
                  <Card
                    className={`p-5 ${i % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-sm hover:-translate-y-0.5`}
                  >
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      {d.label}
                    </div>
                    <div className="text-xl font-extrabold mb-1" style={{ color: d.color }}>
                      {d.date}
                    </div>
                    <div className="text-xs text-slate-400">{d.note}</div>
                  </Card>
                </div>

                {/* Center dot */}
                <div
                  className="w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center flex-shrink-0 z-10"
                  style={{ background: d.color }}
                >
                  <Icon name={d.icon} className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile list */}
        <div className="md:hidden space-y-4">
          {dates.map((d) => (
            <Card key={d.label} className="p-5 flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${d.color}18` }}
              >
                <Icon name={d.icon} className="w-5 h-5" style={{ color: d.color }} />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{d.label}</div>
                <div className="text-lg font-extrabold mt-0.5" style={{ color: d.color }}>{d.date}</div>
                <div className="text-xs text-slate-400 mt-0.5">{d.note}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Countdown callout */}
        <div
          className="mt-12 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Don't miss the submission deadline!</h3>
            <p className="text-blue-100 text-sm">
              Papers submitted early receive faster review turnaround. All submissions are double-blind reviewed.
            </p>
          </div>
          <a
            href="#submission"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById('submission')
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
            }}
            className="flex-shrink-0 px-7 py-3 rounded-full bg-white text-blue-600 font-semibold text-sm hover:bg-blue-50 transition-all duration-200 hover:-translate-y-0.5"
          >
            Submit Now →
          </a>
        </div>
      </div>
    </section>
  )
}
