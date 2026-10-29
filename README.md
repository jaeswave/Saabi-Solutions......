# Kliqq Solutions website

Vite + React (JavaScript) + React Router + Tailwind CSS 4.

    npm install
    npm run dev        # local preview
    npm run build      # production files in /dist

## Folder structure

    src/
      main.jsx, App.jsx      entry and routes
      index.css              Tailwind import + brand theme only (all styling is in components)
      config/site.js         name, email, phone, WhatsApp, nav
      data/                  ALL editable content (services, projects, industries, faqs...)
      layouts/MainLayout     navbar + page + footer
      pages/                 Home, Services, Portfolio, About, Contact, NotFound
      hooks/                 useRotatingIndex, usePageTitle
      components/
        layout/              Navbar, Footer, WhatsAppButton, ScrollProgress, ScrollToTop
        ui/                  Section (background tones), Card, Button, Badge, Reveal, CountUp, PageHero
        home/                sections used on Home (and reused on other pages)
        services/ portfolio/ common/   feature components

## Common edits

- Services (and the "With partners" badge): src/data/services.js
- Portfolio projects and URLs: src/data/projects.js
- Contact details: src/config/site.js
- Brand colours/fonts: @theme block in src/index.css
- Section background: tone prop (dark, midnight, light, mist, sky, brand) in src/components/ui/ToneContext.js
- Deploying: public/\_redirects makes page links work on Netlify. On other hosts, route all paths to index.html.

## Added in this version

- Kliqq Academy page (src/pages/Academy.jsx, content in src/data/academy.js)
- Welcome pop-up with 3 offers (src/components/common/AdPopup.jsx, content in src/data/popup.js). Shows once per visit, can be dismissed forever.
- Services + Solutions explorer (src/components/home/ServicesShowcase.jsx, content in src/data/services.js)
- Team (src/data/team.js) and Trusted-by strip (src/data/clients.js, hidden until you add clients)
