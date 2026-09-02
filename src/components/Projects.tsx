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
            <span className="window-title">MyOKUCare</span>
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
                <span className="mock-badge">Welfare Officer Portal</span>
                <span className="mock-status">Role-Based Access</span>
              </div>
              <div className="mock-card-row">
                <div className="mock-metric-card">
                  <span className="metric-num">Verification Queue</span>
                  <span className="metric-text">Kad OKU &amp; Identity Review</span>
                </div>
                <div className="mock-metric-card">
                  <span className="metric-num">Assistance Pipeline</span>
                  <span className="metric-text">Welfare Application Review</span>
                </div>
              </div>
              <div className="mock-table">
                <div className="table-header-row">
                  <span>Record ID</span>
                  <span>Category</span>
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
                <div className="table-row">
                  <span>OKU-2026-0891</span>
                  <span>Visual Impairment</span>
                  <span className="table-badge approved">Approved</span>
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
            <span className="window-title">MyHEP / StudentEdge</span>
          </div>
          <div className="window-body">
            <div className="app-mock-sidebar">
              <div className="mock-brand">StudentEdge</div>
              <div className="mock-nav-item active">Overview</div>
              <div className="mock-nav-item">Scholarships</div>
              <div className="mock-nav-item">Welfare Aid</div>
              <div className="mock-nav-item">Disciplinary</div>
              <div className="mock-nav-item">Leave Permissions</div>
            </div>
            <div className="app-mock-content">
              <div className="mock-topbar">
                <span className="mock-badge">Student Affairs Management</span>
                <span className="mock-status">Politeknik Besut</span>
              </div>
              <div className="mock-card-row">
                <div className="mock-metric-card">
                  <span className="metric-num">Scholarships</span>
                  <span className="metric-text">Application &amp; Vetting Process</span>
                </div>
                <div className="mock-metric-card">
                  <span className="metric-num">Student Welfare</span>
                  <span className="metric-text">Emergency Support Tracking</span>
                </div>
              </div>
              <div className="mock-table">
                <div className="table-header-row">
                  <span>Student ID</span>
                  <span>Application / Module</span>
                  <span>Decision</span>
                </div>
                <div className="table-row">
                  <span>13DIT24F1011</span>
                  <span>State Merit Scholarship</span>
                  <span className="table-badge approved">Verified</span>
                </div>
                <div className="table-row">
                  <span>13DIT24F1034</span>
                  <span>Hostel Movement Request</span>
                  <span className="table-badge neutral">Approved</span>
                </div>
                <div className="table-row">
                  <span>13DIT24F1082</span>
                  <span>Campus Welfare Assistance</span>
                  <span className="table-badge review">Under Review</span>
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
          <span className="window-title">FlipBook</span>
        </div>
        <div className="window-body flipbook-body">
          <div className="flipbook-reader-layout">
            <div className="reader-toc">
              <span className="toc-title">Table of Contents</span>
              <span className="toc-item active">01. Introduction to Web Tech</span>
              <span className="toc-item">02. Relational Database Modeling</span>
              <span className="toc-item">03. REST API Architecture</span>
              <span className="toc-item">04. Frontend Performance</span>
            </div>
            <div className="reader-page-spread">
              <div className="reader-page left-page">
                <span className="page-chapter">Chapter 02</span>
                <h4>Database Architecture</h4>
                <p>Digital learning modules formatted for continuous client reading across both mobile and desktop screens.</p>
                <div className="code-snippet-preview">
                  <code>composer create-project laravel/laravel</code>
                </div>
                <span className="page-footer">Page 24</span>
              </div>
              <div className="reader-page right-page">
                <span className="page-chapter">Interactive Reader</span>
                <h4>Responsive Page View</h4>
                <p>Hardware-accelerated CSS page transitions with low latency, clear typography, and touch support.</p>
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
          Selected projects I&apos;ve designed and developed during my Diploma studies and client-based work.
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
