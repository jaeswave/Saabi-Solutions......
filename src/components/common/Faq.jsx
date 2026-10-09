import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faqs } from '../../data/content.js'
import { useTone } from '../ui/ToneContext.js'

export default function Faq({ items = faqs }) {
  const t = useTone()
  const [open, setOpen] = useState(0)
  return (
    <div className={`mx-auto max-w-3xl divide-y border-y ${t.line}`}>
      {items.map((f, i) => (
        <div key={f.q} className={`py-5 ${t.line}`}>
          <button className={`flex w-full items-center justify-between gap-4 text-left font-display text-lg font-semibold ${t.title}`} onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            {f.q}<Plus size={22} className={`shrink-0 transition ${t.accent} ${open === i ? 'rotate-45' : ''}`} />
          </button>
          {open === i && <p className={`mt-3 ${t.muted}`}>{f.a}</p>}
        </div>
      ))}
    </div>
  )
}
