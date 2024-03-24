import { blogs } from "../../Data/blog";
import BlogCard from "../Cards/BlogCard";

function Blogs() {
  return (
    <section
      className="blog-section"
      style={{ backgroundImage: "url(assets/images/home/blog-bg.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title">
              <span>Secrets of</span> learning Revealed in Blogs
            </h2>
          </div>
        </div>
        <div className="row">
          {blogs.map(
            (blog, index) => index < 3 && <BlogCard blog={blog} key={blog.id} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
