import Icon from './Icon'
import Card from './Card'
import SectionHeader from './SectionHeader'

/* ─── Paper Submission Guidelines ──────────────────────────────────── */
function Guidelines() {
  const requirements = [
    'Original, unpublished work not under review elsewhere',
    'Length: 8–10 pages (including references and figures)',
    'Citation style: IEEE or APA (both accepted)',
    'Must include structured abstract (250–350 words)',
    '5–8 keywords below the abstract',
    'Written in English with clear academic language',
  ]

  const formatting = [
    { label: 'Font', val: 'Times New Roman' },
    { label: 'Size', val: '12pt' },
    { label: 'Line Spacing', val: '1.5' },
    { label: 'Margins', val: '1 inch (all sides)' },
    { label: 'File Format', val: 'PDF or DOCX' },
    { label: 'Page Limit', val: '8–10 pages' },
  ]

  const plagiarismRules = [
    'All submissions are screened using industry-standard plagiarism detection software',
    'Self-plagiarism (re-use of own prior work) is equally prohibited',
    'Papers exceeding the threshold will be rejected without review',
    'Authors found in violation may be barred from future SIARE events',
  ]

  return (
    <div className="space-y-6">
      {/* Manuscript */}
      <Card className="p-7">
        <h3 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
          <Icon name="fileText" className="w-5 h-5 text-blue-600" />
          Manuscript Requirements
        </h3>
        <div className="space-y-3">
          {requirements.map((r) => (
            <div key={r} className="flex items-start gap-3 text-sm text-slate-600">
              <span
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: 'rgba(37,99,235,0.1)' }}
              >
                <Icon name="check" className="w-3 h-3 text-blue-600" />
              </span>
              {r}
            </div>
          ))}
        </div>
      </Card>

      {/* Formatting */}
      <Card className="p-7">
        <h3 className="text-lg font-bold text-slate-800 mb-5 flex items-center gap-2">
          <Icon name="book" className="w-5 h-5 text-blue-600" />
          Formatting Requirements
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {formatting.map((f) => (
            <div key={f.label} className="bg-slate-50 rounded-xl p-3">
              <div className="text-xs text-slate-400 font-medium">{f.label}</div>
              <div className="text-sm font-semibold text-slate-700 mt-0.5">{f.val}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Plagiarism */}
      <Card className="p-7 border-red-100">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Icon name="shield" className="w-5 h-5 text-red-500" />
          Plagiarism Policy
        </h3>
        <div className="flex items-center gap-4 p-4 bg-red-50 rounded-xl mb-4">
          <div className="text-3xl font-extrabold text-red-500">15%</div>
          <div className="text-sm text-red-700 leading-snug">
            Maximum permissible similarity index across all sources
          </div>
        </div>
        <div className="space-y-2.5">
          {plagiarismRules.map((p) => (
            <div key={p} className="flex items-start gap-2 text-sm text-slate-600">
              <Icon name="chevronRight" className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              {p}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

/* ─── Submission Process ────────────────────────────────────────────── */
function Process() {
  const steps = [
    {
      step: 1,
      title: 'Register on Portal',
      desc: 'Create an author account on the SIARE submission portal. Complete your profile with institutional affiliation and contact details.',
      color: '#2563eb',
    },
    {
      step: 2,
      title: 'Prepare Your Manuscript',
      desc: 'Format your paper according to the guidelines. Ensure anonymization for double-blind review — remove all author information from the manuscript.',
      color: '#4f46e5',
    },
    {
      step: 3,
      title: 'Upload Manuscript',
      desc: 'Submit your paper in PDF or DOCX format. Complete the abstract, keywords, and track selection in the submission form.',
      color: '#7c3aed',
    },
    {
      step: 4,
      title: 'Peer Review Process',
      desc: 'Each submission undergoes rigorous double-blind peer review by a minimum of two domain experts from the Technical Committee.',
      color: '#0891b2',
    },
    {
      step: 5,
      title: 'Notification of Acceptance',
      desc: 'Authors receive detailed reviewer feedback along with the acceptance/revision/rejection decision by the stated notification date.',
      color: '#059669',
    },
    {
      step: 6,
      title: 'Camera-Ready Submission',
      desc: 'Accepted authors incorporate reviewer feedback and submit the final camera-ready version along with the copyright transfer form.',
      color: '#d97706',
    },
  ]

  return (
    <Card className="p-7 h-full">
      <h3 className="text-lg font-bold text-slate-800 mb-8 flex items-center gap-2">
        <Icon name="upload" className="w-5 h-5 text-blue-600" />
        Submission Process
      </h3>
      <div className="space-y-0">
        {steps.map((s, i) => (
          <div key={s.step} className="relative flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0 shadow-md"
                style={{ background: s.color }}
              >
                {s.step}
              </div>
              {i < steps.length - 1 && (
                <div
                  className="w-px flex-1 my-1.5"
                  style={{ background: `${s.color}30`, minHeight: '1.5rem' }}
                />
              )}
            </div>
            <div className={`${i < steps.length - 1 ? 'pb-7' : 'pb-0'}`}>
              <h4 className="font-semibold text-slate-800 mb-1">{s.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

/* ─── Publication Opportunities ─────────────────────────────────────── */
function Publication() {
  const pubs = [
    {
      icon: 'star',
      title: 'Scopus-Indexed Journals',
      desc: 'Selected high-quality papers will be recommended for publication in Scopus-indexed international journals. Authors of selected works will be notified separately for extended submission.',
      badge: 'Highly Competitive',
      color: '#2563eb',
    },
    {
      icon: 'book',
      title: 'Conference Proceedings',
      desc: 'All accepted and presented papers will be published in the official conference proceedings with a registered ISBN, archived in institutional repositories and digital libraries.',
      badge: 'All Accepted Papers',
      color: '#4f46e5',
    },
    {
      icon: 'fileText',
      title: 'Extended Paper Submission',
      desc: 'Authors are encouraged to submit extended versions of their conference papers (minimum 30% new content) for consideration in partner journals with fast-track review processes.',
      badge: 'Optional',
      color: '#0891b2',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Publication"
          title="Publication Opportunities"
          subtitle="Maximize the reach and impact of your research"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {pubs.map((p) => (
            <Card key={p.title} className="p-7 flex flex-col group hover:-translate-y-1">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${p.color}15` }}
              >
                <Icon name={p.icon} className="w-6 h-6" style={{ color: p.color }} />
              </div>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit"
                style={{ background: `${p.color}12`, color: p.color }}
              >
                {p.badge}
              </span>
              <h3 className="text-base font-bold text-slate-800 mb-2">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">{p.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Main export (wraps all submission-related sections) ───────────── */
export default function Submission() {
  return (
    <>
      <section id="submission" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="Submission"
            title="Paper Submission Guidelines"
            subtitle="Everything you need to know before submitting your research"
          />
          <div className="grid lg:grid-cols-2 gap-10">
            <Guidelines />
            <Process />
          </div>
        </div>
      </section>
      <Publication />
    </>
  )
}
