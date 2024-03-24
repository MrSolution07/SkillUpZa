import { course } from "../../Data/course";
import FeatureCard2 from "../Cards/FeatureCard2";
function FeatureHome2() {
  return (
    <section className="feature-course-section-2">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2 className="sec-title">
              <span>Find the Right</span> Online Course for you
            </h2>
          </div>
          <div className="col-md-7 text-right">
            <a href="#" className="bisylms-btn-2">
              View All Courses
            </a>
          </div>
        </div>
        <div className="row">
          {course?.map((course) => (
            <FeatureCard2 key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureHome2;
