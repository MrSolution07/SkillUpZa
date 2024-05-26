import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

import Homeheader from "../../Components/Social/Header";
import ProfileCard from './profilecard';
import ChangePasswordCard from './changepassword';
import DeleteAccountCard from './delete';

const AccountSettingsCard = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureBase64, setProfilePictureBase64] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.post('  https://cannonball-can.000webhostapp.com/update.php', {
        username: localStorage.getItem('username')
      });
      const responseData = response.data;
      if (response.status === 200 && responseData.length > 0 && responseData[0].Username) {
        setUsername(responseData[0].Username);
        setEmail(responseData[0].Email);
        setMobileNumber(responseData[0].Mobile_number);
        setProfilePictureBase64(responseData[0].Profile_picture);
        setCurrentPassword(responseData[0].current_Password);
        setNewPassword(responseData[0].New_Password);
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
      const formData = new FormData();
      formData.append('username', username);
      formData.append('email', email);
      formData.append('mobileNumber', mobileNumber);
      if (profilePicture) {
        formData.append('ProfilePicture', profilePicture);
      }

      const response = await axios.post('  https://cannonball-can.000webhostapp.com/update.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const data = response.data;
      window.alert('Info updated successfully');
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePictureBase64(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePasswordChangeSubmit = async (event) => {
  event.preventDefault();
  try {
    // const formData = new FormData();
    // formData.append('username', username);
    // formData.append('currentPassword', currentPassword);
    // formData.append('newPassword', newPassword);

    const response = await axios.post('http://localhost/DATABASE_DATA/update.php', {
      username,
      currentPassword,
      newPassword,
    });
    console.log(currentPassword);
    const data = response.data;
    //console.log('Password update response:', data);
    if (data.success) {
      window.alert('Password updated successfully');
    } else {
      window.alert('Error updating password: ' + data.message);
    }
  } catch (error) {
    console.error('Error updating password:', error);
  }
};

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        const response = await axios.post('  https://cannonball-can.000webhostapp.com/delete.php', {
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

  return (
    <>
      <Homeheader />
      <Container style={{marginTop:"10%"}}>
        <Row className="mb-4">
          <Col xs={12} md={12}>
            <ProfileCard
              profilePicture={profilePictureBase64}
              handleProfilePictureChange={handleProfilePictureChange}
              removeProfilePicture={() => setProfilePictureBase64('')}
            />
          </Col>
          <Col xs={12} md={12}>
            <Card className="mb-4" style={{ borderRadius: '15px' }}>
              <Card.Body>
                <Card.Title className="text-center mb-4">Account Settings</Card.Title>
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
                  <Button variant="primary" type="submit" className="w-100">
                    Save Changes
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={12}>
            <ChangePasswordCard handlePasswordChangeSubmit={handlePasswordChangeSubmit} />
          </Col>
          <Col xs={12} md={12}>
            <DeleteAccountCard handleDeleteAccount={handleDeleteAccount} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AccountSettingsCard;
