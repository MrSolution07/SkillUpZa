import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import DashboardLayout from "../../Pages/Dashboard/layout";

const AccountSettingsCard = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureBase64, setProfilePictureBase64] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.post('https://skill-up-za-a416b38edeac.herokuapp.com/bus_update.php', {
        username: localStorage.getItem('companyname')
      });
      const responseData = response.data;
      if (response.status === 200 && responseData.length > 0 && responseData[0].Username) {
        setUsername(responseData[0].Username);
        setEmail(responseData[0].Email);
        setMobileNumber(responseData[0].Mobile_number);
        setProfilePictureBase64(responseData[0].Profile_picture);
      } else {
        console.error('Error:', responseData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
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

      const response = await axios.post('https://skill-up-za-a416b38edeac.herokuapp.com/bus_update.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const data = response.data;
      if (data.success) {
        window.alert('Info updated successfully');
      } else {
        window.alert('Error updating info: ' + data.message);
      }
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
      const response = await axios.post('https://skill-up-za-a416b38edeac.herokuapp.com/update_bus_password.php', {
        username: localStorage.getItem("companyname"),
        currentPassword: currentPassword,
        newPassword: newPassword,
      });
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

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        const response = await axios.post('https://skill-up-za-a416b38edeac.herokuapp.com/bus_delete.php', {
          username: localStorage.getItem('companyname')
        });
        const data = response.data;
        if (data.success) {
          localStorage.removeItem('companyname');
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DashboardLayout>
        <Container>
          <Row className="mb-4">
            <Col xs={12} md={12}>
              <Card className="mb-4" style={{ borderRadius: '15px', position: 'relative' }}>
                <Card.Body className="text-center">
                  {profilePictureBase64 ? (
                    <>
                      <div style={{ position: 'relative', width: '150px', height: '150px', margin: 'auto' }}>
                        <img
                          src={profilePictureBase64}
                          alt="Profile"
                          className="rounded-circle img-fluid"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <Button variant="danger" onClick={() => setProfilePictureBase64('')} className="mb-0" style={{margin:"15%"}} >
                          Remove 
                        </Button>
                      </div>
                    </>
                  ) : (
                    <Form.Group controlId="profilePicture">
                      <Form.Label>Upload Profile Picture</Form.Label>
                      <Form.Control type="file" accept="image/*" onChange={handleProfilePictureChange} />
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
                  <Form onSubmit={handleAccountSettingsSubmit}>
                    <Form.Group controlId="username">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter company name"
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
                  <Form onSubmit={handlePasswordChangeSubmit}>
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
                      Save Password
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={12}>
              <Card className="mb-4" style={{ borderRadius: '15px' }}>
                <Card.Body className="text-center">
                  <Card.Title>Delete Account</Card.Title>
                  <p>
                    <strong>Warning:</strong> Deleting your account is irreversible. Please proceed with caution.
                  </p>
                  <Button variant="danger" onClick={handleDeleteAccount}>
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
}

export default AccountSettingsCard;



