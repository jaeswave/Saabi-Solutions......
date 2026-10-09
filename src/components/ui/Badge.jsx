import { useTone } from './ToneContext.js'
export default function Badge({ children }) {
  const t = useTone()
  return <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${t.badge}`}>{children}</span>
}
