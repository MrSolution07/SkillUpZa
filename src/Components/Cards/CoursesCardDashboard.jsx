// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// function CoursesCardDashboard({ course, className, swiper }) {
//   const handleAddCourse = () => {
//     const existingCourses = JSON.parse(localStorage.getItem("addedCourses")) || [];
//     const updatedCourses = [...existingCourses, course];
//     localStorage.setItem("addedCourses", JSON.stringify(updatedCourses));
//     alert("Course added successfully!");
//   };

//   return (
//     <div className={!swiper ? "col-lg-4 col-md-6" : ""}>
//       <div className={`${className ? className : "feature-course-item-3"}`}>
//         <div className="fcf-thumb">
//           <img src={course.img3} alt="" />
//           <Link to="#" className="enroll" onClick={handleAddCourse}>
//             ADD
//           </Link>
//         </div>
//         <div className="fci-details">
//           <Link className="c-cate">{course.title}</Link>
//           <h4>{course.heading}</h4>
//           <div className="author">
//             <img src={course.author?.img} alt="" />
//             <Link></Link>
//           </div>
//           <div className="price-rate">
//             <div className="course-price">
//               {course.offerPrice}
//               <span>R{course.price}</span>
//             </div>
//             <div className="ratings">
//               <i className="icon_star"></i>
//               <span>
//                 {course.rating} ({course.reviews})
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// CoursesCardDashboard.propTypes = {
//   course: PropTypes.object,
//   className: PropTypes.string,
//   swiper: PropTypes.bool,
// };

// export default CoursesCardDashboard;




import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";

function CoursesCardDashboard({ course, className, swiper }) {
  const handleAddCourse = async () => {
    try {
      const username = localStorage.getItem("username");
      const response = await axios.post('http://localhost/DATABASE_DATA/add_course.php', {
        username: username,
        courseName: course.title,
      });
      const data = response.data;
      if (data.success) {
        alert("Course added successfully!");
      } else {
        alert("Error adding course: " + data.message);
      }
    } catch (error) {
      console.error('Error adding course:', error);
      alert('Error adding course');
    }
  };

  return (
    <div className={!swiper ? "col-lg-4 col-md-6" : ""}>
      <div className={`${className ? className : "feature-course-item-3"}`}>
        <div className="fcf-thumb">
          <img src={course.img3} alt="" />  
          <Link to="#" className="enroll" onClick={handleAddCourse}>
            ADD
          </Link>
        </div>
        <div className="fci-details">
          <Link className="c-cate">{course.title}</Link>
          <h4>{course.heading}</h4>
          <div className="author">
            <Link></Link>
          </div>
          <div className="price-rate">
            <div className="course-price">
              {course.offerPrice}
              <span>R{course.price}</span>
            </div>
            <div className="ratings">
              <i className="icon_star"></i>
              <span>
                {course.rating} ({course.reviews})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CoursesCardDashboard.propTypes = {
  course: PropTypes.object,
  className: PropTypes.string,
  swiper: PropTypes.bool,
};

export default CoursesCardDashboard;


