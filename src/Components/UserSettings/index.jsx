import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.post('https://skill-up-za-be8f6d8201c2.herokuapp.com/update.php', {
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
      const response = await axios.post('https://skill-up-za-be8f6d8201c2.herokuapp.com/update.php', {
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

  const handlePasswordChangeSubmit = async (currentPassword, newPassword) => {
    try {
      const response = await axios.post('https://skill-up-za-be8f6d8201c2.herokuapp.com/update.php', {
        username,
        currentPassword,
        newPassword
      });
      const data = response.data;
      console.log('Password update response:', data);
      window.alert('Password updated successfully');
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        const response = await axios.post('https://skill-up-za-be8f6d8201c2.herokuapp.com/delete.php', {
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
              profilePicture={profilePicture}
              handleProfilePictureChange={handleProfilePictureChange}
              removeProfilePicture={() => setProfilePicture(null)}
            />
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

     
