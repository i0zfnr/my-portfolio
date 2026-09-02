import { portfolioData } from '../data/resumeData'

export function Skills() {
  const { skillsMatrix } = portfolioData

  return (
    <section className="section-block" id="skills">
      <div className="section-header">
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <p className="section-subtitle">
          Core technical tools and frameworks used across my development workflow.
        </p>
      </div>

      <div className="skills-grid-clean">
        {skillsMatrix.map((group) => (
          <div className="skill-column" key={group.category}>
            <h3 className="skill-group-title">{group.category}</h3>
            <ul className="skill-items-plain">
              {group.skills.map((skill) => (
                <li key={skill} className="skill-plain-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
