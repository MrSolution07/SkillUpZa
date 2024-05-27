import { Link } from "react-router-dom";
import { faXTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


function Home3Footer() {
  return (
    <footer className="footer-1 f-3-color">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-3">
            <aside className="widget">
              <div className="about-widget">
                <Link to="">
                  <img src="assets/images/logo.png" alt="" />
                </Link>
                <p>
                  
                </p>
                <div className="ab-social">
                  <a className="fac" href="https://www.facebook.com/profile.php?id=61559534575921">
                  <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a className="twi" href="https://twitter.com/_Skill_Up_/status/1784949119582195767?t=PPYZjB1fn0GIJJ5XNoYBKw&s=19">
                  <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                  <a href="https://www.instagram.com/skillupza/">
                  <FontAwesomeIcon icon={faInstagram} />
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
                  <Link to="/instructor">Careers</Link>
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
                  <Link to="#">Documentation</Link>
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
                © 2024 Copyright all Right Reserved Design by {""}
                <a href="">SkillupZA</a>
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

