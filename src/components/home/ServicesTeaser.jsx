import { ArrowRight } from 'lucide-react'
import { services, solutions } from '../../data/services.js'
import Section from '../ui/Section.jsx'
import Card from '../ui/Card.jsx'
import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'
import { useTone } from '../ui/ToneContext.js'

const blocks = [
  { label: 'Services', blurb: 'How we work with you across the whole technology lifecycle.', list: services, to: '/services' },
  { label: 'Solutions', blurb: 'What we deliver for specific business needs.', list: solutions, to: '/solutions' },
]
function Blocks() {
  const t = useTone()
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {blocks.map((b, i) => (
        <Reveal key={b.label} delay={i * 0.1} className="h-full">
          <Card className="flex h-full flex-col !p-8">
            <h3 className={`font-display text-2xl font-bold ${t.title}`}>{b.label}</h3>
            <p className={`mt-2 ${t.muted}`}>{b.blurb}</p>
            <ul className="mt-6 flex flex-wrap gap-2">{b.list.map((s) => <li key={s.title} className={`rounded-full border px-3 py-1 text-sm ${t.line} ${t.muted}`}>{s.title}</li>)}</ul>
            <div className="mt-auto pt-8"><Button to={b.to} variant="dark">Explore {b.label.toLowerCase()} <ArrowRight size={16} /></Button></div>
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
export default function ServicesTeaser() {
  return (
    <Section tone="light" eyebrow="What we do" title="Services and solutions, from first plan to long-term support" intro="Pick a path to see the detail.">
      <Blocks />
    </Section>
  )
}
