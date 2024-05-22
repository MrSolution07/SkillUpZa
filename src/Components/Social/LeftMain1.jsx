import React from 'react';

const LeftMain1 = () => {
  return (
    <div className="left-main-1">
      <img className="banner" src="/public/assets/images/photos/post.jpg" alt="Banner" height="59px" width="500px" />
      <img className="my-picture" src="" alt="Profile Picture" />
      <div className="about">
        <h5>{localStorage.getItem('username')}</h5>
        <p>IT Student<br />Optimistic</p>
      </div>
      <div className="analytics">
        {/* Placeholder for analytics */}
      </div>
      <div className="premium">
        <p>Access exclusive tools and insights</p>
        <a href="#">Try Premium</a>
      </div>
      <div className="my-item">
        <p>My items</p>
      </div>
    </div>
  );
};

export default LeftMain1;
