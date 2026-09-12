import { useState } from 'react'
import { portfolioData } from '../data/resumeData'

export function Contact() {
  const { personal } = portfolioData
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="site-container contact-inner">
        <p className="section-label section-label-inverse">06 · Contact</p>
        <h2 className="reveal-on-scroll contact-reveal-1" id="contact-title">Have a useful idea?<br /><span>Let&apos;s make it real.</span></h2>
        <p className="contact-intro reveal-on-scroll contact-reveal-2">
          I&apos;m open to internships, junior development roles, and conversations about practical web projects.
        </p>

        <div className="contact-actions reveal-on-scroll contact-reveal-3">
          <a className="button button-light" href={`mailto:${personal.email}`}>Email me <span aria-hidden="true">↗</span></a>
          <button className="button button-ghost-inverse" type="button" onClick={copyEmail}>
            {copied ? 'Email copied' : 'Copy email'}
          </button>
        </div>

        <footer className="site-footer reveal-on-scroll contact-reveal-4">
          <div>
            <strong>{personal.name}</strong>
            <span>{personal.title}</span>
          </div>
          <nav aria-label="Footer links">
            <a href={personal.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer">Résumé ↗</a>
            <a href={`tel:${personal.phone.replace(/\s+/g, '')}`}>{personal.phone}</a>
          </nav>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </div>
    </section>
  )
}
