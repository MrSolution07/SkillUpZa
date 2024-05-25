import React, { useState } from "react";
import { Container, Card, Button, Collapse } from "react-bootstrap";
import Banner from "../../Components/Banner/Banner"; 
import Footer from "../../Components/Footer/Footer";
import Header from "../Social/Header";

const UserFAQ = () => {
  const [open, setOpen] = useState({});

  const handleToggle = (key) => {
    setOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <>
      <Header />
      <Banner title="Frequently Asked Questions" background="assets/images/FAQbanner.jpg" />

      <section className="interview-section">
        <Container className="custom-card">
          <Card className="mt-4">
            <Card.Body>
              <div id="faq">
                {/* FAQ Items */}
                <FAQItem 
                  question="What is Skill UpZA?"
                  answer="Skill UpZA is a web app designed to help you navigate your career journey. Whether you're searching for a new job, looking to upskill in a specific area, or just getting started, Skill UpZA provides the tools and resources you need to succeed."
                  isOpen={open["faq1"]}
                  onClick={() => handleToggle("faq1")}
                />
                <FAQItem 
                  question="What can I do on Skill UpZA?"
                  answer="Find Jobs: Search for open positions based on your skills, interests, and location. Upskill for a New Career: Explore a variety of learning paths and courses to develop in-demand skills. Personalized Recommendations: Get matched with jobs and courses tailored to your unique profile."
                  isOpen={open["faq2"]}
                  onClick={() => handleToggle("faq2")}
                />
                <FAQItem 
                  question="How can Skill UpZA help me upskill myself?"
                  answer="Skill UpZA offers an AI algorithm designed to assist you in enhancing your skill set. You can engage with this feature to seek personalized career guidance and advice."
                  isOpen={open["faq3"]}
                  onClick={() => handleToggle("faq3")}
                />
                
                <FAQItem 
                  question="How does the AI career advisor work on Skill UpZA?"
                  answer="Skill UpZA's AI career advisor is a powerful tool that leverages artificial intelligence to provide personalized career guidance. Based on your profile, interests, skills, and goals, the AI advisor can suggest relevant career paths, recommend courses or certifications to pursue, and offer insights into industries and job roles that may be a good fit for you. Additionally, the AI advisor can assist you in optimizing your resume and preparing for interviews."
                  isOpen={open["faq5"]}
                  onClick={() => handleToggle("faq5")}
                />
                <FAQItem 
                  question="How can I benefit from the courses offered on Skill UpZA?"
                  answer="Skill UpZA source a wide range of online courses designed to help you enhance your skills and knowledge. These courses cover various topics, including technical skills, soft skills, and industry-specific knowledge. By enrolling in these courses, you can improve your competitiveness in the job market and better position yourself for career advancement."
                  isOpen={open["faq6"]}
                  onClick={() => handleToggle("faq6")}
                />
                <FAQItem 
                  question="I have another question that's not answered here."
                  answer="No problem! Feel free to contact our support team at Skill UpZA@outlook.com and we'll be happy to help."
                  isOpen={open["faq4"]}
                  onClick={() => handleToggle("faq4")}
                />
              </div>
            </Card.Body>
          </Card>
        </Container>
        <section className="interview-footer">
          <Footer />
        </section>
      </section>
    </>
  );
};

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <Card className="mb-4 custom-card" style={{ borderRadius: "15px" }}>
    <Card.Header onClick={onClick} style={{ cursor: "pointer" }} aria-expanded={isOpen}>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="text-black m-0">{question}</h5>
        <i className={`fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
      </div>
    </Card.Header>
    <Collapse in={isOpen}>
      <div>
        <Card.Body>{answer}</Card.Body>
      </div>
    </Collapse>
  </Card>
);

export default UserFAQ;
