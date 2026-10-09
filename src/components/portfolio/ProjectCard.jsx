import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Card from '../ui/Card.jsx'
import Reveal from '../ui/Reveal.jsx'
import { useTone } from '../ui/ToneContext.js'

export default function ProjectCard({ project, delay = 0 }) {
  const t = useTone()
  const [failed, setFailed] = useState(false)
  const { name, url, desc, tags } = project
  return (
    <Reveal className="h-full" delay={delay}>
      <a href={url} target="_blank" rel="noopener noreferrer" className="group block h-full">
        <Card padded={false} className="h-full overflow-hidden">
          <div className={`flex items-center gap-1.5 border-b px-4 py-3 ${t.line}`}>
            <i className="size-2.5 rounded-full bg-red-400/80" /><i className="size-2.5 rounded-full bg-sun/80" /><i className="size-2.5 rounded-full bg-green-400/80" />
            <span className={`ml-3 truncate text-xs ${t.muted}`}>{url.replace(/^https?:\/\//, '')}</span>
          </div>
          <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand/30 to-aqua/20">
            {!failed && <img loading="lazy" alt={`${name} preview`} src={`https://image.thum.io/get/width/800/crop/500/${url}`} onError={() => setFailed(true)}
              className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />}
          </div>
          <div className="p-6">
            <h3 className={`flex items-center justify-between font-display text-xl font-bold ${t.title}`}>{name}
              <ArrowUpRight size={20} className={`transition group-hover:translate-x-1 group-hover:-translate-y-1 ${t.accent}`} /></h3>
            <p className={`mt-2 ${t.muted}`}>{desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className={`rounded-full border px-3 py-1 text-xs ${t.line} ${t.muted}`}>{tag}</span>)}</div>
          </div>
        </Card>
      </a>
    </Reveal>
  )
}
