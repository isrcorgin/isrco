"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <Swiper 
        navigation={true} 
        autoHeight={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]} 
        className="home-slides"
      >
        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(/images/slider-bg1.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <p>
                      Are you <span>ready</span> to attend?
                    </p>

                    <h1>
                      World Advanced <span>Biggest</span> <br /> Conference{" "}
                      <b>2</b>
                      <b>0</b>
                      <b>2</b>
                      <b>4</b>
                    </h1>

                    <ul>
                      <li>
                        <i className="icofont-compass"></i> Yellow Street,
                        United State
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
                        className="video-btn d-sm-inline"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="icofont-ui-play"></i> Watch Pormo Video
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(/images/slider-bg2.jpg)`,
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
                      World Advanced <span>Biggest</span> <br /> Conference{" "}
                      <b>2</b>
                      <b>0</b>
                      <b>2</b>
                      <b>4</b>
                    </h1>

                    <ul>
                      <li>
                        <i className="icofont-compass"></i> Yellow Street,
                        United State
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
                        className="video-btn d-sm-inline"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="icofont-ui-play"></i> Watch Pormo Video
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(/images/slider-bg3.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <p>
                      Are you <span>ready</span> to attend?
                    </p>

                    <h1>
                      World Advanced <span>Biggest</span> <br /> Conference{" "}
                      <b>2</b>
                      <b>0</b>
                      <b>2</b>
                      <b>4</b>
                    </h1>

                    <ul>
                      <li>
                        <i className="icofont-compass"></i> Yellow Street,
                        United State
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
                        className="video-btn d-sm-inline"
                        onClick={() => setToggler(!toggler)}
                      >
                        <i className="icofont-ui-play"></i> Watch Pormo Video
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBanner;
