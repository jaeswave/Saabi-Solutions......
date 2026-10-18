import { Check } from 'lucide-react'
import { useTone } from './ToneContext.js'
export default function CheckList({ items }) {
  const t = useTone()
  return (
    <ul className="mt-8 space-y-4">
      {items.map((i) => {
        const o = typeof i === 'string' ? { title: i } : i
        return (
          <li key={o.title} className="flex gap-3">
            <span className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full ${t.icon}`}><Check size={14} /></span>
            <div><p className={`font-semibold ${t.title}`}>{o.title}</p>{o.desc && <p className={`text-sm ${t.muted}`}>{o.desc}</p>}</div>
          </li>
        )
      })}
    </ul>
  )
}
