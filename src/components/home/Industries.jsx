import { industries } from '../../data/industries.js'
import Section from '../ui/Section.jsx'
import Card from '../ui/Card.jsx'
import Reveal from '../ui/Reveal.jsx'
import { useTone } from '../ui/ToneContext.js'

function Grid() {
  const t = useTone()
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {industries.map(({ icon: Icon, title, desc }, i) => (
        <Reveal key={title} delay={i * 0.04} className="h-full">
          <Card className="h-full !p-6">
            <Icon size={26} className={t.accent} />
            <h3 className={`mt-4 font-display font-bold ${t.title}`}>{title}</h3>
            <p className={`mt-1 text-sm ${t.muted}`}>{desc}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
export default function Industries() {
  return (
    <Section tone="mist" eyebrow="Industries" title="Solutions that matter to real people" intro="Whatever your industry, we build the system that solves its specific problem.">
      <Grid />
    </Section>
  )
}
