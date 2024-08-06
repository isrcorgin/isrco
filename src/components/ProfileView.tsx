"use client";

import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import QRCodeGenerator from './QRCode';

interface Member {
  name: string;
  age: string;
  email: string;
  phone: string;
  isCaptain: boolean;
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
<<<<<<< HEAD
<<<<<<< HEAD
  uid: string; 
=======
  uid: string;
>>>>>>> parent of 9f76b77 (fixed  backend changes)
  paymentStatus: string;
  amountDue: number;
  onCompletePayment: () => void
=======
  uid: string;
>>>>>>> parent of 2a87f76 (complete backend changes)
}

const ProfileView: React.FC<ProfileViewProps> = ({ team, uid }) => {
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
                    {member.isCaptain ? <Card.Text className='text-center' style={{ color: "black", fontSize: "large" }}><strong>Captain</strong></Card.Text> : <Card.Text style={{ opacity: "0" }}>caption</Card.Text>}
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Text><strong>Age:</strong> {member.age}</Card.Text>
                    <Card.Text><strong>Email:</strong> {member.email}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>

          <h3 className="mb-4 text-center" style={{ color: '#0D1028' }}>Team QR</h3>
          <div className="text-center mb-4">
            <QRCodeGenerator uid={uid} />
          </div>

          {/* Support WhatsApp Button */}
          <div className="text-center mb-4">
            <Button 
              variant="success" 
              onClick={() => window.open('https://wa.me/919594402916', '_blank')}
              style={{ marginBottom: '10px' }}
            >
              Contact Support on WhatsApp
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
            {selectedMember.isCaptain ? <p className='text-center' style={{ fontSize: "large" }}><strong>Captain</strong></p> : <p style={{ opacity: "0" }}><strong>Captain</strong></p>}
            <p><strong>Name:</strong> {selectedMember.name}</p>
            <p><strong>Age:</strong> {selectedMember.age}</p>
            <p><strong>Email:</strong> {selectedMember.email}</p>
            <p><strong>Phone Number:</strong> {selectedMember.phone}</p>
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
