import { portfolioData, type CaseStudy as CaseStudyType } from '../data/resumeData'

interface CaseStudyProps {
  projectId: string
  navigate: (path: string) => void
}

export function CaseStudy({ projectId, navigate }: CaseStudyProps) {
  const project: CaseStudyType | undefined = portfolioData.caseStudies.find(
    (p) => p.id === projectId
  )

  if (!project) {
    return (
      <div className="case-study-not-found">
        <h2>Case Study Not Found</h2>
        <p>The requested project documentation could not be found.</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate('/')}
        >
          ← Return to Selected Work
        </button>
      </div>
    )
  }

  return (
    <article className="case-study-view">
      <div className="case-study-container">
        {/* Back Navigation */}
        <div className="case-study-breadcrumb">
          <button
            type="button"
            className="back-link-btn"
            onClick={() => navigate('/')}
          >
            ← Back to Selected Work
          </button>
        </div>

        {/* Case Study Header */}
        <header className="case-study-header">
          <div className="header-meta-row">
            <span className="case-study-number">{project.index}</span>
            <span className="case-study-client">{project.client}</span>
          </div>

          <h1 className="case-study-title">{project.title}</h1>
          <p className="case-study-subtitle">{project.subtitle}</p>

          <p className="case-study-intro">{project.summary}</p>

          <div className="case-study-meta-grid">
            <div className="meta-box">
              <span className="meta-label">Role</span>
              <span className="meta-val">{project.role}</span>
            </div>
            <div className="meta-box">
              <span className="meta-label">Year</span>
              <span className="meta-val">{project.year}</span>
            </div>
            <div className="meta-box">
              <span className="meta-label">Type</span>
              <span className="meta-val">{project.type}</span>
            </div>
            <div className="meta-box">
              <span className="meta-label">Technologies</span>
              <span className="meta-val">{project.stack.join(' · ')}</span>
            </div>
          </div>

          <div className="case-study-actions">
            {project.liveUrl && (
              <a
                className="btn btn-primary"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Site ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                className="btn btn-secondary"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub ↗
              </a>
            )}
          </div>
        </header>

        {/* Main Content Sections */}
        <div className="case-study-body">
          {/* 01 — Overview */}
          <section className="case-study-section">
            <h2 className="section-step-title">
              <span className="step-num">01</span> Overview
            </h2>
            <div className="section-step-content">
              <p>{project.overview}</p>
            </div>
          </section>

          {/* 02 — Problem */}
          <section className="case-study-section">
            <h2 className="section-step-title">
              <span className="step-num">02</span> Problem
            </h2>
            <div className="section-step-content">
              <p>{project.problem}</p>
            </div>
          </section>

          {/* 03 — Solution */}
          <section className="case-study-section">
            <h2 className="section-step-title">
              <span className="step-num">03</span> Solution
            </h2>
            <div className="section-step-content">
              <p>{project.solution}</p>
            </div>
          </section>

          {/* 04 — Key Features */}
          <section className="case-study-section">
            <h2 className="section-step-title">
              <span className="step-num">04</span> Key Features
            </h2>
            <div className="section-step-content">
              <ul className="features-list">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i} className="feature-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 05 — System Architecture & Workflow */}
          <section className="case-study-section">
            <h2 className="section-step-title">
              <span className="step-num">05</span> System Architecture &amp; Workflow
            </h2>
            <div className="section-step-content">
              <div className="architecture-panel">
                <div className="arch-header">
                  <span className="arch-badge">{project.title} Core Workflow</span>
                  <span className="arch-stack">{project.stack.join(' / ')}</span>
                </div>
                <div className="arch-flow-diagram">
                  <div className="flow-step">
                    <span className="flow-badge">1. Authentication</span>
                    <p>Role-based login gating views for public users, registered students/applicants, and administrators.</p>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">
                    <span className="flow-badge">2. Data Processing</span>
                    <p>Validation requests and service layer transactions enforcing institutional rules and verification.</p>
                  </div>
                  <div className="flow-arrow">→</div>
                  <div className="flow-step">
                    <span className="flow-badge">3. Review &amp; Reporting</span>
                    <p>Administrative decision logs, status tracking, and automated audit summaries.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 06 — Technical Work */}
          <section className="case-study-section">
            <h2 className="section-step-title">
              <span className="step-num">06</span> Technical Implementation
            </h2>
            <div className="section-step-content">
              <div className="technical-grid">
                <div className="tech-block">
                  <h3 className="tech-block-title">Database Design</h3>
                  <p>{project.technicalWork.database}</p>
                </div>

                <div className="tech-block">
                  <h3 className="tech-block-title">Authentication &amp; RBAC</h3>
                  <p>{project.technicalWork.auth}</p>
                </div>

                <div className="tech-block">
                  <h3 className="tech-block-title">Backend Architecture</h3>
                  <p>{project.technicalWork.backend}</p>
                </div>

                <div className="tech-block">
                  <h3 className="tech-block-title">Frontend Development</h3>
                  <p>{project.technicalWork.frontend}</p>
                </div>

                <div className="tech-block">
                  <h3 className="tech-block-title">PWA &amp; Responsive Optimization</h3>
                  <p>{project.technicalWork.pwaOrPerf}</p>
                </div>
              </div>
            </div>
          </section>

          {/* 07 — Challenges */}
          <section className="case-study-section">
            <h2 className="section-step-title">
              <span className="step-num">07</span> Challenges
            </h2>
            <div className="section-step-content">
              <p>{project.challenges}</p>
            </div>
          </section>

          {/* 08 — What I Learned */}
          <section className="case-study-section">
            <h2 className="section-step-title">
              <span className="step-num">08</span> What I Learned
            </h2>
            <div className="section-step-content">
              <p>{project.whatILearned}</p>
            </div>
          </section>

          {/* 09 — Result */}
          <section className="case-study-section">
            <h2 className="section-step-title">
              <span className="step-num">09</span> Result
            </h2>
            <div className="section-step-content">
              <p>{project.result}</p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <footer className="case-study-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('/')}
          >
            ← Return to Selected Work
          </button>
        </footer>
      </div>
    </article>
  )
}
