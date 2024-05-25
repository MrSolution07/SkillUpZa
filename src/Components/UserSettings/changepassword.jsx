import React, { useState } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import HomeHeader from "../../Components/Social/Header";
import './passwordcard.css';

const ChangePasswordCard = ({ handlePasswordChangeSubmit }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePasswordChangeSubmit(currentPassword, newPassword);
  };

  return (
    <div className="passwordcard">
      <HomeHeader />
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Row className="w-100">
          <Col xs={12} md={6} lg={4}>
            <Card className="card-custom mb-4" style={{ borderRadius: '15px', width: "500px", height: "400px",marginLeft:"90%" }}>
              <Card.Body>
                <Card.Title className="text-center mb-4">Change Password</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="currentPassword" className="mb-4">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Enter current password"
                    />
                  </Form.Group>
                  <Form.Group controlId="newPassword" className="mb-5">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100" style={{ marginTop: "8px" }}>
                    Change Password
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChangePasswordCard;