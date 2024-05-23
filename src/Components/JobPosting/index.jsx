
import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';

const JobPostingForm = () => {
  const [jobName, setJobName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobImage, setJobImage] = useState(null);
  const [businessName, setBusinessName] = useState('');

  useEffect(() => {
    // Retrieve BusinessName from localStorage
    const storedBusinessName = localStorage.getItem('companyname');
    if (storedBusinessName) {
      setBusinessName(storedBusinessName);
    }
  }, []);

  const handleJobPostingSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('jobName', jobName);
    formData.append('jobDescription', jobDescription);
    formData.append('businessName', businessName);
    if (jobImage) {
      formData.append('jobImage', jobImage);
    }

    fetch('https://skill-up-za-be8f6d8201c2.herokuapp.com/JobPosting.php', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Job listing created successfully');
          // Clear form fields after submission
          setJobName('');
          setJobDescription('');
          setJobImage(null);
        } else {
          alert('Error: ' + data.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error creating job listing');
      });
  };

  const handleJobImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setJobImage(file);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Card className="mb-4" style={{ borderRadius: '15px', minHeight: '600px' }}>
            {jobImage && (
              <div className="text-center mt-4">
                <img
                  src={URL.createObjectURL(jobImage)}
                  alt="Job"
                  className="img-fluid rounded-circle"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
              </div>
            )}
            <Card.Body>
              <Card.Title className="text-center mb-4 mt-4">Create Job Listing</Card.Title>
              <Form onSubmit={handleJobPostingSubmit} encType="multipart/form-data">
                <Form.Group controlId="jobName">
                  <Form.Label>Job Listing Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={jobName}
                    onChange={(e) => setJobName(e.target.value)}
                    placeholder="Enter job listing name"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="jobDescription">
                  <Form.Label>Job Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={10}
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Enter job description"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="jobImage">
                  <Form.Label>Upload Job Image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleJobImageChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Create Job Listing
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JobPostingForm;


