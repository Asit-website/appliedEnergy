import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import kij from '../assets/kij.svg';
import primer from '../assets/primer.svg'



const images = [
  "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754703/WhatsApp_Image_2025-02-28_at_8.11.13_PM_1_olyljx.jpg",
  "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754702/WhatsApp_Image_2025-02-28_at_8.11.10_PM_rwtoke.jpg",
  "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754702/WhatsApp_Image_2025-02-28_at_8.11.13_PM_mh65xk.jpg",
  "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754701/WhatsApp_Image_2025-02-28_at_8.11.12_PM_s4nn6s.jpg",
] || [];

const Slider = ({ sliderData }) => {
  const [pop, setPop] = useState(false);
  const [popo, setPopo] = useState(false);
  const [pop1, setPop1] = useState(false);
  const [pop2, setpop2] = useState(false);
  const [pop3, setpop3] = useState(false);
  const [pop4, setpop4] = useState(false);
  const [pop5, setpop5] = useState(false);
  const [pop6, setpoppp] = useState(false);
  const [buffer, setbuffer] = useState(false);

  const swiperRef = useRef(null);
  useEffect(() => {
    const element = document.querySelector(".aet1");

    if (element) {
      element.style.setProperty("height", "370px", "important");
      element.style.setProperty("width", "200px", "important");
    }

  }, []);


  useEffect(() => {
    const elementt = document.querySelector(".technologic");
    if (elementt) {
      elementt.style.setProperty("height", "500px", "important");
      elementt.style.setProperty("width", "300px", "important");
    }
  }, []);


  useEffect(() => {
    const elementt = document.querySelector(".screen");
    if (elementt) {
      elementt.style.setProperty("height", "330px", "important");
      elementt.style.setProperty("width", "300px", "important");
    }
  }, []);



  return (
    <div>
      {/* Navigation Arrows */}
      <div className="s4wraarows">
        <FaArrowLeftLong
          className="aros"
          onClick={() => swiperRef.current?.slidePrev()} // Left button working
        />
        <FaArrowRightLong
          className="aros"
          onClick={() => swiperRef.current?.slideNext()} // Right button working
        />
      </div>

      {/* Swiper Component */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={4}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          250: { slidesPerView: 1, spaceBetween: 20 },
          660: { slidesPerView: 2, spaceBetween: 10 },
          1068: { slidesPerView: 3, spaceBetween: 20 },
          1254: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >

        <SwiperSlide className="sinel_slid22" >
          <div onClick={() => setPop(true)} className="single_slide">
            <img className="testy" width={40} height={40} src={kij} alt="kij" />
            <div className="slidim_wrs">
              <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826585/slider3.7d2ae283bd3c4a99f100_1_jyojki.png" alt="Slide Image" />
            </div>
            <div className="slid_title">
              <h4>Telecom-in-A-Box</h4>
              <p>Power Solution 24kw Version</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sinel_slid22" >
          <div onClick={() => setPopo(true)} className="single_slide">
            <img className="testy" width={40} height={40} src={kij} alt="kij" />
            <div className="slidim_wrs">

              <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826585/slider1.2c3260c9e47537e7a14f_1_r5zrlp.png" alt="Slide Image" />

            </div>
            <div className="slid_title">
              <h4>Telecom-in-A-Box</h4>
              <p>Power Solution 6kw Version</p>
            </div>
          </div>
        </SwiperSlide>



   
        <SwiperSlide className="sinel_slid22" >
          <div onClick={() => setbuffer(true)} className="single_slide">
            <img className="testy" width={40} height={40} src={kij} alt="kij" />
            <div className="slidim_wrs">
              <img id="amuno" src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743637636/Screenshot_3-4-2025_430_-removebg-preview_ev3kkj.png" alt="Slide Image" />
            </div>
            <div className="slid_title">
              {/* <h4>Telecom-in-A-Box</h4> */}
              <p> AET-60kW</p>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide className="sinel_slid22" >
          <div onClick={() => setpoppp(true)} className="single_slide">
            <img className="testy" width={40} height={40} src={kij} alt="kij" />
            <div className="slidim_wrs">
              <img className="aet1" src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743633468/Screenshot_3-4-2025_4331_-removebg-preview_hjo1f7.png" alt="Slide Image" />
            </div>
            <div className="slid_title">
              {/* <h4>Telecom-in-A-Box</h4> */}
              <p> AET-120kW</p>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide className="sinel_slid22" >
          <div onClick={() => setpop2(true)} className="single_slide">
            <img className="testy" width={40} height={40} src={kij} alt="kij" />
            <div className="slidim_wrs">
              <img className="screen" src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744229106/Screenshot_7-2-2025_52539__boe1xt-removebg-preview_r6iuhz_1_qn6gne.png" alt="Slide Image" />
            </div>
            <div className="slid_title">

              {/* <h4>Telecom-in-A-Box</h4> */}
              <p> AET-240kW</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="sinel_slid22" >
          <div onClick={() => setPop1(true)} className="single_slide">
            <img className="testy" width={40} height={40} src={kij} alt="kij" />
            <div className="slidim_wrs">
              <img src="https://res.cloudinary.com/dgif730br/image/upload/v1744209517/WhatsApp_Image_2025-04-07_at_2.15.50_PM_rxtbko.jpg" alt="Slide Image" />
            </div>
            <div className="slid_title">
              {/* <h4>Telecom-in-A-Box</h4> */}
              <p>UPS AU230-1000</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="sinel_slid22" >
          <div onClick={() => setpop3(true)} className="single_slide">
            <img className="testy" width={40} height={40} src={kij} alt="kij" />
            <div className="slidim_wrs">
              <img src="https://res.cloudinary.com/dgif730br/image/upload/v1744209517/WhatsApp_Image_2025-04-07_at_2.15.50_PM_rxtbko.jpg" alt="Slide Image" />
            </div>
            <div className="slid_title">
              {/* <h4>Telecom-in-A-Box</h4> */}
              <p>UPS AU230-2000</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sinel_slid22" >
          <div onClick={() => setpop4(true)} className="single_slide">
            <img className="testy" width={40} height={40} src={kij} alt="kij" />
            <div className="slidim_wrs">
              <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743399726/APPLIED_ENERGY._c3znhu.png" alt="Slide Image" />
            </div>
            <div className="slid_title">
              {/* <h4>Telecom-in-A-Box</h4> */}
              <p>UPS AU230-3000</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="sinel_slid22" >
          <div onClick={() => setpop5(true)} className="single_slide">
            <img className="testy" width={40} height={40} src={kij} alt="kij" />
            <div className="slidim_wrs">
              <img src="https://res.cloudinary.com/dgif730br/image/upload/v1744203541/WhatsApp_Image_2025-04-07_at_2.16.23_PM_chybcd.jpg" alt="Slide Image" />
            </div>
            <div className="slid_title">
              {/* <h4>Telecom-in-A-Box</h4> */}
              <p>UPS AU230-5000</p>
            </div>
          </div>
        </SwiperSlide>
        {/* 
          <SwiperSlide  className="sinel_slid22" >
            <div onClick={() => setPopo(true)} className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826585/slider2.4cbda7f5f48647c8ff28_1_kpqmxf.png" alt="Slide Image" />
              </div>
              <div className="slid_title">
                <h4>Telecom-in-A-Box</h4>
                <p>Power Solution 24kw Version</p>
              </div>
            </div>
          </SwiperSlide> */}



      </Swiper>
      {
        pop &&
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={() => setPop(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
              <div className="pop_flex">
                <div className="pop_left" id="pop_lefttt">
                  {/* <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754702/WhatsApp_Image_2025-02-28_at_8.11.13_PM_mh65xk.jpg" alt="" /> */}
                  <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1741604158/slider3.7d2ae283bd3c4a99f100_1_jyojki-removebg-preview_p0qo5r.png" alt="" />
                </div>
                <div className="pop_right">
                  <div className="pop_container">
                    <h2 style={{ color: "green" }}>Telecom-in-A-Box</h2>
                    <p>Power Solution <span>24kw</span>  Version</p>
                  </div>

                  {/* <div className="pop_content">
                    <hr />
                    <p>Cabinet OD : <span>IP 55 GI, Powder Coated 850x750x600x2200 mm (As per GA)</span></p>
                    <hr />
                    <p>0/P DC Power Capacity (Rectifier) : <span>3kW/4kW</span></p>
                    <hr />
                    <div className="utility">
                      <p>Ultimate Capacity : <span>24 kW</span></p>
                      <span>|</span>
                      <p>Rectifier Efficiency : <span> 96%</span></p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p>Mounting Arrangement  : <span>Floor</span></p>
                      <span>|</span>
                      <p className="cable_ut">Cable Entry :  <span>DC & AC Power - 8 Nos <br /> PG29 Gland - Both side</span> <br />
                      </p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p>Cooling :  <span>Dynamic DC Fan cooling</span></p>
                      <span>|</span>
                      <p>Filter  : <span>Nylon 20 micron @ 90 %</span></p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p >Alarms PFC 0/P - 6 Nos :  <span>Door Open <br /> Smoke / Fire <br />Mains Fail / Power fail <br /> High Temperature <br /> DC Bus fail/ DC Low Volatge Alarm <br /> Rectifier overload/ fail</span>
                      </p>
                      <span>|</span>
                      <p>Nominal I/P AC
                        : <span>Nominal 230V</span></p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>AC Range
                        : <span>90-300V
                        </span></p>
                      <span>|</span>
                      <p>Full Power AC Range:  <span>180-300V</span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Connection

                        : <span>3 Phase 4 wire
                        </span></p>
                      <span>|</span>
                      <p>SPD:  <span>Class C 8/20uSec, 20kA</span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Input Protection
                        : <span>MCB 3 P with netural terminal/ 16 Amps
                        </span></p>
                      <span>|</span>
                      <p>Battery:  <span>VRLA Battery - Upto 600Ah Or Li-Battery 5x100Ah
                      </span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Distribution : <span>MCBs 16A-SP- 4 Nos<br /> MCBs 32A-SP-4 Nos <br />MCBs 63A-SP-4 Nos <br /> MCBs 6A-SP-2 Nos- for FAN & Controller (ExternaI use) <br /> </span>
                      </p>
                      <span>|</span>
                      <p>Controller & Alarm Management

                        : <span>Applied Energy iEdge Controller (iTC Controller)</span></p>
                    </div>
                    <hr />


                    <div className="utility">
                      <p>Remote Monitoring: <span>Grid Energy Monitoring -Optional<br /> Battery voltage Monitoring
                        <br />Battery SOC Monitoring
                        <br /> Power plant Status & Alarm
                        <br />Total DC Energy (Peak Logging Facility)
                        <br />Ext Alarm Monitoring - 4 PFC (Door Open, Fire/ Smoke, etc)


                      </span>
                      </p>
                      <span>|</span>
                      <p>Management Platform

                        : <span>Cloud based Applied Energy AI/ML Energy Management Platform</span></p>
                    </div>
                    <hr />


                    <div className="utility">
                      <p>Solar Interface


                        : <span>Optional - external

                        </span></p>


                    </div>
                    <hr />



                  </div> */}

                  <div className="pop_content">
                    <hr />
                    <p><span className="label">Cabinet OD:</span> IP 55 GI, Powder Coated 850x750x600x2200 mm (As per GA)</p>
                    <hr />
                    <p><span className="label">0/P DC Power Capacity (Rectifier):</span> 3kW/4kW</p>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Ultimate Capacity:</span> 24 kW</p>
                      <p><span className="label">Rectifier Efficiency:</span> 96%</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Mounting Arrangement:</span> Floor</p>
                      <p className="cable_ut"><span className="label">Cable Entry:</span> DC & AC Power - 8 Nos. PG29 Gland - Both side</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Cooling:</span> Dynamic DC Fan cooling</p>
                      <p><span className="label">Filter:</span> Nylon 20 micron @ 90%</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Alarms PFC 0/P - 6 Nos:</span></p>
                      <ul>
                        <li>Door Open</li>
                        <li>Smoke / Fire</li>
                        <li>Mains Fail / Power fail</li>
                        <li>High Temperature</li>
                        <li>DC Bus fail / DC Low Voltage Alarm</li>
                        <li>Rectifier overload / fail</li>
                      </ul>
                      <p><span className="label">Nominal I/P AC:</span> Nominal 230V</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">AC Range:</span> 90-300V</p>
                      <p><span className="label">Full Power AC Range:</span> 180-300V</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Connection:</span> 3 Phase 4 wire</p>
                      <p><span className="label">SPD:</span> Class C 8/20uSec, 20kA</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Input Protection:</span> MCB 3 P with neutral terminal / 16 Amps</p>
                      <p><span className="label">Battery:</span> VRLA Battery - Upto 600Ah or Li-Battery 5x100Ah</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Distribution:</span></p>
                      <ul>
                        <li>MCBs 16A-SP - 4 Nos</li>
                        <li>MCBs 32A-SP - 4 Nos</li>
                        <li>MCBs 63A-SP - 4 Nos</li>
                        <li>MCBs 6A-SP - 2 Nos - for FAN & Controller (External use)</li>
                      </ul>
                      <p><span className="label">Controller & Alarm Management:</span> Applied Energy iEdge Controller (iTC Controller)</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Remote Monitoring:</span></p>
                      <ul>
                        <li>Grid Energy Monitoring - Optional</li>
                        <li>Battery voltage Monitoring</li>
                        <li>Battery SOC Monitoring</li>
                        <li>Power plant Status & Alarm</li>
                        <li>Total DC Energy (Peak Logging Facility)</li>
                        <li>Ext Alarm Monitoring - 4 PFC (Door Open, Fire / Smoke, etc)</li>
                      </ul>
                      <p><span className="label">Management Platform:</span> Cloud based Applied Energy AI/ML Energy Management Platform</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Solar Interface:</span> Optional - external</p>
                    </div>
                    <hr />
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {
        popo &&
        <div className="pop-container" id="popp-container">
          <div className="pop-home">
            <img onClick={() => setPopo(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
              <div className="pop_flex" id="pop_fleeex">
                {/* Swiper Slider */}
                <div className="pop_left" id="popp_left">
                  <Swiper

                    slidesPerView={1}
                    //  spaceBetween={19}
                    autoplay={{
                      disableOnInteraction: false,
                    }}
                    // Ensure ke navigation enable ho
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]} // Navigation module bhi add karo
                  >
                    {images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img src={img} alt={`Slide ${index}`} className="popup-image" />
                      </SwiperSlide>
                    ))}
                  </Swiper>


                </div>

                <div className="pop_right" id="popp_right">
                  <div className="pop_container" id="#uniquePopup ">
                    <h2 style={{ color: "green" }}>Telecom-in-A-Box</h2>
                    <p>
                      Power Solution <span>6kw</span> Version
                    </p>
                  </div>



                  {/* <div className="pop_content">
                    <hr />
                    <p>
                      Cabinet OD : <span>IP 55 GI , Powder Coated 600x600x1100 mm ( As per GA )</span>
                    </p>
                    <hr />
                    <p>
                      0/P DC Power Capacity (Rectifier) : <span> 2kW</span>
                    </p>
                    <hr />
                    <p>
                      0/P Ac Power Capacity (Inverter) :{" "}
                      <span> 400VA - Optional - 2 U unit with DC & AC Connection</span>
                    </p>
                    <hr />
                    <div className="utility">
                      <p>
                        Ultimate Capacity : <span>6 kW</span>
                      </p>
                      <span>|</span>
                      <p>
                        Rectifier Efficiency : <span> 96%</span>
                      </p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p>
                        Mounting Arrangement : <span>Floor</span>
                      </p>
                      <span>|</span>
                      <p className="cable_ut">
                        Cable Entry : <span>DC & AC Power - 6 Nos </span>
                        <br />
                        <span>PG29 Gland - Both side</span>
                        <br />
                        <span>PG29 Gland - Both side</span>
                      </p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p>
                        Cooling : <span>Dynamic DC Fan cooling</span>
                      </p>
                      <span>|</span>
                      <p>
                        Filter : <span>Nylon 20 micron @ 90 %</span>
                      </p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p>
                        Alarms PFC 0/P - 6 Nos :
                        <span>
                          Door Open <br /> Smoke / Fire <br />
                          Mains Fail / Power fail <br /> High Temperature <br /> DC Bus fail/ DC Low
                          Voltage Alarm <br /> Rectifier overload/ fail
                        </span>
                      </p>
                      <span>|</span>
                      <p>
                        Nominal I/P AC : <span>Nominal 230V</span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>
                        AC Range : <span>90-300V</span>
                      </p>
                      <span>|</span>
                      <p>
                        Full Power AC Range: <span>180-300V</span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>
                        Connection : <span>3 Phase 4 wire</span>
                      </p>
                      <span>|</span>
                      <p>
                        SPD: <span>Class C 8/20uSec, 20kA</span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>
                        Input Protection :{" "}
                        <span>MCB 3 P with neutral terminal/ 16 Amps</span>
                      </p>
                      <span>|</span>
                      <p>
                        Battery: <span> U- Battery - 48V Upto 100Ah x2</span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>
                        Distribution :{" "}
                        <span>
                          3 Nos MCBs 6A-SP with +ve Terminal
                          <br />
                          2 terminal & 5 pin /5A socket for AC load with glass fuse protection
                          <br />
                        </span>
                      </p>
                      <span>|</span>
                      <p>
                        Controller & Alarm Management :{" "}
                        <span>Applied Energy iEdge Controller (iTC Controller)</span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>
                        Remote Monitoring:{" "}
                        <span>
                          Grid Energy Monitoring - Optional
                          <br />
                          Battery voltage Monitoring
                          <br />
                          Battery SOC Monitoring
                          <br />
                          Power plant Status & Alarm
                          <br />
                          Total DC Energy (Peak Logging Facility)
                          <br />
                          Inverter Status & Alarm
                          <br />
                          Inverter 0/P Voltage
                          <br />
                          Total DC Energy (Peak Logging Facility)
                          <br />
                          Ext Alarm Monitoring - 4 PFC (Door Open, Fire/ Smoke, etc)
                        </span>
                      </p>
                      <span>|</span>
                      <p>
                        Management Platform :{" "}
                        <span>Cloud based Applied Energy AI/ML Energy Management Platform</span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>
                        Solar Interface : <span>Optional - external</span>
                      </p>
                    </div>
                    <hr />
                  </div> */}

                  <div className="pop_content">
                    <hr />
                    <p><span className="label">Cabinet OD:</span> IP 55 GI , Powder Coated 600x600x1100 mm (As per GA)</p>
                    <hr />
                    <p><span className="label">0/P DC Power Capacity (Rectifier):</span> 2kW</p>
                    <hr />
                    <p><span className="label">0/P AC Power Capacity (Inverter):</span> 400VA - Optional - 2 U unit with DC & AC Connection</p>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Ultimate Capacity:</span> 6 kW</p>
                      <p><span className="label">Rectifier Efficiency:</span> 96%</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Mounting Arrangement:</span> Floor</p>
                      <p className="cable_ut"><span className="label">Cable Entry:</span> DC & AC Power - 6 Nos, PG29 Gland - Both side, PG29 Gland - Both side</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Cooling:</span> Dynamic DC Fan cooling</p>
                      <p><span className="label">Filter:</span> Nylon 20 micron @ 90%</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Alarms PFC 0/P - 6 Nos:</span> Door Open, Smoke / Fire, Mains Fail / Power fail, High Temperature, DC Bus fail / DC Low Voltage Alarm, Rectifier overload / fail</p>
                      <p><span className="label">Nominal I/P AC:</span> Nominal 230V</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">AC Range:</span> 90-300V</p>
                      <p><span className="label">Full Power AC Range:</span> 180-300V</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Connection:</span> 3 Phase 4 wire</p>
                      <p><span className="label">SPD:</span> Class C 8/20uSec, 20kA</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Input Protection:</span> MCB 3 P with neutral terminal / 16 Amps</p>
                      <p><span className="label">Battery:</span> U-Battery - 48V Upto 100Ah x2</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Distribution:</span> 3 Nos MCBs 6A-SP with +ve Terminal, 2 terminal & 5 pin / 5A socket for AC load with glass fuse protection</p>
                      <p><span className="label">Controller & Alarm Management:</span> Applied Energy iEdge Controller (iTC Controller)</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Remote Monitoring:</span> Grid Energy Monitoring - Optional, Battery voltage Monitoring, Battery SOC Monitoring, Power plant Status & Alarm, Total DC Energy (Peak Logging Facility), Inverter Status & Alarm, Inverter 0/P Voltage, Total DC Energy (Peak Logging Facility), Ext Alarm Monitoring - 4 PFC (Door Open, Fire/ Smoke, etc)</p>
                      <p><span className="label">Management Platform:</span> Cloud based Applied Energy AI/ML Energy Management Platform</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Solar Interface:</span> Optional - external</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Space for Active Equipment:</span> 3U</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Mounting Arrangement:</span> Floor</p>
                    </div>
                  </div>




                </div>
              </div>
            </div>
          </div>
        </div>
      }

{
        buffer &&
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={() =>setbuffer(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
              <div className="pop_flex">
                <div className="pop_left" id='pop_lettt'>
                  <img id="carft" src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743637636/Screenshot_3-4-2025_430_-removebg-preview_ev3kkj.png" alt="" />
                </div>

                <div className="pop_right">
                  <div className="pop_container">
                    <h2>Ev Charger 60</h2>
                    <p>AET- <span>60kw</span>  Version</p>
                  </div>

                  <div className="pop_content">
                    <hr />
                    <p><span className="label"> Voltage:</span> 415/480 V AC±10%</p>
            
                    <p><span className="label">Frequency:</span> 50/60 Hz ±10%</p>
                    <p><span className="label"> Input Wiring:</span> 3P+N+PE</p>
                    <hr />

                    <div className="utility">
                      <p><span className="label"> Power:</span>  60 kW</p>
                   
                     
                    
                    </div>
                    <hr />
                    <div className="utility">
                    <p><span className="label"> Voltage:</span> 200 VDC-1000 VDC</p>
                    </div>
                    <hr />
                    <div className="utility">
                    <p><span className="label">  Max current:</span> 200 A</p>  
</div>
<hr />
<div className="utility">
<p><span className="label">   Two outlets:</span>  CCS 2+ CCS 2</p>  
</div>
                    <hr />
                    <div className="utility">
                      <p><span className="label"> HDMI:</span> 7" high brightness</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label"> Network:</span>  Standard: Ethernet & GPRS, Optional -Wi-Fi</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Protocol:</span> OCPP 1.6J, Compatible to OCPP 2.0J</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label"> Electrical:</span> Protection against short circuits, over-voltage, under-voltage, over
temperature, surge, lighting; Detection of grounding, insulation, phase
 Sequence, Leakage current</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label"> Standards:</span> IEC61851-23/-24, IEC 62196-3, DIN70121, ISO15118</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label"> Online:</span>  APP based,  RFID: ISO 14443 mifare1,  ISO 15118 Plug & Charge</p>
                    </div>
               
                    <hr />
                    <div className="utility">
                      <p><span className="label"> Offline:</span> Whitelisted RFID card,  Password</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Dimension:</span>  (HxWxD) 1320 x 660 x 236 mm.</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label"> Weight:</span> 110Kg</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label"> Cable:</span>  Standard: 5 m; Optional: 7 m; (Cable management system is optional)</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Display:</span> 7 Inches Touch Screen with Shell</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label"> Standby Power:</span>  More then 30 W</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label"> Installation:</span> Ground Mounted</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label"> Storage Temp:</span> -40°C to +80° C  </p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label">Operation Temp:</span> -30°C to +55°C</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label"> Humidity:</span>  5% to 95%</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span className="label"> Altitude:</span>  More then 2000 meters.</p>
                 
                      <p><span className="label">  Noise:</span>  More then 60 dB (A).</p>
                    
                      <p><span className="label">   Warranty:</span>   3 years.</p>
                    </div>
                 
                   
                  </div>
                  <hr />


                </div>


              </div>
            </div>
          </div>
        </div>
      }

      {
        pop1 &&
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={() => setPop1(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
              <div className="pop_flex">
                <div className="pop_left" id="pop_leftt">
                  <img src="https://res.cloudinary.com/dgif730br/image/upload/v1744209517/WhatsApp_Image_2025-04-07_at_2.15.50_PM_rxtbko.jpg" alt="" />
                </div>
                <div className="pop_right">
                  <div className="pop_container">
                    <h2 style={{ color: "green" }}>UPS AU230-1000</h2>
                    <p>Applied Energy <span>1000VA</span>  Version </p>
                  </div>

                  {/* <div className="pop_content">
                    <hr />
                    <p>Category : <span>Rack/Tower UPS</span></p>
                    <hr />
                    <p>VA Rating : <span>1000 VA</span></p>
                    <hr />
                    <div className="utility">
                      <p>UWattage : <span>800 W</span></p>
                      <span>|</span>
                      <p>Topology : <span> Double conversion online</span></p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p>Form Factor  : <span>Rack</span></p>
                      <span>|</span>
                      <p>Cable Entry :  <span> 90% (Full Load) </span>
                      </p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p>Efficiency :  <span>Grater then 90% (Full Load)</span></p>
                      <span>|</span>
                      <p>Weight  : <span>10 kg</span></p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p >Dimensions (HxWxD) :  <span>Door Open <br /> 224×145×288 mm
                      </span>
                      </p>
                      <span>|</span>
                      <p>Input Voltage
                        : <span>230V – 1 Phase</span></p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Input Voltage Range
                        : <span>176-276 V (100-276 V with derating)

                        </span></p>
                      <span>|</span>
                      <p>Input Cord Length:  <span>1.8 m</span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Input Frequency

                        : <span>Greater then 40Hz (auto-sensing)
                        </span></p>
                      <span>|</span>
                      <p>Output Voltage:  <span>230V default (220/230/240V), adjustable
                      </span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Bypass type
                        : <span>Internal bypass (automatic and manual)
                        </span></p>
                      <span>|</span>
                      <p>Output Voltage Regulation
                        :  <span>+/- 1%
                        </span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Output Connections : <span>4 x India 2/3-pin 6A
                        <br /> </span>
                      </p>
                      <span>|</span>
                      <p>Output Frequency

                        : <span>50/60 Hz</span></p>
                    </div>
                    <hr />


                    <div className="utility">
                      <p>Output Waveform: <span>Sine wave


                      </span>
                      </p>
                      <span>|</span>
                      <p>Voltage Distortion

                        : <span>Small then 3% (linear load)
                        </span></p>
                    </div>
                    <hr />


                    <div className="utility">
                      <p>Battery Type


                        : <span>Sealed, lead-acid (Swappable)

                        </span></p>


                    </div>

                    <hr />

                    <div className="utility">
                      <p>Battery Voltage


                        : <span>24V

                        </span></p>


                    </div>
                    <hr />
                    <div className="utility">
                      <p>Max Charger Power


                        : <span>30W

                        </span></p>


                    </div>
                    <hr />
                    <div className="utility">
                      <p>Operating Temperature


                        : <span>0°C to 40°C

                        </span></p>


                    </div>
                    <hr />
                    <div className="utility">
                      <p>Relative Humidity



                        : <span>0-96% (non-condensing)


                        </span></p>


                    </div>

                    <hr />

                    <div className="utility">
                      <p>Altitude



                        : <span>Up to 3000 m


                        </span></p>


                    </div>

                    <hr />
                    <div className="utility">
                      <p>Noise Level



                        : <span>Greater then 40 dB at 1 meter



                        </span></p>


                    </div>
                    <hr />

                    <div className="utility">
                      <p>BTU Level



                        : <span>380 Btu/h



                        </span></p>


                    </div>
                    <hr />


                    <div className="utility">
                      <p>Display



                        : <span>Multifunction LCD status and control console




                        </span></p>


                    </div>
                    <hr />

                    <div className="utility">
                      <p>Alarm



                        : <span>Alarm when on battery: distinctive low battery alarm: overload continuous tone alarm




                        </span></p>


                    </div>
                    <hr />

                  </div> */}

                    <div className="pop_content">
                      <hr />
                      <p><span>Category:</span> Rack/Tower UPS</p>
                      <hr />
                      <p><span>VA Rating:</span> 1000 VA</p>
                      <hr />
                      <div className="utility">
                        <p><span>Wattage:</span> 4000 W</p>
                        <p><span>Topology:</span> Line interactive</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Form Factor:</span> Rack</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Efficiency:</span> Greater than 95% (Full Load)</p>
                        <p><span>Weight:</span> 100 kg</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Dimensions (HxWxD):</span> 224×483×660 mm</p>
                        <p><span>Input Voltage:</span> 230V – 1 Phase</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Input Voltage Range:</span> 1230V – 1 Phase</p>
                        <p><span>Input Voltage Range:</span> 160-286 V (151-302 V with derating)</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Input Cord Length:</span> 1.8 m</p>
                        <p><span>Output Voltage:</span> 230V default (220/230/240V), adjustable</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Input Frequency:</span> 50/60 Hz +/- 3 Hz auto-sensing</p>
                        <p><span>Input Power Factor:</span> Greater than 0.99</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Bypass Type:</span> Internal bypass (automatic and manual)</p>
                        <p><span>Output Voltage Regulation:</span> +/- 1%</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Output Connections:</span> 8 x IEC 320 C13 and 2 x IEC 320 C19 outlets</p>
                        <p><span>Output Frequency:</span> 47 to 53 Hz for 50 Hz nominal sync to mains</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Output Waveform:</span> Sine wave</p>
                        <p><span>Voltage Distortion:</span> Less than 5% (full load)</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Battery Type:</span> Sealed, lead-acid (Swappable)</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Battery Voltage:</span> 48V</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Max Charger Power:</span> 542W</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Operating Temperature:</span> 0°C to 40°C</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Relative Humidity:</span> 0-96% (non-condensing)</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Altitude:</span> Up to 3000 m</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Noise Level:</span> 53 dBA at 1 meter</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>BTU Level:</span> 3470 Btu/h</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Display:</span> LED status display with online, on battery, replace battery, and overload indicators</p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p><span>Alarm:</span> Audible and visible alarms, configurable delays</p>
                      </div>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </div>
      
      }

      {
        pop2 &&
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={() => setpop2(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
              <div className="pop_flex">
                <div className="pop_left">
                  <img id="carft" src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744229106/Screenshot_7-2-2025_52539__boe1xt-removebg-preview_r6iuhz_1_qn6gne.png" alt="" />
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

      {pop3 && (
        pop3 &&
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={() => setpop3(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
              <div className="pop_flex">
                <div className="pop_left" id="pop_leftt">
                  <img src="https://res.cloudinary.com/dgif730br/image/upload/v1744209517/WhatsApp_Image_2025-04-07_at_2.15.50_PM_rxtbko.jpg" alt="" />
                </div>

                <div className="pop_right">
                  <div className="pop_container">
                    <h2>UPS AU230-2000</h2>
                    <p>Applied Energy <span>2000VA</span>  Version</p>
                  </div>

                  <div className="pop_content">
                    <hr />
                    <p><span>Category:</span> Rack/Tower UPS</p>
                    <hr />
                    <p><span>Wattage:</span> 1600 W</p>
                    <hr />
                    <div className="utility">
                      <p><span>Topology:</span> Double conversion online</p>
                      <p><span>Form Factor:</span> Rack</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Efficiency:</span> 90%</p>
                      <p className="cable_ut"><span>Weight:</span> 19 kg</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Dimensions (HxWxD):</span> 90×434×462 mm</p>
                      <p><span>Input Voltage:</span> 230V – 1 Phase</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Input Voltage Range:</span> 160-280 V (110-280 V with derating)</p>
                      <p><span>Input Cord Length:</span> Circuit breaker</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Input Frequency:</span> 40Hz (auto-sensing)</p>
                      <p><span>Input Power Factor:</span> 0.99</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Output Voltage:</span> 230V default (220/230/240V), adjustable</p>
                      <p><span>Output Voltage Regulation:</span> C+/- 1%</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Output Connections:</span> 4 x India 3-pin 6A</p>
                      <p><span>Output Frequency:</span> V50/60 Hz</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Output Waveform:</span> Sine wave</p>
                      <p><span>Voltage Distortion:</span> A 3% (linear load)</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Battery Type:</span> Sealed, lead-acid (Swappable) Battery voltage Monitoring</p>
                      <p><span>Battery Voltage:</span> 48V</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Max Charger Power:</span> 48V 144W</p>
                    </div>
                    <div className="utility">
                      <p><span>Operating Temperature:</span> 0°C to 50°C 144W</p>
                      <p><span>Relative Humidity:</span> 0-96% (non-condensing)</p>
                      <p><span>Altitude:</span> Up to 3000 m</p>
                      <p><span>Noise Level:</span> 50 dB at 1 meter</p>
                      <p><span>Display:</span> Multifunction LCD status and control console</p>
                      <p><span>BTU:</span> 745 Btu/hr</p>
                      <p><span>Alarm:</span> Audible and visible alarms: prioritized by severity</p>
                    </div>
                  </div>


                </div>

                {/* <div className="pop_right">
                  <div className="pop_container">
                    <h2 style={{ color: "green" }}>UPS AU230-2000</h2>
                    <p>Applied Energy <span>2000VA</span>  Version</p>
                  </div>

                  <div className="pop_content">
                    <hr />
                    <p>Category : <span>Rack/Tower UPS</span></p>
                    <hr />
                    <p>Wattage: <span>1600 W</span></p>
                    <hr />
                    <div className="utility">
                      <p>Topology: <span>Double conversion online</span></p>
                      <span>|</span>
                      <p>Form Factor : <span> Rack</span></p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p>Efficiency : <span>90%</span></p>
                      <span>|</span>
                      <p>Weight :  <span>19 kg </span> <br />
                      </p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p>Dimensions (HxWxD):  <span>90×434×462 mm</span></p>
                      <span>|</span>
                      <p>Input Voltage : <span>230V – 1 Phase</span></p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p >Input Voltage Range :  <span>160-280 V (110-280 V with derating) <br /> </span>
                      </p>
                      <span>|</span>
                      <p>Input Cord Length
                        : <span>Circuit breaker</span></p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Input Frequency
                        : <span>40Hz (auto-sensing)
                        </span></p>
                      <span>|</span>
                      <p>Input Power Factor  <span> 0.99</span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Output Voltage

                        : <span>230V default (220/230/240V), adjustable

                        </span></p>
                      <span>|</span>
                      <p>Output Voltage Regulation:  <span>C+/- 1%</span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Output Connections
                        : <span>4 x India 3-pin 6A
                        </span></p>
                      <span>|</span>
                      <p>BOutput Frequency:  <span>V50/60 Hz
                      </span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Output Waveform : <span>Sine wave<br /> </span>
                      </p>
                      <span>|</span>
                      <p>Voltage Distortion
                        : <span>A 3% (linear load)</span></p>
                    </div>
                    <hr />


                    <div className="utility">
                      <p>Battery Type: <span>Sealed, lead-acid (Swappable)<br /> Battery voltage Monitoring



                      </span>
                      </p>
                      <span>|</span>
                      <p>Battery Voltage

                        : <span>48V</span></p>
                    </div>
                    <hr />


                    <div className="utility">
                      <p>Max Charger Power


                        : <span>48V
                          144W


                        </span></p>


                    </div>


                    <div className="utility">
                      <p>Operating Temperature


                        : <span>0°C to 50°C
                          144W


                        </span></p>
                      <span>|</span>

                      <p>Relative Humidity: <span> 0-96% (non-condensing)
                      </span></p>
                      <span>|</span>
                      <p>Altitude: <span> 0Up to 3000 m
                      </span></p>
                      <span>|</span>
                      <p>Noise Level: <span> 50 dB at 1 meter
                      </span></p>
                      <span>|</span>
                      <p>RDisplay: <span> Multifunction LCD status and control console
                      </span></p>
                      <span>|</span>
                      <p>BTU: <span> 745 Btu/hr
                      </span></p>
                      <span>|</span>
                      <p>Alarm: <span> Audible and visible alarms: prioritized by severity
                      </span></p>


                    </div>






                  </div>

                </div> */}

              </div>
            </div>
          </div>
        </div>
      )}


      {pop4 && (
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={() => setpop4(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
              <div className="pop_flex">
                <div className="pop_left" id="poops">
                  <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744240618/APPLIED_ENERGY._c3znhu-removebg-preview_cxqznm.png" alt="" />


                </div>

                {/* <div className="pop_right">
                  <div className="pop_container">
                    <h2 style={{ color: "green" }}>UPS AU230-3000</h2>
                    <p>Applied Energy <span>3000VA</span>  Version</p>
                  </div>

                  <div className="pop_content">
                    <hr />
                    <p>Category : <span>Rack/Tower UPS(3U)</span></p>
                    <hr />
                    <p>Wattage: <span>3000 VA</span></p>
                    <hr />
                    <hr />
                    <div className="utility">
                      <p>Topology: <span>Online/Double-conversion</span></p>
                      <span>|</span>
                      <p>Form Factor : <span>Rack/Tower</span></p>
                      <p>Rack Size: <span>3U</span></p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p>Efficiency : <span>90%</span></p>
                      <span>|</span>
                      <p className="cable_ut">Weight :  <span>30kg </span> <br />
                      </p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p>Dimensions (HxWxD):  <span>13 cm x 44 cm x 48.5 cm</span></p>
                      <span>|</span>
                      <p>Compliances & Certifications: <span>CISPR22 Class B, FCC Part 15 Class B, CE Marked, cULus Listed, TUV, CSA 22.2, IEC/EN 62040-1 & 62040-2, UL 1778, EAC</span></p>
                      <p>Input Voltage : <span>230V – 1 Phase</span></p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p >Input Voltage Range :  <span>230V default (200/208/220/230/240V)
                        <br /> </span>
                      </p>
                      <span>|</span>
                      <p>Input Cord Length
                        : <span>1.8 m</span></p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Input Frequency
                        : <span>40-70 Hz
                        </span></p>
                      <span>|</span>
                      <p>Input Power Factor  <span> 0.99</span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Output Voltage

                        : <span>230V default (200/208/220/230/240V), adjustable


                        </span></p>
                      <span>|</span>
                      <p>Output Voltage Regulation:  <span>+/- 1%</span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Output Connections
                        : <span>(4) Schuko, (1) C19
                        </span></p>
                      <span>|</span>
                      <p>Output Frequency:  <span>50/60 Hz
                      </span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Output Waveform : <span>Sine wave<br /> </span>
                      </p>
                      <span>|</span>
                      <p>Voltage Distortion
                        : <span> 3% (linear load)</span></p>
                    </div>
                    <hr />


                    <div className="utility">
                      <p>Battery Type: <span>Sealed, lead-acid (Hot-swappable)




                      </span>
                      </p>
                      <span>|</span>
                      <p>Battery Rating

                        : <span>12V / 9Ah</span></p>
                    </div>
                    <hr />


                    <div className="utility">
                      <p>Battery Quantity


                        : <span>6



                        </span></p>


                    </div>
                    <hr />

                    <div className="utility">
                      <p>Operating Temperature


                        : <span>0°C to 40°C (32°F to 104°F)
                          144W


                        </span></p>

                      <p>Battery Management: <span> ABM Technology for extended battery life, Automatic recognition of external battery units, Deep discharge protection, Automatic battery testing
                      </span></p>
                      <p>Operating Temperature
                        : <span> 0°C to 40°C (32°F to 104°F)
                        </span></p>
                      <p>Relative Humidity: <span> 0-96% non-condensing
                      </span></p>
                      <p>Altitude: <span> Up to 3000 m
                      </span></p>
                      <p>Noise Level: <span> 40 dB at 1 meter
                      </span></p>
                      <p>BTU Rating (Online): <span> 614 BTU/h
                      </span></p>


                    </div>
                    <hr />

                    <div className="utility">
                      <p>Key Features


                        : <span>Unity Power Factor (VA=W), Advanced graphical LCD display, Energy metering down to managed outlet groups, Internal bypass for service continuity, Hot-swappable batteries for easy maintenance




                        </span></p>


                    </div>
                    <hr />

                    <div className="utility">
                      <p>Communication Interfaces



                        : <span>USB Port (HID Compliant), Serial Port (RS232), Mini-terminal blocks for Remote On/Off and Power Off, One slot for optional GSM 4G cards




                        </span></p>


                    </div>
                    <hr />
                    <div className="utility">
                      <p>Software Compatibility



                        : <span>Applied Energy Intelligent Power Manager,





                        </span></p>


                    </div>
                    <hr />

                    <div className="utility">
                      <p>Display



                        : <span>Bilingual graphical LCD





                        </span></p>


                    </div>







                  </div>

                </div> */}

                <div className="pop_right">
                  <div className="pop_container">
                    <h2>UPS AU230-3000</h2>
                    <p>Applied Energy <span>3000VA</span>  Version</p>
                  </div>

                  <div className="pop_content">
                    <hr />
                    <p><span>Category:</span> Rack/Tower UPS(3U)</p>
                    <hr />
                    <p><span>Wattage:</span> 3000 VA</p>
                    <hr />
                    <div className="utility">
                      <p><span>Topology:</span> Online/Double-conversion</p>
                      <p><span>Form Factor:</span> Rack/Tower</p>
                      <p><span>Rack Size:</span> 3U</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Efficiency:</span> 90%</p>
                      <p className="cable_ut"><span>Weight:</span> 30kg</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Dimensions (HxWxD):</span> 13 cm x 44 cm x 48.5 cm</p>
                      <p><span>Compliances & Certifications:</span> CISPR22 Class B, FCC Part 15 Class B, CE Marked, cULus Listed, TUV, CSA 22.2, IEC/EN 62040-1 & 62040-2, UL 1778, EAC</p>
                      <p><span>Input Voltage:</span> 230V – 1 Phase</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Input Voltage Range:</span> 230V default (200/208/220/230/240V)</p>
                      <p><span>Input Cord Length:</span> 1.8 m</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Input Frequency:</span> 40-70 Hz</p>
                      <p><span>Input Power Factor:</span> 0.99</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Output Voltage:</span> 230V default (200/208/220/230/240V), adjustable</p>
                      <p><span>Output Voltage Regulation:</span> +/- 1%</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Output Connections:</span> (4) Schuko, (1) C19</p>
                      <p><span>Output Frequency:</span> 50/60 Hz</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Output Waveform:</span> Sine wave</p>
                      <p><span>Voltage Distortion:</span> 3% (linear load)</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Battery Type:</span> Sealed, lead-acid (Hot-swappable)</p>
                      <p><span>Battery Rating:</span> 12V / 9Ah</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Battery Quantity:</span> 6</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Operating Temperature:</span> 0°C to 40°C (32°F to 104°F)</p>
                      <p><span>Battery Management:</span> ABM Technology for extended battery life, Automatic recognition of external battery units, Deep discharge protection, Automatic battery testing</p>
                      <p><span>Operating Temperature:</span> 0°C to 40°C (32°F to 104°F)</p>
                      <p><span>Relative Humidity:</span> 0-96% non-condensing</p>
                      <p><span>Altitude:</span> Up to 3000 m</p>
                      <p><span>Noise Level:</span> 40 dB at 1 meter</p>
                      <p><span>BTU Rating (Online):</span> 614 BTU/h</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Key Features:</span> Unity Power Factor (VA=W), Advanced graphical LCD display, Energy metering down to managed outlet groups, Internal bypass for service continuity, Hot-swappable batteries for easy maintenance</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Communication Interfaces:</span> USB Port (HID Compliant), Serial Port (RS232), Mini-terminal blocks for Remote On/Off and Power Off, One slot for optional GSM 4G cards</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Software Compatibility:</span> Applied Energy Intelligent Power Manager</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Display:</span> Bilingual graphical LCD</p>
                    </div>
                  </div>


                </div>


              </div>
            </div>
          </div>
        </div>
      )}


      {pop5 && (
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={() => setpop5(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
              <div className="pop_flex">
                <div className="pop_left" id="pop_leftt">
                  <img src="https://res.cloudinary.com/dgif730br/image/upload/v1744203541/WhatsApp_Image_2025-04-07_at_2.16.23_PM_chybcd.jpg" alt="" />
                </div>
                <div className="pop_right">
                  <div className="pop_container">
                    <h2 style={{ color: "green" }}>UPS AU230-5000</h2>
                    <p>Applied Energy <span>5000VA</span> </p>
                  </div>

                  {/* <div className="pop_content">
                    <hr />
                    <p>Category : <span>Rack/Tower UPS</span></p>
                    <hr />
                    <p>VA Rating : <span>5000 VA</span></p>
                    <hr />
                    <div className="utility">
                      <p>Wattage : <span>4000 W</span></p>
                      <span>|</span>
                      <p>Topology : <span> Line interactive</span></p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p>Form Factor  : <span>Rack</span></p>
                      <span>|</span>

                    </div>
                    <hr />
                    <div className="utility">
                      <p>Efficiency :  <span>Grater then 95% (Full Load)</span></p>
                      <span>|</span>
                      <p>Weight  : <span>100 kg</span></p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p >Dimensions (HxWxD) :  <span>Door Open <br /> 224×483×660 mm
                      </span>
                      </p>
                      <span>|</span>
                      <p>Input Voltage
                        : <span>230V – 1 Phase</span></p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Input Voltage Range
                        : <span>1230V – 1 Phase

                        </span></p>
                      <span>|</span>
                      <p>IInput Voltage Range:  <span>160-286 V (151-302 V with derating)
                      </span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Input Cord Length

                        : <span>G1.8 m

                        </span></p>
                      <span>|</span>
                      <p>Output Voltage:  <span>230V default (220/230/240V), adjustable
                      </span>
                      </p>
                    </div>

                    <hr />

                    <div className="utility">
                      <p>Input Frequency

                        : <span>50/60 Hz +/- 3 Hz auto-sensing

                        </span></p>
                      <span>|</span>
                      <p>Input Power Factor:  <span>Greater then 0.99
                      </span>
                      </p>
                    </div>

                    <hr />

                    <div className="utility">
                      <p>Bypass type
                        : <span>Internal bypass (automatic and manual)
                        </span></p>
                      <span>|</span>
                      <p>Output Voltage Regulation
                        :  <span>+/- 1%
                        </span>
                      </p>
                    </div>
                    <hr />

                    <div className="utility">
                      <p>Output Connections : <span>8 x IEC 320 C13 and 2 x IEC 320 C19 outlets
                        <br /> </span>
                      </p>
                      <span>|</span>
                      <p>Output Frequency

                        : <span>47 to 53 Hz for 50 Hz nominal sync to mains
                        </span></p>
                    </div>
                    <hr />


                    <div className="utility">
                      <p>Output Waveform: <span>Sine wave


                      </span>
                      </p>
                      <span>|</span>
                      <p>Voltage Distortion

                        : <span>Small then 5% (full load)
                        </span></p>
                    </div>
                    <hr />


                    <div className="utility">
                      <p>Battery Type


                        : <span>Sealed, lead-acid (Swappable)

                        </span></p>


                    </div>

                    <hr />

                    <div className="utility">
                      <p>Battery Voltage


                        : <span>48V

                        </span></p>


                    </div>
                    <hr />
                    <div className="utility">
                      <p>Max Charger Power


                        : <span>542W

                        </span></p>


                    </div>
                    <hr />
                    <div className="utility">
                      <p>Operating Temperature


                        : <span>0°C to 40°C

                        </span></p>


                    </div>
                    <hr />
                    <div className="utility">
                      <p>Relative Humidity



                        : <span>0-96% (non-condensing)


                        </span></p>


                    </div>

                    <hr />

                    <div className="utility">
                      <p>Altitude



                        : <span>Up to 3000 m


                        </span></p>


                    </div>

                    <hr />
                    <div className="utility">
                      <p>Noise Level



                        : <span>53 dBA at 1 meter



                        </span></p>


                    </div>
                    <hr />

                    <div className="utility">
                      <p>BTU Level



                        : <span>3470 Btu/h



                        </span></p>


                    </div>
                    <hr />


                    <div className="utility">
                      <p>Display



                        : <span>LED status display with online: on battery: replace battery and overload indicators




                        </span></p>


                    </div>
                    <hr />

                    <div className="utility">
                      <p>Alarm



                        : <span>Audible and visible alarms: configurable delays





                        </span></p>


                    </div>

                  </div> */}

                  <div className="pop_content">
                    <hr />
                    <p><span>Category:</span> Rack/Tower UPS</p>
                    <hr />
                    <p><span>VA Rating:</span> 5000 VA</p>
                    <hr />
                    <div className="utility">
                      <p><span>Wattage:</span> 4000 W</p>
                      <p><span>Topology:</span> Line interactive</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Form Factor:</span> Rack</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Efficiency:</span> Greater than 95% (Full Load)</p>
                      <p><span>Weight:</span> 100 kg</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Dimensions (HxWxD):</span> Door Open 224×483×660 mm</p>
                      <p><span>Input Voltage:</span> 230V – 1 Phase</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Input Voltage Range:</span> 1230V – 1 Phase</p>
                      <p><span>Input Voltage Range:</span> 160-286 V (151-302 V with derating)</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Input Cord Length:</span> G1.8 m</p>
                      <p><span>Output Voltage:</span> 230V default (220/230/240V), adjustable</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Input Frequency:</span> 50/60 Hz +/- 3 Hz auto-sensing</p>
                      <p><span>Input Power Factor:</span> Greater than 0.99</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Bypass Type:</span> Internal bypass (automatic and manual)</p>
                      <p><span>Output Voltage Regulation:</span> +/- 1%</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Output Connections:</span> 8 x IEC 320 C13 and 2 x IEC 320 C19 outlets</p>
                      <p><span>Output Frequency:</span> 47 to 53 Hz for 50 Hz nominal sync to mains</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Output Waveform:</span> Sine wave</p>
                      <p><span>Voltage Distortion:</span> Less than 5% (full load)</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Battery Type:</span> Sealed, lead-acid (Swappable)</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Battery Voltage:</span> 48V</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Max Charger Power:</span> 542W</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Operating Temperature:</span> 0°C to 40°C</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Relative Humidity:</span> 0-96% (non-condensing)</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Altitude:</span> Up to 3000 m</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Noise Level:</span> 53 dBA at 1 meter</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>BTU Level:</span> 3470 Btu/h</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Display:</span> LED status display with online, on battery, replace battery, and overload indicators</p>
                    </div>
                    <hr />
                    <div className="utility">
                      <p><span>Alarm:</span> Audible and visible alarms: configurable delays</p>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {pop6 &&
        (
          <div className="pop-container">
            <div className="pop-home">
              <img onClick={() => setpoppp(false)} className="primer" src={primer} alt="primer" />
              <div className="pop-content-scroll">
                <div className="pop_flex">
                  <div className="pop_left" id='pop_lettt'>
                    <img className="technologic" id="carft" src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743634661/Screenshot_3-4-2025_4331_-removebg-preview11_uerxvo.png" alt="" />
                  </div>
                  <div className="pop_right">
                    <div className="pop_container">
                      <h2 style={{ color: "green" }}>EVCharger</h2>
                      <p>AET- <span>120kw</span>  Version</p>
                    </div>

                    {/* <div className="pop_content">
                      <hr />
                      <p>     Charger Capacity      : <span>  120KW </span></p>
                      <hr />

                      <p>  Model No:          AET-120kW </p>
                      <div className="utility">
                        <p>    AC Supply System : <span>
                          Three-Phase, 5 Wire AC system
                          (optional)</span></p>
                        <span>|</span>
                        <p>      Nominal Input voltage:    <span>   AC380V± 15%</span></p>
                      </div>
                      <hr />
                      <div className="utility">
                        <p>     Input frequency : <span>    50/60Hz</span></p>


                      </div>
                      <hr />
                      <div className="utility">
                        <p>     Ambient Temperature Range    : <span>      -25 to 55°C</span></p>


                      </div>
                      <hr />
                      <div className="utility">
                        <p>     Storage temperature  : <span>-40 to 70°C</span></p>


                      </div>
                      <hr />
                      <div className="utility">
                        <p>       IP Ratings: <span> IP 54</span></p>


                      </div>
                      <hr />

                      <div className="utility">
                        <p>           Cooling                  : <span>               Air-Cooled</span></p>


                      </div>
                      <hr />
                      <div className="utility">
                        <p>             Number of outputs                    : <span>                2 </span></p>


                      </div>
                      <hr />
                      <div className="utility">
                        <p>           Type of each output                     : <span>             DC200-1000V  </span></p>


                      </div>
                      <hr />
                      <div className="utility">
                        <p>               Single Output Max. Current                    : <span>             200 Amp  </span></p>


                      </div>
                      <hr />
                      <div className="utility">
                        <p>               Output Connector Compatibility                      : <span>                    IEC 62196 2017, IEC 61851 2017,etc.  </span></p>


                      </div>
                      <hr />
                      <div className="utility">
                        <p>                   Connector Mounting                           : <span>                   Outdoor use  </span></p>


                      </div>
                      <hr />

                      <div className="utility">
                        <p>                         Emergency stop switch                                   : <span>              Support   </span></p>


                      </div>
                      <hr />

                      <div className="utility">
                        <p>                         Display                                     : <span>           7 Inches Touch Screen with Shell    </span></p>


                      </div>
                      <hr />


                      <div className="utility">
                        <p>                             User Authentication                                        : <span>            QR Code/RFID Card /Password Login    </span></p>


                      </div>
                      <hr />


                      <div className="utility">
                        <p>                            Metering Information                                               : <span>                     Consumption Units    </span></p>


                      </div>
                      <hr />


                      <div className="utility">
                        <p>                                Communication between EVSE and                                                  : <span>                      OCPP 1.6J protocol (Optional) Central Server     </span></p>


                      </div>
                      <hr />
                      <div className="utility">
                        <p>                                    Metering                                                    : <span>                Grid responsive metering as per units ‘consumption    </span></p>


                      </div>
                      <hr />
                      <div className="utility">
                        <p>                           Interface between charger and CMS                                               : <span>                     Ethernet/3G/4G (Optional)    </span></p>


                      </div>
                      <hr />

                      <div className="utility">
                        <p>                              Safety Parameters                                             : <span>            Over Current, Over Voltage, Under Current,
                          Under Voltage, Residual Current, Surge
                          Protection, Leakage Protection, Short Circuit,
                          Over Temperature, etc   </span></p>


                      </div>
                      <hr />







                    </div> */}



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

        )
      }
      {/* {
        pop &&
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={()=> setPop(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
            <div className="pop_flex">
              <div className="pop_left">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754703/WhatsApp_Image_2025-02-28_at_8.11.13_PM_1_olyljx.jpg" alt="" />
              </div>
              <div className="pop_right">
                <div className="pop_container">
                  <h2>Telecom-in-A-Box</h2>
                  <p>Power Solution <span>24kw</span>  Version</p>
                </div>

                <div className="pop_content">
                  <hr />
                  <p>Cabinet OD : <span>IP 55 GI, Powder Coated 850x750x600x2200 mm (As per GA)</span></p>
                  <hr />
                  <p>0/P DC Power Capacity (Rectifier) : <span>3kW/4kW</span></p>
                  <hr />
                  <div className="utility">
                    <p>Ultimate Capacity : <span>24 kW</span></p>
                    <span>|</span>
                    <p>Rectifier Efficiency : <span> 96%</span></p>
                  </div>
                  <hr />
                  <div className="utility">
                    <p>Mounting Arrangement  : <span>Floor</span></p>
                    <span>|</span>
                    <p className="cable_ut">Cable Entry :  <span>DC & AC Power - 8 Nos <br /> PG29 Gland - Both side</span> <br />
                    </p>
                  </div>
                  <hr />
                  <div className="utility">
                    <p>Cooling :  <span>Dynamic DC Fan cooling</span></p>
                    <span>|</span>
                    <p>Filter  : <span>Nylon 20 micron @ 90 %</span></p>
                  </div>
                  <hr />
                  <div className="utility">
                    <p >Alarms PFC 0/P - 6 Nos :  <span>Door Open <br /> Smoke / Fire <br />Mains Fail / Power fail <br /> High Temperature <br /> DC Bus fail/ DC Low Volatge Alarm <br /> Rectifier overload/ fail</span>
</p>
              <span>|</span>
                    <p>Nominal I/P AC
                    : <span>Nominal 230V</span></p>
                  </div>
                  <hr />

                  <div className="utility">
                    <p>AC Range
                    : <span>90-300V
                    </span></p>
                    <span>|</span>
                    <p>Full Power AC Range:  <span>180-300V</span>  
                    </p>
                  </div>
                  <hr />

                  <div className="utility">
                    <p>Connection

                    : <span>3 Phase 4 wire
                    </span></p>
                    <span>|</span>
                    <p>SPD:  <span>Class C 8/20uSec, 20kA</span>  
                    </p>
                  </div>
                  <hr />

                  <div className="utility">
                    <p>Input Protection
                    : <span>MCB 3 P with netural terminal/ 16 Amps
                    </span></p>
                    <span>|</span>
                    <p>Battery:  <span>VRLA Battery - Upto 600Ah Or Li-Battery 5x100Ah
                    </span>  
                    </p>
                  </div>
                  <hr />

                  <div className="utility">
                    <p>Distribution : <span>MCBs 16A-SP- 4 Nos<br /> MCBs 32A-SP-4 Nos <br />MCBs 63A-SP-4 Nos <br /> MCBs 6A-SP-2 Nos- for FAN & Controller (ExternaI use) <br /> </span>
</p>
              <span>|</span>
                    <p>Controller & Alarm Management

                    : <span>Applied Energy iEdge Controller (iTC Controller)</span></p>
                  </div>
                  <hr />


                  <div className="utility">
                    <p>Remote Monitoring: <span>Grid Energy Monitoring -Optional<br /> Battery voltage Monitoring
                    <br />Battery SOC Monitoring
                    <br /> Power plant Status & Alarm 
                    <br />Total DC Energy (Peak Logging Facility)
                    <br />Ext Alarm Monitoring - 4 PFC (Door Open, Fire/ Smoke, etc)


                     </span>
</p>
              <span>|</span>
                    <p>Management Platform

                    : <span>Cloud based Applied Energy AI/ML Energy Management Platform</span></p>
                  </div>
                  <hr />


                  <div className="utility">
                    <p>Solar Interface


                    : <span>Optional - external

                    </span></p>
                  
                    
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
            <img onClick={()=> setPopo(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
            <div className="pop_flex">
              <div className="pop_left">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754702/WhatsApp_Image_2025-02-28_at_8.11.10_PM_rwtoke.jpg" alt="" />
              </div>
              <div className="pop_right">
                <div className="pop_container">
                  <h2>Telecom-in-A-Box</h2>
                  <p>Power Solution <span>6kw</span>  Version</p>
                </div>

                <div className="pop_content">
                  <hr />
                  <p>Cabinet OD : <span>IP 55 GI , Powder Coated 600x600x1100 mm ( As per GA )</span></p>
                  <hr />
                  <p>0/P DC Power Capacity (Rectifier) : <span> 2kW</span></p>
                  <hr />
                  <p> 0/P Ac Power Capacity (Inverter) : <span>  400VA - Optional - 2 U unit with DC & AC Connection</span></p>
                   <hr />
                  <div className="utility">
                    <p>Ultimate Capacity : <span>6 kW</span></p>
                    <span>|</span>
                    <p>Rectifier Efficiency : <span> 96%</span></p>
                  </div>
                  <hr />
                  <div className="utility">
                    <p>Mounting Arrangement  : <span>Floor</span></p>
                    <span>|</span>
                    <p className="cable_ut">Cable Entry :  <span>DC & AC Power - 6 Nos <br />  PG29 Gland - Both side <br />  PG29 Gland - Both side   </span>
                    </p>
                  </div>
                  <hr />
                  <div className="utility">
                    <p>Cooling :  <span>Dynamic DC Fan cooling</span></p>
                    <span>|</span>
                    <p>Filter  : <span>Nylon 20 micron @ 90 %</span></p>
                  </div>
                  <hr />
                  <div className="utility">
                    <p >Alarms PFC 0/P - 6 Nos :  <span>Door Open <br /> Smoke / Fire <br />Mains Fail / Power fail <br /> High Temperature <br /> DC Bus fail/ DC Low Volatge Alarm <br /> Rectifier overload/ fail</span>
</p>
              <span>|</span>
                    <p>Nominal I/P AC
                    : <span>Nominal 230V</span></p>
                  </div>
                  <hr />

                  <div className="utility">
                    <p>AC Range
                    : <span>90-300V
                    </span></p>
                    <span>|</span>
                    <p>Full Power AC Range:  <span>180-300V</span>  
                    </p>
                  </div>
                  <hr />

                  <div className="utility">
                    <p>Connection

                    : <span>3 Phase 4 wire
                    </span></p>
                    <span>|</span>
                    <p>SPD:  <span>Class C 8/20uSec, 20kA</span>  
                    </p>
                  </div>
                  <hr />

                  <div className="utility">
                    <p>Input Protection
                    : <span>MCB 3 P with netural terminal/ 16 Amps
                    </span></p>
                    <span>|</span>
                    <p>Battery:  <span> U- Battery - 48V Upto 100Ah x2
                    </span>  
                    </p>
                  </div>
                  <hr />

                  <div className="utility">
                    <p>Distribution : <span> 3 Nos MCBs 6A-SP with +ve Terminal<br /> 
                    2 terminal & 5 pin /5A socket for AC load with glass fuse protection <br /> </span>
</p>
              <span>|</span>
                    <p>Controller & Alarm Management

                    : <span>Applied Energy iEdge Controller (iTC Controller)</span></p>
                  </div>
                  <hr />


                  <div className="utility">
                    <p>Remote Monitoring: <span>Grid Energy Monitoring -Optional<br /> Battery voltage Monitoring
                    <br />Battery SOC Monitoring
                    <br /> Power plant Status & Alarm 
                    <br />Total DC Energy (Peak Logging Facility)
                    <br />Inverter Status & Alarm
                    <br />Inverter 0/P Voltage
                    <br />Total DC Energy (Peak Logging Facility)
                    <br />Ext Alarm Monitoring - 4 PFC (Door Open, Fire/ Smoke, etc)


                     </span>
</p>
              <span>|</span>
                    <p>Management Platform

                    : <span>Cloud based Applied Energy AI/ML Energy Management Platform</span></p>
                  </div>
                  <hr />


                  <div className="utility">
                    <p>Solar Interface


                    : <span>Optional - external

                    </span></p>
                  
                    
                  </div>



                </div>

              </div>
            </div>
          </div>
          </div>
        </div>
      }


{
        pop2 &&
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={()=> setPop(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
            <div className="pop_flex">
              <div className="pop_left">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754702/WhatsApp_Image_2025-02-28_at_8.11.13_PM_mh65xk.jpg" alt="" />
              </div>
              <div className="pop_right">
                <div className="pop_container">
                  <h2>Telecom-in-A-Box</h2>
                  <p>Power Solution <span>24kw</span>  Version</p>
                </div>

                <div className="pop_content">
                  <hr />
                  <p>Cabinet OD : <span>IP 55 GI, Powder Coated 850x750x600x2200 mm (As per GA)</span></p>
                  <hr />
                  <p>0/P DC Power Capacity (Rectifier) : <span>3kW/4kW</span></p>
                  <hr />
                  <div className="utility">
                    <p>Ultimate Capacity : <span>24 kW</span></p>
                    <span>|</span>
                    <p>Rectifier Efficiency : <span> 96%</span></p>
                  </div>
                  <hr />
                  <div className="utility">
                    <p>Mounting Arrangement  : <span>Floor</span></p>
                    <span>|</span>
                    <p className="cable_ut">Cable Entry :  <span>DC & AC Power - 8 Nos <br /> PG29 Gland - Both side</span> <br />
                    </p>
                  </div>
                  <hr />
                  <div className="utility">
                    <p>Cooling :  <span>Dynamic DC Fan cooling</span></p>
                    <span>|</span>
                    <p>Filter  : <span>Nylon 20 micron @ 90 %</span></p>
                  </div>
                  <hr />
                  <div className="utility">
                    <p >Alarms PFC 0/P - 6 Nos :  <span>Door Open <br /> Smoke / Fire <br />Mains Fail / Power fail <br /> High Temperature <br /> DC Bus fail/ DC Low Volatge Alarm <br /> Rectifier overload/ fail</span>
</p>
              <span>|</span>
                    <p>Nominal I/P AC
                    : <span>Nominal 230V</span></p>
                  </div>
                  <hr />

                  <div className="utility">
                    <p>AC Range
                    : <span>90-300V
                    </span></p>
                    <span>|</span>
                    <p>Full Power AC Range:  <span>180-300V</span>  
                    </p>
                  </div>
                  <hr />

                  <div className="utility">
                    <p>Connection

                    : <span>3 Phase 4 wire
                    </span></p>
                    <span>|</span>
                    <p>SPD:  <span>Class C 8/20uSec, 20kA</span>  
                    </p>
                  </div>
                  <hr />

                  <div className="utility">
                    <p>Input Protection
                    : <span>MCB 3 P with netural terminal/ 16 Amps
                    </span></p>
                    <span>|</span>
                    <p>Battery:  <span>VRLA Battery - Upto 600Ah Or Li-Battery 5x100Ah
                    </span>  
                    </p>
                  </div>
                  <hr />

                  <div className="utility">
                    <p>Distribution : <span>MCBs 16A-SP- 4 Nos<br /> MCBs 32A-SP-4 Nos <br />MCBs 63A-SP-4 Nos <br /> MCBs 6A-SP-2 Nos- for FAN & Controller (ExternaI use) <br /> </span>
</p>
              <span>|</span>
                    <p>Controller & Alarm Management

                    : <span>Applied Energy iEdge Controller (iTC Controller)</span></p>
                  </div>
                  <hr />


                  <div className="utility">
                    <p>Remote Monitoring: <span>Grid Energy Monitoring -Optional<br /> Battery voltage Monitoring
                    <br />Battery SOC Monitoring
                    <br /> Power plant Status & Alarm 
                    <br />Total DC Energy (Peak Logging Facility)
                    <br />Ext Alarm Monitoring - 4 PFC (Door Open, Fire/ Smoke, etc)


                     </span>
</p>
              <span>|</span>
                    <p>Management Platform

                    : <span>Cloud based Applied Energy AI/ML Energy Management Platform</span></p>
                  </div>
                  <hr />


                  <div className="utility">
                    <p>Solar Interface


                    : <span>Optional - external

                    </span></p>
                  
                    
                  </div>



                </div>

              </div>
            </div>
          </div>
          </div>
        </div>
      }


{
        popo2 &&
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={()=> setPop(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
            <div className="pop_flex">
              <div className="pop_left">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754702/WhatsApp_Image_2025-02-28_at_8.11.13_PM_mh65xk.jpg" alt="" />
              </div>
              <div className="pop_right">
                <div className="pop_container">
                  <h2>Telecom-in-A-Box</h2>
                  <p>Power Solution <span>24kw</span>  Version</p>
                </div>

                <div className="pop_content">
                  <hr />
                  <p>Cabinet OD : <span>IP 55 GI, Powder Coated 850x750x600x2200 mm (As per GA)</span></p>
                  <hr />
                  <p>0/P DC Power Capacity (Rectifier) : <span>3kW/4kW</span></p>
                  <hr />
                  <div className="utility">
                    <p>Ultimate Capacity : <span>24 kW</span></p>
                    <span>|</span>
                    <p>Rectifier Efficiency : <span> 96%</span></p>
                  </div>
                  <hr />
                  <div className="utility">
                    <p>Mounting Arrangement  : <span>Floor</span></p>
                    <span>|</span>
                    <p className="cable_ut">Cable Entry :  <span>DC & AC Power - 8 Nos <br /> PG29 Gland - Both side</span> <br />
                    </p>
                  </div>
                  <hr />
                  <div className="utility">
                    <p>Cooling :  <span>Dynamic DC Fan cooling</span></p>
                    <span>|</span>
                    <p>Filter  : <span>Nylon 20 micron @ 90 %</span></p>
                  </div>
                  <hr />
                  <div className="utility">
                    <p >Alarms PFC 0/P - 6 Nos :  <span>Door Open <br /> Smoke / Fire <br />Mains Fail / Power fail <br /> High Temperature <br /> DC Bus fail/ DC Low Volatge Alarm <br /> Rectifier overload/ fail</span>
</p>
              <span>|</span>
                    <p>Nominal I/P AC
                    : <span>Nominal 230V</span></p>
                  </div>
                  <hr />

                  <div className="utility">
                    <p>AC Range
                    : <span>90-300V
                    </span></p>
                    <span>|</span>
                    <p>Full Power AC Range:  <span>180-300V</span>  
                    </p>
                  </div>
                  <hr />

                  <div className="utility">
                    <p>Connection

                    : <span>3 Phase 4 wire
                    </span></p>
                    <span>|</span>
                    <p>SPD:  <span>Class C 8/20uSec, 20kA</span>  
                    </p>
                  </div>
                  <hr />

                  <div className="utility">
                    <p>Input Protection
                    : <span>MCB 3 P with netural terminal/ 16 Amps
                    </span></p>
                    <span>|</span>
                    <p>Battery:  <span>VRLA Battery - Upto 600Ah Or Li-Battery 5x100Ah
                    </span>  
                    </p>
                  </div>
                  <hr />

                  <div className="utility">
                    <p>Distribution : <span>MCBs 16A-SP- 4 Nos<br /> MCBs 32A-SP-4 Nos <br />MCBs 63A-SP-4 Nos <br /> MCBs 6A-SP-2 Nos- for FAN & Controller (ExternaI use) <br /> </span>
</p>
              <span>|</span>
                    <p>Controller & Alarm Management

                    : <span>Applied Energy iEdge Controller (iTC Controller)</span></p>
                  </div>
                  <hr />


                  <div className="utility">
                    <p>Remote Monitoring: <span>Grid Energy Monitoring -Optional<br /> Battery voltage Monitoring
                    <br />Battery SOC Monitoring
                    <br /> Power plant Status & Alarm 
                    <br />Total DC Energy (Peak Logging Facility)
                    <br />Ext Alarm Monitoring - 4 PFC (Door Open, Fire/ Smoke, etc)


                     </span>
</p>
              <span>|</span>
                    <p>Management Platform

                    : <span>Cloud based Applied Energy AI/ML Energy Management Platform</span></p>
                  </div>
                  <hr />


                  <div className="utility">
                    <p>Solar Interface


                    : <span>Optional - external

                    </span></p>
                  
                    
                  </div>



                </div>

              </div>
            </div>
          </div>
          </div>
        </div>
      }
 */}



    </div>





  );
};

export default Slider;
