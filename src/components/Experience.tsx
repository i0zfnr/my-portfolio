import { resumeData } from '../data/resumeData'

export function Experience() {
  const { education, work } = resumeData

  return (
    <section className="section" id="experience">
      <div className="heading">
        <div>
          <span className="kicker">Journey &amp; Foundation</span>
          <h2>Education &amp; Work Background</h2>
        </div>
        <p className="intro">
          Academic foundation in Information Technology combined with hands-on frontline work experience cultivating communication and teamwork.
        </p>
      </div>

      <div className="experience-layout">
        <div className="experience-column">
          <div className="column-header">
            <div className="column-icon-box">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <div>
              <h3 className="column-title">Education Background</h3>
              <p className="column-subtitle">Academic degrees &amp; qualifications</p>
            </div>
          </div>

          <div className="timeline-group">
            {education.map((edu, idx) => (
              <article className="timeline-card" key={idx}>
                <div className="timeline-badge-bar">
                  <span className="timeline-period">{edu.period}</span>
                  {edu.cgpa && (
                    <span className="cgpa-pill">
                      <span className="cgpa-dot" /> CGPA: <strong>{edu.cgpa}</strong>
                    </span>
                  )}
                  {edu.grades && (
                    <span className="grades-pill">
                      Results: {edu.grades}
                    </span>
                  )}
                </div>

                <h4 className="institution-name">{edu.institution}</h4>
                <div className="qualification-title">{edu.qualification}</div>
                {edu.stream && <div className="stream-name">Field: {edu.stream}</div>}
                
                <p className="timeline-location">
                  <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {edu.location}
                </p>

                <ul className="timeline-bullets">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="experience-column">
          <div className="column-header">
            <div className="column-icon-box">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </div>
            <div>
              <h3 className="column-title">Work Background</h3>
              <p className="column-subtitle">Practical employment experience</p>
            </div>
          </div>

          <div className="timeline-group">
            {work.map((job, idx) => (
              <article className="timeline-card work-card" key={idx}>
                <div className="timeline-badge-bar">
                  <span className="timeline-period">{job.period}</span>
                  <span className="work-type-pill">Retail &amp; Customer Operations</span>
                </div>

                <h4 className="institution-name">{job.company}</h4>
                <div className="qualification-title">{job.role}</div>

                <p className="timeline-location">
                  <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {job.location}
                </p>

                <ul className="timeline-bullets">
                  {job.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx}>{resp}</li>
                  ))}
                </ul>

                <div className="work-takeaway">
                  <span className="takeaway-badge">Key Strengths Developed:</span>
                  <p>Customer rapport, adaptability under pressure, dependable execution, and positive interpersonal communication.</p>
                </div>
              </article>
            ))}

            <div className="internship-callout">
              <div className="callout-header">
                <span className="callout-indicator" />
                <h4>Seeking Next Challenge: IT Internship</h4>
              </div>
              <p>
                Prepared to bring strong technical problem solving, fast learning agility, and front-end capabilities to an energetic software development or IT engineering team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
