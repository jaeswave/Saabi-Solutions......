// Use this when you have a real photo: <ImageFrame src="/images/team.jpg" alt="Our team" /> (file in public/images/)
export default function ImageFrame({ src, alt }) {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/40 to-aqua/30 blur-2xl" />
      <img src={src} alt={alt} loading="lazy" className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl" />
    </div>
  )
}
