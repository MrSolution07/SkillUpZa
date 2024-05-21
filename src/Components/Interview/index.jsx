import React, { useState } from "react";
import { Container, Card, Button, Collapse } from "react-bootstrap";
import Banner from "../../Components/Banner/Banner"; 
import Footer from "../../Components/Footer/Footer";
import Header from "../Social/Header";

const Interview = () => {
  const [open, setOpen] = useState({});

  const handleToggle = (key) => {
    setOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (

    <>
    <Header/>
      <Banner title="Top questions asked during interviews" background="assets/images/interviewbanner.jpg" />

      <section className="interview-section">
        <Container className="custom-card">
          <Card className="mt-4 ">
            <Card.Body>
              <div id="faq">
                {/* FAQ Items */}
                <FAQItem 
                  question="Could you please introduce yourself?"
                  answer="This is your opportunity to make a strong first impression. Briefly share your educational background, relevant work experience, and skills that align with the job description. Highlight achievements that showcase your value and passion for the field."
                  isOpen={open["faq1"]}
                  onClick={() => handleToggle("faq1")}
                />
                <FAQItem 
                  question="How did you learn about this job opening?"
                  answer="This question helps the interviewer understand how you found them. Be honest and highlight your proactive job search strategy."
                  isOpen={open["faq2"]}
                  onClick={() => handleToggle("faq2")}
                />
                <FAQItem 
                  question="What are your greatest strengths?"
                  answer="Identify 2-3 strengths directly related to the job requirements. Use specific examples to demonstrate how you've leveraged these strengths to achieve success."
                  isOpen={open["faq3"]}
                  onClick={() => handleToggle("faq3")}
                />
                <FAQItem 
                  question="What are your salary expectations?"
                  answer="Research the average salary range for the position and location. Instead of giving a specific number, express your confidence in the company's compensation structure."
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

export default Interview;
