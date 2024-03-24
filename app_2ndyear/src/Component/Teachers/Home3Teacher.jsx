import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import Home3TeacherCard from "../Cards/Home3TeacherCard";

function Home3Teacher({ className, btnClass }) {
  return (
    <section className={className ? className : "teachers-section-2"}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title mb-15">
              Classes Taught by
              <br /> Real Creators
            </h2>
            <p className="sec-desc">
              Online education is a flexible instructional delivery system that
              encompasses any
              <br /> kind of learning that takes place via the Internet.
            </p>
          </div>
        </div>
        <div className="row">
          <Home3TeacherCard
            img="assets/images/home3/teacher/1.png"
            name="Dianne Ameter"
            position="Illustrator"
          />
          <Home3TeacherCard
            img="assets/images/home3/teacher/2.png"
            name="Hugh Saturation"
            position="Photographer"
          />
          <Home3TeacherCard
            img="assets/images/home3/teacher/3.png"
            name="Jim Séchen"
            position="Stylist & Author"
          />
          <Home3TeacherCard
            img="assets/images/home3/teacher/4.png"
            name="Eric Widget"
            position="Designer"
          />
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <Link
              to="/instructor"
              className={btnClass ? btnClass : "bisylms-btn-3"}
            >
              View All Teachers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

Home3Teacher.propTypes = {
  className: ProtoTypes.string,
  btnClass: ProtoTypes.string,
};

export default Home3Teacher;
