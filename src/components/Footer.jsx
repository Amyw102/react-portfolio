import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { profile } from '../data/portfolioData.js';

/** Shared footer with brand, quick links and contact details. */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo size={34} />
          <p>
            Software Engineering Technician building thoughtful, reliable
            interfaces from Suzhou.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <Link to="/about">About me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/education">Education</Link>
          <Link to="/services">Services</Link>
        </div>

        <div className="footer-links">
          <h3>Contact</h3>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          <span>{profile.location}</span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {currentYear} {profile.legalName}. Built with React.
        </span>
        <span className="footer-note">Designed &amp; coded by hand.</span>
      </div>
    </footer>
  );
}
