import ProtoTypes from "prop-types";
import CourseItemCard from "../Cards/CourseItemCard";

function PopularCourse({ course, heading }) {
  return (
    <section className="popular-course-section">
      <div className="container">
        {heading && (
          <div className="row">
            <div className="col-md-8">
              <h2 className="sec-title">
                <span>Explore</span> Our Popular Courses
              </h2>
            </div>
            <div className="col-md-4">
              <a className="read-more" href="#">
                Browse Online Courses<i className="arrow_right"></i>
              </a>
            </div>
          </div>
        )}
        {course && (
          <div className="row">
            <div className="col-lg-12">
              <div className="course-wrapper">
                <CourseItemCard title="Computer Science" link="single-course">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="74"
                    height="60"
                    viewBox="0 0 74 60"
                  >
                    <defs>
                      <pattern
                        id="pattern"
                        preserveAspectRatio="xMidYMid slice"
                        width="100%"
                        height="100%"
                        viewBox="0 0 74 60"
                      >
                        <image
                          width="74"
                          height="60"
                          xlinkHref="assets/images/home/desktop1-image.png"
                        />
                      </pattern>
                    </defs>
                    <path
                      id="desktop1"
                      className="cls-1"
                      style={{ fill: "url(#pattern)" }}
                      d="M0,0H74V60H0Z"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard
                  title="Data Analysis & Statistics"
                  link="single-course"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                  >
                    <image
                      id="data"
                      width="64"
                      height="64"
                      xlinkHref="assets/images/home/data-image.png"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard
                  title="Business & Management"
                  link="single-course"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="74"
                    height="70"
                    viewBox="0 0 74 70"
                  >
                    <image
                      id="proposal"
                      width="74"
                      height="70"
                      xlinkHref="assets/images/home/proposal-image.png"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard title="Social Sciences" link="single-course">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="80"
                    height="67"
                    viewBox="0 0 80 67"
                  >
                    <image
                      id="chat"
                      width="80"
                      height="67"
                      xlinkHref="assets/images/home/chat-image.png"
                    />
                  </svg>
                </CourseItemCard>
                <CourseItemCard
                  title="Biology & Life Sciences"
                  link="single-course"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="58"
                    height="73"
                    viewBox="0 0 58 73"
                  >
                    <image
                      id="mind"
                      width="58"
                      height="73"
                      xlinkHref="assets/images/home/mind-image.png"
                    />
                  </svg>
                </CourseItemCard>
              </div>
            </div>
          </div>
        )}
        <div className="row mt-120">
          <div className="col-lg-7 col-md-6">
            <div className="ab-thumb">
              <img src="assets/images/home/1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="ab-content">
              <h3>I will stay with you until you pass your exam.</h3>
              <p className="mid-item">
                Who else do you know who'll do that for you?
              </p>
              <p>
                So I said codswallop car boot cheers mufty I don't want no agro
                are you taking the piss cheeky my lady gutted mate excuse my
                french, gormless have it cras.
              </p>
              <a className="bisylms-btn" href="#">
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

PopularCourse.propTypes = {
  course: ProtoTypes.bool,
  heading: ProtoTypes.bool,
};

export default PopularCourse;
