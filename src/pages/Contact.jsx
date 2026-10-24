import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle.js";
import { site, waLink } from "../config/site.js";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Button from "../components/ui/Button.jsx";
import FaqSection from "../components/home/FaqSection.jsx";

// digits-only for tel: / wa.me links
const digits = (s) => String(s).replace(/\s+/g, "");

// pretty-print a 234... number
const prettyPhone = (raw) => {
  const d = digits(raw);
  return d.startsWith("234")
    ? `+234 ${d.slice(3, 6)} ${d.slice(6, 9)} ${d.slice(9)}`
    : `+${d}`;
};

// Build the details cards from arrays — every number shows up
const details = [
  ...site.phones.map((p) => ({
    icon: Phone,
    label: "Call us",
    value: p,
    href: `tel:${digits(p)}`,
  })),
  ...site.whatsapps.map((w) => ({
    icon: MessageCircle,
    label: "WhatsApp",
    value: prettyPhone(w),
    href: waLink("Hello Kliqq, I'd like to talk about a project.", w),
    external: true,
  })),
  {
    icon: Mail,
    label: "Email us",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  { icon: MapPin, label: "Location", value: site.location },
];

export default function Contact() {
  usePageTitle("Contact");
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let us talk about your project"
        intro="The fastest way to reach us is WhatsApp. Call or email if you prefer. We reply within one business day."
      />

      <Section tone="light">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Start a conversation
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tell us what you need, or ask about the Academy. No pressure, no
            slide deck.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              href={waLink(
                "Hello Kliqq, I would like to talk about a project.",
              )}
              variant="dark"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </Button>
            <Button href={`mailto:${site.email}`} variant="dark">
              <Mail size={18} /> Send an email
            </Button>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {details.map(({ icon: Icon, label, value, href, external }, i) => (
            <Reveal
              key={`${label}-${value}`}
              delay={i * 0.05}
              className="h-full"
            >
              <Card className="h-full text-center">
                <span className="mx-auto grid size-12 place-items-center rounded-xl bg-brand/10 text-brand">
                  <Icon size={22} />
                </span>
                <p className="mt-4 text-xs uppercase tracking-wider text-slate-500">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="mt-1 block font-medium text-slate-900 hover:text-brand"
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 font-medium text-slate-900">{value}</p>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <FaqSection />
    </>
  );
}
