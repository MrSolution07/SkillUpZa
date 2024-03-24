import ProtoTypes from "prop-types";
function TestimonialCard({ img, name, position, comment }) {
  return (
    <div className="testimonial-item">
      <div className="testi-author">
        <img src={img} alt="" />
        <h5>{name}</h5>
        <span>{position}</span>
      </div>
      <p>{comment}</p>
    </div>
  );
}

TestimonialCard.propTypes = {
  img: ProtoTypes.string,
  name: ProtoTypes.string,
  position: ProtoTypes.string,
  comment: ProtoTypes.string,
};

export default TestimonialCard;
