import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { GoHomeFill } from 'react-icons/go';
import { GiBrain } from 'react-icons/gi';
import { BsBriefcaseFill, BsBellFill, BsFillGrid1X2Fill } from 'react-icons/bs';
import { AiFillProfile } from 'react-icons/ai';
import { FaBookOpen, FaSwatchbook, FaUserGroup } from 'react-icons/fa6';
import { MdSettings } from 'react-icons/md';
import "./HomePage.css";
import DropDownProfile from './dropdownprofile';

const Header = () => {
  const [profilePicture, setProfilePicture] = useState('');
  const [openProfile, setOpenProfile] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const username = localStorage.getItem('username');
        const response = await axios.get('  https://cannonball-can.000webhostapp.com/getpicture.php', {
          params: { username }
        });
        const data = response.data;
        if (data.success) {
          setProfilePicture(`data:${data.type};base64,${data.image}`);
        } else {
          console.error('Error fetching profile picture:', data.message);
        }
      } catch (error) {
        console.error('Error fetching profile picture:', error);
      }
    };

    fetchProfilePicture();
  }, []);

  const toggleProfileMenu = () => {
    setOpenProfile(!openProfile);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenProfile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

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
      <div className="me-icon" onClick={toggleProfileMenu} ref={dropdownRef}>
        <img className="dp" src={profilePicture} alt="Me" />
        <label style={{ opacity: 0.6, fontWeight: "bold" }}>
          Me <i className="fa fa-sort-desc"></i>
        </label>
        {/* {openProfile && <DropDownProfile />} */}
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
      <div className="top-icon settings-dropdown" onClick={toggleProfileMenu} ref={dropdownRef}>
        <MdSettings className="home" />
        <label>Settings</label>
        {openProfile && <DropDownProfile />}
      </div>
    </header>
  );
};

export default Header;
