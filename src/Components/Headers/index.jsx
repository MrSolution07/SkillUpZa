//this is the main home 1 left the comments so that you can see how to use some options 
import ProtoTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import useWindowPosition from "../../Hooks/useWindowPosition";
import { color } from "framer-motion";

function Header({ className, logo, joinBtn, search }) {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [activeMobileSubMenu, setActiveSubMobileMenu] = useState(false);
  const windowPosition = useWindowPosition();
  return (
    <header
      className={`${className ? className : "header-01"} sticky ${
        windowPosition > 0 && "fix-header animated fadeInDown"
      } `}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              {/* logo Start */}
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="" />
                <img
                  className="sticky-logo"
                  src="assets/images/logo4.png"
                  alt=""
                />
              </Link>
              {/* logo End */}

              {/* Moblie Btn Start  */}
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setActiveMobileMenu(!activeMobileMenu)}
              >
                <i className="fal fa-bars"></i>
              </button>
              {/*  Moblie Btn End  */}

              {/* Nav Menu Start  */}
              <div
                className="collapse navbar-collapse"
                style={{ display: activeMobileMenu && "block" }}
              >
                <ul className="navbar-nav">
                  <li>
                    <Link to="/">Home</Link> 
                  </li>
                  <li>
                    <Link to="/course-3">Learning</Link>
                  </li>
                  <li>
                    <Link to="/instructor">Jobs</Link>
                  </li>
                  <li>
                    <Link to="/about-1">About Us</Link>
                  </li>
                   
                  
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {/* Nav Menu End  */}

              {/*  User Btn  */}
              {className !== "header-02" && (
                <a href="/LoginPage" className="user-btn">
                  <i className="ti-user"></i>
                </a>
              )}
              {/*  User Btn  */}

              {/* Join Btn  */}
              {joinBtn && (
                <a href="/Register" className="join-btn">
                  Join for Free
                </a>
              )}

              {/* Join Btn  we have to put the link to the login page here */}
              {search && (
                <form className="search-box" method="post" action="#">
                  <input
                    type="search"
                    name="s"
                    placeholder="Search Courses..."
                  />
                  <button type="submit">
                    <i className="ti-search"></i>
                  </button>
                </form>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  className: ProtoTypes.string,
  logo: ProtoTypes.string,
  joinBtn: ProtoTypes.bool,
  search: ProtoTypes.bool,
};

export default Header;
