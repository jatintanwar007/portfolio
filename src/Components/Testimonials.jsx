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
    { img: "person_1.jpg", name: "Roger Scott", position: "Marketing Manager" },
    { img: "person_2.jpg", name: "Roger Scott", position: "Marketing Manager" },
    { img: "person_3.jpg", name: "Roger Scott", position: "Marketing Manager" },
    { img: "person_1.jpg", name: "Roger Scott", position: "Marketing Manager" },
    { img: "person_2.jpg", name: "Roger Scott", position: "Marketing Manager" },
  ];

  return (
    <section className="portfolio-section testimony-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section heading-section-white text-center">
            <span className="subheading">Testimonies</span>
            <h2 className="mb-4">What client says about?</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <OwlCarousel className="carousel-testimony owl-theme" {...options}>
              {testimonials.map((t, i) => (
                <div className="item" key={i}>
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <span className="fa fa-quote-left"></span>
                      <p className="mb-4 pl-5">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
