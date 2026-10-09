import { clients } from '../../data/clients.js'
export default function ClientsStrip() {
  if (!clients.length) return null
  return (
    <section className="overflow-hidden border-b border-slate-200 bg-white py-8">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Trusted by</p>
      <div className="flex w-max animate-marquee gap-16 font-display text-xl font-bold text-slate-400">{[...clients, ...clients].map((c, i) => <span key={i}>{c}</span>)}</div>
    </section>
  )
}
