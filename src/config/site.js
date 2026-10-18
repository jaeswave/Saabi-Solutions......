export const site = {
  name: 'Kliqq',
  domain: 'kliqq.it.com',
  email: 'oladeletijani89@gmail.com',
  phone: '+234 802 244 0045',
  whatsapp: '2348022440045', // digits only, with country code
  location: 'Lagos, Nigeria · Working worldwide',
  nav: [
    { label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: 'Solutions', to: '/solutions' },
    { label: 'Portfolio', to: '/portfolio' }, { label: 'Academy', to: '/academy' }, { label: 'Your Idea', to: '/ideas' }, { label: 'About', to: '/about' },
  ],
  contact: { label: 'Contact', to: '/contact' },
}
// Builds a WhatsApp link with a ready-typed message
export const waLink = (text = '') => `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`
