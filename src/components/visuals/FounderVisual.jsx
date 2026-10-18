import { team } from '../../data/team.js'
import Float from './Float.jsx'
import Glow from './Glow.jsx'

const chips = ['Full stack engineering', 'Cybersecurity', 'Project management', 'Teaching']
export default function FounderVisual() {
  const f = team[0]
  return (
    <div className="relative">
      <Glow />
      <div className="relative rounded-2xl border border-white/10 bg-ink p-7 shadow-2xl">
        <div className="flex items-center gap-4">
          <span className="grid size-20 place-items-center rounded-2xl bg-gradient-to-br from-brand to-aqua font-display text-3xl font-extrabold text-ink">{f.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}</span>
          <div><p className="font-display text-xl font-bold text-white">{f.name}</p><p className="text-sm text-aqua">{f.role}</p></div>
        </div>
        <p className="mt-5 text-sm text-slate-400">{f.bio}</p>
        <div className="mt-5 flex flex-wrap gap-2">{chips.map((c) => <span key={c} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{c}</span>)}</div>
      </div>
      <Float className="-right-2 -top-4">10+ years</Float>
      <Float className="-bottom-4 -left-2" delay={1.2}>100+ students trained</Float>
    </div>
  )
}
