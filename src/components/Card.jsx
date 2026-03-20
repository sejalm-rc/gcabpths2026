export default function Card({ children, className = '', style }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
