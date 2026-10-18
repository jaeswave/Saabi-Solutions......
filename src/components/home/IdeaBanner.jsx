import { Lightbulb, ArrowRight, ShieldCheck } from 'lucide-react'
import { ideaSteps } from '../../data/idea.js'
import Section from '../ui/Section.jsx'
import Card from '../ui/Card.jsx'
import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'
import { useTone } from '../ui/ToneContext.js'

function Content() {
  const t = useTone()
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <Reveal>
        <span className={`grid size-14 place-items-center rounded-2xl ${t.icon}`}><Lightbulb size={28} /></span>
        <h2 className={`mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl ${t.title}`}>Got a fantastic idea? <span className="bg-gradient-to-r from-brand to-cyan-600 bg-clip-text text-transparent">We will tech it for you.</span></h2>
        <p className={`mt-5 text-lg ${t.muted}`}>An app, a platform, a marketplace, a school system, a startup. Tell us what you imagine and we will turn it into a working product you can show customers and investors.</p>
        <p className={`mt-4 flex items-center gap-2 text-sm font-medium ${t.title}`}><ShieldCheck size={18} className={t.accent} /> Your idea stays yours. We sign an NDA on request.</p>
        <div className="mt-8"><Button to="/ideas" variant="dark">See how it works <ArrowRight size={16} /></Button></div>
      </Reveal>
      <div className="grid gap-4">
        {ideaSteps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <Card className="flex items-start gap-4 !p-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-aqua font-display font-bold text-ink">{i + 1}</span>
              <div><h3 className={`font-display font-bold ${t.title}`}>{s.title}</h3><p className={`mt-1 text-sm ${t.muted}`}>{s.desc}</p></div>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
export default function IdeaBanner() {
  return <Section id="idea" tone="sky"><Content /></Section>
}
