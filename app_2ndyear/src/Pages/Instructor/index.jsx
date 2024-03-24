import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import TeacherCard from "../../Component/Cards/TeacherCard";
import GotoTop from "../../Component/GotoTop";

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
        <Banner title="Instructor" background="assets/images/banner.jpg" />
        <section className="instructor-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="sec-title mb-15">
                  <span>Classes Taught by</span> Real Creators
                </h2>
                <p className="sec-desc">
                  Online education is a flexible instructional delivery system
                  that encompasses any
                  <br /> kind of learning that takes place via the Internet.
                </p>
              </div>
            </div>
            <div className="row">
              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/2.png",
                  name: "Hugh Saturation",
                  subject: "Photographer",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/1.png",
                  name: "Dianne Ameter",
                  subject: "Illustrator",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/3.png",
                  name: "Jim Séchen",
                  subject: "Stylist & Author",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/4.png",
                  name: "Eric Widget",
                  subject: "Designer",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/1.png",
                  name: "Dianne Ameter",
                  subject: "Illustrator",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/2.png",
                  name: "Hugh Saturation",
                  subject: "Photographer",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/3.png",
                  name: "Jim Séchen",
                  subject: "Stylist & Author",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/4.png",
                  name: "Eric Widget",
                  subject: "Designer",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/1.png",
                  name: "Dianne Ameter",
                  subject: "Illustrator",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/2.png",
                  name: "Hugh Saturation",
                  subject: "Photographer",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/3.png",
                  name: "Jim Séchen",
                  subject: "Stylist & Author",
                }}
              />

              <TeacherCard
                teacher={{
                  img: "assets/images/home2/teacher/4.png",
                  name: "Eric Widget",
                  subject: "Designer",
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
