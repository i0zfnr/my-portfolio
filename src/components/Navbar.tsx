import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import logo from '../assets/logo.png'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMenu = () => setMobileOpen(prev => !prev)
  const closeMenu = () => setMobileOpen(false)

  return (
    <header className="nav">
      <nav className="wrap nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={closeMenu}>
          <img className="mark" src={logo} alt="Hafizul Irfan logo" />
          <div className="brand-text">
            <span className="brand-name">Hafizul Irfan</span>
            <span className="brand-badge">Portfolio</span>
          </div>
        </a>

        <div className={`links ${mobileOpen ? 'mobile-active' : ''}`}>
          <a href="#top" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#references" onClick={closeMenu}>Reference</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta-btn" href="mailto:irfanhafizul123@gmail.com" onClick={closeMenu}>
            Hire / Intern
          </a>
          <ThemeToggle />
        </div>

        <button
          className="mobile-toggle"
          type="button"
          onClick={toggleMenu}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${mobileOpen ? 'open' : ''}`} />
        </button>
      </nav>
    </header>
  )
}
