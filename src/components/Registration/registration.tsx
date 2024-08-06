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
interface TopicOption {
  value: string;
  label: string;
}

interface Topics {
  [key: string]: {
    [key: string]: TopicOption[];
  };
}

const categoryOptions = [
  { value: 'innovation', label: 'Innovation' },
  { value: 'robotics', label: 'Robotics' },
];

const ageGroupOptions = [
  { value: '5 to 8', label: '5th to 8th' },
  { value: '9 to 12', label: '9th to 12th' },
  { value: '1st Year Onwards', label: '1st Year Onwards' },
];

const topics: Topics = {
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
  const { teamRegister } = useContext(AuthContext) as AuthContextType;
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    setToken(storedToken);
  }, []);

  useEffect(() => {
    if (teamRegister) {
      router.push('/');
    }
  }, [teamRegister, router]);

  const checkTeamNameAvailability = useCallback(async (teamName: string) => {
    try {
      setLoading(true);
      const response = await axios.get<CheckTeamNameResponse>(
        `http://localhost:8000/team/check-name/${teamName}`
      );
      setIsAvailable(!response.data.exists);
    } catch (error) {
      console.error('Error checking team name availability:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleTeamNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTeamName(value);
    if (value) {
      checkTeamNameAvailability(value);
    } else {
      setIsAvailable(null);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    setAvailableTopics(selected ? topics[selected]?.[selectedAgeGroup] || [] : []);
  };

  const handleAgeGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedAgeGroup(selected);
    setAvailableTopics(topics[selectedCategory]?.[selected] || []);
  };

  const handleMemberChange = (index: number, field: keyof typeof members[0], value: string | boolean) => {
    const updatedMembers = [...members];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setMembers(updatedMembers);
  };

  const addMember = () => {
    setMembers([...members, { name: "", age: "", email: "", phone: "", isCaptain: false }]);
  };

  const removeMember = (index: number) => {
    const updatedMembers = members.filter((_, i) => i !== index);
    setMembers(updatedMembers);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const teamData = {
        teamName,
        category: selectedCategory,
        ageGroup: selectedAgeGroup,
        members,
      };

      const response = await axios.post(
        "http://localhost:8000/team/register",
        teamData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Team registration successful:", response.data);
    } catch (error) {
      console.error("Error during team registration:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Team Registration Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Team Name:</label>
          <input
            type="text"
            value={teamName}
            onChange={handleTeamNameChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {isAvailable === false && (
            <p className="text-red-500 text-sm mt-1">Team name is already taken. Please choose another one.</p>
          )}
          {isAvailable === true && (
            <p className="text-green-500 text-sm mt-1">Team name is available!</p>
          )}
        </div>
        <div>
          <label className="block font-medium">Category:</label>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select a category</option>
            {categoryOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium">Age Group:</label>
          <select
            value={selectedAgeGroup}
            onChange={handleAgeGroupChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select an age group</option>
            {ageGroupOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-medium">Topic:</label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option value="">Select a topic</option>
            {availableTopics.map(topic => (
              <option key={topic.value} value={topic.value}>
                {topic.label}
              </option>
            ))}
          </select>
        </div>
        <h2 className="text-xl font-bold mt-4">Members</h2>
        {members.map((member, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded mb-4">
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-medium">Member {index + 1}</h3>
              {members.length > 2 && (
                <button
                  type="button"
                  onClick={() => removeMember(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              )}
            </div>
            <div className="space-y-2">
              <div>
                <label className="block font-medium">Name:</label>
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block font-medium">Age:</label>
                <input
                  type="text"
                  value={member.age}
                  onChange={(e) => handleMemberChange(index, 'age', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block font-medium">Email:</label>
                <input
                  type="email"
                  value={member.email}
                  onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block font-medium">Phone:</label>
                <input
                  type="text"
                  value={member.phone}
                  onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={member.isCaptain}
                  onChange={(e) => handleMemberChange(index, 'isCaptain', e.target.checked)}
                  className="mr-2"
                />
                <label className="font-medium">Team Captain</label>
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addMember}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Add Member
        </button>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Register Team
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeamRegistrationForm;
