// Login page simple but efficient
// Login page simple but efficient
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const phpData = new FormData();
            phpData.append("username", formData.username);
            phpData.append("password", formData.password);
           

            const response = await axios.post('Login.php', phpData);
            const data = response.data;
            

            if (data.success) {
                alert("Login successful");
                window.location.href = '.\SkillUp\HTML\authentication\ProfilePage.html';
            } else {
                alert("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred. Please try again later.");
        }
    }

    return (
        <div className="container">
            <div className="row vh-100 ">
                <div className="col-12 align-self-center">
                    <div className="auth-page">
                        <div className="card auth-card shadow-lg" id="logpage">
                            <div className="card-body">
                                <div className="px-3">
                                    <div className="auth-logo-box">
                                        <a href="/" className="logo logo-admin"><img src="../assets/images/logo.png" height="55" alt="logo" className="auth-logo" /></a>
                                    </div>
                                    <div className="text-center auth-logo-text">
                                        <h4 className="mt-0 mb-3 mt-5">Welcome Back</h4>
                                        <p className="text-muted mb-0">Sign in to continue to SkillUp</p>
                                    </div>
                                    <form className="form-horizontal auth-form my-4" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="username">Username</label>
                                            <div className="input-group mb-3">
                                                <span className="auth-form-icon">
                                                    <i className="dripicons-user"></i>
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    name="username"
                                                    placeholder="Enter username"
                                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="userpassword">Password</label>
                                            <div className="input-group mb-3">
                                                <span className="auth-form-icon">
                                                    <i className="dripicons-lock"></i>
                                                </span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="userpassword"
                                                    name='password'
                                                    placeholder="Enter password"
                                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row mt-4">
                                            <div className="col-sm-6">
                                                <div className="custom-control custom-switch switch-success">
                                                    <input type="checkbox" className="custom-control-input" id="customSwitchSuccess" />
                                                    <label className="custom-control-label text-muted" htmlFor="customSwitchSuccess">Remember me</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 text-right">
                                                <Link to="/Forgotpsw" className="text-muted font-13"><i className="dripicons-lock"></i> Forgot password?</Link>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 row">
                                            <div className="col-12 mt-2">
                                                <button className="btn btn-gradient-primary btn-round btn-block waves-effect waves-light" id="btnLog" type="submit">Log In <i className="fas fa-sign-in-alt ml-1"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="m-3 text-center text-muted">
                                    <p className="">Don't have an account ? <Link to="/Register" className="text-primary ml-2">Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
