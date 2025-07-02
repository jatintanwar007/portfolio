// src/components/Projects.js
import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => (
  <div className="col-md-3">
    <div
      className="project img shadow d-flex justify-content-center align-items-center"
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <div className="overlay"></div>
      <div className="text text-center p-4">
        <h3>
          <Link to={project.link || "#"}>{project.title}</Link>
        </h3>
        <span>{project.technologies}</span>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      image: "/images/goklyn1.PNG",
      title: "Company Portfolio Website",
      technologies: "React • Node.js • Express • MongoDB",
      link: "https://goklyn.in"
    },
    {
      image: "/images/gearshift.PNG",
      title: "Gearshift - Car Purchase Platform",
      technologies: "React.js • Firebase • Tailwind CSS",
      link: "https://gearshift-phi.vercel.app/"
    },
    {
      image: "/images/work-3.jpg",
      title: "Social Media Dashboard",
      technologies: "Angular • Express • MongoDB",
      link: "/projects/social-dashboard"
    },
  ];

  return (
    <section className="portfolio-section portfolio-project" id="projects-section">
      <div className="container-fluid px-md-4">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center">
            <span className="subheading">Projects</span>
            <h2 className="mb-4">Some Things I've Built</h2>
            <p>
              Here are a few full-stack projects where I've implemented responsive frontends,
              scalable backends, REST APIs, and integrated third-party services.
            </p>
          </div>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <ProjectItem project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;