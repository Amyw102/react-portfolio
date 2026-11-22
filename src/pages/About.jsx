import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import Icon from '../components/Icon.jsx';
import avatarImage from '../assets/avatar.jpg';
import { profile, skillGroups } from '../data/portfolioData.js';

/**
 * About page: legal name, portrait, short biography, key facts,
 * skills overview and a downloadable PDF résumé.
 */
export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About me"
        title="More than a"
        highlight="résumé."
        description="A short introduction to who I am, how I work and what I’m looking for next."
      />

      <section className="section about-section">
        <div className="about-grid">
          <aside className="about-portrait">
            <div className="portrait-frame">
              <img
                src={avatarImage}
                alt={`Portrait of ${profile.legalName}`}
                width="480"
                height="600"
              />
              <span className="portrait-corner top-left" aria-hidden="true" />
              <span className="portrait-corner bottom-right" aria-hidden="true" />
            </div>

            <div className="portrait-caption">
              <span className="status-dot" aria-hidden="true" />
              Based in {profile.location}
            </div>

            <a
              className="resume-card"
              href={profile.resumeFile}
              download="WuYi-Resume.pdf"
            >
              <span className="resume-icon">
                <Icon name="download" size={20} />
              </span>
              <span>
                <strong>Download my résumé</strong>
                <em>PDF · one page · updated 2026</em>
              </span>
            </a>
          </aside>

          <div className="about-copy">
            <span className="eyebrow">Hello, I’m {profile.legalName}</span>
            <h2>
              A Software Engineering Technician who cares about the{' '}
              <em>small details</em>.
            </h2>

            <p className="about-lede">{profile.intro}</p>

            <p>
              Alongside my studies I work as a part-time teaching assistant at a
              community after-school centre, tutoring primary-school pupils in
              Chinese, maths and English. Explaining a tricky idea to a
              nine-year-old turns out to be excellent practice for explaining
              code to a teammate.
            </p>

            <p>
              Outside of class I rebuild interfaces I admire to learn how they
              work, help classmates debug their Java assignments, and keep a
              running list of “one day” side projects. I work best in a team
              where people review each other’s code honestly and explain the
              “why” behind a decision — that is how I have grown fastest.
            </p>

            <p>
              Right now I am looking for an internship in front-end development
              or software support, where I can ship real features and learn from
              people who have built things at scale.
            </p>

            <dl className="fact-grid">
              <div>
                <dt>Legal name</dt>
                <dd>{profile.legalName}</dd>
              </div>
              <div>
                <dt>Programme</dt>
                <dd>{profile.program}</dd>
              </div>
              <div>
                <dt>School</dt>
                <dd>{profile.school}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Availability</dt>
                <dd>Internship · 2027</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>Chinese · English (CET-4, IELTS 6.5)</dd>
              </div>
            </dl>

            <div className="link-row">
              <Link className="btn btn-dark" to="/contact">
                Work with me
                <Icon name="arrow" size={18} />
              </Link>
              <a
                className="btn btn-outline"
                href={profile.resumeFile}
                download="WuYi-Resume.pdf"
              >
                <Icon name="download" size={18} />
                Résumé (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">What I work with</span>
            <h2>Skills &amp; tools</h2>
          </div>
          <p className="section-note">
            Comfortable with the basics, improving the edges every semester.
          </p>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group, groupIndex) => (
            <div className="skill-card" key={group.title}>
              <span className="skill-number">0{groupIndex + 1}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="values-strip">
        <div className="values-inner">
          <h2>How I work</h2>
          <div className="values-grid">
            <div>
              <span>01</span>
              <h3>Clarity first</h3>
              <p>Readable names, small components, comments where the “why” matters.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Test the edges</h3>
              <p>Empty states, long text, small screens — the details users notice.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Keep learning</h3>
              <p>Every project gets a short retro: what worked, what I’d change.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
