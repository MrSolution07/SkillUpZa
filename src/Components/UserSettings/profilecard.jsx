
import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import HomeHeader from "../../Components/Social/Header";
import './passwordcard.css';  

const ProfileCard = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.post('https://skill-up-za-a416b38edeac.herokuapp.com/update_user.php', {
        username: localStorage.getItem('username')
      });
      const responseData = response.data;
      if (response.status === 200) {
        setUsername(responseData[0].Username);
        setEmail(responseData[0].Email);
        setMobileNumber(responseData[0].Mobile_number);
        setProfilePicture(responseData[0].Profile_picture);
      } else {
        console.error('Error:', responseData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAccountSettingsSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://skill-up-za-a416b38edeac.herokuapp.com/update_user.php', {
        username,
        email,
        mobileNumber
      });
      const data = response.data;
      console.log('Update response:', data);
      window.alert('Info updated successfully');
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleProfilePictureChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('profilePicture', file);
      formData.append('username', username);

      try {
        const response = await axios.post('https://skill-up-za-a416b38edeac.herokuapp.com/upload_profile_picture.php', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const data = response.data;
        console.log('Upload response:', data);
        setProfilePicture(URL.createObjectURL(file));
        window.alert('Profile picture uploaded successfully');
      } catch (error) {
        console.error('Error uploading profile picture:', error);
      }
    }
  };

  return (
    <div className="profile">
      <HomeHeader />
      <Container className="center-container">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className="card-custom mb-4" style={{ borderRadius: '15px' }}>
              <Card.Body className="text-center">
                {profilePicture ? (
                  <>
                    <div style={{ position: 'relative', width: '100px', height: '100px', margin: 'auto' }} className='removediv'>
                      <img
                        src={profilePicture}
                        alt="Profile"
                        className="rounded-circle img-fluid"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </div>

                      <Button variant="danger" onClick={() => setProfilePicture(null)} className="mb-0" id="text-btn">
                        Remove 
                      </Button>
                  </>
                ) : (
                  <Form.Group controlId="profilePicture">
                    <Form.Label>Upload Profile Picture</Form.Label>
                    <Form.Control type="file" accept="image/*" onChange={handleProfilePictureChange} />
                  </Form.Group>
                )}
                <Card.Title>User Profile</Card.Title>
                <Form onSubmit={handleAccountSettingsSubmit}>
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
                  <Button variant="primary" type="submit" className="w-100" style={{marginTop:"20px"}}>
                    Save Changes
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

export default ProfileCard;
 

