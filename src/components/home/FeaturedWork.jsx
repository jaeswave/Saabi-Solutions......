import { ArrowRight } from 'lucide-react'
import { projects } from '../../data/projects.js'
import Section from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'
import ProjectCard from '../portfolio/ProjectCard.jsx'

export default function FeaturedWork() {
  return (
    <Section tone="midnight" eyebrow="Portfolio" title="Real websites. Live right now." intro="A selection of products we have built and shipped. Click any project to open the live site.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((p, i) => <ProjectCard key={p.name} project={p} delay={i * 0.08} />)}
      </div>
      <div className="mt-10 text-center"><Button to="/portfolio" variant="outline">View all projects <ArrowRight size={16} /></Button></div>
    </Section>
  )
}
