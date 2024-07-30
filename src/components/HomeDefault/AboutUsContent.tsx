import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUsContent: React.FC = () => {
  return (
    <>
      <div className="about-area ptb-120 bg-image">
        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span>Join The Event</span>
                <h3>
                  Join the <b>Global</b> Innovation Spectacle!
                </h3>
                <p>
                  Welcome to the International STEM and Robotics Championship (ISRC)!
                  Join the global stage where over 4,000 teams from 15 countries compete in Innovation and Robotics categories. Whether you&apos;re in grades 5-8, grades 9-12, or a college freshman, ISRC offers a unique platform to showcase your skills.
                </p>
                <ul>
                  <li><b>STEM Excellence:</b> Aligning with government initiatives to promote STEM education.</li>
                  <li><b>Global Community:</b> Connect with peers, mentors, and industry leaders.</li>
                  <li><b>Three Rounds:</b> Online quizzes, hands-on competitions, and a thrilling finale.</li>
                  <li><b>Prizes:</b> Win prestigious awards and recognition.</li>
                  <li><b>Professional Development:</b> Aiming to train 10 million teachers in STEM by 2030.</li>
                  <li><b>Partnership Opportunities:</b> Partner with us to promote STEM globally.</li>
                </ul>
              
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src="/img/home1.jpg"
                  className="about-img1"
                  width={750}
                  height={500}
                  alt="about"
                />
                <Image
                  src="/img/home2.jpg"
                  className="about-img2"
                  alt="about"
                  width={309}
                  height={424}
                />
                <Image
                  src="/images/shapes/5.png"
                  className="shape-img"
                  alt="about"
                  width={111}
                  height={111}
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

export default AboutUsContent;
