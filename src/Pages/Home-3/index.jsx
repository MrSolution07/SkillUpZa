import { useEffect, useState } from "react";
import Preloader from "../../Components/Preloader";

import Home3Header from "../../Components/Headers/Home3Header";
import HomeThreeHero from "../../Components/Heros/HomeThreeHero";
import FeatureHome3 from "../../Components/Features/FeatureHome3";
import CourseHome3 from "../../Components/Course/CourseHome3";
import Home3Register from "../../Components/Register/Home3Register";
import FeatureCourse from "../../Components/Course/FeatureCourse";
import Home3AppStore from "../../Components/AppStore/Home3AppStore";
import Home3Teacher from "../../Components/Teachers/Home3Teacher";
import CallAction from "../../Components/CallAction";
import Home3Footer from "../../Components/Footer/Home3Footer";
import GotoTop from "../../Components/GotoTop";

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

