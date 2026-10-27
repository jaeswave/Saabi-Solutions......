import { ToneContext, tones } from "./ToneContext.js";
import Reveal from "./Reveal.jsx";

export default function Split({
  id,
  tone = "light",
  eyebrow,
  title,
  intro,
  children,
  visual,
  reverse = false,
}) {
  const t = tones[tone];
  return (
    <ToneContext.Provider value={t}>
      <section id={id} className={`relative overflow-hidden ${t.bg}`}>
        {/* ADDED min-w-0 TO THIS DIV */}
        <div className="mx-auto grid min-w-0 max-w-6xl items-center gap-14 px-6 py-24 sm:py-28 lg:grid-cols-2 lg:gap-20">
          {/* ADDED min-w-0 HERE */}
          <Reveal className={`min-w-0 ${reverse ? "lg:order-2" : ""}`}>
            {eyebrow && (
              <p
                className={`mb-3 text-sm font-semibold uppercase tracking-widest ${t.accent}`}
              >
                {eyebrow}
              </p>
            )}
            <h2
              className={`font-display text-4xl font-bold tracking-tight sm:text-5xl ${t.title}`}
            >
              {title}
            </h2>
            {intro && <p className={`mt-5 text-lg ${t.muted}`}>{intro}</p>}
            {children}
          </Reveal>

          {/* ADDED min-w-0 HERE */}
          <Reveal
            delay={0.12}
            className={`mx-auto w-full min-w-0 max-w-md lg:max-w-none ${reverse ? "lg:order-1" : ""}`}
          >
            {visual}
          </Reveal>
        </div>
      </section>
    </ToneContext.Provider>
  );
}
