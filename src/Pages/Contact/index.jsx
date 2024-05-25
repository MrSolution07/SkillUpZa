import { useEffect, useState } from "react";
import Preloader from "../../Components/Preloader";
import Header from "../../Components/Headers";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import ContactForm from "../../Components/Form/ContactForm";
import Map from "../../Components/Map";
import GotoTop from "../../Components/GotoTop";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


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
        <Banner title="Contact Us" background="assets/images/bannercontact.jpg" />
        <section className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="contact--info-area">
                  <h3>Get in touch</h3>
                  <p>
                    Looking for help? Get in touch with us.
                  </p>
                  <div className="single-info">
                    <h5>Headquaters</h5>
                    <p>
                      <i className="icon_house_alt"></i>
                      Bunting Road,Auckland Park 2092
                      <br /> Johannesburg, SA
                    </p>
                  </div>
                  <div className="single-info">
                    <h5>Phone</h5>
                    <p>
                      <i className="icon_phone"></i>
                      (+27) 84 998 0630 
                      <br />
                      (+27) 63 531 5852
                    </p>
                  </div>
                  <div className="single-info">
                    <h5>Support</h5>
                    <p>
                      <i className="icon_mail_alt"></i>
                      <a href="mailto:skillupZA@outlook.com">skillupZA@outlook.com 
                      </a>
                    </p>
                  </div>
                  <div className="ab-social">
                    <h5>Follow Us</h5>
                    <a className="fac" href="https://www.facebook.com/profile.php?id=61559534575921">
                      <i className="social_facebook"></i>
                    </a>
                    <a className="twi" href="https://x.com/_Skill_Up_/status/1784949119582195767?t=PPYZjB1fn0GIJJ5XNoYBKw&s=19">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                  <a className="insta" href="https://www.instagram.com/skillupza/">
                  <FontAwesomeIcon icon={faInstagram} />
                 </a>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="contact-form">
                  <h4>Let’s Connect</h4>
                  <p>
                    Fill out your details
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
