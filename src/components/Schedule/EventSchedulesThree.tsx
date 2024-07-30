"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const EventSchedulesThree: React.FC = () => {
  return (
    <>
      <div className="schedule-area schedule-style-three bg-image ptb-120">
        <div className="container">
          <div className="section-title">
            <span>Schedule Plan</span>
            <h2>
              Information of <b>Event</b> <br /> Schedules
            </h2>

            <div className="bg-title">Events</div>

            <Link href="/pricing/" className="btn btn-primary">
              Register Now!
            </Link>

            <div className="bar"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="single-schedule-item">
                <div className="schedule-date">
                  5th to 8th
                  <span>Age Group 1</span>
                </div>

                <div className="schedule-item-wrapper">
                  <div className="schedule-content">
                    <div className="author">
                      <Image
                        src="/img/topic/boat.jpg"
                        alt="Schedules"
                        width={300}
                        height={300}
                        style={{ borderRadius: "10px" }}
                      />
                    </div>

                    <div className="schedule-info">
                      <h3>
                        <Link href="#">Water Boat</Link>
                      </h3>

                      <ul>
                        <li>
                          The <Link href="#">Water Boat</Link> competition involves designing and building a boat that can navigate through water. Teams must consider factors like buoyancy, propulsion, and stability to create an effective watercraft.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="schedule-item-wrapper">
                    <div className="schedule-content">
                      <div className="author">
                        <Image
                          src="/img/topic/boat.jpg"
                          alt="Schedules"
                          width={300}
                          height={300}
                          style={{ borderRadius: "10px" }}
                        />
                      </div>

                      <div className="schedule-info">
                        <h3>
                          <Link href="#">Path Following</Link>
                        </h3>

                        <ul>
                          <li>
                            In the <Link href="#">Path</Link> Following competition, participants design robots that follow a predefined path. The challenge lies in accurately following the path using sensors and algorithms, testing the robot's precision and control.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex justify-content-center">
              <div className="single-schedule-item">
                <div className="schedule-date">
                  9th to 12th
                  <span>Age Group 2</span>
                </div>

                <div className="schedule-item-wrapper">
                  <div className="schedule-content">
                    <div className="author">
                      <Image
                        src="/img/topic/boat.jpg"
                        alt="Schedules"
                        width={300}
                        height={300}
                        style={{ borderRadius: "10px" }}
                      />
                    </div>

                    <div className="schedule-info">
                      <h3>
                        <Link href="#">Maze Solver</Link>
                      </h3>

                      <ul>
                        <li>
                          In the <Link href="#">Maze Solver</Link> competition, participants develop robots capable of finding their way through a maze. The challenge includes navigating complex pathways and overcoming obstacles to reach the end of the maze efficiently.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="schedule-item-wrapper">
                    <div className="schedule-content">
                      <div className="author">
                        <Image
                          src="/img/topic/boat.jpg"
                          alt="Schedules"
                          width={300}
                          height={300}
                          style={{ borderRadius: "10px" }}
                        />
                      </div>

                      <div className="schedule-info">
                        <h3>
                          <Link href="#">Path Following</Link>
                        </h3>

                        <ul>
                          <li>
                            In the <Link href="#">Path</Link> Following competition, participants design robots that follow a predefined path. The challenge lies in accurately following the path using sensors and algorithms, testing the robot's precision and control.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-flex justify-content-center">
              <div className="single-schedule-item">
                <div className="schedule-date">
                  1st Year on ward
                  <span>Age Group 3</span>
                </div>

                <div className="schedule-item-wrapper">
                  <div className="schedule-content">
                    <div className="author">
                      <Image
                        src="/img/topic/boat.jpg"
                        alt="Schedules"
                        width={300}
                        height={300}
                        style={{ borderRadius: "10px" }}
                      />
                    </div>

                    <div className="schedule-info">
                      <h3>
                        <Link href="#">Line Following</Link>
                      </h3>

                      <ul>
                        <li>
                          The <Link href="#">Line Following</Link> competition requires robots to follow a line on the ground. The robot must stay on the track and navigate turns, demonstrating its ability to respond to changes in the environment.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="schedule-item-wrapper">
                    <div className="schedule-content">
                      <div className="author">
                        <Image
                          src="/img/topic/boat.jpg"
                          alt="Schedules"
                          width={300}
                          height={300}
                          style={{ borderRadius: "10px" }}
                        />
                      </div>

                      <div className="schedule-info">
                        <h3>
                          <Link href="#">Drone</Link>
                        </h3>

                        <ul>
                          <li>
                            In the <Link href="#">Drone</Link> competition, participants design and fly drones to complete various tasks and challenges. The competition tests skills in aerodynamics, control, and programming as drones navigate through obstacles and perform specific maneuvers.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="schedule-item-wrapper">
                      <div className="schedule-content">
                        <div className="author">
                          <Image
                            src="/img/topic/boat.jpg"
                            alt="Schedules"
                            width={300}
                            height={300}
                            style={{ borderRadius: "10px" }}
                          />
                        </div>

                        <div className="schedule-info">
                          <h3>
                            <Link href="#">Path Following</Link>
                          </h3>

                          <ul>
                            <li>
                              In the <Link href="#">Path Following</Link> competition, participants design robots that follow a predefined path. The challenge lies in accurately following the path using sensors and algorithms, testing the robot's precision and control.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shape Images */}
          <div className="shape1">
            <Image
              src="/images/shapes/1.png"
              alt="shape1"
              width={77}
              height={77}
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="shape2 rotateme">
            <Image
              src="/images/shapes/2.png"
              alt="shape2"
              width={38}
              height={38}
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="shape3 rotateme">
            <Image
              src="/images/shapes/3.png"
              alt="shape3"
              width={51}
              height={57}
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="shape4">
            <Image
              src="/images/shapes/4.png"
              alt="shape4"
              width={29}
              height={29}
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventSchedulesThree;
