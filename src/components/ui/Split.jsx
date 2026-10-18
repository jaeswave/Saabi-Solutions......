import { ToneContext, tones } from './ToneContext.js'
import Reveal from './Reveal.jsx'

// Two-column section: text on one side, a visual on the other. reverse swaps the sides on desktop.
export default function Split({ id, tone = 'light', eyebrow, title, intro, children, visual, reverse = false }) {
  const t = tones[tone]
  return (
    <ToneContext.Provider value={t}>
      <section id={id} className={`relative overflow-hidden ${t.bg}`}>
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 sm:py-28 lg:grid-cols-2 lg:gap-20">
          <Reveal className={reverse ? 'lg:order-2' : ''}>
            {eyebrow && <p className={`mb-3 text-sm font-semibold uppercase tracking-widest ${t.accent}`}>{eyebrow}</p>}
            <h2 className={`font-display text-4xl font-bold tracking-tight sm:text-5xl ${t.title}`}>{title}</h2>
            {intro && <p className={`mt-5 text-lg ${t.muted}`}>{intro}</p>}
            {children}
          </Reveal>
          <Reveal delay={0.12} className={`mx-auto w-full max-w-md lg:max-w-none ${reverse ? 'lg:order-1' : ''}`}>{visual}</Reveal>
        </div>
      </section>
    </ToneContext.Provider>
  )
}
