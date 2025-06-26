// src/components/Services.js
import React from 'react';

const ServiceItem = ({ icon, title }) => (
  <div className="media block-6 services d-block bg-white rounded-lg shadow">
    <div className="icon shadow d-flex align-items-center justify-content-center">
      <span className={icon}></span>
    </div>
    <div className="media-body">
      <h3 className="heading mb-3">{title}</h3>
      <p>A small river named Duden flows by their place and supplies.</p>
    </div>
  </div>
);

const Services = () => {
  const services = [
    { icon: 'flaticon-3d-design', title: 'Web Design' },
    { icon: 'flaticon-app-development', title: 'Web Application' },
    { icon: 'flaticon-web-programming', title: 'Web Development' },
    { icon: 'flaticon-branding', title: 'Banner Design' },
  ];

  return (
    <section className="portfolio-section" id="services-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center mb-5">
            <span className="subheading">I am grat at</span>
            <h2 className="mb-4">We do awesome services for our clients</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div className="row">
          {services.slice(0, 4).map((service, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <ServiceItem icon={service.icon} title={service.title} />
            </div>
          ))}
        </div>

        <div className="row">
          {services.slice(4).map((service, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <ServiceItem icon={service.icon} title={service.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;