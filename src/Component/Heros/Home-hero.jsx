//  the content of home 1 
import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <section
      className="hero-banner-1"
      style={{ backgroundImage: "url(assets/images/home/banner.png)" }}
    >
      {/* shape  */}
      <div className="shape-wrap">
        <div className="b-shape-1">
          <img src="assets/images/home/shape-1.png" alt="" />
        </div>
        <div className="b-shape-2">
          <img src="assets/images/home/shape-2.png" alt="" />
        </div>
        <div className="b-shape-3">
          <img src="assets/images/home/shape-3.png" alt="" />
        </div>
        <div className="b-shape-4">
          <img src="assets/images/home/shape-4.png" alt="" />
        </div>
      </div>
      {/* shape  */}
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="hero-content">
              <h2>Your path to Success</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Id temporibus totam fugit aliquam possimus, voluptates est quisquam 
                itaque dolor perspiciatis consequuntur quas blanditiis voluptas vero 
                accusamus asperiores natus tempora esse?
              </p>
              <Link to="/course-3" className="bisylms-btn">
                Ready to Get Started?
              </Link>
            </div>
          </div>
          <div className="col-lg-7 col-md-7">
            <div className="banner-thumb">
              <img src="assets/images/home/layer.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
