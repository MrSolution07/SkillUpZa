import ProtoTypes from "prop-types";
function CallAction({ btnClass }) {
  return (
    <section
      className="cta-section-2"
      style={{ backgroundImage: "url(assets/images/home3/4.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2 className="sec-title mb-15">
              Make the most of your
              <br /> Online learning experience
            </h2>
            <p>
              Our Online Learning Resource Center has tips, tricks and inspiring
              stories to help you
              <br /> learn while staying home.
            </p>
            <a href="#" className={btnClass ? btnClass : "bisylms-btn-3"}>
              Explore Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

CallAction.propTypes = {
  btnClass: ProtoTypes.string,
};

export default CallAction;
