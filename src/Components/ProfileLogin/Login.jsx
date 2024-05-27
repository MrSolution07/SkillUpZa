import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const phpData = new FormData();
      phpData.append("username", formData.username);
      phpData.append("password", formData.password);

      axios.post('https://skill-up-za-a416b38edeac.herokuapp.com/Login.php', phpData)
        .then(response => {
          const data = response.data;
          if (data.success) {
            localStorage.setItem('username', formData.username);
            localStorage.setItem('Email', data.email);
            localStorage.setItem('ProfilePicture', data.picture);

            alert("Login successful");
            window.location.href = '/AfterLogin'; // Redirect to dashboard on successful login
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

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="container">
      <div className="row vh-100">
        <div className="col-12 align-self-center">
          <div className="auth-page">
            <div className="card auth-card shadow-lg" id="logpage">
              <div className="card-body">
                <div className="px-3">
                  <div className="auth-logo-box">
                    <a href="/" className="logo logo-admin">
                      <img src="../assets/images/logo.png" height="50" alt="logo" className="auth-logo" />
                    </a>
                  </div>
                  <div className="text-center auth-logo-text">
                    <h4 className="mt-0 mb-3 mt-5">Welcome Back</h4>
                    <p className="text-muted mb-0">Sign in to continue to Skill UpZA</p>
                  </div>
                  <form className="form-horizontal auth-form my-4" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <TextField
                        fullWidth
                        label="Username"
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter username"
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
                    <div className="form-group mb-0 row">
                      <div className="col-12 mt-2">
                        <button className="btn btn-gradient-primary btn-round btn-block waves-effect waves-light" id="btnLog" type="submit">Log In <i className="fas fa-sign-in-alt ml-1"></i></button>
                      </div>
                    </div>
                    {error && <div className="text-danger mt-3">{error}</div>}
                  </form>
                </div>
                <div className="m-3 text-center text-muted">
                  <p className="">Don't have an account? <Link to="/Register" className="text-primary ml-2">Register</Link></p>
                  <p className="">SkillUp For Business? <Link to="/BusinessLogin" className="text-primary ml-2">Sign in here</Link></p>
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

