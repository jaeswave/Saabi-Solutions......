import { Users } from 'lucide-react'
import { team } from '../../data/team.js'
import Section from '../ui/Section.jsx'
import Card from '../ui/Card.jsx'
import Reveal from '../ui/Reveal.jsx'
import { useTone } from '../ui/ToneContext.js'

const initials = (n) => n.split(' ').map((w) => w[0]).slice(0, 2).join('')
function Grid() {
  const t = useTone()
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {team.map((m, i) => (
        <Reveal key={m.name} delay={i * 0.07} className="h-full">
          <Card className="h-full">
            <div className="grid aspect-[4/3] place-items-center rounded-xl bg-gradient-to-br from-brand/40 to-aqua/30 font-display text-4xl font-extrabold text-white">
              {m.group ? <Users size={40} /> : initials(m.name)}
            </div>
            <h3 className={`mt-5 font-display text-lg font-bold ${t.title}`}>{m.name}</h3>
            <p className={`text-sm font-medium ${t.accent}`}>{m.role}</p>
            <p className={`mt-3 text-sm ${t.muted}`}>{m.bio}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
export default function TeamSection() {
  return (
    <Section tone="dark" eyebrow="Who we are" title="The team behind the work" intro="Engineers, security testers, project managers and instructors, backed by a network of specialists we trust.">
      <Grid />
    </Section>
  )
}
