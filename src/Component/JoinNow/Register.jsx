//Join for free page or register 

import "../NewStyle/style.css"


import { Helmet } from 'react-helmet';

const RegisterPage = () => {
  return (
    <div className="container" id="page">
      <div className="row vh-100 ">
        <div className="col-12 align-self-center">
          <div className="auth-page">
            <div className="card auth-card shadow-lg" id="regpage">
              <div className="card-body" >
                <div className="px-3">
                  <div className="auth-logo-box">
                    <a href="" className="logo logo-admin">
                      <img src="" height="55" alt="logo" className="auth-logo" />
                    </a>
                  </div>
                  <div className="text-center auth-logo-text">
                    <h4 className="name">SkillUp</h4>
                    <p className="text-muted">Get your free SkillUp account now.</p>
                  </div>
                  <form className="form-horizontal auth-form my-4" action="index.html">
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <div className="input-group mb-3">
                        <span className="auth-form-icon">
                          <i className="dripicons-user"></i>
                        </span>
                        <input type="text" className="form-control" id="username" placeholder="Enter username" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="useremail">Email</label>
                      <div className="input-group mb-3">
                        <span className="auth-form-icon">
                          <i className="dripicons-mail"></i>
                        </span>
                        <input type="email" className="form-control" id="useremail" placeholder="Enter Email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="userpassword">Password</label>
                      <div className="input-group mb-3">
                        <span className="auth-form-icon">
                          <i className="dripicons-lock"></i>
                        </span>
                        <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="conf_password">Confirm Password</label>
                      <div className="input-group mb-3">
                        <span className="auth-form-icon">
                          <i className="dripicons-lock-open"></i>
                        </span>
                        <input type="password" className="form-control" id="conf_password" placeholder="Enter Confirm Password" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="mo_number">Mobile Number</label>
                      <div className="input-group mb-3">
                        <span className="auth-form-icon">
                          <i className="dripicons-phone"></i>
                        </span>
                        <input type="text" className="form-control" id="mo_number" placeholder="Enter Mobile Number" />
                      </div>
                    </div>
                    <div className="form-group row mt-4">
                      <div className="col-sm-12">
                        <div className="custom-control custom-switch switch-success">
                          <input type="checkbox" className="custom-control-input" id="customSwitchSuccess" />
                          <label className="custom-control-label text-muted" htmlFor="customSwitchSuccess">By registering you agree to the <a href="#" className="text-primary">Terms of Use</a></label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-0 row">
                      <div className="col-12 mt-2">
                        <button className="btn btn-gradient-primary btn-round btn-block waves-effect waves-light" type="button" id="btnReg">Register <i className="fas fa-sign-in-alt ml-1"></i></button>
                      </div>
                    </div>
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
