export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <div className="text-center mb-14">
      {tag && (
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ background: 'rgba(37,99,235,0.1)', color: '#2563eb' }}
        >
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="h-px w-12 bg-blue-200" />
        <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        <div className="h-px w-24 bg-blue-500" />
        <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        <div className="h-px w-12 bg-blue-200" />
      </div>
    </div>
  )
}
