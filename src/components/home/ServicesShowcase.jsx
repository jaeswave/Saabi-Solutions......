import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { services, solutions } from '../../data/services.js'
import Section from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'
import { useTone } from '../ui/ToneContext.js'

const tabs = { services, solutions }
const pad = (n) => String(n).padStart(2, '0')

function Explorer() {
  const t = useTone()
  const [tab, setTab] = useState('services')
  const [i, setI] = useState(0)
  const list = tabs[tab], item = list[i], Icon = item.icon
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div className="mb-5 inline-flex rounded-full bg-slate-100 p-1">
          {Object.keys(tabs).map((k) => (
            <button key={k} onClick={() => { setTab(k); setI(0) }} className={`rounded-full px-6 py-2 text-sm font-semibold capitalize transition ${tab === k ? 'bg-ink text-white' : 'text-slate-600 hover:text-ink'}`}>{k}</button>
          ))}
        </div>
        <ul className={`divide-y border-y ${t.line}`}>
          {list.map((s, n) => (
            <li key={s.title} className={t.line}>
              <button onMouseEnter={() => setI(n)} onClick={() => setI(n)} className={`flex w-full items-center gap-4 py-4 text-left transition ${n === i ? t.title : 'text-slate-500 hover:text-slate-800'}`}>
                <span className={`font-display text-sm ${n === i ? t.accent : ''}`}>{pad(n + 1)}</span>
                <span className="font-display text-lg font-semibold">{s.title}</span>
                <ArrowRight size={16} className={`ml-auto transition ${n === i ? 'opacity-100' : 'opacity-0'}`} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-3">
        <AnimatePresence mode="wait">
          <motion.div key={tab + i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="relative h-full overflow-hidden rounded-3xl bg-ink p-8 text-slate-300 sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-brand/30 blur-[90px]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="grid size-14 place-items-center rounded-2xl bg-white/10 text-aqua"><Icon size={26} /></span>
                <span className="font-display text-sm tracking-widest text-slate-500">{tab === 'services' ? 'SERVICE' : 'SOLUTION'} {pad(i + 1)} / {pad(list.length)}</span>
              </div>
              <p className="mt-8 font-display text-3xl font-bold leading-tight text-white">“{item.tagline}”</p>
              <h3 className="mt-6 font-display text-xl font-bold text-aqua">{item.title}</h3>
              <p className="mt-2 text-slate-400">{item.desc}</p>
              <ul className="mt-6 space-y-2 text-sm">{item.points.map((p) => <li key={p} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-aqua" />{p}</li>)}</ul>
              {item.partner && <p className="mt-6 inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">Delivered with vetted partners</p>}
              <div className="mt-8"><Button to={`/contact?topic=${encodeURIComponent(item.title)}`} variant="white">Discuss this <ArrowRight size={16} /></Button></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
export default function ServicesShowcase() {
  return (
    <Section id="services" tone="light" eyebrow="Services + Solutions" title="Every service, connected to an outcome" intro="Services are how we work across the technology lifecycle. Solutions are what that work delivers for your specific need.">
      <Explorer />
    </Section>
  )
}
