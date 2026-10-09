import { Hammer, Handshake, ClipboardCheck } from 'lucide-react'
import { partnerSteps } from '../../data/content.js'
import Section from '../ui/Section.jsx'
import Card from '../ui/Card.jsx'
import Reveal from '../ui/Reveal.jsx'
import { useTone } from '../ui/ToneContext.js'

const icons = [Hammer, Handshake, ClipboardCheck]
function Steps() {
  const t = useTone()
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {partnerSteps.map((s, i) => {
        const Icon = icons[i]
        return (
          <Reveal key={s.title} delay={i * 0.1} className="h-full">
            <Card className="h-full">
              <span className={`grid size-12 place-items-center rounded-xl ${t.icon}`}><Icon size={22} /></span>
              <h3 className={`mt-5 font-display text-xl font-bold ${t.title}`}>{s.title}</h3>
              <p className={`mt-2 ${t.muted}`}>{s.desc}</p>
            </Card>
          </Reveal>
        )
      })}
    </div>
  )
}
export default function PartnerNetwork() {
  return (
    <Section tone="sky" eyebrow="Our model" title="If it is tech, we will deliver it" intro="We do not limit you to what we build in-house. When a project needs a specialist, we bring one in and take responsibility for the result.">
      <Steps />
    </Section>
  )
}
