import Reveal from "./Reveal.jsx";

// Optional visual shows beside the text on desktop (use a component from components/visuals or <ImageFrame />)
export default function PageHero({ eyebrow, title, intro, visual }) {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-36">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand/25 blur-[130px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-aqua/15 blur-[110px]" />

      {/* ADDED min-w-0 TO THIS DIV */}
      <div
        className={`relative mx-auto grid min-w-0 max-w-6xl items-center gap-14 px-6 ${visual ? "lg:grid-cols-2" : ""}`}
      >
        {/* ADDED min-w-0 HERE */}
        <Reveal className="min-w-0">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-aqua">
            {eyebrow}
          </p>
          <h1
            className={`font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl ${visual ? "" : "max-w-3xl"}`}
          >
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">{intro}</p>
        </Reveal>

        {/* ADDED min-w-0 HERE */}
        {visual && (
          <Reveal
            delay={0.15}
            className="mx-auto w-full min-w-0 max-w-md lg:max-w-none"
          >
            {visual}
          </Reveal>
        )}
      </div>
    </section>
  );
}
