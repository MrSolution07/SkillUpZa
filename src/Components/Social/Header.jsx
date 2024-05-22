import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <img className="logo" src="/public/assets/images/logo.png" alt="Logo" />
      </div>
      <div className="middle-section">
        <Link to="/HomePage">
        <div className="top-icon">
          <img className="home" src="/public/assets/images/icons/home.svg" alt="Home" />
          <label>Home</label>
        </div>
        </Link>
        <Link to="/UserFAQ">
        <div className="top-icon">
          <img className="home" src="/public/assets/images/icons/users-svgrepo-com.svg" alt="FAQ" />
          <label>FAQ</label>
        </div>
        </Link>
        <Link to="/SkillAI">
        <div className="top-icon">
          <img className="home" src="public\assets\images\icons\icons8-ai-64.png" alt="skillai" style={{height:'25px',width:'30px',marginLeft:'2px'}} />
          <label>Skill AI</label>
        </div>
        </Link>
        <Link to="/Interview">
        <div className="top-icon">
          <img className="home" src="/public/assets/images/icons/portfolio-suitcase-svgrepo-com.svg" alt="interview" />
          <label>Interview </label>
        </div>
        </Link>
        <Link to="/Jobs">
        <div className="top-icon">
          <img className="home" src="/public/assets/images/icons/chat-square-plain-2-svgrepo-com.svg" alt="jobs" />
          <label>Jobs </label>
        </div>
        </Link>
        <Link to="/Courses">
        <div className="top-icon">
          <img className="home" src="public\assets\images\icons\icons8-ai-64.png" alt="courses" style={{height:'25px',width:'30px',marginLeft:'8px'}}/>
          <label>Courses</label>
        </div>
        </Link>
        <Link to="/MyCourses">
        <div className="top-icon">
          <img className="home" src="public\assets\images\icons\icons8-ai-64.png" alt="mycourses" style={{height:'25px',width:'30px',marginLeft:'8px'}}/>
          <label>My Courses</label>
        </div>
        </Link>
        
        <div className="notification-container">
          <img className="notification" src="/public/assets/images/icons/notification-svgrepo-com.svg" alt="Notifications" />
          <label>Notifications</label>
          <div className="notification-alert">3</div>
        </div>
        <div className="me-icon">
          <img className="dp" src="" alt="Me" />
          <label style={{ opacity: 0.6, fontWeight: "bold" }}>Me <i className="fa fa-sort-desc"></i></label>
        </div>
      </div>
      <div className="right-section">
        <Link to="/BusinessLogin">
        <div className="top-icon">
          <img className="home" src="/public/assets/images/icons/square-4-grid-svgrepo-com.svg" alt="For Business" />
          <label>For Business</label>
        </div>
        </Link>
        <Link to="/UserSettings">
        <div className="top-icon">
          <img className="home" src="/public/assets/images/icons/icons8-settings.svg"/>
          <label> Settings </label>
        </div>
        </Link>
        
             
      </div>
      
    </header>
  );
};

export default Header;
