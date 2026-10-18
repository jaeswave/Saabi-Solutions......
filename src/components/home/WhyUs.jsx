import { why } from '../../data/content.js'
import Section from '../ui/Section.jsx'
import Card from '../ui/Card.jsx'
import Reveal from '../ui/Reveal.jsx'
import { useTone } from '../ui/ToneContext.js'

function Grid() {
  const t = useTone()
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {why.map((w, i) => (
        <Reveal key={w.n} delay={i * 0.05} className="h-full">
          <Card className="h-full">
            <span className="bg-gradient-to-r from-brand to-aqua bg-clip-text font-display text-4xl font-extrabold text-transparent">{w.n}</span>
            <h3 className={`mt-3 font-display text-xl font-bold ${t.title}`}>{w.title}</h3>
            <p className={`mt-2 ${t.muted}`}>{w.desc}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
export default function WhyUs({ tone = 'light' }) {
  return (
    <Section tone={tone} eyebrow="Why Kliqq" title="Technical depth, business sense, straight talk" intro="The reasons clients stay with us after the first project.">
      <Grid />
    </Section>
  )
}
