import React, { useState } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import HomeHeader from "../../Components/Social/Header";
import './passwordcard.css';
import axios from 'axios';

const ChangePasswordCard = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChangeSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://skillaupza.free.nf/user/update_user_password.php', {
        username: localStorage.getItem("username"),
        currentPassword: currentPassword,
        newPassword: newPassword,
      });
      // console.log(currentPassword);
      // console.log(newPassword);
      const data = response.data;
      if (data.success) {
        window.alert('Password updated successfully');
      } else {
        window.alert('Error updating password: ' + data.message);
      }
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  return (
    <div className="passwordcard d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <HomeHeader />
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="card-custom mb-4" style={{ borderRadius: '15px' }}>
              <Card.Body>
                <Card.Title className="text-center mb-4">Change Password</Card.Title>
                <Form onSubmit={handlePasswordChangeSubmit}>
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