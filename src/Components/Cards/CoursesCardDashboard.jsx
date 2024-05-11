import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function CoursesCardDashboard({ course, className, swiper }) {
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
          <Link
            className="enroll"
          >
            ADD
          </Link>
        </div>
        <div className="fci-details">
          <Link className="c-cate">
          {title}
          
        
          </Link>
          <h4>
            {heading}
          </h4>
          <div className="author">
            <img src={author?.img} alt="" />
            <Link></Link>
          </div>
          <div className="price-rate">
            <div className="course-price">
              {offerPrice}
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
    </div>
  );
}

CoursesCardDashboard.propTypes = {
  course: ProtoTypes.object,
  className: ProtoTypes.string,
  swiper: ProtoTypes.bool,
};

export default CoursesCardDashboard;







