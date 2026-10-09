import { Check } from 'lucide-react'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import Reveal from '../ui/Reveal.jsx'
import { useTone } from '../ui/ToneContext.js'

export default function ServiceCard({ service, detailed = false, delay = 0 }) {
  const t = useTone()
  const { icon: Icon, title, desc, points, partner } = service
  return (
    <Reveal className="h-full" delay={delay}>
      <Card className="h-full">
        <div className="flex items-start justify-between gap-3">
          <span className={`grid size-12 place-items-center rounded-xl ${t.icon}`}><Icon size={22} /></span>
          {partner && <Badge>With partners</Badge>}
        </div>
        <h3 className={`mt-5 font-display text-xl font-bold ${t.title}`}>{title}</h3>
        <p className={`mt-2 ${t.muted}`}>{desc}</p>
        {detailed && (
          <ul className="mt-5 space-y-2 text-sm">
            {points.map((p) => <li key={p} className={`flex gap-2 ${t.muted}`}><Check size={16} className={`mt-0.5 shrink-0 ${t.accent}`} />{p}</li>)}
          </ul>
        )}
      </Card>
    </Reveal>
  )
}
