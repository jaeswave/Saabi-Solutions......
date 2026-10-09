import { useState } from 'react'
import usePageTitle from '../hooks/usePageTitle.js'
import { projects } from '../data/projects.js'
import PageHero from '../components/ui/PageHero.jsx'
import Section from '../components/ui/Section.jsx'
import ProjectCard from '../components/portfolio/ProjectCard.jsx'
import Cta from '../components/home/Cta.jsx'

const filters = ['All', ...new Set(projects.flatMap((p) => p.tags))]

export default function Portfolio() {
  usePageTitle('Portfolio')
  const [active, setActive] = useState('All')
  const shown = active === 'All' ? projects : projects.filter((p) => p.tags.includes(active))
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Live products, built for real businesses" intro="Every project below is running today. Click through to explore the live sites." />
      <Section tone="midnight">
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${active === f ? 'border-transparent bg-gradient-to-r from-brand to-aqua font-semibold text-ink' : 'border-white/15 text-slate-300 hover:bg-white/10'}`}>{f}</button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((p, i) => <ProjectCard key={p.name} project={p} delay={(i % 3) * 0.06} />)}
        </div>
      </Section>
      <Cta />
    </>
  )
}
