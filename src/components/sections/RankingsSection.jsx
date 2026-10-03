import { rankings } from '../../data/content'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function RankingsSection() {
  return (
    <section id="rankings" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading eyebrow="Recognition" title="Ranked among the best" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {rankings.map((r, i) => (
          <Reveal key={r.by} delay={i * 0.1} className="rounded-2xl border border-accent/40 p-6">
            <p className="font-display text-5xl font-bold text-accent">{r.rank}</p>
            <h3 className="mt-2 font-semibold text-brand">{r.where}</h3>
            <p className="mt-1 text-sm text-muted">{r.by}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
