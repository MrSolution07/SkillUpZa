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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quos minus molestias odit possimus accusantium itaque illo quidem nostrum quae reiciendis labore, 
              ratione, veritatis tenetur adipisci quibusdam ipsum quisquam vitae odio!
            </p>
          </div>
        </div>
        <div className="my-row">
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
            img="assets/images/home3/teacher/4.png"
            name="Mr Solution"
            position="Software Engineer"
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
