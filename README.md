A modern, animated redesign of the TIS homepage (copy and brand colours kept from tis.edu.in), built for speed, mobile responsiveness and smooth motion.


- Live URL:https://tis-homepage-redesign-liart.vercel.app
- Repository:https://github.com/prateek2004sahu/tis-homepage-redesign


React 18 + Vite · Tailwind CSS 3 · Framer Motion · Lucide React


1. **Custom Cursor** - spring-smoothed ring that grows over links/buttons; hidden on touch devices.
2. **Scroll-Triggered Reveals** - staggered fade/slide-in (0.55s) via a reusable `Reveal` component.
3. **Animated Dark/Light Theme** - sliding switch, CSS variables, saved in localStorage, respects OS setting.
4. **Scroll Progress Bar** - spring-smoothed bar fixed to the top.

Bonus: count-up statistics (`useCountUp`), accessible mobile menu, reduced-motion friendly smooth scroll.


```bash
git clone https://github.com/<your-username>/tis-homepage-redesign.git
cd tis-homepage-redesign
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```


**Vercel:** push to GitHub → vercel.com → *Add New Project* → import repo → Deploy (Vite is auto-detected).
**Netlify:** build command `npm run build`, publish directory `dist`.


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


Navy + yellow palette, original copy, stats, rankings, sports list and parent testimonials from tis.edu.in.
