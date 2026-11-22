import Icon from './Icon.jsx';

/**
 * Project card: image, index, role, outcome and tech tags.
 * Used on the Projects page and in the home page's featured strip.
 */
export default function ProjectCard({ project, compact = false }) {
  return (
    <article className={`project-card ${compact ? 'is-compact' : ''}`.trim()}>
      <div className="project-media">
        <img src={project.image} alt={`${project.title} interface preview`} />
        <span className="project-index">{project.index}</span>
        {project.mediaNote && (
          <span className="project-media-note">{project.mediaNote}</span>
        )}
      </div>

      <div className="project-body">
        <div className="project-meta-row">
          <span>{project.subtitle}</span>
          <span>{project.year}</span>
        </div>

        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        {!compact && (
          <div className="project-role">
            <span className="role-label">My role</span>
            <p>{project.role}</p>
            <span className="role-label">Outcome</span>
            <p>{project.outcome}</p>
          </div>
        )}

        <ul className="tag-list" aria-label="Technologies used">
          {project.tech.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {project.link && (
          <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
            View on GitHub
            <Icon name="external" size={16} />
          </a>
        )}
      </div>
    </article>
  );
}
