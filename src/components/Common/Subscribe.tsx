"use client";

import React from "react"; 

const Subscribe: React.FC = () => {
  return (
    <>
      <div className="subscribe-area">
        <div className="container">
          <div className="subscribe-inner">
            <h2>Collaboration</h2>
            <span>Join us in shaping the future of STEM education! Enter your email to explore partnership opportunities with ISRC.</span>

            <form className="newsletter-form">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                name="EMAIL"
                required 
              />
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
