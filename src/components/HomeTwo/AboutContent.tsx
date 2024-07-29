"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutContent: React.FC = () => {
  return (
    <>
      <div className="about-area-two ptb-120 bg-image">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span>Join The Event</span>
                <h2>
                  We Create and <b>Turn</b> Into Reality
                </h2>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>

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

            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src="/images/about3.jpg"
                  className="about-img1"
                  alt="about"
                  width={750}
                  height={650}
                />

                <Link href="/about-us" className="btn btn-primary">
                  Explore More About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
