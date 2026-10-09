import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { rotatingWords, trust } from '../../data/content.js'
import useRotatingIndex from '../../hooks/useRotatingIndex.js'
import NetworkCanvas from '../common/NetworkCanvas.jsx'
import Button from '../ui/Button.jsx'

export default function Hero() {
  const i = useRotatingIndex(rotatingWords.length)
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden bg-ink pb-16 pt-28">
      <NetworkCanvas />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand/25 blur-[140px]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-aqua">IT solutions · Software · Security · Academy</p>
        <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl">
          The technology behind every business that means to <span className="bg-gradient-to-r from-brand to-aqua bg-clip-text text-transparent">grow</span>.
        </h1>
        <p className="mt-6 font-display text-2xl font-semibold text-slate-200 sm:text-3xl">
          We build{' '}
          <AnimatePresence mode="wait">
            <motion.span key={rotatingWords[i]} className="inline-block text-aqua" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.25 }}>
              {rotatingWords[i]}
            </motion.span>
          </AnimatePresence>
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">From the first website to the secured network behind it, we design, deploy and support the systems your business runs on, and we train the next generation of tech talent.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button to="/contact">Talk with Saabi <ArrowRight size={16} /></Button>
          <Button to="/academy" variant="outline">Explore the Academy</Button>
        </div>
        <ul className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
          {trust.map((x) => <li key={x} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-aqua" />{x}</li>)}
        </ul>
      </div>
    </section>
  )
}
