//  content of home page with the video
import { Link } from "react-router-dom";

function Cta() {
  return (
    <section
      className="cta-section"
      style={{ backgroundImage: "url(assets/images/home/cta-bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title">
              <span>Online Course</span> From 160 Top Institutions.
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Id temporibus totam fugit aliquam possimus, voluptates est quisquam 
                itaque dolor perspiciatis consequuntur quas blanditiis voluptas vero 
                accusamus asperiores natus tempora esse?
              <br /> piss cheeky my lady gutted mate excuse my french.
            </p>
            <Link
              to="/course-3"
              className="bisylms-btn"
              style={{ zIndex: "0" }}
            >
              Start Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
