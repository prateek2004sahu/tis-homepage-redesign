import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Feature A: ring that follows the mouse and grows over links/buttons.
// Motion values update outside React renders, so there are no re-renders per mouse move.
export default function CustomCursor() {
  const [enabled] = useState(() => window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40 })
  const sy = useSpring(y, { stiffness: 500, damping: 40 })

  useEffect(() => {
    if (!enabled) return
    document.body.classList.add('has-custom-cursor')
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setHovering(Boolean(e.target.closest('a, button, input, select, textarea, [data-hover]')))
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [enabled, x, y])

  if (!enabled) return null
  return (
    <motion.div
      aria-hidden="true"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      animate={{ scale: hovering ? 2.2 : 1, opacity: hovering ? 0.5 : 1 }}
      transition={{ duration: 0.2 }}
      className="pointer-events-none fixed left-0 top-0 z-[70] h-6 w-6 rounded-full border-2 border-accent bg-accent/20"
    />
  )
}
