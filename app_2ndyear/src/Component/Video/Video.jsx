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
            src="//www.youtube.com/embed/FzcfZyEhOoI?autoplay=1&amp;cc_load_policy=1&amp;color=null&amp;controls=1&amp;disablekb=0&amp;enablejsapi=0&amp;end=null&amp;fs=1&amp;h1=null&amp;iv_load_policy=1&amp;loop=0&amp;modestbranding=null&amp;mute=0&amp;origin=null&amp;playsinline=null&amp;rel=0&amp;showinfo=1&amp;start=0&amp;wmode=transparent&amp;theme=dark&amp;nocookie=false"
            frameBorder="0"
            allowFullScreen={true}
            tabIndex="-1"
            allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
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
