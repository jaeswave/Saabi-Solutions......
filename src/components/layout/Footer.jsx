import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { site } from "../../config/site.js";
import { services } from "../../data/services.js";
import Logo from "../ui/Logo.jsx";

// Strip everything except digits
const digitsOnly = (raw) => raw.replace(/\D/g, "");

// Format digits into a readable phone string
const prettyPhone = (raw) => {
  const d = digitsOnly(raw);
  if (d.startsWith("234") && d.length === 13) {
    return `+234 ${d.slice(3, 6)} ${d.slice(6, 9)} ${d.slice(9)}`;
  }
  if (d.startsWith("1") && d.length === 11) {
    return `+1 ${d.slice(1, 4)} ${d.slice(4, 7)} ${d.slice(7)}`;
  }
  return `+${d}`;
};

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
                <a href={`tel:${digitsOnly(p)}`} className="hover:text-white">
                  {p}
                </a>
              </li>
            ))}

            {/* WhatsApp numbers */}
            {site.whatsapps.map((w) => {
              const digits = digitsOnly(w);
              return (
                <li key={digits} className="flex gap-2">
                  <MessageCircle
                    size={16}
                    className="mt-0.5 shrink-0 text-aqua"
                  />
                  <a
                    href={`https://wa.me/${digits}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    WhatsApp: {prettyPhone(w)}
                  </a>
                </li>
              );
            })}

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
        <p className="mt-2">© 2020 {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
