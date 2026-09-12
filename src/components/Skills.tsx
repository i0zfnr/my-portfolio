import { portfolioData } from '../data/resumeData'

export function Skills() {
  const { skillsMatrix } = portfolioData

  return (
    <section className="section-block skills-section" id="skills" aria-labelledby="skills-title">
      <div className="site-container">
        <div className="section-heading section-heading-split reveal-on-scroll">
          <p className="section-label">05 · Toolkit</p>
          <h2 id="skills-title">The tools follow the problem.</h2>
          <p>I work across the stack and choose technology for reliability, maintainability, and a clear user experience.</p>
        </div>

        <div className="skills-grid">
          {skillsMatrix.map((group, index) => (
            <article className={`skill-card skill-card-${index + 1} reveal-on-scroll`} key={group.category}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.category}</h3>
              <p>{group.skills.join(' · ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
