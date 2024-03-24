import TeacherCard from "../Cards/TeacherCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

function Teachers() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <section className="teachers-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title mb-15">
              <span>Classes Taught by</span> Real Creators
            </h2>
            <p className="sec-desc">
              Online education is a flexible instructional delivery system that
              encompasses any
              <br />
              kind of learning that takes place via the Internet.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              slidesPerView={1}
              autoplay={true}
              spaceBetween={10}
              pagination={pagination}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <TeacherCard
                  teacher={{
                    img: "assets/images/home2/teacher/2.png",
                    name: "Hugh Saturation",
                    subject: "Photographer",
                  }}
                  swiper={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeacherCard
                  teacher={{
                    img: "assets/images/home2/teacher/1.png",
                    name: "Dianne Ameter",
                    subject: "Illustrator",
                  }}
                  swiper={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeacherCard
                  teacher={{
                    img: "assets/images/home2/teacher/3.png",
                    name: "Jim Séchen",
                    subject: "Stylist & Author",
                  }}
                  swiper={true}
                />
              </SwiperSlide>

              <SwiperSlide>
                <TeacherCard
                  teacher={{
                    img: "assets/images/home2/teacher/4.png",
                    name: "Eric Widget",
                    subject: "Designer",
                  }}
                  swiper={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeacherCard
                  teacher={{
                    img: "assets/images/home2/teacher/1.png",
                    name: "Dianne Ameter",
                    subject: "Illustrator",
                  }}
                  swiper={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeacherCard
                  teacher={{
                    img: "assets/images/home2/teacher/2.png",
                    name: "Hugh Saturation",
                    subject: "Photographer",
                  }}
                  swiper={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeacherCard
                  teacher={{
                    img: "assets/images/home2/teacher/3.png",
                    name: "Jim Séchen",
                    subject: "Stylist & Author",
                  }}
                  swiper={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeacherCard
                  teacher={{
                    img: "assets/images/home2/teacher/4.png",
                    name: "Eric Widget",
                    subject: "Designer",
                  }}
                  swiper={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeacherCard
                  teacher={{
                    img: "assets/images/home2/teacher/1.png",
                    name: "Dianne Ameter",
                    subject: "Illustrator",
                  }}
                  swiper={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeacherCard
                  teacher={{
                    img: "assets/images/home2/teacher/2.png",
                    name: "Hugh Saturation",
                    subject: "Photographer",
                  }}
                  swiper={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeacherCard
                  teacher={{
                    img: "assets/images/home2/teacher/3.png",
                    name: "Jim Séchen",
                    subject: "Stylist & Author",
                  }}
                  swiper={true}
                />
              </SwiperSlide>
              <SwiperSlide>
                <TeacherCard
                  teacher={{
                    img: "assets/images/home2/teacher/4.png",
                    name: "Eric Widget",
                    subject: "Designer",
                  }}
                  swiper={true}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teachers;
