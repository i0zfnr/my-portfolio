import { portfolioData } from '../data/resumeData'

export function Journey() {
  const { journey } = portfolioData

  return (
    <section className="section-block journey-section" id="journey" aria-labelledby="journey-title">
      <div className="site-container">
        <div className="section-heading reveal-on-scroll">
          <p className="section-label">04 · Journey</p>
          <h2 id="journey-title">A steady climb from circuits to systems.</h2>
        </div>

        <ol className="journey-list">
          {journey.map((step, index) => (
            <li className="journey-item reveal-on-scroll" key={`${step.year}-${step.title}`}>
              <span className="journey-index">{String(index + 1).padStart(2, '0')}</span>
              <time>{step.year}</time>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
