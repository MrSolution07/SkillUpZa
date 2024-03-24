import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function Banner({ title, background }) {
  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="banner-title">{title}</h2>
            <div className="bread-crumbs">
              <Link to="/">Home</Link> <span></span> {title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Banner.propTypes = {
  title: ProtoTypes.string,
  background: ProtoTypes.string,
};

export default Banner;
