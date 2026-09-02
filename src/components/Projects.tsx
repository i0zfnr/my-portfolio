import { useState } from 'react'
import { portfolioData, type CaseStudy } from '../data/resumeData'

interface ProjectsProps {
  navigate: (path: string) => void
}

type ViewportMode = 'desktop' | 'tablet' | 'mobile'

export function Projects({ navigate }: ProjectsProps) {
  const { caseStudies } = portfolioData
  const [activePreviews, setActivePreviews] = useState<Record<string, boolean>>({})
  const [viewports, setViewports] = useState<Record<string, ViewportMode>>({})

  const loadPreview = (projectId: string) => {
    setActivePreviews((prev) => ({ ...prev, [projectId]: true }))
    if (!viewports[projectId]) {
      setViewports((prev) => ({ ...prev, [projectId]: 'desktop' }))
    }
  }

  const closePreview = (projectId: string) => {
    setActivePreviews((prev) => ({ ...prev, [projectId]: false }))
  }

  const changeViewport = (projectId: string, mode: ViewportMode) => {
    setViewports((prev) => ({ ...prev, [projectId]: mode }))
  }

  const renderProjectVisual = (project: CaseStudy) => {
    const isLive = activePreviews[project.id]
    const viewport = viewports[project.id] || 'desktop'
    const displayDomain = project.liveUrl
      ? project.liveUrl.replace(/^https?:\/\//, '')
      : `${project.id}.ryz.my.id`

    return (
      <div
        className="project-visual-frame"
        aria-label={`${project.title} Live Application Window`}
      >
        {/* Browser Frame Window Header */}
        <div className="window-header">
          <div className="window-dots">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>

          <span className="window-title">{displayDomain}</span>

          <div className="window-header-controls">
            {isLive ? (
              <>
                <div className="viewport-toggle-group" role="group" aria-label="Simulated viewport size">
                  <button
                    type="button"
                    className={`viewport-btn ${viewport === 'desktop' ? 'active' : ''}`}
                    onClick={() => changeViewport(project.id, 'desktop')}
                  >
                    Desktop
                  </button>
                  <button
                    type="button"
                    className={`viewport-btn ${viewport === 'tablet' ? 'active' : ''}`}
                    onClick={() => changeViewport(project.id, 'tablet')}
                  >
                    Tablet
                  </button>
                  <button
                    type="button"
                    className={`viewport-btn ${viewport === 'mobile' ? 'active' : ''}`}
                    onClick={() => changeViewport(project.id, 'mobile')}
                  >
                    Mobile
                  </button>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="window-action-link"
                >
                  Open Full Site ↗
                </a>

                <button
                  type="button"
                  className="window-close-btn"
                  onClick={() => closePreview(project.id)}
                  aria-label="Close live preview"
                  title="Close live preview session"
                >
                  ✕
                </button>
              </>
            ) : (
              project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="window-action-link"
                >
                  Open Live Site ↗
                </a>
              )
            )}
          </div>
        </div>

        {/* Browser Body: Activation Placeholder OR Actual Live Iframe */}
        <div className="project-preview-canvas">
          {isLive && project.liveUrl ? (
            <div className={`preview-viewport-stage viewport-${viewport}`}>
              <iframe
                src={project.liveUrl}
                title={`${project.title} Live Application`}
                className="live-application-iframe"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
              />
            </div>
          ) : (
            <div className="preview-activation-screen">
              <div className="activation-content">
                <span className="activation-badge">LIVE APPLICATION</span>
                <h4 className="activation-title">{project.title.toUpperCase()}</h4>
                <p className="activation-domain">{displayDomain}</p>

                <div className="activation-actions">
                  <button
                    type="button"
                    className="btn-activate-live"
                    onClick={() => loadPreview(project.id)}
                  >
                    <span className="play-icon">▶</span> Load Live Preview
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-open-external"
                  >
                    Open Full Site ↗
                  </a>
                </div>

                <span className="activation-note">
                  Loads the actual deployed website interactively inside this browser frame.
                </span>
              </div>
            </div>
          )}
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
                    Open Full Site ↗
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
