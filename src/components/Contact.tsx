import { useState } from 'react'
import { resumeData } from '../data/resumeData'

export function Contact() {
  const { personal } = resumeData
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="section" id="contact">
      <div className="contact-box">
        <span className="kicker contact-kicker">Get In Touch</span>
        <h2 className="contact-heading">Ready for Internship &amp; Collaboration</h2>
        <p className="contact-lead">
          I am actively seeking an IT / Software Development internship opportunity. Whether you have a role available, a project collaboration, or would like to discuss my academic work, feel free to reach out.
        </p>

        <div className="contact-methods-grid">
          <div className="contact-method-card">
            <div className="method-icon-wrap">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div className="method-text">
              <span className="method-label">Direct Email</span>
              <a className="method-value" href={`mailto:${personal.email}`}>{personal.email}</a>
            </div>
            <button className="copy-btn" onClick={copyEmail} type="button" aria-label="Copy email address" title="Copy email address">
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="contact-method-card">
            <div className="method-icon-wrap">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="method-text">
              <span className="method-label">Phone &amp; WhatsApp</span>
              <a className="method-value" href={`https://wa.me/${personal.intlPhone.replace('+', '')}`} target="_blank" rel="noreferrer">
                {personal.phone}
              </a>
            </div>
            <a className="copy-btn direct-link" href={`tel:${personal.intlPhone}`}>
              Call
            </a>
          </div>

          <div className="contact-method-card">
            <div className="method-icon-wrap">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="method-text">
              <span className="method-label">Current Location</span>
              <span className="method-value">{personal.location}</span>
            </div>
          </div>
        </div>

        <div className="contact-socials-bar">
          <span className="socials-label">Connect online:</span>
          <div className="social-links-list">
            <a className="social-pill" href={personal.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a className="social-pill" href={personal.instagram} target="_blank" rel="noreferrer">
              Instagram ↗
            </a>
            <a className="social-pill" href={personal.tiktok} target="_blank" rel="noreferrer">
              TikTok ↗
            </a>
          </div>
        </div>

        <footer className="footer-mini">
          <p>© {new Date().getFullYear()} {personal.fullName}. All rights reserved.</p>
          <p className="footer-sub">Built with modern React, TypeScript &amp; Vanilla CSS • Optimized for Web Accessibility</p>
        </footer>
      </div>
    </section>
  )
}
