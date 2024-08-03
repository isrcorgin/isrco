"use client";

import React, { useEffect, useState } from 'react';
import ProfileView from '@/components/ProfileView';
import Navbar from '@/components/Layouts/Navbar';
import Footer from '@/components/Layouts/Footer';
import PageBanner from '@/components/Common/PageBanner';
import Loading from '../loading';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Member {
  name: string;
  age: string;
  email: string;
  phoneNumber: string;
  captain: boolean;
}

interface Mentor {
  name: string;
  age: string;
  email: string;
  phoneNumber: string;
}

interface TeamData {
  teamName: string;
  country: string;
  competitionTopic: string;
  mentor: Mentor;
  members: Member[];
}

const ProfilePage: React.FC = () => {
  const [teamData, setTeamData] = useState<TeamData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the token from local storage
        const tokenString = localStorage.getItem("token");
        if (!tokenString) {
          router.push("/auth/login")
        }

        // Parse the token if it is a JSON string
        const token = JSON.parse(tokenString);

        // Make the API request with the token in the headers
        const response = await axios.get('https://isrc-backend.onrender.com/user-profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data;

        // Ensure team data exists
        if (!data.user || !data.user.team) {
          throw new Error('Invalid data structure');
        }

        setTeamData(data.user.team);
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading/>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Profile"
        shortText=""
        homePageUrl="/"
        homePageText="Home"
        activePageText="Profile"
        bgImg="/images/main-bg2.jpg"
      />

      <div className="container mt-5">
        {teamData ? <ProfileView team={teamData} /> : <div>No team data available</div>}
      </div>
      <br /><br />
      <Footer />
    </>
  );
};

export default ProfilePage;