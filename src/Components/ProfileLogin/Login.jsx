// Login page simple but efficient
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="account-body accountbg">
      {/* Login page ni vile */}
      <div className="container">
        <div className="row vh-100 ">
          <div className="col-12 align-self-center">
            <div className="auth-page">
              <div className="card auth-card shadow-lg" id="logpage">
                <div className="card-body">
                  <div className="px-3">
                    <div className="auth-logo-box">
                      <a href="/" className="logo logo-admin">
                        <img
                          src="../assets/images/logo.png"
                          height="55"
                          alt="logo"
                          className="auth-logo"
                        />
                      </a>
                    </div>
                    {/* end auth-logo-box */}
                    <div className="text-center auth-logo-text">
                      <h4 className="mt-0 mb-3 mt-5">Welcome Back</h4>
                      <p className="text-muted mb-0">
                        Sign in to continue to SkillUp
                      </p>
                    </div>
                    {/* end auth-logo-text */}
                    <form
                      className="form-horizontal auth-form my-4"
                      action="login.php"
                      method="POST"
                    >
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
                          />
                        </div>
                      </div>
                      {/* end form-group */}
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
                            name="password"
                            placeholder="Enter password"
                          />
                        </div>
                      </div>
                      {/* end form-group */}
                      <div className="form-group row mt-4">
                        <div className="col-sm-6">
                          <div className="custom-control custom-switch switch-success">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customSwitchSuccess"
                            />
                            <label
                              className="custom-control-label text-muted"
                              htmlFor="customSwitchSuccess"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-sm-6 text-right">
                          <a href="/Forgotpsw" className="text-muted font-13">
                            <i className="dripicons-lock"></i> Forgot password?
                          </a>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end form-group */}
                      <div className="form-group mb-0 row">
                        <div className="col-12 mt-2">
                          <a href="/AfterLogin">
                            <button
                              className="btn btn-gradient-primary btn-round btn-block waves-effect waves-light"
                              id="btnLog"
                              type="button"
                            >
                              Log In <i className="fas fa-sign-in-alt ml-1"></i>
                            </button>
                          </a>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end form-group */}
                    </form>
                    {/* end form */}
                  </div>
                  {/* end /div */}
                  <div className="m-3 text-center text-muted">
                    <p className="">
                      Don't have an account ?{" "}
                      <a href="/Register" className="text-primary ml-2">
                        Register
                      </a>
                    </p>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
