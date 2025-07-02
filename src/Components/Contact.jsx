import React, { useState, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullname, email, subject, message } = formData;
    if (!fullname || !email || !subject || !message) {
      return alert("Please fill all the fields");
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Email sent successfully");
          setFormData({
            fullname: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email");
        }
      );
  };

  return (
    <section
      className="portfolio-section contact-section portfolio-no-pb"
      id="contact-section"
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center">
            <span className="subheading">Get in Touch</span>
            <h2 className="mb-4">Have a Project in Mind?</h2>
            <p>
              Whether you're starting a new project or need help with an
              existing one, feel free to reach out. Let’s build something great
              together.
            </p>
          </div>
        </div>

        <div className="row block-9">
          {/* Contact Form */}
          <div className="col-md-8 mb-4 mb-md-0">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-light p-4 p-md-5 contact-form"
            >
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      onChange={handleChange}
                      name="fullname"
                      value={formData.fullname}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      onChange={handleChange}
                      name="email"
                      value={formData.email}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      onChange={handleChange}
                      name="subject"
                      value={formData.subject}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <div className="form-group">
                    <textarea
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="Message"
                      onChange={handleChange}
                      name="message"
                      value={formData.message}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary py-3 px-5"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 pl-md-5 mt-5 mt-md-0">
            <div className="w-100">
              <div className="dbox w-100 d-flex align-items-start mb-4">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-map-marker"></span>
                </div>
                <div className="text ps-3 text-break">
                  <p className="mb-0 fw-bold">Location:</p>
                  <p className="mb-1 text-muted">India</p>
                </div>
              </div>

              <div className="dbox w-100 d-flex align-items-start">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-paper-plane"></span>
                </div>
                <div className="text ps-3 text-break">
                  <p className="mb-0 fw-bold">Email:</p>
                  <p className="mb-1 text-muted">
                    <a
                      href="mailto:jatintanwar1301@gmail.com"
                      className="text-decoration-none text-muted"
                    >
                      jatintanwar1301@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
