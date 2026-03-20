import Icon from './Icon'
import Card from './Card'
import SectionHeader from './SectionHeader'

const tiers = [
  {
    cat: 'Listener',
    price: 50,
    note: 'Attend without paper presentation',
    featured: false,
    perks: ['Conference Access', 'Digital Kit', 'Networking Sessions'],
  },
  {
    cat: 'Student',
    price: 100,
    note: 'Undergraduate / Postgraduate / PhD',
    featured: false,
    perks: ['All Listener Benefits', 'Certificate of Participation', 'Publication Opportunity'],
  },
  {
    cat: 'Academic',
    price: 150,
    note: 'Faculty / Postdoctoral Researcher',
    featured: true,
    perks: ['All Student Benefits', 'Paper Presentation Slot', 'Priority Q&A Access', 'Networking Dinner'],
  },
  {
    cat: 'Industry',
    price: 250,
    note: 'Corporate / R&D Professional',
    featured: false,
    perks: ['All Academic Benefits', 'Exhibition Booth Discount', 'Sponsor Recognition', 'VIP Lounge Access'],
  },
]

const benefits = [
  { icon: 'book', title: 'Conference Kit', text: 'Programme booklet, tote bag, pen and welcome materials' },
  { icon: 'award', title: 'Certificate', text: 'Digitally verifiable certificate of presentation or participation' },
  { icon: 'fileText', title: 'Publication Opportunity', text: 'Selected papers eligible for Scopus-indexed journal publication' },
  { icon: 'users', title: 'Networking Access', text: 'Full access to networking sessions, panels, and social events' },
]

export default function Registration() {
  return (
    <section
      id="registration"
      className="py-20"
      style={{ background: 'linear-gradient(135deg,#f0f6ff,#eef2ff)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Registration"
          title="Registration Information"
          subtitle="Select the category that best matches your profile and secure your spot"
        />

        {/* Pricing grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {tiers.map((r) => (
            <div
              key={r.cat}
              className={`rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                r.featured
                  ? 'shadow-2xl ring-2 ring-blue-400 ring-offset-2'
                  : 'shadow-sm border border-slate-100 bg-white hover:shadow-md'
              }`}
              style={r.featured ? { background: 'linear-gradient(135deg,#2563eb,#4f46e5)' } : {}}
            >
              {r.featured && (
                <div
                  className="text-center py-1.5 text-xs font-bold tracking-widest uppercase"
                  style={{ background: 'rgba(0,0,0,0.15)', color: 'rgba(255,255,255,0.9)' }}
                >
                  ★ Most Popular
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className={`text-xl font-bold mb-0.5 ${r.featured ? 'text-white' : 'text-slate-800'}`}>
                  {r.cat}
                </h3>
                <p className={`text-xs mb-5 ${r.featured ? 'text-blue-200' : 'text-slate-400'}`}>
                  {r.note}
                </p>
                <div className={`text-4xl font-extrabold mb-0.5 ${r.featured ? 'text-white' : 'text-blue-600'}`}>
                  ${r.price}
                </div>
                <div className={`text-xs mb-6 ${r.featured ? 'text-blue-200' : 'text-slate-400'}`}>
                  USD · Early Bird Rate
                </div>

                {/* Perks list */}
                <ul className="space-y-2 mb-6 flex-1">
                  {r.perks.map((p) => (
                    <li
                      key={p}
                      className={`flex items-center gap-2 text-xs ${r.featured ? 'text-blue-100' : 'text-slate-500'}`}
                    >
                      <Icon
                        name="check"
                        className="w-3.5 h-3.5 flex-shrink-0"
                        style={{ color: r.featured ? '#93c5fd' : '#2563eb' }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                    r.featured
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'text-white hover:opacity-90'
                  }`}
                  style={!r.featured ? { background: 'linear-gradient(135deg,#2563eb,#4f46e5)' } : {}}
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <Card className="p-8">
          <h3 className="text-xl font-bold text-slate-800 mb-7 text-center">
            What's Included With Every Registration
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex flex-col items-center text-center p-5 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors duration-200 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'rgba(37,99,235,0.1)' }}
                >
                  <Icon name={b.icon} className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-700 mb-1 text-sm">{b.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
