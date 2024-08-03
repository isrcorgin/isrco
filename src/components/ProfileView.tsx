"use client";

import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
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
  phone: string;
}

interface TeamData {
  teamName: string;
  country: string;
  competitionTopic: string;
  mentor: Mentor;
  members: Member[];
}

interface ProfileViewProps {
  team: TeamData;
}

const ProfileView: React.FC<ProfileViewProps> = ({ team }) => {
 
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const router = useRouter(); // Hook to navigate programmatically

  const handleShowModal = (member: Member) => {
    setSelectedMember(member);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMember(null);
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear all local storage data
    router.push('/auth/login/'); // Redirect to login page or any other page
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0" style={{ borderRadius: '15px' }}>
        <div className="card-header" style={{ backgroundColor: '#0D1028', color: 'white' }}>
          <h2 className="card-title">Team Profile</h2>
        </div>
        <div className="card-body">
          <h3 className="mb-4" style={{ color: '#0D1028' }}>General Information</h3>
          <div className="row">
            <div className="col-md-4">
              <Card className="text-center mb-4 border-0 rounded-3 shadow-sm hover-card">
                <Card.Body>
                  <Card.Title>Team Name</Card.Title>
                  <Card.Text>{team.teamName}</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="text-center mb-4 border-0 rounded-3 shadow-sm hover-card">
                <Card.Body>
                  <Card.Title>Country</Card.Title>
                  <Card.Text>{team.country}</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="text-center mb-4 border-0 rounded-3 shadow-sm hover-card">
                <Card.Body>
                  <Card.Title>Competition Topic</Card.Title>
                  <Card.Text>{team.competitionTopic}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

          <h3 className="mb-4" style={{ color: '#0D1028' }}>Mentor/Coach Details</h3>
          <Card className="mb-4 border-0 rounded-3 shadow-sm hover-card">
            <Card.Body>
              <Card.Title>{team.mentor.name}</Card.Title>
              <Card.Text><strong>Age:</strong> {team.mentor.age}</Card.Text>
              <Card.Text><strong>Email:</strong> {team.mentor.email}</Card.Text>
              <Card.Text><strong>Phone Number:</strong> {team.mentor.phone}</Card.Text>
            </Card.Body>
          </Card>

          <h3 className="mb-4" style={{ color: '#0D1028' }}>Team Members</h3>
          <div className="row">
            {team.members.map((member, index) => (
              <div key={index} className="col-md-4 mb-4">
                <Card
                  className="border-0 rounded-3 shadow-sm hover-card"
                  onClick={() => handleShowModal(member)}
                  style={{ cursor: 'pointer' }}
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src="/img/isrc.png" // Update with the path to your logo
                      style={{ height: '150px', objectFit: 'contain', marginBottom: '10px' }}
                    />
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text><strong>Age:</strong> {member.age}</Card.Text>
                    <Card.Text><strong>Email:</strong> {member.email}</Card.Text>
                    <Card.Text><strong>Captain:</strong> {member.captain ? 'Yes' : 'No'}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>

          <h3 className="mb-4 text-center" style={{ color: '#0D1028' }}>Team QR</h3>
          <div className="text-center mb-4">
            <img
              src="/img/qr.png" // Update with the path to your dummy image
              alt="Team Information"
              style={{ width: '150px', maxWidth: '100%', borderRadius: '10px', border: '1px solid #ddd' }}
            />
          </div>

          {/* Logout Button */}
          <div className="text-center mb-4">
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </div>

      {selectedMember && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton style={{ backgroundColor: '#DC3545', color: 'white' }}>
            <Modal.Title>Member Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Img
              variant="top"
              src="/img/isrc.png" // Update with the path to your logo
              style={{ height: '150px', objectFit: 'contain', marginBottom: '20px' }}
            />
            <p><strong>Name:</strong> {selectedMember.name}</p>
            <p><strong>Age:</strong> {selectedMember.age}</p>
            <p><strong>Email:</strong> {selectedMember.email}</p>
            <p><strong>Phone Number:</strong> {selectedMember.phone}</p>
            <p><strong>Captain:</strong> {selectedMember.captain ? 'Yes' : 'No'}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ProfileView;
