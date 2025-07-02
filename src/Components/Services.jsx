// src/components/Services.js
import React from 'react';

const ServiceItem = ({ iconClass, title, description }) => (
  <div className="media block-6 services d-block bg-white rounded-lg shadow p-4">
    <div className="icon shadow bg-white d-flex align-items-center justify-content-center mb-3">
      <i className={`${iconClass} fa-2x`}></i>
    </div>
    <div className="media-body">
      <h3 className="heading mb-3">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      iconClass: 'fas fa-code',
      title: 'Frontend Development',
      description:
        'Building responsive and dynamic UIs using React, HTML, CSS, and JavaScript to ensure seamless user experiences.',
    },
    {
      iconClass: 'fas fa-server',
      title: 'Backend Development',
      description:
        'Creating scalable server-side logic using Node.js and Express, with RESTful APIs and secure data handling.',
    },
    {
      iconClass: 'fas fa-plug',
      title: 'API Integration',
      description:
        'Integrating third-party APIs and services efficiently into applications for features like payments, maps, and more.',
    },
    {
      iconClass: 'fas fa-database',
      title: 'Database Design',
      description:
        'Designing and managing databases using MongoDB and PostgreSQL to store, query, and manage application data.',
    },
    {
      iconClass: 'fas fa-cloud-upload-alt',
      title: 'Deployment & DevOps',
      description:
        'Deploying apps to cloud platforms like Vercel or Render with CI/CD pipelines, environment configuration, and monitoring.',
    },
    {
      iconClass: 'fas fa-tools',
      title: 'Web Maintenance',
      description:
        'Providing ongoing support, bug fixes, and updates to keep web applications running smoothly post-deployment.',
    },
    {
      iconClass: 'fas fa-shield-alt',
      title: 'Authentication & Security',
      description:
        'Implementing user authentication, authorization, and best practices for protecting data and user privacy.',
    },
    {
      iconClass: 'fas fa-mobile-alt',
      title: 'Responsive UI Design',
      description:
        'Designing user interfaces that adapt across mobile, tablet, and desktop screens using modern CSS frameworks.',
    },
  ];

  return (
    <section className="portfolio-section" id="services-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center mb-5">
            <span className="subheading">What I Do</span>
            <h2 className="mb-4">Services I Provide as a Full-Stack Developer</h2>
            <p>
              I develop modern, end-to-end web solutions—from stunning frontends to robust backends—
              tailored for performance, security, and scalability.
            </p>
          </div>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <ServiceItem
                iconClass={service.iconClass}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
