function About() {
  return (
    <section className="abpage-section-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="ab-thumb">
              <img src="assets/images/home2/1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="ab-content-2">
              <h3>What will you Discover?</h3>
              <p>
                Explore new skills, deepen existing passions, and get lost in
                creativity. What you find just might surprise and inspire you.
              </p>
              <a className="read-more" href="#">
                Browse Classes<i className="arrow_right"></i>
              </a>
            </div>
            <div className="fact-wrapper">
              <div className="funfact-item text-center">
                <img src="assets/images/home2/f1.png" alt="" />
                <h2>
                  <span data-counter="24200" className="timer">
                    24200
                  </span>
                  +
                </h2>
                <p>Students</p>
              </div>
              <div className="funfact-item text-center">
                <img src="assets/images/home2/f2.png" alt="" />
                <h2>
                  <span data-counter="6214" className="timer">
                    6214
                  </span>
                  +
                </h2>
                <p>Courses</p>
              </div>
              <div className="funfact-item text-center">
                <img src="assets/images/home2/f3.png" alt="" />
                <h2>
                  <span data-counter="2500" className="timer">
                    2500
                  </span>
                  +
                </h2>
                <p>Award</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
