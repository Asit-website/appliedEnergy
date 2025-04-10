import React, { useState,useEffect } from "react";
import HomeNavbar from "../Common/HomeNavbar";
import homeshade from "../assets/homeshade.png";
import homeeimg from "../assets/homeeimg.png";
import { home_hero_logos } from "../Data/home";
import ProductSLider from '../Common/ProductSlider'
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
import ProductSLider1 from "../Common/ProductSlider1";

function Product() {

    let [activeTab, setActiveTab] = useState("description");
    useEffect(()=>{
        window.scrollTo(0,0)
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
                    <h5>SMPS </h5>
                   </div>
         
                </div>



                {/* <div className="hero_sec_con">
                    <div className="her_seccpa">
                        <p className="her_lin"></p>
                        <h4>Products</h4>
                        <p className="her_lin"></p>
                    </div>
                    <div className="pointpro">
                        <p>•</p>
                        <span>Home</span>
                        <span>Products</span>
                    </div>
                </div> */}
            </section>

            <section className="products2wa">
                <div className="producwra_cont">





                <div className="whosec2">
  <div className="pros2coleft">
    <div className="largpro_div">
      <img 
        src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1744245878/WhatsApp_Image_2025-04-07_at_2.16.41_PM_zw7tmr.jpg" 
        // src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742867081/DALL_E_2025-03-25_07.01.24_-_A_high-tech_SMPS_Switched-Mode_Power_Supply_Power_Subrack_designed_for_industrial_and_telecom_applications._The_image_showcases_a_modular_rack-moun_l0pj7u.webp"
        alt="largeimg" 
        className="largeimg" 
      />
    </div>
  </div>

  <div className="procons2_right">
    <div className="headding">
      <h3>SMPS Power Subrack</h3>
    </div>
    <p>
                                The Applied Energy SMPS Power Subrack is a versatile and efficient power management solution designed to provide stable and reliable DC power for telecom, data centers, and industrial applications.


                            </p>
    <div className="refff">
      <h4>REF. 4231/406</h4>
    </div>
  </div>
</div>




               
                    {/* <div className="whosec2">
                        <div className="pros2coleft">

                            <div className="largpro_div">
                                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1741438594/slider4.3bdc9c41c69bc985ad4e_ahpydm-removebg-preview_tdvkd2.png" alt="largeimg" className="largeimg" />
                            </div>

                 
                        </div>

                        <div className="procons2_right">
                           

                            <p>
                                The Applied Energy SMPS Power Subrack is a versatile and efficient power management solution designed to provide stable and reliable DC power for telecom, data centers, and industrial applications.


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

                               <p>A <b>Switched-Mode Power Supply (SMPS) </b>Subrack in applied energy includes advanced features such as:</p>

                                <ul>
                                    <li>High Efficiency – Advanced SMPS technology ensures minimal energy loss and optimal power conversion.</li>
                                    <li>Modular Design – Supports multiple power modules for scalability and redundancy.</li>
                                    <li>Wide Input Voltage Range – Operates with varying AC/DC inputs for flexibility.</li>
                                    <li>Overload & Short Circuit Protection – Ensures system safety and longevity.</li>
                                    <li>Hot-Swappable Modules – Allows easy replacement without system downtime.</li>
                                    <li>Remote Monitoring & Control – Supports smart monitoring via IoT and cloud integration.</li>
                                    <li>Compact & Lightweight – Space-saving design suitable for rack-mounted installations.</li>
                                    <li>Cooling Mechanism – Includes efficient thermal management with fans or passive cooling.

</li>
                                </ul>

                                {/* <p className="para1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae quisquam ipsum, hic dicta magnam perferendis illo pariatur dolorum! Accusamus quidem nihil voluptate assumenda fuga odit quas aperiam quo commodi!
                                    Ullam corporis enim fugit dolorem dolore delectus atque voluptate,</p> */}
                            </>

                        ) : (
                            <>

                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae quisquam ipsum, hic dicta magnam perferendis illo pariatur dolorum! Accusamus quidem nihil voluptate assumenda fuga odit quas aperiam quo commodi!
                                    Ullam corporis enim fugit dolorem dolore delectus atque voluptate, cupiditate dolorum soluta ipsum reiciendis ea aut minus architecto fuga quos explicabo error facere necessitatibus sunt. Officia repudiandae vel natus nemo?
                                    Nisi distinctio, laboriosam vitae quo autem sapiente delectus tempore rerum consequatur quaerat dolore magni sed, assumenda inventore ipsam quos?</p>

                                <ul>
                                    <li>Nam at elit nec neque suscipit gravida.</li>
                                    <li>Aenean egestas oric eu maximus tincidunt.</li>
                                    <li>Curabitur vel turpis id tellus cursus laoreet.</li>
                                </ul>

                                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae quisquam ipsum, hic dicta magnam perferendis illo pariatur dolorum! Accusamus quidem nihil voluptate assumenda fuga odit quas aperiam quo commodi!
      Ullam corporis enim fugit dolorem dolore delectus atque voluptate,</p> */}
                            </>
                        )}
                    </div>

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


<section>
      <a 
        // href="/Applied Energy_Datasheet_Inv.pdf" 
        download="Applied Energy_Datasheet_Inv.pdf"
      >
        <div className="pfdd" style={{ padding: "0px 0px 45px 0px" }}>
          <button className="five-d-btn">
            Download PDF
          </button>
        </div>
      </a>
    </section>


                </div>
                {/* <WeFollow /> */}

                {/* <CaseStudy /> */}

                {/* <NewsUpdate />

                <OurClient /> */}

                {/* <Contact /> */}
                <ProductSLider1/>

                <Footer />
            </section>

        </div>
    );
}

export default Product;
