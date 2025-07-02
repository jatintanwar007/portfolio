import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <section
      className="portfolio-about portfolio-section portfolio-no-pt portfolio-no-pb"
      id="about-section"
    >
      <div className="container d-flex justify-content-center">
        <div className="col-lg-10 col-md-12 px-3 py-5">
          <div className="py-md-4">
            <div className="row justify-content-start pb-3">
              <div className="col-12 heading-section">
                <span className="subheading">My Intro</span>
                <h2
                  className="mb-4"
                  style={{ fontSize: "34px", textTransform: "capitalize" }}
                >
                  About Me
                </h2>

                <p className="text-justify">
                  I'm a passionate and detail-oriented Full-Stack Developer with a strong foundation in both frontend and backend
                  technologies. I specialize in building modern, responsive web applications using tools like React, Node.js,
                  Express, and MongoDB. With a deep understanding of UI/UX principles and RESTful API design, I strive to create
                  seamless, scalable, and performant digital solutions. Whether it's crafting pixel-perfect interfaces or
                  architecting robust server-side logic, I enjoy turning complex problems into elegant, efficient code. I’m
                  constantly learning and pushing the boundaries to stay up-to-date with the latest in web development.
                </p>

                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex justify-content-between">
                    <span>Name:</span> <span>Jatin Tanwar</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Address:</span> <span>India</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span>Email:</span>
                    <span>
                      <a
                        href="mailto:jatintanwar1301@gmail.com"
                        className="text-decoration-none"
                      >
                        Mail ME
                      </a>
                    </span>
                  </li>
                </ul>

                {/* Interests */}
                <div className="my-interest d-flex flex-wrap justify-content-center mt-5">
                  <div className="interest-wrap d-flex align-items-center m-2">
                    <div className="icon d-flex align-items-center justify-content-center me-2">
                      <span className="flaticon-listening"></span>
                    </div>
                    <div className="text">Music</div>
                  </div>
                  <div className="interest-wrap d-flex align-items-center m-2">
                    <div className="icon d-flex align-items-center justify-content-center me-2">
                      <span className="flaticon-suitcases"></span>
                    </div>
                    <div className="text">Travel</div>
                  </div>
                  <div className="interest-wrap d-flex align-items-center m-2">
                    <div className="icon d-flex align-items-center justify-content-center me-2">
                      <span className="flaticon-video-player"></span>
                    </div>
                    <div className="text">Movie</div>
                  </div>
                  <div className="interest-wrap d-flex align-items-center m-2">
                    <div className="icon d-flex align-items-center justify-content-center me-2">
                      <span className="flaticon-football"></span>
                    </div>
                    <div className="text">PC Games</div>
                  </div>
                  <div className="interest-wrap d-flex align-items-center m-2">
                    <div className="icon d-flex align-items-center justify-content-center me-2">
                      <span className="flaticon-football"></span>
                    </div>
                    <div className="text">Mobile Games</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
