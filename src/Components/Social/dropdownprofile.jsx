import React from 'react';
import { Link } from 'react-router-dom';


const DropDownProfile = () => {
  return (
    <div className='dropDownProfile'>
      <ul className='navbar-nav'>
        <li>
          <Link to="/ViewDetails">View Profile</Link>
        </li>
        <li>
          <Link to="/ProfileCard">Edit Profile</Link>
        </li>
        <li>
          <Link to="/ChangePasswordCard">Change Password</Link>
        </li>
        <li>
          <Link to="/DeleteAccountCard">Delete Account</Link>
        </li>
        <li>
          <Link to="/LoginPage">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDownProfile;
