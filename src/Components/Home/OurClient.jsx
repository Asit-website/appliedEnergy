import React from 'react';
import "./client.css"
import sbi from '../../assets/im1.png';
import bob from '../../assets/im2.png'
import unib from '../../assets/im3.png'
import america from '../../assets/im4.png';
import pub from '../../assets/im5.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import sb1 from '../../assets/sb1.svg';
import sb2 from '../../assets/sb2.svg'
import sb3 from '../../assets/sb3.svg'
import sb4 from '../../assets/sb4.svg'
import sb5 from '../../assets/sb5.svg'
import sb6 from '../../assets/sb6.svg'
import sb7 from '../../assets/sb7.svg'
import asseros from '../../assets/asseros.svg';
// import ascend from '../../assets/ascend.png';
// import total from '../../assets/total.png';

const OurClient = () => {
    return (
        <div className='our_client'>
            <div className="client_main">
                <div className="our_client1">
                    <div className="our_client_heading">
                        <div className='asseros'>
                            <img src={asseros} alt="ass" />
                            <div>
                            <p className='hewhead sisk'>Our Client</p>
                            {/* <p className='recenews'>Our Client</p> */}
                            <p className="newlinespas newsingk sisk1">always our priority</p>
                            </div>
                        </div>
                        <div className='sas_based'>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt leo et leo tincidun vel efficitur mi egestas curabitur vulputate vestibulum.</p> */}
                        </div>
                    </div>
                    {/* <div className="image-slider">
                        <div className="slider-track">
                            <img src={sbi} alt="Client 1" />
                            <img src={bob} alt="Client 2" />
                            <img src={unib} alt="Client 3" />
                            <img src={america} alt="Client 4" />
                            <img src={pub}alt="Client 5" />
                        </div>
                    </div> */}

                    <div className="w-full overflow-hidden bg-gray-100 py-5 our_stand">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={10}
                            slidesPerView={5}
                            loop={true}
                            speed={500}
                            autoplay={true}
                            freeMode={true}
                            ltr={true}
                            breakpoints={{
                                300: { slidesPerView: 2, spaceBetween: 10 },
                                480: { slidesPerView: 2, spaceBetween: 15 },
                                768: { slidesPerView: 3, spaceBetween: 20 },
                                1024: { slidesPerView: 5, spaceBetween: 20 },
                            }}
                        >
                          {/* <SwiperSlide><img src={"https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743637628/Airtel-Logo-2010-present_grl66z.jpg"} alt="Client 1" className="slider_image1" /></SwiperSlide> */}
                          {/* <SwiperSlide><img src={"https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743637628/voda_bw2kfn.jpg"} alt="Client 1" className="slider_image1" /></SwiperSlide>
                          <SwiperSlide><img src={"https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743637627/bharat-petroleum-logo_wfbogv.png"} alt="Client 1" className="slider_image1" /></SwiperSlide>
                          <SwiperSlide><img src={"https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743637627/idea_logo_fyoc49.png"} alt="Client 1" className="slider_image1" /></SwiperSlide>
                          <SwiperSlide><img src={"https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743637627/idea_logo_fyoc49.png"} alt="Client 1" className="slider_image1" /></SwiperSlide> */}

                            {/*  */}
                            {/* <SwiperSlide><img src={"https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743637627/idea_logo_fyoc49.png"} alt="Client 1" className="slider_image1" /></SwiperSlide> */}
                            {/* <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956254/Group_1171281011_w0odqa.svg"} alt="Client 1" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={"https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743637627/idea_logo_fyoc49.png"} alt="Client 1" className="slider_image1" /></SwiperSlide>
                             */}
                            {/* <SwiperSlide><img src={"https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743637627/idea_logo_fyoc49.png"} alt="Client 1" className="slider_image1" /></SwiperSlide> */}
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956253/Group_1171281010_q8zeh3.svg"} alt="Client 2" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956253/Group_1171281012_aiyhee.svg"} alt="Client 3" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956252/Group_1171281016_ig40c4.svg"} alt="Client 4" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956254/Group_1171281011_w0odqa.svg"} alt="Client 1" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956253/Group_1171281010_q8zeh3.svg"} alt="Client 2" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956253/Group_1171281012_aiyhee.svg"} alt="Client 3" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956252/Group_1171281016_ig40c4.svg"} alt="Client 4" className="slider_image1" /></SwiperSlide>
                              
                            {/* <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956254/Group_1171281011_w0odqa.svg"} alt="Client 1" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956253/Group_1171281010_q8zeh3.svg"} alt="Client 2" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956253/Group_1171281012_aiyhee.svg"} alt="Client 3" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956252/Group_1171281016_ig40c4.svg"} alt="Client 4" className="slider_image1" /></SwiperSlide> */}
                            {/* <SwiperSlide><img src={sb5} alt="Client 5" className="slider_image1" /></SwiperSlide> */}

                            {/* <SwiperSlide><img src={sb6} alt="Client 1" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={sb7} alt="Client 2" className="slider_image1" /></SwiperSlide>

                            <SwiperSlide><img src={sb5} alt="Client 5" className="slider_image1" /></SwiperSlide>

                            <SwiperSlide><img src={sb6} alt="Client 1" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={sb7} alt="Client 2" className="slider_image1" /></SwiperSlide> */}
                            {/* <SwiperSlide><img src={unib} alt="Client 3" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={america} alt="Client 4" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={pub} alt="Client 5" className="slider_image1" /></SwiperSlide> */}
                        </Swiper>
                    </div>

                    {/* <div className="w-full overflow-hidden bg-gray-100 ">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={4}
                            loop={true}
                            speed={500}
                            autoplay={true}
                            freeMode={true}
                            breakpoints={{
                                300: { slidesPerView: 2, spaceBetween: 10 },
                                480: { slidesPerView: 2, spaceBetween: 15 },
                                768: { slidesPerView: 3, spaceBetween: 20 },
                                1024: { slidesPerView: 4, spaceBetween: 20 },
                            }}
                        >
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956252/Group_1171281015_co3kyl.svg"} alt="Client 1" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956252/Group_1171281016_ig40c4.svg"} alt="Client 2" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956251/Group_1171281017_g2suli.svg"} alt="Client 3" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956251/Group_1171281014_ljorwg.svg"} alt="Client 4" className="slider_image1" /></SwiperSlide>

                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956252/Group_1171281015_co3kyl.svg"} alt="Client 1" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956252/Group_1171281016_ig40c4.svg"} alt="Client 2" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956251/Group_1171281017_g2suli.svg"} alt="Client 3" className="slider_image1" /></SwiperSlide>
                            <SwiperSlide><img src={"https://res.cloudinary.com/dgif730br/image/upload/v1739956251/Group_1171281014_ljorwg.svg"} alt="Client 4" className="slider_image1" /></SwiperSlide>
                        </Swiper>
                    </div> */}


                </div>
            </div>
        </div>
    )
}

export default OurClient
