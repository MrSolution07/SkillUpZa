import { Link } from "react-router-dom";

function Event() {
  return (
    <section className="event-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title">
              <span>Contact Now</span> Upcoming Events
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="event-item-1">
              <div className="e-date">
                24 <span>Jun</span>
              </div>
              <p>
                <i className="icon_pin_alt"></i>New York, US
              </p>
              <h4>
                <Link to="single-event">
                  Consumer Food Safety Education Conference
                </Link>
              </h4>
              <Link className="bisylms-btn" to="#">
                Get Ticket
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="event-item-1">
              <div className="e-date">
                27 <span>July</span>
              </div>
              <p>
                <i className="icon_pin_alt"></i>Vancouver, Canada
              </p>
              <h4>
                <Link to="single-event">
                  Build Education Website Using WordPress
                </Link>
              </h4>
              <Link className="bisylms-btn" to="#">
                Get Ticket
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="event-item-1">
              <div className="e-date">
                16 <span>Nov</span>
              </div>
              <p>
                <i className="icon_pin_alt"></i>Chicago, US
              </p>
              <h4>
                <Link to="single-event">
                  How Meditation Improve your Mental Health?
                </Link>
              </h4>
              <Link className="bisylms-btn" to="#">
                Get Ticket
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="event-item-1">
              <div className="e-date">
                13 <span>Nov</span>
              </div>
              <p>
                <i className="icon_pin_alt"></i>Texas, US
              </p>
              <h4>
                <Link to="single-event">
                  Understanding Luxury Fashion in a Changing
                </Link>
              </h4>
              <Link className="bisylms-btn" to="#">
                Get Ticket
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <Link className="read-more" to="#">
              View all Events<i className="arrow_right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;
