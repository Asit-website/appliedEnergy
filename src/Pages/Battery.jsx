import React, { useState,useEffect } from "react";
import HomeNavbar from "../Common/HomeNavbar";
import homeshade from "../assets/homeshade.png";
import homeeimg from "../assets/homeeimg.png";
import { home_hero_logos } from "../Data/home";
import ProductSlider from '../Common/ProductSlider';
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
import ProductSLider1 from "../Common/ProductSlider1";

function Product() {
      let [activeTab, setActiveTab] = useState("description");

      useEffect(()=>{
        // window.scrollTo(0,0)
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
                    <h5>Battery Banks </h5>
                   </div>
         
                </div>

               
            </section>

            <section className="products2wa">
                <div className="producwra_cont">
               

            
                <div className="whosec2">
  <div className="pros2coleft">
    <div className="largpro_div">
      <img 
        src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743399720/APPLIED_ENERGY_BATTERYBANK_jjdosm.png" 
        alt="largeimg" 
        className="largeimg" 
      />
    </div>
  </div>

  <div className="procons2_right">
    <div className="headding">
      <h3>Battery Banks</h3>
    </div>
    <p>
        Applied Energy LiB Battery Banks are cutting-edge solutions developed by Applied Energy Technologies, offering superior power backup capabilities for telecom, ATM, and UPS applications. They are extensively utilized in access to network equipment, remote switching offices, mobile telecom devices, and microwave telecom equipment.
 </p>
    <div className="refff">
      <h4>REF. 4231/406</h4>
    </div>
  </div>
</div>



                    {/* <div className="whosec2">
                        <div className="pros2coleft">

                            <div className="largpro_div">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1738878297/slider3.7d2ae283bd3c4a99f100_i9bf6k.png" alt="largeimg" className="largeimg" />
                            </div>

                    
             
                        </div>

                        <div className="procons2_right">
                       

                            <p>
                             Applied Energy LiB Battery Banks are cutting-edge solutions developed by Applied Energy Technologies, offering superior power backup capabilities for telecom, ATM, and UPS applications. They are extensively utilized in access to network equipment, remote switching offices, mobile telecom devices, and microwave telecom equipment.


                            

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

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae quisquam ipsum, hic dicta magnam perferendis illo pariatur dolorum! Accusamus quidem nihil voluptate assumenda fuga odit quas aperiam quo commodi!
      Ullam corporis enim fugit dolorem dolore delectus atque voluptate, cupiditate dolorum soluta ipsum reiciendis ea aut minus architecto fuga quos explicabo error facere necessitatibus sunt. Officia repudiandae vel natus nemo?
      Nisi distinctio, laboriosam vitae quo autem sapiente delectus tempore rerum consequatur quaerat dolore magni sed, assumenda inventore ipsam quos?</p>

    <ul>
      <li>Nam at elit nec neque suscipit gravida.</li>
      <li>Aenean egestas oric eu maximus tincidunt.</li>
      <li>Curabitur vel turpis id tellus cursus laoreet.</li>
    </ul>

    <p className="para1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae quisquam ipsum, hic dicta magnam perferendis illo pariatur dolorum! Accusamus quidem nihil voluptate assumenda fuga odit quas aperiam quo commodi!
      Ullam corporis enim fugit dolorem dolore delectus atque voluptate,</p>
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

                <OurClient />

                <Contact /> */}
                <ProductSLider1/>

                <Footer />
            </section>

        </div>
    );
}

export default Product;
