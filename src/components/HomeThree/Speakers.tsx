"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSpeakers } from "@/context/CampusAmbassadorContext";


const Speakers: React.FC = () => {

  const {speakersMembers} = useSpeakers()
  return (
    <>
      <div className="speakers-area-two ptb-120">
        <div className="container">
          <div className="section-title">
         
            <span>Teamwork Makes the Dream Work</span>
            <h2>Campus Ambassador (India) </h2>
            <div className="bar"></div>
            <div className="bg-title">Speakers</div>
            <Link href="/campus-ambassador/" className="btn btn-primary">
              View More Campus Ambassador
            </Link>
          </div>

          <div className="row">
            {speakersMembers &&
              speakersMembers.slice(0, 3).map((value, i) => (
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
