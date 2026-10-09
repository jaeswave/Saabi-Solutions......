import { Link } from 'react-router-dom'
import { site } from '../../config/site.js'
export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight text-white">
      <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-aqua text-sm text-ink">S</span>
      {site.name}
    </Link>
  )
}
