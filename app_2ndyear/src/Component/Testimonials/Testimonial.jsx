import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "../Cards/TestimonialCard";
import { Autoplay } from "swiper/modules";

function Testimonial() {
  return (
    <section
      className="testimonial-section"
      style={{ backgroundImage: "url(assets/images/home2/testimonial-bg.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title">
              <span>What Our</span> Students Have to Say
            </h2>
            <div className="fact-wrapper">
              <div className="funfact-item-2 text-center">
                <div className="fact-thumb">
                  <img src="assets/images/home2/f4.png" alt="" />
                </div>
                <h2>
                  <span data-counter="100000" className="timer">
                    100000
                  </span>
                  +
                </h2>
                <p>
                  Udacity graduations and
                  <br />
                  counting
                </p>
              </div>
              <div className="funfact-item-2 text-center">
                <div className="fact-thumb">
                  <img src="assets/images/home2/f5.png" alt="" />
                </div>
                <h2>
                  <span data-counter="300" className="timer">
                    300
                  </span>
                  +
                </h2>
                <p>
                  Industry experts partnering
                  <br />
                  to build our content
                </p>
              </div>
              <div className="funfact-item-2 text-center">
                <div className="fact-thumb">
                  <img src="assets/images/home2/f6.png" alt="" />
                </div>
                <h2>
                  <span data-counter="100" className="timer">
                    100
                  </span>
                  +
                </h2>
                <p>
                  Udacity graduations and
                  <br />
                  counting
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                stopOnLastSlide: true,
              }}
              speed={2000}
              modules={[Autoplay]}
              spaceBetween={10}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <TestimonialCard
                  img="assets/images/home2/t1.png"
                  name="Russell Sprout"
                  position="Data Scientist"
                  comment=" Say horse play squiffy codswallop twit mufty barmy gutted
              mate, cup of char the little rotter Richard wellies bum bag
              bits and bobs don't get shirty with me chinwag, only a quid
              grub me old mucker give us a bell."
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard
                  img="assets/images/home2/t2.png"
                  name="Jackson Pot"
                  position="Web Developer"
                  comment=" Say horse play squiffy codswallop twit mufty barmy gutted
                  mate, cup of char the little rotter Richard wellies bum bag
                  bits and bobs don't get shirty with me chinwag, only a quid
                  grub me old mucker give us a bell."
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard
                  img="assets/images/home2/t1.png"
                  name="Russell Sprout"
                  position="Data Scientist"
                  comment=" Say horse play squiffy codswallop twit mufty barmy gutted
                  mate, cup of char the little rotter Richard wellies bum bag
                  bits and bobs don't get shirty with me chinwag, only a quid
                  grub me old mucker give us a bell."
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard
                  img="assets/images/home2/t2.png"
                  name="Jackson Pot"
                  position="Web Developer"
                  comment=" Say horse play squiffy codswallop twit mufty barmy gutted
                  mate, cup of char the little rotter Richard wellies bum bag
                  bits and bobs don't get shirty with me chinwag, only a quid
                  grub me old mucker give us a bell."
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
