import React, { useState,useEffect } from "react";
import HomeNavbar from "../Common/HomeNavbar";
import homeshade from "../assets/homeshade.png";
import homeeimg from "../assets/homeeimg.png";
import { home_hero_logos } from "../Data/home";
import ProductSlider from '../Common/ProductSlider'
import "./product.css";
import largeimg from "../assets/productlarge.png";
import smallimg from "../assets/productsmal.png";
import WeFollow from "../Components/Home/WeFollow";
import CaseStudy from "../Components/Home/CaseStudy";
import NewsUpdate from "../Components/Home/NewsUpdate";
import OurClient from "../Components/Home/OurClient";
import Contact from "../Components/Home/Contact";
import Footer from "../Common/Footer";
import { Link, Outlet } from "react-router-dom";
import Rms from "./Rms";
import HomeNavbar1 from "../Common/HomeNavbar1";

function Product() {
    let [activeTab, setActiveTab] = useState("description");
    useEffect(()=>{
      // scrollTo(0,0);
    },[])
    return (
        <div>
              <HomeNavbar />
            <section className="products1wrap">
            


                <img src={homeeimg} alt="homeheroimg" className="homeheroimg" />

                <img src={homeshade} alt="homeshade" className="homeshade" />

                <div className="home_logos">
                    {home_hero_logos?.map((im, index) => (
                        <div key={index} className="sing_ho_lg">
                            <img src={im?.img} alt="" />
                        </div>
                    ))}
                </div>

                <div className="hero_sec_con">
                   <div className="abouttt">
                    <h5>DCEM </h5>
                   </div>
         
                </div>



              
            </section>

            <section className="products2wa">
                <div className="producwra_cont">
               


                   


                <div className="whosec2">
  <div className="pros2coleft">
    <div className="largpro_div">
      <img 
        src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742627071/images_1-removebg-preview_olu5wy.png" 
        alt="largeimg" 
        className="largeimg" 
      />
    </div>
  </div>

  <div className="procons2_right">
    <div className="headding">
      {/* <h3> DC Energy Meter</h3> */}
      <h3>DC ENERGY METER
      ADS 2233 S4</h3>
    </div>

    <p>Applied Energy’s 4 Channel DC Energy Meter (Model ADS 2233 S4K) is a versatile and highly accurate 
device designed for measuring and monitoring DC energy parameters across multiple channels. 
Engineered to meet the demands of modern energy systems</p>

<p> it offers robust performance with 
advanced features including real-time data acquisition, high-accuracy measurements, and extensive 
data logging capabilities. Ideal for applications in telecom, renewable energy, and industrial setups, 
the ADS 2233 S4K ensures precision, reliability, and ease of use.
</p>
    {/* <p>
       Applied Energy’s DC Energy Meter is a versatile and highly accurate device designed for measuring and monitoring DC energy parameters across multiple channels. Engineered to meet the demands of modern energy systems, it offers robust performance with advanced features 



                            

                            </p>

                            <p>including real-time data acquisition,high-accuracy measurements, and extensive data logging capabilities. Ideal for applications in telecom, renewable energy, and industrial setups, Applied Energy DCEM ensures precision, reliability, and ease of use.</p> */}
    <div className="refff">
      <h4>REF. 4231/406</h4>
    </div>
  </div>
</div>





                    {/* <div className="whosec2">
                        <div className="pros2coleft">

                            <div className="largpro_div">
                                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1741437168/slider3.7d2ae283bd3c4a99f100_i9bf6k-removebg-preview_radk7m.png" alt="largeimg" className="largeimg" />
                            </div>

                            
                        </div>

                        <div className="procons2_right">
                    

                            <p>
                            Applied Energy’s DC Energy Meter is a versatile and highly accurate device designed for measuring and monitoring DC energy parameters across multiple channels. Engineered to meet the demands of modern energy systems, it offers robust performance with advanced features including real-time data acquisition, high-accuracy measurements, and extensive data logging capabilities. Ideal for applications in telecom, renewable energy, and industrial setups, Applied Energy DCEM ensures precision, reliability, and ease of use.



                            

                            </p>

                            <h4>REF. <span>4231/406</span></h4>
                        </div>
                    </div> */}

                    <div className="tab-section">

            <div className="tab-container">
              <p
                className={`tab ${activeTab === "description" ? "active" : ""}`}
                onClick={() => setActiveTab("description")}
              >
                Features
              </p>
              <p
                className={`tab ${activeTab === "reviews" ? "active" : ""}`}
                onClick={() => setActiveTab("reviews")}
              >
                {/* Reviews */}
              </p>
            </div>

            {/* Animated Underline */}
            <div
              className="tab-underline"
              style={{
                transform: activeTab === "description" ? "translateX(0%)" : "translateX(100%)",
              }}
            ></div>
          </div>

          {/* Tab Content */}
          <div className="description-content">
            {activeTab === "description" ? (
              <>
                 <p>The <b>ADS 2233 S4 </b> is a 4-channel DC energy meter designed for measuring DC voltage, current, power, and energy in industrial and telecom applications.</p>
                               <ul>
                  <li>Multi-Channel Measurement – Supports 4-channel current measurement using shunt input.</li>
                  <li>Wide Input Voltage Range – Operates from 18V to 65V DC.</li>
                  <li>High Accuracy – Provides 0.5% accuracy for voltage, current, and power readings.</li>
                  <li>User-Selectable Inputs – Supports 50A-250A (optional up to 2500A) and 5mV-99mV shunt input.</li>
                  <li>Display & Logging – Features a 16x2 backlit LCD display with a built-in data logger and time-stamped readings.

</li>
<li>Remote Communication – Equipped with RS485 port supporting Modbus RTU protocol for data retrieval</li>
<li>Energy Monitoring – Displays instantaneous voltage, current, power, and kWh energy consumption.</li>
<li>Secure & Reliable – Includes password-protected reset mode, over-voltage protection, and data storage for up to 50 days.</li>
                </ul>

                {/* <p className="para1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae quisquam ipsum, hic dicta magnam perferendis illo pariatur dolorum! Accusamus quidem nihil voluptate assumenda fuga odit quas aperiam quo commodi!
                  Ullam corporis enim fugit dolorem dolore delectus atque voluptate,</p> */}
              </>

            ) : (
              <>

                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae quisquam ipsum, hic dicta magnam perferendis illo pariatur dolorum! Accusamus quidem nihil voluptate assumenda fuga odit quas aperiam quo commodi!
                  Ullam corporis enim fugit dolorem dolore delectus atque voluptate, cupiditate dolorum soluta ipsum reiciendis ea aut minus architecto fuga quos explicabo error facere necessitatibus sunt. Officia repudiandae vel natus nemo?
                  Nisi distinctio, laboriosam vitae quo autem sapiente delectus tempore rerum consequatur quaerat dolore magni sed, assumenda inventore ipsam quos?</p>

                <ul>
                  <li>Nam at elit nec neque suscipit gravida.</li>
                  <li>Aenean egestas oric eu maximus tincidunt.</li>
                  <li>Curabitur vel turpis id tellus cursus laoreet.</li>
                </ul> */}

                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae quisquam ipsum, hic dicta magnam perferendis illo pariatur dolorum! Accusamus quidem nihil voluptate assumenda fuga odit quas aperiam quo commodi!
                  Ullam corporis enim fugit dolorem dolore delectus atque voluptate,</p> */}
              </>
            )}
          </div>

          <section>
  <a 
    href="/Applied Energy DCEM Datasheet.pdf" 
    download="Applied Energy DCEM Datasheet.pdf"
    className="download-link"
  >
    <div className="pfdd">
      <button className="five-d-btn">
        Download PDF
      </button>
    </div>
  </a>
</section>




          {/* <div className="description-content">
            <h1>Description</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae quisquam ipsum, hic dicta magnam perferendis illo pariatur dolorum! Accusamus quidem nihil voluptate assumenda fuga odit quas aperiam quo commodi!
              Ullam corporis enim fugit dolorem dolore delectus atque voluptate, cupiditate dolorum soluta ipsum reiciendis ea aut minus architecto fuga quos explicabo error facere necessitatibus sunt. Officia repudiandae vel natus nemo?
              Nisi distinctio, laboriosam vitae quo autem sapiente delectus tempore rerum consequatur quaerat dolore magni sed, assumenda inventore ipsam quos?</p>

            <ul>
              <li>Nam at elit nec neque suscipit gravida.</li>
              <li>Aenean egestas oric eu maximus tincidunt.</li>
              <li>Curabitur vel turpis id tellus cursus laoreet.</li>
            </ul>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae quisquam ipsum, hic dicta magnam perferendis illo pariatur dolorum! Accusamus quidem nihil voluptate assumenda fuga odit quas aperiam quo commodi!
              Ullam corporis enim fugit dolorem dolore delectus atque voluptate,</p>
          </div> */}

                </div>
                {/* <WeFollow /> */}

                {/* <CaseStudy /> */}

                {/* <NewsUpdate />

                <OurClient /> */}

                {/* <Contact /> */}
                <ProductSlider/>

                <Footer />
            </section>

        </div>
    );
}

export default Product;
