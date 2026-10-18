import { Lightbulb } from 'lucide-react'
import { waLink } from '../../config/site.js'
export default function IdeaButton() {
  return (
    <a href={waLink('Hello Kliqq, I have an idea I would like you to build.')} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-20 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-aqua px-5 py-3 text-sm font-semibold text-ink shadow-lg shadow-brand/30 transition hover:scale-105">
      <Lightbulb size={18} /> Got an idea?
    </a>
  )
}
