import { useEffect, useRef, useState } from 'react'
import { portfolioData, type CaseStudy } from '../data/resumeData'

interface ProjectsProps {
  navigate: (path: string) => void
}

type PreviewStatus = 'idle' | 'checking' | 'loading' | 'ready' | 'error'

function ProjectLivePreview({ project, priority }: { project: CaseStudy; priority: boolean }) {
  const previewRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(priority)
  const [status, setStatus] = useState<PreviewStatus>(priority ? 'checking' : 'idle')
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    if (shouldLoad) return

    const preview = previewRef.current
    if (!preview || !('IntersectionObserver' in window)) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true)
        observer.disconnect()
      }
    }, { rootMargin: '320px 0px', threshold: 0.01 })

    observer.observe(preview)
    return () => observer.disconnect()
  }, [shouldLoad])

  useEffect(() => {
    if (!shouldLoad || !project.liveUrl || project.refusedToConnect) return

    let cancelled = false
    setStatus('checking')

    fetch(project.liveUrl, { mode: 'no-cors', cache: 'no-store' })
      .then(() => {
        if (!cancelled) setStatus('loading')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [attempt, project.liveUrl, project.refusedToConnect, shouldLoad])

  const retryPreview = () => {
    setStatus('checking')
    setAttempt((value) => value + 1)
  }

  const displayDomain = project.liveUrl?.replace(/^https?:\/\//, '') ?? project.title
  const showLiveSite = Boolean(project.liveUrl && shouldLoad && (status === 'loading' || status === 'ready')) && !project.refusedToConnect

  return (
    <div ref={previewRef} className={`project-visual live-preview-${project.refusedToConnect ? 'refused' : status}`}>
      {!project.refusedToConnect && (
        <img
          className="project-preview-poster"
          src={project.screenshotUrl}
          alt={project.screenshotAlt ?? `${project.title} interface`}
          loading={priority ? 'eager' : 'lazy'}
          aria-hidden={status === 'ready'}
        />
      )}

      {project.refusedToConnect ? (
        <div className="project-refused-connect" role="region" aria-label={`${displayDomain} refused to connect`}>
          <div className="refused-connect-card">
            <div className="refused-connect-icon" aria-hidden="true">
              <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
                <path
                  d="M12 6C9.79 6 8 7.79 8 10V38C8 40.21 9.79 42 12 42H36C38.21 42 40 40.21 40 38V18L28 6H12Z"
                  className="refused-page-bg"
                />
                <path
                  d="M28 6V18H40L28 6Z"
                  className="refused-page-fold"
                />
                <circle cx="24" cy="28.5" r="2.5" className="refused-page-mark" />
                <rect x="22.25" y="19" width="3.5" height="6.5" rx="1.75" className="refused-page-mark" />
              </svg>
            </div>
            <h3 className="refused-connect-heading">
              <strong>{displayDomain}</strong> refused to connect.
            </h3>
            <div className="refused-connect-body">
              <p>Try:</p>
              <ul>
                <li>Checking the connection</li>
                <li>Checking the proxy and the firewall</li>
              </ul>
            </div>
            <div className="refused-connect-code">ERR_CONNECTION_REFUSED</div>
          </div>
        </div>
      ) : (
        showLiveSite && (
          <iframe
            key={`${project.id}-${attempt}`}
            className="project-live-iframe"
            src={project.liveUrl}
            title={`${project.title} live website preview`}
            loading={priority ? 'eager' : 'lazy'}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
            allowFullScreen
            onLoad={() => setStatus('ready')}
            onError={() => setStatus('error')}
          />
        )
      )}

      <div className="project-browser-bar">
        <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
        <small>{displayDomain}</small>
        {status === 'ready' && !project.refusedToConnect && <strong><i aria-hidden="true" /> Live</strong>}
      </div>

      {!project.refusedToConnect && (status === 'checking' || status === 'loading') && (
        <div className="project-preview-status" role="status">
          <span className="preview-spinner" aria-hidden="true" />
          Opening live preview…
        </div>
      )}

      {!project.refusedToConnect && status === 'error' && (
        <div className="project-preview-fallback" role="status">
          <span>Live preview is temporarily unavailable.</span>
          <button type="button" onClick={retryPreview}>Try again</button>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Open site ↗</a>}
        </div>
      )}
    </div>
  )
}

export function Projects({ navigate }: ProjectsProps) {
  const { caseStudies } = portfolioData

  return (
    <section className="section-block projects-section" id="work" aria-labelledby="work-title">
      <div className="site-container">
        <div className="section-heading reveal-on-scroll">
          <p className="section-label">01 · Selected work</p>
          <h2 id="work-title">Built for real workflows.</h2>
          <p>
            Three working products across welfare, student affairs, and digital learning—each shaped around the people using it.
          </p>
        </div>

        <div className="project-list">
          {caseStudies.map((project, index) => (
            <article className="project-card reveal-on-scroll" key={project.id}>
              <ProjectLivePreview project={project} priority={index === 0} />

              <div className="project-copy">
                <div className="project-meta">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{project.year}</span>
                  <span>{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-summary">{project.summary}</p>

                <ul className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>

                <div className="project-actions">
                  <button type="button" className="text-link" onClick={() => navigate(`/projects/${project.id}`)}>
                    Read case study <span aria-hidden="true">↗</span>
                  </button>
                  {project.liveUrl && (
                    <a className="text-link text-link-muted" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Visit live site <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
