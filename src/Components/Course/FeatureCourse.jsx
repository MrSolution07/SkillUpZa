import { course } from "../../Data/course";
import FeatureCourseCard from "../Cards/FeatureCourseCard";
function FeatureCourse() {
  return (
    <section
      className="feature-course-section-3"
      style={{ backgroundImage: "url(assets/images/home3/2.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h2 className="sec-title">
              Help you learn
              <br /> with Online Class
            </h2>
          </div>
          <div className="col-md-7">
            <p className="sec-desc">
              Start building your career today with Skill Up!
              
            </p>
          </div>
        </div>
        <div className="row">
          {course?.map((cours) => (
            <FeatureCourseCard key={cours.id} course={cours} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCourse;
