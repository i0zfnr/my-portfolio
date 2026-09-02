import { portfolioData, type CaseStudy } from '../data/resumeData'

interface ProjectsProps {
  navigate: (path: string) => void
}

export function Projects({ navigate }: ProjectsProps) {
  const { caseStudies } = portfolioData

  const renderProjectVisual = (project: CaseStudy) => {
    if (project.id === 'myokucare') {
      return (
        <div className="project-visual-frame" aria-label="MyOKUCare System Interface Preview">
          <div className="window-header">
            <div className="window-dots">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <span className="window-title">myokucare.jkm.gov.my / dashboard</span>
          </div>
          <div className="window-body">
            <div className="app-mock-sidebar">
              <div className="mock-brand">MyOKUcare</div>
              <div className="mock-nav-item active">Dashboard</div>
              <div className="mock-nav-item">OKU Profiles</div>
              <div className="mock-nav-item">Welfare Cases</div>
              <div className="mock-nav-item">Job Matching</div>
              <div className="mock-nav-item">Reports</div>
            </div>
            <div className="app-mock-content">
              <div className="mock-topbar">
                <span className="mock-badge">JKM Officer Portal</span>
                <span className="mock-status">RBAC: Active Session</span>
              </div>
              <div className="mock-card-row">
                <div className="mock-metric-card">
                  <span className="metric-num">Verified</span>
                  <span className="metric-text">Kad OKU Verification Queue</span>
                </div>
                <div className="mock-metric-card">
                  <span className="metric-num">Applications</span>
                  <span className="metric-text">Welfare Aid Review &amp; SOP</span>
                </div>
              </div>
              <div className="mock-table">
                <div className="table-header-row">
                  <span>Applicant ID</span>
                  <span>Disability Category</span>
                  <span>Status</span>
                </div>
                <div className="table-row">
                  <span>OKU-2026-0812</span>
                  <span>Physical / Mobility</span>
                  <span className="table-badge approved">Approved</span>
                </div>
                <div className="table-row">
                  <span>OKU-2026-0845</span>
                  <span>Hearing Impairment</span>
                  <span className="table-badge review">In Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (project.id === 'myhep') {
      return (
        <div className="project-visual-frame" aria-label="MyHEP System Interface Preview">
          <div className="window-header">
            <div className="window-dots">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
            <span className="window-title">myhep.polibesut.edu.my / studentedge</span>
          </div>
          <div className="window-body">
            <div className="app-mock-sidebar">
              <div className="mock-brand">MyHEP</div>
              <div className="mock-nav-item active">Overview</div>
              <div className="mock-nav-item">Scholarships</div>
              <div className="mock-nav-item">Welfare Aid</div>
              <div className="mock-nav-item">Disciplinary</div>
              <div className="mock-nav-item">Outing / Leave</div>
            </div>
            <div className="app-mock-content">
              <div className="mock-topbar">
                <span className="mock-badge">Student Affairs (HEP)</span>
                <span className="mock-status">Campus Portal</span>
              </div>
              <div className="mock-card-row">
                <div className="mock-metric-card">
                  <span className="metric-num">Scholarships</span>
                  <span className="metric-text">Vetting &amp; Review Pipeline</span>
                </div>
                <div className="mock-metric-card">
                  <span className="metric-num">Student Aid</span>
                  <span className="metric-text">Emergency Support Tracking</span>
                </div>
              </div>
              <div className="mock-table">
                <div className="table-header-row">
                  <span>Student ID</span>
                  <span>Module Request</span>
                  <span>Decision</span>
                </div>
                <div className="table-row">
                  <span>13DIT24F1011</span>
                  <span>State Merit Scholarship</span>
                  <span className="table-badge approved">Verified</span>
                </div>
                <div className="table-row">
                  <span>13DIT24F1034</span>
                  <span>Hostel Weekend Movement</span>
                  <span className="table-badge neutral">Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="project-visual-frame" aria-label="FlipBook Interactive Reader Interface Preview">
        <div className="window-header">
          <div className="window-dots">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <span className="window-title">flipbook.polibesut.edu.my / reader</span>
        </div>
        <div className="window-body flipbook-body">
          <div className="flipbook-reader-layout">
            <div className="reader-toc">
              <span className="toc-title">Table of Contents</span>
              <span className="toc-item active">01. Course Overview</span>
              <span className="toc-item">02. Web Architecture</span>
              <span className="toc-item">03. Database Relational Modeling</span>
              <span className="toc-item">04. API Integration &amp; REST</span>
            </div>
            <div className="reader-page-spread">
              <div className="reader-page left-page">
                <span className="page-chapter">Chapter 02</span>
                <h4>Web System Architecture</h4>
                <p>Digital learning modules optimized for continuous client reading across mobile and desktop displays.</p>
                <div className="code-snippet-preview">
                  <code>composer create-project laravel/laravel</code>
                </div>
                <span className="page-footer">Page 24</span>
              </div>
              <div className="reader-page right-page">
                <span className="page-chapter">Politeknik Besut</span>
                <h4>Responsive Reader View</h4>
                <p>Hardware-accelerated CSS page turns with low latency and clear typographical contrast ratios.</p>
                <span className="page-footer">Page 25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="section-block" id="work">
      <div className="section-header">
        <h2 className="section-title">Selected Work</h2>
        <p className="section-subtitle">
          Practical web systems engineered for public sector welfare, higher education administration, and digital academic publishing.
        </p>
      </div>

      <div className="projects-showcase">
        {caseStudies.map((project) => (
          <article className="project-feature" key={project.id}>
            <div className="project-info">
              <div className="project-index-line">
                <span className="project-number">{project.index}</span>
                <span className="project-divider">/</span>
                <span className="project-client">{project.client}</span>
              </div>

              <h3 className="project-heading">{project.title}</h3>
              <p className="project-sub">{project.subtitle}</p>

              <p className="project-summary">{project.summary}</p>

              <div className="tech-stack-row">
                {project.stack.map((tech) => (
                  <span className="tech-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links-row">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  View Case Study →
                </button>

                {project.liveUrl && (
                  <a
                    className="btn btn-secondary"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Website ↗
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    className="btn btn-secondary"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>

            <div className="project-display">
              {renderProjectVisual(project)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
