import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <img className="logo" src="/public/assets/images/logo.png" alt="Logo" />
        <input className="search-box" type="text" placeholder="Search" />
      </div>
      <div className="middle-section">
        <div className="top-icon">
          <img className="home" src="/public/assets/images/icons/home.svg" alt="Home" />
          <label>Home</label>
        </div>
        <div className="top-icon">
          <img className="home" src="/public/assets/images/icons/users-svgrepo-com.svg" alt="My Network" />
          <label>My Network</label>
        </div>
        <div className="top-icon">
          <img className="home" src="/public/assets/images/icons/portfolio-suitcase-svgrepo-com.svg" alt="Jobs" />
          <label>Jobs</label>
        </div>
        {/* <div className="top-icon">
          <img className="home" src="/public/assets/images/icons/chat-square-plain-2-svgrepo-com.svg" alt="Messaging" />
          <label>Messaging</label>
        </div> */}
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
        <div className="top-icon">
          <img className="home" src="/public/assets/images/icons/square-4-grid-svgrepo-com.svg" alt="For Business" />
          <label>For Business</label>
        </div>
        <div className="top-icon">
          <img className="home" src="/public/assets/images/icons/business-svgrepo-com.svg" alt="Post a job" />
          <label>Post a job</label>
        </div>
      </div>
    </header>
  );
};

export default Header;
