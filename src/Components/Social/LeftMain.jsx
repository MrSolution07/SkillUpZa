import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LeftMain = () => {
  const [profilePicture, setProfilePicture] = useState('');

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const response = await axios.get('https://skillaupza.free.nf/user/getpicture.php', {
          params: { username: localStorage.getItem('username') }
        });
        setProfilePicture(response.data);
      } catch (error) {
        console.error('Error fetching profile picture:', error);
      }
    };

    fetchProfilePicture();
  }, []);

  return (
    <div className="left-main">
      {/* LeftMain1 content */}
      <div className="left-main-1">
        <img className="banner" src="assets/images/photos/post.jpg" alt="Banner" height="59px" width="500px" />
        <img className="my-picture" src={profilePicture} alt="Profile Picture" />
        <div className="about">
          <h5>{localStorage.getItem('username')}</h5>
          <p>IT Student<br />Optimistic</p>
        </div>
      </div>
    </div>
  );
};

export default LeftMain;
