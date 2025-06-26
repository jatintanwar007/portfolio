import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg bg-white fixed-top"
      id="portfolio-navbar"
    >
      <div className="container">
        {/* Logo or Brand */}
        <a className="navbar-brand" href="#">My-Portfolio</a>

        {/* Hamburger Menu Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="portfolio-nav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="portfolio-nav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {[
              { id: 'home-section', label: 'Home' },
              { id: 'about-section', label: 'About' },
              { id: 'skills-section', label: 'Skills' },
              { id: 'services-section', label: 'Services' },
              { id: 'projects-section', label: 'Projects' },
              { id: 'contact-section', label: 'Contact' },
            ].map(({ id, label }) => (
              <li className="nav-item" key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link ${activeSection === id ? 'active fw-bold text-primary' : ''}`}
                  onClick={() => setIsMenuOpen(false)} // Close menu on click (mobile)
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
