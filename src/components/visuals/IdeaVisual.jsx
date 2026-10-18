import { motion } from 'framer-motion'
import { Lightbulb, Rocket } from 'lucide-react'
import Glow from './Glow.jsx'

const stages = [
  { label: 'Your idea', body: <div className="flex items-center gap-3 text-sm text-slate-300"><Lightbulb className="text-sun" size={22} /> “An app that…”</div> },
  { label: 'We shape it', body: <div className="space-y-2"><i className="block h-2 w-3/4 rounded bg-white/15" /><i className="block h-2 w-1/2 rounded bg-white/10" /><i className="block h-10 rounded bg-white/5" /></div> },
  { label: 'Live product', body: <div className="flex items-center gap-3 text-sm text-slate-300"><Rocket className="text-aqua" size={22} /> Launched and growing</div> },
]
export default function IdeaVisual() {
  return (
    <div className="relative">
      <Glow />
      <div className="relative space-y-3">
        {stages.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.35, duration: 0.5 }}
            className={`rounded-2xl border border-white/10 bg-ink p-5 shadow-xl ${i === 1 ? 'ml-6' : i === 2 ? 'ml-12' : ''}`}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-aqua">{String(i + 1).padStart(2, '0')} · {s.label}</p>{s.body}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
