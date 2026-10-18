import { motion } from 'framer-motion'
// A small floating badge that gently bobs up and down
export default function Float({ children, className = '', delay = 0 }) {
  return (
    <motion.div className={`absolute z-10 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-xl ${className}`}
      animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}>
      {children}
    </motion.div>
  )
}
