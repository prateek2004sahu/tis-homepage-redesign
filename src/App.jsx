import useTheme from './hooks/useTheme'
import ScrollProgress from './components/animation/ScrollProgress'
import CustomCursor from './components/animation/CustomCursor'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import StatsSection from './components/sections/StatsSection'
import SportsSection from './components/sections/SportsSection'
import RankingsSection from './components/sections/RankingsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import ContactSection from './components/sections/ContactSection'

export default function App() {
  const [dark, toggleTheme] = useTheme()
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar dark={dark} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <SportsSection />
        <RankingsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
