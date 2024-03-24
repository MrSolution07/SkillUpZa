import { Link } from "react-router-dom";

function Pricing() {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title mb-15">
              <span>Our Awesome</span> Pricing Plans for you
            </h2>
            <p className="sec-desc">
              Online education is a flexible instructional delivery system that
              encompasses any
              <br />
              kind of learning that takes place via the Internet.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="pricing-item">
              <h5>Basic</h5>
              <img src="assets/images/home2/p1.png" alt="" />
              <div className="p-price">
                <sup>$</sup> 24 <span>/ mo</span>
              </div>
              <ul>
                <li>
                  <i className="icon_check"></i>Access to 45 courses
                </li>
                <li>
                  <i className="icon_check"></i>Course Discussions
                </li>
                <li className="disable">
                  <i className="icon_check"></i>Offline Viewing
                </li>
                <li className="disable">
                  <i className="icon_check"></i>Certificate after completion
                </li>
                <li className="disable">
                  <i className="icon_check"></i>Private sessions
                </li>
              </ul>
              <Link to="/" className="bisylms-btn-2">
                Buy Now
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-item">
              <h5>Standard</h5>
              <img src="assets/images/home2/p2.png" alt="" />
              <div className="p-price">
                <sup>$</sup> 49 <span>/ mo</span>
              </div>
              <ul>
                <li>
                  <i className="icon_check"></i>Access to 45 courses
                </li>
                <li>
                  <i className="icon_check"></i>Course Discussions
                </li>
                <li>
                  <i className="icon_check"></i>Offline Viewing
                </li>
                <li className="disable">
                  <i className="icon_check"></i>Certificate after completion
                </li>
                <li className="disable">
                  <i className="icon_check"></i>Private sessions
                </li>
              </ul>
              <Link to="/" className="bisylms-btn-2">
                Buy Now
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pricing-item">
              <h5>Platinum</h5>
              <img src="assets/images/home2/p3.png" alt="" />
              <div className="p-price">
                <sup>$</sup> 75 <span>/ mo</span>
              </div>
              <ul>
                <li>
                  <i className="icon_check"></i>Access to 45 courses
                </li>
                <li>
                  <i className="icon_check"></i>Course Discussions
                </li>
                <li>
                  <i className="icon_check"></i>Offline Viewing
                </li>
                <li>
                  <i className="icon_check"></i>Certificate after completion
                </li>
                <li>
                  <i className="icon_check"></i>Private sessions
                </li>
              </ul>
              <Link to="/" className="bisylms-btn-2">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
