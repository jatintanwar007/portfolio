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
    console.log("SERVICE ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log("TEMPLATE ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
console.log("PUBLIC KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);


    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
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
    <section className="portfolio-section contact-section portfolio-no-pb" id="contact-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center">
            <span className="subheading">Contact us</span>
            <h2 className="mb-4">Have a Project?</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div className="row block-9">
          <div className="col-md-8">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-light p-4 p-md-5 contact-form"
            >
              <div className="row">
                <div className="col-md-6">
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
                <div className="col-md-6">
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
                <div className="col-md-12">
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
                <div className="col-md-12">
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

          <div className="col-md-4 d-flex pl-md-5">
            <div className="row">
              <div className="dbox w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-map-marker"></span>
                </div>
                <div className="text">
                  <p><span>Address:</span> India</p>
                </div>
              </div>
              <div className="dbox w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-phone"></span>
                </div>
                <div className="text">
                  <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                </div>
              </div>
              <div className="dbox w-100 d-flex">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-paper-plane"></span>
                </div>
                <div className="text">
                  <p><span>Email:</span> <a href="mailto:info@example.com">Mail Us</a></p>
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
