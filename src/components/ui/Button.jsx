import { Link } from 'react-router-dom'
const variants = {
  primary: 'bg-gradient-to-r from-brand to-aqua text-ink hover:scale-105',
  outline: 'border border-white/30 text-white hover:bg-white/10',
  white: 'bg-white text-ink hover:bg-aqua',
  dark: 'bg-ink text-white hover:bg-slate-800',
}
const sizes = { md: 'px-7 py-3.5', sm: 'px-5 py-2' }
export default function Button({ to, href, variant = 'primary', size = 'md', className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition ${sizes[size]} ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) { const ext = href.startsWith('http'); return <a href={href} className={cls} {...(ext && { target: '_blank', rel: 'noopener noreferrer' })} {...rest}>{children}</a> }
  return <button className={cls} {...rest}>{children}</button>
}
