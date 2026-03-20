// import Icon from './Icon'

// const scrollTo = (href) => {
//   const el = document.querySelector(href)
//   if (!el) return
//   const top = el.getBoundingClientRect().top + window.scrollY - 72
//   window.scrollTo({ top, behavior: 'smooth' })
// }

// export default function Hero() {
//   return (
//     <section
//       className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
//       style={{ background: 'linear-gradient(135deg,#f0f6ff 0%,#eef2ff 50%,#f8faff 100%)' }}
//     >
//       {/* Decorative blobs */}
//       <div
//         className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full pointer-events-none"
//         style={{ background: 'radial-gradient(circle,rgba(59,130,246,0.15),transparent 70%)' }}
//       />
//       <div
//         className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] rounded-full pointer-events-none"
//         style={{ background: 'radial-gradient(circle,rgba(79,70,229,0.1),transparent 70%)' }}
//       />
//       <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-blue-300 opacity-60 pointer-events-none" />
//       <div className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-indigo-300 opacity-60 pointer-events-none" />
//       <div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-blue-200 opacity-50 pointer-events-none" />
//       <div className="absolute top-1/2 left-1/12 w-2 h-2 rounded-full bg-indigo-400 opacity-40 pointer-events-none" />

//       <div className="relative max-w-5xl mx-auto px-6 text-center">
//         {/* Badge */}
//         <div
//           className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 border"
//           style={{
//             background: 'rgba(37,99,235,0.08)',
//             color: '#2563eb',
//             borderColor: 'rgba(37,99,235,0.2)',
//           }}
//         >
//           <Icon name="globe" className="w-3.5 h-3.5" />
//           International Academic Conference · July 2026
//         </div>

//         {/* Headline */}
//         <h1
//           className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight mb-6"
//           style={{ letterSpacing: '-0.02em' }}
//         >
//           Global Conference on{' '}
//           <span
//             style={{
//               background: 'linear-gradient(135deg,#2563eb,#4f46e5)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//             }}
//           >
//             Advances in Biotechnology,
//           </span>{' '}
//           Pharmacology &amp; Translational Health Sciences
//         </h1>

//         <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
//           Bringing together researchers, clinicians, and innovators from across the globe to shape the future
//           of biomedical science and translational medicine.
//         </p>

//         {/* CTA buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
//           <button
//             onClick={() => scrollTo('#submission')}
//             className="px-8 py-3.5 rounded-full font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto"
//             style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}
//           >
//             Submit Your Paper
//           </button>
//           <button
//             onClick={() => scrollTo('#registration')}
//             className="px-8 py-3.5 rounded-full font-semibold text-blue-600 bg-white border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-200 shadow-sm w-full sm:w-auto"
//           >
//             Register Now
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
//           {[
//             { val: 'Jul 10–12', label: 'Conference Dates' },
//             { val: '6', label: 'Research Tracks' },
//             { val: '50+', label: 'Countries' },
//             { val: '200+', label: 'Expected Papers' },
//           ].map((s) => (
//             <div
//               key={s.label}
//               className="bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-5 border border-white shadow-sm hover:shadow-md transition-all duration-300"
//             >
//               <div className="text-2xl font-extrabold text-blue-600">{s.val}</div>
//               <div className="text-xs text-slate-500 font-medium mt-1">{s.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Scroll hint */}
//         <div className="mt-12 flex flex-col items-center gap-2 text-slate-400">
//           <span className="text-xs font-medium tracking-wider uppercase">Scroll to explore</span>
//           <div className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center p-1">
//             <div className="w-1 h-2 rounded-full bg-blue-400 animate-bounce" />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import Icon from './Icon'

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 72
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50">

      {/* 🌌 Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-3xl animate-pulse bottom-[-100px] right-[-100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* ───────── LEFT: TEXT ───────── */}
        <div className="text-center lg:text-left ml-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-6 border border-blue-200 bg-blue-50 text-blue-600">
            <Icon name="globe" className="w-3 h-3" />
            July 2026 · International Conference
          </div>

          {/* ✅ Fixed Smaller Heading */}
          <h1 className="mb-5">
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700 mb-2">
              Global Conference on
            </span>

            <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
              Biotechnology & <br className="hidden sm:block" />
              Translational Health Sciences
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-500 text-base sm:text-lg max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0">
            Bringing together global researchers, clinicians, and innovators to advance
            the future of biotechnology and translational medicine.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
            <button
              onClick={() => scrollTo('#submission')}
              className="px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md hover:shadow-lg transition-all"
            >
              Submit Paper
            </button>

            <button
              onClick={() => scrollTo('#registration')}
              className="px-6 py-3 rounded-full text-sm font-semibold text-blue-600 border border-blue-200 hover:bg-blue-50 transition-all"
            >
              Register
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-slate-500">
            <div><span className="font-semibold text-slate-800">Jul 10–12</span> · Dates</div>
            <div><span className="font-semibold text-slate-800">10</span> Tracks</div>
            <div><span className="font-semibold text-slate-800">50+</span> Countries</div>
          </div>
        </div>

        {/* ───────── RIGHT: VISUAL ───────── */}
        <div className="relative flex items-center justify-center">
          
          {/* DNA / Orb Effect */}
          <div className="relative w-[320px] h-[320px]">
            
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border border-blue-200 animate-spin-slow" />

            {/* Inner pulse */}
            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-xl animate-pulse" />

            {/* Center core */}
            <div className="absolute inset-20 rounded-full bg-white shadow-lg flex items-center justify-center">
              <Icon name="flask" className="w-10 h-10 text-blue-600" />
            </div>

            {/* Floating particles */}
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
            <div className="absolute bottom-0 right-10 w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-200" />
            <div className="absolute top-10 right-0 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping" />
          </div>
        </div>

      </div>

      {/* Custom slow spin */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 18s linear infinite;
        }
      `}</style>
    </section>
  )
}