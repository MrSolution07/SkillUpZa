import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/HomePage">
        <div className="top-icon">
          <img className="home" src="public\assets\images\icons\home-pic.svg" alt="Home" />
          <label>Home</label>
        </div>
      </Link>
      
      <Link to="/SkillAI">
        <div className="top-icon">
          <img className="home" src="public\assets\images\icons\brainicon.svg" alt="skillai"  />
          <label>Skill AI</label>
        </div>
      </Link>
      <Link to="/Interview">
        <div className="top-icon">
          <img className="home" src="/public/assets/images/icons/portfolio-suitcase-svgrepo-com.svg" alt="interview" />
          <label>Interview </label>
        </div>
      </Link>
      <Link to="/JobsUser">
        <div className="top-icon">
          <img className="home" src="public\assets\images\icons\jobicon.svg" alt="jobs" />
          <label>Jobs </label>
        </div>
      </Link>
      <Link to="/Courses">
        <div className="top-icon">
          <img className="home" src="/public/assets/images/icons/chat-square-plain-2-svgrepo-com.svg" alt="courses" />
          <label>Courses </label>
        </div>
      </Link>
      <Link to="/MyCourses">
        <div className="top-icon">
          <img className="home" src="public\assets\images\icons\gradebook.svg" alt="mycourses" />
          <label>My Courses </label>
        </div>
      </Link>

      <div className="notification-container">
        <img className="notification" src="/public/assets/images/icons/notification-svgrepo-com.svg" alt="Notifications" />
        <label>Notifications</label>
      </div>
      <div className="me-icon">
        <img className="dp" src="\public\assets\images\home3\teacher\3.png" alt="Me" />
        <label style={{ opacity: 0.6, fontWeight: "bold" }}>Me <i className="fa fa-sort-desc"></i></label>
      </div>
      <Link to="/UserFAQ">
        <div className="top-icon">
          <img className="home" src="/public/assets/images/icons/users-svgrepo-com.svg" alt="FAQ" />
          <label>FAQ</label>
        </div>
      </Link>

      <Link to="/BusinessLogin">
        <div className="top-icon">
          <img className="home" src="/public/assets/images/icons/square-4-grid-svgrepo-com.svg" alt="For Business" />
          <label>For Business</label>
        </div>
      </Link>
      <Link to="/UserSettings">
        <div className="top-icon">
          <img className="home" src="public\assets\images\icons\icons8-settings1.svg" />
          <label> Settings </label>
        </div>
      </Link>
    </header>
  );
};

export default Header;