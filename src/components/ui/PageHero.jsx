import Reveal from './Reveal.jsx'
export default function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-36">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand/25 blur-[130px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-aqua/15 blur-[110px]" />
      <Reveal className="relative mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-aqua">{eyebrow}</p>
        <h1 className="max-w-3xl font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">{intro}</p>
      </Reveal>
    </section>
  )
}
