import usePageTitle from '../hooks/usePageTitle.js'
import Hero from '../components/home/Hero.jsx'
import ClientsStrip from '../components/home/ClientsStrip.jsx'
import TechMarquee from '../components/home/TechMarquee.jsx'
import WhatWeDo from '../components/home/WhatWeDo.jsx'
import ServicesShowcase from '../components/home/ServicesShowcase.jsx'
import PartnerNetwork from '../components/home/PartnerNetwork.jsx'
import FeaturedWork from '../components/home/FeaturedWork.jsx'
import Stats from '../components/home/Stats.jsx'
import AcademySection from '../components/home/AcademySection.jsx'
import Industries from '../components/home/Industries.jsx'
import TeamSection from '../components/home/TeamSection.jsx'
import FaqSection from '../components/home/FaqSection.jsx'
import Cta from '../components/home/Cta.jsx'

export default function Home() {
  usePageTitle()
  return (
    <>
      <Hero /><ClientsStrip /><TechMarquee /><WhatWeDo /><ServicesShowcase /><PartnerNetwork /><FeaturedWork />
      <Stats /><AcademySection /><Industries /><TeamSection /><FaqSection /><Cta />
    </>
  )
}
