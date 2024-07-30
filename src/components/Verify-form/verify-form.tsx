"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-area ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="card shadow-lg border-0 transition-transform hover:scale-105">
              <div className="card-body p-5 text-center">
                <h3 className="card-title mb-4">Verify Your Certificate</h3>
                <p className="card-text mb-4">
                  Enter your certificate number.
                </p>

                <form id="verificationForm">
                  <div className="form-group mb-4">
                    <label htmlFor="certificateNumber" className="form-label sr-only">Certificate Number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="certificateNumber"
                      id="certificateNumber"
                      placeholder="Enter Certificate Number"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Verify
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
