import { portfolioData, type CaseStudy } from '../data/resumeData'

interface ProjectsProps {
  navigate: (path: string) => void
}

export function Projects({ navigate }: ProjectsProps) {
  const { caseStudies } = portfolioData

  const renderProjectVisual = (project: CaseStudy) => (
    <div className="project-visual-frame" aria-label={`${project.title} Technical Overview`}>
      <div className="window-header">
        <div className="window-dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <span className="window-title">
          {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '') : `SYSTEM SPEC // ${project.id.toUpperCase()}`}
        </span>
        <span className="window-meta-tag">{project.year}</span>
      </div>

      <div className="project-spec-composition">
        <div className="spec-hero-block">
          <span className="spec-index-label">PROJECT {project.index}</span>
          <h4 className="spec-system-title">{project.title.toUpperCase()}</h4>
          <p className="spec-system-sub">{project.subtitle}</p>
        </div>

        <div className="spec-metadata-grid">
          <div className="spec-meta-item">
            <span className="spec-label">ROLE</span>
            <span className="spec-value">{project.role}</span>
          </div>

          <div className="spec-meta-item">
            <span className="spec-label">CLIENT / ORG</span>
            <span className="spec-value">{project.client}</span>
          </div>

          <div className="spec-meta-item">
            <span className="spec-label">TYPE</span>
            <span className="spec-value">{project.type}</span>
          </div>

          <div className="spec-meta-item">
            <span className="spec-label">CORE STACK</span>
            <span className="spec-value">{project.stack.join(' · ')}</span>
          </div>
        </div>

        <div className="spec-modules-box">
          <span className="spec-modules-label">DELIVERED ARCHITECTURE &amp; MODULES</span>
          <ul className="spec-modules-list">
            {project.keyFeatures.slice(0, 3).map((feat, i) => (
              <li key={i} className="spec-module-item">
                <span className="spec-module-bullet">0{i + 1}</span>
                <span>{feat.split(':')[0]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )

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
