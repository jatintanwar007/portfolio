import React from "react";
import OwlCarousel from "react-owl-carousel";

const Testimonials = () => {
  const options = {
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  };

  const testimonials = [
    {
      img: "person_1.jpg",
      name: "Alex Johnson",
      position: "Product Owner, TechNova",
      feedback:
        "Working with Jatin was a great experience. He delivered a robust and scalable full-stack solution that exceeded our expectations. The frontend was responsive, and the backend was clean and well-structured.",
    },
    {
      img: "person_2.jpg",
      name: "Priya Sharma",
      position: "CTO, CodeVerse",
      feedback:
        "Jatin has an exceptional eye for detail. His React and Node.js expertise helped us ship our product faster with solid performance and security. Highly recommend him for any full-stack development needs.",
    },
    {
      img: "person_3.jpg",
      name: "Michael Lee",
      position: "Founder, StartupSpark",
      feedback:
        "Jatin built us a complete web application from scratch. He was communicative, timely, and always ready to go the extra mile. A true full-stack professional!",
    },
    {
      img: "person_1.jpg",
      name: "Sana Verma",
      position: "UI/UX Designer, PixelWorks",
      feedback:
        "His frontend development skills are top-notch. Working with Jatin made my design-to-development handoff incredibly smooth and efficient.",
    },
    {
      img: "person_2.jpg",
      name: "Rahul Dev",
      position: "DevOps Engineer, CloudBridge",
      feedback:
        "Jatin’s understanding of deployment pipelines and full-stack architecture really helped streamline our release process. Great to work with!",
    },
  ];

  return (
    <section className="portfolio-section testimony-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section heading-section-white text-center">
            <span className="subheading">Testimonials</span>
            <h2 className="mb-4">What Clients Say About My Work</h2>
            <p>
              Feedback from clients I've worked with across various full-stack
              projects, covering frontend, backend, APIs, and deployments.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="">
            <h2 className="text-white text-center font-weight-bold fs-1">Coming Soon</h2>
          </div>
          {/* <div className="col-md-12">
            <OwlCarousel className="carousel-testimony owl-theme" {...options}>
              {testimonials.map((t, i) => (
                <div className="item" key={i}>
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <span className="fa fa-quote-left"></span>
                      <p className="mb-4 pl-5">{t.feedback}</p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: `url(images/${t.img})`,
                          }}
                        ></div>
                        <div className="pl-3">
                          <p className="name">{t.name}</p>
                          <span className="position">{t.position}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
