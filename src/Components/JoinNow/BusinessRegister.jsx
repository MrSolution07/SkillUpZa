import "../NewStyle/style.css";
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const BusinessRegisterPage = () => {
    const [formData, setFormData] = useState({
        businessName: '',
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
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    // Function to validate the password strength
    const validatePassword = (password) => {
        const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&~#^_+=|\\(){}[\]:;<>,./-])[A-Za-z\d@$!%*?&~#^_+=|\\(){}[\]:;<>,./-]{8,}$/; //pattern for password with js simple...
        return strongPasswordPattern.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if terms and conditions are accepted
        if (!termsAccepted) {
            setError('Please accept the terms and conditions');
            return;
        }

        // Check if all fields are filled
        for (const key in formData) {
            if (formData[key] === '') {
                setError('Please fill in all fields');
                return;
            }
        }

        // Check if passwords match
        if (formData.password !== formData.confirm_password) {
            setError('Passwords do not match');
            return;
        }

        // Validate password strength
        if (!validatePassword(formData.password)) {
            setError('Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.');
            return;
        }

        try {
            const phpData = new FormData();
            phpData.append("businessName", formData.businessName);
            phpData.append("email", formData.email);
            phpData.append("password", formData.password);
            phpData.append("mobile", formData.mobile);

            // Send registration data to the server
            const response = await axios.post('https://skill-up-za-c3dcd77b52be.herokuapp.com/Bus_register.php', phpData);
            const data = response.data;

            console.log(data);

            if (data.success) {
                alert("Registration successful");
                // localStorage.setItem('username', formData.businessName); // Store the username in localStorage
                window.location.href = '/BusinessLogin'; // Redirect to BusinessLoginPage
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
            <div className="row vh-100">
                <div className="col-12 align-self-center">
                    <div className="auth-page">
                        <div className="card auth-card shadow-lg" id="regpage">
                            <div className="card-body">
                                <div className="px-3">
                                    <div className="auth-logo-box">
                                        <a href="/" className="logo logo-admin">
                                            <img src="../assets/images/logo.png" height="55" alt="logo" className="auth-logo" />
                                        </a>
                                    </div>
                                    <div className="text-center auth-logo-text">
                                        <h4 className="name">Skill UpZA</h4>
                                        <p className="text-muted">Get your free Skill UpZA account now.</p>
                                    </div>
                                    <form className="form-horizontal auth-form my-4" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <TextField
                                                fullWidth
                                                label="Business Name"
                                                type="text"
                                                id="username"
                                                name="businessName"
                                                value={formData.businessName}
                                                onChange={handleChange}
                                                placeholder="Enter Business"
                                                variant="outlined"
                                                margin="normal"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <i className="dripicons-user"></i>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                type="email"
                                                id="useremail"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter company Email"
                                                variant="outlined"
                                                margin="normal"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <i className="dripicons-mail"></i>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextField
                                                fullWidth
                                                label="Password"
                                                type={showPassword ? "text" : "password"}
                                                id="userpassword"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                placeholder="Enter password"
                                                variant="outlined"
                                                margin="normal"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <i className="dripicons-lock"></i>
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton onClick={toggleShowPassword} edge="end" size="small">
                                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextField
                                                fullWidth
                                                label="Confirm Password"
                                                type={showConfirmPassword ? "text" : "password"}
                                                id="conf_password"
                                                name="confirm_password"
                                                value={formData.confirm_password}
                                                onChange={handleChange}
                                                placeholder="Confirm Password"
                                                variant="outlined"
                                                margin="normal"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <i className="dripicons-lock-open"></i>
                                                        </InputAdornment>
                                                    ),
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton onClick={toggleShowConfirmPassword} edge="end" size="small">
                                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <TextField
                                                fullWidth
                                                label="Mobile Number"
                                                type="text"
                                                id="mo_number"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                placeholder="Enter mobile number"
                                                variant="outlined"
                                                margin="normal"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <i className="dripicons-phone"></i>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </div>
                                        <div className="form-group row mt-4">
                                            <div className="col-sm-12">
                                                <div className="custom-control custom-switch switch-success">
                                                    <input type="checkbox" className="custom-control-input" id="customSwitchSuccess" checked={termsAccepted} onChange={handleTermsChange} />
                                                    <label className="custom-control-label text-muted" htmlFor="customSwitchSuccess">By registering you agree to the <Link to="/PrivacyPolicy" className="text-primary">Terms of Use</Link></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 row">
                                            <div className="col-12 mt-2">
                                                <button className="btn btn-gradient-primary btn-round btn-block waves-effect waves-light" type="submit" id="btnReg">Register <i className="fas fa-sign-in-alt ml-1"></i></button>
                                            </div>
                                        </div>
                                        {error && <div className="text-danger mt-3">{error}</div>}
                                    </form>
                                </div>
                                <div className="m-3 text-center text-muted">
                                    <p className="">Already have an account? <a href="/BusinessLogin" className="text-primary ml-2">Log in</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessRegisterPage;
