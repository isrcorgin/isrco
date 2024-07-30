"use client";

import React from "react";
import ContactInfo from "./ContactInfo";

const ContactForm: React.FC = () => {
  return (
    <>
      <div className="contact-area ptb-120">
        <div className="container">
          {/* ContactInfo */}
          <ContactInfo />
          <br /><br />
  <center>

  <h1>Contact Us</h1>
  </center>
          <div className="row h-100 align-items-center contact-form">
            <div className="col-lg-4 col-md-12">
              <div className="leave-your-message">
                <h3>Leave Your Message</h3>
                <p>
                  If you have any questions about the services we provide simply
                  use the form below. We try and respond to all queries and
                  comments within 24 hours.
                </p>

                <div className="stay-connected">
                  <h3>Stay Connected</h3>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/people/ISRC/61551801273199/?mibextid=ZbWKwL" target="_blank">
                        <i className="icofont-facebook"></i>
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/i/flow/login?redirect_after_login=%2Fisrc_org_in" target="_blank">
                        <i className="icofont-twitter"></i>
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/isrc.org.in/" target="_blank">
                        <i className="icofont-instagram"></i>
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/isrc-org-in/" target="_blank">
                        <i className="icofont-linkedin"></i>
                        <span>Linkedin</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-12">
              <form id="contactForm">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email*</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label htmlFor="number">Phone Number*</label>
                      <input
                        type="text"
                        className="form-control"
                        name="number"
                        id="number"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label htmlFor="message">Message*</label>
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols={30}
                        rows={4}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
