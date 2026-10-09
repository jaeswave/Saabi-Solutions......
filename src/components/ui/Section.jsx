import { ToneContext, tones } from './ToneContext.js'
import Reveal from './Reveal.jsx'

export default function Section({ id, tone = 'dark', eyebrow, title, intro, center = false, compact = false, children }) {
  const t = tones[tone]
  return (
    <ToneContext.Provider value={t}>
      <section id={id} className={`relative overflow-hidden ${t.bg}`}>
        <div className={`mx-auto max-w-6xl px-6 ${compact ? 'py-14' : 'py-24 sm:py-28'}`}>
          {title && (
            <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
              {eyebrow && <p className={`mb-3 text-sm font-semibold uppercase tracking-widest ${t.accent}`}>{eyebrow}</p>}
              <h2 className={`font-display text-4xl font-bold tracking-tight sm:text-5xl ${t.title}`}>{title}</h2>
              {intro && <p className={`mt-5 text-lg ${t.muted}`}>{intro}</p>}
            </Reveal>
          )}
          <div className={title ? 'mt-14' : ''}>{children}</div>
        </div>
      </section>
    </ToneContext.Provider>
  )
}
