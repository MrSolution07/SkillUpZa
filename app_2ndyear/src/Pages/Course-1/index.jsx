import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import { course } from "../../Data/course";
import FeatureCard from "../../Component/Cards/FeatureCard";
import CourseListView from "../../Component/Cards/CourseListView";
import CallAction from "../../Component/CallAction";
import GotoTop from "../../Component/GotoTop";

function Course1() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeView, setActiveView] = useState("grid");
  const [activeCategory, setActiveCategory] = useState("All");
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
        <Banner title="Courses Grid" background="assets/images/banner3.jpg" />
        <section className="coursepage-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="toolbar-wrapper">
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
                    <li>
                      <a
                        className={activeView === "list" ? "active" : ""}
                        onClick={() => setActiveView("list")}
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
                </div>

                {/* tab content start  */}
                <div className="tab-content">
                  {activeView === "grid" ? (
                    <div
                      className={`tab-pane fade in ${
                        activeView === "grid" ? "show active" : ""
                      }`}
                      id="grid"
                      role="tabpanel"
                    >
                      {/* Filter Title */}
                      <ul className="shaf-filter course-filter">
                        <li
                          className={activeCategory === "All" ? "active" : ""}
                          onClick={(e) => setActiveCategory(e.target.innerText)}
                        >
                          All
                        </li>
                        <li
                          className={
                            activeCategory === "Web Development" ? "active" : ""
                          }
                          onClick={(e) => setActiveCategory(e.target.innerText)}
                        >
                          Web Development
                        </li>
                        <li
                          className={
                            activeCategory === "Architecture" ? "active" : ""
                          }
                          onClick={(e) => setActiveCategory(e.target.innerText)}
                        >
                          Architecture
                        </li>
                        <li
                          className={
                            activeCategory === "Engineering" ? "active" : ""
                          }
                          onClick={(e) => setActiveCategory(e.target.innerText)}
                        >
                          Engineering
                        </li>
                        <li
                          className={
                            activeCategory === "Data Science" ? "active" : ""
                          }
                          onClick={(e) => setActiveCategory(e.target.innerText)}
                        >
                          Data Science
                        </li>
                      </ul>
                      {/* Filter Title  */}

                      {/* Filter Content  */}
                      <div className="row shafull-container">
                        {course
                          ?.filter((course) =>
                            activeCategory === "All"
                              ? course
                              : course.category.find(
                                  (item) => item === activeCategory
                                )
                          )
                          .map((course) => (
                            <FeatureCard course={course} key={course.id} />
                          ))}
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <div className="bisylms-pagination">
                            <span className="current">01</span>
                            <a href="#">02</a>
                            <a className="next" href="#">
                              next<i className="arrow_right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`tab-pane fade in ${
                        activeView === "list" ? "show active" : ""
                      }`}
                      style={{
                        gap: "30px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      id="list"
                      role="tabpanel"
                    >
                      {course?.map((item) => (
                        <CourseListView
                          key={item.id}
                          course={item}
                          className="ci-3-color"
                        />
                      ))}
                    </div>
                  )}
                  {/* tab content end  */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <CallAction btnClass="bisylms-btn" />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Course1;
