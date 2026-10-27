export const site = {
  name: "Kliqq",
  domain: "kliqq.it.com",
  email: "info@kliqq.it.com",

  // Both phone numbers
  phones: ["+234 812 726 5813", "+234 8071939484"],

  // Both WhatsApp numbers (digits only, with country code)
  whatsapps: ["+1 415 286-4560", "+234 8071939484", "+234 812 726 5813"],
  // Defaults used by CTAs / floating buttons
  primaryPhone: "+234 812 726 5813",
  primaryWhatsapp: "+234 8071939484",

  location: "Lagos, Nigeria · Working worldwide",

  nav: [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Solutions", to: "/solutions" },
    { label: "Portfolio", to: "/portfolio" },
    { label: "Academy", to: "/academy" },
    { label: "Your Idea", to: "/ideas" },
    { label: "About", to: "/about" },
  ],
  contact: { label: "Contact", to: "/contact" },
};

// Builds a WhatsApp link with a ready-typed message.
// Pass a specific number to override the default (primary) number.
export const waLink = (text = "", number = site.primaryWhatsapp) =>
  `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
