import { useState, useEffect } from 'react'
import Icon from './Icon'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full shadow-lg flex items-center justify-center text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
      style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)' }}
      aria-label="Back to top"
    >
      <Icon name="arrowUp" className="w-5 h-5" />
    </button>
  )
}
