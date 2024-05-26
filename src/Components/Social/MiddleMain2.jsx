import React from 'react';

const MiddleMain2 = () => {
  return (
    <div className="middle-main-2">
      <div className="post-about">
        <div>
          <img className="middle-pic" src="" alt="Profile Picture" />
        </div>
        <div>
          <p className="name">{localStorage.getItem('username')}</p>
          <p className="name-about">6h &#183; <i className="fa fa-globe" aria-hidden="true"></i></p>
        </div>
      </div>
      <div>
        <p>Post content</p>
      </div>
      <img className="post-image" src="/public/assets/images/photos/post.jpg" alt="Post Image" />
    </div>
  );
};

export default MiddleMain2;
