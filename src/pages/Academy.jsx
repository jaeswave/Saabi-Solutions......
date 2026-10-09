import { Check } from 'lucide-react'
import usePageTitle from '../hooks/usePageTitle.js'
import { audiences, tracks, deliveryModes, perks, academyFaqs } from '../data/academy.js'
import PageHero from '../components/ui/PageHero.jsx'
import Section from '../components/ui/Section.jsx'
import Card from '../components/ui/Card.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import ServiceCard from '../components/services/ServiceCard.jsx'
import TrackCard from '../components/academy/TrackCard.jsx'
import FaqSection from '../components/home/FaqSection.jsx'
import Cta from '../components/home/Cta.jsx'
import { useTone } from '../components/ui/ToneContext.js'

function Modes() {
  const t = useTone()
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {deliveryModes.map((m, i) => (
        <Reveal key={m.title} delay={i * 0.1} className="h-full">
          <Card className="h-full !p-8">
            <h3 className={`font-display text-2xl font-bold ${t.title}`}>{m.title}</h3><p className={`mt-2 ${t.muted}`}>{m.desc}</p>
            <ul className="mt-6 space-y-2">{m.points.map((p) => <li key={p} className={`flex gap-2 ${t.muted}`}><Check size={18} className={`shrink-0 ${t.accent}`} />{p}</li>)}</ul>
            <Button to={`/contact?topic=${encodeURIComponent(m.title === 'Public classes' ? 'Saabi Academy (public class)' : 'Saabi Academy (private training)')}`} className="mt-7">Enquire</Button>
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
function Perks() {
  const t = useTone()
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {perks.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.06} className="h-full">
          <Card className="h-full"><h3 className={`font-display text-lg font-bold ${t.title}`}>{p.title}</h3><p className={`mt-2 text-sm ${t.muted}`}>{p.desc}</p></Card>
        </Reveal>
      ))}
    </div>
  )
}
export default function Academy() {
  usePageTitle('Academy')
  return (
    <>
      <PageHero eyebrow="Saabi Academy" title="Learn tech skills. Start your career early." intro="Practical training for youths, JAMB candidates, graduates and organisations, delivered in public classes or private sessions built around you." />
      <Section tone="light" eyebrow="Who it is for" title="A programme for every stage">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{audiences.map((a, i) => <ServiceCard key={a.title} service={a} detailed delay={i * 0.06} />)}</div>
      </Section>
      <Section tone="mist" eyebrow="Career tracks" title="Choose your path" intro="Software engineering, cybersecurity, project management, data analysis, data engineering and AI.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{tracks.map((t, i) => <TrackCard key={t.title} track={t} delay={(i % 3) * 0.06} />)}</div>
      </Section>
      <Section tone="midnight" eyebrow="Ways to learn" title="Public or private, you decide"><Modes /></Section>
      <Section tone="sky" eyebrow="What you get" title="More than lectures"><Perks /></Section>
      <FaqSection items={academyFaqs} /><Cta />
    </>
  )
}
