import Icon from './Icon'
import Card from './Card'
import SectionHeader from './SectionHeader'

/* ─── About SIARE ──────────────────────────────────────────────────── */
function AboutSiare() {
  const features = [
    { icon: 'globe', title: 'Global Reach', text: 'Participants from 50+ nations across 6 continents' },
    { icon: 'calendar', title: 'Year-Round Series', text: 'Monthly themed conferences from June to March' },
    { icon: 'users', title: 'Interdisciplinary', text: 'Bridging science, technology, medicine & policy' },
    { icon: 'award', title: 'Recognized Publications', text: 'Indexed conference proceedings with ISBN' },
  ]

  return (
    <section id="about-siare" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="SIARE Series"
          title="About the SIARE Conference Series"
          subtitle="A global research initiative spanning disciplines and borders"
        />
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-justify">
            <p className="text-slate-600 leading-relaxed">
              The{' '}
              <strong className="text-slate-800">
                SIARE (Scientific and Interdisciplinary Academic Research Exchange)
              </strong>{' '}
              Conference Series is a prestigious global initiative designed to foster meaningful dialogue
              between researchers, academics, and industry professionals across diverse fields of science and
              technology. Launched to address the growing need for cross-disciplinary collaboration, SIARE
              operates as a year-round academic platform running from June through March, hosting thematic
              conferences each month.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Each event within the SIARE Series focuses on a specialized domain, enabling in-depth
              exploration while also encouraging intersections with complementary fields. The series has
              successfully convened scholars from over 50 countries, facilitating the exchange of pioneering
              ideas, methodologies, and research outcomes at the highest academic standards.
            </p>
            <p className="text-slate-600 leading-relaxed">
              SIARE is committed to open science, ethical research practices, and the democratization of
              knowledge. Its publications are recognized by leading indexing bodies, ensuring maximum global
              visibility for contributing authors.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <Card key={f.title} className="p-5 group hover:-translate-y-1">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'rgba(37,99,235,0.1)' }}
                >
                  <Icon name={f.icon} className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-800 mb-1">{f.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{f.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── About Conference ─────────────────────────────────────────────── */
function AboutConference() {
  const audience = [
    'PhD Researchers & Postdoctoral Fellows',
    'Clinical Scientists & Physicians',
    'Biotechnology & Pharma Professionals',
    'Graduate & Doctoral Students',
    'Policy Makers & Health Administrators',
    'Innovation & Startup Founders',
  ]

  return (
    <section
      id="about-conf"
      className="py-20"
      style={{ background: 'linear-gradient(135deg,#f8faff,#eef2ff)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="About the Conference"
          title="GCABPTHS 2026"
          subtitle="Uniting global minds to advance biotechnology, pharmacology, and health sciences"
        />
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="p-7 lg:col-span-2">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Purpose &amp; Vision</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Global Conference on Advances in Biotechnology, Pharmacology, and Translational Health
              Sciences (GCABPTHS 2026) serves as an international forum for researchers, scientists,
              clinicians, academicians, and industry professionals to present and discuss cutting-edge
              discoveries at the intersection of life sciences and clinical application.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Scheduled for{' '}
              <strong className="text-blue-600">July 10–12, 2026</strong>, this three-day conference brings
              together over 200 participants from more than 50 countries, fostering the spirit of global
              collaboration that defines modern biomedical science. Sessions include keynote addresses, oral
              presentations, poster exhibitions, and panel discussions led by distinguished experts.
            </p>
            <p className="text-slate-600 leading-relaxed">
              The conference is designed to bridge the critical gap between laboratory breakthroughs and
              real-world clinical implementation — accelerating the journey from bench to bedside and from
              discovery to deployment.
            </p>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <Icon name="users" className="w-4 h-4 text-blue-600" />
                Target Audience
              </h4>
              <ul className="space-y-2.5">
                {audience.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-slate-600">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(37,99,235,0.1)' }}
                    >
                      <Icon name="check" className="w-3 h-3 text-blue-600" />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </Card>
            <div
              className="rounded-2xl p-6"
              style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}
            >
              <h4 className="font-semibold text-white mb-2">Conference Motto</h4>
              <p className="text-blue-100 text-sm italic leading-relaxed">
                "From Discovery to Delivery — Translating Science into Human Health"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Objectives ────────────────────────────────────────────────────── */
function Objectives() {
  const objectives = [
    {
      icon: 'book',
      title: 'Knowledge Exchange',
      text: 'Facilitate the dissemination of pioneering research findings across biotechnology, pharmacology, and translational medicine through structured sessions and open dialogue.',
    },
    {
      icon: 'users',
      title: 'Research Collaboration',
      text: 'Establish lasting partnerships between researchers from diverse institutions and nations to jointly address complex challenges in health sciences.',
    },
    {
      icon: 'flask',
      title: 'Innovation in Biotech',
      text: 'Showcase novel discoveries and innovations in genetic engineering, drug development, and precision medicine that are shaping the future of healthcare.',
    },
    {
      icon: 'activity',
      title: 'Translational Focus',
      text: 'Strengthen the connection between fundamental research and clinical practice, accelerating the translation of discoveries into tangible patient benefits.',
    },
    {
      icon: 'shield',
      title: 'Industry-Academia Bridge',
      text: 'Foster productive partnerships between academic institutions and biopharmaceutical companies to align research priorities with market and patient needs.',
    },
    {
      icon: 'globe',
      title: 'Global Health Impact',
      text: 'Address global health challenges including emerging infectious diseases, antimicrobial resistance, and non-communicable disease burden through evidence-based science.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Objectives"
          title="Conference Objectives"
          subtitle="Our key goals for advancing science through collaboration"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((o) => (
            <Card key={o.title} className="p-6 group hover:-translate-y-1 cursor-default">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg,rgba(37,99,235,0.1),rgba(79,70,229,0.1))' }}
              >
                <Icon name={o.icon} className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{o.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{o.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Export wrapper ────────────────────────────────────────────────── */
export default function About() {
  return (
    <>
      <AboutSiare />
      <AboutConference />
      <Objectives />
    </>
  )
}
