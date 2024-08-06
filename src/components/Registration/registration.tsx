"use client";
import React, { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import AuthContext, { AuthContextType } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Define the response type for the API call
interface CheckTeamNameResponse {
  exists: boolean;
}

// Define types for the new fields and options
interface CheckTeamNameResponse {
  exists: boolean;
}

// Define types for the new fields and options
interface TopicOption {
  value: string;
  label: string;
}

const categoryOptions: TopicOption[] = [
  { value: 'innovation', label: 'Innovation' },
  { value: 'robotics', label: 'Robotics' },
];

const ageGroupOptions: TopicOption[] = [
  { value: '5 to 8', label: '5th to 8th' },
  { value: '9 to 12', label: '9th to 12th' },
  { value: '1st Year Onwards', label: '1st Year Onwards' },
];

const topics: Record<string, Record<string, TopicOption[]>> = {
  robotics: {
    '5 to 8': [
      { value: 'Path Following 5 to 8', label: 'Path Following' },
      { value: 'Water Boat 5 to 8', label: 'Water Boat' },
    ],
    '9 to 12': [
      { value: 'Maze Solver 9 to 12', label: 'Maze Solver' },
      { value: 'Path Following 9 to 12', label: 'Path Following' },
    ],
    '1st Year Onwards': [
      { value: 'Path Following 1st Year Onwards', label: 'Path Following' },
      { value: 'Drone 1st Year Onwards', label: 'Drone' },
      { value: 'Line Following 1st Year Onwards', label: 'Line Following' },
    ],
  },
  innovation: {
    '5 to 8': [
      { value: 'Community Development', label: 'Community Development' },
      { value: 'Disaster Management', label: 'Disaster Management' },
      { value: 'Transport and Mobility', label: 'Transport and Mobility' },
      { value: 'Robotics and Automation', label: 'Robotics and Automation' },
      { value: 'Energy Solutions', label: 'Energy Solutions' },
      { value: 'Education and Learning', label: 'Education and Learning' },
      { value: 'Agriculture and Food Security', label: 'Agriculture and Food Security' },
      { value: 'Healthcare', label: 'Healthcare' },
      { value: 'Smart Cities', label: 'Smart Cities' },
    ],
    '9 to 12': [
      { value: 'Community Development', label: 'Community Development' },
      { value: 'Disaster Management', label: 'Disaster Management' },
      { value: 'Transport and Mobility', label: 'Transport and Mobility' },
      { value: 'Robotics and Automation', label: 'Robotics and Automation' },
      { value: 'Energy Solutions', label: 'Energy Solutions' },
      { value: 'Education and Learning', label: 'Education and Learning' },
      { value: 'Agriculture and Food Security', label: 'Agriculture and Food Security' },
      { value: 'Healthcare', label: 'Healthcare' },
      { value: 'Smart Cities', label: 'Smart Cities' },
    ],
    '1st Year Onwards': [
      { value: 'Community Development', label: 'Community Development' },
      { value: 'Disaster Management', label: 'Disaster Management' },
      { value: 'Transport and Mobility', label: 'Transport and Mobility' },
      { value: 'Robotics and Automation', label: 'Robotics and Automation' },
      { value: 'Energy Solutions', label: 'Energy Solutions' },
      { value: 'Education and Learning', label: 'Education and Learning' },
      { value: 'Agriculture and Food Security', label: 'Agriculture and Food Security' },
      { value: 'Healthcare', label: 'Healthcare' },
      { value: 'Smart Cities', label: 'Smart Cities' },
    ],
  },
};
const TeamRegistrationForm: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [members, setMembers] = useState([
    { name: "", age: "", email: "", phone: "", isCaptain: false },
    { name: "", age: "", email: "", phone: "", isCaptain: false },
  ]);
  const [teamName, setTeamName] = useState<string>('');
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('');
  const [availableTopics, setAvailableTopics] = useState<TopicOption[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<string>('');
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
    setTeamTotalPrice(members.length * 1250);
  }, [members, setTeamTotalPrice]);

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

  const checkTeamNameAvailability = useCallback(async (name: string) => {
    try {
      setLoading(true);

      const token = JSON.parse(localStorage.getItem('token') || 'null');

      const response = await axios.get<CheckTeamNameResponse>('https://isrc-backend-gwol.onrender.com/api/check-team-name', {
        params: { teamName: name },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsAvailable(!response.data.exists);
    } catch (error) {
      console.error('Error checking team name:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const debouncedCheck = setTimeout(() => {
      if (teamName) {
        checkTeamNameAvailability(teamName);
      }
    }, 500);

    return () => clearTimeout(debouncedCheck);
  }, [teamName, checkTeamNameAvailability]);

  const handleTeamInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
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
        isCaptain: i === index,
      }))
    );
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    setAvailableTopics(selected ? topics[selected][selectedAgeGroup] || [] : []);
  };

  const handleAgeGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedAgeGroup(selected);
    setAvailableTopics(topics[selectedCategory][selected] || []);
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTopic(e.target.value);
  };

  const handleRegistration = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!token) {
      alert('User not authenticated. Please log in.');
      return;
    }

    if(teamRegister){
      alert('Team already registered. Please log out and try again.');
      return;
    }
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const formDetails = {
      teamName: formData.get('teamName')?.toString() || '',
      country: formData.get('country')?.toString() || '',
      mentorName: formData.get('mentorName')?.toString() || '',
      mentorAge: formData.get('mentorAge')?.toString() || '',
      mentorEmail: formData.get('mentorEmail')?.toString() || '',
      mentorPhone: formData.get('mentorPhone')?.toString() || '',
      ageGroup: formData.get('ageGroup')?.toString() || '',
      category: formData.get('category')?.toString() || '',
      topic: formData.get('topic')?.toString() || '',
      amountDue: teamTotalPrice
    };

    const teamMembers = members.map(member => ({
      name: member.name,
      age: member.age,
      phone: member.phone,
      isCaptain: member.isCaptain,
    }));

    try {
      await axios.post(
        'https://isrc-backend-gwol.onrender.com/api/register-team',
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
                          id="teamName"
                          name="teamName"
                          className="form-control"
                          value={teamName}
                          required
                          onChange={handleTeamInputChange}
                        />
                        {loading ? (
                          <p>Checking availability...</p>
                        ) : (
                          isAvailable !== null && (
                            <p>{isAvailable ? <span className="text-success" >Team name is available</span> : <span className="text-danger" >Team name is not available</span> }</p>
                          )
                        )}
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
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="category">Category <span className="text-danger">*</span></label>
                        <select
                          className="form-control"
                          id="category"
                          name="category"
                          value={selectedCategory}
                          onChange={handleCategoryChange}
                          required
                        >
                          <option value="">Select Category</option>
                          {categoryOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="ageGroup">Age Group <span className="text-danger">*</span></label>
                        <select
                          className="form-control"
                          id="ageGroup"
                          name="ageGroup"
                          value={selectedAgeGroup}
                          onChange={handleAgeGroupChange}
                          required
                        >
                          <option value="">Select Age Group</option>
                          {ageGroupOptions.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="competitionTopic">Select Competition Topic <span className="text-danger">*</span></label>
                        <select
                          className="form-control"
                          id="topic"
                          name="topic"
                          value={selectedTopic}
                          onChange={handleTopicChange}
                          required
                        >
                          <option value="">Select your topic</option>
                          {availableTopics.map(option => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
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
                          <button
                            type="button"
                            className="btn btn-danger mt-2"
                            onClick={() => removeTeamMember(index)}
                          >
                            Remove Member
                          </button>
                        </div>
                      )}
                    </div>
                  ))}

                  {members.length < 5 && (
                    <div className="d-flex justify-content-center mt-3">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={addTeamMember}
                      >
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
                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ backgroundColor: "#FF2D55" }}
                    >
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
