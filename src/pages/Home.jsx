import usePageTitle from '../hooks/usePageTitle.js'
import Hero from '../components/home/Hero.jsx'
import ClientsStrip from '../components/home/ClientsStrip.jsx'
import TechMarquee from '../components/home/TechMarquee.jsx'
import WhatWeDo from '../components/home/WhatWeDo.jsx'
import ServicesTeaser from '../components/home/ServicesTeaser.jsx'
import BuildSplit from '../components/home/BuildSplit.jsx'
import FeaturedWork from '../components/home/FeaturedWork.jsx'
import Stats from '../components/home/Stats.jsx'
import SecuritySplit from '../components/home/SecuritySplit.jsx'
import Cta from '../components/home/Cta.jsx'

// Landing page = overview only. Academy, Your Idea and About live on their own pages.
export default function Home() {
  usePageTitle()
  return (
    <>
      <Hero /><ClientsStrip /><TechMarquee /><WhatWeDo /><ServicesTeaser /><BuildSplit />
      <Stats /><SecuritySplit /><Cta />
    </>
  )
}
