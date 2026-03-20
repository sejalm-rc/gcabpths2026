import Icon from './Icon'
import Card from './Card'
import SectionHeader from './SectionHeader'

// const tracks = [
//   {
//     icon: 'flask',
//     title: 'Biotechnology & Genetic Engineering',
//     desc: 'CRISPR, synthetic biology, agricultural biotech, genomics, and next-generation sequencing platforms.',
//     topics: ['Gene Editing', 'Synthetic Biology', 'Genomics', 'Proteomics'],
//     color: '#2563eb',
//   },
//   {
//     icon: 'shield',
//     title: 'Pharmacology & Drug Development',
//     desc: 'Drug discovery pipelines, pharmacokinetics, biopharmaceuticals, personalized medicine, and novel therapeutics.',
//     topics: ['Drug Discovery', 'Pharmacokinetics', 'Biopharmaceuticals', 'Clinical Trials'],
//     color: '#7c3aed',
//   },
//   {
//     icon: 'activity',
//     title: 'Translational Medicine',
//     desc: 'Bench-to-bedside research, biomarker discovery, clinical validation, and implementation science.',
//     topics: ['Biomarkers', 'Clinical Validation', 'Precision Medicine', 'Theranostics'],
//     color: '#0891b2',
//   },
//   {
//     icon: 'heart',
//     title: 'Clinical Research & Trials',
//     desc: 'Study design, regulatory affairs, Good Clinical Practice (GCP), patient recruitment, and outcome analysis.',
//     topics: ['GCP Compliance', 'Study Design', 'Regulatory Affairs', 'Outcome Analysis'],
//     color: '#dc2626',
//   },
//   {
//     icon: 'cpu',
//     title: 'AI in Healthcare',
//     desc: 'Machine learning diagnostics, predictive modeling, digital health platforms, NLP in clinical notes, and AI ethics.',
//     topics: ['ML Diagnostics', 'Predictive Models', 'Digital Health', 'AI Ethics'],
//     color: '#059669',
//   },
//   {
//     icon: 'globe',
//     title: 'Public Health & Epidemiology',
//     desc: 'Disease surveillance, global health policy, epidemiological modeling, health equity, and pandemic preparedness.',
//     topics: ['Surveillance', 'Epi Modeling', 'Health Policy', 'Pandemic Prep'],
//     color: '#d97706',
//   },
//   {
//   icon: 'database',
//   title: 'Bioinformatics & Computational Biology',
//   desc: 'Data-driven biology including sequence analysis, molecular modeling, systems biology, and big data in life sciences.',
//   topics: ['Sequence Analysis', 'Molecular Modeling', 'Systems Biology', 'Big Data'],
//   color: '#0ea5e9',
// },
// {
//   icon: 'microscope',
//   title: 'Nanotechnology & Biomedical Engineering',
//   desc: 'Nanomedicine, biomaterials, tissue engineering, biosensors, and advanced medical device innovations.',
//   topics: ['Nanomedicine', 'Biomaterials', 'Tissue Engineering', 'Biosensors'],
//   color: '#9333ea',
// },
// {
//   icon: 'leaf',
//   title: 'Environmental & Agricultural Sciences',
//   desc: 'Sustainable agriculture, climate impact on health, environmental biotechnology, and food security solutions.',
//   topics: ['Sustainability', 'AgriTech', 'Climate Impact', 'Food Security'],
//   color: '#16a34a',
// },
// {
//   icon: 'brain',
//   title: 'Neuroscience & Mental Health',
//   desc: 'Brain research, neurodegenerative diseases, cognitive science, mental health innovations, and neurotechnology.',
//   topics: ['Neurodegeneration', 'Cognitive Science', 'Mental Health', 'Neurotech'],
//   color: '#f43f5e',
// },
// ]

const tracks = [
  // ── Core Life Sciences ──
  {
    icon: 'flask',
    title: 'Biotechnology & Genetic Engineering',
    desc: 'CRISPR, synthetic biology, agricultural biotech, genomics, and next-generation sequencing platforms.',
    topics: ['Gene Editing', 'Synthetic Biology', 'Genomics', 'Proteomics'],
    color: '#2563eb',
    category: 'Core',
  },
  {
    icon: 'shield',
    title: 'Pharmacology & Drug Development',
    desc: 'Drug discovery pipelines, pharmacokinetics, biopharmaceuticals, personalized medicine, and novel therapeutics.',
    topics: ['Drug Discovery', 'Pharmacokinetics', 'Biopharmaceuticals', 'Clinical Trials'],
    color: '#7c3aed',
    category: 'Core',
  },
  {
    icon: 'activity',
    title: 'Translational Medicine',
    desc: 'Bench-to-bedside research, biomarker discovery, clinical validation, and implementation science.',
    topics: ['Biomarkers', 'Clinical Validation', 'Precision Medicine', 'Theranostics'],
    color: '#0891b2',
    category: 'Core',
  },
  {
    icon: 'heart',
    title: 'Clinical Research & Trials',
    desc: 'Study design, regulatory affairs, Good Clinical Practice (GCP), patient recruitment, and outcome analysis.',
    topics: ['GCP Compliance', 'Study Design', 'Regulatory Affairs', 'Outcome Analysis'],
    color: '#dc2626',
    category: 'Core',
  },

  // ── Emerging Tech ──
  {
    icon: 'cpu',
    title: 'AI in Healthcare',
    desc: 'Machine learning diagnostics, predictive modeling, digital health platforms, NLP in clinical notes, and AI ethics.',
    topics: ['ML Diagnostics', 'Predictive Models', 'Digital Health', 'AI Ethics'],
    color: '#059669',
    category: 'Emerging',
  },
  {
    icon: 'database',
    title: 'Bioinformatics & Computational Biology',
    desc: 'Data-driven biology including sequence analysis, molecular modeling, systems biology, and big data in life sciences.',
    topics: ['Sequence Analysis', 'Molecular Modeling', 'Systems Biology', 'Big Data'],
    color: '#0284c7',
    category: 'Emerging',
  },
  {
    icon: 'brain',
    title: 'Nanotechnology & Biomedical Engineering',
    desc: 'Nanomedicine, biomaterials, tissue engineering, biosensors, and advanced medical device innovations.',
    topics: ['Nanomedicine', 'Biomaterials', 'Tissue Engineering', 'Biosensors'],
    color: '#9333ea',
    category: 'Emerging',
  },

  // ── Interdisciplinary ──
  {
    icon: 'globe',
    title: 'Public Health & Epidemiology',
    desc: 'Disease surveillance, global health policy, epidemiological modeling, health equity, and pandemic preparedness.',
    topics: ['Surveillance', 'Epi Modeling', 'Health Policy', 'Pandemic Prep'],
    color: '#d97706',
    category: 'Interdisciplinary',
  },
  {
    icon: 'leaf',
    title: 'Environmental & Agricultural Sciences',
    desc: 'Sustainable agriculture, climate impact on health, environmental biotechnology, and food security solutions.',
    topics: ['Sustainability', 'AgriTech', 'Climate Impact', 'Food Security'],
    color: '#16a34a',
    category: 'Interdisciplinary',
  },
  {
    icon: 'activity',
    title: 'Neuroscience & Mental Health',
    desc: 'Brain research, neurodegenerative diseases, cognitive science, mental health innovations, and neurotechnology.',
    topics: ['Neurodegeneration', 'Cognitive Science', 'Mental Health', 'Neurotech'],
    color: '#f43f5e',
    category: 'Interdisciplinary',
  },
]

export default function Tracks() {
  return (
    <section
      id="tracks"
      className="py-20"
      style={{ background: 'linear-gradient(135deg,#f0f6ff,#eef2ff)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Tracks"
          title="Conference Tracks"
          subtitle="Ten focused domains at the frontier of life sciences and clinical innovation"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tracks.map((t) => (
            <Card key={t.title} className="p-6 group hover:-translate-y-1 cursor-default flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${t.color}18` }}
                >
                  <Icon name={t.icon} className="w-6 h-6" style={{ color: t.color }} />
                </div>
                <div className="h-px flex-1" style={{ background: `${t.color}30` }} />
              </div>
              <h3 className="font-bold text-slate-800 mb-2 text-base">{t.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">{t.desc}</p>

              {/* topic chips */}
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-50">
                {t.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{ background: `${t.color}12`, color: t.color }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
