import React from "react";

import "../../../../public/assets/css/theme.css";
import "../../../../public/assets/css/animate.css";
import "../../../../public/assets/css/bootstrap.css";
import "../../../../public/assets/css/responsive.css";
import "../../../../public/assets/css/preset.css";
import "../../../../public/assets/css/bootstrap.css";
import Homeheader from "../../../Components/Social/Header";



function Mycourses() {
  const addedCourses = JSON.parse(localStorage.getItem("addedCourses")) || [];

  return (
  <>
    <Homeheader/>
      <div>
        <h2>My Courses</h2>
        <div className="col-lg-4 col-md-6">
          {addedCourses.map((course, index) => (
            <div key={index} className="feature-course-item-3">
              <div className="fcf-thumb">
                <img src={course.img3} alt="" />
              </div>
              <div className="fci-details">
                <h3>{course.title}</h3>
                <p>{course.heading}</p>
                <span className="price-rate" >R{course.price}</span>
                {/* Render other details of the course lesedi can make it */}
                <p>{course.desscription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Mycourses;
