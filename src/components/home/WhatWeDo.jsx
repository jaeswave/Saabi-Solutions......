import { Layers, Gauge, LifeBuoy } from 'lucide-react'
import { pillars } from '../../data/content.js'
import Section from '../ui/Section.jsx'
import Card from '../ui/Card.jsx'
import Reveal from '../ui/Reveal.jsx'
import { useTone } from '../ui/ToneContext.js'

const icons = [Layers, Gauge, LifeBuoy]
function Pillars() {
  const t = useTone()
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {pillars.map((p, i) => { const Icon = icons[i]; return (
        <Reveal key={p.title} delay={i * 0.08} className="h-full">
          <Card className="h-full"><span className={`grid size-12 place-items-center rounded-xl ${t.icon}`}><Icon size={22} /></span>
            <h3 className={`mt-5 font-display text-xl font-bold ${t.title}`}>{p.title}</h3><p className={`mt-2 ${t.muted}`}>{p.desc}</p></Card>
        </Reveal>) })}
    </div>
  )
}
export default function WhatWeDo() {
  return (
    <Section tone="mist" eyebrow="What Saabi does" title="Your business runs on technology. We make sure it performs." intro="Technology rarely fails in the boardroom. It fails at the till, in the classroom, on launch day. We design and manage the systems so it does not.">
      <Pillars />
    </Section>
  )
}
