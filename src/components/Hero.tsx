import { portfolioData } from '../data/resumeData'

interface HeroProps {
  navigateSection: (sectionId: string) => void
}

export function Hero({ navigateSection }: HeroProps) {
  const { personal } = portfolioData

  return (
    <section className="hero-section" id="top">
      <div className="hero-inner">
        <div className="hero-header">
          <h1 className="hero-name">{personal.name}</h1>
          <p className="hero-title">{personal.title}</p>
        </div>

        <p className="hero-bio">
          {personal.bioHeadline}
        </p>

        <p className="hero-tech-line">
          {personal.techSummary}
        </p>

        <div className="hero-cta-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigateSection('work')}
          >
            View my work
          </button>
          <a
            className="btn btn-secondary"
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume ↓
          </a>
        </div>

        <div className="hero-meta">
          <span>{personal.location}</span>
          <span className="meta-separator">·</span>
          <span>{personal.status}</span>
        </div>
      </div>
    </section>
  )
}