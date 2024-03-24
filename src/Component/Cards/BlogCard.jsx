import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function BlogCard({ blog, className }) {
  const { img, date, comment, title, link } = blog;
  return (
    <div className={className ? className : "col-lg-4 col-md-6"}>
      <div className="post-item-1">
        <img src={img} alt="" />
        <div className="b-post-details">
          <div className="bp-meta">
            <Link to="#">
              <i className="icon_clock_alt"></i>
              {date}
            </Link>
            <Link to="#">
              <i className="icon_chat_alt"></i>
              {comment} Comments
            </Link>
          </div>
          <h3>
            <Link to={link}>{title}</Link>
          </h3>
          <Link className="read-more" to={link}>
            Read More<i className="arrow_right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  blog: ProtoTypes.object,
  className: ProtoTypes.string,
};

export default BlogCard;
