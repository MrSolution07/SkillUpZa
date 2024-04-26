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
            Explore a diverse range of subjects, from in-demand tech skills to established academic disciplines. Whether you're interested in data science, business analytics, creative writing, or mastering a new language, you'll find comprehensive and engaging courses.
              <br /> Learn from these courses the skills that you need to know to thrive in any industry.
            </p>
            <Link
              to="/course-3"
              className="SkillUplms-btn"
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
