// the footer we will be using
import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function Footer({ getStart }) {
  return (
    <footer className={`footer-1 ${!getStart && "pd-top-90"}`}>
      <div className="container">
        {getStart && (
          <div className="row">
            <div className="col-md-12">
              <div className="cta-wrapper">
                <img src="assets/images/home/2.png" alt="" />
                <h3>You can be your own Guiding star with SkillUp!</h3>
                <Link to="/Register" className="SkillUplms-btn">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-lg-4 col-md-3">
            <aside className="widget">
              <div className="about-widget">
                <Link to="/">
                  <img src="assets/images/logo.png" alt="" />
                </Link>
                <p>
                 Skill Up is a company focused on empowering people by facililating them in the job-seeking proccess and providing the necessary tools to optimize them for the job market. We offer a robust and intuitive web application to achieve this.
                 Follow us for more.
                </p>
                <div className="ab-social">
                  <a className="fac" href="https://www.facebook.com/profile.php?id=61559534575921" >
                    <i className="social_facebook"></i>
                  </a>
                  <a className="twi" href="https://twitter.com/_Skill_Up_/status/1784949119582195767?t=PPYZjB1fn0GIJJ5XNoYBKw&s=19">
                    <i><img src ="public/assets/images/twitter-x.png" alt = ""/></i>
                  </a>
                  <a href="https://www.instagram.com/skillupza/">
                      <i><div><img src="public/assets/images/instagram.png" alt="" /></div></i>
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
                  <Link to="/course-3">All Courses</Link>
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
        {/* Copyrigh  */}
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="copyright">
              <p>
                © 2024 Copyright all Right Reserved Design by{" "}
                <a href="/about-1">Major Tech</a>
              </p>
            </div>
          </div>
        </div>
        {/* Copyrigh  */}
      </div>
    </footer>
  );
}

Footer.propTypes = {
  getStart: ProtoTypes.bool,
};

export default Footer;
