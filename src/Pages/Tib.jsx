import React, { useState } from 'react';
import HomeNavbar from "../Common/HomeNavbar";
import Footer from '../Common/Footer';
import primer from '../assets/primer.svg'
import kij from '../assets/kij.svg'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./product.css";
import './Tib.css'
import "./Ups1.css";
import OurClient from '../Components/Home/OurClient';
import Contacts from '../Components/Home/Contacts';


const images = [
  "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754703/WhatsApp_Image_2025-02-28_at_8.11.13_PM_1_olyljx.jpg",
  "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754702/WhatsApp_Image_2025-02-28_at_8.11.10_PM_rwtoke.jpg",
  "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754702/WhatsApp_Image_2025-02-28_at_8.11.13_PM_mh65xk.jpg",
  "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754701/WhatsApp_Image_2025-02-28_at_8.11.12_PM_s4nn6s.jpg",
] || [];


function More() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [popo, setPopo] = useState(false);
  const [pop1, setPop1] = useState(false);
  const [pop2, setpop2] = useState(false)
  const [popForm, setPopForm] = useState(false); // State for form popup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setPopForm(false); // Close form popup after submission
  };

  return (
    <div>
      <HomeNavbar />

      {/* Header Section */}
      <div className="header">
        <img
          src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1741173272/ups-solution_dogbot.png"
          alt="UPS Solutions"
          className="header-image"
        />
        <div className="header-overlay">
          {/* <h1>OUR</h1> */}
          <p style={{ color: "#0DAC50", fontWeight: "900", fontSize: "30px", textTransform: "uppercase" }}>
            Telecom-in-A-Box   (TIB)
          </p>


        </div>




      </div>

      <hr />
      {/* text area input  */}
      {/* <div className='TextBox'>
      <div className='styledTextBox'>
           <h5>TIB  refers to the adoption of advanced technologies like AI, IoT, and blockchain to enhance energy efficiency, sustainability
           </h5>
      </div>
     </div> */}
      <div className='TextBox'>
        <div className="styledTextBox">
          <p>
            <strong>Telecom-in-A-Box (TiB)</strong> by <strong>Applied Energy Technologies</strong> is a cloud-connected edge device
            designed for maximum uptime and cost-efficient energy management at telecom sites. It integrates multiple power and
            management components into a single, highly efficient platform.
          </p>

          <h3 style={{ marginTop: "15px", fontWeight: 600 }}>Key Features</h3>
          <ul style={{ marginTop: "15px" }}>
            <li>
              <strong>All-in-One System</strong> – Combines SMPS, Intelligent Controller, RMU, SPC, and
              Lithium-Ion Batteries (VRLA option available) for seamless telecom site operations.
            </li>
            <li>
              <strong>Optimized Energy Management</strong> – Bi-directional control ensures efficient power utilization,
              reducing costs while maintaining peak uptime.
            </li>
            <li>
              <strong>Flexible Deployment</strong> – Suitable for new installations or retrofits, with configurable
              power distribution and sub-rack options for existing sites.
            </li>
            <li className='ket'>
              <strong>High Efficiency &amp; Scalability</strong> –
              <ul style={{ marginTop: "15px" }}>
                <li>96.5% RM efficiency</li>
                <li>3kW MPPT Controller in a 4kW RM form factor</li>
                <li>Modular RM slots (6/8 slots can house RMs or MPPT Controllers)</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-containerr">
        <div onClick={() => setPopo(true)} className="single_slide">
          <img className="testy" width={40} height={40} src={kij} alt="kij" />
          <div className="slidim_wrs">
            <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1741604158/slider3.7d2ae283bd3c4a99f100_1_jyojki-removebg-preview_p0qo5r.png" alt="" />
          </div>
          <div className="slid_title">
            <h4>Telecom-in-A-Box</h4>
            <p>Power Solution 24kw Version</p>
          </div>
        </div>

        <div onClick={() => setPop1(true)} className="single_slide">
          <img className="testy" width={40} height={40} src={kij} alt="kij" />
          <div className="slidim_wrs">

            <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740826585/slider1.2c3260c9e47537e7a14f_1_r5zrlp.png" alt="Slide Image" />

          </div>
          <div className="slid_title">
            <h4>Telecom-in-A-Box</h4>
            <p>Power Solution 6kw Version</p>
          </div>
        </div>






      </div>




      {/* Open Form Popup Button */}
      <button className="open-form-btn" onClick={() => setPopForm(true)}></button>

      {/* Modal Popup 1 */}
      {popo && (
        popo &&
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={() => setPopo(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
              <div className="pop_flex">
                <div className="pop_left" id="pop_lefttt">
                  {/* <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754702/WhatsApp_Image_2025-02-28_at_8.11.13_PM_mh65xk.jpg" alt="" /> */}
                  <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1741604158/slider3.7d2ae283bd3c4a99f100_1_jyojki-removebg-preview_p0qo5r.png" alt="" />
                </div>
                <div className="pop_right">
                  <div className="pop_container">
                    <h2>Telecom-in-A-Box</h2>
                    <p>Power Solution <span>24kw</span>  Version</p>
                  </div>

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
      )}

      {/* Modal Popup 2 */}
      {pop1 && (
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={() => setPop1(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
              <div className="pop_flex">
                <div className="pop_left" id='popp_left'>
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
                <div className="pop_right" id='popp_right'>
                  <div className="pop_container">
                    <h2>Telecom-in-A-Box</h2>
                    <p>Power Solution <span>6kw</span>  Version</p>
                  </div>

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
      )}


      {/* modal popup 3 */}
      {pop2 && (
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={() => setPop1(false)} className="primer" src={primer} alt="primer" />
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
      )}

      {/* Form Popup */}
      {popForm && (
        <div className="pop-container">
          <div className="pop-home">
            <button onClick={() => setPopForm(false)} className="close-btn">X</button>
            <div className="pop-content-scroll">
              <h2>Contact Us</h2>
              <form onSubmit={handleSubmit} className="form-container">
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Phone:</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />

                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>

                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* <OurClient/> */}
      {/* <Contacts/> */}
      <Footer />

    </div>
  );
}

export default More;
