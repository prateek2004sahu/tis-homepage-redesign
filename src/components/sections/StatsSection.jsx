import { stats } from '../../data/content'
import useCountUp from '../../hooks/useCountUp'
import Reveal from '../ui/Reveal'

function Stat({ value, suffix, label, delay }) {
  const [ref, n] = useCountUp(value)
  return (
    <Reveal delay={delay} className="rounded-2xl bg-card p-6 text-center transition hover:-translate-y-1 hover:shadow-xl">
      <p ref={ref} className="font-display text-5xl font-bold text-brand">{n}{suffix}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted">{label}</p>
    </Reveal>
  )
}

export default function StatsSection() {
  return (
    <section id="stats" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s, i) => <Stat key={s.label} {...s} delay={i * 0.1} />)}
      </div>
    </section>
  )
}
