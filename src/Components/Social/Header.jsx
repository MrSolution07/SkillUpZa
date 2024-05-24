import React from 'react';
import { Link } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import { GiBrain } from 'react-icons/gi';
import { BsBriefcaseFill, BsBellFill, BsFillGrid1X2Fill } from 'react-icons/bs';
import { AiFillProfile } from 'react-icons/ai';
import { FaBookOpen, FaSwatchbook, FaUserGroup } from 'react-icons/fa6';
import { MdSettings } from 'react-icons/md';
import "./HomePage.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/HomePage">
        <div className="top-icon">
          <GoHomeFill className="home" />
          <label>Home</label>
        </div>
      </Link>

      <Link to="/SkillAI">
        <div className="top-icon">
          <GiBrain className="home" />
          <label>Skill AI</label>
        </div>
      </Link>
      
      <Link to="/Interview">
        <div className="top-icon">
          <BsBriefcaseFill className="home" />
          <label>Interview</label>
        </div>
      </Link>
      
      <Link to="/JobsUser">
        <div className="top-icon">
          <AiFillProfile className="home" />
          <label>Jobs</label>
        </div>
      </Link>
      
      <Link to="/Courses">
        <div className="top-icon">
          <FaBookOpen className="home" />
          <label>Courses</label>
        </div>
      </Link>
      
      <Link to="/MyCourses">
        <div className="top-icon">
          <FaSwatchbook className="home" />
          <label>My Courses</label>
        </div>
      </Link>

      <div className="top-icon">
        <BsBellFill className="home" />
        <label>Notifications</label>
      </div>
      
      <div className="top-icon">
        <img className="home" src="/public/assets/images/home3/teacher/3.png" alt="Me" style={{borderRadius:"50%"}} />
        <label >
          Me <i className="fa fa-sort-desc"></i>
        </label>
      </div>
      
      <Link to="/UserFAQ">
        <div className="top-icon">
          <FaUserGroup className="home" />
          <label>FAQ</label>
        </div>
      </Link>

      <Link to="/BusinessLogin">
        <div className="top-icon">
          <BsFillGrid1X2Fill className="home" />
          <label>For Business</label>
        </div>
      </Link>
      
      <Link to="/UserSettings">
        <div className="top-icon">
          <MdSettings className="home" />
          <label>Settings</label>
        </div>
      </Link>
    </header>
  );
};

export default Header;
