import { motion } from 'framer-motion'

// Feature B: fade + slide up when scrolled into view. Use `delay` to stagger siblings.
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}>
      {children}
    </Tag>
  )
}
