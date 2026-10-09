import { Clock, Check } from 'lucide-react'
import Card from '../ui/Card.jsx'
import Reveal from '../ui/Reveal.jsx'
import { useTone } from '../ui/ToneContext.js'

export default function TrackCard({ track, delay = 0 }) {
  const t = useTone()
  const { icon: Icon, title, duration, level, learn } = track
  return (
    <Reveal className="h-full" delay={delay}>
      <Card className="h-full">
        <span className={`grid size-12 place-items-center rounded-xl ${t.icon}`}><Icon size={22} /></span>
        <h3 className={`mt-5 font-display text-xl font-bold ${t.title}`}>{title}</h3>
        <p className={`mt-1 flex items-center gap-2 text-sm ${t.muted}`}><Clock size={14} /> {duration} · {level}</p>
        <ul className="mt-5 space-y-2 text-sm">{learn.map((l) => <li key={l} className={`flex gap-2 ${t.muted}`}><Check size={16} className={`mt-0.5 shrink-0 ${t.accent}`} />{l}</li>)}</ul>
      </Card>
    </Reveal>
  )
}
