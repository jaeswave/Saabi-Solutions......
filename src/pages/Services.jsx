import usePageTitle from '../hooks/usePageTitle.js'
import PageHero from '../components/ui/PageHero.jsx'
import CodeWindow from '../components/visuals/CodeWindow.jsx'
import ServicesShowcase from '../components/home/ServicesShowcase.jsx'
import PartnerNetwork from '../components/home/PartnerNetwork.jsx'
import Models from '../components/home/Models.jsx'
import FaqSection from '../components/home/FaqSection.jsx'
import Cta from '../components/home/Cta.jsx'

export default function Services() {
  usePageTitle('Services')
  return (
    <>
      <PageHero visual={<CodeWindow />} eyebrow="Services" title="End-to-end technology, from first plan to long-term support" intro="Eight services that cover every stage of the technology lifecycle. We build the core ourselves and manage trusted partners for the rest." />
      <ServicesShowcase kind="services" eyebrow="Our services" title="How we work with you" intro="Hover or tap a service to see exactly what is included." />
      <PartnerNetwork /><Models /><FaqSection /><Cta />
    </>
  )
}
