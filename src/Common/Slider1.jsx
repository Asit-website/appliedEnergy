import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./slider1.css";
import kij from '../assets/kij.svg'
// import tesre from '../assets/tesre.svg'
import primer from '../assets/primer.svg'
const Slider1 = ({ sliderData }) => {
  const [pop, setPop] = useState(false);
  const [popo, setPopo] = useState(false);
  const [pop1, setPop1] = useState(false);
  const [pop2, setpop2] = useState(false)
  // const [popo1, setPopo1] = useState(false);
  // const [pop2, setPop2] = useState(false);
  // const [popo2, setPopo2] = useState(false);

  return (
    <div>
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
            <div onClick={() => setPop(true)} className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826585/slider3.7d2ae283bd3c4a99f100_1_jyojki.png" alt="Slide Image" />
              </div>
              <div className="slid_title">
                <h4>UPS AU230-2000</h4>
                <p>PApplied Energy 2000VA</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide  className="sinel_slid22" >
            <div onClick={() => setPopo(true)} className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
           
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826585/slider1.2c3260c9e47537e7a14f_1_r5zrlp.png" alt="Slide Image" />
               
              </div>
              <div className="slid_title">
                <h4>UPS AU230-3000</h4>
                <p>Applied Energy 3000VA</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="sinel_slid22" >
            <div onClick={() => setPop1(true)} className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740838317/Screenshot_2025-03-01_194020_fsqox6.png" alt="Slide Image" />
              </div>
              <div className="slid_title">
                <h4>TUPS AU230-5000</h4>
                <p>Applied Energy 5000VA</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide  className="sinel_slid22" >
            <div onClick={() => setpop2(true)} className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1741159090/Screenshot_7-2-2025_52539__boe1xt-removebg-preview_r6iuhz.png" alt="Slide Image" />
              </div>
              <div className="slid_title">
                <h4>Telecom-in-A-Box</h4>
                <p> AET-240kW</p>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide  className="sinel_slid22" >
            <div onClick={() => setPop(true)} className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826792/slider4.3bdc9c41c69bc985ad4e_1_hfy07q.png" alt="Slide Image" />
              </div>
              <div className="slid_title">
                <h4>Telecom-in-A-Box</h4>
                <p>Power Solution 24kw Version</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide  className="sinel_slid22" >
            <div onClick={() => setPopo(true)} className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826585/slider3.7d2ae283bd3c4a99f100_1_jyojki.png" alt="Slide Image" />
              </div>
              <div className="slid_title">
                <h4>Telecom-in-A-Box</h4>
                <p>Power Solution 6kw Version</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="sinel_slid22" >
            <div onClick={() => setPop(true)} className="single_slide">
              <img className="testy" width={40} height={40} src={kij} alt="kij" />
              <div className="slidim_wrs">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826585/slider1.2c3260c9e47537e7a14f_1_r5zrlp.png" alt="Slide Image" />
              </div>
              <div className="slid_title">
                <h4>Telecom-in-A-Box</h4>
                <p>Power Solution 24kw Version</p>
              </div>
            </div>
          </SwiperSlide>

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
          </SwiperSlide>

       
      
      </Swiper>
      {/* {
        pop &&
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={()=> setPop(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
            <div className="pop_flex">
              <div className="pop_left" id="pop_leftt">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754702/WhatsApp_Image_2025-02-28_at_8.11.13_PM_mh65xk.jpg" alt="" />
              </div>
              <div className="pop_right">
                <div className="pop_container">
                  <h2>UPS AU230-2000</h2>
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
                    <p className="cable_ut">Weight :  <span>19 kg </span> <br />
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

                    <p>Relative Humidity: <span> 0-96% (non-condensing)
                    </span></p>
                    <p>Altitude: <span> 0Up to 3000 m
                    </span></p>
                    <p>Noise Level: <span> 50 dB at 1 meter
                    </span></p>
                    <p>RDisplay: <span> Multifunction LCD status and control console
                    </span></p>
                    <p>BTU: <span> 745 Btu/hr
                    </span></p>
                    <p>Alarm: <span> Audible and visible alarms: prioritized by severity
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
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754703/WhatsApp_Image_2025-02-28_at_8.11.13_PM_1_olyljx.jpg" alt="" />
                
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754702/WhatsApp_Image_2025-02-28_at_8.11.10_PM_rwtoke.jpg" alt="" />
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754702/WhatsApp_Image_2025-02-28_at_8.11.13_PM_mh65xk.jpg" alt="" />
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754701/WhatsApp_Image_2025-02-28_at_8.11.12_PM_s4nn6s.jpg" alt="" />
              </div>
              <div className="pop_right">
                <div className="pop_container">
                  <h2>UPS AU230-3000</h2>
                  <p>Applied Energy <span>3000VA</span>  Version</p>
                </div>

                <div className="pop_content">
                  <hr />
                  <p>Category : <span>Rack/Tower UPS(3U)</span></p>
                  <hr />
                  <p>Wattage: <span>3000 VA</span></p>
                  <hr />
                  <p>Wattage:<span>3000 W
                  </span></p> <hr />
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

                  <div className="utility">
                    <p>Key Features


                    : <span>Unity Power Factor (VA=W), Advanced graphical LCD display, Energy metering down to managed outlet groups, Internal bypass for service continuity, Hot-swappable batteries for easy maintenance




                    </span></p>
                  
                    
                  </div>

                  
                  <div className="utility">
                    <p>Communication Interfaces



                    : <span>USB Port (HID Compliant), Serial Port (RS232), Mini-terminal blocks for Remote On/Off and Power Off, One slot for optional GSM 4G cards




                    </span></p>
                  
                    
                  </div>

                  <div className="utility">
                    <p>Software Compatibility



                    : <span>Applied Energy Intelligent Power Manager,





                    </span></p>
                  
                    
                  </div>

                  <div className="utility">
                    <p>Display



                    : <span>Bilingual graphical LCD





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
        pop1 &&
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={()=> setPop1(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
            <div className="pop_flex">
              <div className="pop_left" id="pop_leftt">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740838434/Screenshot_2025-03-01_194330_myfamh.png" alt="" />
              </div>
              <div className="pop_right">
                <div className="pop_container">
                  <h2>UPS AU230-5000</h2>
                  <p>Applied Energy <span>5000VA</span> </p>
                </div>

                <div className="pop_content">
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
            <img onClick={()=> setpop2(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
            <div className="pop_flex">
              <div className="pop_left">
                <img id="carft" src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1738886162/Screenshot_7-2-2025_52539__boe1xt.jpg" alt="" />
              </div>
              <div className="pop_right">
                <div className="pop_container">
                  <h2>Telecom-in-A-Box</h2>
                  <p>AET- <span>240kw</span>  Version</p>
                </div>

                <div className="pop_content">
                  <hr />
                  <p>DC All-in-One  : <span>High Power Charger</span></p>
                  <hr />
                  <p> Secure & Flexible Payment
                  Options: <span>Charge with confidence using Swipe Card, QR
 Code, or Password Input (optional), backed by IEC
 62196-3 CCS-2 compatibility.</span></p>
                  <hr />
                  <div className="utility">
                    <p> Smart & Intuitive User
                    Experience : <span>Navigate with ease using a 7-inch multilingual
 color touchscreen and enjoy seamless
 connectivity via OCPP1.6J, Ethernet, 3G, or 4G
 (optional).</span></p>
                    <span>|</span>
                    <p> Effortless Installation &
                    Reliable Performance: <span>  Seamlessly integrates into any space with a
 ground-mounted design, ensuring high efficiency,
 stability, and durability.</span></p>
                  </div>
                  <hr />
                  <div className="utility">
                    <p> Intelligent Protection & Future
                    Ready  : <span>Stay protected with integrated overload
 safeguards and benefit from online data upgrades
 for continuous improvements.</span></p>
                   
                   
                  </div>
                 
                 
               
                




                </div>

              </div>
            </div>
          </div>
          </div>
        </div>
      } */}

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
