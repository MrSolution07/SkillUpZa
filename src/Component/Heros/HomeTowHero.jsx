import { Link } from "react-router-dom";

function HomeTowHero() {
  return (
    <section
      className="hero-banner-2"
      style={{ backgroundImage: "url(assets/images/home2/banner.png)" }}
    >
      {/* shape */}
      <div className="shape-wrap">
        <div className="b-shape-1">
          <img src="assets/images/home2/shape-1.png" alt="" />
        </div>
        <div className="b-shape-2">
          <img src="assets/images/home2/shape-2.png" alt="" />
        </div>
        <div className="b-shape-3">
          <img src="assets/images/home2/shape-3.png" alt="" />
        </div>
        <div className="b-shape-4">
          <img src="assets/images/home2/shape-4.png" alt="" />
        </div>
      </div>
      {/* shape  */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="banner-thumb">
              <img src="assets/images/home2/layer.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="hero-content">
              <div className="sub-heading">Online Education</div>
              <h2>Learn on your Class shedule.</h2>
              <p>
                Loo you mug lurgy baking cakes boot cracking goal morish up the
                duff haggle hotpot faff about.
              </p>
              <ul>
                <li>
                  <i className="icon_check_alt2"></i>Quality Teachers
                </li>
                <li>
                  <i className="icon_check_alt2"></i>Get Certificate
                </li>
                <li>
                  <i className="icon_check_alt2"></i>Best Curriculam
                </li>
              </ul>
              <Link to="/course-1" className="bisylms-btn-2">
                Ready to Get Started?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeTowHero;
