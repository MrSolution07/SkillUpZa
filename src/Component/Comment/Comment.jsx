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
                He legged it bevvy mush owt to do with me such fibber fa about
                cup of tea sloshed morish butty bubble. Butty gormless lavatory
                bits and bobs pardon you daft ummm I'm telling.
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
                    Super chancer cheeky bloke haggle give us a bell well mufty
                    chinwag say bite. lavatory twit bits and bobs pardon you
                    daft ummm I'm telling. Blatant matie boy say bugger all mate
                    butty gormless
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
                    Oxford baking cakes dropped clanger fanny around vagabond
                    amongst cor blimey guvnor. Blatant matie boy say bugger all
                    mate butty gormless lavatory twit bits and bobs pardon you
                    daft ummm I'm telling.
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
