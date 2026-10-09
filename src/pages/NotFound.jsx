import usePageTitle from '../hooks/usePageTitle.js'
import Button from '../components/ui/Button.jsx'
export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <section className="grid min-h-screen place-items-center bg-ink px-6 text-center">
      <div>
        <p className="bg-gradient-to-r from-brand to-aqua bg-clip-text font-display text-8xl font-extrabold text-transparent">404</p>
        <p className="mt-4 text-lg text-slate-300">This page does not exist.</p>
        <Button to="/" className="mt-8">Back to home</Button>
      </div>
    </section>
  )
}
