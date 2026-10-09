import usePageTitle from '../hooks/usePageTitle.js'
import { milestones, philosophy } from '../data/content.js'
import PageHero from '../components/ui/PageHero.jsx'
import Section from '../components/ui/Section.jsx'
import Card from '../components/ui/Card.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { useTone } from '../components/ui/ToneContext.js'
import Stats from '../components/home/Stats.jsx'
import TeamSection from '../components/home/TeamSection.jsx'
import WhyUs from '../components/home/WhyUs.jsx'
import ProcessTimeline from '../components/home/ProcessTimeline.jsx'
import Cta from '../components/home/Cta.jsx'

function Milestones() {
  const t = useTone()
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {milestones.map((m, i) => (
        <Reveal key={m.title} delay={i * 0.08} className="h-full">
          <Card className="h-full"><p className="font-display text-sm font-bold tracking-widest text-aqua">{m.when}</p>
            <h3 className={`mt-3 font-display text-xl font-bold ${t.title}`}>{m.title}</h3><p className={`mt-2 text-sm ${t.muted}`}>{m.desc}</p></Card>
        </Reveal>
      ))}
    </div>
  )
}
export default function About() {
  usePageTitle('About')
  return (
    <>
      <PageHero eyebrow="About us" title="Introducing Saabi Solutions" intro="A technology company built on a decade of hands-on experience in operations, engineering and security, with an academy that trains the people who will build what comes next." />
      <Section tone="light" eyebrow="Who we are" title="One team for the whole technology lifecycle">
        <Reveal className="max-w-3xl space-y-5 text-lg text-slate-600">
          <p>Saabi Solutions helps businesses plan, build, secure, support and modernise the technology they depend on. We combine software engineering, cybersecurity, project management and IT delivery, and we bring in vetted specialists whenever a project needs more.</p>
          <p>We also run Saabi Academy, which teaches students, youths, JAMB candidates and professionals the skills behind modern tech careers, through public and private classes.</p>
        </Reveal>
      </Section>
      <Section tone="midnight" eyebrow="Our story" title="Built on experience, grown on purpose"><Milestones /></Section>
      <Section tone="mist" eyebrow="What drives us" title="Our philosophy" center>
        <Reveal className="mx-auto max-w-3xl text-center font-display text-2xl font-semibold leading-relaxed text-slate-800">“{philosophy}”</Reveal>
      </Section>
      <Stats /><TeamSection /><WhyUs /><ProcessTimeline /><Cta />
    </>
  )
}
