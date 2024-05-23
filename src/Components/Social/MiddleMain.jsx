import React from 'react';

const MiddleMain = () => {
return (
<div className="middle-main">
    {/* MiddleMain1 content */}
    <div className="middle-main-1">
        <div className="post-1">
            <img className="middle-pic" src="\public\assets\images\home3\teacher\3.png" alt="Profile Picture" />
            <input className="post" type="text" placeholder="Start a post" />
        </div>
        </div>

    {/* MiddleMain2 content */}
    <div className="middle-main-2">
        <div className="post-about">
            <div>
                <img className="middle-pic" src="\public\assets\images\home3\teacher\3.png" alt="Profile Picture" />
            </div>
            <div>
                <p className="name">UserName</p>
                <p className="name-about">IT Student</p>
                <p className="name-about">6h &#183; <i className="fa fa-globe" aria-hidden="true"></i></p>
            </div>
        </div>
        <div>
            <p>Post content</p>
        </div>
        <img className="post-image" src="/public/assets/images/photos/post.jpg" alt="Post Image" />
    </div>
</div>
);
};

export default MiddleMain;
