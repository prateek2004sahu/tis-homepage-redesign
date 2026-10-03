# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the TIS homepage (copy and brand colours kept from tis.edu.in), built for speed, mobile responsiveness and smooth motion.

## 🚀 Live Demo
- **Live URL:** _add your Vercel / Netlify link here_
- **Repository:** _add your GitHub link here_

## 🛠️ Tech Stack
React 18 + Vite · Tailwind CSS 3 · Framer Motion · Lucide React

## ✨ Standout Features (all 4 implemented)
1. **Custom Cursor** - spring-smoothed ring that grows over links/buttons; hidden on touch devices.
2. **Scroll-Triggered Reveals** - staggered fade/slide-in (0.55s) via a reusable `Reveal` component.
3. **Animated Dark/Light Theme** - sliding switch, CSS variables, saved in localStorage, respects OS setting.
4. **Scroll Progress Bar** - spring-smoothed bar fixed to the top.

Bonus: count-up statistics (`useCountUp`), accessible mobile menu, reduced-motion friendly smooth scroll.

## 📦 Getting Started Locally
```bash
git clone https://github.com/<your-username>/tis-homepage-redesign.git
cd tis-homepage-redesign
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## 🌐 Deploy
**Vercel:** push to GitHub → vercel.com → *Add New Project* → import repo → Deploy (Vite is auto-detected).
**Netlify:** build command `npm run build`, publish directory `dist`.

## 🧩 Component Architecture
```
src/
├── components/
│   ├── ui/          Button, Reveal, SectionHeading
│   ├── layout/      Navbar, Footer
│   ├── sections/    Hero, About, Stats, Sports, Rankings, Testimonials, Contact
│   └── animation/   ScrollProgress, CustomCursor, ThemeToggle
├── hooks/           useTheme, useCountUp
└── data/content.js  All copy, stats, navigation
```

## 🎨 Brand Identity Retained
Navy + yellow palette, original copy, stats, rankings, sports list and parent testimonials from tis.edu.in.
