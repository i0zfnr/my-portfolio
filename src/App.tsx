import { useEffect } from 'react'
import Lenis from 'lenis'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { References } from './components/References'
import { Contact } from './components/Contact'
import { CursorGlow } from './components/CursorGlow'
import { AnimatedBackground } from './components/AnimatedBackground'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <AnimatedBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <References />
        <Contact />
      </main>
    </>
  )
}
