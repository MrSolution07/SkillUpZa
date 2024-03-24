import { Link } from "react-router-dom";

function FooterHome2() {
  return (
    <footer className="footer-1 f-2-color">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="cta-mailchimp clearfix"
              style={{
                backgroundImage: "url(assets/images/home2/mailchimp-bg.png)",
              }}
            >
              <div className="row">
                <div className="col-md-6">
                  <h3>Ask questions and get help from the community</h3>
                </div>
                <div className="col-md-6">
                  <form action="#" method="post">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email here"
                    />
                    <input type="submit" name="submit" value="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-3">
            <aside className="widget">
              <div className="about-widget">
                <Link to="/">
                  <img src="assets/images/logo2.png" alt="" />
                </Link>
                <p>
                  Lost the plot Richard you mug cup of tea knackered boot
                  bender.
                </p>
                <div className="ab-social">
                  <a className="fac" href="#">
                    <i className="social_facebook"></i>
                  </a>
                  <a className="twi" href="#">
                    <i className="social_twitter"></i>
                  </a>
                  <a className="you" href="#">
                    <i className="social_youtube"></i>
                  </a>
                  <a className="lin" href="#">
                    <i className="social_linkedin"></i>
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
                  <Link to="/about-2">About Us</Link>
                </li>
                <li>
                  <Link to="/">Success Story</Link>
                </li>
                <li>
                  <Link to="/">Careers</Link>
                </li>
                <li>
                  <Link to="/">Resource Center</Link>
                </li>
                <li>
                  <Link to="/course-2">Courses</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </aside>
          </div>
          <div className="col-lg-3 col-md-3">
            <aside className="widget">
              <h3 className="widget-title">Catecories</h3>
              <ul>
                <li>
                  <Link to="/course-3">All Courses</Link>
                </li>
                <li>
                  <Link to="/">Storytelling & Voice Over</Link>
                </li>
                <li>
                  <Link to="/">Digital Marketing</Link>
                </li>
                <li>
                  <Link to="/">Design & Branding</Link>
                </li>
                <li>
                  <Link to="/">Nanodegree Plus</Link>
                </li>
                <li>
                  <Link to="/">Veterans</Link>
                </li>
              </ul>
            </aside>
          </div>
          <div className="col-lg-2 col-md-3">
            <aside className="widget">
              <h3 className="widget-title">Support</h3>
              <ul>
                <li>
                  <Link to="/">Help Center</Link>
                </li>
                <li>
                  <Link to="/">System Requirements</Link>
                </li>
                <li>
                  <Link to="/">Register Activation Key</Link>
                </li>
                <li>
                  <Link to="/">Site Feedback</Link>
                </li>
                <li>
                  <Link to="/">Documentation</Link>
                </li>
                <li>
                  <Link to="/">Forums</Link>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        {/* Copyright  */}
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="copyright">
              <p>
                © 2021 Copyright all Right Reserved Design by
                <a href="http://quomodosoft.com/">Quomodosoft</a>
              </p>
            </div>
          </div>
        </div>
        {/* Copyright   */}
      </div>
    </footer>
  );
}

export default FooterHome2;
