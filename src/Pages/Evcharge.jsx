import React, { useState, useEffect } from 'react';
import OurClient from '../Components/Home/OurClient';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import kij from '../assets/kij.svg'
import primer from '../assets/primer.svg'
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
  const [pop, setPopi] = useState(false);
  const [popo, setPopp] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  useEffect(() => {
    const elementt = document.querySelector(".dbc");
    if (elementt) {
      elementt.style.setProperty("height", "352px", "important");
      elementt.style.setProperty("width", "195px", "important");
    }
  }, []);


  useEffect(() => {
    const elementt = document.querySelector(".ddb");
    if (elementt) {
      elementt.style.setProperty("height", "370px", "important");
      elementt.style.setProperty("width", "350px", "important");
    }
  }, []);

  return (
    <div>
      <HomeNavbar />


      {/* Header Section */}
      <div className="header">
        <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1741173272/ups-solution_dogbot.png" alt="Contact Header" layout="fill" objectFit="cover" className="header-image" />
        <div className="header-overlay">
          {/* <h1>OUR</h1> */}
          <p style={{ color: "#0DAC50", fontWeight: "900", fontSize: "30px" }}>EV/Charger </p>

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

      {/* text area input  */}
      <div className='TextBox'>
        <div className='styledTextBox'>
          <p>
            Applied Energy Technologies offers a range of <strong>DC fast chargers</strong> designed for
            <strong>efficient, reliable, and scalable</strong> electric vehicle charging. Built with
            <strong>high-performance technology</strong>, our chargers ensure
            <strong>fast charging speeds, broad EV compatibility, and seamless user experience</strong>
            while supporting the transition to <strong>sustainable mobility</strong>.
          </p>

          <h3 style={{ marginTop: "15px", fontWeight: "600" }}>Key Features</h3>
          <ul style={{ marginTop: "15px" }}>
            <li><strong>High Efficiency &amp; Stable Performance</strong> – Available in
              <strong>60kW, 60/120kW, 180kW, and 240kW</strong> configurations to meet varying power requirements.</li>
            <li><strong>Energy Optimized</strong> – Low idle power consumption for minimal energy waste.</li>
            <li><strong>User-Centric Design</strong> – Supports <strong>APP control, touchscreen, and Plug &amp; Charge</strong> for effortless operation.</li>
            <li><strong>Quiet &amp; Smart Operation</strong> – Low noise design (≤ 60 dB) with
              <strong>remote diagnostics and OTA upgrades</strong>.</li>
            <li><strong>Flexible Installation &amp; Maintenance</strong> – Pre-installed modular design for easy setup and servicing.</li>
            <li><strong>Multi-Language Support</strong> – Built-in interface with <strong>10+ languages</strong> for global usability.</li>
          </ul>

        </div>
      </div>

      {/* Contact Form & Map Section */}

      <div className='swipper' style={{ padding: "5px 110px 50px 110px " }}>
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


          {/* <SwiperSlide  className="sinel_slid22" >
            
            <div   className="single_slide" >
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826585/slider3.7d2ae283bd3c4a99f100_1_jyojki.png" alt="Slide Image" />
              </div>
              <div className="slid_title">
                <h4>EV Charger 30</h4>
                <p>PApplied Energy 2000VA</p>
              </div>
            </div>
          </SwiperSlide> */}
          <SwiperSlide className="sinel_slid22" >
            <div className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">

                {/* <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826585/slider1.2c3260c9e47537e7a14f_1_r5zrlp.png" alt="Slide Image" /> */}
                <img className='ddb' src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742890247/Screenshot_25-3-2025_133433_appliedast-my.sharepoint.com-removebg-preview_1_brcewc.png" alt="" />
              </div>
              <div className="slid_title">
                <h4> EV Charger 60 </h4>
                {/* <p>Applied Energy 3000VA</p> */}
              </div>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide className="sinel_slid22" >
            <div className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740838317/Screenshot_2025-03-01_194020_fsqox6.png" alt="Slide Image" />
              </div>
              <div className="slid_title">
                <h4>EV Charger 90 </h4>
                <p>Applied Energy 5000VA</p>
              </div>
            </div>
          </SwiperSlide> */}




          <SwiperSlide className="sinel_slid22" >
            <div onClick={() => setPopp(true)} className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img className='dbc' src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742890454/Screenshot_25-3-2025_132743_appliedast-my.sharepoint.com-removebg-preview_guy6gg.png" alt="" />
                {/* <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826792/slider4.3bdc9c41c69bc985ad4e_1_hfy07q.png" alt="Slide Image" /> */}
              </div>
              <div className="slid_title">
                <h4>EV Charger 120  </h4>
                <p>  </p>
              </div>
            </div>

          </SwiperSlide>


          {/* <SwiperSlide  className="sinel_slid22" >
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
            
          </SwiperSlide> */}



          <SwiperSlide className="sinel_slid22" >
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

          <SwiperSlide className="sinel_slid22" >
            <div onClick={() => setPopi(true)} className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1741159090/Screenshot_7-2-2025_52539__boe1xt-removebg-preview_r6iuhz.png" alt="Slide Image" />
              </div>
              <div className="slid_title">
                <h4>EV Charger 240 </h4>
                {/* <p> AET-240kW</p> */}
              </div>
            </div>
          </SwiperSlide>




        </Swiper>

      </div>

      {
        pop &&
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={() => setPopi(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
              <div className="pop_flex">
                <div className="pop_left">
                  <img id="carft" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1738886162/Screenshot_7-2-2025_52539__boe1xt.jpg" alt="" />
                </div>

                <div className="pop_right">
                  <div className="pop_container">
                    <h2>Ev Charger 240</h2>
                    <p>AET- <span>240kw</span>  Version</p>
                  </div>

                  <div className="pop_content">
                    <hr />
                    <p><span className="label">DC All-in-One:</span> High Power Charger</p>
                    <hr />
                    <p><span className="label">Secure & Flexible Payment Options:</span> Charge with confidence using Swipe Card, QR Code, or Password Input (optional), backed by IEC 62196-3 CCS-2 compatibility.</p>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Smart & Intuitive User Experience:</span> Navigate with ease using a 7-inch multilingual color touchscreen and enjoy seamless connectivity via OCPP1.6J, Ethernet, 3G, or 4G (optional).</p>
                      <p><span className="label">Effortless Installation & Reliable Performance:</span> Seamlessly integrates into any space with a ground-mounted design, ensuring high efficiency, stability, and durability.</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Intelligent Protection & Future Ready:</span> Stay protected with integrated overload safeguards and benefit from online data upgrades for continuous improvements.</p>
                    </div>
                  </div>


                </div>
                
              </div>
            </div>
          </div>
        </div>
      }

      {
        popo &&
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={() => setPopp(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
              <div className="pop_flex">
                <div className="pop_left" id='pop_lettt'>
                  <img id="carft" src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742890454/Screenshot_25-3-2025_132743_appliedast-my.sharepoint.com-removebg-preview_guy6gg.png" alt="" />
                </div>

                <div className="pop_right">
                  <div className="pop_container">
                    <h2>Ev Charger 120</h2>
                    <p>AET- <span>120kw</span>  Version</p>
                  </div>

                  <div className="pop_content">
                    <hr />
                    <p><span className="label">Charger Capacity:</span> 120KW</p>
                    <hr />
                    <p><span className="label">Model No:</span> AET-120kW</p>

                    <div className="utility">
                      <p><span className="label">AC Supply System:</span> Three-Phase, 5 Wire AC system (optional)</p>
                      <p><span className="label">Nominal Input voltage:</span> AC380V± 15%</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Input frequency:</span> 50/60Hz</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Ambient Temperature Range:</span> -25 to 55°C</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Storage temperature:</span> -40 to 70°C</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">IP Ratings:</span> IP 54</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Cooling:</span> Air-Cooled</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Number of outputs:</span> 2</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Type of each output:</span> DC200-1000V</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Single Output Max. Current:</span> 200 Amp</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Output Connector Compatibility:</span> IEC 62196 2017, IEC 61851 2017, etc.</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Connector Mounting:</span> Outdoor use</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Emergency stop switch:</span> Support</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Display:</span> 7 Inches Touch Screen with Shell</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">User Authentication:</span> QR Code/RFID Card /Password Login</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Metering Information:</span> Consumption Units</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Communication between EVSE and:</span> OCPP 1.6J protocol (Optional) Central Server</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Metering:</span> Grid responsive metering as per units ‘consumption</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Interface between charger and CMS:</span> Ethernet/3G/4G (Optional)</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Safety Parameters:</span> Over Current, Over Voltage, Under Current, Under Voltage, Residual Current, Surge Protection, Leakage Protection, Short Circuit, Over Temperature, etc.</p>
                    </div>
                    <hr />
                  </div>


                </div>


              </div>
            </div>
          </div>
        </div>
      }
      {/* <OurClient /> */}
      {/* <Contacts /> */}

      <Footer />
    </div>
  );
}

export default More;
