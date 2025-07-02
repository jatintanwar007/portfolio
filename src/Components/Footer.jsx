import React from 'react';

const Footer = () => {
  return (
    <footer className="portfolio-footer portfolio-section bg-dark text-white">
      <div className="container">
        <div className="row mb-5">
          {/* Let's Connect */}
          <div className="col-md">
            <div className="portfolio-footer-widget mb-4">
              <h2 className="portfolio-heading-2">Let's Connect</h2>
              <p>
                Passionate about building modern web apps that solve real-world problems.
                Let’s collaborate and turn your ideas into reality.
              </p>
              <p>
                <a href="#contact-section" className="btn btn-primary text-white text-uppercase px-4 py-2 rounded-pill">
                  Get in Touch
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md">
            <div className="portfolio-footer-widget mb-4 ml-md-4">
              <h2 className="portfolio-heading-2">Quick Links</h2>
              <ul className="list-unstyled">
                <li><a href="#home-section" className="text-white text-decoration-none">Home</a></li>
                <li><a href="#about-section" className="text-white text-decoration-none">About</a></li>
                <li><a href="#services-section" className="text-white text-decoration-none">Services</a></li>
                <li><a href="#projects-section" className="text-white text-decoration-none">Projects</a></li>
                <li><a href="#contact-section" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Expertise */}
          <div className="col-md">
            <div className="portfolio-footer-widget mb-4">
              <h2 className="portfolio-heading-2">Expertise</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Frontend Development</a></li>
                <li><a href="#" className="text-white text-decoration-none">Backend Development</a></li>
                <li><a href="#" className="text-white text-decoration-none">RESTful APIs</a></li>
                <li><a href="#" className="text-white text-decoration-none">Database Design</a></li>
                <li><a href="#" className="text-white text-decoration-none">Responsive UI</a></li>
              </ul>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="col-md">
            <div className="portfolio-footer-widget mb-4">
              <h2 className="portfolio-heading-2">Get in Touch</h2>
              <div className="block-23 mb-3">
                <ul className="list-unstyled">
                  <li>
                    <span className="me-2"><i className="fas fa-map-marker-alt"></i></span>
                    <span>India</span>
                  </li>
                  <li>
                    <a href="mailto:jatintanwar1301@gmail.com" className="text-white text-decoration-none">
                      <i className="fas fa-paper-plane me-2"></i>jatintanwar1301@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Icons */}
              <ul className="list-inline mt-3">
                <li className="list-inline-item me-2">
                  <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item me-2">
                  <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn btn-outline-light btn-sm rounded-circle">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} — All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
