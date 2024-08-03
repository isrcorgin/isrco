"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext, { AuthContextType } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

const TeamRegistrationForm: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [members, setMembers] = useState([
    { name: "", age: "", email: "", phone: "", isCaptain: false },
    { name: "", age: "", email: "", phone: "", isCaptain: false }
  ]);
  const { teamTotalPrice, setTeamTotalPrice, teamRegister, setTeamRegister } = useContext(AuthContext) as AuthContextType;
  const router = useRouter();

  useEffect(() => {
    if (teamRegister) {
      router.push('/');
    }
  }, [teamRegister]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken ? JSON.parse(storedToken) : null);
  }, []);

  useEffect(() => {
    setTeamTotalPrice(members.length * 1200);
  }, [members]);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken ? JSON.parse(storedToken) : null);
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const addTeamMember = () => {
    if (members.length < 5) {
      setMembers([...members, { name: "", age: "", email: "", phone: "", isCaptain: false }]);
    }
  };

  const removeTeamMember = (index: number) => {
    if (members.length > 2) {
      const updatedMembers = members.filter((_, i) => i !== index);
      setMembers(updatedMembers);
    }
  };

  const handleInputChange = (index: number, field: string, value: string | boolean) => {
    const updatedMembers = members.map((member, i) =>
      i === index ? { ...member, [field]: value } : member
    );
    setMembers(updatedMembers);
  };

  const handleCaptainChange = (index: number) => {
    setMembers(prevMembers =>
      prevMembers.map((member, i) => ({
        ...member,
        isCaptain: i === index // Only the selected member will be the captain
      }))
    );
  };

  const handleRegistration = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!token) {
      alert('User not authenticated. Please log in.');
      return;
    }

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const formDetails = {
      teamName: formData.get('teamName')?.toString() || '',
      country: formData.get('country')?.toString() || '',
      competitionTopic: formData.get('competitionTopic')?.toString() || '',
      mentorName: formData.get('mentorName')?.toString() || '',
      mentorAge: formData.get('mentorAge')?.toString() || '',
      mentorEmail: formData.get('mentorEmail')?.toString() || '',
      mentorPhone: formData.get('mentorPhone')?.toString() || '',
    };

    const teamMembers = members.map(member => ({
      name: member.name,
      age: member.age,
      email: member.email,
      phone: member.phone,
      isCaptain: member.isCaptain,
    }));

    try {
      await axios.post(
        'https://isrc-backend.onrender.com/register-team',
        { formDetails, teamMembers },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      
      router.push("/payment");
      
    } catch (error) {
      console.error('Error during registration or payment:', error);
      alert('An error occurred during registration or payment. Please try again.');
    }
  };

  return (
    <div className="contact-area ptb-120">
      <div className="container">
        <div className="row h-100 align-items-center contact-form">
          <div className="col-lg-12 col-md-12">
            <div className="card shadow p-3 mb-5 bg-white rounded">
              <div className="card-body">
                {/* Display login message if user is not authenticated */}
                {!token && (
                  <div className="alert alert-warning text-center" role="alert">
                    You need to <Link href="/auth/login" className="alert-link">Sign in</Link> to register your team.
                  </div>
                )}

                <form id="teamRegistrationForm" onSubmit={handleRegistration}>
                  <h3 className="card-title text-center" style={{ backgroundColor: "#FF2D55", color: "#fff", padding: "15px", borderRadius: "5px" }}>
                    General Information
                  </h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="teamName">Team Name <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          className="form-control"
                          id="teamName"
                          name="teamName"
                          placeholder="Enter team name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="country">Country <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          className="form-control"
                          id="country"
                          name="country"
                          placeholder="Enter country"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label htmlFor="competitionTopic">Select Competition Topic <span className="text-danger">*</span></label>
                        <select
                          className="form-control"
                          id="competitionTopic"
                          name="competitionTopic"
                          required
                        >
                          <option value="">Select your topic</option>
                          <option value="pathFollowing5to8">Path Following (5th to 8th)</option>
                          <option value="waterBoat5to8">Water Boat (5th to 8th)</option>
                          <option value="pathFollowing9to12">Path Following (9th to 12th)</option>
                          <option value="mazeSolver9to12">Maze Solver (9th to 12th)</option>
                          <option value="pathFollowing1stYearOnward">Path Following (1st Year Onward)</option>
                          <option value="lineFollowing1stYearOnward">Line Following (1st Year Onward)</option>
                          <option value="drone1stYearOnward">Drone (1st Year Onward)</option>
                          <option value="smartCities">Smart Cities (Innovation)</option>
                          <option value="healthcare">Healthcare (Innovation)</option>
                          <option value="agricultureFoodSecurity">Agriculture and Food Security (Innovation)</option>
                          <option value="educationLearning">Education and Learning (Innovation)</option>
                          <option value="energySolutions">Energy Solutions (Innovation)</option>
                          <option value="roboticsAutomation">Robotics and Automation (Innovation)</option>
                          <option value="transportMobility">Transport and Mobility (Innovation)</option>
                          <option value="disasterManagement">Disaster Management (Innovation)</option>
                          <option value="communityDevelopment">Community Development (Innovation)</option>
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
                        <label htmlFor="mentorName">Name <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          className="form-control"
                          id="mentorName"
                          name="mentorName"
                          placeholder="Enter mentor name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="mentorAge">Age <span className="text-danger">*</span></label>
                        <input
                          type="number"
                          className="form-control"
                          id="mentorAge"
                          name="mentorAge"
                          placeholder="Enter mentor age"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="mentorEmail">Email <span className="text-danger">*</span></label>
                        <input
                          type="email"
                          className="form-control"
                          id="mentorEmail"
                          name="mentorEmail"
                          placeholder="Enter mentor email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="mentorPhone">Phone Number <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          className="form-control"
                          id="mentorPhone"
                          name="mentorPhone"
                          placeholder="Enter mentor phone number"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="card-title text-center mt-4" style={{ backgroundColor: "#FF2D55", color: "#fff", padding: "15px", borderRadius: "5px" }}>
                    Team Details
                  </h3>
                  {members.map((member, index) => (
                    <div className="row" key={index}>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label htmlFor={`member${index}Name`}>Member {index + 1} Name <span className="text-danger">*</span></label>
                          <input
                            type="text"
                            className="form-control"
                            id={`member${index}Name`}
                            name={`member${index}Name`}
                            placeholder={`Enter member ${index + 1} name`}
                            value={member.name}
                            onChange={(e) => handleInputChange(index, "name", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label htmlFor={`member${index}Age`}>Member {index + 1} Age <span className="text-danger">*</span></label>
                          <input
                            type="number"
                            className="form-control"
                            id={`member${index}Age`}
                            name={`member${index}Age`}
                            placeholder={`Enter member ${index + 1} age`}
                            value={member.age}
                            onChange={(e) => handleInputChange(index, "age", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label htmlFor={`member${index}Email`}>Member {index + 1} Email <span className="text-danger">*</span></label>
                          <input
                            type="email"
                            className="form-control"
                            id={`member${index}Email`}
                            name={`member${index}Email`}
                            placeholder={`Enter member ${index + 1} email`}
                            value={member.email}
                            onChange={(e) => handleInputChange(index, "email", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label htmlFor={`member${index}Phone`}>Member {index + 1} Phone Number <span className="text-danger">*</span></label>
                          <input
                            type="text"
                            className="form-control"
                            id={`member${index}Phone`}
                            name={`member${index}Phone`}
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
                            type="radio"
                            className="form-check-input"
                            id={`captain${index}`}
                            name="captain" // Ensure all radio buttons have the same name
                            checked={member.isCaptain}
                            onChange={() => handleCaptainChange(index)}
                          />
                          <label className="form-check-label" htmlFor={`captain${index}`}>
                            Captain
                          </label>
                        </div>
                      </div>
                      {members.length > 2 && (
                        <div className="col-lg-12 col-md-12">
                          <button type="button" className="btn btn-danger mt-2" onClick={() => removeTeamMember(index)}>
                            Remove Member
                          </button>
                        </div>
                      )}
                    </div>
                  ))}

                  {members.length < 5 && (
                    <div className="d-flex justify-content-center mt-3">
                      <button type="button" className="btn btn-secondary" onClick={addTeamMember}>
                        Add Team Member
                      </button>
                    </div>
                  )}

                  <div className="col-lg-12 col-md-12 mt-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="termsConditions"
                        name="termsConditions"
                        required
                      />
                      <label className="form-check-label" htmlFor="termsConditions">
                        I agree to the terms and conditions
                      </label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mt-3">
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#FF2D55" }}>
                      Register and Pay ₹{teamTotalPrice}
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
