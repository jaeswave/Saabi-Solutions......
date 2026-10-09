import { MessageCircle } from 'lucide-react'
import { site } from '../../config/site.js'
export default function WhatsAppButton() {
  return (
    <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition hover:scale-105">
      <MessageCircle size={18} /> WhatsApp
    </a>
  )
}
