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
  answer="This is your opportunity to make a strong first impression. Briefly share your educational background, relevant work experience, and skills that align with the job description. Highlight achievements that showcase your value and passion for the field. Example answer: I am a motivated and experienced professional with a Bachelor's degree in Computer Science and over five years of experience in software development. In my previous role, I led a team of developers to successfully launch several web applications, demonstrating my strong leadership and problem-solving skills."
  isOpen={open["faq1"]}
  onClick={() => handleToggle("faq1")}
/>
<FAQItem 
  question="How did you learn about this job opening?"
  answer="This question helps the interviewer understand how you found them. Be honest and highlight your proactive job search strategy. Example answer: I learned about this job opening through a colleague who recommended your company as a great place to work. I also actively search job boards and company websites for opportunities that align with my skills and career goals."
  isOpen={open["faq2"]}
  onClick={() => handleToggle("faq2")}
/>
<FAQItem 
  question="What are your greatest strengths?"
  answer="Identify 2-3 strengths directly related to the job requirements. Use specific examples to demonstrate how you've leveraged these strengths to achieve success. Example answer: One of my greatest strengths is my ability to adapt to new technologies quickly. For instance, in my previous role, I was tasked with learning a new programming language within a short timeframe to meet project deadlines. I dedicated extra time outside of work hours to study and practice, ultimately becoming proficient in the language and delivering the project ahead of schedule."
  isOpen={open["faq3"]}
  onClick={() => handleToggle("faq3")}
/>
<FAQItem 
  question="What are your salary expectations?"
  answer="Research the average salary range for the position and location. Instead of giving a specific number, express your confidence in the company's compensation structure. Example answer: While I value fair compensation for my skills and experience, I'm more focused on finding the right fit with a company that aligns with my career goals and values. I'm confident that if offered the position, the company's compensation structure will be competitive and reflective of my contributions."
  isOpen={open["faq4"]}
  onClick={() => handleToggle("faq4")}
/>
<FAQItem 
  question="Why do you want to work for our company?"
  answer="This question evaluates your understanding of the company's values and culture, as well as your alignment with them. Example answer: I'm impressed by your company's commitment to innovation and dedication to making a positive impact in the industry. Your collaborative work environment and focus on employee development align with my career aspirations. I'm excited about the opportunity to contribute to your team and grow both personally and professionally."
  isOpen={open["faq5"]}
  onClick={() => handleToggle("faq5")}
/>
<FAQItem 
  question="How do you handle constructive criticism?"
  answer="This question assesses your ability to receive feedback positively and use it to improve. Example answer: I value constructive criticism as an opportunity for growth and improvement. When receiving feedback, I actively listen, ask clarifying questions, and reflect on how I can incorporate the feedback into my work. I view it as a chance to refine my skills and deliver better results in the future."
  isOpen={open["faq6"]}
  onClick={() => handleToggle("faq6")}
/>
<FAQItem 
  question="Describe a situation where you dealt with a difficult stakeholder or client. How did you resolve it?"
  answer="This question evaluates interpersonal skills and conflict resolution abilities. Example answer: During a client project, I encountered a challenging stakeholder who was resistant to proposed changes. To address the issue, I actively listened to their concerns, empathized with their perspective, and engaged in open dialogue to find common ground. By building trust and fostering collaboration, I successfully resolved the conflict and gained the stakeholder's support for the project."
  isOpen={open["faq7"]}
  onClick={() => handleToggle("faq7")}
/>
<FAQItem 
  question="Can you provide an example of a creative solution you proposed to solve a problem?"
  answer="This question assesses creativity and innovation in problem-solving. Example answer: In a marketing campaign, we faced budget constraints but needed to increase brand visibility. I proposed a guerrilla marketing strategy utilizing social media influencers to generate buzz at a fraction of the cost. By leveraging creative content and strategic partnerships, we exceeded our reach targets and achieved a 30% increase in brand awareness within a month."
  isOpen={open["faq8"]}
  onClick={() => handleToggle("faq8")}
/>
<FAQItem 
  question="Tell me about a mistake or failure you experienced. What did you learn from it?"
  answer="This question evaluates self-awareness and the ability to learn from mistakes. Example answer: Early in my career, I underestimated project scope and timelines, leading to missed deadlines and client dissatisfaction. I took ownership of the mistake, communicated transparently with the client, and implemented a robust project management system to prevent similar issues in the future. This experience taught me the importance of thorough planning and communication in project execution."
  isOpen={open["faq9"]}
  onClick={() => handleToggle("faq9")}
/>
<FAQItem 
  question="What motivates you to continuously improve your skills? How do you pursue professional growth?"
  answer="This question assesses motivation and commitment to personal development. Example answer: I am driven by a passion for learning and personal growth. I actively seek opportunities to expand my skills and knowledge through online courses, workshops, and networking events. Additionally, I set clear goals for career advancement and regularly seek feedback to identify areas for improvement. By maintaining a growth mindset and investing in my development, I am better equipped to excel in my role and contribute to the success of the team."
  isOpen={open["faq10"]}
  onClick={() => handleToggle("faq10")}
/>
<FAQItem 
  question="How do you handle stress and pressure in the workplace?"
  answer="This question evaluates your ability to manage stress and maintain productivity. Example answer: I thrive in fast-paced environments and handle stress by prioritizing tasks, breaking them down into manageable steps, and maintaining open communication with team members. I also practice stress-reducing techniques such as mindfulness and exercise to stay focused and energized. By proactively managing stress, I can remain productive and deliver high-quality work even under pressure."
  isOpen={open["faq11"]}
  onClick={() => handleToggle("faq11")}
/>
<FAQItem 
  question="Can you describe a time when you had to lead a team or take charge of a project?"
  answer="This question assesses leadership and initiative-taking abilities. Example answer: In my previous role as project manager, I led a team of developers in implementing a new software solution for our client. I coordinated project timelines, delegated tasks, and provided guidance and support to team members. By fostering a collaborative and supportive environment, we successfully delivered the project ahead of schedule and exceeded client expectations."
  isOpen={open["faq12"]}
  onClick={() => handleToggle("faq12")}
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
