import { Check } from 'lucide-react'
import { models } from '../../data/content.js'
import Section from '../ui/Section.jsx'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import Reveal from '../ui/Reveal.jsx'
import { useTone } from '../ui/ToneContext.js'

function Cards() {
  const t = useTone()
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {models.map((m, i) => (
        <Reveal key={m.title} delay={i * 0.08} className="h-full">
          <Card className={`h-full ${m.featured ? 'ring-2 ring-brand' : ''}`}>
            <div className="flex items-start justify-between gap-3">
              <h3 className={`font-display text-2xl font-bold ${t.title}`}>{m.title}</h3>{m.featured && <Badge>Popular</Badge>}
            </div>
            <p className={`mt-3 ${t.muted}`}>{m.desc}</p>
            <ul className="mt-6 space-y-2">{m.points.map((p) => <li key={p} className={`flex gap-2 ${t.muted}`}><Check size={18} className={`shrink-0 ${t.accent}`} />{p}</li>)}</ul>
            <p className={`mt-6 text-sm font-medium ${t.accent}`}>{m.fit}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
export default function Models() {
  return (
    <Section tone="dark" eyebrow="Engagement" title="Work with us your way" intro="Pick the model that fits your budget and stage. You can switch as you grow.">
      <Cards />
    </Section>
  )
}
