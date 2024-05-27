// import React from 'react';
// import Header from '../Social/Header';


// const ViewDetails = () => {
//     return (
//         <div>
//         <Header />
//         <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
//             <div className="container py-5">
//                 <div className="row justify-content-center">
//                     <div className="col-lg-4 mb-4">
//                         <div className="card">
//                             <div className="card-body text-center">
//                                 <img
//                                     src=""
//                                     alt="avatar"
//                                     className="rounded-circle img-fluid"
//                                     style={{ width: '150px' }}
//                                 />
//                                 <h5 className="my-3">Name</h5> {/* Replace with user's name */}
//                                 <p className="text-muted mb-1"></p> {/* Replace with user's job title */}
//                                 <p className="text-muted mb-4"></p> {/* Replace with user's location */}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-8">
//                         <div className="card mb-4">
//                             <div className="card-body">
//                                 <div className="row">
//                                     <div className="col-sm-3">
//                                         <p className="mb-0">Username</p>
//                                     </div>
//                                     <div className="col-sm-9">
//                                         <p className="text-muted mb-0"></p> {/* Replace with user's username */}
//                                     </div>
//                                 </div>
//                                 <hr />
//                                 <div className="row">
//                                     <div className="col-sm-3">
//                                         <p className="mb-0">Email</p>
//                                     </div>
//                                     <div className="col-sm-9">
//                                         <p className="text-muted mb-0"></p> {/* Replace with user's email */}
//                                     </div>
//                                 </div>
//                                 <hr />
//                                 <div className="row">
//                                     <div className="col-sm-3">
//                                         <p className="mb-0">Mobile Number</p>
//                                     </div>
//                                     <div className="col-sm-9">
//                                         <p className="text-muted mb-0"></p> {/* Replace with user's mobile phone */}
//                                     </div>
//                                 </div>
//                                 <hr />
//                                 <div className="row">
//                                     <div className="col-sm-3">
//                                         <p className="mb-0">Password</p>
//                                     </div>
//                                     <div className="col-sm-9">
//                                         <p className="text-muted mb-0"></p> {/* Replace with if you want to s */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         </div>
//     );
// };

// export default ViewDetails;
import React, { useEffect, useState } from 'react';
import Header from '../Social/Header';
import axios from 'axios';

const ViewDetails = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [profilePicture, setProfilePicture] = useState('');

    useEffect(() => {
        const username = localStorage.getItem("username");

        const fetchProfilePicture = async () => {
            try {
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

        const fetchUserDetails = async () => {
            try {
                const response = await fetch('https://skill-up-za-a416b38edeac.herokuapp.com/get_user_details.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username }),
                });
                const data = await response.json();
                setUserDetails(data);
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchProfilePicture();
        fetchUserDetails();
    }, []);

    return (
        <div>
            <Header />
            <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 mb-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img
                                        src={profilePicture}
                                        alt="avatar"
                                        className="rounded-circle img-fluid"
                                        style={{ width: '150px' }}
                                    />
                                    <h5 className="my-3">{userDetails?.Name || localStorage.getItem("username")}</h5> {/* Replace with user's name */}
                                    {/* <p className="text-muted mb-1">{userDetails?.JobTitle || 'Job Title'}</p> Replace with user's job title */}
                                    <p className="text-muted mb-4">{userDetails?.Location || 'Johannesburg'}</p> {/* Replace with user's location */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Username</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{userDetails?.Username || 'Username'}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{userDetails?.Email || 'Email'}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Mobile Number</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">+27{userDetails?.Mobile_Number || 'Mobile Number'}</p>
                                        </div>
                                    </div>
                                    <hr />
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViewDetails;
