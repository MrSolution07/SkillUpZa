import React, { useState } from 'react';
import { Card, Form, Button, Container, Row, Col } from 'react-bootstrap';

const JobPostingForm = () => {
  const [jobName, setJobName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobImage, setJobImage] = useState(null);

  const handleJobPostingSubmit = (event) => {
    event.preventDefault();
    // Clear form fields after submission
    setJobName('');
    setJobDescription('');
    setJobImage(null);
  };

  const handleJobImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setJobImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          {/* Job Posting Form */}
          <Card className="mb-4" style={{ borderRadius: '15px', minHeight: '600px' }}>
            {jobImage && (
              <div className="text-center mt-4">
                <img
                  src={jobImage}
                  alt="Job"
                  className="img-fluid rounded-circle"
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
              </div>
            )}
            <Card.Body>
              <Card.Title className="text-center mb-4 mt-4">Create Job Listing</Card.Title>
              <Form onSubmit={handleJobPostingSubmit}>
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
                    rows={10} // Increased rows to fit elongated card
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
