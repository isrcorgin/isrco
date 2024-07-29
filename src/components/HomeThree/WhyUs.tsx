"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhyUs: React.FC = () => {
  return (
    <>
      <div className="why-choose-us-two">
        <div className="row m-0 h-100 align-items-center">
          <div className="col-lg-4 col-md-6 p-0">
            <div className="why-choose-img">
              <Image
                src="/images/why-choose-img1.jpg"
                alt="Why Us"
                width={640}
                height={435}
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="why-choose-content">
              <h3>Great Speakers</h3>
              <p>
                Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Donecullamcorper nulla non metus
                auctor fringilla.
              </p>
              <Link href="#">
                Know More <i className="icofont-long-arrow-right"></i>
              </Link>

              <span>01</span>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="why-choose-img">
              <Image
                src="/images/why-choose-img2.jpg"
                alt="Why Us"
                width={640}
                height={435}
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="why-choose-content">
              <h3>Networking</h3>
              <p>
                Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Donecullamcorper nulla non metus
                auctor fringilla.
              </p>
              <Link href="#">
                Know More <i className="icofont-long-arrow-right"></i>
              </Link>

              <span>02</span>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="why-choose-img">
              <Image
                src="/images/why-choose-img3.jpg"
                alt="Why Us"
                width={640}
                height={435}
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-0">
            <div className="why-choose-content">
              <h3>Have Fun</h3>
              <p>
                Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Donecullamcorper nulla non metus
                auctor fringilla.
              </p>
              <Link href="#">
                Know More <i className="icofont-long-arrow-right"></i>
              </Link>

              <span>03</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
