//  content of the jobs 
import { useEffect, useState } from "react";
import Preloader from "../../Components/Preloader";
import Header from "../../Components/Headers";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import TeacherCard from "../../Components/Cards/TeacherCard";
import GotoTop from "../../Components/GotoTop";

function Instructor() {
  const [isLoading, setIsLoading] = useState(true);
  let content = undefined;
  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  if (isLoading) {
    content = <Preloader />;
  } else {
    content = (
      <>
        <Header logo="assets/images/logo4.png" joinBtn={true} />
        <Banner title="Instructor" background="assets/images/bannerjob.jpg" />
        <section className="instructor-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="sec-title mb-15">
                  <span></span> Jobs
                </h2>
                <p className="sec-desc">
                  Explore available job vacancies
                </p>
              </div>
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
          </div>
        </section>
        <Footer getStart={true} />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Instructor;
