import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { site } from '../../config/site.js'
import { services } from '../../data/services.js'
import Logo from '../ui/Logo.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm">Software, security and IT solutions for ambitious businesses, delivered by our team and a network of trusted partners.</p>
        </div>
        <div>
          <h4 className="font-display font-bold text-white">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">{site.nav.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-white">{n.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-aqua" />{site.email}</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-aqua" />{site.phone}</li>
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-aqua" />{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs">
        <p className="mx-auto max-w-6xl">{services.slice(0, 6).map((s) => s.title).join(' · ')}</p>
        <p className="mt-2">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
