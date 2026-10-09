import { createContext, useContext } from 'react'
// Each tone = one section background plus matching text/card/input styles (all Tailwind utilities).
const darkCard = 'border-white/10 bg-panel hover:-translate-y-1 hover:border-brand/60'
const darkInput = 'border-white/10 bg-ink text-white placeholder:text-slate-500 focus:border-aqua'
const lightInput = 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-brand'
const lift = 'hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10'
export const tones = {
  dark: { bg: 'bg-ink text-slate-300', title: 'text-white', muted: 'text-slate-400', card: darkCard, icon: 'bg-brand/15 text-aqua', accent: 'text-aqua', badge: 'bg-brand/20 text-violet-200', input: darkInput, line: 'border-white/10' },
  midnight: { bg: 'bg-gradient-to-b from-ink via-[#15103d] to-ink text-slate-300', title: 'text-white', muted: 'text-slate-400', card: darkCard, icon: 'bg-brand/15 text-aqua', accent: 'text-aqua', badge: 'bg-brand/20 text-violet-200', input: darkInput, line: 'border-white/10' },
  light: { bg: 'bg-white text-slate-700', title: 'text-slate-900', muted: 'text-slate-600', card: `border-slate-200 bg-slate-50 hover:border-brand/40 ${lift}`, icon: 'bg-brand/10 text-brand', accent: 'text-brand', badge: 'bg-brand/10 text-brand', input: lightInput, line: 'border-slate-200' },
  mist: { bg: 'bg-violet-50 text-slate-700', title: 'text-slate-900', muted: 'text-slate-600', card: `border-violet-100 bg-white hover:border-brand/40 ${lift}`, icon: 'bg-brand/10 text-brand', accent: 'text-brand', badge: 'bg-brand/10 text-brand', input: lightInput, line: 'border-violet-200' },
  sky: { bg: 'bg-cyan-50 text-slate-700', title: 'text-slate-900', muted: 'text-slate-600', card: `border-cyan-100 bg-white hover:border-cyan-400 ${lift}`, icon: 'bg-cyan-100 text-cyan-700', accent: 'text-cyan-700', badge: 'bg-cyan-100 text-cyan-800', input: lightInput, line: 'border-cyan-200' },
  brand: { bg: 'bg-gradient-to-br from-brand via-indigo-600 to-indigo-900 text-white', title: 'text-white', muted: 'text-indigo-100', card: 'border-white/20 bg-white/10 backdrop-blur hover:-translate-y-1', icon: 'bg-white/15 text-white', accent: 'text-sun', badge: 'bg-white/20 text-white', input: 'border-white/30 bg-white/10 text-white placeholder:text-indigo-200 focus:border-white', line: 'border-white/20' },
}
export const ToneContext = createContext(tones.dark)
export const useTone = () => useContext(ToneContext)
