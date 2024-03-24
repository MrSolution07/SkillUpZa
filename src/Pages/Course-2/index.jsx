import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import { course } from "../../Data/course";
import CourseListView from "../../Component/Cards/CourseListView";
import FeatureCourseCard from "../../Component/Cards/FeatureCourseCard";
import { Link } from "react-router-dom";
import GotoTop from "../../Component/GotoTop";

function Course2() {
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
        <Banner title="Courses Grid" background="assets/images/banner3.jpg" />
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
                      >
                        <i className="icon_grid-2x2"></i>Grid
                      </a>
                    </li>
                    <li style={{ marginLeft: "5px" }}>
                      <a
                        onClick={() => setActiveView("list")}
                        className={activeView === "list" ? "active" : ""}
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
                            className="feature-course-item-3 fci-3"
                          />
                        ) : (
                          <CourseListView key={item.id} course={item} />
                        )
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <Link to="/" className="bisylms-btn load-btn">
                        Load More<i className="icon_loading"></i>
                      </Link>
                    </div>
                  </div>
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

export default Course2;
