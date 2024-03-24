//this is the main home
import ProtoTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import useWindowPosition from "../../Hooks/useWindowPosition";

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
                  <li
                    className="menu-item-has-children"
                    onClick={() =>
                      setActiveSubMobileMenu(
                        activeMobileSubMenu === "home" ? false : "home"
                      )
                    }
                  >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {/* <ul
                      className="sub-menu"
                      style={{
                        display: activeMobileSubMenu === "home" && "block",
                      }}
                    >
                      <li>
                        <Link to="/">Home One</Link>
                      </li>
                      <li>
                        <Link to="/home-2">Home Two</Link>
                      </li>
                      <li>
                        <Link to="/home-3">Home Three</Link>
                      </li>
                    </ul> */}
                  </li>

                  <li
                    className="menu-item-has-children"
                    onClick={() =>
                      setActiveSubMobileMenu(
                        activeMobileSubMenu === "course" ? false : "course"
                      )
                    }
                  >
                    <a>Courses</a>
                    <span className="submenu-toggler">
                      <i
                        className={`fal ${
                          activeMobileSubMenu === "course"
                            ? "fa-minus"
                            : "fa-plus"
                        }`}
                      ></i>
                    </span>
                    <ul
                      className="sub-menu"
                      style={{
                        display: activeMobileSubMenu === "course" && "block",
                      }}
                    >
                      <li>
                        <Link to="/course-1">Course 01</Link>
                      </li>
                      <li>
                        <Link to="/course-2">Course 02</Link>
                      </li>
                      <li>
                        <Link to="/course-3">Course 03</Link>
                      </li>
                      <li>
                        <Link to="/single-course">Course Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="menu-item-has-children"
                    name="pages"
                    onClick={(e) => {
                      setActiveSubMobileMenu(
                        e.target.name
                          ? e.target.name === activeMobileSubMenu
                            ? "pages"
                            : e.target.name
                          : activeMobileSubMenu === "pages"
                          ? false
                          : "pages"
                      );
                    }}
                  >
                    <a>Pages</a>
                    <span className="submenu-toggler">
                      <i
                        className={`fal ${
                          activeMobileSubMenu === "pages"
                            ? "fa-minus"
                            : "fa-plus"
                        }`}
                      ></i>
                    </span>
                    <ul
                      className="sub-menu"
                      style={{
                        display:
                          (activeMobileSubMenu === "pages" && "block") ||
                          (activeMobileSubMenu === "aboutPages" && "block"),
                      }}
                    >
                      <li className="menu-item-has-children">
                        <a name="aboutPages">About Pages</a>
                        <span className="submenu-toggler" name="aboutPages">
                          <i
                            className={`fal ${
                              activeMobileSubMenu === "aboutPages"
                                ? "fa-minus"
                                : "fa-plus"
                            }`}
                            name="aboutPages"
                          ></i>
                        </span>
                        <ul
                          className="sub-menu"
                          style={{
                            display:
                              activeMobileSubMenu === "aboutPages" && "block",
                          }}
                        >
                          <li>
                            <Link to="/about-1">About 01</Link>
                          </li>
                          <li>
                            <Link to="/about-2">About 02</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/instructor">Instructor Page</Link>
                      </li>
                      <li>
                        <Link to="/profile">Instructor Profile</Link>
                      </li>
                      <li>
                        <Link to="/404">404 Page</Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="menu-item-has-children"
                    onClick={() =>
                      setActiveSubMobileMenu(
                        activeMobileSubMenu === "blog" ? false : "blog"
                      )
                    }
                  >
                    <a>Blog</a>
                    <span className="submenu-toggler">
                      <i
                        className={`fal ${
                          activeMobileSubMenu === "blog"
                            ? "fa-minus"
                            : "fa-plus"
                        }`}
                      ></i>
                    </span>
                    <ul
                      className="sub-menu"
                      style={{
                        display: activeMobileSubMenu === "blog" && "block",
                      }}
                    >
                      <li>
                        <Link to="/blog">Blog Page</Link>
                      </li>
                      <li>
                        <Link to="/single-post">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              {/* Nav Menu End  */}

              {/*  User Btn  */}
              {className !== "header-02" && (
                <a href="#" className="user-btn">
                  <i className="ti-user"></i>
                </a>
              )}
              {/*  User Btn  */}

              {/* Join Btn  */}
              {joinBtn && (
                <a href="#" className="join-btn">
                  Join for Free
                </a>
              )}

              {/* Join Btn   */}
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
