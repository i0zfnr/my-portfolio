import { portfolioData } from '../data/resumeData'

interface HeroProps {
  navigateSection: (sectionId: string) => void
}

export function Hero({ navigateSection }: HeroProps) {
  const { personal } = portfolioData

  return (
    <section className="hero-section" id="top">
      <div className="hero-layout-grid">
        {/* Left Column: Core Introduction */}
        <div className="hero-main-col">
          <div className="hero-header">
            <h1 className="hero-name">{personal.name}</h1>
            <p className="hero-title">{personal.title}</p>
          </div>

          <p className="hero-bio">{personal.bioHeadline}</p>

          <p className="hero-tech-line">{personal.techSummary}</p>

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
        </div>

        {/* Right Column: Editorial Developer Information Panel */}
        <div className="hero-panel-col">
          <aside className="developer-info-panel" aria-label="Developer Profile Details">
            <div className="panel-status-header">
              <span className="status-indicator-dot" />
              <span className="panel-status-tag">{personal.status.toUpperCase()}</span>
            </div>

            <div className="panel-data-list">
              <div className="panel-data-row">
                <span className="panel-data-label">Location</span>
                <span className="panel-data-value">{personal.location}</span>
              </div>

              <div className="panel-data-row">
                <span className="panel-data-label">Education</span>
                <span className="panel-data-value">{personal.education}</span>
              </div>

              <div className="panel-data-row">
                <span className="panel-data-label">Institution</span>
                <span className="panel-data-value">{personal.institution}</span>
              </div>

              <div className="panel-data-row">
                <span className="panel-data-label">Focus</span>
                <span className="panel-data-value">{personal.focus}</span>
              </div>

              <div className="panel-data-row">
                <span className="panel-data-label">Started Coding</span>
                <span className="panel-data-value">{personal.startedCoding}</span>
              </div>

              <div className="panel-data-row">
                <span className="panel-data-label">Links</span>
                <div className="panel-data-links">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="panel-inline-link"
                  >
                    GitHub ↗
                  </a>
                  <span className="panel-link-sep">/</span>
                  <a
                    href={`mailto:${personal.email}`}
                    className="panel-inline-link"
                  >
                    Email ↗
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}