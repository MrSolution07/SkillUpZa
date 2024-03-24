import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function FeatureCard2({ course }) {
  const {
    title,
    heading,
    lesson,
    student,
    img2,
    reviews,
    rating,
    price,
    offerPrice,
    author,
    courseLink,
  } = course;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="feature-course-item-2">
        <Link to={courseLink} className="c-cate">
          {title}
        </Link>
        <h4>
          <Link to={courseLink}>{heading}</Link>
        </h4>
        <div className="fcf-bottom">
          <Link to="#">
            <i className="icon_book_alt"></i>
            {lesson} Lessons
          </Link>
          <Link to="#">
            <i className="icon_profile"></i>
            {student}
          </Link>
        </div>
        <div className="fcf-thumb">
          <img src={img2} alt="" />
        </div>
        <div className="hover-course">
          <div className="course-price">
            ${offerPrice}
            <span>${price}</span>
          </div>
          <div className="author">
            <img src={author.img} alt="" />
            <Link to={author.profile}>{author.name}</Link>
          </div>
          <div className="ratings">
            <i className="icon_star"></i>
            <i className="icon_star"></i>
            <i className="icon_star"></i>
            <i className="icon_star"></i>
            <i className="icon_star"></i>
            <span>
              {rating} ({reviews} Reviews)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

FeatureCard2.propTypes = {
  course: ProtoTypes.object,
};

export default FeatureCard2;
