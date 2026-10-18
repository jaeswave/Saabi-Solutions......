import Float from './Float.jsx'
import Glow from './Glow.jsx'

const k = 'text-pink-400', f = 'text-sky-300', s = 'text-amber-200', p = 'text-slate-400', c = 'text-emerald-300'
const lines = [
  [['// kliqq.config.js', c]],
  [['import ', k], ['{ secure, deploy } ', p], ['from ', k], ["'@kliqq/core'", s]],
  [],
  [['const ', k], ['app = ', p], ['secure', f], ['(build())', p]],
  [['await ', k], ['app.', p], ['test', f], ['(', p], ["'owasp-top-10'", s], [')', p]],
  [['await ', k], ['deploy', f], ['(app, { ', p], ['region', p], [': ', p], ["'af-south-1'", s], [' })', p]],
]
export default function CodeWindow() {
  return (
    <div className="relative">
      <Glow />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <i className="size-2.5 rounded-full bg-red-400/80" /><i className="size-2.5 rounded-full bg-amber-300/80" /><i className="size-2.5 rounded-full bg-green-400/80" />
          <span className="ml-3 text-xs text-slate-500">deploy.js</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-7 sm:text-[13px]">
          {lines.map((l, i) => <div key={i} className="whitespace-pre">{l.length ? l.map(([t, cls], j) => <span key={j} className={cls}>{t}</span>) : ' '}</div>)}
        </pre>
      </div>
      <Float className="-right-2 -top-4">✓ Deployed</Float>
      <Float className="-bottom-4 -left-2" delay={1.2}>🛡 Security checks passed</Float>
    </div>
  )
}
