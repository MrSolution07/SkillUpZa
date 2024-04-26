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
                        <div className="SkillUplms-pagination">
                          <span className="current">01</span>
                          <Link to="/course-4"><a>02</a> </Link>
                          <Link to = "/course-4" className="next">
                            next<i className="arrow_right"></i>
                          </Link>
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
                        <Link to="">Web Design</Link>
                      </li>
                      <li>
                        <Link to="">Marketing</Link>
                      </li>
                      <li>
                        <Link to="">Frontend</Link>
                      </li>
                      <li>
                        <Link to="">IT &amp; Software</Link>
                      </li>
                      <li>
                        <Link to="">Photography</Link>
                      </li>
                      <li>
                        <Link to="">Technology</Link>
                      </li>
                      <li>
                        <Link to="">General</Link>
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
                      name="Algorithims and Data Structures"
                      price="64.00"
                      offerPrice="46.00"
                    />
                    <LatestCourseCard
                      img="assets/images/course/2.jpg"
                      name="Fundamentals of UI Design"
                      price="76.00"
                      offerPrice="Free"
                    />
                    <LatestCourseCard
                      img="assets/images/course/3.jpg"
                      name="Front-End Development with React"
                      price="76.00"
                      offerPrice="R46"
                    />
                    <LatestCourseCard
                      img="assets/images/course/4.jpg"
                      name="Business Analytics and Economics."
                      price="94.00"
                      offerPrice="R74.00"
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
