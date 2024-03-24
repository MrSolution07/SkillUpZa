import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function FeatureCourseCard({ course, className, swiper }) {
  const {
    img3,
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
    <div className={!swiper ? "col-lg-4 col-md-6" : ""}>
      <div className={`${className ? className : "feature-course-item-3"}`}>
        <div className="fcf-thumb">
          <img src={img3} alt="" />
          <Link className="enroll" to={courseLink}>
            Enroll Now
          </Link>
        </div>
        <div className="fci-details">
          <Link to={courseLink} className="c-cate">
            <i className="icon_tag_alt"></i>
            {title}
          </Link>
          <h4>
            <Link to="#">{heading}</Link>
          </h4>
          <div className="author">
            <img src={author?.img} alt="" />
            <Link to={author?.profile}>{author?.name}</Link>
          </div>
          <div className="price-rate">
            <div className="course-price">
              {offerPrice}
              <span>${price}</span>
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
    </div>
  );
}

FeatureCourseCard.propTypes = {
  course: ProtoTypes.object,
  className: ProtoTypes.string,
  swiper: ProtoTypes.bool,
};

export default FeatureCourseCard;
