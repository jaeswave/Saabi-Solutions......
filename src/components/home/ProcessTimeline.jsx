import { process } from '../../data/content.js'
import Section from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import { useTone } from '../ui/ToneContext.js'

function Steps() {
  const t = useTone()
  return (
    <ol className="grid gap-8 lg:grid-cols-5">
      {process.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.08}>
          <li className="list-none">
            <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-brand to-aqua font-display font-bold text-ink">{i + 1}</span>
            <h3 className={`mt-4 font-display text-xl font-bold ${t.title}`}>{s.title}</h3>
            <p className={`mt-2 text-sm ${t.muted}`}>{s.desc}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  )
}
export default function ProcessTimeline({ tone = 'midnight' }) {
  return (
    <Section tone={tone} eyebrow="How we work" title="A clear path from idea to launch" intro="No surprises. You know what happens next at every stage.">
      <Steps />
    </Section>
  )
}
