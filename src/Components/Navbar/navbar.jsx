import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useWindowPosition from "../../Hooks/useWindowPosition";
import Contact from "../../Pages/Contact";


function Navbar({ className,logo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const windowPosition = useWindowPosition();



  return (
    <header className={`${className ? className : "header-06"} sticky ${
      windowPosition > 0 && "fix-header animated fadeInDown"
    } `}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar-expand-lg">
              {/* Logo Start */}
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="Logo" />
                <img className="sticky-logo" src="assets/images/logo.png" height="30" alt="Sticky Logo" />
              </Link>
              {/* Logo End */}

              {/* Logout Button */}
              <Link to="/LoginPage">
              <button className="logout-button">
                <i className="far fa-power-off fa-1x"></i> Logout
              </button>
              </Link>

              <Link to="/contact">
              <button className="help-button">
                <i className="fas fa-question-circle"></i> Help
              </button>
              </Link>

              {/* Here we can display the user's name and email*/ }
              <div className="navbar-contact-info">
                <span>Email: user@gmail.com</span>
                <span>Welcome: Miss User</span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
