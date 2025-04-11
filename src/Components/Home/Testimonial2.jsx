import React, { useRef } from 'react'
import "./testi.css"
import company1 from "../../assets/company1.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";



const data = [
  {
    title: "In the past seven years, Applied Solar Technologies has taken over more than a thousand telecom towers with no grid power or intermittent grid power in the remotest part of India and used their advanced technology in providing renewable energy solutions to support tower operations. We understand their solution can be applicable on a much larger portfolio of such telecom sites in India.",
    name: "CEO -",
    company: " India Operations, Multi-national Towerco",
    img: "https://res.cloudinary.com/dgif730br/image/upload/v1744202052/Group_1171280789_xjskop.png"
  },
  {
    title: `Applied Solar Technologies have integrated their state-of-the-art technology including advanced storage, power electronics, and energy-as-a-service to provide 99.97% availability at the lowest cost on our complete portfolio of over 6,400 telecom sites spread all over India, with the additional advantage of increased usage of renewable energy and minimum consumption of diesel fuel.

Applied Energy advanced NOC, powered by state-of-the-art EMS, ensures the highest availability of uptimes in the most diverse geographies amidst challenging grid scenarios. `,
    name: "CEO- Dr Sushil Kumar Chaturvedi",
    company: " Ascend Telecom Infrastructure",
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743691302/WhatsApp_Image_2025-04-03_at_7.45.36_AM-removebg-preview_ec3tzk.png"
  },
  {
    title: `A unique combination of site automation, proactive maintenance, and optimum energy asset utilization delivers utmost customer satisfaction at optimized cost, creating a win-win scenario.

India has more than 540,000 telecom sites and all these sites have potential for Applied Energy’s proven solution addressing the pain points of the Telecom industry and achieving the regulatory goals of reducing dependency on fossil fuel and carbon footprint.`,
    name: "CEO",
    company: "Ascend Telecom Infrastructure",
    img: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743691302/WhatsApp_Image_2025-04-03_at_7.45.36_AM-removebg-preview_ec3tzk.png"
  },
]

function Testimonial2() {

  const swiperRef = useRef(null);

  // Function to handle slide next and previous
  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className='tes2wrap'>
      <div className="testi_cont">

        <div className="tsti_head">
          <p className='test_word'>Testimonial</p>
          <h4 className='test_h4'>Check Our Clients</h4>
          <p className="linestit">
            <span className="lines2"></span>
            <span className='fedback'>Feedback</span>
            <span className="lines2"></span>

          </p>
        </div>

        <div className="testi_swiper">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // pagination={{

            //   clickable: true,
            //   dynamicBullets: true,
            // }}
            breakpoints={{
              250: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Autoplay]}
          >
            {data.map((data, index) => (
              <SwiperSlide key={index} className="solveissue">
                <div className="testi2_sin">
                  <div className="test_lefts">
                    <p className="tst_title">{data.title}</p>
                    <h4 className="test_name">{data.name}</h4>
                    <p className="test_company">{data.company}</p>
                  </div>
                  <img className='slottt'
                    style={{
                      borderLeft: "1px solid rgb(227, 219, 219)",
                      width: "300px",
                      height: "350px",
                      
                    }}
                    src={data?.img}
                    alt="Logo"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <hr className='suss' style={{marginBottom:"20px"}} />

          <div className="slidernavga">
            <p></p>
            <div className="tst_btns">
              <button onClick={handlePrev}>
                <FaArrowLeft />
              </button>
              <button onClick={handleNext}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Testimonial2