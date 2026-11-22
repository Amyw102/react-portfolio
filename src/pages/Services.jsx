import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import Icon from '../components/Icon.jsx';
import { services, processSteps } from '../data/portfolioData.js';

/**
 * Services page: the four areas I can help with, what each engagement
 * includes, and the four-step process I follow from brief to handover.
 */
export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Where I can"
        highlight="help."
        description="Practical, well-documented work for student teams, small businesses and anyone who needs an extra pair of hands on a build."
      />

      <section className="section services-section">
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>
              <div className="service-top">
                <span className="service-icon">
                  <Icon name={service.icon} size={26} />
                </span>
                <span className="service-number">{service.number}</span>
              </div>

              <h2>{service.title}</h2>
              <p>{service.description}</p>

              <ul className="service-deliverables">
                {service.deliverables.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">How we’ll work</span>
            <h2>A simple four-step process</h2>
          </div>
          <p className="section-note">
            No surprises: you always know what is happening and what comes next.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <div className="process-step" key={step.number}>
              <span className="process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="service-note">
        <div className="service-note-inner">
          <Icon name="spark" size={24} />
          <div>
            <h2>Not sure which service fits?</h2>
            <p>
              Send a short description of what you need. I’ll reply with a
              straight answer, a rough timeline and whether it is something I
              can genuinely deliver.
            </p>
          </div>
          <Link className="btn btn-primary" to="/contact">
            Ask me
            <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
