// import React from "react";

// import "../../../../public/assets/css/theme.css";
// import "../../../../public/assets/css/animate.css";
// import "../../../../public/assets/css/bootstrap.css";
// import "../../../../public/assets/css/responsive.css";
// import "../../../../public/assets/css/preset.css";
// import "../../../../public/assets/css/bootstrap.css";
// import Homeheader from "../../../Components/Social/Header";



// function Mycourses() {
//   const addedCourses = JSON.parse(localStorage.getItem("addedCourses")) || [];

//   return (
//   <>
//     <Homeheader/>
//       <div>
//         <h2>My Courses</h2>
//         <div className="col-lg-4 col-md-6">
//           {addedCourses.map((course, index) => (
//             <div key={index} className="feature-course-item-3">
//               <div className="fcf-thumb">
//                 <img src={course.img3} alt="" />
//               </div>
//               <div className="fci-details">
//                 <h3>{course.title}</h3>
//                 <p>{course.heading}</p>
//                 <span className="price-rate" >R{course.price}</span>
//                 {/* Render other details of the course lesedi can make it */}
//                 <p>{course.desscription}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Mycourses;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Homeheader from "../../../Components/Social/Header";

import "../../../../public/assets/css/theme.css";
import "../../../../public/assets/css/animate.css";
import "../../../../public/assets/css/bootstrap.css";
import "../../../../public/assets/css/responsive.css";
import "../../../../public/assets/css/preset.css";

function Mycourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const username = localStorage.getItem("username");
        const response = await axios.get("   http://skill-up-za.infinityfreeapp.com/getCourse.php", {
          params: { username }
        });
        const data = response.data;
        if (data.success) {
          setCourses(data.courses);
        } else {
          alert("Error fetching courses: " + data.message);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
        alert('Error fetching courses');
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <Homeheader />
      <div>
        <h2>My Courses</h2>
        <div className="col-lg-4 col-md-6">
          {courses.map((course, index) => (
            <div key={index} className="feature-course-item-3">
              <div className="fcf-thumb">
                <img src={course.img3} alt="" />
              </div>
              <div className="fci-details">
                <h3>{course.title}</h3>
                <p>{course.heading}</p>
                <span className="price-rate">R{course.price}</span>
                {/* Render other details of the course */}
                <p>{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Mycourses;
