import { useEffect, useState } from "react";
import Preloader from "../../../Components/Preloader";
import { course } from "../../../Data/course";
import CoursesCardDashboard from "../../../Components/Cards/CoursesCardDashboard";
import { Link } from "react-router-dom";
// import CoursesCardDashboard from "../../../Components/Cards/CoursesCardDashboard";
import Homeheader from "../../../Components/Social/Header";

function Mycourses() {
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
      <Homeheader/>
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
                            <CoursesCardDashboard
                            course={item}
                            key={item.id}
                            className="feature-course-item-4"
                          />
                        ) : (
                            <CoursesCardDashboard key={item.id} course={item} />
                        )
                      )}
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="SkillUplms-pagination">
                        <Link to="/Courses"><a>01</a> </Link>
                          <span className="current">02</span>
                          <Link to="/Courses" className="next">
                            back<i className="arrow_left"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  return content;
}

export default Mycourses;