import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import PopularCourse from "../../Component/Course/PopularCourse";
import Home3Funfact from "../../Component/FunFact/Home3Funfact";
import Video from "../../Component/Video/Video";
import Cta from "../../Component/Cta/Cta";
import Home3Teacher from "../../Component/Teachers/Home3Teacher";
import Package from "../../Component/Package/Package";
import GotoTop from "../../Component/GotoTop";

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
        <PopularCourse />
        <Home3Funfact />
        <Package />
        <Cta />
        <Video />
        <Home3Teacher className="teachers-section-3" btnClass="bisylms-btn" />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default About1;
