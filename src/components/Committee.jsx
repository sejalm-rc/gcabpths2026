import Icon from './Icon'
import Card from './Card'
import SectionHeader from './SectionHeader'

const patrons = [
  {
    role: 'Chief Patron',
    name: 'Prof. Dr. William H. Anderson',
    affil: 'President, International Federation of Biomedical Sciences',
    country: 'United States',
    color: '#2563eb',
  },
  {
    role: 'Conference Chair',
    name: 'Prof. Dr. Priya Ramaswamy',
    affil: 'Director, Centre for Translational Research, University of Edinburgh',
    country: 'United Kingdom',
    color: '#4f46e5',
  },
]

const committees = [
  {
    title: 'Organizing Committee',
    color: '#2563eb',
    members: [
      { name: 'Dr. Samuel K. Osei', role: 'Organizing Secretary', inst: 'University of Ghana Medical School' },
      { name: 'Dr. Mei-Ling Chen', role: 'Programme Coordinator', inst: 'National Taiwan University' },
      { name: 'Dr. Fatima Al-Hassan', role: 'Sponsorship Chair', inst: 'King Abdullah Medical City, Saudi Arabia' },
      { name: 'Dr. Ricardo Montoya', role: 'Venue & Logistics', inst: 'Universidad Nacional, Colombia' },
      { name: 'Dr. Elena Voronova', role: 'Publications Chair', inst: 'Moscow State Medical University' },
      { name: 'Dr. James K. Nakamura', role: 'Outreach Coordinator', inst: 'Tokyo Medical University, Japan' },
    ],
  },
  {
    title: 'Technical Committee',
    color: '#7c3aed',
    members: [
      { name: 'Prof. John Abara', role: 'Biotech Track Lead', inst: 'University of Cape Town' },
      { name: 'Dr. Aiko Tanaka', role: 'Pharmacology Track Lead', inst: 'Kyoto University, Japan' },
      { name: 'Dr. Susan Mbeki', role: 'Clinical Research Lead', inst: 'Makerere University, Uganda' },
      { name: 'Dr. Liam O\'Connor', role: 'AI & Health Track Lead', inst: 'Trinity College Dublin, Ireland' },
      { name: 'Dr. Kavitha Iyer', role: 'Public Health Track Lead', inst: 'AIIMS New Delhi, India' },
      { name: 'Dr. Hans-Peter Müller', role: 'Translational Med. Lead', inst: 'Charité – Universitätsmedizin Berlin' },
    ],
  },
]

function initials(name) {
  return name
    .split(' ')
    .filter((w) => w.length > 2)
    .slice(-2)
    .map((w) => w[0])
    .join('')
}

export default function Committee() {
  return (
    <section id="committee" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Leadership"
          title="Conference Committee"
          subtitle="Distinguished academics and professionals guiding the conference"
        />

        {/* Chief Patron & Chair */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {patrons.map((c) => (
            <Card key={c.role} className="p-6 flex items-center gap-5 group hover:-translate-y-1">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-extrabold text-white flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300"
                style={{ background: `linear-gradient(135deg,${c.color},${c.color}cc)` }}
              >
                {initials(c.name)}
              </div>
              <div>
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: c.color }}
                >
                  {c.role}
                </span>
                <h3 className="font-bold text-slate-800 mt-0.5">{c.name}</h3>
                <p className="text-sm text-slate-500">{c.affil}</p>
                <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                  <Icon name="globe" className="w-3 h-3" />
                  {c.country}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Organizing & Technical Committees */}
        <div className="grid lg:grid-cols-2 gap-8">
          {committees.map((g) => (
            <Card key={g.title} className="p-7">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ background: g.color }}
                />
                <h3 className="text-lg font-bold text-slate-800">{g.title}</h3>
              </div>
              <div className="space-y-3">
                {g.members.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors duration-200 group"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                      style={{ background: `linear-gradient(135deg,${g.color},${g.color}bb)` }}
                    >
                      {initials(m.name)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-slate-700 text-sm truncate">{m.name}</div>
                      <div className="text-xs font-medium" style={{ color: g.color }}>{m.role}</div>
                      <div className="text-xs text-slate-400 truncate">{m.inst}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Advisory note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-400 italic">
            Additional advisory board members and keynote speakers will be announced in February 2026.
          </p>
        </div>
      </div>
    </section>
  )
}
