import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import { course } from "../../Data/course";
import FeatureCourseCard from "../../Component/Cards/FeatureCourseCard";
import { Link } from "react-router-dom";
import CourseListViewV2 from "../../Component/Cards/CourseListViewV2";
import LatestCourseCard from "../../Component/Cards/LatestCourseCard";
import FilterForm from "../../Component/Form/FilterForm";
import GotoTop from "../../Component/GotoTop";

function Course3() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeView, setActiveView] = useState("grid");
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
        <Banner title="Courses Grid" background="assets/images/banner4.jpg" />
        <section className="coursepage-section-2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="toolbar-wrapper-2">
                  <ul className="toolbar-btn nav nav-tabs">
                    <li>
                      <a
                        className={activeView === "grid" ? "active" : ""}
                        onClick={() => setActiveView("grid")}
                        data-toggle="tab"
                      >
                        <i className="icon_grid-2x2"></i>Grid
                      </a>
                    </li>
                    <li style={{ marginLeft: "5px" }}>
                      <a
                        onClick={() => setActiveView("list")}
                        className={activeView === "list" ? "active" : ""}
                        data-toggle="tab"
                      >
                        <i className="icon_menu"></i>List
                      </a>
                    </li>
                  </ul>
                  <div className="sorting">
                    <p>Sort by:</p>
                    <select name="orderby" className="orderby">
                      <option value="menu_order" defaultValue="selected">
                        Default
                      </option>
                      <option value="new">Newest Course</option>
                      <option value="popular">Popular Course</option>
                      <option value="rating">Average Rating</option>
                      <option value="price">Low to High</option>
                      <option value="price-desc">High to Low</option>
                    </select>
                  </div>
                  <form className="search-box" method="post" action="#">
                    <input
                      type="search"
                      name="s"
                      placeholder="Search Courses..."
                    />
                    <button type="submit">
                      <i className="ti-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-9">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show in active"
                    style={{
                      display: "flex",
                      flexDirection: activeView === "list" && "column",
                      flexWrap: "wrap",
                      gap: activeView === "list" && "30px",
                    }}
                  >
                    <div className="row">
                      {course.map((item) =>
                        activeView === "grid" ? (
                          <FeatureCourseCard
                            course={item}
                            key={item.id}
                            className="feature-course-item-4"
                          />
                        ) : (
                          <CourseListViewV2 key={item.id} course={item} />
                        )
                      )}
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="bisylms-pagination">
                          <span className="current">01</span>
                          <a>02</a>
                          <a className="next">
                            next<i className="arrow_right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="course-sidebar">
                  <aside className="widget">
                    <h3 className="widget-title">Course Categories</h3>
                    <ul>
                      <li>
                        <Link to="/">Web Design</Link>
                      </li>
                      <li>
                        <Link to="/">Marketing</Link>
                      </li>
                      <li>
                        <Link to="/">Frontend</Link>
                      </li>
                      <li>
                        <Link to="/">IT &amp; Software</Link>
                      </li>
                      <li>
                        <Link to="/">Photography</Link>
                      </li>
                      <li>
                        <Link to="/">Technology</Link>
                      </li>
                      <li>
                        <Link to="/">General</Link>
                      </li>
                    </ul>
                  </aside>
                  <aside className="widget widget-filter">
                    <h3 className="widget-title">Price Filter</h3>
                    <FilterForm />
                  </aside>
                  <aside className="widget">
                    <h3 className="widget-title">Latest Courses</h3>
                    <LatestCourseCard
                      img="assets/images/course/1.jpg"
                      name="Using creative problem Solving"
                      price="24.00"
                    />
                    <LatestCourseCard
                      img="assets/images/course/2.jpg"
                      name="Fundamentals of UI Design"
                      price="76.00"
                      offerPrice="Free"
                    />
                    <LatestCourseCard
                      img="assets/images/course/3.jpg"
                      name="Making music Other people"
                      price="76.00"
                      offerPrice="$46"
                    />
                    <LatestCourseCard
                      img="assets/images/course/4.jpg"
                      name="Learning jQuery mobile."
                      price="94.00"
                      offerPrice="$74.00"
                    />
                  </aside>
                </div>
              </div>
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

export default Course3;
