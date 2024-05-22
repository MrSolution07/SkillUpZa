import React from 'react';

const RightMain2 = () => {
  return (
    <div className="right-main-2">
      <div className="link-box">
        <img className="link" src="" alt="Picture" />
      </div>
      <p style={{ marginLeft: '20px', marginRight: '20px' }}>{localStorage.getItem('username')}</p>
      <button>Promote a job post</button>
    </div>
  );
};

export default RightMain2;
