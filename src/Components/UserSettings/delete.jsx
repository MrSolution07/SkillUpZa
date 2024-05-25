import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import HomeHeader from "../../Components/Social/Header";
import './passwordcard.css';

const DeleteAccountCard = ({ handleDeleteAccount }) => {
  return (
    <div className="deletecard">
      <HomeHeader />
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Row className="w-100">
          <Col xs={12} md={8} lg={6} className="mx-auto">
            <Card className="card-custom mb-4" style={{ borderRadius: '15px' }}>
              <Card.Body>
                <Card.Title className="text-center mb-4">Delete Account</Card.Title>
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
