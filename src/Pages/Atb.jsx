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

function Atb() {

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
                    <h5>ATB </h5>
                   </div>
         
                </div>
      </section>

      <section className="products2wa">
        <div className="producwra_cont">



        <div className="whosec2">
  <div className="pros2coleft">
    <div className="largpro_div">
      <img 
        src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742628052/images_9-removebg-preview_rwm599.png" 
        alt="largeimg" 
        className="largeimg" 
      />
    </div>
  </div>

  <div className="procons2_right">
    <div className="headding">
      {/* <h3>Remote Monitoring System</h3> */}
      <h3>ATB4820T</h3>
    </div>

    <p>Applied Energy Technologies is proud to unveil its cutting-edge Lithium-Ion Battery solution meticulously 
crafted to fulfill the demanding requirements of the Telecom sector. This offering is a paradigm shift 
towards complete green operation, bolstered by heightened uptime and comprehensive energy 
accountability
.</p>

<p> At its core lies an advanced Battery Management System, that is manageable on remote 
monitoring systems. With an unwavering commitment to premium quality and longevity, our Battery
solution ensures optimal Total Cost of Ownership for our clients.
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

                <p> <b>ATB4820T</b> in applied energy includes advanced features such as:

</p>
                <ul>
                  <li> Reliable & safe LiFePO4 cell technology.</li>
                  <li>Communication through RS485.</li>
                  <li> Suitable for multi-unit parallel connection 
(up to 15 modules)
.</li>
                  <li>State-of-art BMS with built-in advance 
                  protections.</li>
                  <li>Higher operating temperature range.</li>
                  <li>High cycle life.</li>
                  <li>High efficiency.</li>
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
    href="/Datasheet_ATB4820-LiB.pdf" 
    download="Datasheet_ATB4820-LiB.pdf"
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

export default Atb;
