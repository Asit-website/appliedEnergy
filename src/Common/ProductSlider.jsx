import React, { useState } from 'react';
import HomeNavbar from "../Common/HomeNavbar";
import Footer from '../Common/Footer';
import primer from '../assets/primer.svg'
import kij from '../assets/kij.svg'
import './ProductSlider.css'

import "swiper/css";
import "swiper/css/pagination";
import { Link, NavLink } from 'react-router-dom';



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

      <div className='whitee'>
        {/* Cards Section */}

        <div className='something'>
          <h5>
            Some of Other Products
          </h5>
        </div>
        <div className="cards-containeeee">

          {/* onClick={() => setpop3(true)} */}
        <Link to="/rms">  <div  >
            <img className="testy" width={40} height={40} src={kij} alt="kij" />
            <div className="slidim_wrs sm_ty">
              <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744245715/images_2-removebg-preview_hyv9he_tms3wt.png" alt="Slide Image" />
            </div>
            <div className="slid_titlee">
              <div className='subrr' >
                <h4>Remote Monitoring System</h4>
              </div>
              {/* <p style={{ fontWeight: "200", padding: "5px 0px 0px 0px" }}>REF. 4231/406</p> */}

            </div>
          </div></Link>


         <NavLink to="/smps"> <div >
            <img className="testy" width={40} height={40} src={kij} alt="kij" />
            <div className="slidim_wrs sm_ty">
              <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744245878/WhatsApp_Image_2025-04-07_at_2.16.41_PM_zw7tmr.jpg" alt="Slide Image" />
            </div>
            <div className="slid_titlee">
              <div className='subrr'>
                <h4>SMPS Power Subrack</h4>
              </div>
              {/* <p style={{fontWeight: "200", padding: "5px 0px 0px 0px"}}>REF. 4231/406</p> */}


            </div>
          </div></NavLink>

         <Link to="/Battery"> <div >
            <img className="testy" width={40} height={40} src={kij} alt="kij" />
            <div className="slidim_wrs sm_ty">
              <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1741604158/slider3.7d2ae283bd3c4a99f100_1_jyojki-removebg-preview_p0qo5r.png" alt="Slide Image" />
            </div>
            <div className="slid_titlee">
              <div className='subrr'>
                <h4>Battery Banks</h4>
              </div>

              {/* <p style={{fontWeight: "200", padding: "5px 0px 0px 0px"}}>REF. 4231/406</p> */}

            </div>
          </div></Link>




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
        )}

        {/* Modal Popup 2 */}
        {pop1 && (
          <div className="pop-container">
            <div className="pop-home">
              <img onClick={() => setPop1(false)} className="primer" src={primer} alt="primer" />
              <div className="pop-content-scroll">
                <div className="pop_flex">
                  <div className="pop_left" id="poops">
                    <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740754703/WhatsApp_Image_2025-02-28_at_8.11.13_PM_1_olyljx.jpg" alt="" />


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

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


        {/* modal popup 3 */}
        {pop3 && (
          <div className="pop-container">
            <div className="pop-home">
              <img onClick={() => setpop3(false)} className="primer" src={primer} alt="primer" />
              <div className="pop-content-scroll">
                <div className="pop_flex">
                  <div className="pop_left" id="pop_lefttt">
                    <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1740838434/Screenshot_2025-03-01_194330_myfamh.png" alt="" />
                  </div>
                  <div className="pop_right">
                    <div className="pop_container">
                      <h2>UPS AU230-1000</h2>
                      <p>Applied Energy <span>1000VA</span> </p>
                    </div>

                    <div className="pop_content">
                      <hr />
                      <p>Category : <span>Rack/Tower UPS</span></p>
                      <hr />
                      <p>VA Rating : <span>1000 VA</span></p>
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

        {/* modal popup 4 */}
        {pop2 && (
          <div className="pop-container">
            <div className="pop-home">
              <img onClick={() => setpop2(false)} className="primer" src={primer} alt="primer" />
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

      </div>

    </div>
  );
}

export default More;
