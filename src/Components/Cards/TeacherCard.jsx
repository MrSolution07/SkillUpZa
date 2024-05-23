import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function TeacherCard({ teacher, swiper }) {
  const { img, name, subject } = teacher;

  const card = (
    <div className="teacher-item">
      <div className="teacher-thumb">
        <img src={img} alt="" />
        
      </div>
      <div className="teacher-meta">
        <h5>
          <Link to="https://za.indeed.com/?from=gnav-homepage">{name}</Link>
        </h5>
        <p>{subject}</p>
      </div>
    </div>
  );

  return swiper ? card : <div className="col-lg-3 col-md-6">{card}</div>;
}

TeacherCard.propTypes = {
  teacher: ProtoTypes.object,
  swiper: ProtoTypes.bool,
};

export default TeacherCard;
