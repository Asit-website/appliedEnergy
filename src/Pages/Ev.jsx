import React, { useState } from "react";
import HomeNavbar from "../Common/HomeNavbar";
import homeshade from "../assets/homeshade.png";
import homeheroimg from "../assets/homeheroimg.png";
import { home_hero_logos } from "../Data/home";
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

function Product() {
    let [activeTab, setActiveTab] = useState("description");
    return (
        <div>
           <HomeNavbar />
            <section className="products1wrap">
               


                {/* <img src={homeheroimg} alt="homeheroimg" className="homeheroimg" />

                <img src={homeshade} alt="homeshade" className="homeshade" /> */}

                <div className="home_logos">
                    {home_hero_logos?.map((im, index) => (
                        <div key={index} className="sing_ho_lg">
                            <img src={im?.img} alt="" />
                        </div>
                    ))}
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
                <div className="headding">
                <h3>EV Chargers </h3>
              </div>


                    <div className="whosec2">
                        <div className="pros2coleft">

                            <div className="largpro_div">
                                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1741437168/slider3.7d2ae283bd3c4a99f100_i9bf6k-removebg-preview_radk7m.png" alt="largeimg" className="largeimg" />
                            </div>

                            {/* <div className="pro2smalcon">
                <div>
                  <img src={smallimg} alt="" />

                </div>
                <div>

                  <img src={smallimg} alt="" />
                </div>
                <div>
                  <img src={smallimg} alt="" />
                </div>
              </div> */}
                        </div>

                        <div className="procons2_right">
                      

                            <p>
                            Applied Energy DC EV Chargers provide fast, reliable charging solutions ranging   from 30kW to 240kW,   catering <br /> to various electric vehicles. Designed for global compatibility, these chargers feature multi-language  support  for enhanced user accessibility. With advanced power management and scalable configurations, they ensure efficient performance across diverse settings, including commercial, public, and fleet charging stations.





                            

                            </p>

                            <h4>REF. <span>4231/406</span></h4>
                        </div>
                    </div>

                    <div className="tab-section">

            <div className="tab-container">
              <p
                className={`tab ${activeTab === "description" ? "active" : ""}`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </p>
              <p
                className={`tab ${activeTab === "reviews" ? "active" : ""}`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
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


                </div>
                {/* <WeFollow />

                <CaseStudy />

                <NewsUpdate />

                <OurClient /> */}

                {/* <Contact /> */}

                <Footer />
            </section>

        </div>
    );
}

export default Product;
