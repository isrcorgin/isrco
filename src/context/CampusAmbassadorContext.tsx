"use client"
// SpeakersContext.tsx

import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the types for your data
interface SocialLink {
  iconName: string;
  url: string;
}

interface SpeakersMember {
  image: string;
  name: string;
  designation: string;
  socialLinks: SocialLink[];
}

// Sample data
const SpeakersMemberData: SpeakersMember[] = [
  {
    image: "/img/campus/16.png",
    name: "Isha Sanjay Sawant",
    designation: "Ratnagiri",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  
  {
    image: "/img/campus/9.png",
    name: "Sachin Chandraprakash",
    designation: "Thane",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/17.png",
    name: "Anjali Kisan Chavan",
    designation: "Chiplun",
    socialLinks: [
      
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  
  {
    image: "/img/campus/2.png",
    name: "Harshal",
    designation: "Chowk",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/3.png",
    name: "Smit",
    designation: "Mumbai",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/4.png",
    name: "Aditya",
    designation: "Kanpur",
    socialLinks: [
      
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/5.png",
    name: "Anjali",
    designation: "Dombivli",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/6.png",
    name: "Disha",
    designation: "Mumbai",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/7.png",
    name: "Ankit",
    designation: "Patna",
    socialLinks: [
      
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/8.png",
    name: "Sarthak Sudhakar Dorugade",
    designation: "Kharghar",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/10.png",
    name: "Ravisha Rafik Pathan",
    designation: "Thane",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/12.png",
    name: "Labhesh",
    designation: "Palghar",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  
  {
    image: "/img/campus/13.png",
    name: "Manoj Subburaj Yadav",
    designation: "Mumbai",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/14.png",
    name: "Sejal",
    designation: "Pune",
    socialLinks: [
      
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/15.png",
    name: "Priyanka",
    designation: "Mumbai",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  
  {
    image: "/img/campus/18.png",
    name: "Yuvrajsing Bahure",
    designation: "Maharashtra",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/19.png",
    name: "Snehashish Datta",
    designation: "NIT Uttarpradesh",
    socialLinks: [
      
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/20.png",
    name: "Sachin Rathod",
    designation: "Maharashtra",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  
  {
    image: "/img/campus/21.png",
    name: "Valarmathi",
    designation: "Tamilnadu",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/22.png",
    name: "Madhuvandhana",
    designation: "Tamilnadu",
    socialLinks: [
      
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/23.png",
    name: "Shreyansh",
    designation: "AMITY University , Rajasthan",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/24.jpg",
    name: "Dhanushyas",
    designation: "Tamil Nadu",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/25.jpg",
    name: "Vijayavivinya",
    designation: "Tamil Nadu",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/26.jpg",
    name: "Raj Solanki",
    designation: "Madhya Pradesh",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/27.jpg",
    name: "Varsha Patil",
    designation: "Maharashtra",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
  {
    image: "/img/campus/28.jpg",
    name: "Swaasthika",
    designation: "Tamil Nadu",
    socialLinks: [
     
      {
        iconName: "icofont-linkedin",
        url: "https://linkedin.com/",
      },
    ],
  },
];

// Define the context type
interface SpeakersContextType {
  speakersMembers: SpeakersMember[];
}

// Create the context with a default value of an empty array
const SpeakersContext = createContext<SpeakersContextType | undefined>(undefined);

// Create a provider component
const SpeakersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [speakersMembers, setSpeakerMembers] = useState<SpeakersMember[]>([]);

  // Shuffle function
  const shuffleArray = (array: SpeakersMember[]): SpeakersMember[] => {
    let shuffledArray = array.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
  };

  // Set the shuffled array on component mount
  useEffect(() => {
    setSpeakerMembers(shuffleArray(SpeakersMemberData));
  }, []);

  return (
    <SpeakersContext.Provider value={{ speakersMembers }}>
      {children}
    </SpeakersContext.Provider>
  );
};

// Custom hook for using the context
const useSpeakers = (): SpeakersContextType => {
  const context = React.useContext(SpeakersContext);
  if (context === undefined) {
    throw new Error('useSpeakers must be used within a SpeakersProvider');
  }
  return context;
};

export { SpeakersProvider, useSpeakers };
