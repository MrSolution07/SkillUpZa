import React, { useState, useEffect } from 'react';
import TeacherCard from "../../../Components/Cards/TeacherCard";

import DashboardLayout from "../layout";
function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('   https://skill-up-za-a416b38edeac.herokuapp.com/getJobs.php')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setJobs(data.jobListings);
        } else {
          console.error('Error fetching jobs:', data.message);
        }
      })
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  return (
    <>
    <DashboardLayout>
            <div className="container" style={{marginTop:"10%"}}>
            <div className="row">
                <h2 className="sec-title mb-15">
                  <span></span> 
                </h2>
            </div>

            <div className="row">
            {jobs.map((job, index) => (
          <TeacherCard
            key={index}
            teacher={{
              img: `data:image/jpeg;base64,${job.jobImage}`,
              name: job.businessName,
              subject: job.jobName,
            }}
          />
        ))}
              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/1.png",
                  name: "IBM",
                  subject: "Quantum education and Workforce Intern",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/2.png",
                  name: "Safe Growth",
                  subject: "Business Accountant",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/3.png",
                  name: "Tonga Digital",
                  subject: "HR and Marketing Executive",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/4.png",
                  name: "Multichoice",
                  subject: "Customer Quality Manager",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/5.png",
                  name: "Pepsi",
                  subject: "Field Agronomist",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/6.png",
                  name: "NTT",
                  subject: "Digital Developer",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/7.png",
                  name: "Kargo Logistics",
                  subject: "Logistics Coordinator",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/8.png",
                  name: "ReMax",
                  subject: "Real-Estate Agent",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/6.png",
                  name: "NTT",
                  subject: "Financial Accountant",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/4.png",
                  name: "Multichoice",
                  subject: "Senior Programme Risk Assurance Specialist",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/1.png",
                  name: "IBM",
                  subject: "Solution Manager",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/3.png",
                  name: "Tonga Digital",
                  subject: "Graphic Designer",
                }}
              />
            </div>
          </div>
          </DashboardLayout>
    </>

        
    )
}

export default Jobs;



// import React, { useState, useEffect } from 'react';
// import TeacherCard from '../../../Components/Cards/TeacherCard';
// import Header from '../../../Components/Social/Header';

// function Jobs() {
  // const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   fetch('  https://cannonball-can.000webhostapp.com/getJobs.php')
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.success) {
  //         setJobs(data.jobListings);
  //       } else {
  //         console.error('Error fetching jobs:', data.message);
  //       }
  //     })
  //     .catch(error => console.error('Error fetching jobs:', error));
  // }, []);

//   return (
//     <div className="container" style={{ marginTop: '10%' }}>
//       <Header />
//       <div className="row">
//         <h2 className="sec-title mb-15">
//           <span></span>
//         </h2>
//       </div>
//       <div className="row">
        // {jobs.map((job, index) => (
        //   <TeacherCard
        //     key={index}
        //     teacher={{
        //       img: `data:image/jpeg;base64,${job.jobImage}`,
        //       name: job.businessName,
        //       subject: job.jobName,
        //     }}
        //   />
        // ))}
//       </div>
      
//     </div>
//   );
// }

// export default Jobs;

