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
                Join the <b> Global</b> Innovation Spectacle!
                </h3>
                <p>
                Welcome to the World Student Robotics Challenge (ISRC), where brilliance knows no bounds!
                 Calling all aspiring innovators and robotic enthusiasts to be part of an extraordinary 
                 international showcase. Engage in the thrill of competition as over 4000 teams from 15 countries 
                 converge to redefine excellence in robotics and innovation. Whether you're in grades 5-8, 9-12, 
                 or a freshman in college, WSRC provides a stage for your creativity to shine. Choose your path in 
                 the Innovation or Robotics category, where minds collide, ideas flourish, and robots come to life. 
                 Dive into three rounds of challenges, from online quizzes with AI proctoring to hands-on offline 
                 competitions, culminating in a spectacular finale. Prizes await the champions, but more importantly, 
                 it's your chance to be part of a global community shaping the future. Don't miss out — register now and 
                 join us in the adventure of a lifetime!
                </p>

                {/* <div className="signature">
                  <Image
                    src="/images/signature.png"
                    alt="signature"
                    width={142}
                    height={68}
                  />
                </div>

                <Link href="/about-us" className="btn btn-primary">
                  Read More
                  <i className="icofont-double-right"></i>
                </Link>

                <Link href="#" className="btn btn-secondary">
                  Buy Ticket
                </Link> */}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src="/images/about1.jpg"
                  className="about-img1"
                  width={750}
                  height={500}
                  alt="about"
                />
                <Image
                  src="/images/about2.jpg"
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
