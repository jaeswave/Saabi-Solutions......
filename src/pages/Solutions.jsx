import usePageTitle from '../hooks/usePageTitle.js'
import PageHero from '../components/ui/PageHero.jsx'
import PhoneVisual from '../components/visuals/PhoneVisual.jsx'
import ServicesShowcase from '../components/home/ServicesShowcase.jsx'
import Industries from '../components/home/Industries.jsx'
import Cta from '../components/home/Cta.jsx'

export default function Solutions() {
  usePageTitle('Solutions')
  return (
    <>
      <PageHero visual={<PhoneVisual />} eyebrow="Solutions" title="Ready-made answers to the problems businesses actually have" intro="From school platforms and payment systems to CCTV, POS and smart-office setups, these are the outcomes our services deliver." />
      <ServicesShowcase kind="solutions" eyebrow="Our solutions" title="What we deliver for your business" intro="Solutions marked as delivered with partners are handled by vetted specialists we manage for you." />
      <Industries /><Cta />
    </>
  )
}
