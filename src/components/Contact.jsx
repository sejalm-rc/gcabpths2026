import { useState } from 'react'
import Icon from './Icon'
import Card from './Card'
import SectionHeader from './SectionHeader'

const contactInfo = [
  {
    icon: 'mail',
    title: 'Email Us',
    lines: ['submissions@gcabpths2026.org', 'info@gcabpths2026.org'],
    note: 'We respond within 2 business days',
  },
  {
    icon: 'phone',
    title: 'Call Us',
    lines: ['+1 (800) 555-0192', '+91 98765 43210'],
    note: 'Mon–Fri, 9 AM – 6 PM IST',
  },
  {
    icon: 'mapPin',
    title: 'Secretariat',
    lines: ['GCABPTHS 2026 Organizing Secretariat', 'International Convention Centre, Block B', 'Nagpur, Maharashtra, India'],
    note: 'Visits by appointment only',
  },
]

const subjects = [
  'Paper Submission Query',
  'Registration Assistance',
  'Sponsorship Enquiry',
  'Committee / Reviewer Application',
  'Technical Issue',
  'General Enquiry',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', institution: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setSent(true)
  }

  const field = (key) => ({
    value: form[key],
    onChange: (ev) => {
      setForm((f) => ({ ...f, [key]: ev.target.value }))
      if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
    },
  })

  const inputCls = (key) =>
    `w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all bg-white ${
      errors[key] ? 'border-red-300 bg-red-50' : 'border-slate-200'
    }`

  return (
    <section
      id="contact"
      className="py-20"
      style={{ background: 'linear-gradient(135deg,#f0f6ff,#eef2ff)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          tag="Contact Us"
          title="Get in Touch"
          subtitle="We're here to help with your queries about submissions, registration, and participation"
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info — 2 cols */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((c) => (
              <Card key={c.title} className="p-6 flex gap-4 items-start group hover:-translate-y-0.5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: 'rgba(37,99,235,0.1)' }}
                >
                  <Icon name={c.icon} className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">{c.title}</h4>
                  {c.lines.map((l) => (
                    <p key={l} className="text-slate-600 text-sm">{l}</p>
                  ))}
                  <p className="text-slate-400 text-xs mt-1 italic">{c.note}</p>
                </div>
              </Card>
            ))}

            {/* Social links */}
            <Card className="p-6">
              <h4 className="font-semibold text-slate-800 mb-4">Follow the Conference</h4>
              <div className="flex gap-3">
                {['twitter', 'linkedin'].map((s) => (
                  <button
                    key={s}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 border border-slate-100"
                    aria-label={s}
                  >
                    <Icon name={s} className="w-4 h-4" />
                  </button>
                ))}
                <div className="text-xs text-slate-400 flex items-center ml-1">
                  @GCABPTHS2026
                </div>
              </div>
            </Card>
          </div>

          {/* Contact form — 3 cols */}
          <Card className="lg:col-span-3 p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
                  style={{ background: 'rgba(5,150,105,0.1)' }}
                >
                  <Icon name="check" className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-500 text-sm max-w-xs">
                  Thank you for reaching out. Our secretariat team will respond within 2 business days.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', institution: '', subject: '', message: '' }) }}
                  className="mt-8 px-7 py-2.5 rounded-full text-sm font-semibold text-blue-600 border-2 border-blue-200 hover:border-blue-500 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-6">Send us a Message</h3>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        className={inputCls('name')}
                        placeholder="Dr. Jane Smith"
                        {...field('name')}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        className={inputCls('email')}
                        placeholder="jane@university.edu"
                        {...field('email')}
                      />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Institution / Organization</label>
                    <input
                      className={inputCls('institution')}
                      placeholder="University or Company name"
                      {...field('institution')}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">Subject</label>
                    <select className={inputCls('subject')} {...field('subject')}>
                      <option value="">Select a topic</option>
                      {subjects.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      rows={5}
                      className={inputCls('message')}
                      placeholder="How can we help you?"
                      style={{ resize: 'none' }}
                      {...field('message')}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                    style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    Your information is kept confidential and never shared with third parties.
                  </p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
