

import React, { useState } from 'react';
import axios from 'axios';

function CompanyLogin() {
    const [formData, setFormData] = useState({
        businessName: '',
        password: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const phpData = new FormData();
            phpData.append("businessName", formData.businessName);
            phpData.append("password", formData.password);

            axios.post('https://skill-up-za-be8f6d8201c2.herokuapp.com/BusinessLogin.php', phpData)
                .then(response => {
                    const data = response.data;

                    if (data.success) {
                        localStorage.setItem('companyname', formData.businessName);
                        alert("Login successful");
                        window.location.href = '/dashboard'; // Redirect to dashboard on successful login
                    } else {
                        setError("Login failed. Please check your credentials.");
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    setError("An error occurred. Please try again later.");
                });
        } catch (error) {
            console.error('Error:', error);
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="account-body accountbg">
            <div className="container">
                <div className="row vh-100 ">
                    <div className="col-12 align-self-center">
                        <div className="auth-page">
                            <div className="card auth-card shadow-lg" id="logpage">
                                <div className="card-body">
                                    <div className="px-3">
                                        <div className="auth-logo-box">
                                            <a href="/" className="logo logo-admin">
                                                <img src="../assets/images/logo.png" height="55" alt="logo" className="auth-logo" />
                                            </a>
                                        </div>
                                        <div className="text-center auth-logo-text">
                                            <h4 className="mt-0 mb-3 mt-5">Welcome Back</h4>
                                            <p className="text-muted mb-0">Sign in to continue to SkillUp</p>
                                        </div>
                                        <form className="form-horizontal auth-form my-4" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="companyname">Company Name</label>
                                                <div className="input-group mb-3">
                                                    <span className="auth-form-icon">
                                                        <i className="dripicons-user"></i>
                                                    </span>
                                                    <input type="text" className="form-control" id="companyname" name="businessName" value={formData.companyname} onChange={handleChange} placeholder="Enter Company Name" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="companypassword">Password</label>
                                                <div className="input-group mb-3">
                                                    <span className="auth-form-icon">
                                                        <i className="dripicons-lock"></i>
                                                    </span>
                                                    <input type="password" className="form-control" id="companypassword" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" />
                                                </div>
                                            </div>
                                            <div className="form-group mb-0 row">
                                                <div className="col-12 mt-2">
                                                    <button className="btn btn-gradient-primary btn-round btn-block waves-effect waves-light" id="btnLog" type="submit">Log In <i className="fas fa-sign-in-alt ml-1"></i></button>
                                                </div>
                                            </div>
                                            {error && <div className="text-danger mt-3">{error}</div>}
                                        </form>
                                    </div>
                                    <div className="m-3 text-center text-muted">
                                        <p className="">Don't have an account ? <a href="/BusinessRegister" className="text-primary ml-2">Register</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
);
}

export default CompanyLogin;




