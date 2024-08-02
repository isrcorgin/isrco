"use client";

import React from "react"; 

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div>
         <center>
           <h1 >Our International Offices</h1>
           <br />
           <br />
          </center>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-google-map"></i>
            </div>

            <div className="content">
              <h4>Head Office - Mumbai, India.</h4>
              <p>New White House, Kurla West, Mumbai, Maharashtra <br />
              <i className="icofont-phone text-success"></i> +91 95944 02916</p>
<br />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-google-map"></i>
            </div>

            <div className="content">
              <h4>International Office -South Africa</h4>
              <p>stand no 345 mamadimo Park Hospital Road, Mankweng South Africa. <br />
              <i className="icofont-phone text-success"></i> +27747725059</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-google-map"></i>
            </div>

            <div className="content">
              <h4>International Office - Muscat, Oman.</h4>
              <p>Behind Mawaleh Souq, Muscat, Sultanate of Oman. <br />

              <i className="icofont-phone text-success"></i> +968 9631 0865</p>


            </div>
          </div>
        </div>
    <div> .</div>
        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-google-map"></i>
            </div>

            <div className="content">
              <h4>International Office - Dubai, UAE.</h4>
              <p>IT Centre  Building Behind Raffa police Station, Dubai. <br />
               <i className="icofont-phone text-success"></i> +0556964567</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-google-map"></i>
            </div>

            <div className="content">
              <h4>International Office - Sharjah, UAE.</h4>
              <p>	Al Majaz 2, Buhaira, Corniche Sharjah, UAE. <br /> <i className="icofont-phone text-success"></i> +0505979216</p>


            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ContactInfo;
