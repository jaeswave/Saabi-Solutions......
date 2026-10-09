import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Check, Sparkles } from 'lucide-react'
import { slides } from '../../data/popup.js'
import Button from '../ui/Button.jsx'

const read = (s, k) => { try { return s.getItem(k) } catch { return null } }
const write = (s, k, v) => { try { s.setItem(k, v) } catch { /* storage unavailable */ } }
const KEY = 'saabi-popup'

export default function AdPopup() {
  const [open, setOpen] = useState(false)
  const [i, setI] = useState(0)
  const close = () => setOpen(false)
  const never = () => { write(localStorage, KEY + '-off', '1'); close() }

  useEffect(() => {
    if (read(localStorage, KEY + '-off') || read(sessionStorage, KEY + '-seen')) return
    const id = setTimeout(() => { setOpen(true); write(sessionStorage, KEY + '-seen', '1') }, 2500)
    return () => clearTimeout(id)
  }, [])
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && close()
    document.body.style.overflow = 'hidden'; addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; removeEventListener('keydown', onKey) }
  }, [open])

  const s = slides[i], Icon = s.icon
  const go = (d) => setI((i + d + slides.length) % slides.length)
  return (
    <>
      {!open && (
        <button onClick={() => setOpen(true)} className="fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-lg transition hover:scale-105">
          <Sparkles size={16} className="text-brand" /> Offers & Academy
        </button>
      )}
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}>
            <motion.div role="dialog" aria-modal="true" aria-label="Special offers" onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }} transition={{ type: 'spring', damping: 24, stiffness: 260 }}
              className="relative grid w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-5">
              <button onClick={close} aria-label="Close" className="absolute right-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-black/10 text-slate-700 transition hover:bg-black/20 md:text-white md:bg-white/20 md:hover:bg-white/30"><X size={18} /></button>
              <div className={`relative grid place-items-center bg-gradient-to-br p-8 text-white md:col-span-2 ${s.color}`}>
                <div className="text-center"><span className="mx-auto grid size-20 place-items-center rounded-3xl bg-white/20 backdrop-blur"><Icon size={38} /></span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em]">{s.tag}</p></div>
              </div>
              <div className="p-7 text-slate-700 sm:p-9 md:col-span-3">
                <AnimatePresence mode="wait">
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
                    <h2 className="font-display text-2xl font-extrabold leading-tight text-slate-900 sm:text-3xl">{s.title}</h2>
                    <ul className="mt-5 space-y-3">{s.points.map((p) => <li key={p} className="flex gap-2"><Check size={18} className="mt-0.5 shrink-0 text-brand" />{p}</li>)}</ul>
                    <Button to={s.to} variant="dark" className="mt-7 w-full sm:w-auto" onClick={close}>{s.cta}</Button>
                  </motion.div>
                </AnimatePresence>
                <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <button onClick={() => go(-1)} aria-label="Previous" className="grid size-8 place-items-center rounded-full border border-slate-300 hover:bg-slate-100"><ChevronLeft size={16} /></button>
                    {slides.map((_, n) => <button key={n} onClick={() => setI(n)} aria-label={`Slide ${n + 1}`} className={`h-2 rounded-full transition-all ${n === i ? 'w-6 bg-brand' : 'w-2 bg-slate-300'}`} />)}
                    <button onClick={() => go(1)} aria-label="Next" className="grid size-8 place-items-center rounded-full border border-slate-300 hover:bg-slate-100"><ChevronRight size={16} /></button>
                  </div>
                  <button onClick={never} className="text-slate-500 underline hover:text-slate-800">Do not show again</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
