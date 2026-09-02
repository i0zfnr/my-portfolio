import { portfolioData } from '../data/resumeData'

export function Experience() {
  const { timeline } = portfolioData

  return (
    <section className="section-block" id="experience">
      <div className="section-header">
        <h2 className="section-title">Experience &amp; Education</h2>
        <p className="section-subtitle">
          My progression from first programming explorations to building full-stack web systems.
        </p>
      </div>

      <div className="timeline-clean">
        {timeline.map((item, index) => (
          <div className="timeline-clean-row" key={index}>
            <div className="timeline-time-col">
              <span className="timeline-year">{item.period}</span>
            </div>
            <div className="timeline-detail-col">
              <div className="timeline-role-line">
                <h3 className="timeline-entry-title">{item.title}</h3>
                <span className="timeline-entry-org">{item.organization}</span>
              </div>
              {item.details && (
                <p className="timeline-entry-desc">{item.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
