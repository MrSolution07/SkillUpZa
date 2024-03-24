import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import About from "../../Component/About";
import Testimonial from "../../Component/Testimonials/Testimonial";
import Customer from "../../Component/Customer/Customer";
import Event from "../../Component/Event/Event";
import GotoTop from "../../Component/GotoTop";

function About2() {
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
        <Banner title="About Classic" background="assets/images/banner.jpg" />
        <About />
        <Testimonial />
        <Event />
        <Customer />
        <Footer getStart={true} />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default About2;
