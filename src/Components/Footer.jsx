import React from 'react';

const Footer = () => {
  return (
    <footer className="portfolio-footer portfolio-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="portfolio-footer-widget mb-4">
              <h2 className="portfolio-heading-2">Lets talk about</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <p><a href="#" className="btn btn-primary">Learn more</a></p>
            </div>
          </div>
          <div className="col-md">
            <div className="portfolio-footer-widget mb-4 ml-md-4">
              <h2 className="portfolio-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li><a href="#home-section">Home</a></li>
                <li><a href="#about-section">About</a></li>
                <li><a href="#services-section">Services</a></li>
                <li><a href="#projects-section">Projects</a></li>
                <li><a href="#contact-section">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="portfolio-footer-widget mb-4">
              <h2 className="portfolio-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Frontend</a></li>
                <li><a href="#">Backend</a></li>
                <li><a href="#">Website Managing</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="portfolio-footer-widget mb-4">
              <h2 className="portfolio-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon fa fa-map marker"></span><span className="text">India</span></li>
                  <li><a href="tel:+23923929210"><span className="icon fa fa-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                  <li><a href="mailto:jatintanwar1301@gmail.com"><span className="icon fa fa-paper-plane pr-4"></span><span className="text">Mail us</span></a></li>
                </ul>
              </div>
              <ul className="portfolio-footer-social list-unstyled mt-2">
                <li className=""><a href="#"><span className="fa fa-twitter"></span></a></li>
                <li className=""><a href="#"><span className="fa fa-facebook"></span></a></li>
                <li className=""><a href="#"><span className="fa fa-instagram"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;{new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;