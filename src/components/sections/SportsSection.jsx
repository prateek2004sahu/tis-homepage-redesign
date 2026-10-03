import { sports } from '../../data/content'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function SportsSection() {
  return (
    <section id="sports" className="bg-brand/10 px-4 py-20">
      <SectionHeading eyebrow="Sports?" title="It’s not just a facility. At Tulas it’s the foundation!" />
      <p className="mx-auto -mt-6 mb-10 max-w-xl text-center text-muted">16+ sports curated to bring joy and discipline to your life.</p>
      <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
        {sports.map((s, i) => (
          <Reveal as="li" key={s} delay={(i % 8) * 0.05}
            className="rounded-full bg-bg px-5 py-2 text-sm font-medium shadow transition hover:-translate-y-1 hover:bg-accent hover:text-black">
            {s}
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
