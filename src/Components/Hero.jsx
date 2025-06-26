import React from "react";
import { FaTwitter, FaLinkedinIn, FaGithub, FaDribbble } from "react-icons/fa";

const Hero = () => {
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
          <div className="hero-buttons">
            <a href="#" className="btn-download">
              Download CV <span>⬇</span>
            </a>
            <div className="hero-socials">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/images/profile.png" // 👉 Replace with actual image path or import
            alt="Developer"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
