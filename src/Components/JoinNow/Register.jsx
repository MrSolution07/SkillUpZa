//Join for free page or register 


// import "../NewStyle/style.css";
// import React, { useState } from 'react';
// import axios from 'axios';





// const RegisterPage = () => {
    
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         confirm_password: '',
//         mobile: ''
//     });

//     const handleChange = (e) => {
//         setFormData(prev => {
//             return { ...prev, [e.target.name]: e.target.value }
//         });
//     };
//     const [error, setError] = useState('');
//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         if (formData.password !== formData.confirm_password) {
//             setError('Passwords do not match');
//             alert("Passwords do not match")
//             return;
//         }
       
//         try {


//             const phpData = new FormData();
//             phpData.append("username", formData.username);
//             phpData.append("email", formData.email);
//             phpData.append("password", formData.password);
//             phpData.append("mobile", formData.mobile);

            


//             axios.post('http://localhost/DATABASE_DATA/register.php', phpData)
//                 .then(response => {
//                     const data = response.data
//                     console.log(data)
                   
//                     if (data.success) {
//                         alert("Rgistration successfull")
//                         window.location.href = '/LoginPage'; // Redirect to LoginPage
//                     } else {
//                         setError(data.message);
//                     }
                    
//                 })
//                 .catch(error => console.error('Error:', error));
//         } catch (error) {
//             console.error('Error', error)
//         }
//     };

//     return (
//         <div className="container" id="page">
//             <div className="row vh-100 ">
//                 <div className="col-12 align-self-center">
//                     <div className="auth-page">
//                         <div className="card auth-card shadow-lg" id="regpage">
//                             <div className="card-body">
//                                 <div className="px-3">
//                                     <div className="auth-logo-box">
//                                         <a href="" className="logo logo-admin">
//                                             <img src="../assets/images/logo.png" height="55" alt="logo" className="auth-logo" />
//                                         </a>
//                                     </div>
//                                     <div className="text-center auth-logo-text">
//                                         <h4 className="name">SkillUp</h4>
//                                         <p className="text-muted">Get your free SkillUp account now.</p>
//                                     </div>
//                                     <form className="form-horizontal auth-form my-4" onSubmit={handleSubmit}>
//                                         <div className="form-group">
//                                             <label htmlFor="username">Username</label>
//                                             <div className="input-group mb-3">
//                                                 <span className="auth-form-icon">
//                                                     <i className="dripicons-user"></i>
//                                                 </span>
//                                                 <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Enter username" />
//                                             </div>
//                                         </div>
//                                         <div className="form-group">
//                                             <label htmlFor="useremail">Email</label>
//                                             <div className="input-group mb-3">
//                                                 <span className="auth-form-icon">
//                                                     <i className="dripicons-mail"></i>
//                                                 </span>
//                                                 <input type="email" className="form-control" id="useremail" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" />
//                                             </div>
//                                         </div>
//                                         <div className="form-group">
//                                             <label htmlFor="userpassword">Password</label>
//                                             <div className="input-group mb-3">
//                                                 <span className="auth-form-icon">
//                                                     <i className="dripicons-lock"></i>
//                                                 </span>
//                                                 <input type="password" className="form-control" id="userpassword" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" />
//                                             </div>
//                                         </div>
//                                         <div className="form-group">
//                                             <label htmlFor="conf_password">Confirm Password</label>
//                                             <div className="input-group mb-3">
//                                                 <span className="auth-form-icon">
//                                                     <i className="dripicons-lock-open"></i>
//                                                 </span>
//                                                 <input type="password" className="form-control" id="conf_password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} placeholder="Enter Confirm Password" />
//                                             </div>
//                                         </div>
//                                         <div className="form-group">
//                                             <label htmlFor="mo_number">Mobile Number</label>
//                                             <div className="input-group mb-3">
//                                                 <span className="auth-form-icon">
//                                                     <i className="dripicons-phone"></i>
//                                                 </span>
//                                                 <input type="text" className="form-control" id="mo_number" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter Mobile Number" />
//                                             </div>
//                                         </div>
//                                         <div className="form-group row mt-4">
//                                             <div className="col-sm-12">
//                                                 <div className="custom-control custom-switch switch-success">
//                                                     <input type="checkbox" className="custom-control-input" id="customSwitchSuccess" />
//                                                     <label className="custom-control-label text-muted" htmlFor="customSwitchSuccess">By registering you agree to the <a href="#" className="text-primary">Terms of Use</a></label>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="form-group mb-0 row">
//                                             <div className="col-12 mt-2">
//                                                 <button className="btn btn-gradient-primary btn-round btn-block waves-effect waves-light" type="submit" id="btnReg">Register <i className="fas fa-sign-in-alt ml-1"></i></button>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                                 <div className="m-3 text-center text-muted">
//                                     <p className="">Already have an account ? <a href="/LoginPage" className="text-primary ml-2">Log in</a></p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RegisterPage;


import "../NewStyle/style.css";
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        mobile: ''
    });
    const [error, setError] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!termsAccepted) {
            setError('Please accept the terms and conditions');
            return;
        }

        for (const key in formData) {
            if (formData[key] === '') {
                setError('Please fill in all fields');
                return;
            }
        }

        if (formData.password !== formData.confirm_password) {
            setError('Passwords do not match');
            return;
        }

        try {
            const phpData = new FormData();
            phpData.append("username", formData.username);
            phpData.append("email", formData.email);
            phpData.append("password", formData.password);
            phpData.append("mobile", formData.mobile);

            const response = await axios.post('http://localhost/DATABASE_DATA/register.php', phpData);
            const data = response.data;

            if (data.success) {
                alert("Registration successful");
                window.location.href = '/LoginPage'; // Redirect to LoginPage
            } else {
                setError(data.message);
            }

        } catch (error) {
            console.error('Error:', error);
            setError("An error occurred. Please try again later.");
        }
    };

    const handleTermsChange = () => {
        setTermsAccepted(prev => !prev);
    };

    const toggleShowPassword = () => {
        setShowPassword(prev => !prev);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(prev => !prev);
    };

    return (
        <div className="container" id="page">
            <div className="row vh-100 ">
                <div className="col-12 align-self-center">
                    <div className="auth-page">
                        <div className="card auth-card shadow-lg" id="regpage">
                            <div className="card-body">
                                <div className="px-3">
                                    <div className="auth-logo-box">
                                        <a href="" className="logo logo-admin">
                                            <img src="../assets/images/logo.png" height="50" alt="logo" className="auth-logo" />
                                        </a>
                                    </div>
                                    <div className="text-center auth-logo-text">
                                        <h4 className="name">SkillUp</h4>
                                        <p className="text-muted">Get your free SkillUp account now.</p>
                                    </div>
                                    <form className="form-horizontal auth-form my-4" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <div className="input-group mb-3">
                                                <span className="auth-form-icon">
                                                    <i className="dripicons-user"></i>
                                                </span>
                                                <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Enter username" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="useremail">Email</label>
                                            <div className="input-group mb-3">
                                                <span className="auth-form-icon">
                                                    <i className="dripicons-mail"></i>
                                                </span>
                                                <input type="email" className="form-control" id="useremail" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="userpassword">Password</label>
                                            <div className="input-group mb-3">
                                                <span className="auth-form-icon">
                                                    <i className="dripicons-lock"></i>
                                                </span>
                                                <input type={showPassword ? "text" : "password"} className="form-control" id="userpassword" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" />
                                                <button type="button" className="btn btn-secondary" onClick={toggleShowPassword}>
                                                    {showPassword ? "Hide" : "Show"}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="conf_password">Confirm Password</label>
                                            <div className="input-group mb-3">
                                                <span className="auth-form-icon">
                                                    <i className="dripicons-lock-open"></i>
                                                </span>
                                                <input type={showConfirmPassword ? "text" : "password"} className="form-control" id="conf_password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} placeholder="Enter Confirm Password" />
                                                <button type="button" className="btn btn-secondary" onClick={toggleShowConfirmPassword}>
                                                    {showConfirmPassword ? "Hide" : "Show"}
                                                </button>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="mo_number">Mobile Number</label>
                                            <div className="input-group mb-3">
                                                <span className="auth-form-icon">
                                                    <i className="dripicons-phone"></i>
                                                </span>
                                                <input type="tel" className="form-control" id="mo_number" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter Mobile Number" />
                                            </div>
                                        </div>
                                        <div className="form-group row mt-4">
                                            <div className="col-sm-12">
                                                <div className="custom-control custom-switch switch-success">
                                                    <input type="checkbox" className="custom-control-input" id="customSwitchSuccess" checked={termsAccepted} onChange={handleTermsChange} />
                                                    <label className="custom-control-label text-muted" htmlFor="customSwitchSuccess">By registering you agree to the <Link to="/privacypolicy" className="text-primary">Terms of Use</Link></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 row">
                                            <div className="col-12 mt-2">
                                                <button disabled={!termsAccepted} className="btn btn-gradient-primary btn-round btn-block waves-effect waves-light" type="submit" id="btnReg">Register <i className="fas fa-sign-in-alt ml-1"></i></button>
                                            </div>
                                        </div>
                                        {error && <div className="text-danger mt-3">{error}</div>}
                                    </form>
                                </div>
                                <div className="m-3 text-center text-muted">
                                    <p className="">Already have an account ? <a href="/LoginPage" className="text-primary ml-2">Log in</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;

