import { useEffect, useState } from "react";
import Preloader from "../../Components/Preloader";
import Header from "../../Components/Headers";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import { course } from "../../Data/course";
import FeatureCourseCard from "../../Components/Cards/FeatureCourseCard";
import { Link } from "react-router-dom";
import CourseListViewV2 from "../../Components/Cards/CourseListViewV2";
import LatestCourseCard from "../../Components/Cards/LatestCourseCard";
import FilterForm from "../../Components/Form/FilterForm";
import GotoTop from "../../Components/GotoTop";

function Course3() {
  const [isLoading, setIsLoading] = useState(true);
  const [data_to_show, set_data_to_show] = useState(course);
  const [activeView, setActiveView] = useState("grid");
  let content = undefined;

  function handleCourseFilterClickedBox(filter) {
    filter = filter.toLowerCase();
    let filtered_data = data_to_show.filter(i => i.title.toLowerCase() === filter.toLowerCase());
    console.log(filtered_data);
    set_data_to_show(filtered_data);
  }

  useEffect(() => {
    setIsLoading(false);
   }, [isLoading]);


  if (isLoading) {
    content = <Preloader />;
  } else {
    content = (
      <>


        <Footer getStart={true} />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Course3;
