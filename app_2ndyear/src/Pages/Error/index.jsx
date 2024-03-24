import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import { Link } from "react-router-dom";

function Error() {
  const [isLoading, setIsLoading] = useState(true);

  //handle Loading
  let content = undefined;
  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  if (isLoading) {
    content = <Preloader />;
  } else {
    content = (
      <>
        <section
          className="section-404"
          style={{ backgroundImage: "url(assets/images/404-bg.jpg)" }}
        >
          <div className="middle-404">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-12">
                  <div className="content-404">
                    <img src="assets/images/404.png" alt="" />
                    <h2>Oooops!</h2>
                    <p>We have something broken.</p>
                    <ul>
                      <li>
                        <Link to="/">Go Back Home</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  return content;
}

export default Error;
