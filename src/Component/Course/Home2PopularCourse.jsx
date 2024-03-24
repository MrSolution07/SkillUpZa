import { Link } from "react-router-dom";

function Home2PopularCourse() {
  return (
    <section className="popular-course-section-2">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title mb-15">
              <span>School</span> Popular Subjects
            </h2>
            <p className="sec-desc">
              Online education is a flexible instructional delivery system that
              encompasses any
              <br /> kind of learning that takes place via the Internet.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="course-item-2 text-center">
              <div className="course-thumb">
                <img src="assets/images/home2/popular-course/1.png" alt="" />
              </div>
              <h4>
                <Link to="/single-course">Computer Science</Link>
              </h4>
              <p>Over 740 Courses</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="course-item-2 text-center">
              <div className="course-thumb">
                <img src="assets/images/home2/popular-course/2.png" alt="" />
              </div>
              <h4>
                <Link to="/single-course">Data Analysis</Link>
              </h4>
              <p>Over 120 Courses</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="course-item-2 text-center">
              <div className="course-thumb">
                <img src="assets/images/home2/popular-course/3.png" alt="" />
              </div>
              <h4>
                <Link to="/single-course">Social Sciences</Link>
              </h4>
              <p>Over 235 Courses</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="course-item-2 text-center">
              <div className="course-thumb">
                <img src="assets/images/home2/popular-course/4.png" alt="" />
              </div>
              <h4>
                <Link to="/single-course">Software Development</Link>
              </h4>
              <p>Over 425 Courses</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <Link to="/course-1" className="bisylms-btn-2">
              View All Courses
            </Link>
          </div>
        </div>
        <div className="row mt-120">
          <div className="col-lg-7">
            <div className="ab-thumb">
              <img src="assets/images/home2/1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="ab-content-2">
              <h3>What will you Discover?</h3>
              <p>
                Explore new skills, deepen existing passions, and get lost in
                creativity. What you find just might surprise and inspire you.
              </p>
              <Link className="read-more" to="#">
                Browse Classes<i className="arrow_right"></i>
              </Link>
            </div>
            <div className="fact-wrapper">
              <div className="funfact-item text-center">
                <img src="assets/images/home2/f1.png" alt="" />
                <h2>
                  <span data-counter="24200" className="timer">
                    24200
                  </span>
                  +
                </h2>
                <p>Students</p>
              </div>
              <div className="funfact-item text-center">
                <img src="assets/images/home2/f2.png" alt="" />
                <h2>
                  <span data-counter="6214" className="timer">
                    6214
                  </span>
                  +
                </h2>
                <p>Courses</p>
              </div>
              <div className="funfact-item text-center">
                <img src="assets/images/home2/f3.png" alt="" />
                <h2>
                  <span data-counter="2500" className="timer">
                    2500
                  </span>
                  +
                </h2>
                <p>Award</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home2PopularCourse;
