import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseListViewV2({ course }) {
  const {
    img5,
    courseLink,
    author,
    title,
    heading,
    price,
    rating,
    reviews,
    offerPrice,
  } = course;
  return (
    <div className="course-item-4" style={{ width: "100%" }}>
      <div className="ci-thumb">
        <img src={img5} alt="" />
        <Link className="enroll" href={courseLink}>
          Enroll Now
        </Link>
      </div>
      <div className="course-details">
        <Link to={courseLink} className="c-cate">
          <i className="icon_tag_alt"></i>
          {title}
        </Link>
        <h4>
          <Link to={courseLink}>{heading}</Link>
        </h4>
       
        <div className="price-rate">
          <div className="course-price">
            R{offerPrice}
            <span>R{price}</span>
          </div>
          <div className="ratings">
            <i className="icon_star"></i>
            <span>
              {rating} ({reviews})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

CourseListViewV2.propTypes = {
  course: ProtoTypes.object,
};

export default CourseListViewV2;
