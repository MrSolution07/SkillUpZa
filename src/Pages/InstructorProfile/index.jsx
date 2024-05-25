
import { useEffect, useState } from "react";
import Preloader from "../../Components/Preloader";
import Header from "../../Components/Headers";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import { course } from "../../Data/course";
import FeatureCourseCard from "../../Components/Cards/FeatureCourseCard";
import { Link } from "react-router-dom";
import GotoTop from "../../Components/GotoTop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const purchased = [
  {
    id: 1,
    name: "Getting Started with LESS",
    date: "24/03/2020",
    grade: "50%",
    progress: "0%",
    status: "Finished",
    result: "Passed",
    link: "/",
  },
  {
    id: 2,
    name: "LMS Interactive Content",
    date: "24/03/2020",
    grade: "40%",
    progress: "0%",
    status: "Finished",
    result: "Passed",
    link: "/",
  },
  {
    id: 3,
    name: "From Zero to Hero with Nodejs",
    date: "14/04/2019",
    grade: "70%",
    progress: "0%",
    status: "running",
    result: "Failed",
    link: "/",
  },
  {
    id: 4,
    name: "Helping to change the world",
    date: "04/07/2018",
    grade: "50%",
    progress: "0%",
    status: "running",
    result: "Failed",
    link: "/",
  },
];

function InstructorProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Owned");
  const [filter, setFilter] = useState("All");
  const [activeData, setActiveData] = useState(purchased);
  //handle course data
  useEffect(() => {
    if (filter === "All") {
      setActiveData(purchased);
    } else if (filter === "Finished") {
      setActiveData(purchased.filter((data) => data.status === "Finished"));
    } else {
      setActiveData(purchased.filter((data) => data.result === filter));
    }
  }, [filter]);

  //handle Loading
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
        <Banner title="Profile" background="assets/images/banner.jpg" />
        <section className="profile-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="teacher-profile">
                  <div className="teacher-thumb">
                    <img src="assets/images/home2/teacher/1.png" alt="" />
                  </div>
                  <div className="teacher-meta">
                    <h5></h5>
                    <p></p>
                  </div>
                  <p>
                   
                  </p>
                  <div className="ab-social">
                    <h5>Follow Us</h5>
                    <a className="fac" href = "https://www.facebook.com/profile.php?id=61559534575921">
                      <i className="social_facebook"></i>
                    </a>
                    <a className="twi" href="https://x.com/_Skill_Up_/status/1784949119582195767?t=PPYZjB1fn0GIJJ5XNoYBKw&s=19">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                  <a className="insta" href="https://www.instagram.com/skillupza/">
                  <FontAwesomeIcon icon={faInstagram} />
                 </a>
                 </div>
                </div>
              </div>{" "}
              <div className="col-lg-9">
                {/* Tab Title */}
                <ul className="tab-title nav nav-tabs">
                  <li>
                    <a
                      className={activeTab === "Owned" ? "active" : ""}
                      onClick={(e) => setActiveTab(e.target.innerText)}
                    >
                      Owned
                    </a>
                  </li>
                  <li>
                    <a
                      className={activeTab === "Purchased" ? "active" : ""}
                      onClick={(e) => setActiveTab(e.target.innerText)}
                    >
                      Purchased
                    </a>
                  </li>
                </ul>
                {/* Tab Title */}
                <div className="tab-content">
                  {activeTab === "Owned" && (
                    <div className="tab-pane fade show in active">
                      <h3 className="course-title">My Courses</h3>
                      <div className="row">
                        {course.map((item) => (
                          <FeatureCourseCard
                            course={item}
                            key={item.id}
                            className="feature-course-item-4"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  {activeTab === "Purchased" && (
                    <div className="tab-pane fade show in active">
                      <ul className="restult-tab-title nav nav-tabs">
                        <li>
                          <a
                            className={filter === "All" && "active"}
                            onClick={(e) => setFilter(e.target.innerText)}
                          >
                            All
                          </a>
                        </li>
                        <li>
                          <a
                            className={filter === "Finished" && "active"}
                            onClick={(e) => setFilter(e.target.innerText)}
                          >
                            Finished
                          </a>
                        </li>
                        <li>
                          <a
                            className={filter === "Passed" && "active"}
                            onClick={(e) => setFilter(e.target.innerText)}
                          >
                            Passed
                          </a>
                        </li>
                        <li>
                          <a
                            className={filter === "Failed" && "active"}
                            onClick={(e) => setFilter(e.target.innerText)}
                          >
                            Failed
                          </a>
                        </li>
                      </ul>
                      {/* Tab Content  */}
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show in active"
                          id="all"
                          role="tabpanel"
                        >
                          <table className="result-table">
                            <thead>
                              {}
                              <tr>
                                <th className="course">Course</th>
                                <th className="date">Date</th>
                                <th className="grade">Passing Grade</th>
                                <th className="progres">Progress</th>
                              </tr>
                            </thead>
                            <tbody>
                              {activeData?.map((data) => (
                                <tr key={data.id}>
                                  <td className="course">
                                    <Link to={data.link}>{data.name}</Link>
                                  </td>
                                  <td className="date">{data.date}</td>
                                  <td className="grade">{data.grade}</td>
                                  <td className="progres">
                                    {data.progress} In Progress
                                  </td>
                                </tr>
                              ))}
                              <tr>
                                <td className="show-item">
                                  Displaying 1 to {activeData.length} of{" "}
                                  {activeData.length} courses.
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* Tab Content  */}
                    </div>
                  )}
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

export default InstructorProfile;
