import { school } from '../../data/content'

export default function Footer() {
  return (
    <footer className="bg-brand/10 px-4 py-10 text-center text-sm text-muted">
      <p className="font-display text-lg font-bold text-brand">{school.name}</p>
      <address className="mt-2 not-italic">{school.address}</address>
      <p className="mt-1">
        <a href={`tel:${school.phone}`} className="hover:text-accent">{school.phone}</a> ·{' '}
        <a href={`mailto:${school.email}`} className="hover:text-accent">{school.email}</a>
      </p>
      <p className="mt-4">© 2026 Tulas International School, Dehradun. Redesign concept for assessment.</p>
    </footer>
  )
}
