import { useTone } from './ToneContext.js'
export default function Card({ children, className = '', padded = true }) {
  const t = useTone()
  return <div className={`rounded-2xl border transition duration-300 ${padded ? 'p-7' : ''} ${t.card} ${className}`}>{children}</div>
}
