// about us with the card
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
              Major Tech
              <br /> Members
            </h2>
            <p className="sec-desc">
              Meet the founders.
            </p>
          </div>
        </div>
        <div className="my-row">
          <Home3TeacherCard
            img="assets/images/home3/teacher/1.png"
            name="Christian Bulabula"
            position="Software Engineer"
          />
          <Home3TeacherCard
            img="assets/images/home3/teacher/2.png"
            name="Mike Lungwa"
            position="Software Engineer"
          />
          <Home3TeacherCard
            img="assets/images/home3/teacher/3.png"
            name="Lesedi Ntamane"
            position="UX Designer "
          />
          <Home3TeacherCard
            img="assets/images/home3/teacher/4.png"
            name="Anonga Mabuda"
            position="Front-end Web Developer"
          />
          <Home3TeacherCard
            img="assets/images/home3/teacher/5.png"
            name="Govener Khoza"
            position="UI Engineer"
          />

        </div>
        {/* <div className="row">
          <div className="col-md-12 text-center">
            <Link
              to="/instructor"
              className={btnClass ? btnClass : "bisylms-btn-3"}
            >
              View All Teachers
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
}

Home3Teacher.propTypes = {
  className: ProtoTypes.string,
  btnClass: ProtoTypes.string,
};

export default Home3Teacher;
