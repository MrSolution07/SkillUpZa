
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MiddleMain = () => {
//     const [profilePicture, setProfilePicture] = useState('');

//     useEffect(() => {
//         const fetchProfilePicture = async () => {
//             try {
//                 const username = localStorage.getItem('username');
//                 const response = await axios.get('http://localhost/DATABASE_DATA/getpicture.php', {
//                     params: { username }
//                 });
//                 const data = response.data;
//                 if (data.success) {
//                     setProfilePicture(`data:${data.type};base64,${data.image}`);
//                 } else {
//                     console.error('Error fetching profile picture:', data.message);
//                 }
//             } catch (error) {
//                 console.error('Error fetching profile picture:', error);
//             }
//         };

//         fetchProfilePicture();
//     }, []);

//     return (
//         <div className="middle-main">
//             {/* MiddleMain1 content */}
//             <div className="middle-main-1">
//                 <div className="post-1">
//                     <img className="middle-pic" src={profilePicture} alt="Profile Picture" />
//                     <input className="post" type="text" placeholder="Start a post" />
//                 </div>
//             </div>

//             {/* MiddleMain2 content */}
//             <div className="middle-main-2">
//                 <div className="post-about">
//                     <div>
//                         <img className="middle-pic" src={profilePicture} alt="Profile Picture" />
//                     </div>
//                     <div>
//                         <p className="name">{localStorage.getItem("username")}</p>
//                         <p className="name-about">IT Student</p>
//                         <p className="name-about">6h &#183; <i className="fa fa-globe" aria-hidden="true"></i></p>
//                     </div>
//                 </div>
//                 <div>
//                     <p>Post content</p>
//                 </div>
//                 <img className="post-image" src="/public/assets/images/photos/post.jpg" alt="Post Image" />
//             </div>
//         </div>
//     );
// };

// export default MiddleMain;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MiddleMain = () => {
    const [profilePicture, setProfilePicture] = useState('');
    const [content, setContent] = useState('');
    const [postImage, setPostImage] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchProfilePicture = async () => {
            try {
                const username = localStorage.getItem('username');
                const response = await axios.get('http://localhost/DATABASE_DATA/getpicture.php', {
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
                const response = await axios.get('http://localhost/DATABASE_DATA/get_posts.php');
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
            const response = await axios.post('http://localhost/DATABASE_DATA/create_post.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const data = response.data;
            if (data.success) {
                setContent('');
                setPostImage(null);
                const newPost = {
                    username,
                    content,
                    createdAt: new Date().toISOString(),
                    image: postImage ? URL.createObjectURL(postImage) : null,
                    imageType: postImage ? postImage.type : null
                };
                setPosts([newPost, ...posts]);
            } else {
                console.error('Error creating post:', data.message);
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div className="middle-main">
            {/* MiddleMain1 content */}
            <div className="middle-main-1">
                <div className="post-1">
                    <img className="middle-pic" src={profilePicture} alt="Profile Picture" />
                    <input
                        className="post"
                        type="text"
                        placeholder="Start a post"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setPostImage(e.target.files[0])}
                    />
                    <button onClick={handleCreatePost}>Post</button>
                </div>
            </div>

            {/* MiddleMain2 content */}
            <div className="middle-main-2">
                {posts.map((post, index) => (
                    <div key={index} className="post-about">
                        <div>
                            <img className="middle-pic" src={profilePicture} alt="Profile Picture" />
                        </div>
                        <div>
                            <p className="name">{post.username}</p>
                            <p className="name-about">IT Student</p>
                            <p className="name-about">{new Date(post.createdAt).toLocaleTimeString()} &#183; <i className="fa fa-globe" aria-hidden="true"></i></p>
                        </div>
                        <div>
                            <p>{post.content}</p>
                        </div>
                        {post.image && (
                            <img className="post-image" src={`data:${post.imageType};base64,${post.image}`} alt="Post Image" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiddleMain;


