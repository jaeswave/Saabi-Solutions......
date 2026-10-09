import { useEffect, useState } from 'react'
export default function useRotatingIndex(length, ms = 2600) {
  const [i, setI] = useState(0)
  useEffect(() => { const id = setInterval(() => setI((v) => (v + 1) % length), ms); return () => clearInterval(id) }, [length, ms])
  return i
}
