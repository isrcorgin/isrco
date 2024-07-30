"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SpeakersMember {
  image: string;
  name: string;
  designation: string;
  socialLinks: SocialLink[];
}

interface SocialLink {
  iconName: string;
  url: string;
}

const SpeakersMemberData: SpeakersMember[] = [
  {
    image: "/img/campus/16.png",
    name: "Isha Sanjay Sawant",
    designation: "Ratnagiri",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  
  {
    image: "/img/campus/9.png",
    name: "Sachin Chandraprakash",
    designation: "Thane",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/17.png",
    name: "Anjali Kisan Chavan",
    designation: "Chiplun",
    socialLinks: [
      
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  
  {
    image: "/img/campus/2.png",
    name: "Harshal",
    designation: "Chowk",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/3.png",
    name: "Smit",
    designation: "Mumbai",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/4.png",
    name: "Aditya",
    designation: "Kanpur",
    socialLinks: [
      
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/5.png",
    name: "Anjali",
    designation: "Dombivli",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/6.png",
    name: "Disha",
    designation: "Mumbai",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/7.png",
    name: "Ankit",
    designation: "Patna",
    socialLinks: [
      
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/8.png",
    name: "Sarthak Sudhakar Dorugade",
    designation: "Kharghar",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/10.png",
    name: "Ravisha Rafik Pathan",
    designation: "Thane",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/11.png",
    name: "Sachin",
    designation: "Mumbai",
    socialLinks: [
      
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/12.png",
    name: "Labhesh",
    designation: "Palghar",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  
  {
    image: "/img/campus/13.png",
    name: "Manoj Subburaj Yadav",
    designation: "Mumbai",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/14.png",
    name: "Sejal",
    designation: "Pune",
    socialLinks: [
      
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/15.png",
    name: "Priyanka",
    designation: "Mumbai",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  
  {
    image: "/img/campus/18.png",
    name: "Yuvrajsing Bahure",
    designation: "Maharashtra",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/19.png",
    name: "Snehashish Datta",
    designation: "NIT Uttarpradesh",
    socialLinks: [
      
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/20.png",
    name: "Sachin Rathod",
    designation: "Maharashtra",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  
  {
    image: "/img/campus/21.png",
    name: "Valarmathi",
    designation: "Tamilnadu",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/22.png",
    name: "Madhuvandhana",
    designation: "Tamilnadu",
    socialLinks: [
      
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/23.png",
    name: "Shreyansh",
    designation: "AMITY University , Rajasthan",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  

  
];

const Speakers: React.FC = () => {
  return (
    <>
      <div className="speakers-area-two ptb-120">
        <div className="container">
          <div className="section-title">
         
            <span>Teamwork Makes the Dream Work</span>
            <h2>Campus Ambassador</h2>
            <div className="bar"></div>
            <div className="bg-title">Speakers</div>
            {/* <Link href="/speakers" className="btn btn-primary">
              View More Campus Ambassador
            </Link> */}
          </div>

          <div className="row">
            {SpeakersMemberData &&
              SpeakersMemberData.slice(0, 25).map((value, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div className="single-speakers-box">
                    <div className="speakers-image">
                      <Image
                        src={value.image}
                        alt="speaker"
                        width={800}
                        height={800}
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>

                      <ul className="social">
                        {value.socialLinks.map((value, i) => (
                          <li key={i}>
                            <a href={value.url} target="_blank">
                              <i className={value.iconName}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Speakers;
