import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { classes, school } from '../../data/content'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

const field = 'w-full min-h-11 rounded-xl border border-fg/20 bg-bg px-4 py-2 outline-none focus:border-accent focus:ring-2 focus:ring-accent/40'

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  // Demo only: connect this to your backend / form service to store enquiries.
  const onSubmit = (e) => { e.preventDefault(); setSent(true) }
  return (
    <section id="contact" className="bg-brand px-4 py-20 text-white dark:bg-card dark:text-fg">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Contact Us.</h2>
          <p className="mt-3 opacity-80">Admissions open for Class IV to XII. Visit our 22-acre campus.</p>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3"><Phone size={18} className="shrink-0 text-accent" /><a href={`tel:${school.phone}`}>{school.phone}</a></li>
            <li className="flex gap-3"><Mail size={18} className="shrink-0 text-accent" /><a href={`mailto:${school.email}`}>{school.email}</a></li>
            <li className="flex gap-3"><MapPin size={18} className="shrink-0 text-accent" />{school.address}</li>
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          <form onSubmit={onSubmit} className="space-y-3 rounded-2xl bg-bg p-6 text-fg shadow-xl">
            <h3 className="text-xl font-bold text-brand">Enquire Now!</h3>
            <label className="block text-sm">Parent name<input required className={field} name="name" autoComplete="name" /></label>
            <label className="block text-sm">Phone<input required type="tel" className={field} name="phone" autoComplete="tel" /></label>
            <label className="block text-sm">Class<select required className={field} name="class" defaultValue="">
              <option value="" disabled>Select Class</option>
              {classes.map((c) => <option key={c}>{c}</option>)}
            </select></label>
            <Button type="submit">Enquire Now</Button>
            {sent && <p role="status" className="text-sm font-medium text-brand">Thank you! Our admissions team will call you soon.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
