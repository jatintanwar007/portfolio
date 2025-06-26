// src/components/Projects.js
import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ image }) => (
  <div className="col-md-3">
    <div
      className="project img shadow d-flex justify-content-center align-items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay"></div>
      <div className="text text-center p-4">
        <h3>
          <Link to="#">Branding &amp; Illustration Design</Link>
        </h3>
        <span>Web Design</span>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projectImages = [
    "/images/work-1.jpg",
    "/images/work-2.jpg",
    "/images/work-3.jpg",
    "/images/work-4.jpg",
    "/images/work-5.jpg",
    "/images/work-6.jpg",
    "/images/work-7.jpg",
    "/images/work-8.jpg",
  ];

  return (
    <section className="portfolio-section portfolio-project" id="projects-section">
      <div className="container-fluid px-md-4">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center">
            <span className="subheading">Accomplishments</span>
            <h2 className="mb-4">Our Projects</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className="row">
          {projectImages.map((image, index) => (
            <ProjectItem image={image} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
