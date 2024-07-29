"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image"; 

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div 
        className="main-banner"
        style={{
          backgroundImage: `url(/images/main-bg2.jpg)`
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content banner-content-center">
                <p>
                  Are you <span>ready</span> to attend?
                </p>
                <h1>
                  World Advanced <span>Biggest</span> <br /> Conference <b>2</b>
                  <b>0</b>
                  <b>2</b>
                  <b>4</b>
                </h1>

                <ul>
                  <li>
                    <i className="icofont-compass"></i> Yellow Street, United
                    State
                  </li>
                  <li>
                    <i className="icofont-calendar"></i> 23-27 Jan, 2024
                  </li>
                </ul>

                <div className="button-box">
                  <Link href="#" className="btn btn-primary">
                    Buy Tickets Now!
                  </Link>

                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn d-sm-inline"
                  >
                    <i className="icofont-ui-play"></i> Watch Pormo Video
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <Image
            src="/images/shapes/1.png"
            alt="shape1"
            width={77}
            height={77}
          />
        </div>
        <div className="shape2 rotateme">
          <Image
            src="/images/shapes/2.png"
            alt="shape2"
            width={38}
            height={38}
          />
        </div>
        <div className="shape3 rotateme">
          <Image
            src="/images/shapes/3.png"
            alt="shape3"
            width={51}
            height={57}
          />
        </div>
        <div className="shape4">
          <Image
            src="/images/shapes/4.png"
            alt="shape4"
            width={29}
            height={29}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
