import { newsData } from "../../Data/home";
import newsprofile from "../../assets/newsprofile.png";
import newchat from "../../assets/newchat.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import "./slider.css";
import "./news.css";
import datenw from "../../assets/datenw.png"
import { FaArrowRight } from "react-icons/fa6";


function NewsUpdate() {
  return (
    <div className="newsfudpate">
      <div className="newsupdate_cont">
        <div className="newsupte_top">
          <p className="hewhead">News & Updates</p>
          <p className="recenews">
            {" "}
            <span className="rece_line"></span> Recent News{" "}
            <span className="rece_line"></span>{" "}
          </p>
        </div>

       <div className="newsliders">
          <Swiper
              slidesPerView={4}
              spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                250: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                850: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1258: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
            
              }}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
            >
              {newsData.map((data, index) => (
                <SwiperSlide key={index} className="solveissue" >
                  <div  className="singelnewdata">
                          <img src={data.img} alt="new_img" className="newimg" />
                          <p className="news_date">
                               <img src={datenw} alt="" />
                               <span>{data.date}</span>
                          </p>

                          <h4>{data.heading}</h4>
                          <p className="data_parsas">{data.para}</p>

                          <p className="readmorebt">Read more <FaArrowRight />  </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
       </div>

      </div>
    </div>
  );
}

export default NewsUpdate;
