import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle.js";
import { site } from "../config/site.js";
import PageHero from "../components/ui/PageHero.jsx";
import Section from "../components/ui/Section.jsx";
import Card from "../components/ui/Card.jsx";
import Reveal from "../components/ui/Reveal.jsx";
import Button from "../components/ui/Button.jsx";
import FaqSection from "../components/home/FaqSection.jsx";

const waText = encodeURIComponent(
  "Hello Saabi Solutions, I would like to talk about a project.",
);

const details = [
  {
    icon: Phone,
    label: "Call us",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
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
              href={`https://wa.me/${site.whatsapp}?text=${waText}`}
              variant="dark"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </Button>
            <Button href={`mailto:${site.email}`} variant="dark">
              <Mail size={18} /> Send an email
            </Button>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {details.map(({ icon: Icon, label, value, href }, i) => (
            <Reveal key={label} delay={i * 0.08} className="h-full">
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
