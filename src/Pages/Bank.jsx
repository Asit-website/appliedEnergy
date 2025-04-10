import React, { useState } from 'react';
import OurClient from '../Components/Home/OurClient';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import kij from '../assets/kij.svg'
// import rajat from '../../src/assets/rajat.png';
// import calling from '../../src/assets/calling.png';
// import message from '../../src/assets/message.png';
// import location from '../../src/assets/location.png';
import HomeNavbar from "../Common/HomeNavbar";
import Contacts from '../Components/Home/Contacts';
import Footer from '../Common/Footer';
import './Evcharge.css'
import "swiper/css";
import "swiper/css/pagination";
import "./Ups.css"

function More() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <HomeNavbar />

      
      {/* Header Section */}
      <div className="header">
        <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1741173272/ups-solution_dogbot.png" alt="Contact Header" layout="fill" objectFit="cover" className="header-image" />
        <div className="header-overlay">
          {/* <h1>OUR</h1> */}
          <p style={{color: "#0DAC50", fontWeight:"900", fontSize: "30px"}}>Bank </p>
        </div>
      </div>

      {/* Contact Info Section */}
      {/* <div className="contact-info">
        <div className='vikas'>
          <img src={calling} alt="Phone" className="icon-img" />
          <div className="info-box green">
            <p className="info-title">Phone Number</p>
            <p className="info-title1">+91 124 4330450</p>
          </div>
        </div>

        <div className='vikas'>
          <img src={location} alt="Location" className="icon-img" />
          <div className="info-box blue">
            <p className="info-title">Location</p>
            <p className="info-title1">3rd Floor, 288A, Udyog Vihar, Phase IV, Sector 18, Gurugram, HR – 122 015</p>
          </div>
        </div>

        <div className='vikas'>
          <img src={message} alt="Email" className="icon-img" />
          <div className="info-box green">
            <p className="info-title">Email</p>
            <p className="info-title1">contact@appliedenergytechnologies.com</p>
          </div>
        </div>
      </div> */}

      <hr />

      <div className='TextBox'>
      <div className='styledTextBox'>
           <h5>Banks support applied energy through financing, green investments, and sustainable energy initiatives.</h5>
      </div>
     </div>

      {/* Contact Form & Map Section */}

<div style={{padding: "5px 110px 50px 110px "}}>
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
          660: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1068: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1254: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
      >
       
     
          <SwiperSlide  className="sinel_slid22" >
            
            <div className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826585/slider3.7d2ae283bd3c4a99f100_1_jyojki.png" alt="Slide Image" />
              </div>
              <div className="slid_title">
                <h4> EV Charger 30</h4>
                {/* <p>PApplied Energy 2000VA</p> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide  className="sinel_slid22" >
            <div  className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
           
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826585/slider1.2c3260c9e47537e7a14f_1_r5zrlp.png" alt="Slide Image" />
               
              </div>
              <div className="slid_title">
                <h4> EV Charger 60 </h4>
                {/* <p>Applied Energy 3000VA</p> */}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="sinel_slid22" >
            <div  className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740838317/Screenshot_2025-03-01_194020_fsqox6.png" alt="Slide Image" />
              </div>
              <div className="slid_title">
                <h4>EV Charger 90 </h4>
                {/* <p>Applied Energy 5000VA</p> */}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide  className="sinel_slid22" >
            <div  className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1741159090/Screenshot_7-2-2025_52539__boe1xt-removebg-preview_r6iuhz.png" alt="Slide Image" />
              </div>
              <div className="slid_title">
                <h4 style={{textAlign:"center"}}>EV Charger 120 </h4>
                {/* <p> AET-240kW</p> */}
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide  className="sinel_slid22" >
            <div  className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826792/slider4.3bdc9c41c69bc985ad4e_1_hfy07q.png" alt="Slide Image" />
              </div>
              <div className="slid_title">
                <h4>EV Charger 120  </h4>
                <p>  </p>
              </div>
            </div>
            
          </SwiperSlide>

          
          <SwiperSlide  className="sinel_slid22" >
            <div  className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826792/slider4.3bdc9c41c69bc985ad4e_1_hfy07q.png" alt="Slide Image" />
              </div>
              <div className="slid_title">
              <h4>EV Charger 150  </h4>
                <p>  </p>
              </div>
            </div>
            
          </SwiperSlide>



          <SwiperSlide  className="sinel_slid22" >
            <div className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826792/slider4.3bdc9c41c69bc985ad4e_1_hfy07q.png" alt="Slide Image" />
              </div>
              <div className="slid_title">
              <h4>EV Charger 180  </h4>
                <p>  </p>
              </div>
            </div>
            
          </SwiperSlide>


          
   
          </Swiper>
    
          </div>
      {/* <OurClient /> */}
      {/* <Contacts /> */}

      <Footer />
    </div>
  );
}

export default More;
