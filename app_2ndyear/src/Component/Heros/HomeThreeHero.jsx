import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

function HomeThreeHero() {
  return (
    <section className="hero-slider-section">
      <div className="hero-slider owl-carouse">
        <Swiper
          spaceBetween={30}
          speed={2000}
          effect={"fade"}
          navigation={true}
          modules={[EffectFade, Navigation, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {/* Single Slider item  */}
          <SwiperSlide>
            <div
              className="single-slide bg-img d-flex align-items-center"
              style={{
                backgroundImage: "url(assets/images/home3/slider-1.jpg)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="slider-content">
                      <div className="sub animated">
                        Superior Acodemic Achievement & Mastery
                      </div>
                      <h3 className="animated">
                        An education product
                        <br /> like on other
                      </h3>
                      <Link to="#" className="animated bisylms-btn-3">
                        Let's Go
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Single Slider item   */}
          {/* Single Slider item   */}
          <SwiperSlide>
            <div
              className="single-slide bg-img d-flex align-items-center"
              style={{
                backgroundImage: "url(assets/images/home3/slider-2.jpg)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="slider-content text-center">
                      <div className="sub animated">
                        Superior Acodemic Achievement & Mastery
                      </div>
                      <h3 className="animated">
                        Online Courses From
                        <br /> The World’s Top Publishers
                      </h3>
                      <Link to="#" className="animated bisylms-btn-3">
                        Browse Online Courses
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Single Slider item  */}
          {/* Single Slider item  */}
          <SwiperSlide>
            <div
              className="single-slide bg-img d-flex align-items-center"
              style={{
                backgroundImage: "url(assets/images/home3/slider-4.jpg)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="slider-content">
                      <div className="sub animated">
                        Superior Acodemic Achievement & Mastery
                      </div>
                      <h3 className="animated">
                        An education product
                        <br /> like on other
                      </h3>
                      <Link to="#" className="animated bisylms-btn-3">
                        Let's Go
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Single Slider item  */}
          {/*  Single Slider item   */}
          <SwiperSlide>
            <div
              className="single-slide bg-img d-flex align-items-center"
              style={{
                backgroundImage: "url(assets/images/home3/slider-3.jpg)",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="slider-content text-center">
                      <div className="sub animated">
                        Superior Acodemic Achievement & Mastery
                      </div>
                      <h3 className="animated">
                        Online Courses From
                        <br /> The World’s Top Publishers
                      </h3>
                      <Link to="#" className="animated bisylms-btn-3">
                        Browse Online Courses
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Single Slider item  */}
        </Swiper>
      </div>
    </section>
  );
}

export default HomeThreeHero;
