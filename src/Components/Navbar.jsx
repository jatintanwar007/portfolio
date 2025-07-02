import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg bg-white fixed-top"
      id="portfolio-navbar"
    >
      <div className="container">
        {/* Logo or Brand */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-code"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span className="fw-bold">My-Portfolio</span>
        </a>

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
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="portfolio-nav"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {[
              { id: "home-section", label: "Home" },
              { id: "about-section", label: "About" },
              { id: "skills-section", label: "Skills" },
              { id: "services-section", label: "Services" },
              { id: "projects-section", label: "Projects" },
              { id: "contact-section", label: "Contact" },
            ].map(({ id, label }) => (
              <li className="nav-item" key={id}>
                <a
                  href={`#${id}`}
                  className={`nav-link ${
                    activeSection === id ? "active fw-bold text-primary" : ""
                  }`}
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
