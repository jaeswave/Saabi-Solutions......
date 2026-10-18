import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { site } from '../../config/site.js'
import Button from '../ui/Button.jsx'
import Logo from '../ui/Logo.jsx'

const linkClass = ({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = (onClick) => site.nav.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'} className={linkClass} onClick={onClick}>{n.label}</NavLink>)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex">{links()}</nav>
        <Button to={site.contact.to} variant="white" size="sm" className="hidden lg:inline-flex">Contact us</Button>
        <button className="text-white lg:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="grid gap-4 border-t border-white/10 px-6 py-5 lg:hidden">
          {links(() => setOpen(false))}
          <Button to={site.contact.to} onClick={() => setOpen(false)}>Contact us</Button>
        </nav>
      )}
    </header>
  )
}
