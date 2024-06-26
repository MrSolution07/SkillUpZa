import { useEffect, useState } from "react";
import Preloader from "../../Components/Preloader";
import Header from "../../Components/Headers";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import { course } from "../../Data/course";
import FeatureCourseCard from "../../Components/Cards/FeatureCourseCard";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import LatestCourseCard from "../../Components/Cards/LatestCourseCard";
import ReviewForm from "../../Components/Form/ReviewForm";
import GotoTop from "../../Components/GotoTop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


function CourseSingle() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeView, setActiveView] = useState("Overview");
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return "<span className=" + className + " myPagination" + "></span>";
    },
  };
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
        <Banner title="Courses Single" background="assets/images/banner5.jpg" />
        {/* course section start */}
        <section className="course-details-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="single-course-area">
                  <div className="course-top">
                    <h4>Using Creative Problem Solving</h4>
                    <div className="course-meta">
                      <div className="author">
                        <img src="assets/images/home3/course/a1.png" alt="" />
                        <span>Teacher</span>
                        {/* <Link to="/">Anthony</Link> */}
                      </div>
                      <div className="categories">
                        <span>Categories:</span>
                        <Link to="/">Art & Design</Link>
                      </div>
                      <div className="ratings">
                        <span>4.5 (9 Reviews)</span>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                        <i className="icon_star"></i>
                      </div>
                    </div>
                    <div className="course-price">
                      R75.00
                      <span>R92.00</span>
                    </div>
                  </div>
                  <div className="sc-thumb">
                    <img src="assets/images/single-course/1.jpg" alt="" />
                  </div>
                  <div className="course-tab-wrapper">
                    <ul className="course-tab-btn nav nav-tabs">
                      <li>
                        <a
                          onClick={(e) => setActiveView(e.target.innerText)}
                          className={activeView === "Overview" ? "active" : ""}
                        >
                          <i className="icon_ribbon_alt"></i>Overview
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => setActiveView(e.target.innerText)}
                          className={
                            activeView === "Curriculum" ? "active" : ""
                          }
                        >
                          <i className="icon_book_alt"></i>Curriculum
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => setActiveView(e.target.innerText)}
                          className={
                            activeView === "Instructors" ? "active" : ""
                          }
                        >
                          <i className="icon_profile"></i>Instructors
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => setActiveView(e.target.innerText)}
                          className={activeView === "Reviews" ? "active" : ""}
                        >
                          <i className="icon_star"></i>Reviews
                        </a>
                      </li>
                    </ul>
                    {/* Tab Content  */}
                    <div className="tab-content">
                      {/* Overview Tab  */}
                      {activeView === "Overview" && (
                        <div
                          className="tab-pane fade in show active"
                          id="overview"
                          role="tabpanel"
                        >
                          <div className="overview-content">
                          <h4>Art & Design for Problem Solvers: Unleash Your Creative Approach</h4>
                            <p>This course dives into the world of art and design, not just as creative expression, but as a powerful tool for problem-solving. You'll explore how design thinking methodologies and visual communication techniques can be applied to tackle real-world challenges across various disciplines.</p>

                            <p>
                              <b>What you'll learn: </b>
                              <b>Design Thinking Fundamentals:</b> Discover the design thinking process, a human-centered approach to problem-solving. Learn how to empathize with users, define problems, ideate solutions, prototype, and test your ideas iteratively.
                              <b>Visual Thinking and Communication:</b> Develop your visual vocabulary and storytelling skills. Explore tools like sketching, diagramming, and visual storytelling to communicate ideas effectively and engage your audience.
                              <b>Creativity and Innovation:</b> Cultivate a growth mindset and explore techniques to spark creative thinking. Learn to overcome creative blocks and develop a process for generating innovative solutions.
                              <b>Brainstorming and Ideation:</b> Master brainstorming techniques to generate a multitude of creative solutions to any problem. Learn to evaluate ideas objectively and select the most promising ones for further development.
                              <b>Prototyping and User Testing:</b> Create low-fidelity prototypes to visualize and test your ideas quickly and cheaply. Learn to gather user feedback and iterate on your designs based on real-world insights.
                            </p>
                            <h4>Course Structure</h4>
                            <p>
                              The course will combine lectures, interactive workshops, and hands-on projects.
                              Lectures will introduce key concepts and frameworks for problem-solving through art and design.
                              Workshops will provide opportunities to apply these concepts through guided activities and group discussions.
                              Hands-on projects will allow you to tackle real-world design challenges and develop your creative problem-solving skills in a practical setting
                            </p>
                            <h4>Course Description</h4>
                            <ul>
                              <li>
                                <i className="icon_check_alt2"></i>Learn The
                                Latest Skills
                                <span>
                                  This course will provide you with the recent tools you need to gain knowledge and build on your expertise.
                                </span>
                              </li>
                              <li>
                                <i className="icon_check_alt2"></i>Earn a
                                Certificate or Degree
                                <span>
                                  Earn a certificate upon completion of this course to build on your CV.
                                </span>
                              </li>
                              <li>
                                <i className="icon_check_alt2"></i>Get Ready for
                                a Career
                                <span>
                                  Be ready for the workplace as this course will give you a comprehensive and practical understanding.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                      {/* Overview Tab  */}
                      {/* Curriculum Tab  */}
                      {activeView === "Curriculum" && (
                        <div
                          className="tab-pane fade in show active"
                          id="curriculum"
                          role="tabpanel"
                        >
                          <div className="curriculum-item" id="id_1">
                            <div className="card-header" id="cc_1">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#acc_1"
                                  aria-expanded="true"
                                  aria-controls="acc_1"
                                >
                                  Part 1: Foundations & Exploration (Weeks 1-4)
                                </button>
                              </h5>
                            </div>
                            <div
                              id="acc_1"
                              className="collapse show"
                              aria-labelledby="cc_1"
                              data-parent="#id_1"
                            >
                              <div className="card-body">
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">
                                    Develop an understanding of design thinking principles (empathize, define, ideate, prototype, test)
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                      02 hour
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">
                                      Explore various art and design movements and their approaches to problem-solving
      
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                      04 hour
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Experiment with different materials and techniques to generate ideas</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                      03 hour
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">
                                    Introduce the design thinking process through a fun, low-stakes challenge.
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                      03 hour
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Creative Problem Solving - Course
                                      Assessment
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                      01 hour
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="curriculum-item" id="id_2">
                            <div className="card-header" id="cc_2">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#acc_2"
                                  aria-expanded="true"
                                  aria-controls="acc_2"
                                >
                                  Part 2: Deep Dive & Skill Building (Weeks 5-8)
                                </button>
                              </h5>
                            </div>
                            <div
                              id="acc_2"
                              className="collapse show"
                              aria-labelledby="cc_2"
                              data-parent="#id_2"
                            >
                              <div className="card-body">
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link href="#">Refine critical thinking skills for problem analysis and ideation
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link href="#" className="time">
                                      02 hour
                                    </Link>
                                    <Link href="#" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link href="#">
                                    Develop specific art and design skills relevant to chosen focus areas (e.g., sketching, user interface design, typography)
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link href="#" className="time">
                                      04 hour
                                    </Link>
                                    <Link href="#" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link href="#">Learn effective communication techniques to present design solutions
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link href="#" className="questions">
                                      4 questions
                                    </Link>
                                    <Link href="#" className="time">
                                      03 hour
                                    </Link>
                                    <Link href="#" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="curriculum-item" id="id_3">
                            <div className="card-header" id="cc_3">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#acc_3"
                                  aria-expanded="true"
                                  aria-controls="acc_3"
                                >
                                  Part 3:  Implementation & Reflection (Weeks 9-12)
                                </button>
                              </h5>
                            </div>
                            <div
                              id="acc_3"
                              className="collapse show"
                              aria-labelledby="cc_3"
                              data-parent="#id_3"
                            >
                              <div className="card-body">
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Implement chosen design solution through a final project
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                      02 hour
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">
                                    Reflect on the creative problem-solving process and learning outcomes
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                      04 hour
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item with-bg">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">Showcase and critique final projects in a professional setting</Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="questions">
                                      4 questions
                                    </Link>
                                    <Link to="/" className="time">
                                      03 hour
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                                <div className="ci-item">
                                  <h5>
                                    <i className="icon_menu-square_alt2"></i>
                                    <Link to="/">
                                      Overall skills assessment 
                                    </Link>
                                  </h5>
                                  <div className="ci-tools">
                                    <Link to="/" className="time">
                                      03 hour
                                    </Link>
                                    <Link to="/" className="lock">
                                      <i className="icon_lock_alt"></i>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Curriculum Tab  */}
                      {/* Instructors Tab  */}
                      {activeView === "Instructors" && (
                        <div
                          className="tab-pane fade in show active"
                          id="instructors"
                          role="tabpanel"
                        >
                          <div className="teacher-item-3">
                            <div className="teacher-thumb">
                              <img
                                src="assets/images/single-course/i1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="teacher-meta">
                              <h5>
                                <Link to="/">Dianne Ameter</Link>
                              </h5>
                              <span>industrial designer</span>
                              <p>
                               Dianne Ameter will guide students through the design thinking process, emphasizing
                               empathy, ideation, prototyping, and iteration.  Students will learn how to use 
                               creative problem solving to approach challenges from a human-centered perspective, 
                               culminating in projects that address social or environmental needs.
                              </p>
                              <div className="teacher-social">
                                <a href="#">
                                  <i className="social_facebook"></i>
                                </a>
                                <a href="#">
                                <i>X</i>
                                </a>
                                <a href="#">
                                  <i className="social_linkedin"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="teacher-item-3">
                            <div className="teacher-thumb">
                              <img
                                src="assets/images/single-course/i2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="teacher-meta">
                              <h5>
                                <a href="#">Hugh Saturation</a>
                              </h5>
                              <span>Media artist and educator</span>
                              <p>
                              Through his course, "Hacking the System: Creative Problem Solving in the Digital Age," plus a mix of lectures, workshops, and guest speakers, Hugh Saturation will introduce students 
                              to creative problem-solving techniques like brainstorming, lateral thinking, and design 
                              thinking.  The course will also delve into using digital tools and platforms to amplify 
                              creative solutions.
                              </p>
                              <div className="teacher-social">
                                <a href="#">
                                  <i className="social_facebook"></i>
                                </a>
                                {/* twitter acc */}
                                <a href="#"> 
                                  <i>X</i>
                                </a>
                                <a href="#">
                                  <i className="social_linkedin"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="teacher-item-3">
                            <div className="teacher-thumb">
                              <img
                                src="assets/images/single-course/i3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="teacher-meta">
                              <h5>
                                <Link to="/">Jim Séchen</Link>
                              </h5>
                              <span>Multidisciplinary artist and educator</span>
                              <p>
                              Jim Séchen will guide students through the design thinking process,
                              emphasizing empathy, ideation, prototyping, and iteration.  Students will 
                              learn how to use creative problem solving to approach challenges from a 
                              human-centered perspective, culminating in projects that address social or 
                              environmental needs.
                              </p>
                              <div className="teacher-social">
                                <a href="#">
                                  <i className="social_facebook"></i>
                                </a>
                                <a href="#">
                                <i>X</i>
                               </a>
                                <a href="#">
                                  <i className="social_linkedin"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Instructors Tab  */}
                      {/* Reviews Tab  */}
                      {activeView === "Reviews" && (
                        <div
                          className="tab-pane fade in show active"
                          id="reviews"
                          role="tabpanel"
                        >
                          <div className="reviw-area">
                            <h4>Reviews</h4>
                            <div className="reating-details">
                              <div className="average-rate">
                                <p>Average Rating</p>
                                <div className="rate-box">
                                  <h2>4.8</h2>
                                  <div className="ratings">
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                    <i className="icon_star"></i>
                                  </div>
                                  <span>4 Reviews</span>
                                </div>
                              </div>
                              <div className="details-rate">
                                <p>Detailed Rating</p>
                                <div className="detail-rate-box">
                                  <div className="rate-item">
                                    <p>5</p>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "100%" }}
                                        aria-valuenow="100"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                    <span>100%</span>
                                  </div>
                                  <div className="rate-item">
                                    <p>4</p>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "30%" }}
                                        aria-valuenow="30"
                                        aria-valuemin="0"
                                        aria-valuemax="30"
                                      ></div>
                                    </div>
                                    <span>30%</span>
                                  </div>
                                  <div className="rate-item">
                                    <p>3</p>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "20%" }}
                                        aria-valuenow="20"
                                        aria-valuemin="0"
                                        aria-valuemax="20"
                                      ></div>
                                    </div>
                                    <span>20%</span>
                                  </div>
                                  <div className="rate-item">
                                    <p>2</p>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "10%" }}
                                        aria-valuenow="10"
                                        aria-valuemin="0"
                                        aria-valuemax="10"
                                      ></div>
                                    </div>
                                    <span>10%</span>
                                  </div>
                                  <div className="rate-item">
                                    <p>1</p>
                                    <div className="progress">
                                      <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "0%" }}
                                        aria-valuenow="0"
                                        aria-valuemin="0"
                                        aria-valuemax="0"
                                      ></div>
                                    </div>
                                    <span>0%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="review-rating">
                              <h5>Comments ( 3 )</h5>
                              <ol>
                                <li>
                                  <div className="single-comment">
                                    <img
                                      src="assets/images/single-course/r1.png"
                                      alt=""
                                    />
                                    <h5>
                                      <Link to="/">Sandy Shoreside</Link>
                                    </h5>
                                    <span>September 8, 2023 at 9:22 am</span>
                                    <div className="comment">
                                      <p>
                                      "Hacking the System" sounded a bit out there at first, but Mr Saturation is a genius.  The 
                                       class showed me how my coding skills can be used for more than just building websites. 
                                       We learned how to think outside the box and use technology to tackle problems in 
                                       innovative ways.  The guest speakers were amazing, and the projects were challenging
                                       but super rewarding. 
                                      </p>
                                    </div>
                                    <div className="ratings">
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                    </div>
                                    <div className="c-border"></div>
                                  </div>
                                </li>
                                <li>
                                  <div className="single-comment">
                                    <img
                                      src="assets/images/single-course/r2.png"
                                      alt=""
                                    />
                                    <h5>
                                      <Link to="/">Jehkiey Chen</Link>
                                    </h5>
                                    <span>March 14, 2024 at 10:13 am</span>
                                    <div className="comment">
                                      <p>
                                      Ms. Dianne's "Design Thinking for Change" was a solid 4 stars! We tackled real issues 
                                      creatively, and the process felt practical. I just wished there was a bit more on how to 
                                      actually implement those solutions in the real world. Still, great experience - my design 
                                      skills can make a difference!
                                      </p>
                                    </div>
                                    <div className="ratings">
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                      <span>
                                        <i className="icon_star"></i>
                                      </span>
                                    </div>
                                    <div className="c-border"></div>
                                  </div>
                                </li>
                                <li>
                                  <div className="single-comment">
                                    <img
                                      src="assets/images/single-course/r3.png"
                                      alt=""
                                    />
                                    <h5>
                                      <Link to="/">Barb Dwyer</Link>
                                    </h5>
                                    <span>April 16, 2024 at 12:15 pm</span>
                                    <div className="comment">
                                      <p>
                                        Mr. Séchens' course introduced some interesting concepts about combining art and design
                                        disciplines.  Exploring areas like theater set design and animation alongside illustration
                                        was refreshing, and it definitely opened my eyes to how these fields can inspire each 
                                        other.  I feel somewhat more confident approaching design projects with a broader 
                                        perspective, which could be helpful in the job market.

                                        However, the class lacked depth in some areas.  While we touched on various disciplines, I 
                                        would have liked a more thorough exploration of how to truly integrate them into cohesive 
                                        design solutions. Overall, it was a decent springboard, but it could have benefited from 
                                        a more focused approach.
                                      </p>
                                    </div>
                                    <div className="ratings">
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                      <i className="icon_star"></i>
                                      <span>
                                        <i className="icon_star"></i>
                                        <i className="icon_star"></i>
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              </ol>
                            </div>
                            <div className="review-form-area">
                              <h5>Leave a Comment</h5>
                              <div className="comment-form">
                                <ReviewForm />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/*  Reviews Tab  */}
                    </div>
                    {/* Tab Content  */}
                  </div>
                  {/* share link start  */}
                  <div className="post-share">
                    <h5>Share:</h5>
                    
                    <a className="fac" href="https://www.facebook.com/profile.php?id=61559534575921">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a className="twi" href="https://x.com/_Skill_Up_/status/1784949119582195767?t=PPYZjB1fn0GIJJ5XNoYBKw&s=19">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                  <a className="insta" href="https://www.instagram.com/skillupza/">
                  <FontAwesomeIcon icon={faInstagram} />
                 </a>
                  </div>
                  {/* share link end  */}
                  <div className="related-course">
                    <h3>Related Courses</h3>
                    <Swiper
                      spaceBetween={20}
                      pagination={pagination}
                      modules={[Pagination]}
                      className="mySwiper mySwiper3 "
                      breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                      }}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    >
                      {/* Single Slider item  */}
                      <div className="related-course-slider">
                        {course?.map((item) => (
                          <SwiperSlide key={item.id}>
                            <FeatureCourseCard
                              className="feature-course-item-4"
                              course={item}
                              swiper={true}
                            />
                          </SwiperSlide>
                        ))}
                      </div>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="course-sidebar">
                  <aside className="widget">
                    <div className="info-course">
                      <ul>
                        <li>
                          <i className="icon_house_alt"></i>
                          <span>Instructor: </span> Justin Case
                        </li>
                        <li>
                          <i className="icon_document_alt"></i>
                          <span>Lectures: </span> 14
                        </li>
                        <li>
                          <i className="icon_clock_alt"></i>
                          <span>Duration: </span> 10 weeks
                        </li>
                        <li>
                          <i className="icon_profile"></i>
                          <span>Enrolled: </span> 75 students
                        </li>
                        <li>
                          <i className="icon_cog"></i>
                          <span>Language: </span> English
                        </li>
                        <li>
                          <i className="icon_calendar"></i>
                          <span>Deadline: </span> 16 April 2020
                        </li>
                      </ul>
                      <Link className="SkillUplms-btn" to="/Register">
                        Enroll Course
                      </Link>
                    </div>
                  </aside>
                  <aside className="widget">
                    <h3 className="widget-title">Latest Courses</h3>
                    <LatestCourseCard
                      img="assets/images/course/1.jpg"
                      name="Using creative problem Solving"
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
                      offerPrice="46.00"
                    />
                    <LatestCourseCard
                      img="assets/images/course/4.jpg"
                      name="Business Analytics and Economics."
                      price="94.00"
                      offerPrice="74.00"
                    />
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* course section end  */}
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default CourseSingle;
