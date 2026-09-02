import { useState } from 'react'
import { portfolioData } from '../data/resumeData'

export function Contact() {
  const { personal } = portfolioData
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="section-block contact-block" id="contact">
      <div className="contact-clean-box">
        <h2 className="contact-headline">Let&apos;s talk.</h2>
        <p className="contact-subtext">
          I&apos;m currently looking for internship opportunities in software development, web development, and related IT engineering roles.
        </p>

        <div className="contact-direct-links">
          <div className="email-action-row">
            <a className="contact-email-link" href={`mailto:${personal.email}`}>
              {personal.email}
            </a>
            <button
              type="button"
              className="btn-copy-clean"
              onClick={copyEmail}
              aria-label="Copy email address"
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>

          <div className="contact-social-row">
            <a
              className="clean-social-link"
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              className="clean-social-link"
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
            >
              Phone: {personal.phone}
            </a>
            <a
              className="clean-social-link"
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume PDF ↓
            </a>
          </div>
        </div>
      </div>

      <footer className="minimal-footer">
        <div className="footer-left">
          <span>{personal.name}</span>
          <span className="meta-separator">·</span>
          <span>© 2026</span>
        </div>
        <div className="footer-right">
          <a href={personal.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={`mailto:${personal.email}`}>
            Email
          </a>
          <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </footer>
    </section>
  )
}
