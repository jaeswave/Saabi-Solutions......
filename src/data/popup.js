import { Briefcase, GraduationCap, Rocket } from 'lucide-react'
import { waLink } from '../config/site.js'
// Use `href` for external links (WhatsApp) and `to` for pages inside the site.
export const slides = [
  { icon: Briefcase, tag: 'For business owners', title: 'Own a business? Let technology do the heavy lifting.', color: 'from-brand to-indigo-700',
    points: ['Websites, apps and dashboards built to win customers', 'Security, cloud and IT support so you never go offline', 'A free 30-minute consultation with our founder'],
    cta: 'Get my free consultation', href: waLink('Hello Kliqq, I would like a free consultation for my business.') },
  { icon: GraduationCap, tag: 'Kliqq Academy', title: 'Learn a tech skill. Change your future.', color: 'from-cyan-500 to-brand',
    points: ['Software, cybersecurity, data, AI and project management', 'Hands-on projects, mentors and a certificate', 'Public classes and private training'],
    cta: 'Explore the Academy', to: '/academy' },
  { icon: Rocket, tag: 'JAMB candidates & youths', title: 'Waiting for admission? Start university with a skill.', color: 'from-amber-500 to-brand',
    points: ['Youth tech camps for ages 12 to 17', 'A pre-university skills bridge with real projects', 'Private classes at home, school or online'],
    cta: 'Reserve a spot', href: waLink('Hello Kliqq, I would like to reserve a spot in a Kliqq Academy youth or JAMB-to-Campus class.') },
]
