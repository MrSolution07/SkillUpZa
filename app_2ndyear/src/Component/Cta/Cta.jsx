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
              So I said codswallop car boot cheers mufty I don't want no agro
              are you taking the
              <br /> piss cheeky my lady gutted mate excuse my french.
            </p>
            <Link
              to="/course-1"
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
