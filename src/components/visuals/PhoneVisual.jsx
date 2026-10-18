import { Zap, Wifi, Tv, GraduationCap } from 'lucide-react'
import Float from './Float.jsx'
import Glow from './Glow.jsx'

const items = [[Zap, 'Electricity'], [Wifi, 'Internet'], [Tv, 'Cable TV'], [GraduationCap, 'School fees']]
export default function PhoneVisual() {
  return (
    <div className="relative mx-auto w-64">
      <Glow />
      <div className="relative rounded-[2.5rem] border-[10px] border-slate-800 bg-ink p-4 shadow-2xl">
        <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-slate-700" />
        <p className="font-display text-sm font-bold text-white">Pay bills</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {items.map(([Icon, label]) => (
            <div key={label} className="rounded-xl bg-white/5 p-3 text-center"><Icon size={20} className="mx-auto text-aqua" /><p className="mt-1.5 text-[11px] text-slate-300">{label}</p></div>
          ))}
        </div>
        <div className="mt-4 rounded-xl bg-gradient-to-r from-brand to-aqua py-2.5 text-center text-xs font-bold text-ink">Pay now</div>
        <div className="mt-3 h-14 rounded-xl bg-white/5" />
      </div>
      <Float className="-right-8 top-16">✓ Payment successful</Float>
      <Float className="-left-8 bottom-16" delay={1.4}>🔒 Secure checkout</Float>
    </div>
  )
}
