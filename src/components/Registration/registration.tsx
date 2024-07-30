"use client";

import React, { useState } from "react";

const TeamRegistrationForm: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState([{ name: "", age: "", email: "", phone: "", isCaptain: false }]);

  const addTeamMember = () => {
    if (teamMembers.length < 5) {
      setTeamMembers([...teamMembers, { name: "", age: "", email: "", phone: "", isCaptain: false }]);
    }
  };

  const handleInputChange = (index: number, field: string, value: string | boolean) => {
    const updatedMembers = teamMembers.map((member, i) => (
      i === index ? { ...member, [field]: value } : member
    ));
    setTeamMembers(updatedMembers);
  };

  return (
    <div className="contact-area ptb-120">
      <div className="container">
        <div className="row h-100 align-items-center contact-form">
          <div className="col-lg-12 col-md-12">
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <div className="card-body">
                <form id="teamRegistrationForm">
                  <h3 className="card-title text-center" style={{ backgroundColor: "#FF2D55", color: "#fff", padding: "15px", borderRadius: "5px" }}>
                    General Information
                  </h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="teamName">Team Name*</label>
                        <input type="text" className="form-control" id="teamName" placeholder="Enter team name" required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="country">Country*</label>
                        <input type="text" className="form-control" id="country" placeholder="Enter country" required />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label htmlFor="competitionTopic">Select Competition Topic*</label>
                        <select className="form-control" id="competitionTopic" required>
                          <option value="">Select your topic</option>
                          {/* Add competition topics here */}
                        </select>
                      </div>
                    </div>
                  </div>

                  <h3 className="card-title text-center mt-4" style={{ backgroundColor: "#FF2D55", color: "#fff", padding: "15px", borderRadius: "5px" }}>
                    Mentor/Coach Details
                  </h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="mentorName">Name*</label>
                        <input type="text" className="form-control" id="mentorName" placeholder="Enter mentor name" required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="mentorAge">Age*</label>
                        <input type="number" className="form-control" id="mentorAge" placeholder="Enter mentor age" required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="mentorEmail">Email*</label>
                        <input type="email" className="form-control" id="mentorEmail" placeholder="Enter mentor email" required />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="mentorPhone">Phone Number*</label>
                        <input type="text" className="form-control" id="mentorPhone" placeholder="Enter mentor phone number" required />
                      </div>
                    </div>
                  </div>

                  <h3 className="card-title text-center mt-4" style={{ backgroundColor: "#FF2D55", color: "#fff", padding: "15px", borderRadius: "5px" }}>
                    Team Details
                  </h3>
                  {teamMembers.map((member, index) => (
                    <div className="row" key={index}>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label htmlFor={`member${index}Name`}>Member {index + 1} Name*</label>
                          <input
                            type="text"
                            className="form-control"
                            id={`member${index}Name`}
                            placeholder={`Enter member ${index + 1} name`}
                            value={member.name}
                            onChange={(e) => handleInputChange(index, "name", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label htmlFor={`member${index}Age`}>Member {index + 1} Age*</label>
                          <input
                            type="number"
                            className="form-control"
                            id={`member${index}Age`}
                            placeholder={`Enter member ${index + 1} age`}
                            value={member.age}
                            onChange={(e) => handleInputChange(index, "age", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label htmlFor={`member${index}Email`}>Member {index + 1} Email*</label>
                          <input
                            type="email"
                            className="form-control"
                            id={`member${index}Email`}
                            placeholder={`Enter member ${index + 1} email`}
                            value={member.email}
                            onChange={(e) => handleInputChange(index, "email", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label htmlFor={`member${index}Phone`}>Member {index + 1} Phone Number*</label>
                          <input
                            type="text"
                            className="form-control"
                            id={`member${index}Phone`}
                            placeholder={`Enter member ${index + 1} phone number`}
                            value={member.phone}
                            onChange={(e) => handleInputChange(index, "phone", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`captain${index}`}
                            checked={member.isCaptain}
                            onChange={(e) => handleInputChange(index, "isCaptain", e.target.checked)}
                          />
                          <label className="form-check-label" htmlFor={`captain${index}`}>
                            Captain
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}

                  {teamMembers.length < 5 && (
                    <div className="col-lg-12 col-md-12 mt-3">
                      <button type="button" className="btn btn-secondary" onClick={addTeamMember}>
                        Add Team Member
                      </button>
                    </div>
                  )}

                  <div className="col-lg-12 col-md-12 mt-3">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="termsConditions" required />
                      <label className="form-check-label" htmlFor="termsConditions">
                        I agree to the terms and conditions
                      </label>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 mt-3">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamRegistrationForm;