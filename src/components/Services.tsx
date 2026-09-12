import { portfolioData } from '../data/resumeData'

interface ServicesProps {
  navigate: (path: string) => void
  navigateSection: (sectionId: string) => void
}

export function Services({ navigate, navigateSection }: ServicesProps) {
  const { services } = portfolioData

  return (
    <section className="section-block services-section" id="services" aria-labelledby="services-title">
      <div className="site-container">
        <div className="section-heading section-heading-split reveal-on-scroll">
          <p className="section-label">02 · What I do</p>
          <h2 id="services-title">From the first schema to the final screen.</h2>
          <p>
            I design and develop complete web systems, with equal attention to the workflow behind the interface and the experience in front of it.
          </p>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-row reveal-on-scroll" key={service.id}>
              <span className="service-number">{service.number}</span>
              <div className="service-main">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-side">
                <ul className="service-capabilities">
                  {service.capabilities.slice(0, 4).map((capability) => <li key={capability}>{capability}</li>)}
                </ul>
                {service.relatedProject && (
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => service.relatedProject?.id ? navigate(`/projects/${service.relatedProject.id}`) : navigateSection('work')}
                  >
                    See related work <span aria-hidden="true">↗</span>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
