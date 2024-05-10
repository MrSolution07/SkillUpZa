import React, { useState } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';

const AccountSettingsCard = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleAccountSettingsSubmit = (event) => {
    event.preventDefault();
    console.log('Account settings submitted:', { username, email, firstName, lastName, profilePicture });
    setUsername('');
    setEmail('');
    setFirstName('');
    setLastName('');
    setProfilePicture(null);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveProfilePicture = () => {
    setProfilePicture(null);
  };

  const handlePasswordChangeSubmit = (event) => {
    event.preventDefault();
    // Implement password change logic here (e.g., call an API to update the password)
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);
    setCurrentPassword('');
    setNewPassword('');
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col xs={12} md={12}>
          {/* User Profile Card */}
          <Card className="mb-4" style={{ borderRadius: '15px', position: 'relative' }}>
            <Card.Body className="text-center">
              {profilePicture ? (
                <>
                  <div style={{ position: 'relative', width: '150px', height: '150px', margin: 'auto' }}>
                    <img
                      src={profilePicture}
                      alt="Profile"
                      className="rounded-circle img-fluid"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <Button
                       variant="danger" onClick={() => setProfilePicture(null)} className="mb-0">
                       Remove Picture
                    </Button>
                  </div>
                </>
              ) : (
                <Form.Group controlId="profilePicture">
                  <Form.Label>Upload Profile Picture</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                  />
                </Form.Group>
              )}
              <Card.Title>User Profile</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={12}>
          {/* Account Settings Card */}
          <Card className="mb-4" style={{ borderRadius: '15px' }}>
            <Card.Body>
              <Card.Title className="text-center mb-4">Account Settings</Card.Title>
              <Form onSubmit={handleAccountSettingsSubmit}>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Save Changes
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={12}>
          {/* Change Password Card */}
          <Card className="mb-4" style={{ borderRadius: '15px' }}>
            <Card.Body>
              <Card.Title className="text-center mb-4">Change Password</Card.Title>
              <Form onSubmit={handlePasswordChangeSubmit}>
                <Form.Group controlId="currentPassword">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="newPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Change Password
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountSettingsCard;
