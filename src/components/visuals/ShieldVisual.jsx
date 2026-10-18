import Float from './Float.jsx'
export default function ShieldVisual() {
  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-sm place-items-center">
      <div className="absolute inset-6 animate-ping rounded-full bg-brand/20 [animation-duration:3s]" />
      <div className="absolute inset-0 rounded-full border border-brand/30" />
      <div className="absolute inset-10 rounded-full border border-aqua/30" />
      <div className="absolute inset-16 rounded-full bg-gradient-to-br from-brand/30 to-aqua/20 blur-xl" />
      <svg viewBox="0 0 100 120" className="relative w-2/5 drop-shadow-[0_0_25px_rgba(124,92,255,0.6)]" aria-hidden="true">
        <defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7c5cff" /><stop offset="1" stopColor="#22d3ee" /></linearGradient></defs>
        <path d="M50 4 94 20v34c0 30-19 51-44 62C25 105 6 84 6 54V20z" fill="url(#sg)" />
        <path d="m30 60 14 14 28-30" fill="none" stroke="#060a18" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <Float className="left-0 top-6">OWASP Top 10</Float>
      <Float className="-right-1 top-1/2" delay={0.8}>Pen-tested</Float>
      <Float className="bottom-4 left-4" delay={1.6}>Hardened servers</Float>
    </div>
  )
}
