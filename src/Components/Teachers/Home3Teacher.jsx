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
            position="Lead Developer"
          />
          <Home3TeacherCard
            img="assets/images/home3/teacher/2.png"
            name2="Mike Longwa"
            position="Back-end Developer"
            
          />
          <Home3TeacherCard
            img="assets/images/home3/teacher/3.png"
            name3="Lesedi Ntamane"
            position="UI/UX Designer"
            
          />
          <Home3TeacherCard
            img="assets/images/home3/teacher/4.png"
            name4="Anonga Mabuda"
            position="Technical Writer & Researcher "
          />
          <Home3TeacherCard
            img="assets/images/home3/teacher/5.png"
            name5="Governor Khoza"
            position="Front-End Developer"
          />

        </div>
        {/* <div className="row">
          <div className="col-md-12 text-center">
            <Link
              to="/instructor"
              className={btnClass ? btnClass : "SkillUplms-btn-3"}
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
