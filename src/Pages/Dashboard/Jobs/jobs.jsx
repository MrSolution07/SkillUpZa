
import TeacherCard from "../../../Components/Cards/TeacherCard";
import DashboardLayout from "../layout";
function Jobs() {
  return (
    <DashboardLayout>
            <div className="row">
                <h2 className="sec-title mb-15">
                  <span></span> 
                </h2>
            </div>

            <div className="row">
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
        
        </DashboardLayout>
    )
}

    export default Jobs;