import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AfterLoginCards = () => {
  const [isCardToggled, setIsCardToggled] = useState(false);

  const handleCardToggle = () => {
    setIsCardToggled(!isCardToggled);
  };

  const cardsData = [
    {
      imgSrc: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D",
      title: "Social",
      text: "Connect and socialize with other users using the platform",
      link: "/HomePage"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1518715058720-e56f02e77fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Skill AI",
      text: "Utilize the platform's AI for career advice and insights",
      link: "/SkillAI"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8am9iJTIwYXBwbGljYXRpb258ZW58MHx8MHx8fDA%3D",
      title: "Jobs",
      text: "Check and apply for available jobs posted on the platform",
      link: "/JobsUser"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8am9iJTIwYXBwbGljYXRpb258ZW58MHx8MHx8fDA%3D",
      title: "Courses",
      text: "View the courses you are currently enrolled for",
      link: "/Courses"
    },
    {
      imgSrc: "https://www.searchenginejournal.com/wp-content/uploads/2022/07/faq-632c0874710c1-sej.png",
      title: "FAQs",
      text: "Explore FAQs to find answers to common queries",
      link: "/UserFAQ"
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGludGVydmlld3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Interview Questions",
      text: "Prepare for your interview with common interview questions",
      link: "/Interview"
    }
  ];

  return (
    <div className="d-flex justify-content-center align-items-center afterlogin" style={{ minHeight: '100vh' }}>
      <div className="row row-cols-1 row-cols-md-3 g-2">  {/* Changed g-4 to g-2 to reduce spacing */}
        {cardsData.map((card, index) => (
          <div className="col mb-2" key={index}>  {/* Changed mb-3 to mb-2 to reduce spacing */}
            <div
              className={`card ${isCardToggled ? 'toggled' : ''}`}
              style={{ width: '18rem' }}
              onClick={handleCardToggle}
            >
              <img src={card.imgSrc} className="card-img-top fixed-size-img" alt="Card Image" />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <Link to={card.link} className="btn btn-primary">
                  {card.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AfterLoginCards;
