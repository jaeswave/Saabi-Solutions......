import usePageTitle from '../hooks/usePageTitle.js'
import { ideaSteps, ideaTypes, ideaFaqs } from '../data/idea.js'
import { waLink } from '../config/site.js'
import PageHero from '../components/ui/PageHero.jsx'
import Section from '../components/ui/Section.jsx'
import Split from '../components/ui/Split.jsx'
import CheckList from '../components/ui/CheckList.jsx'
import Card from '../components/ui/Card.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import FaqSection from '../components/home/FaqSection.jsx'
import Cta from '../components/home/Cta.jsx'
import IdeaVisual from '../components/visuals/IdeaVisual.jsx'
import ShieldVisual from '../components/visuals/ShieldVisual.jsx'
import { useTone } from '../components/ui/ToneContext.js'

function Steps() {
  const t = useTone()
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {ideaSteps.map((s, i) => (
        <Reveal key={s.title} delay={i * 0.08} className="h-full">
          <Card className="h-full">
            <span className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-brand to-aqua font-display font-bold text-ink">{i + 1}</span>
            <h3 className={`mt-4 font-display text-xl font-bold ${t.title}`}>{s.title}</h3><p className={`mt-2 text-sm ${t.muted}`}>{s.desc}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
function Types() {
  const t = useTone()
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {ideaTypes.map((x, i) => (
        <Reveal key={x.title} delay={(i % 4) * 0.06} className="h-full">
          <Card className="h-full !p-6"><h3 className={`font-display font-bold ${t.title}`}>{x.title}</h3><p className={`mt-2 text-sm ${t.muted}`}>{x.desc}</p></Card>
        </Reveal>
      ))}
    </div>
  )
}
export default function Ideas() {
  usePageTitle('Your Idea')
  return (
    <>
      <PageHero eyebrow="Your idea" title="Got a fantastic idea? We will tech it for you." visual={<IdeaVisual />}
        intro="Bring us the idea, even a rough one. We turn it into a working product, from design and development to security and launch." />
      <Section tone="light" eyebrow="How it works" title="From idea to launch in four steps"><Steps />
        <div className="mt-10 text-center"><Button href={waLink('Hello Kliqq, I have an idea I would like you to build.')} variant="dark">Share your idea on WhatsApp</Button></div>
      </Section>
      <Split tone="dark" eyebrow="Your idea is safe" title="Your idea stays yours" visual={<ShieldVisual />}
        intro="Great ideas are valuable, so we treat them that way from the first conversation.">
        <CheckList items={[{ title: 'Confidentiality first', desc: 'We sign an NDA on request before you share any details.' }, { title: 'Clear scope and cost', desc: 'You know what version one includes and what it costs before we start.' }, { title: 'Ownership in writing', desc: 'Ownership terms are agreed before work begins.' }]} />
      </Split>
      <Section tone="sky" eyebrow="What we can build" title="Ideas we turn into products"><Types /></Section>
      <FaqSection items={ideaFaqs} /><Cta />
    </>
  )
}
