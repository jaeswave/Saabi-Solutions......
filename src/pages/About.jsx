import usePageTitle from "../hooks/usePageTitle.js";
import { milestones, philosophy } from "../data/content.js";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import Split from "../components/ui/Split.jsx";
import Card from "../components/ui/Card.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import { useTone } from "../components/ui/ToneContext.js";
import Stats from "../components/home/Stats.jsx";
import TeamSection from "../components/home/TeamSection.jsx";
import WhyUs from "../components/home/WhyUs.jsx";
import ProcessTimeline from "../components/home/ProcessTimeline.jsx";
import Cta from "../components/home/Cta.jsx";
import DashboardVisual from "../components/visuals/DashboardVisual.jsx";

function Milestones() {
  const t = useTone();
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {milestones.map((m, i) => (
        <Reveal key={m.title} delay={i * 0.08} className="h-full">
          <Card className="h-full">
            <p className="font-display text-sm font-bold tracking-widest text-aqua">
              {m.when}
            </p>
            <h3 className={`mt-3 font-display text-xl font-bold ${t.title}`}>
              {m.title}
            </h3>
            <p className={`mt-2 text-sm ${t.muted}`}>{m.desc}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

const values = [
  {
    title: "Clarity over jargon",
    desc: "We explain the work in plain language, so decisions are made with confidence — not confusion.",
  },
  {
    title: "Security by default",
    desc: "Every build starts with security in mind, not as an afterthought bolted on at the end.",
  },
  {
    title: "Built to last",
    desc: "We ship systems that are maintainable, documented and ready to grow with your business.",
  },
  {
    title: "Partnership, not handoff",
    desc: "We stay involved after launch — supporting, improving and modernising what we build.",
  },
];

function Values() {
  const t = useTone();
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {values.map((v, i) => (
        <Reveal key={v.title} delay={i * 0.06} className="h-full">
          <Card className="h-full">
            <h3 className={`font-display text-xl font-bold ${t.title}`}>
              {v.title}
            </h3>
            <p className={`mt-2 text-sm ${t.muted}`}>{v.desc}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

const capabilities = [
  {
    area: "Software",
    items: [
      "Web applications",
      "Internal tools",
      "APIs & integrations",
      "Automation",
    ],
  },
  {
    area: "Security",
    items: [
      "Vulnerability assessments",
      "Hardening",
      "Monitoring",
      "Incident response",
    ],
  },
  {
    area: "IT & Delivery",
    items: [
      "Project management",
      "Cloud setup",
      "Support retainers",
      "Modernisation",
    ],
  },
  {
    area: "Academy",
    items: [
      "Public classes",
      "Private cohorts",
      "JAMB prep",
      "Career mentoring",
    ],
  },
];

function Capabilities() {
  const t = useTone();
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {capabilities.map((c, i) => (
        <Reveal key={c.area} delay={i * 0.06} className="h-full">
          <Card className="h-full">
            <h3 className={`font-display text-lg font-bold ${t.title}`}>
              {c.area}
            </h3>
            <ul className={`mt-3 space-y-1.5 text-sm ${t.muted}`}>
              {c.items.map((it) => (
                <li key={it}>· {it}</li>
              ))}
            </ul>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

export default function About() {
  usePageTitle("About");
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Introducing Kliqq"
        visual={<DashboardVisual />}
        intro="A technology company built on years of hands-on experience in operations, engineering and security, with an academy that trains the people who will build what comes next."
      />

      <Split
        tone="light"
        eyebrow="Who we are"
        title="One team for the whole technology lifecycle"
        visual={<DashboardVisual />}
      >
        <div className="mt-6 space-y-5 text-lg text-slate-600">
          <p>
            Kliqq helps businesses plan, build, secure, support and modernise
            the technology they depend on. We combine software engineering,
            cybersecurity, project management and IT delivery, and we bring in
            vetted specialists whenever a project needs more.
          </p>
          <p>
            We also run Kliqq Academy, which teaches students, youths, JAMB
            candidates and professionals the skills behind modern tech careers,
            through public and private classes.
          </p>
        </div>
      </Split>

      <Section
        tone="midnight"
        eyebrow="Our story"
        title="Built on experience, grown on purpose"
      >
        <Milestones />
      </Section>

      <Section
        tone="light"
        eyebrow="What we do"
        title="Capabilities across the stack"
      >
        <Capabilities />
      </Section>

      <Section tone="mist" eyebrow="What drives us" title="How we work">
        <Values />
      </Section>

      <Section
        tone="light"
        eyebrow="Our philosophy"
        title="What we believe"
        center
      >
        <Reveal className="mx-auto max-w-3xl text-center font-display text-2xl font-semibold leading-relaxed text-slate-800">
          “{philosophy}”
        </Reveal>
      </Section>

      <Stats />
      <TeamSection />
      <WhyUs />
      <ProcessTimeline />
      <Cta />
    </>
  );
}
