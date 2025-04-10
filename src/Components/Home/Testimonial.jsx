import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./testimonial.css";
import { testimonials } from "./testimonialData";

export default function Testimonial() {
  return (
    <div className="testit_wrap">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="testi_slider"
      >
        {testimonials.map((testi, index) => (
          <SwiperSlide key={index}>
            <div className="testi_cont">
              <div className="test_left">
                <p className="testi_tag">Testimonial</p>
                <div className="head_test">
                  <h4>Check Our Clients</h4>
                  <p>
                    <span className="linett"></span> Feedback
                  </p>
                </div>
                <p className="head_parastest">{testi.text}</p>
                <div  className="testi_users">
                  <img src={testi.image} alt="User" />
                  <div className="testi_grp">
                    <h2>{testi.name}</h2>
                    <p>{testi.designation}</p>
                  </div>
                </div>
              </div>
              <div  className="testi_right">
                <img  src={testi.bgImage} alt="Background" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
