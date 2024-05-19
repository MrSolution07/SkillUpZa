// src/components/Cards/Cards.js
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AfterLoginCards = () => {
  const [isCardToggled, setIsCardToggled] = useState(false);

  const handleCardToggle = () => {
    setIsCardToggled(!isCardToggled); 
  };

  const cardsData = [
    {
      imgSrc: "/public/assets/images/image1.jpg",
      title: "Social",
      text: "Connect and socialize with other users using the platform",
      link: "/HomePage"
    },
    {
      imgSrc: "/public/assets/images/image2.jpg",
      title: "Skill AI",
      text: "Utilize the platform's AI for career advice and insights",
      link: "/skill-ai"
    },
    {
      imgSrc: "/public/assets/images/image3.jpg",
      title: "Job Application",
      text: "Check and apply for available jobs posted on the platform",
      link: "/job-application"
    },
    {
      imgSrc: "/public/assets/images/image4.jpg",
      title: "Career Insights",
      text: "View insights and on-demand skills related to your career",
      link: "/career-insights"
    },
    {
      imgSrc: "/public/assets/images/image5.jpg",
      title: "FAQs",
      text: "Explore FAQs to find answers to common queries",
      link: "/UserFAQ"
    },
    {
      imgSrc: "/public/assets/images/image6.jpg",
      title: "Interview Questions",
      text: "Prepare for your interview with common interview questions",
      link: "/Interview" 
    }
  ];

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardsData.map((card, index) => (
          <div className="col mb-3" key={index}>
            <div
              className={`card ${isCardToggled ? 'toggled' : ''}`}
              style={{ width: '19rem' }}
              onClick={handleCardToggle}
            >
              <img src={card.imgSrc} className="card-img-top" alt="Card Image" />
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
