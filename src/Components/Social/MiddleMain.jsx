import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoSend } from "react-icons/io5";
import { BsPaperclip } from "react-icons/bs";


const MiddleMain = () => {
    const [profilePicture, setProfilePicture] = useState('');
    const [content, setContent] = useState('');
    const [postImage, setPostImage] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchProfilePicture = async () => {
            try {
                const username = localStorage.getItem('username');
                const response = await axios.get('https://skill-up-za-a416b38edeac.herokuapp.com/getpicture.php', {
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

        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://skill-up-za-a416b38edeac.herokuapp.com/get_posts.php');
                const data = response.data;
                if (data.success) {
                    setPosts(data.posts);
                } else {
                    console.error('Error fetching posts:', data.message);
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchProfilePicture();
        fetchPosts();
    }, []);

    const handleCreatePost = async () => {
        const formData = new FormData();
        const username = localStorage.getItem('username');

        formData.append('username', username);
        formData.append('content', content);
        if (postImage) {
            formData.append('postImage', postImage);
        }

        try {
            const response = await axios.post('https://skill-up-za-a416b38edeac.herokuapp.com/create_post.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const data = response.data;
            if (data && data.success) {
                setContent('');
                setPostImage(null);
                const newPost = {
                    username,
                    content,
                    createdAt: new Date().toISOString(),
                    imageUrl: postImage ? URL.createObjectURL(postImage) : null,
                    imageType: postImage ? postImage.type : null
                };
                setPosts([newPost, ...posts]);
            } else {
                console.error('Error creating post:', data && data.message ? data.message : 'Unknown error');
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div className="middle-main">
            <div className="middle-main-1">
    <div className="post-1" style={{ display: 'flex', alignItems: 'center' }}>
        <img className="middle-pic" src={profilePicture} alt="Profile Picture" />
        <input
            className="post"
            type="text"
            placeholder="Start a post"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ flex: 1 }} // Allow the input field to take remaining space
        />
        <div className="iconsdiv" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <label htmlFor="fileInput" className="linked-input">
                <BsPaperclip /><button id='sendPost' onClick={handleCreatePost}>
                <IoSend />
            </button>
            </label>
            <input
                id="fileInput"
                type="file"
                accept="image/*,video/*"
                onChange={(e) => setPostImage(e.target.files[0])}
                style={{ display: 'none' }}
            />
            {/* <button id='sendPost' onClick={handleCreatePost}>
                <IoSend />
            </button> */}
        </div>
    </div>
</div>


            <div className="middle-main-2">
                {posts.map((post, index) => (
                    <div key={index} className="post-about">
                        <div className="post-header">
                            <p className="name">{post.username}</p>
                            <p className="name-about">{new Date(post.createdAt).toLocaleTimeString()} &#183; <i className="fa fa-globe" aria-hidden="true"></i></p>
                        </div>
                        <div className="post-content">
                            <p>{post.content}</p>
                        </div>
                        {post.imageUrl && (
                            <div className="image-container">
                                <img className="post-image" src={post.imageUrl} alt="Post Image" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiddleMain;