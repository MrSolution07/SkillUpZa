import { useEffect, useState } from "react";
import Preloader from "../../Components/Preloader";
import Header from "../../Components/Headers";
import HomeHero from "../../Components/Heros/Home-hero";
import PopularCourse from "../../Components/Course/PopularCourse";
import Feature from "../../Components/Features/Feature";
import Event from "../../Components/Event/Event";
import Footer from "../../Components/Footer/Footer";
import GotoTop from "../../Components/GotoTop";

function Home() {
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
        <Header logo="assets/images/logo.png" joinBtn={true} />
        <HomeHero />
        <PopularCourse course={true} heading={true} />
        <Feature />
        {/* <Cta /> */}
        {/* <Video /> */}
        <Event /> 
        {/* <Package />
        <Blogs /> */}
        <Footer getStart={true} />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Home;
