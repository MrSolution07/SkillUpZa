import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function Home3TeacherCard({ img, name, position }) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="teacher-item-2">
        <div className="teacher-thumb">
          <img src={img} alt="" />
          <Link to="/profile" className="follow-btn">
            Follow
          </Link>
          <div className="teacher-social">
            <a href="#">
              <i className="social_facebook"></i>
            </a>
            <a href="#">
              <i className="social_twitter"></i>
            </a>
            <a href="#">
              <i className="social_vimeo"></i>
            </a>
            <a href="#">
              <i className="social_linkedin"></i>
            </a>
          </div>
        </div>
        <div className="teacher-meta">
          <h5>
            <Link to="/profile">{name}</Link>
          </h5>
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
}

Home3TeacherCard.propTypes = {
  img: ProtoTypes.string,
  name: ProtoTypes.string,
  position: ProtoTypes.string,
};

export default Home3TeacherCard;
