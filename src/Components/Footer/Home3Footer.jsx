import { Link } from "react-router-dom";

function Home3Footer() {
  return (
    <footer className="footer-1 f-3-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-3">
            <aside className="widget">
              <div className="about-widget">
                <Link to="/">
                  <img src="assets/images/logo3.png" alt="" />
                </Link>
                <p>
                  
                </p>
                <div className="ab-social">
                  <a className="fac">
                    <i className="social_facebook"></i>
                  </a>
                  <a className="twi" href="https://twitter.com/_Skill_Up_/status/1784949119582195767?t=PPYZjB1fn0GIJJ5XNoYBKw&s=19">
                      <i><img src ="public/assets/images/twitter-x.png" alt = ""/>
                      </i>
                  </a>
                  <a href="https://www.instagram.com/skillup443/">
                      <i><img src="public/assets/images/instagram.png" alt="" /></i>
                  </a>
                </div>
              </div>
            </aside>
          </div>
          <div className="col-lg-3 col-md-3">
            <aside className="widget">
              <h3 className="widget-title">Explore</h3>
              <ul>
                <li>
                  <Link to="/about-1">About Us</Link>
                </li>
                <li>
                  <Link to="#">Success Story</Link>
                </li>
                <li>
                  <Link to="/instructor">Careers</Link>
                </li>
                <li>
                  <Link to="/">Resource Center</Link>
                </li>
                <li>
                  <Link to="/course-3">Courses</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </aside>
          </div>
          <div className="col-lg-3 col-md-3">
            <aside className="widget">
              <h3 className="widget-title">Categories</h3>
              <ul>
                <li>
                  <Link to="/course-1">All Courses</Link>
                </li>
                <li>
                  <Link to="/">Storytelling & Voice Over</Link>
                </li>
                <li>
                  <Link to="/">Design & Branding</Link>
                </li>

              </ul>
            </aside>
          </div>
          <div className="col-lg-2 col-md-3">
            <aside className="widget">
              <h3 className="widget-title">Support</h3>
              <ul>
                <li>
                  <Link to="/contact">Help Center</Link>
                </li>
                <li>
                  <Link to="#">System Requirements</Link>
                </li>
                
                <li>
                  <Link to="#">Site Feedback</Link>
                </li>
                <li>
                  <Link to="#">Documentation</Link>
                </li>
                <li>
                  <Link to="#">Forums</Link>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        {/* Copyrigh */}
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="copyright">
              <p>
                © 2021 Copyright all Right Reserved Design by{" "}
                <a href="http://quomodosoft.com/">Quomodosoft</a>
              </p>
            </div>
          </div>
        </div>
        {/* Copyrigh */}
      </div>
    </footer>
  );
}

export default Home3Footer;

