import React from "react";
import { useState,useEffect } from "react";
import HomeNavbar from "../Common/HomeNavbar";
import homeshade from "../assets/homeshade.png";
// import homeheroimg from "../assets/homeheroimg.png";
import homeeimg from '../assets/homeeimg.png'
import { home_hero_logos } from "../Data/home";
import "./product.css";
import ProductSlider from '../Common/ProductSlider'
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

function Product() {
      useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    
      let [activeTab, setActiveTab] = useState("description");
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
                    <h5>AET-240kW </h5>
                   </div>
         
                </div>

            </section>

            <section className="products2wa">
                <div className="producwra_cont">
                



           
        <div className="whosec2">
  <div className="pros2coleft">
    <div className="largpro_div">
      <img 
        src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742628053/images_3-removebg-preview_aliquu.png" 
        alt="largeimg" 
        className="largeimg" 
      />
    </div>
  </div>

  <div className="procons2_right">
    <div className="headding">
      <h3>Autel Energy Technologies</h3>
    </div>
    {/* <p>
                            They are suitable for occasions such as city special charging stations that   provide charging for bus, taxi, 
public service vehicles, sanitation vehicles, logistics vehicles, etc.; city public charging stations that 
provide charging for private cars, commuter, bus; intercity highway charging stations and other   
occasions that need special DC fast charging.
               </p> */}

                            <p>AET480100T (Advance Battery) is a high-tech product, which is developed independently by APPLIED ENERGY TECHNOLOGIES. It has outstanding advantages in power backing-up area for telecom,</p>
                            <p>ATM’s or UPS specified area, which is widely used in access network equipment, remote switching office, mobile telecom equipment, transmission equipment, satellite ground stations and microwave telecom</p>
    <div className="refff">
      <h4>REF. 4231/406</h4>
    </div>
  </div>
</div>
                    {/* <div className="whosec2">
                        <div className="pros2coleft">

                            <div className="largpro_div">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1738886162/Screenshot_7-2-2025_52539__boe1xt.jpg" alt="largeimg" className="largeimg" />
                            </div>

            
                        </div>

                        <div className="procons2_right">
                   

                            <p>
                            They are suitable for occasions such as city special charging stations that   provide charging for bus, taxi, 
public service vehicles, sanitation vehicles, logistics vehicles, etc.; city public charging stations that 
provide charging for private cars, commuter, bus; intercity highway charging stations and other   
occasions that need special DC fast charging.







                            </p>

                            <h4>REF. <span>4231/406</span></h4>
                        </div>
                    </div> */}
                    {/* 
                    <div className="descrbbtns2">
                        <button><span>Description</span></button>
                        <button><span>Reviews</span></button>
                    </div> */}

                    {/* <div className="description-content">
                        <h1>Features </h1> */}

                        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae quisquam ipsum, hic dicta magnam perferendis illo pariatur dolorum! Accusamus quidem nihil voluptate assumenda fuga odit quas aperiam quo commodi!
                            Ullam corporis enim fugit dolorem dolore delectus atque voluptate, cupiditate dolorum soluta ipsum reiciendis ea aut minus architecto fuga quos explicabo error facere necessitatibus sunt. Officia repudiandae vel natus nemo?
                            Nisi distinctio, laboriosam vitae quo autem sapiente delectus tempore rerum consequatur quaerat dolore magni sed, assumenda inventore ipsam quos?</p> */}

                        {/* <ul>
                            <li> Convenient installation: ground mounted.</li>
                            <li>High efficiency, reliable and stable performance. </li>
                            <li>Friendly interaction interface, 7-inch colour touch screen.</li>
                            <li>Support OCPP1.6J/Ethernet/3G/4G telecommunication(optional).</li>
                            <li>Support Swipe card/ Scan QR code/input password to charge (optional)</li>
                            <li>Support IEC 62196-3 CCS-2 connector.</li>
                            <li>Overload integrated Protection. </li>
                            <li>Support online data upgrade.</li>
                        </ul> */}

                        

                       
                       {/* <div> */}
{/* 
                        <table class="size-table">

                            <tr>
                                <th colspan="1" class="table-heading">Size & Length</th>
                            </tr>
                            <tr>
                                <th class="sub-header">Cabinet size <br /> (L*W*H) (mm)</th>
                                <th class="sub-header">Cabinet <br /> weight  (kg)</th>
                                <th class="sub-header">Wooden box <br /> packing <br /> size (L*W*H) (mm)</th>
                                <th class="sub-header">Gross <br /> packing <br /> weight (kg)</th>
                                <th class="sub-header">Cable length (m)</th>
                            </tr>

                            <tr>
                                <td>700*450*1680</td>
                                <td>255</td>
                                <td>1100*745*1890</td>
                                <td>295</td>
                                <td>5</td>
                            </tr>
                        </table> */}
                        {/* </div> */}
                       

                        {/* </div> */}



             
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
    <p
      className={`tab ${activeTab === "applications" ? "active" : ""}`}
      onClick={() => setActiveTab("applications")}
    >
      Applications
    </p>
  </div>

  {/* Animated Underline */}
  <div
    className="tab-underline"
    style={{
      transform:
        activeTab === "description"
          ? "translateX(0%)"
          : activeTab === "reviews"
          ? "translateX(100%)"
          : "translateX(200%)", // ✅ Applications ke liye underline adjust kiya
    }}
  ></div>
</div>

{/* Tab Content */}
<div className="description-content">
  {activeTab === "description" ? (
    <>
      <p>
        <strong>Long Cycle:</strong> A long cycle life, making them a reliable energy storage solution.
      </p>
      <p>
        <strong>Compact Design:</strong> 3U with excellent cycle life. Stores a large amount of energy in a relatively small space.
      </p>
    </>
  ) : activeTab === "reviews" ? (
    <>
      <p>
        Stores a large amount of energy in a relatively small space, making them an ideal solution for applications where space is limited.
      </p>
      <p>
        Long life span. Cost, safety, efficiency, and environmentally friendly.
      </p>
      <p>Cost effective as compared to other batteries.</p>
    </>
  ) : activeTab === "applications" ? (
    <>
      <p>
        <strong>LFP batteries</strong> are finding a number of roles in vehicle use, utility-scale stationary applications, and backup power.
      </p>
      <p>
        These <strong>Li-ion Batteries</strong> are best suitable for outdoor applications.
      </p>
    </>
  ) : null}
</div>



<section>
  <a 
    href="/Applied Energy_ 48_100Ah LIB_AET.pdf" 
    download="Applied Energy_ 48_100Ah LIB_AET.pdf"
  >
    <div className="pfdd" style={{ padding: "0px 0px 45px 0px" }}>
      <button className="five-d-btn">
        Download PDF
      </button>
    </div>
  </a>
</section>



                </div>

                <ProductSlider/>
                {/* <WeFollow /> */}

                {/* <CaseStudy /> */}

                {/* <NewsUpdate />

                <OurClient /> */}

                {/* <Contact /> */}

                <Footer />
            </section>

        </div>
    );
}

export default Product;
