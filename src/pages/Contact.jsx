import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'
import usePageTitle from '../hooks/usePageTitle.js'
import { site } from '../config/site.js'
import PageHero from '../components/ui/PageHero.jsx'
import Section from '../components/ui/Section.jsx'
import Card from '../components/ui/Card.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import ContactForm from '../components/common/ContactForm.jsx'
import FaqSection from '../components/home/FaqSection.jsx'

const details = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${site.whatsapp}` },
  { icon: MapPin, label: 'Location', value: site.location },
]

export default function Contact() {
  usePageTitle('Contact')
  return (
    <>
      <PageHero eyebrow="Contact" title="Let us talk about your project" intro="Share what you need, even if it is not on our service list. We reply within one business day." />
      <Section tone="light">
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3"><Card className="!p-8"><ContactForm /></Card></Reveal>
          <div className="grid content-start gap-4 lg:col-span-2">
            {details.map(({ icon: Icon, label, value, href }, i) => (
              <Reveal key={label} delay={i * 0.07}>
                <Card className="flex items-center gap-4 !p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand"><Icon size={20} /></span>
                  <div><p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
                    {href ? <a href={href} className="font-medium text-slate-900 hover:text-brand">{value}</a> : <p className="font-medium text-slate-900">{value}</p>}</div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
      <FaqSection />
    </>
  )
}
