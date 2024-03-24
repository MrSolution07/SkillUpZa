import { useState } from "react";
import useWindowPosition from "../../Hooks/useWindowPosition";
import { Link } from "react-router-dom";

function Home3Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [activeMobileSubMenu, setActiveSubMobileMenu] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [filter, setActiveFilter] = useState("Explore");

  const windowPosition = useWindowPosition();

  const handleFilter = (e) => {
    setActiveFilter(e.target.innerText);
  };
  return (
    <header
      className={` header-03  sticky ${
        windowPosition > 0 && "fix-header animated fadeInDown"
      } `}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              {/* logo Start */}
              <Link className="navbar-brand" to="/">
                <img src="assets/images/logo3.png" alt="" />
              </Link>
              {/* logo End */}

              {/* Select Cate Box  */}
              <div className="catecories-box">
                <div
                  className="select-item"
                  onClick={() => setCategoryOpen(!categoryOpen)}
                >
                  <div
                    className={`nice-select ${categoryOpen && "open"}`}
                    tabIndex="0"
                  >
                    <span className="current">{filter}</span>
                    <ul className="list">
                      <li
                        data-value="1"
                        className={`option focus ${
                          filter === "Explore" && "selected"
                        }`}
                      >
                        Explore
                      </li>
                      <li
                        data-value="2"
                        className={`option ${
                          filter === "Option 01" && "selected"
                        }`}
                        onClick={(e) => handleFilter(e)}
                      >
                        Option 01
                      </li>
                      <li
                        data-value="3"
                        className={`option ${
                          filter === "Option 02" && "selected"
                        }`}
                        onClick={(e) => handleFilter(e)}
                      >
                        Option 02
                      </li>
                      <li
                        data-value="4"
                        className={`option ${
                          filter === "Option 03" && "selected"
                        }`}
                        onClick={(e) => handleFilter(e)}
                      >
                        Option 03
                      </li>
                      <li
                        data-value="5"
                        className={`option ${
                          filter === "Option 04" && "selected"
                        }`}
                        onClick={(e) => handleFilter(e)}
                      >
                        Option 04
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Select Cate Box  */}

              {/* Search Box */}
              <form className="search-box" method="post" action="#">
                <input type="search" name="s" placeholder="Search Courses..." />
                <button type="submit">
                  <i className="ti-search"></i>
                </button>
              </form>
              {/* Search Box */}

              {/* Moblie Btn Start */}
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => setActiveMobileMenu(!activeMobileMenu)}
              >
                <i className="fal fa-bars"></i>
              </button>
              {/* Moblie Btn End */}

              {/* Nav Menu Start */}
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
                    <a>Home</a>
                    <span className="submenu-toggler">
                      <i
                        className={`fal ${
                          activeMobileSubMenu === "home"
                            ? "fa-minus"
                            : "fa-plus"
                        }`}
                      ></i>
                    </span>
                    <ul
                      className="sub-menu"
                      style={{
                        display: activeMobileSubMenu === "home" && "block",
                      }}>
                      <li>
                        <Link to="/">Home One</Link>
                      </li>
                      <li>
                        <Link to="/home-2">Home Two</Link>
                      </li>
                      <li>
                        <Link to="/home-3">Home Three</Link>
                      </li>
                    </ul>
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

              {/* User Btn  */}
              <Link to="/" className="user-btn">
                <i className="ti-user"></i>
              </Link>
              {/* User Btn  */}

              {/* Join Btn  */}
              <Link to="/" className="join-btn">
                Join for Free
              </Link>
              {/* Join Btn  */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home3Header;
