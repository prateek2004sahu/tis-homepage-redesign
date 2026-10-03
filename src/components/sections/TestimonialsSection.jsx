import { Quote } from 'lucide-react'
import { testimonials } from '../../data/content'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function TestimonialsSection() {
  return (
    <section id="parents" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading eyebrow="From the Parents" title="Google Reviews" />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.12} className="flex flex-col rounded-2xl bg-card p-6">
            <Quote className="text-accent" />
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed">{t.text}</blockquote>
            <p className="mt-4 font-semibold text-brand">{t.name}</p>
            <p className="text-xs text-muted">{t.role}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
