import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub, FaDribbble } from "react-icons/fa";

const Hero = () => {
  // Define the path to your PDF file in the public folder
  const cvPath = "/document/JatinResume.pdf"; //

  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-intro">I am Jatin Tanwar</p>
          <h1 className="hero-title">
            <span>Full-Stack</span> Developer.
          </h1>
          <p className="hero-description">
            I break down complex user experience problems to create integrity
            focused solutions that connect billions of people.
          </p>
          <div className="hero-buttons d-inline-block">
            {/* Updated CV button with download functionality */}
            <a 
              href={cvPath} 
              className="btn-download"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
            
            <a href="#contact-section" className="btn-download m-3">
              Hire Me
            </a>
            <div className="hero-socials">
              <a href="https://shorturl.at/4OnAP" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://shorturl.at/4RjOq"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/images/profile-blur1.png"
            alt="Developer"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;