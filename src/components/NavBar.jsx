import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo.jsx';

const navigationLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/education', label: 'Education' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
];

/**
 * Sticky top navigation with the custom logo, page links and a mobile menu.
 * The menu closes whenever the visitor picks a page.
 */
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent the page behind the mobile menu from scrolling while it is open.
  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link className="brand-link" to="/" onClick={closeMenu}>
          <Logo />
        </Link>

        <nav
          className={`site-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`.trim()
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/contact" onClick={closeMenu}>
            Let’s talk
          </Link>
        </nav>

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
