import { useEffect } from 'react'
import Lenis from 'lenis'
import './App.css'
import { useRouter } from './hooks/useRouter'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { About } from './components/About'
import { Journey } from './components/Journey'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { CaseStudy } from './components/CaseStudy'

export default function App() {
  const { currentPath, navigate, navigateSection } = useRouter()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1,
      easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      smoothWheel: true,
    })

    // @ts-expect-error Exposed so navigation helpers share the same scroll engine.
    window.__lenis = lenis

    return () => {
      // @ts-expect-error Clean up the shared scroll helper.
      window.__lenis = undefined
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal-on-scroll'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [currentPath])

  const isCaseStudy = currentPath.startsWith('/projects/')
  const projectId = isCaseStudy ? currentPath.replace('/projects/', '').replace(/\/$/, '') : null

  return (
    <div className="portfolio-app">
      <Navbar currentPath={currentPath} navigate={navigate} navigateSection={navigateSection} />
      <main>
        {isCaseStudy && projectId ? (
          <CaseStudy projectId={projectId} navigate={navigate} />
        ) : (
          <>
            <Hero navigateSection={navigateSection} />
            <Projects navigate={navigate} />
            <Services navigate={navigate} navigateSection={navigateSection} />
            <About />
            <Journey />
            <Skills />
            <Contact />
          </>
        )}
      </main>
    </div>
  )
}
