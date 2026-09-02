import { resumeData } from '../data/resumeData'

export function Skills() {
  const { skills, languages } = resumeData

  return (
    <section className="section" id="skills">
      <div className="heading">
        <div>
          <span className="kicker">Capabilities &amp; Stack</span>
          <h2>Skills &amp; Languages</h2>
        </div>
        <p className="intro">
          Specialized in front-end development, accessibility-first design, color theory, typography, and clean web development practices.
        </p>
      </div>

      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((categoryGroup) => (
            <div className="skill-card" key={categoryGroup.category}>
              <div className="skill-category-header">
                <span className="category-marker" />
                <h3 className="category-name">{categoryGroup.category}</h3>
              </div>

              <div className="skill-items-list">
                {categoryGroup.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-item-header">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-note">{skill.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="languages-card">
          <div className="languages-header">
            <div className="languages-icon-wrap">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" x2="22" y1="12" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <div>
              <h3 className="languages-title">Language Proficiency</h3>
              <p className="languages-subtitle">Verbal and written communication capabilities</p>
            </div>
          </div>

          <div className="languages-list">
            {languages.map((lang) => (
              <div className="language-item" key={lang.name}>
                <div className="language-info">
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level-tag">{lang.level}</span>
                </div>
                <div className="language-progress-track">
                  <div
                    className="language-progress-fill"
                    style={{ width: `${lang.percentage}%` }}
                    role="progressbar"
                    aria-valuenow={lang.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
