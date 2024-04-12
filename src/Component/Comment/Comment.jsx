function Comment() {
  return (
    <div className="comment-area">
      <h3>Comment (03)</h3>
      <ol className="comment-list">
        <li>
          <div className="single-comment">
            <img src="assets/images/single-post/c1.png" alt="" />
            <h5>
              <a href="#">Jason Response</a>
            </h5>
            <span>April 03, 2019</span>
            <div className="comment">
              <p>
              "As a developer, Lee's focus on clarity and responsiveness is refreshing. It's a great reminder that a well-designed interface makes our job so much easier."
              </p>
            </div>
            <a className="comment-reply-link" href="#">
              <i className="arrow_back"></i>Reply
            </a>
            <div className="c-border"></div>
          </div>
          <ul className="children">
            <li>
              <div className="single-comment">
                <img src="assets/images/single-post/c2.png" alt="" />
                <h5>
                  <a href="#">Sue Shei</a>
                </h5>
                <span>April 14, 2019</span>
                <div className="comment">
                  <p>
                  "Love the bit about the power of visuals! A touch of personality can go a long way in building brand recognition and user engagement."
                  </p>
                </div>
                <a className="comment-reply-link" href="#">
                  <i className="arrow_back"></i>Reply
                </a>
                <div className="c-border"></div>
              </div>
            </li>
            <li>
              <div className="single-comment">
                <img src="assets/images/single-post/c3.png" alt="" />
                <h5>
                  <a href="#">Douglas Lyphe</a>
                </h5>
                <span>July 27, 2020</span>
                <div className="comment">
                  <p>
                  "This is exactly what I was looking for! Clear, concise, and packed with valuable insights. Thanks for sharing!"                  
                  </p>
                </div>
                <a className="comment-reply-link" href="#">
                  <i className="arrow_back"></i>Reply
                </a>
                <div className="c-border"></div>
              </div>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default Comment;
