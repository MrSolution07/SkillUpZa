import { useEffect, useState } from "react";
import Preloader from "../../Components/Preloader";
import Header from "../../Components/Headers";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import { blogs } from "../../Data/blog";
import BlogCard from "../../Components/Cards/BlogCard";

import DetailsSideBar from "../../Components/Blogs/DetailsSideBar";
import GotoTop from "../../Components/GotoTop";

function Blogs() {
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
        <Banner title="Blog Grid" background="assets/images/banner.jpg" />
        <section className="blogpage-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-7">
                <div className="row">
                  {blogs.map((blog) => (
                    <BlogCard blog={blog} key={blog.id} className="col-lg-6" />
                  ))}
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="SkillUplms-pagination">
                      <span className="current">01</span>
                      <a>02</a>
                      <a className="next">
                        next<i className="arrow_right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <DetailsSideBar />
            </div>
          </div>
        </section>
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Blogs;
