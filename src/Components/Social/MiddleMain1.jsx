
import React from 'react';

const MiddleMain1 = () => {
  return (
    <div className="middle-main-1">
      <div className="post-1">
        <img className="middle-pic" src="" alt="Profile Picture" />
        <input className="post" type="text" placeholder="Start a post" />
      </div>
      <div className="linked-input">
        <div className="input">
          <img className="upload" src="/public/assets/images/icons/photo-svgrepo-com.svg" alt="Photo" />
          <p>Photo</p>
        </div>
        <div className="input">
          <img className="upload" src="/public/assets/images/icons/video-movie-play-svgrepo-com.svg" alt="Video" />
          <p>Video</p>
        </div>
        <div className="input">
          <img className="upload" src="/public/assets/images/icons/portfolio-svgrepo-com.svg" alt="Photo" />
          <p>Photo</p>
        </div>
        <div className="input">
          <img className="upload" src="/public/assets/images/icons/right-alignment-text-svgrepo-com.svg" alt="Text" />
          <p>Text</p>
        </div>
      </div>
    </div>
  );
};

export default MiddleMain1;
