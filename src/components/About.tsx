import { portfolioData } from '../data/resumeData'

export function About() {
  const { personal } = portfolioData

  return (
    <section className="section-block" id="about">
      <div className="section-header">
        <h2 className="section-title">About</h2>
      </div>

      <div className="about-content">
        <div className="about-text-column">
          {personal.aboutShort.map((para, i) => (
            <p key={i} className="about-paragraph">
              {para}
            </p>
          ))}
        </div>

        <div className="about-education-column">
          <h3 className="education-title">Education</h3>
          <div className="education-card">
            <h4 className="edu-degree">{personal.education.degree}</h4>
            <p className="edu-institution">{personal.education.institution}</p>
            <div className="edu-meta">
              <span>{personal.education.period}</span>
              <span className="meta-separator">·</span>
              <span>CGPA: {personal.education.cgpa}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
