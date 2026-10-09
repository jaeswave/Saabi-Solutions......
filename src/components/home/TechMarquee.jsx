import { stack } from '../../data/content.js'
export default function TechMarquee() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-10">
      <p className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-slate-400">Built with tools the best teams trust</p>
      <div className="flex w-max animate-marquee gap-14 font-display text-2xl font-bold text-slate-300">
        {[...stack, ...stack].map((s, i) => <span key={i}>{s}</span>)}
      </div>
    </section>
  )
}
