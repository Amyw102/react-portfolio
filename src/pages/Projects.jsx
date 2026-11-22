import PageHeader from '../components/PageHeader.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import Icon from '../components/Icon.jsx';
import { projects, profile } from '../data/portfolioData.js';

/**
 * Projects page: three in-depth project cards, each with an image,
 * the role I played, the outcome and the technology used.
 */
export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Projects that taught me"
        highlight="something."
        description="Coursework, team builds and side experiments — each one solved a real problem and left me with a better habit."
      />

      <section className="section projects-section">
        <div className="project-ledger" aria-label="Project overview">
          <span>
            <strong>{projects.length}</strong> featured projects
          </span>
          <span>
            <strong>2024 — 2026</strong> timeframe
          </span>
          <span>
            <strong>Team &amp; solo</strong> collaborations
          </span>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="section more-work">
        <div className="more-work-inner">
          <div>
            <span className="eyebrow">Still curious?</span>
            <h2>More experiments live on GitHub.</h2>
            <p>
              Smaller exercises, practice repositories and work-in-progress
              builds are published there as I finish them.
            </p>
          </div>
          <a
            className="btn btn-primary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" size={18} />
            Visit GitHub
          </a>
        </div>
      </section>
    </>
  );
}
