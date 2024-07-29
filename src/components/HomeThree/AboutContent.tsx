"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutContent: React.FC = () => {
  return (
    <>
      <div className="about-area-three ptb-120 bg-image">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src="/images/about4.jpg"
                  className="about-img1"
                  alt="about"
                  width={640}
                  height={619}
                />

                <Link href="/about-us" className="btn btn-primary">
                  Explore More About
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span>Join The Event</span>
                <h2>
                  We Create and <b>Turn</b> Into Reality
                </h2>
                <h6>
                  We Work With Organisations To Craft Immersive Customer
                  Experiences.
                </h6>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

                <ul>
                  <li>
                    <i className="icofont-long-arrow-right"></i>
                    Curabitur blandit tempus porttitor.
                  </li>
                  <li>
                    <i className="icofont-long-arrow-right"></i>
                    Maecenas sed diam eget risus varius blandit sit amet non
                    magna.
                  </li>
                  <li>
                    <i className="icofont-long-arrow-right"></i>
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris.
                  </li>
                  <li>
                    <i className="icofont-long-arrow-right"></i>
                    Condimentum nibh, ut fermentum massa justo sit amet risus
                    nibh.
                  </li>
                </ul>

                <div className="signature">
                  <Image
                    src="/images/signature.png"
                    alt="about"
                    width={142}
                    height={68}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
