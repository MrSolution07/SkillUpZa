import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { course } from "../../Data/course";
import CourseListView from "../Cards/CourseListView";
function CourseHome3() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return "<span class=" + className + " myPagination" + "></span>";
    },
  };
  return (
    <section className="popular-course-section-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="sec-title mb-15">Popular Topics</h2>
            <p className="sec-desc">
              50+ million people are already learning on Coursera.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              pagination={pagination}
              modules={[EffectFade, Autoplay, Pagination]}
              className="mySwiper mySwiper2"
              //   autoplay={{
              //     delay: 2500,
              //     disableOnInteraction: false,
              //   }}
            >
              {course?.map((item) => (
                <SwiperSlide key={item.id}>
                  <CourseListView course={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseHome3;
