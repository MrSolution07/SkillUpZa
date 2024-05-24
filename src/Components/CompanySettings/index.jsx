import React, { useState } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import DashboardLayout from "../../Pages/Dashboard/layout";
const CompanySettingsCard = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');


  return (
    <>
    <DashboardLayout>
    <Container>
      <Row className="mb-4">
        <Col xs={12} md={12}>
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
                    <Button variant="danger" onClick={() => setProfilePicture(null)} className="mb-0">
                      Remove Picture
                    </Button>
                  </div>
                </>
              ) : (
                <Form.Group controlId="profilePicture">
                  <Form.Label>Upload Profile Picture</Form.Label>
                  <Form.Control type="file" accept="image/*"  />
                </Form.Group>
              )}
              <Card.Title>Company Profile</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={12}>
          <Card className="mb-4" style={{ borderRadius: '15px' }}>
            <Card.Body>
              <Card.Title className="text-center mb-4">Account Settings</Card.Title>
              <Form >
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter new email"
                  />
                </Form.Group>
                <Form.Group controlId="mobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={mobileNumber}
                    name="mobileNumber"
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Enter new mobile number"
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
          <Card className="mb-4" style={{ borderRadius: '15px' }}>
            <Card.Body>
              <Card.Title className="text-center mb-4">Change Password</Card.Title>
              <Form >
                <Form.Group controlId="currentPassword">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={currentPassword}
                    name="currentPassword"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                  />
                </Form.Group>
                <Form.Group controlId="newPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={newPassword}
                    name="newPassword"
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Change Password
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={12}>
          <Card className="mb-4" style={{ borderRadius: '15px' }}>
            <Card.Body>
              <Card.Title className="text-center mb-4">Delete Account</Card.Title>
              <Button variant="danger" className="w-100" >
                Delete Account
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </DashboardLayout>
  </>
  );
};

export default CompanySettingsCard;
