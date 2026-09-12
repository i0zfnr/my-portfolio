import { useState } from 'react'
import logo from '../assets/logo.png'
import { ThemeToggle } from './ThemeToggle'

interface NavbarProps {
  currentPath: string
  navigate: (path: string) => void
  navigateSection: (sectionId: string) => void
}

export function Navbar({ currentPath, navigate, navigateSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false)
    navigateSection(sectionId)
  }

  const handleLogoClick = (event: React.MouseEvent) => {
    event.preventDefault()
    setMobileMenuOpen(false)
    if (currentPath !== '/') {
      navigate('/')
      return
    }

    // @ts-expect-error Lenis is attached by App for shared navigation helpers.
    if (window.__lenis) {
      // @ts-expect-error Lenis is attached by App for shared navigation helpers.
      window.__lenis.scrollTo(0, { duration: 0.9 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a className="brand" href="/" onClick={handleLogoClick} aria-label="Hafizul Irfan — home">
          <span className="brand-mark" aria-hidden="true">
            <img src={logo} alt="" />
          </span>
          <span className="brand-name">Hafizul Irfan</span>
        </a>

        <nav id="mobile-navigation" className={`nav-menu ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <button type="button" className="nav-link" onClick={() => handleNavClick('work')}>Work</button>
          <button type="button" className="nav-link" onClick={() => handleNavClick('services')}>Services</button>
          <button type="button" className="nav-link" onClick={() => handleNavClick('about')}>About</button>
          <button type="button" className="nav-link" onClick={() => handleNavClick('journey')}>Journey</button>
          <a className="nav-link" href="/Hafizul_Irfan_Resume.pdf" target="_blank" rel="noopener noreferrer">Résumé</a>
          <ThemeToggle />
          <button type="button" className="button button-primary nav-contact" onClick={() => handleNavClick('contact')}>
            Let&apos;s talk
          </button>
        </nav>

        <div className="mobile-actions">
          <ThemeToggle />
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={mobileMenuOpen ? 'menu-icon is-open' : 'menu-icon'} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
