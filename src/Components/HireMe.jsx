import React from 'react';

const HireMe = () => {
  return (
    <section className="portfolio-hireme py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-8 col-md-12 mb-4 mb-lg-0">
            <div className="text-start text-white">
              <h2 className="mb-3">Have a full-stack project in mind?</h2>
              <p className="mb-4">
                Whether it's building a responsive frontend, designing robust APIs, or setting up a secure backend,
                I can help bring your web application to life with clean code and scalable architecture.
              </p>
              <a href="#contact-section" className="btn btn-primary px-4 py-2 rounded-pill">
                Contact Me
              </a>
            </div>
          </div>

          {/* Image Section - hidden on small screens */}
          <div className="col-lg-4 d-none d-lg-block text-end">
            <img
              src="images/author.png"
              className="img-fluid"
              alt="Author"
              style={{ maxHeight: '280px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
