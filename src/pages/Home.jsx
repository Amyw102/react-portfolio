import { Link, useLocation } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { profile, projects, stats } from '../data/portfolioData.js';

/**
 * Landing page: welcome message, mission statement, quick stats,
 * featured projects and a closing call to action.
 */
export default function Home() {
  const location = useLocation();
  const messageSent = Boolean(location.state?.messageSent);
  const visitorName = location.state?.visitorName;

  return (
    <>
      {messageSent && (
        <div className="form-banner" role="status">
          <Icon name="check" size={18} />
          <p>
            Thanks{visitorName ? `, ${visitorName}` : ''}! Your message was
            captured. I’ll get back to you within two working days.
          </p>
        </div>
      )}

      <section className="hero">
        <div className="hero-backdrop" aria-hidden="true">
          <img src={profile.heroImage} alt="" />
        </div>

        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-light">
              <span className="status-dot" aria-hidden="true" />
              Open to internships · {profile.location}
            </span>

            <h1 className="hero-title">
              {profile.firstName}
              <span className="accent-dot">.</span>
            </h1>

            <p className="hero-role">{profile.role}</p>

            <p className="hero-lede">
              I design and build clean, dependable web experiences — from the
              first sketch to the last commit. Currently studying at{' '}
              {profile.school}.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/projects">
                View my work
                <Icon name="arrow" size={18} />
              </Link>
              <Link className="btn btn-ghost" to="/about">
                About me
              </Link>
            </div>

            <ul className="hero-stats" aria-label="Quick facts">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-card" aria-hidden="true">
            <div className="code-window">
              <div className="code-window-bar">
                <span />
                <span />
                <span />
                <em>wuyi.js</em>
              </div>
              <pre>
                <code>
                  <span className="code-keyword">const</span> developer = {'{'}
                  {'\n'}  role: <span className="code-string">'Software Engineering Technician'</span>,
                  {'\n'}  based: <span className="code-string">'Suzhou, CN'</span>,
                  {'\n'}  stack: [<span className="code-string">'React'</span>,{' '}
                  <span className="code-string">'Java'</span>,{' '}
                  <span className="code-string">'MySQL'</span>],
                  {'\n'}  learning: <span className="code-keyword">true</span>,
                  {'\n'}  shipping: <span className="code-keyword">true</span>
                  {'\n'}
                  {'}'};
                </code>
              </pre>
              <div className="code-window-status">
                <span className="status-dot" />
                <span>building something useful</span>
              </div>
            </div>

            <div className="orb orb-amber" />
            <div className="orb orb-teal" />
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <span className="scroll-line" aria-hidden="true" />
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-grid">
          <div>
            <span className="eyebrow">My mission</span>
            <h2>
              Good software is <em>quiet</em>. It just works.
            </h2>
          </div>
          <div>
            <p className="mission-quote">{profile.mission}</p>
            <p className="mission-signature">— {profile.legalName}</p>
          </div>
        </div>
      </section>

      <section className="section featured-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2>Recent projects</h2>
          </div>
          <Link className="text-link" to="/projects">
            All projects
            <Icon name="arrow" size={16} />
          </Link>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} compact />
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-inner">
          <div>
            <span className="eyebrow eyebrow-light">Next step</span>
            <h2>Have a project or an internship in mind?</h2>
            <p>I’m ready to learn, contribute and make your next build smoother.</p>
          </div>
          <Link className="btn btn-primary" to="/contact">
            Get in touch
            <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
