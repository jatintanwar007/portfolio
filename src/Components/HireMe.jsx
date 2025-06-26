// src/components/HireMe.js
import React from 'react';

const HireMe = () => {
  return (
    <section className="portfolio-hireme">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-8 col-lg-8 d-flex align-items-center">
            <div className="w-100 py-4">
              <h2>Have a project on your mind.</h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly.</p>
              <button className="mb-0"><a href="#contact-section" className="btn bg-light py-3 px-4">Contact me</a></button>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 d-flex align-items-end">
            <img src="images/author.png" className="img-fluid" alt="Author" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;