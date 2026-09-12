import { portfolioData } from '../data/resumeData'

export function About() {
  const { personal } = portfolioData

  return (
    <section className="section-block about-section" id="about" aria-labelledby="about-title">
      <div className="site-container about-layout">
        <div className="about-heading reveal-on-scroll">
          <p className="section-label">03 · About</p>
          <h2 id="about-title">Curious by nature.<br />Practical by choice.</h2>
        </div>

        <div className="about-copy reveal-on-scroll">
          <p className="about-lead">{personal.aboutBio}</p>
          <p>
            Today I focus on full-stack development—building secure Laravel systems,
            responsive interfaces, and installable web experiences that solve everyday problems.
          </p>

          <dl className="about-facts">
            <div><dt>Based in</dt><dd>{personal.location}</dd></div>
            <div><dt>Studying</dt><dd>{personal.education}</dd></div>
            <div><dt>Institution</dt><dd>{personal.institution}</dd></div>
            <div><dt>Started coding</dt><dd>{personal.startedCoding}</dd></div>
          </dl>
        </div>
      </div>
    </section>
  )
}
