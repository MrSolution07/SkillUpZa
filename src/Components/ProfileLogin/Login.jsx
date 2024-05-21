import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import { useUser } from './UserContext.jsx';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // this line was suppose to be storing the username 
  // const { setUsername } = useUser();

  const handleChange = (e) => {
    setFormData(prev => {
        return { ...prev, [e.target.name]: e.target.value }
    });
  };

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const phpData = new FormData();
      phpData.append("username", formData.username);
      phpData.append("password", formData.password);

      axios.post('http://localhost/DATABASE_DATA/Login.php', phpData)
        .then(response => {
          const data = response.data;
          

          if (data.success) {
            // setUsername(formData.username);
            localStorage.setItem('username', formData.username);
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

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
};

  return (
    <div className="container">
      <div className="row vh-100 ">
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
                    <p className="text-muted mb-0">Sign in to continue to SkillUp</p>
                  </div>
                  <form className="form-horizontal auth-form my-4" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label  htmlFor="username">Username</label>
                      <div className="input-group mb-3">
                        <span className="auth-form-icon">
                          <i className="dripicons-user"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          value={formData.username} onChange={handleChange} 
                          placeholder="Enter username"
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
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          id="userpassword"
                          name="password"
                          value={formData.password} onChange={handleChange}
                          placeholder="Enter password"
                        /> <button type="button" className="btn btn-secondary" onClick={toggleShowPassword}>
                        {showPassword ? "Hide" : "Show"}
                    </button>
                      </div>
                    </div>
                    <div className="form-group mb-0 row">
                      <div className="col-12 mt-2">
                        <button className="btn btn-gradient-primary btn-round btn-block waves-effect waves-light" id="btnLog" type="submit"><Link to="/AfterLogin">Log In <i className="fas fa-sign-in-alt ml-1"></i></Link></button>
                      </div>
                      
                    </div>
                    {error && <div className="text-danger mt-3">{error}</div>}
                  </form>
                </div>
                <div className="m-3 text-center text-muted">
                  <p className="">Don't have an account ? <Link to="/Register" className="text-primary ml-2">Register</Link></p>
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


