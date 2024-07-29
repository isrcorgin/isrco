"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatesNews: React.FC = () => {
  return (
    <>
      <div className="blog-area blog-section ptb-120 bg-image">
        <div className="container">
          <div className="section-title">
            <span>Info Update!</span>
            <h2>
              Our Latest <b>News</b>
            </h2>

            <div className="bg-title">Blog</div>

            <Link href="/blog" className="btn btn-primary">
              View All News
            </Link>

            <div className="bar"></div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="single-blog-card">
                <Link href="/blog/details">
                  <Image
                    src="/images/blog1.jpg"
                    alt="blog"
                    width={800}
                    height={550}
                  />
                </Link>

                <div className="post-tag">
                  <Link href="/blog/details">Technology</Link>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/details">
                      How To Setup Redux In React Next Application
                    </Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum.
                  </p>
                  <Link href="/blog/details" className="read-more-btn">
                    Read More
                    <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-blog-card">
                <Link href="/blog/details">
                  <Image
                    src="/images/blog2.jpg"
                    alt="blog"
                    width={800}
                    height={550}
                  />
                </Link>

                <div className="post-tag">
                  <Link href="/blog/details">Agency</Link>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/details">
                      How To Resubmit Rejected Item Into ThemeForest
                    </Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum.
                  </p>
                  <Link href="/blog/details" className="read-more-btn">
                    Read More
                    <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatesNews;
