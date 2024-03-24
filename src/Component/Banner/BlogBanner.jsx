import { Link } from "react-router-dom";

function BlogBanner() {
  return (
    <section
      className="page-banner single-p-banner"
      style={{ backgroundImage: "url(assets/images/banner2.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <Link className="post-cate" to="/course">
              Education
            </Link>
            <h2 className="banner-title">
              Build a full web chat app From Scratch.
            </h2>
            <div className="bp-meta">
              <Link to="#">
                <i className="icon_clock_alt"></i>April 22, 2020
              </Link>
              <Link to="#">
                <i className="icon_chat_alt"></i>6 Comments
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogBanner;
