import { useState, useEffect, useRef } from 'react'
import { portfolioData, type CaseStudy } from '../data/resumeData'

interface ProjectsProps {
  navigate: (path: string) => void
}

type ViewportMode = 'desktop' | 'tablet' | 'mobile'

function ProjectLivePreview({ project }: { project: CaseStudy }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [viewport, setViewport] = useState<ViewportMode>('desktop')
  const [loadError, setLoadError] = useState(false)

  const displayDomain = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, '')
    : `${project.id}.ryz.my.id`

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    // Fallback if IntersectionObserver is unsupported
    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoad(true)
            observer.disconnect()
            break
          }
        }
      },
      {
        rootMargin: '300px 0px',
        threshold: 0.01,
      }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={containerRef}
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
          <div
            className="viewport-toggle-group"
            role="group"
            aria-label="Simulated viewport size"
          >
            <button
              type="button"
              className={`viewport-btn ${viewport === 'desktop' ? 'active' : ''}`}
              onClick={() => setViewport('desktop')}
            >
              Desktop
            </button>
            <button
              type="button"
              className={`viewport-btn ${viewport === 'tablet' ? 'active' : ''}`}
              onClick={() => setViewport('tablet')}
            >
              Tablet
            </button>
            <button
              type="button"
              className={`viewport-btn ${viewport === 'mobile' ? 'active' : ''}`}
              onClick={() => setViewport('mobile')}
            >
              Mobile
            </button>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="window-action-link"
              title={`Open ${displayDomain} in new tab`}
            >
              Open Full Site ↗
            </a>
          )}
        </div>
      </div>

      {/* Browser Body: Auto-loaded live iframe with subtle loading state */}
      <div className="project-preview-canvas">
        {shouldLoad && project.liveUrl ? (
          <div className={`preview-viewport-stage viewport-${viewport}`}>
            {isLoading && !loadError && (
              <div className="preview-loading-overlay">
                <span className="preview-loading-pulse" />
                <span className="preview-loading-text">Loading live application...</span>
              </div>
            )}

            {loadError ? (
              <div className="preview-error-fallback">
                <p className="preview-error-title">Live preview unavailable.</p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Open Full Site ↗
                </a>
              </div>
            ) : (
              <iframe
                src={project.liveUrl}
                title={`${project.title} Live Application`}
                className={`live-application-iframe ${isLoading ? 'is-loading' : 'is-ready'}`}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
                onLoad={() => setIsLoading(false)}
                onError={() => setLoadError(true)}
              />
            )}
          </div>
        ) : (
          <div className="preview-loading-overlay">
            <span className="preview-loading-pulse" />
            <span className="preview-loading-text">Preparing live preview...</span>
          </div>
        )}
      </div>
    </div>
  )
}

export function Projects({ navigate }: ProjectsProps) {
  const { caseStudies } = portfolioData

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
              <ProjectLivePreview project={project} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
