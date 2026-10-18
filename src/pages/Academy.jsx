import { Check } from 'lucide-react'
import usePageTitle from '../hooks/usePageTitle.js'
import { audiences, tracks, deliveryModes, perks, academyFaqs } from '../data/academy.js'
import PageHero from '../components/ui/PageHero.jsx'
import Section from '../components/ui/Section.jsx'
import Split from '../components/ui/Split.jsx'
import CheckList from '../components/ui/CheckList.jsx'
import Card from '../components/ui/Card.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import ServiceCard from '../components/services/ServiceCard.jsx'
import TrackCard from '../components/academy/TrackCard.jsx'
import FaqSection from '../components/home/FaqSection.jsx'
import Cta from '../components/home/Cta.jsx'
import LearnVisual from '../components/visuals/LearnVisual.jsx'
import CodeWindow from '../components/visuals/CodeWindow.jsx'
import { useTone } from '../components/ui/ToneContext.js'
import { waLink } from '../config/site.js'

function Modes() {
  const t = useTone()
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {deliveryModes.map((m, i) => (
        <Reveal key={m.title} delay={i * 0.1} className="h-full">
          <Card className="h-full !p-8">
            <h3 className={`font-display text-2xl font-bold ${t.title}`}>{m.title}</h3><p className={`mt-2 ${t.muted}`}>{m.desc}</p>
            <ul className="mt-6 space-y-2">{m.points.map((p) => <li key={p} className={`flex gap-2 ${t.muted}`}><Check size={18} className={`shrink-0 ${t.accent}`} />{p}</li>)}</ul>
            <Button href={waLink(`Hello Kliqq, I would like to enquire about ${m.title.toLowerCase()} at Kliqq Academy.`)} className="mt-7">Enquire on WhatsApp</Button>
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
export default function Academy() {
  usePageTitle('Academy')
  return (
    <>
      <PageHero eyebrow="Kliqq Academy" title="Learn tech skills. Start your career early." visual={<LearnVisual />}
        intro="Practical training for youths, JAMB candidates, graduates and organisations, delivered in public classes or private sessions built around you." />
      <Section tone="light" eyebrow="Who it is for" title="A programme for every stage">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{audiences.map((a, i) => <ServiceCard key={a.title} service={a} detailed delay={i * 0.06} />)}</div>
      </Section>
      <Split tone="mist" reverse eyebrow="Learn by doing" title="Real projects, real mentors, a real portfolio" visual={<CodeWindow />}
        intro="You will not just watch videos. You build things, get feedback from working engineers and finish with work you can show.">
        <CheckList items={perks} />
        <div className="mt-8"><Button href={waLink('Hello Kliqq, I would like to join Kliqq Academy.')} variant="dark">Join the Academy</Button></div>
      </Split>
      <Section tone="sky" eyebrow="Career tracks" title="Choose your path" intro="Software engineering, cybersecurity, project management, data analysis, data engineering and AI.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{tracks.map((t, i) => <TrackCard key={t.title} track={t} delay={(i % 3) * 0.06} />)}</div>
      </Section>
      <Section tone="midnight" eyebrow="Ways to learn" title="Public or private, you decide"><Modes /></Section>
      <FaqSection items={academyFaqs} /><Cta />
    </>
  )
}
