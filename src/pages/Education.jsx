import PageHeader from '../components/PageHeader.jsx';
import Icon from '../components/Icon.jsx';
import { education, certifications, experience } from '../data/portfolioData.js';

/**
 * Education page: a chronological timeline of qualifications (institution,
 * dates, credential) followed by certifications and current coursework.
 */
export default function Education() {
  return (
    <>
      <PageHeader
        eyebrow="Education & qualifications"
        title="The path so"
        highlight="far."
        description="Formal study, language qualifications and the courses that shaped how I build software."
      />

      <section className="section education-section">
        <div className="timeline">
          {education.map((entry, index) => (
            <article className="timeline-entry" key={entry.institution}>
              <div className="timeline-marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>

              <div className="timeline-content">
                <div className="timeline-top">
                  <span className="timeline-period">{entry.period}</span>
                  <span className="timeline-status">{entry.expected}</span>
                </div>

                <h2>{entry.institution}</h2>
                <p className="timeline-qualification">{entry.qualification}</p>
                <p className="timeline-location">
                  <Icon name="pin" size={15} />
                  {entry.location}
                </p>
                <p className="timeline-description">{entry.description}</p>

                <ul className="tag-list" aria-label="Relevant coursework">
                  {entry.coursework.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Work experience</span>
            <h2>Outside the classroom</h2>
          </div>
          <p className="section-note">
            Part-time work that sharpened my communication and patience.
          </p>
        </div>

        {experience.map((job) => (
          <article className="experience-card" key={job.role}>
            <div className="experience-top">
              <span className="timeline-period">{job.period}</span>
              <span className="timeline-location">
                <Icon name="pin" size={15} />
                {job.location}
              </span>
            </div>

            <h3>{job.role}</h3>
            <p className="experience-organisation">{job.organisation}</p>
            <p className="timeline-description">{job.description}</p>

            <ul className="experience-list">
              {job.responsibilities.map((item) => (
                <li key={item}>
                  <Icon name="check" size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section certification-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Beyond the classroom</span>
            <h2>Certifications</h2>
          </div>
          <p className="section-note">
            Short courses and exams I completed alongside my diploma.
          </p>
        </div>

        <div className="certification-grid">
          {certifications.map((certification) => (
            <article className="certification-card" key={certification.title}>
              <div className="certification-icon">
                <Icon name="spark" size={22} />
              </div>
              <span className="certification-year">{certification.year}</span>
              <h3>{certification.title}</h3>
              <p className="certification-issuer">{certification.issuer}</p>
              <p>{certification.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="learning-band">
        <div className="learning-inner">
          <div>
            <span className="eyebrow eyebrow-light">Currently learning</span>
            <h2>What’s on my desk this semester</h2>
          </div>
          <ul className="learning-list">
            <li>React component patterns &amp; state management</li>
            <li>REST API fundamentals with Node.js</li>
            <li>Database indexing and query performance</li>
            <li>Automated testing with Jest</li>
          </ul>
        </div>
      </section>
    </>
  );
}
