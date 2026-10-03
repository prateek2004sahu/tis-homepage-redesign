import { about } from '../../data/content'
import Reveal from '../ui/Reveal'

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-4 py-20 text-center">
      <Reveal as="h2" className="font-display text-3xl font-bold text-brand sm:text-4xl">{about.title}</Reveal>
      <Reveal delay={0.1} className="mt-5 text-lg text-muted">{about.body}</Reveal>
      <Reveal delay={0.2} className="mt-8 rounded-2xl bg-card p-6 italic">{about.founded}</Reveal>
    </section>
  )
}
