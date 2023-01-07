import React from "react";
import css from "./Testimonial.module.css";
import Hero from "../../assets/xyz.png";
import { TestimonialsData } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
const Testinmonial = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>I love the confidence that makeup gives me</span>
        </div>
        <img src={Hero} alt="" />

        <div className={css.container}>
          <span>500K</span>
          <span>Happy Customer with us</span>
        </div>
      </div>
      <div className={css.review}>
        <br />
        Reviews
      </div>
      <div className={css.carousal}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.tcarousal}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testinmonial;
