import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import header from "../assets/headers/contact-us.png";
import contact from "../assets/contactus/Contact Us.jpg";
import emailjs from "@emailjs/browser";

import { MdMailOutline } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import ContactInfoCard from "../Components/ContactInfoCard";
import ImagesSlider from "../Components/ImagesSlider";

const ContactUs = () => {
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const clearForm = () => {
    setFormData({
      email: "",
      phone: "",
      message: "",
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          alert("Message sent successfully!");
          setLoading(false);
          clearForm();
        },
        (error) => {
          alert("Failed to send email!!", error.text);
          setLoading(false);
        }
      );
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div>
      <section
        className="commonbg"
        style={{
          backgroundImage: `url(${header})`,
        }}
      >
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  Contact <span>Us </span>
                </h1>

                {/* <Breadcrumb>
                  <Breadcrumb.Item href="/" className="">
                    Home
                  </Breadcrumb.Item>

                  <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                </Breadcrumb> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="connectingalways">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="alwaybox h-100">
                <div className="">
                  <span className="leftlineheading">Connecting Always</span>
                  <h2>Hear by Our Heart</h2>
                  <p>
                    Our team is available to help with your enquiries on email &
                    phone, or visit our place.
                  </p>
                </div>

                <div className="shadowww-box">
                  <div className="borderr-box">
                    <h3> Quick Contact </h3>
                    <div className="row  inlinebox">
                      <div className="col-lg-2">
                        <div className="icon-box">
                          <FaPhone color="#fff" size={22} />
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="icon-info">
                          <h5>Main Office</h5>
                          <ul>
                            <li>
                              <a href="tel:92-51-9272400-4">
                                {" "}
                                +92-51-9272400-4{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="borderr-box">
                    <h3>Email Address </h3>
                    <div className="row  inlinebox">
                      <div className="col-lg-2">
                        <div className="icon-box">
                          <MdMailOutline color="#fff" size={22} />{" "}
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="icon-info">
                          <h5> Mail to</h5>
                          <ul>
                            <li>
                              <a href="mailto:infoawt@awt.com.pk">
                                {" "}
                                infoawt@awt.com.pk{" "}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="borderr-box">
                    <h3>Mailing Address </h3>
                    <div className="row  inlinebox">
                      <div className="col-lg-2">
                        <div className="icon-box">
                          <FaLocationDot color="#fff" size={22} />
                        </div>
                      </div>
                      <div className="col-lg-10">
                        <div className="icon-info">
                          <h5>Address to</h5>
                          <ul>
                            <li>
                              <button className="link-button">
                                AWT Plaza The Mall Rawalpindi
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 contact-img">
              <img src={contact} className="img-fluid mx-auto mx-md-0" alt="" />
            </div>

            {/* Contact Form */}
            <div className="col-lg-4">
              <div className="alwaybox h-100">
                <div className="">
                  <span className="leftlineheading">Drop a Line</span>
                  <h2>Leave us Message</h2>
                  <p>
                    Please feel free to get in touch using the form below. We'd
                    love to hear from you.
                  </p>
                </div>

                <div className="shadowww-box">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                      </span>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="email@awt.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        <i
                          className="fa fa-volume-control-phone"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <input
                        className="form-control"
                        name="phone"
                        placeholder="Phone"
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        <i
                          className="fa fa-commenting-o"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <input
                        type="text"
                        name="message"
                        className="form-control"
                        placeholder="Message"
                        aria-label="message"
                        aria-describedby="basic-addon1"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="sendmessage mb-3"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-contact">
        <Container>
          <div className="text-center">
            <span className="linesheading justify-content-center">Connect</span>
            <h2 className="m-0 ">AWT Team Members</h2>
          </div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="team-contact-grid"
            ref={ref}
          >
            <ContactInfoCard />
          </motion.div>
        </Container>
      </section>

      {/* <section className="threeboxxx p-3 p-sm-0">
        <div className="container bggg">
          <div className="row">
            <div className="col-lg-4">
              <div className="fourboxmaingreen">
                <div className="fourimgsbox ">
                  <MdGroups size={90} />
                </div>
                <div className="fourinfogreen">
                  <h3>Collaboration</h3>
                  <p>Looking for a Strategic Partnership?</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="fourboxmaingreen">
                <div className="fourimgsbox">
                  <LiaHandshake size={90} />
                </div>
                <div className="fourinfogreen">
                  <h3> Job Seekers</h3>
                  <p> Want to become a part of our business team?</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="fourboxmaingreen">
                <div className="fourimgsbox">
                  <RiCustomerService2Line size={90} />
                </div>
                <div className="fourinfogreen">
                  <h3> Queries</h3>
                  <p> Have questions in your mind?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="mappb0x">
        <div className="container-fluid overflow-hidden no-gutters p-0">
          <div className="row">
            <div className="col-lg-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.335508796949!2d73.04483477440903!3d33.596598241654355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948409da2c3b%3A0xbdeea01d5f91f54a!2sAWT%20(Army%20Welfare%20Trust)%20Plaza!5e0!3m2!1sen!2s!4v1722922177880!5m2!1sen!2s"
                width="100%"
                height="550"
                allowFullScreen
                title="map"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="spaceupdowngray">
        <div className="container-fluid overflow-hidden no-gutters p-0">
          <div className="row">
            <ImagesSlider />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
