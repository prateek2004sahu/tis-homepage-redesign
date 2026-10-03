import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title }) {
  return (
    <Reveal className="mb-10 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-bold text-brand sm:text-4xl">{title}</h2>
    </Reveal>
  )
}
