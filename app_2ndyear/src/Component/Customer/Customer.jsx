import { Link } from "react-router-dom";

function Customer() {
  return (
    <section className="customars-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="sec-title mb-15">
              <span>Bisy LMS for</span> Business Customers
            </h2>
            <p className="sec-desc">
              We’ve got the solution: world-class training and development
              <br />
              programs developed by top universities and companies. All on Bisy
              <br />
              LMS for Business.
            </p>
            <Link to="/" className="bisylms-btn-2">
              Learn More
            </Link>
          </div>
          <div className="col-md-6">
            <div className="client-logo clearfix">
              <Link to="/">
                <img src="assets/images/client-logo/1.png" alt="" />
              </Link>
              <Link to="/">
                <img src="assets/images/client-logo/2.png" alt="" />
              </Link>
              <Link to="/">
                <img src="assets/images/client-logo/3.png" alt="" />
              </Link>
              <Link to="/">
                <img src="assets/images/client-logo/4.png" alt="" />
              </Link>
              <Link to="/">
                <img src="assets/images/client-logo/5.png" alt="" />
              </Link>
              <Link to="/">
                <img src="assets/images/client-logo/6.png" alt="" />
              </Link>
              <Link to="/">
                <img src="assets/images/client-logo/7.png" alt="" />
              </Link>
              <Link to="/">
                <img src="assets/images/client-logo/8.png" alt="" />
              </Link>
              <Link to="/">
                <img src="assets/images/client-logo/9.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customer;
