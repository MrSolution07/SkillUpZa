import React from 'react';

const MiddleMain = () => {
return (
<div className="middle-main">
    {/* MiddleMain1 content */}
    <div className="middle-main-1">
        <div className="post-1">
            <img className="middle-pic" src= "https://img.freepik.com/free-photo/smiley-woman-posing-front-view_23-2149479396.jpg?t=st=1716545639~exp=1716549239~hmac=66bacca0417bffdb7c7e325f3d00485767a91417f1dab892f11dae9ae8054d33&w=740" style={{width:"50px",height:"45px"}} alt="Profile Picture" />
            <input className="post" type="text" placeholder="Start a post" />
        </div>
        </div>

    {/* MiddleMain2 content */}
    <div className="middle-main-2">
        <div className="post-about">
            <div>
                <img className="middle-pic" src="https://img.freepik.com/free-photo/smiley-woman-posing-front-view_23-2149479396.jpg?t=st=1716545639~exp=1716549239~hmac=66bacca0417bffdb7c7e325f3d00485767a91417f1dab892f11dae9ae8054d33&w=740" style={{width:"50px",height:"45px"}} alt="Profile Picture" />
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
        <img className="post-image" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Post Image" />
    </div>
</div>
);
};

export default MiddleMain;
