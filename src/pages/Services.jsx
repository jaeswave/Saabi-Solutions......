import usePageTitle from '../hooks/usePageTitle.js'
import { services, solutions } from '../data/services.js'
import PageHero from '../components/ui/PageHero.jsx'
import Section from '../components/ui/Section.jsx'
import ServiceCard from '../components/services/ServiceCard.jsx'
import PartnerNetwork from '../components/home/PartnerNetwork.jsx'
import Models from '../components/home/Models.jsx'
import FaqSection from '../components/home/FaqSection.jsx'
import Cta from '../components/home/Cta.jsx'

const grid = (list) => (
  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
    {list.map((s, i) => <ServiceCard key={s.title} service={s} detailed delay={(i % 4) * 0.06} />)}
  </div>
)
export default function Services() {
  usePageTitle('Services')
  return (
    <>
      <PageHero eyebrow="Services + Solutions" title="End-to-end technology, from first plan to long-term support" intro="Services cover every stage of the technology lifecycle. Solutions deliver the outcomes your business needs. We build the core ourselves and manage trusted partners for the rest." />
      <Section id="services" tone="light" eyebrow="Services" title="How we work with you">{grid(services)}</Section>
      <Section id="solutions" tone="mist" eyebrow="Solutions" title="What we deliver for your business" intro="Services marked With partners are delivered by vetted specialists we manage for you. Need something not listed? Ask us.">{grid(solutions)}</Section>
      <PartnerNetwork /><Models /><FaqSection /><Cta />
    </>
  )
}
