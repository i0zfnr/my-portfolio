import { resumeData } from '../data/resumeData'

export function Projects() {
  const { projects } = resumeData

  return (
    <section className="section" id="projects">
      <div className="heading">
        <div>
          <span className="kicker">Systems &amp; Applications</span>
          <h2>Featured Projects</h2>
        </div>
        <p className="intro">
          Key web applications developed for public sector welfare and higher education campus management, focusing on accessibility, usability, and data workflows.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.id}>
            <div className="project-header">
              <div className="project-meta">
                <span className="project-index">0{index + 1}</span>
                <span className="project-badge">{project.badge}</span>
                <span className="project-year">{project.year}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-org">
                <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                {project.organization}
              </p>
            </div>

            <p className="project-desc">{project.description}</p>

            <div className="project-features-container">
              <h4 className="features-title">Key Capabilities &amp; Modules:</h4>
              <ul className="project-features">
                {project.features.map((feature, i) => (
                  <li key={i}>
                    <svg className="feature-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-highlight-box">
              <svg className="sparkle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
              </svg>
              <span>{project.highlight}</span>
            </div>

            <div className="tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
