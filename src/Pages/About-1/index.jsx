import { useEffect, useState } from "react";
import Preloader from "../../Components/Preloader";
import Header from "../../Components/Headers";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import PopularCourse from "../../Components/Course/PopularCourse";
import Video from "../../Components/Video/Video";
import Cta from "../../Components/Cta/Cta";
import Home3Teacher from "../../Components/Teachers/Home3Teacher";
import Package from "../../Components/Package/Package";
import GotoTop from "../../Components/GotoTop";

function About1() {
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
        <Banner title="About Us" background="assets/images/banner.jpg" />
        {/* i spoke with users and they didn't like the complicity of the previous look */}
        {/* <PopularCourse /> */}
        {/* <Home3Funfact /> */}
        {/* <Package /> */}
        {/* <Cta />*/}
          
        <Home3Teacher className="teachers-section-3" btnClass="SkillUplms-btn" />
        
        
        <div style={{ textAlign: "center", fontSize: "18px", margin: "0 auto", paddingTop: "0", marginBottom: "18%",marginLeft:"150px"}}>

          <blockquote style={{ marginTop:"0px",width:"90%" }}>
          <p>Skill UpZA, founded in February 2024, is an innovative platform created by university students
            passionate about engaging and empowering the youth. Recognizing the challenges posed
            by the rising unemployment rate and economic decline, our mission is to provide accessible,
            high-quality education to help individuals enhance their skills and secure their future in the workforce.
            We offer a variety of courses and learning materials, all designed to equip our users with
            the tools they need to excel in today's competitive job market.</p>
          </blockquote>
        </div>
        <Cta />
        <Video />  
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default About1;
