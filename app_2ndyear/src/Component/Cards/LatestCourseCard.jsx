import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function LatestCourseCard({ img, name, offerPrice, price }) {
  return (
    <div className="latest-course">
      <Link to="/single-course">
        <img src={img} alt="" />
      </Link>
      <h5>
        <Link to="/single-course">{name}</Link>
      </h5>
      <div className="course-price" style={{ marginTop: "5px" }}>
        {offerPrice ? offerPrice : price}{" "}
        {offerPrice && <span style={{ marginLeft: "5px" }}> ${price}</span>}
      </div>
    </div>
  );
}

LatestCourseCard.propTypes = {
  img: ProtoTypes.string,
  name: ProtoTypes.string,
  offerPrice: ProtoTypes.string,
  price: ProtoTypes.string,
};

export default LatestCourseCard;
