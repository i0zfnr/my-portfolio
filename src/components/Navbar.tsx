import { useState } from 'react'
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

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    if (currentPath !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="site-header">
      <div className="header-container">
        <a className="logo-link" href="/" onClick={handleLogoClick}>
          <span className="logo-text">Hafizul Irfan</span>
        </a>

        <nav className={`nav-menu ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Main Navigation">
          <button
            type="button"
            className="nav-link"
            onClick={() => handleNavClick('work')}
          >
            Work
          </button>
          <button
            type="button"
            className="nav-link"
            onClick={() => handleNavClick('journey')}
          >
            Journey
          </button>
          <button
            type="button"
            className="nav-link"
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button
            type="button"
            className="nav-link"
            onClick={() => handleNavClick('skills')}
          >
            Skills
          </button>
          <a
            className="nav-link resume-link"
            href="/Hafizul_Irfan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↓
          </a>
          <button
            type="button"
            className="nav-link"
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>

          <div className="nav-toggle-wrap">
            <ThemeToggle />
          </div>
        </nav>

        <div className="mobile-actions">
          <ThemeToggle />
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <span className={`menu-bar ${mobileMenuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>
    </header>
  )
}
