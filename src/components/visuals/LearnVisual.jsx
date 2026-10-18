import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import Float from './Float.jsx'
import Glow from './Glow.jsx'

const paths = [['Software Engineering', 80], ['Cybersecurity', 60], ['Data Analysis', 45]]
export default function LearnVisual() {
  return (
    <div className="relative">
      <Glow />
      <div className="relative rounded-2xl border border-white/10 bg-ink p-6 shadow-2xl">
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand to-aqua text-ink"><GraduationCap size={22} /></span>
          <div><p className="font-display font-bold text-white">Your learning path</p><p className="text-xs text-slate-400">Projects, mentors, certificate</p></div>
        </div>
        <div className="mt-6 space-y-5">
          {paths.map(([name, pct], i) => (
            <div key={name}>
              <div className="mb-1.5 flex justify-between text-xs text-slate-300"><span>{name}</span><span>{pct}%</span></div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-brand to-aqua" initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 + i * 0.15 }} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-[11px] text-slate-500">Illustration</p>
      </div>
      <Float className="-right-2 -top-4">🎓 Certificate</Float>
      <Float className="-bottom-4 -left-2" delay={1.2}>🧑‍🏫 Real mentors</Float>
    </div>
  )
}
