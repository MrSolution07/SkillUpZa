import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import HomeHeader from "../../Components/Social/Header";
import './passwordcard.css';
import axios from 'axios'; // Make sure to import axios

const handleDeleteAccount = async () => {
  if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
    try {
      const response = await axios.post('https://skillaupza.free.nf/user/delete.php', {
        username: localStorage.getItem('username')
      });
      const data = response.data;
      console.log(localStorage.getItem('username'));

      console.log('Delete account response:', data);
      if (data.success) {
        localStorage.removeItem('username');
        window.alert('Account deleted successfully');
        window.location.href = '/'; // Redirect to home page
      } else {
        window.alert('Error deleting account: ' + data.message);
      }
    } catch (error) {
      console.error('Error deleting account:', error);
      window.alert('Error deleting account');
    }
  }
};

const DeleteAccountCard = () => {
  return (
    <div className="deletecard">
      <HomeHeader />
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Row className="w-100">
          <Col xs={12} md={8} lg={6} className="mx-auto">
            <Card className="card-custom mb-4" style={{ borderRadius: '15px' }}>
              <Card.Body>
                <Card.Title className="text-center mb-4">Delete Account</Card.Title>
                <p>
                <strong>Warning:</strong> Deleting your account is irreversible. Please proceed with caution.
              </p>
                <Button variant="danger" className="w-100" onClick={handleDeleteAccount}>
                  Delete Account
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DeleteAccountCard;

