import React, { useState } from 'react';
import HomeNavbar from "../Common/HomeNavbar";
import Footer from '../Common/Footer';
import primer from '../assets/primer.svg'
import kij from '../assets/kij.svg'
import "./product.css";
import "swiper/css";
import "swiper/css/pagination";
import "./Ups.css";
import "./Ups1.css";
import OurClient from '../Components/Home/OurClient';
import Contacts from '../Components/Home/Contacts';

function More() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [popo, setPopo] = useState(false);
  const [pop1, setPop1] = useState(false);
  const [pop2, setpop2] = useState(false)
  const [pop3, setpop3] = useState(false)
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
          <p style={{ color: "#0DAC50", fontWeight: "900", fontSize: "30px" }}>
            UPS
          </p>

        </div>
      </div>

      <hr />

      {/* text area input  */}
      <div className='TextBox'>
        <div className='styledTextBox'>
          <p>
            Applied Energy’s UPS solutions provide reliable backup power, ensuring uninterrupted operation of critical systems in data centers, offices, and industrial environments. Designed to protect against outages, surges, and voltage fluctuations, these systems enhance equipment longevity, prevent data loss, and maintain operational stability.
          </p>

          <h3 style={{ marginTop: "15px", fontWeight: 600 }}>Key Features:</h3>
          <ul style={{ marginTop: "15px" }}>
            <li><strong>Stable Performance</strong> – Double Boost &amp; Buck regulation and pure sine wave output</li>
            <li><strong>Voltage Regulation</strong> – Wide operating range (110-300V or 140-300V) for stable power supply</li>
            <li><strong>Flexible Charging</strong> – Configurable charging options for extended backup time</li>
            <li><strong>Ease of Use</strong> – Plug-and-play functionality with cold start capability</li>
            <li><strong>Monitoring &amp; Alerts</strong> – LCD/LED display with audible alarms for real-time status updates</li>
            <li><strong>Safety &amp; Protection</strong> – Overload protection, surge protection, and auto-restart</li>
            <li><strong>Compact &amp; Efficient Design</strong> – Space-saving form factors, including rackmount and tower options</li>
            <li><strong>High Efficiency</strong> – Up to 96% efficiency for optimized energy consumption</li>
          </ul>

          <h3 style={{ marginTop: "15px", fontWeight: 600 }}>Available Variants:</h3>
          <ul style={{ marginTop: "15px" }}>
            <li><strong>1000VA UPS</strong> – Compact and efficient backup power for essential applications</li>
            <li><strong>2000VA UPS</strong> – High-density, online power protection</li>
            <li><strong>3000VA UPS </strong> – Reliable solution with advanced monitoring features</li>
            <li><strong>5000VA UPS </strong> – High-capacity power backup for enterprise and industrial use</li>
          </ul>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-container">

        <div onClick={() => setpop3(true)} className="single_slide">
          <img className="testy" width={40} height={40} src={kij} alt="kij" />
          <div className="slidim_wrs">
            <img src="https://res.cloudinary.com/dgif730br/image/upload/v1744209517/WhatsApp_Image_2025-04-07_at_2.15.50_PM_rxtbko.jpg" alt="Slide Image" />
          </div>
          <div className="slid_title">
            <h4>UPS AU230-1000</h4>
            <p></p>
          </div>
        </div>


        <div onClick={() => setPopo(true)} className="single_slide">
          <img className="testy" width={40} height={40} src={kij} alt="kij" />
          <div className="slidim_wrs">
            <img src="https://res.cloudinary.com/dgif730br/image/upload/v1744209517/WhatsApp_Image_2025-04-07_at_2.15.50_PM_rxtbko.jpg" alt="Slide Image" />
          </div>
          <div className="slid_title">
            <h4>UPS AU230-2000</h4>
            <p></p>
          </div>
        </div>

        <div onClick={() => setPop1(true)} className="single_slide">
          <img className="testy" width={40} height={40} src={kij} alt="kij" />
          <div className="slidim_wrs">
            <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743399726/APPLIED_ENERGY._c3znhu.png" alt="Slide Image" />
          </div>
          <div className="slid_title">
            <h4>UPS AU230-3000</h4>
            <p></p>
          </div>
        </div>

        <div onClick={() => setpop2(true)} className="single_slide">
          <img className="testy" width={40} height={40} src={kij} alt="kij" />
          <div className="slidim_wrs">
            <img src="https://res.cloudinary.com/dgif730br/image/upload/v1744203541/WhatsApp_Image_2025-04-07_at_2.16.23_PM_chybcd.jpg" alt="Slide Image" />
          </div>
          <div className="slid_title">
            <h4>UPS AU230-5000</h4>
            <p></p>
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
                <div className="pop_left" id="poops">
                  <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743399726/APPLIED_ENERGY._c3znhu.png" alt="" />


                </div>

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


      {/* modal popup 3 */}
      {pop3 && (
        // <div className="pop-container">
        //   <div className="pop-home">
        //     <img onClick={() => setpop3(false)} className="primer" src={primer} alt="primer" />
        //     <div className="pop-content-scroll">
        //       <div className="pop_flex">
        //         <div className="pop_left" id="pop_lefttt">
        //           <img src="https://res.cloudinary.com/dgif730br/image/upload/v1744209517/WhatsApp_Image_2025-04-07_at_2.15.50_PM_rxtbko.jpg" alt="" />
        //         </div>
        //         <div className="pop_right">
        //           <div className="pop_container">
        //             <h2>UPS AU230-1000</h2>
        //             <p>Applied Energy <span>1000VA</span> </p>
        //           </div>

        //           <div className="pop_content">
        //             <hr />
        //             <p>Category : <span>Rack/Tower UPS</span></p>
        //             <hr />
        //             <p>VA Rating : <span>1000 VA</span></p>
        //             <hr />
        //             <div className="utility">
        //               <p>Wattage : <span>4000 W</span></p>
        //               <span>|</span>
        //               <p>Topology : <span> Line interactive</span></p>
        //             </div>
        //             <hr />
        //             <div className="utility">
        //               <p>Form Factor  : <span>Rack</span></p>
        //               <span>|</span>

        //             </div>
        //             <hr />
        //             <div className="utility">
        //               <p>Efficiency :  <span>Grater then 95% (Full Load)</span></p>
        //               <span>|</span>
        //               <p>Weight  : <span>100 kg</span></p>
        //             </div>
        //             <hr />
        //             <div className="utility">
        //               <p >Dimensions (HxWxD) :  <span>Door Open <br /> 224×483×660 mm
        //               </span>
        //               </p>
        //               <span>|</span>
        //               <p>Input Voltage
        //                 : <span>230V – 1 Phase</span></p>
        //             </div>
        //             <hr />

        //             <div className="utility">
        //               <p>Input Voltage Range
        //                 : <span>1230V – 1 Phase

        //                 </span></p>
        //               <span>|</span>
        //               <p>IInput Voltage Range:  <span>160-286 V (151-302 V with derating)
        //               </span>
        //               </p>
        //             </div>
        //             <hr />

        //             <div className="utility">
        //               <p>Input Cord Length

        //                 : <span>G1.8 m

        //                 </span></p>
        //               <span>|</span>
        //               <p>Output Voltage:  <span>230V default (220/230/240V), adjustable
        //               </span>
        //               </p>
        //             </div>

        //             <hr />

        //             <div className="utility">
        //               <p>Input Frequency

        //                 : <span>50/60 Hz +/- 3 Hz auto-sensing

        //                 </span></p>
        //               <span>|</span>
        //               <p>Input Power Factor:  <span>Greater then 0.99
        //               </span>
        //               </p>
        //             </div>

        //             <hr />

        //             <div className="utility">
        //               <p>Bypass type
        //                 : <span>Internal bypass (automatic and manual)
        //                 </span></p>
        //               <span>|</span>
        //               <p>Output Voltage Regulation
        //                 :  <span>+/- 1%
        //                 </span>
        //               </p>
        //             </div>
        //             <hr />

        //             <div className="utility">
        //               <p>Output Connections : <span>8 x IEC 320 C13 and 2 x IEC 320 C19 outlets
        //                 <br /> </span>
        //               </p>
        //               <span>|</span>
        //               <p>Output Frequency

        //                 : <span>47 to 53 Hz for 50 Hz nominal sync to mains
        //                 </span></p>
        //             </div>
        //             <hr />


        //             <div className="utility">
        //               <p>Output Waveform: <span>Sine wave


        //               </span>
        //               </p>
        //               <span>|</span>
        //               <p>Voltage Distortion

        //                 : <span>Small then 5% (full load)
        //                 </span></p>
        //             </div>
        //             <hr />


        //             <div className="utility">
        //               <p>Battery Type


        //                 : <span>Sealed, lead-acid (Swappable)

        //                 </span></p>


        //             </div>

        //             <hr />

        //             <div className="utility">
        //               <p>Battery Voltage


        //                 : <span>48V

        //                 </span></p>


        //             </div>
        //             <hr />
        //             <div className="utility">
        //               <p>Max Charger Power


        //                 : <span>542W

        //                 </span></p>


        //             </div>
        //             <hr />
        //             <div className="utility">
        //               <p>Operating Temperature


        //                 : <span>0°C to 40°C

        //                 </span></p>


        //             </div>
        //             <hr />
        //             <div className="utility">
        //               <p>Relative Humidity



        //                 : <span>0-96% (non-condensing)


        //                 </span></p>


        //             </div>

        //             <hr />

        //             <div className="utility">
        //               <p>Altitude



        //                 : <span>Up to 3000 m


        //                 </span></p>


        //             </div>

        //             <hr />
        //             <div className="utility">
        //               <p>Noise Level



        //                 : <span>53 dBA at 1 meter



        //                 </span></p>


        //             </div>
        //             <hr />

        //             <div className="utility">
        //               <p>BTU Level



        //                 : <span>3470 Btu/h



        //                 </span></p>


        //             </div>
        //             <hr />


        //             <div className="utility">
        //               <p>Display



        //                 : <span>LED status display with online: on battery: replace battery and overload indicators




        //                 </span></p>


        //             </div>
        //             <hr />

        //             <div className="utility">
        //               <p>Alarm



        //                 : <span>Audible and visible alarms: configurable delays





        //                 </span></p>


        //             </div>

        //           </div>

        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>

        <div className="pop-container">
          <div className="pop-home">
            <img onClick={() => setpop3(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
              <div className="pop_flex">
                <div className="pop_left" id="pop_lefttt">
                  <img src="https://res.cloudinary.com/dgif730br/image/upload/v1744209517/WhatsApp_Image_2025-04-07_at_2.15.50_PM_rxtbko.jpg" alt="" />
                </div>

                <div className="pop_right">
                  <div className="pop_container">
                    <h2>UPS AU230-1000</h2>
                    <p>Applied Energy <span>1000VA</span>  Version</p>
                  </div>

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

      )}

      {/* modal popup 4 */}
      {pop2 && (
        <div className="pop-container">
          <div className="pop-home">
            <img onClick={() => setpop2(false)} className="primer" src={primer} alt="primer" />
            <div className="pop-content-scroll">
              <div className="pop_flex">
                <div className="pop_left" id="pop_leftt">
                  <img src="https://res.cloudinary.com/dgif730br/image/upload/v1744203541/WhatsApp_Image_2025-04-07_at_2.16.23_PM_chybcd.jpg" alt="" />
                </div>
                <div className="pop_right">
                  <div className="pop_container">
                    <h2>UPS AU230-5000</h2>
                    <p>Applied Energy <span>5000VA</span> </p>
                  </div>

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
