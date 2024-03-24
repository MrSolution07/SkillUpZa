function Home3Register() {
  return (
    <section
      className="register-section"
      style={{ backgroundImage: "url(assets/images/home3/1.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6">
            <h2 className="sec-title mb-15">Register Now</h2>
            <p className="sec-desc">
              Get 150s of Online <span>Courses for Free</span>
            </p>
            {/* Countdown Start */}
            <div
              className="countdown clearfix is-countdown"
              data-day="01"
              data-month="01"
              data-year="2021"
            >
              <span className="countdown-row countdown-show4">
                <span className="countdown-section">
                  <span className="countdown-amount">0</span>
                  <span className="countdown-period">Days</span>
                </span>
                <span className="countdown-section">
                  <span className="countdown-amount">0</span>
                  <span className="countdown-period">Hours</span>
                </span>
                <span className="countdown-section">
                  <span className="countdown-amount">0</span>
                  <span className="countdown-period">Minutes</span>
                </span>
                <span className="countdown-section">
                  <span className="countdown-amount">0</span>
                  <span className="countdown-period">Seconds</span>
                </span>
              </span>
            </div>
            {/* Countdown End */}
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="registration-form">
              <h4>What are you waiting for?</h4>
              <p>Get your free personalized course list</p>
              <form action="#" method="post">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="number" name="phone" placeholder="Phone" />
                <input type="submit" name="submit" value="Get It Now" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home3Register;
