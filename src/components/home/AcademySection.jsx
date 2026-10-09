import { ArrowRight } from 'lucide-react'
import { audiences } from '../../data/academy.js'
import Section from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'
import ServiceCard from '../services/ServiceCard.jsx'

export default function AcademySection() {
  return (
    <Section tone="light" eyebrow="Saabi Academy" title="We also train the next generation of tech talent"
      intro="Public and private classes for youths, JAMB candidates, graduates and companies. Learn software, cybersecurity, data, AI and project management with real projects and mentors.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((a, i) => <ServiceCard key={a.title} service={a} detailed delay={i * 0.06} />)}
      </div>
      <div className="mt-10 text-center"><Button to="/academy" variant="dark">Explore the Academy <ArrowRight size={16} /></Button></div>
    </Section>
  )
}
