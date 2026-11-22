/**
 * Reusable page intro used by About, Projects, Education, Services and Contact
 * so interior pages share the same typographic rhythm.
 */
export default function PageHeader({ eyebrow, title, highlight, description }) {
  return (
    <header className="page-header">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="page-title">
        {title} {highlight && <em>{highlight}</em>}
      </h1>
      {description && <p className="page-lede">{description}</p>}
    </header>
  );
}
