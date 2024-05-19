import React from 'react';

const LeftMain2 = () => {
  return (
    <div className="left-main-2">
      <div className="page">
        <img className="mildstrings" src="/public/assets/images/photos/mildstrings.jpeg" alt="Mildstrings" />
        <h5>Mildstrings</h5>
        <div className="page-notification">
          <p>Page Notification</p>
          <p style={{ color: "blue" }}>1</p>
        </div>
        <div className="page-notification">
          <p>Page Visitors</p>
          <p style={{ color: "blue" }}>2</p>
        </div>
      </div>
      <p>See Visitor Analytics</p>
    </div>
  );
};

export default LeftMain2;
