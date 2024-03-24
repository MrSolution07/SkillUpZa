import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseListView({ course, className }) {
  const {
    title,
    heading,
    lesson,
    student,
    img4,
    reviews,
    rating,
    price,
    offerPrice,
    author,
    courseLink,
    description,
  } = course;
  return (
    <div className={`${className && className} course-item-3`}>
      <div className="ci-thumb">
        <img src={img4} alt="" />
        <Link to={courseLink} className="c-cate">
          {title}
        </Link>
      </div>
      <div className="course-details">
        <img className="line-bg" src="assets/images/home3/line.jpg" alt="" />
        <div className="fcf-bottom">
          <a href="#">
            <i className="icon_book_alt"></i>
            {lesson} Lessons
          </a>
          <a href="#">
            <i className="icon_profile"></i>
            {student}
          </a>
        </div>
        <h4>
          <Link to={courseLink}>{heading}</Link>
        </h4>
        <p>{description}</p>
        <div className="author">
          <img src={author.img} alt="" />
          <a href="#">{author.name}</a>
        </div>
        <div className="price-rate">
          <div className="course-price">
            ${offerPrice}
            <span>${price}</span>
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

CourseListView.propTypes = {
  course: ProtoTypes.object,
  className: ProtoTypes.string,
};

export default CourseListView;
