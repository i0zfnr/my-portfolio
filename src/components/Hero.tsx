import { resumeData } from '../data/resumeData'

export function Hero() {
  const { personal, highlights } = resumeData

  return (
    <section className="hero wrap" id="top">
      <div className="hero-content">
        <div className="hero-badge-row">
          <span className="status-badge">
            <span className="status-dot" aria-hidden="true" />
            {personal.status}
          </span>
          <span className="location-pill">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {personal.location}
          </span>
        </div>

        <h1 className="hero-title">
          Hi, I&apos;m <span className="highlight-text">{personal.name}</span>.
          <span className="subheading-role">{personal.role} &amp; Web Developer.</span>
        </h1>

        <p className="hero-description">
          {personal.about}
        </p>

        <div className="hero-highlights">
          {highlights.map((item) => (
            <div className="highlight-card" key={item.label}>
              <span className="highlight-value">{item.value}</span>
              <span className="highlight-label">{item.label}</span>
              <span className="highlight-sub">{item.detail}</span>
            </div>
          ))}
        </div>

        <div className="actions hero-actions">
          <a className="btn primary" href="#projects">
            <span>Explore Projects</span>
            <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </a>
          <a className="btn" href="#experience">
            <span>Education &amp; Experience</span>
          </a>
          <a className="btn" href={`mailto:${personal.email}`}>
            <span>Email Me</span>
            <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
          </a>
          <a className="btn ghost-btn" href={personal.github} target="_blank" rel="noreferrer">
            <span>GitHub ↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}