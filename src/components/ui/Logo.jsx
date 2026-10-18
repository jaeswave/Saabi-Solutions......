import { Link } from 'react-router-dom'
import { site } from '../../config/site.js'
export default function Logo() {
  const [name, ...rest] = site.domain.split('.')
  return (
    <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight text-white" aria-label={site.domain}>
      <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-aqua text-base text-ink">{name[0]}</span>
      <span>{name}<span className="bg-gradient-to-r from-brand to-aqua bg-clip-text text-transparent">.{rest.join('.')}</span></span>
    </Link>
  )
}
