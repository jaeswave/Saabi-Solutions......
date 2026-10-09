import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Send } from 'lucide-react'
import { site } from '../../config/site.js'
import { services, solutions } from '../../data/services.js'
import { useTone } from '../ui/ToneContext.js'
import Button from '../ui/Button.jsx'

const budgets = ['Not sure yet', 'Under ₦500k', '₦500k – ₦2m', '₦2m – ₦5m', '₦5m+']
const topics = [...services, ...solutions].map((s) => s.title).concat(['Saabi Academy (public class)', 'Saabi Academy (private training)', 'Corporate training', 'Something else'])

// Opens the visitor's email app. Swap handleSubmit for Formspree/EmailJS later.
export default function ContactForm() {
  const t = useTone()
  const [params] = useSearchParams()
  const initial = { name: '', email: '', service: topics.includes(params.get('topic')) ? params.get('topic') : topics[0], budget: budgets[0], message: '' }
  const [f, setF] = useState(initial)
  const [sent, setSent] = useState(false)
  const field = `w-full rounded-lg border px-4 py-3 outline-none transition ${t.input}`
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`${f.service} enquiry from ${f.name}`)
    const body = encodeURIComponent(`${f.message}\n\nBudget: ${f.budget}\n${f.name} (${f.email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }
  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input className={field} required placeholder="Your name" value={f.name} onChange={set('name')} />
      <input className={field} required type="email" placeholder="Email address" value={f.email} onChange={set('email')} />
      <div className="grid gap-4 sm:grid-cols-2">
        <select className={field} value={f.service} onChange={set('service')}>{topics.map((s) => <option key={s}>{s}</option>)}</select>
        <select className={field} value={f.budget} onChange={set('budget')}>{budgets.map((b) => <option key={b}>{b}</option>)}</select>
      </div>
      <textarea className={field} required rows={5} placeholder="Tell us about your project or the class you want" value={f.message} onChange={set('message')} />
      <Button className="w-full" type="submit"><Send size={16} /> Send enquiry</Button>
      {sent && <p className={`text-sm ${t.accent}`}>Your email app should open with the message ready to send. You can also WhatsApp us.</p>}
    </form>
  )
}
