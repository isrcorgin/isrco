"use client";

import React from "react"; 

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-phone"></i>
            </div>

            <div className="content">
              <h4>Phone / Fax</h4>
              <p>(+021) 245522455</p>
              <p>(+000) 245522455</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-email"></i>
            </div>

            <div className="content">
              <h4>E-mail</h4>
              <p>info@evnia.com</p>
              <p>support@evnia.com</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-world"></i>
            </div>

            <div className="content">
              <h4>Location</h4>
              <p>2750 Quadra Street Victoria, City, Canada</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
