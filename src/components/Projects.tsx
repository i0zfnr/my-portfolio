import { useState } from 'react'
import { portfolioData, type CaseStudy } from '../data/resumeData'

interface ProjectsProps {
  navigate: (path: string) => void
}

export function Projects({ navigate }: ProjectsProps) {
  const { caseStudies } = portfolioData
  const [activePreviewId, setActivePreviewId] = useState<string | null>(null)

  const renderProjectVisual = (project: CaseStudy) => {
    const isLivePreviewActive = activePreviewId === project.id
    const displayDomain = project.liveUrl
      ? project.liveUrl.replace(/^https?:\/\//, '')
      : `${project.id}.ryz.my.id`

    return (
      <div
        className="project-visual-frame"
        aria-label={`${project.title} Interface Preview`}
      >
        {/* Minimal Browser Frame Header */}
        <div className="window-header">
          <div className="window-dots">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>

          <span className="window-title">{displayDomain}</span>

          <div className="window-header-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="window-action-link"
                title={`Open ${displayDomain} in new tab`}
              >
                Open Live Site ↗
              </a>
            )}
          </div>
        </div>

        {/* Preview Display Area: Real Screenshot or On-Demand Interactive Iframe */}
        <div className="project-preview-canvas">
          {isLivePreviewActive && project.liveUrl ? (
            <div className="interactive-iframe-container">
              <iframe
                src={project.liveUrl}
                title={`${project.title} Interactive Live Preview`}
                className="preview-iframe-element"
                sandbox="allow-scripts allow-same-origin allow-forms"
                loading="lazy"
              />
              <div className="iframe-control-bar">
                <span className="iframe-note">
                  Interactive preview session · If restricted by browser CSP, open directly
                </span>
                <div className="iframe-btns">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="iframe-bar-btn"
                  >
                    Open Full Site ↗
                  </a>
                  <button
                    type="button"
                    className="iframe-bar-btn close-btn"
                    onClick={() => setActivePreviewId(null)}
                  >
                    Close Preview ✕
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="preview-screenshot-wrapper">
              <img
                src={project.screenshotUrl}
                alt={project.screenshotAlt || `${project.title} interface screenshot`}
                className="preview-screenshot-image"
                loading="lazy"
                decoding="async"
              />

              <div className="preview-overlay-bar">
                {project.liveUrl && (
                  <>
                    <button
                      type="button"
                      className="preview-action-btn secondary"
                      onClick={() => setActivePreviewId(project.id)}
                      title="Load live interactive preview inside frame"
                    >
                      Interactive Preview
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="preview-action-btn primary"
                    >
                      Open Live Site ↗
                    </a>
                  </>
                )}
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
                    Open Live Site ↗
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
