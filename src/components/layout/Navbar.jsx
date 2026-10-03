import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, school } from '../../data/content'
import ThemeToggle from '../animation/ThemeToggle'
import Button from '../ui/Button'

export default function Navbar({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-2 z-50 mx-auto max-w-6xl px-3">
      <nav className="flex items-center justify-between rounded-full bg-bg/80 px-5 py-2 shadow-lg ring-1 ring-fg/10 backdrop-blur" aria-label="Main">
        <a href="#top" className="font-display text-lg font-bold text-brand">TIS<span className="text-accent">.</span></a>
        <ul className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {navItems.map((n) => <li key={n.href}><a href={n.href} className="hover:text-accent">{n.label}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
          <span className="hidden sm:block"><Button href={school.applyUrl}>Apply Now</Button></span>
          <button className="flex h-11 w-11 items-center justify-center lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="mt-2 rounded-2xl bg-bg p-4 shadow-lg ring-1 ring-fg/10 lg:hidden">
          {navItems.map((n) => (
            <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block py-3 font-medium">{n.label}</a></li>
          ))}
          <li className="pt-2"><Button href={school.applyUrl}>Apply Now</Button></li>
        </ul>
      )}
    </header>
  )
}
