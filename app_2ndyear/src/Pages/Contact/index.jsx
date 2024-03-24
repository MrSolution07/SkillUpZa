import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import ContactForm from "../../Component/Form/ContactForm";
import Map from "../../Component/Map";
import GotoTop from "../../Component/GotoTop";

function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  let content = undefined;
  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  if (isLoading) {
    content = <Preloader />;
  } else {
    content = (
      <>
        <Header logo="assets/images/logo4.png" joinBtn={true} />
        <Banner title="Contact Us" background="assets/images/banner.jpg" />
        <section className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="contact--info-area">
                  <h3>Get in touch</h3>
                  <p>
                    Looking for help? Fill the form and start a new adventure.
                  </p>
                  <div className="single-info">
                    <h5>Headquaters</h5>
                    <p>
                      <i className="icon_house_alt"></i>
                      744 New York Ave, Brooklyn, Kings,
                      <br /> New York 10224
                    </p>
                  </div>
                  <div className="single-info">
                    <h5>Phone</h5>
                    <p>
                      <i className="icon_phone"></i>
                      (+642) 245 356 432
                      <br />
                      (+420) 336 476 328
                    </p>
                  </div>
                  <div className="single-info">
                    <h5>Support</h5>
                    <p>
                      <i className="icon_mail_alt"></i>
                      bisy@support.com
                      <br />
                      help@education.com
                    </p>
                  </div>
                  <div className="ab-social">
                    <h5>Follow Us</h5>
                    <a className="fac" href="#">
                      <i className="social_facebook"></i>
                    </a>
                    <a className="twi" href="#">
                      <i className="social_twitter"></i>
                    </a>
                    <a className="you" href="#">
                      <i className="social_youtube"></i>
                    </a>
                    <a className="lin" href="#">
                      <i className="social_linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="contact-form">
                  <h4>Let’s Connect</h4>
                  <p>
                    Integer at lorem eget diam facilisis lacinia ac id massa.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Map />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Contact;
