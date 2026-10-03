import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// Counts from 0 to `end` once the element scrolls into view.
export default function useCountUp(end, duration = 1400) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1)
      setN(Math.round(end * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration])
  return [ref, n]
}
