import React, { useState } from 'react';
import axios from 'axios';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

function CompanyLogin() {
   const [formData, setFormData] = useState({
       businessName: '',
       password: ''
   });

   const [error, setError] = useState('');
   const [showPassword, setShowPassword] = useState(false);

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

           axios.post('http://localhost/DATABASE_DATA/BusinessLogin.php', phpData)
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

   const toggleShowPassword = () => {
       setShowPassword(prev => !prev);
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
                                           <p className="text-muted mb-0">Sign in to continue to Skill UpZA</p>
                                       </div>
                                       <form className="form-horizontal auth-form my-4" onSubmit={handleSubmit}>
                                           <div className="form-group">
                                               <label htmlFor="companyname">Company Name</label>
                                               <TextField
                                                   variant="outlined"
                                                   fullWidth
                                                   id="companyname"
                                                   name="businessName"
                                                   type="text"
                                                   value={formData.businessName}
                                                   onChange={handleChange}
                                                   placeholder="Enter Company Name"
                                                   InputProps={{
                                                       startAdornment: (
                                                           <InputAdornment position="start">
                                                               <i className="dripicons-user"></i>
                                                           </InputAdornment>
                                                       ),
                                                       sx: {
                                                           height: 36,
                                                           borderRadius: 2,
                                                        
                                                       }
                                                   }}
                                               />
                                           </div>
                                           <div className="form-group mb-4">
                                               <label htmlFor="userpassword">Password</label>
                                               <TextField
                                                   variant="outlined"
                                                   fullWidth
                                                   id="userpassword"
                                                   name="password"
                                                   type={showPassword ? "text" : "password"}
                                                   value={formData.password}
                                                   onChange={handleChange}
                                                   placeholder="Enter password"
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
                                                       sx: {
                                                           height: 36,
                                                           borderRadius: 2,
                                                       }
                                                   }}
                                               />
                                               {error && <div className="text-danger mt-3">{error}</div>}
                                           </div>
                                           <div className="form-group mb-0 row">
                                               <div className="col-12 mt-2">
                                               <Link to="/dashboard">
                                                   <button className="btn btn-gradient-primary btn-round btn-block waves-effect waves-light" id="btnLog" type="submit">Log In <i className="fas fa-sign-in-alt ml-1"></i></button></Link>
                                               </div>
                                           </div>
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