import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

// Feature C: animated dark/light switch (the knob slides, the icon swaps).
export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button onClick={onToggle} role="switch" aria-checked={dark} aria-label="Toggle dark mode"
      className="relative flex h-9 w-16 items-center rounded-full bg-card p-1 ring-1 ring-fg/15">
      <motion.span layout transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-accent text-black ${dark ? 'ml-auto' : ''}`}>
        {dark ? <Moon size={16} /> : <Sun size={16} />}
      </motion.span>
    </button>
  )
}
