import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { site } from "../../config/site.js";
import { services } from "../../data/services.js";
import Logo from "../ui/Logo.jsx";

// Format a digits-only number into a readable phone string (best-effort)
const prettyPhone = (raw) =>
  raw.startsWith("234")
    ? `+234 ${raw.slice(3, 6)} ${raw.slice(6, 9)} ${raw.slice(9)}`
    : `+${raw}`;

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-slate-400">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm">
            Software, security and IT solutions for ambitious businesses,
            delivered by our team and a network of trusted partners.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-display font-bold text-white">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[...site.nav, site.contact].map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact — email, both phones, both WhatsApps, location */}
        <div>
          <h4 className="font-display font-bold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {/* Email */}
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-aqua" />
              <a
                href={`mailto:${site.email}`}
                className="hover:text-white break-all"
              >
                {site.email}
              </a>
            </li>

            {/* Both phone numbers */}
            {site.phones.map((p) => (
              <li key={p} className="flex gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-aqua" />
                <a
                  href={`tel:${p.replace(/\s+/g, "")}`}
                  className="hover:text-white"
                >
                  {p}
                </a>
              </li>
            ))}

            {/* Both WhatsApp numbers */}
            {site.whatsapps.map((w) => (
              <li key={w} className="flex gap-2">
                <MessageCircle
                  size={16}
                  className="mt-0.5 shrink-0 text-aqua"
                />
                <a
                  href={`https://wa.me/${w}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp: {prettyPhone(w)}
                </a>
              </li>
            ))}

            {/* Location */}
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-aqua" />
              {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs">
        <p className="mx-auto max-w-6xl">
          {services
            .slice(0, 6)
            .map((s) => s.title)
            .join(" · ")}
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
