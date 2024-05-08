import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function Home3TeacherCard({ img, name,name2,name3, name4,name5, position }) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="teacher-item-2">
        <div className="teacher-thumb">
          <img src={img} alt="" />

          <div className="teacher-social">
            {/* <a href="#">
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
            </a> */}
          </div>
        </div>
        <div className="teacher-meta">
          <h5>
            <Link to="https://www.linkedin.com/in/christian-bulabula-93a667289/">{name}</Link>
            <Link to="https://www.linkedin.com/in/mike-katutwa-a77b66279/">{name2}</Link> 
            <Link to="https://www.linkedin.com/in/lesedi-naledi-ntamane-47b3bb301/">{name3}</Link>
            <Link to="">{name4}</Link>
            <Link to="https://www.linkedin.com/in/govenor-khoza-7313a9215/?trk=contact-info">{name5}</Link>
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
