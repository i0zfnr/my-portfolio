import { portfolioData } from '../data/resumeData'
import { AntigravityParticles } from './AntigravityParticles'

interface HeroProps {
  navigateSection: (sectionId: string) => void
}

export function Hero({ navigateSection }: HeroProps) {
  const { personal } = portfolioData

  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <AntigravityParticles />

      <div className="site-container hero-inner">
        <div className="hero-status" aria-label={personal.status}>
          <span className="status-dot" aria-hidden="true" />
          <span>{personal.status}</span>
        </div>

        <div className="hero-copy">
          <p className="hero-kicker">Hafizul Irfan · Full-stack web developer</p>
          <h1 className="hero-heading" id="hero-title">
            I build practical systems
            <span>for the people who use them.</span>
          </h1>
          <p className="hero-intro">
            A Diploma in IT student turning real education, welfare, and public-service
            workflows into accessible web applications.
          </p>
        </div>

        <div className="hero-actions">
          <button className="button button-primary" type="button" onClick={() => navigateSection('work')}>
            Explore my work
            <span aria-hidden="true">↘</span>
          </button>
          <a className="button button-secondary" href={personal.resumeUrl} target="_blank" rel="noopener noreferrer">
            View résumé
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="hero-footnote" aria-label="Core technologies">
          <span>Laravel</span>
          <span>PHP</span>
          <span>MySQL</span>
          <span>React</span>
          <span>PWA</span>
        </div>
      </div>
    </section>
  )
}
