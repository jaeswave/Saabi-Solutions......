import { useEffect, useRef } from 'react'
export default function NetworkCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const cv = ref.current, ctx = cv.getContext('2d'), calm = matchMedia('(prefers-reduced-motion: reduce)').matches
    let W, H, pts = [], raf, m = { x: -999, y: -999 }
    const size = () => {
      W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight
      pts = Array.from({ length: Math.min(70, W / 14) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4 }))
    }
    const move = (e) => { const r = cv.getBoundingClientRect(); m = { x: e.clientX - r.left, y: e.clientY - r.top } }
    const line = (a, b, c) => { ctx.strokeStyle = c; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke() }
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      pts.forEach((p, i) => {
        if (!calm) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1 }
        ctx.fillStyle = 'rgba(34,211,238,.7)'; ctx.fillRect(p.x, p.y, 2, 2)
        for (let j = i + 1; j < pts.length; j++) { const d = Math.hypot(p.x - pts[j].x, p.y - pts[j].y); if (d < 120) line(p, pts[j], `rgba(124,92,255,${0.25 * (1 - d / 120)})`) }
        const dm = Math.hypot(p.x - m.x, p.y - m.y); if (dm < 160) line(p, m, `rgba(34,211,238,${0.5 * (1 - dm / 160)})`)
      })
      raf = requestAnimationFrame(draw)
    }
    size(); draw()
    addEventListener('resize', size); cv.parentElement.addEventListener('pointermove', move)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', size); cv.parentElement?.removeEventListener('pointermove', move) }
  }, [])
  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />
}
