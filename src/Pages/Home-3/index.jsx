import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";

import Home3Header from "../../Component/Headers/Home3Header";
import HomeThreeHero from "../../Component/Heros/HomeThreeHero";
import FeatureHome3 from "../../Component/Features/FeatureHome3";
import CourseHome3 from "../../Component/Course/CourseHome3";
import Home3Register from "../../Component/Register/Home3Register";
import FeatureCourse from "../../Component/Course/FeatureCourse";
import Home3Funfact from "../../Component/FunFact/Home3Funfact";
import Home3AppStore from "../../Component/AppStore/Home3AppStore";
import Home3Teacher from "../../Component/Teachers/Home3Teacher";
import CallAction from "../../Component/CallAction";
import Home3Footer from "../../Component/Footer/Home3Footer";
import GotoTop from "../../Component/GotoTop";

function Home3() {
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
        <Home3Header />
        <HomeThreeHero />
        <FeatureHome3 />
        <CourseHome3 />
        <Home3Register />
        <FeatureCourse />
        <Home3Funfact />
        <Home3AppStore />
        <Home3Teacher />
        <CallAction />
        <Home3Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Home3;
