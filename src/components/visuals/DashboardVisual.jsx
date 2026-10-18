import { motion } from 'framer-motion'
import Float from './Float.jsx'
import Glow from './Glow.jsx'

const bars = [38, 55, 42, 70, 58, 82, 66, 92]
const tiles = [['Orders', '1,284'], ['Revenue', '₦4.2m'], ['Uptime', '99.9%']]
export default function DashboardVisual() {
  return (
    <div className="relative">
      <Glow />
      <div className="relative rounded-2xl border border-white/10 bg-ink p-5 shadow-2xl">
        <div className="flex items-center justify-between"><p className="font-display text-sm font-bold text-white">Live dashboard</p><span className="flex items-center gap-1.5 text-xs text-emerald-300"><i className="size-2 animate-pulse rounded-full bg-emerald-400" />Live</span></div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {tiles.map(([l, v]) => <div key={l} className="rounded-xl bg-white/5 p-3"><p className="text-[11px] text-slate-400">{l}</p><p className="mt-1 font-display text-lg font-bold text-white">{v}</p></div>)}
        </div>
        <div className="mt-5 flex h-36 items-end gap-2 rounded-xl bg-white/5 p-4">
          {bars.map((h, i) => (
            <motion.div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-brand to-aqua" initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.06 }} />
          ))}
        </div>
        <p className="mt-3 text-center text-[11px] text-slate-500">Illustration with sample data</p>
      </div>
      <Float className="-right-2 -top-4">📈 Real-time reports</Float>
      <Float className="-bottom-4 -left-2" delay={1.2}>⚡ Automated workflows</Float>
    </div>
  )
}
