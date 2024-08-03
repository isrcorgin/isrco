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

            <Link href="/team-register/" className="btn btn-primary">
              Register Now!
            </Link>

            <div className="bar"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="single-schedule-item">
                <div className="schedule-date">
                  5th to 8th
                  <span>Primary</span>
                </div>

                <div className="schedule-item-wrapper">
                  <div className="schedule-content">
                    <div className="event-images">
                      <Image
                        src="/img/topic/boat.jpg"
                        alt="Schedules"
                        width={600}
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
                      <div className="event-images">
                        <Image
                          src="/img/topic/path2.jpg"
                          alt="Schedules"
                          width={600}
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
                          Young participants create simple robots to move along a designated <Link href="#">path</Link> using basic light or touch sensors. This fun activity introduces children to robotics basics. It helps develop their problem-solving skills.
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
                  <span>Secondary</span>
                </div>

                <div className="schedule-item-wrapper">
                  <div className="schedule-content">
                    <div className="event-images">
                      <Image
                        src="/img/topic/maze.png"
                        alt="Schedules"
                        width={600}
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
                      <div className="event-images">
                        <Image
                          src="/img/topic/path2.webp"
                          alt="Schedules"
                          width={600}
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
                          Participants build <Link href="#">Robots</Link> to navigate a specific route using advanced sensors like infrared or ultrasonic. They fine-tune their robots for higher accuracy with more complex programming. This challenge enhances their understanding of robotics principles.
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
                  <span>Higher Secondary</span>
                </div>

                <div className="schedule-item-wrapper">
                  <div className="schedule-content">
                    <div className="event-images">
                      <Image
                        src="/img/topic/line.jpg"
                        alt="Schedules"
                        width={600}
                        height={400}
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
                      <div className="event-images">
                        <Image
                          src="/img/topic/drone.webp"
                          alt="Schedules"
                          width={600}
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
                        <div className="event-images">
                          <Image
                            src="/img/topic/path3.avif"
                            alt="Schedules"
                            width={600}
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
                            Participants engineer sophisticated robots to follow intricate <Link href="#">path</Link> using cutting-edge sensors like LIDAR and advanced algorithms like PID control. This competition allows them to apply theoretical knowledge in practical scenarios. It pushes the boundaries of their technical skills.
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
