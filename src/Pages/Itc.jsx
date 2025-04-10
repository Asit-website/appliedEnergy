import React, { useEffect, useState } from "react";
import HomeNavbar from "../Common/HomeNavbar";
import homeshade from "../assets/homeshade.png";
import homeeimg from "../assets/homeeimg.png";
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
import HomeNavbar1 from "../Common/HomeNavbar1";
import ProductSLider1 from "../Common/ProductSlider1";

function Itc() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  let [activeTab, setActiveTab] = useState("description");
  return (
    <>
     <HomeNavbar/>
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
                    <h5>ITC </h5>
                   </div>
         
                </div>
      </section>

      <section className="products2wa">
        <div className="producwra_cont">



        <div className="whosec2">
  <div className="pros2coleft">
    <div className="largpro_div">
      <img 
        src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742628052/images_6-removebg-preview_np4wv0.png" 
        alt="largeimg" 
        className="largeimg" 
      />
    </div>
  </div>

  <div className="procons2_right">
    <div className="headding">
      {/* <h3>Remote Monitoring System</h3> */}
      <h3>iTC Edge Controller</h3>
    </div>

    <p>The iTC Controller is a microcontroller-based device designed to offer comprehensive monitoring and control 
functionality for the MULTI TENANT DC POWER SYSTEM. It serves as the central hub for overseeing 
various system parameters, including DC voltage, rectifier performance, temperature, system capacity, 
battery status, and alarm conditions..</p>

<p>Alarm and warning notifications are conveyed via front panel LEDs and potential-free alarm contacts, 
enabling remote signaling. External monitoring capabilities for alarms and overall system status are facilitated 
through a Remote Monitoring Interface. Moreover, the controller features an Ethernet port, enabling control 
over a TCP/IP network.
</p>
    {/* <p>
      The Remote Monitoring System by Applied Energy Technologies integrates multiple  modules  to ensure efficient managemeenergy systems and operations. It provides real-time Operations  and Power Analytics to optimize performance  and energy utracks Customer SLA Management  to meet service commitments, and handles EB Discom. 
                </p>
               
      <p>Bill Payment for seamless bill in financial  insights.The system also manages Utilities and Masters, monitors Fuel Usage for optimization  Additionally, it tracks AManagement to ensure effective asset utilization, offering a comprehensive solution for cost-effective, data-driven managof energy infrastructure.
      </p>           */}

    <div className="refff">
      <h4>REF. 4231/406</h4>
    </div>
  </div>
</div>


       
          {/* <div className="whosec2">
            <div className="pros2coleft">
           

              <div className="largpro_div">
                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1741429252/slider2.4cbda7f5f48647c8ff28_rmv5ie-removebg-preview_1_lmknwh.png" alt="largeimg" className="largeimg" />
              </div>

            
            </div>

            <div className="procons2_right">
              

              <div className="paragraphh">
                <p>
                  The Remote Monitoring System by Applied Energy Technologies integrates multiple  modules  to ensure efficient management of energy systems and operations. It provides real-time Operations  and Power Analytics to optimize performance  and energy usage, tracks Customer SLA Management  to meet service commitments, and handles EB Discom Bill Payment for seamless billing and financial  insights. The system also manages Utilities and Masters, monitors Fuel Usage for optimization, ensures timely Site Maintenance, and optimizes Field Resource Management to improve operational efficiency. Additionally, it tracks Assets Management to ensure effective asset utilization, offering a comprehensive solution for cost-effective, data-driven management of energy infrastructure.

                </p>

              </div>

      <div className="headding1">
      <h4>REF. <span>4231/406</span></h4>
      </div>
              
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

                <p> <b>ITC Edge Controller</b> in applied energy includes advanced features such as:

</p>
                <ul>
                  <li>This is the main unit of the system, communicating with 
                  all the modules (rectifiers, batteries, RMS). It is hotpluggable and work in fail safe mode.</li>
                  <li>Features include visual alarm indication, Graphic display, 
menu keys, USB, RS485 communication port and 
ethernet port for web interface.</li>
                  {/* <li>Predictive Maintenance – AI detects equipment issues before failures occur.</li>
                  <li>Smart Grid Integration – Enhances grid efficiency with demand forecasting and automated load balancing.</li>
                  <li>Renewable Energy Management – Integrates solar, wind, and other renewables into energy grids.</li>
                  <li>Blockchain for Energy Transactions – Ensures secure and transparent peer-to-peer energy trading.</li>
                  <li>Cloud & Edge Computing – Enables fast data processing and remote access to energy systems.</li> */}
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
    href="/Applied Energy_Datasheet_ITC.pdf" 
    download="Applied Energy_Datasheet_ITC.pdf"
  >
    <div className="pfdd" style={{ padding: "0px 0px 45px 0px" }}>
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

        {/* <NewsUpdate /> */}

        {/* <OurClient /> */}

        {/* <Contact /> */}

<ProductSLider1/>
        <Footer />
      </section>

      </>
  );
}

export default Itc;
