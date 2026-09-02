import { portfolioData } from '../data/resumeData'

export function Journey() {
  const { journey } = portfolioData

  return (
    <section className="section-block" id="journey">
      <div className="section-header">
        <h2 className="section-title">Development Journey</h2>
        <p className="section-subtitle">
          My progression from first programming explorations in robotics toward building full-stack web applications.
        </p>
      </div>

      <div className="journey-grid">
        {journey.map((step, index) => (
          <div className="journey-column-item" key={index}>
            <div className="journey-marker-row">
              <span className="journey-year-pill">{step.year}</span>
              <span className="journey-line-connector" />
            </div>

            <div className="journey-content-box">
              <h3 className="journey-item-title">{step.title}</h3>
              <p className="journey-item-desc">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
