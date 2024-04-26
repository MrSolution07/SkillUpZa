import React from 'react';

function Forgotpsw() {
    return (
        <body className="account-body accountbg">
            <div className="container">
                <div className="row vh-100">
                    <div className="col-12 align-self-center">
                        <div className="auth-page">
                            <div className="card auth-card shadow-lg" id="pwreset">
                                <div className="card-body">
                                    <div className="px-3">
                                        <div className="auth-logo-box">
                                            <a href="#" className="logo logo-admin"><img src="../assets/images/logo.png" height="55" alt="logo" className="auth-logo" /></a>
                                        </div>
                                        <div className="text-center auth-logo-text">
                                            <h4 className="mt-0 mb-3 mt-5">Reset Password For SkillUp</h4>
                                            <p className="text-muted mb-0">Enter your Email and instructions will be sent to you!</p>
                                        </div>
                                        <form className="form-horizontal auth-form my-4" action="index.html">
                                            <div className="form-group">
                                                <label htmlFor="useremail">Email</label>
                                                <div className="input-group mb-3">
                                                    <span className="auth-form-icon">
                                                        <i className="dripicons-mail"></i>
                                                    </span>
                                                    <input type="email" className="form-control" id="useremail" placeholder="Enter Email" />
                                                </div>
                                            </div>
                                            <div className="form-group mb-0 row">
                                                <div className="col-12 mt-2">
                                                    <button className="btn btn-gradient-primary btn-round btn-block waves-effect waves-light" id="btnReset" type="button">Reset <i className="fas fa-sign-in-alt ml-1"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="m-3 text-center text-muted">
                                        <p className="">Remember It ? <a href="/LoginPage" className="text-primary ml-2">Sign in</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Forgotpsw;
