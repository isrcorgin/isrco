"use client";

import React from "react";
import Link from "next/link";

interface WhyUs {
  iconName: string;
  title: string;
  shortText: string;
  btnText: string;
  btnLink: string;
}

const WhyUsData: WhyUs[] = [
  {
    iconName: "icofont-headphone-alt-1",
    title: "Great Speakers",
    shortText:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    btnText: "Read More",
    btnLink: "#",
  },
  {
    iconName: "icofont-network-tower",
    title: "Networking",
    shortText:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    btnText: "Read More",
    btnLink: "#",
  },
  {
    iconName: "icofont-users-social",
    title: "New People",
    shortText:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    btnText: "Read More",
    btnLink: "#",
  },
  {
    iconName: "icofont-wink-smile",
    title: "Have Fun",
    shortText:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    btnText: "Read More",
    btnLink: "#",
  },
];

const WhyUs: React.FC = () => {
  return (
    <>
      <div className="why-choose-us">
        <div className="row m-0 justify-content-center">
          {WhyUsData &&
            WhyUsData.slice(0, 4).map((value, i) => (
              <div className="col-lg-3 col-sm-6 p-0" key={i}>
                <div className="single-box">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div className="content">
                        <div className="icon">
                          <i className={value.iconName}></i>
                        </div>
                        <h3>{value.title}</h3>
                        <p>{value.shortText}</p>

                        <Link href={value.btnLink} className="btn btn-primary">
                          {value.btnText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <ul className="slideshow">
          <li>
            <span
              style={{ backgroundImage: `url(/images/slideshow-bg1.jpg)` }}
            ></span>
          </li>
          <li>
            <span
              style={{ backgroundImage: `url(/images/slideshow-bg2.jpg)` }}
            ></span>
          </li>
          <li>
            <span
              style={{ backgroundImage: `url(/images/slideshow-bg3.jpg)` }}
            ></span>
          </li>
          <li>
            <span
              style={{ backgroundImage: `url(/images/slideshow-bg4.jpg)` }}
            ></span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WhyUs;
