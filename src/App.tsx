import { useEffect } from 'react'
import Lenis from 'lenis'
import './App.css'
import { useRouter } from './hooks/useRouter'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Journey } from './components/Journey'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { CaseStudy } from './components/CaseStudy'

export default function App() {
  const { currentPath, navigate, navigateSection } = useRouter()

  useEffect(() => {
    // Only initialize smooth scroll if not reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  // Check if current path matches /projects/:id
  const isCaseStudy = currentPath.startsWith('/projects/')
  const projectId = isCaseStudy ? currentPath.replace('/projects/', '').replace(/\/$/, '') : null

  return (
    <div className="portfolio-app">
      <Navbar
        currentPath={currentPath}
        navigate={navigate}
        navigateSection={navigateSection}
      />

      <main className="main-content">
        {isCaseStudy && projectId ? (
          <CaseStudy projectId={projectId} navigate={navigate} />
        ) : (
          <>
            <Hero navigateSection={navigateSection} />
            <Projects navigate={navigate} />
            <Journey />
            <About />
            <Skills />
            <Contact />
          </>
        )}
      </main>
    </div>
  )
}
