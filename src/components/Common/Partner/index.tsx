"use client";

import React from "react"; 
import PlatinumSponsors from "./PlatinumSponsors";
import GoldSponsors from "./GoldSponsors";
import Institute from "./institutional"
const Partner: React.FC = () => {
  return (
    <>
      <div className="partner-area ptb-120">
        <div className="container">
          <div className="section-title">
            <span>Check Who Makes This Event Possible!</span>
            <h2>
              Our Event <b>Partner</b>
            </h2>

            <a href="https://wa.me/9594430295" className="btn btn-primary">
              Become a Partner
            </a>

            <div className="bar"></div>
          </div>

          <PlatinumSponsors />

          <div className="border"></div>

          <GoldSponsors />
          <div className="border"></div>
          <Institute />
        </div>
      </div>
    </>
  );
};

export default Partner;
