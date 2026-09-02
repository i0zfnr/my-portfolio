import { resumeData } from '../data/resumeData'

export function References() {
  const { reference } = resumeData

  return (
    <section className="section" id="references">
      <div className="heading">
        <div>
          <span className="kicker">Academic Endorsement</span>
          <h2>Professional Reference</h2>
        </div>
        <p className="intro">
          Academic supervision and performance evaluation from the Department of Information &amp; Communication Technology.
        </p>
      </div>

      <div className="reference-card-container">
        <div className="reference-card">
          <div className="reference-top">
            <div className="reference-avatar-box">
              <span className="reference-initials">NA</span>
              <span className="verified-badge" title="Verified Academic Lecturer" aria-label="Verified Academic Lecturer">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </span>
            </div>

            <div className="reference-identity">
              <span className="ref-role-pill">Academic Lecturer &amp; Supervisor</span>
              <h3 className="reference-name">{reference.name}</h3>
              <p className="reference-title">{reference.title}</p>
              <p className="reference-dept">{reference.department}</p>
              <p className="reference-institution">
                <svg className="icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                {reference.institution}
              </p>
            </div>
          </div>

          <div className="reference-actions">
            <a className="ref-btn" href={`tel:${reference.phone.replace(/\s+/g, '')}`}>
              <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Call: {reference.phone}</span>
            </a>

            <a className="ref-btn ref-btn-secondary" href={`mailto:${reference.email}`}>
              <svg className="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span>Email: {reference.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
