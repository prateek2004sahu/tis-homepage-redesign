import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { hero, school } from '../../data/content'
import Button from '../ui/Button'

export default function HeroSection() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24">
      {/* Decorative floating blobs (pure CSS shapes, GPU-friendly transforms) */}
      <motion.div aria-hidden animate={{ y: [0, -30, 0] }} transition={{ duration: 8, repeat: Infinity }}
        className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
      <motion.div aria-hidden animate={{ y: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity }}
        className="absolute -left-24 bottom-10 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1 text-sm font-semibold text-brand">
          CBSE · Co-ed · Class IV – XII · Dehradun
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="font-display text-4xl font-bold leading-tight text-brand sm:text-6xl">
          {hero.title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          {hero.subtitle} {hero.body}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={school.applyUrl}>Apply Now</Button>
          <Button href="#contact" variant="outline">Enquire Now</Button>
        </motion.div>
      </div>
      <motion.a href="#about" aria-label="Scroll down" animate={{ y: [0, 10, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-brand"><ChevronDown size={32} /></motion.a>
    </section>
  )
}
