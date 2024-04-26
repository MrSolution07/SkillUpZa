import { useState } from "react";

function Video() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <>
      {playVideo && (
        <div style={{ zIndex: "999" }}>
          <div
            id="lightcase-overlay"
            style={{ opacity: "0.9", display: "block", cursor: "pointer" }}
          ></div>
          <div id="lightcase-loading" className="lightcase-icon-spin"></div>
          <iframe
            width="681"
            height="427"
            src="https://www.youtube.com/embed/OwgChBWs9xs?si=PcirQp6CYx0027tu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            frameBorder="0"
            allowFullScreen={true}
            tabIndex="-1"
            // allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
            style={{
              maxWidth: "100%",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "9999",
            }}
          />

          <a
            onClick={() => setPlayVideo(false)}
            className="lightcase-icon-close"
            style={{ opacity: 1, display: "block" }}
          >
            <span>Close</span>
          </a>
        </div>
      )}

      <div className="video-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center">
              <div
                className="video-banner"
                style={{
                  backgroundImage: "url(assets/images/home/video-bg.jpg)",
                }}
              >
                <a className="popup-video" onClick={() => setPlayVideo(true)}>
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
