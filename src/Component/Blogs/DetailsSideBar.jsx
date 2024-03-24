import { Link } from "react-router-dom";

function DetailsSideBar() {
  return (
    <div className="col-lg-4 col-md-5">
      <div className="blog-sidebar">
        <aside className="widget widget-search">
          <form className="search-form" action="#" method="post">
            <input type="search" name="s" placeholder="Search..." />
            <button type="submit">
              <i className="ti-search"></i>
            </button>
          </form>
        </aside>
        <aside className="widget widget-categories">
          <h3 className="widget-title">Categories</h3>
          <ul>
            <li>
              <Link to="/blog">Web Design</Link>
              <span>(24)</span>
            </li>
            <li>
              <Link to="/blog">Marketing</Link>
              <span>(15)</span>
            </li>
            <li>
              <Link to="/blog">Frontend</Link>
              <span>(8)</span>
            </li>
            <li>
              <Link to="/blog">IT & Software</Link>
              <span>(13)</span>
            </li>
            <li>
              <Link to="/blog">Photography</Link>
              <span>(4)</span>
            </li>
            <li>
              <Link to="/blog">Technology</Link>
              <span>(16)</span>
            </li>
            <li>
              <Link to="/blog">General</Link>
              <span>(12)</span>
            </li>
          </ul>
        </aside>
        <aside className="widget widget-trend-post">
          <h3 className="widget-title">Popular Posts</h3>
          <div className="popular-post">
            <Link to="/single-post">
              <img src="assets/images/blog/p1.jpg" alt="" />
            </Link>
            <h5>
              <Link to="/single-post">Using creative problem Solving</Link>
            </h5>
            <span>March 10, 2020</span>
          </div>
          <div className="popular-post">
            <Link to="/single-post">
              <img src="assets/images/blog/p2.jpg" alt="" />
            </Link>
            <h5>
              <Link to="/single-post">Fundamentals of UI Design</Link>
            </h5>
            <span>Jan 14, 2020</span>
          </div>
          <div className="popular-post">
            <Link to="/single-post">
              <img src="assets/images/blog/p3.jpg" alt="" />
            </Link>
            <h5>
              <Link to="/single-post">Making music with Other people</Link>
            </h5>
            <span>April 12, 2020</span>
          </div>
          <div className="popular-post">
            <Link to="/single-post">
              <img src="assets/images/blog/p4.jpg" alt="" />
            </Link>
            <h5>
              <Link to="/single-post">
                Brush strokes energize Trees in paintings
              </Link>
            </h5>
            <span>July 4, 2020</span>
          </div>
        </aside>
        <aside className="widget">
          <h3 className="widget-title">Popular Tags</h3>
          <div className="tags">
            <Link to="/course">Bisy LMS</Link>
            <Link to="/course">Design</Link>
            <Link to="/course">General</Link>
            <Link to="/course">Online</Link>
            <Link to="/course">Prevention</Link>
            <Link to="/course">Artist</Link>
            <Link to="/course">Education</Link>
            <Link to="/course">Motivation</Link>
            <Link to="/course">Politico</Link>
            <Link to="/course">Live Cases</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default DetailsSideBar;
