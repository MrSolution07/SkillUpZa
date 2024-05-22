import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="left-section" id="left-section">
        <img className="logo" id="logo" src="/public/assets/images/logo.png" alt="Logo" />
      </div>
      <div className="middle-section" id="middle-section">
        <Link to="/HomePage" id="link-homepage">
          <div className="top-icon" id="top-icon-home">
            <img className="home" id="home-icon" src="/public/assets/images/icons/home.svg" alt="Home" />
            <label id="home-label">Home</label>
          </div>
        </Link>
        <Link to="/UserFAQ" id="link-userfaq">
          <div className="top-icon" id="top-icon-faq">
            <img className="home" id="faq-icon" src="/public/assets/images/icons/users-svgrepo-com.svg" alt="My Network" />
            <label id="faq-label">FAQ</label>
          </div>
        </Link>
        <Link to="/SkillAI" id="link-skillai">
          <div className="top-icon" id="top-icon-skillai">
            <img className="home" id="skillai-icon" src="public\\assets\\images\\icons\\icons8-ai-64.png" alt="skillai" style={{ height: '25px', width: '30px', marginLeft: '2px' }} />
            <label id="skillai-label">Skill AI</label>
          </div>
        </Link>
        <Link to="/Interview" id="link-interview">
          <div className="top-icon" id="top-icon-interview">
            <img className="home" id="interview-icon" src="/public/assets/images/icons/portfolio-suitcase-svgrepo-com.svg" alt="Messaging" />
            <label id="interview-label">Interview </label>
          </div>
        </Link>
        <Link to="" id="link-jobs">
          <div className="top-icon" id="top-icon-jobs">
            <img className="home" id="jobs-icon" src="/public/assets/images/icons/chat-square-plain-2-svgrepo-com.svg" alt="Messaging" />
            <label id="jobs-label">Jobs </label>
          </div>
        </Link>
        <div className="notification-container" id="notification-container">
          <img className="notification" id="notification-icon" src="/public/assets/images/icons/notification-svgrepo-com.svg" alt="Notifications" />
          <label id="notification-label">Notifications</label>
          <div className="notification-alert" id="notification-alert">3</div>
        </div>
        <div className="me-icon" id="me-icon">
          <img className="dp" id="dp-icon" src="" alt="Me" />
          <label id="me-label" style={{ opacity: 0.6, fontWeight: "bold" }}>Me <i className="fa fa-sort-desc" id="me-dropdown"></i></label>
        </div>
      </div>
      <div className="right-section" id="right-section">
        <Link to="/BusinessLogin" id="link-business">
          <div className="top-icon" id="top-icon-business">
            <img className="home" id="business-icon" src="/public/assets/images/icons/square-4-grid-svgrepo-com.svg" alt="For Business" />
            <label id="business-label">For Business</label>
          </div>
        </Link>
        <Link to="/UserSettings" id="link-settings">
          <div className="top-icon" id="top-icon-settings">
            <img className="home" id="settings-icon" src="/public/assets/images/icons/icons8-settings.svg" />
            <label id="settings-label"> Settings </label>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;