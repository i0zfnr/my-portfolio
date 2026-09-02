import { portfolioData } from '../data/resumeData'

export function About() {
  const { personal } = portfolioData

  return (
    <section className="section-block" id="about">
      <div className="about-editorial-layout">
        <div className="about-editorial-left">
          <h2 className="about-big-heading">About</h2>
        </div>

        <div className="about-editorial-right">
          <p className="about-main-bio">
            {personal.aboutBio}
          </p>

          <div className="about-meta-editorial-grid">
            <div className="about-meta-row">
              <span className="about-meta-label">Education</span>
              <span className="about-meta-value">
                {personal.education} — {personal.institution}
              </span>
            </div>

            <div className="about-meta-row">
              <span className="about-meta-label">Location</span>
              <span className="about-meta-value">{personal.location}</span>
            </div>

            <div className="about-meta-row">
              <span className="about-meta-label">Current Focus</span>
              <span className="about-meta-value">{personal.focus}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
