
// // import React from "react";
// // import PropTypes from "prop-types";
// // import { Link } from "react-router-dom";
// // import axios from "axios";

// // function CoursesCardDashboard({ course, className, swiper }) {
// //   const handleAddCourse = async () => {
// //     try {
// //       const addedCourses = JSON.parse(localStorage.getItem("addedCourses")) || [];
// //       addedCourses.push(course);
// //       localStorage.setItem("addedCourses", JSON.stringify(addedCourses));
// //       const username = localStorage.getItem("username");
// //       const response = await axios.post('  https://cannonball-can.000webhostapp.com/add_course.php', {
// //         username: username,
// //         courseName: course.title,
        
// //       });
// //       const data = response.data;
// //       if (data.success) {
// //         localStorage.setItem("courseName", JSON.stringify(course));
// //         alert("Course added successfully!");
// //       } else {
// //         alert("Error adding course: " + data.message);
// //       }
// //     } catch (error) {
// //       console.error('Error adding course:', error);
// //       alert('Error adding course');
// //     }
// //   };

// //   return (
// //     <div className={!swiper ? "col-lg-4 col-md-6" : ""}>
// //       <div className={`${className ? className : "feature-course-item-3"}`}>
// //         <div className="fcf-thumb">
// //           <img src={course.img3} alt="" />  
// //           <Link to="#" className="enroll" onClick={handleAddCourse}>
// //             ADD
// //           </Link>
// //         </div>
// //         <div className="fci-details">
// //           <Link className="c-cate">{course.title}</Link>
// //           <h4>{course.heading}</h4>
// //           <div className="author">
// //             <Link></Link>
// //           </div>
// //           <div className="price-rate">
// //             <div className="course-price">
// //               {course.offerPrice}
// //               <span>R{course.price}</span>
// //             </div>
// //             <div className="ratings">
// //               <i className="icon_star"></i>
// //               <span>
// //                 {course.rating} ({course.reviews})
// //               </span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // CoursesCardDashboard.propTypes = {
// //   course: PropTypes.object,
// //   className: PropTypes.string,
// //   swiper: PropTypes.bool,
// // };

// // export default CoursesCardDashboard;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";

function CoursesCardDashboard({ course, className, swiper }) {
  const handleAddCourse = async () => {
    try {
      const username = localStorage.getItem("username");
      const response = await axios.post('https://skill-up-za-a416b38edeac.herokuapp.com/add_course.php', {
        username: username,
        courseName: course.title,
        courseHeading: course.heading,
        coursePrice: course.price,
        courseOfferPrice: course.offerPrice,
        courseRating: course.rating,
        courseReviews: course.reviews,
        courseImg: course.img3,
        //courseDescription: course.description, // Assuming this field exists
      });
      const data = response.data;
      if (data.success) {
        alert("Course added successfully!");
      } else {
        alert("Course added successfully!");
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
  course: PropTypes.object.isRequired,
  className: PropTypes.string,
  swiper: PropTypes.bool,
};

export default CoursesCardDashboard;
