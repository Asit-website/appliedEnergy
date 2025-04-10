import React from "react";
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
                <h3>Power Analytics </h3>
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
                       

                            {/* <p>
                            "Power Analytics" provides insights an dhigh level analytics into energy usage, battery performance, and load distribution. It helps optimize resource allocation by analyzing trends in energy consumption and identifying areas for improvement.







                            </p> */}
{/* 
                            <h4>REF. <span>4231/406</span></h4> */}

                        </div>
                    </div>
                    {/* 
                    <div className="descrbbtns2">
                        <button><span>Description</span></button>
                        <button><span>Reviews</span></button>
                    </div> */}

                    <div className="description-content">

                        <h1>Features  </h1>
                        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae quisquam ipsum, hic dicta magnam perferendis illo pariatur dolorum! Accusamus quidem nihil voluptate assumenda fuga odit quas aperiam quo commodi!
                            Ullam corporis enim fugit dolorem dolore delectus atque voluptate, cupiditate dolorum soluta ipsum reiciendis ea aut minus architecto fuga quos explicabo error facere necessitatibus sunt. Officia repudiandae vel natus nemo?
                            Nisi distinctio, laboriosam vitae quo autem sapiente delectus tempore rerum consequatur quaerat dolore magni sed, assumenda inventore ipsam quos?</p> */}

                        <ul>
                            <li> Site Battery Analytics </li>
                            <li> OPCO load & Energy Analytics </li>
                            <li>NOC Analytics Dashboard</li>
                            <li> AC vs DC Load Usage Analytics</li>
                            <li>EB Meter Reading Field Vs Bill Verification Report</li>
                            <li>EB Gap Analytics</li>
                            <li>Battery Analytics Report</li>
                            {/* <li> Private/Commercial Mode/Semi Public: Flexible modes with CMS Integration for billing with pre-integrated payment gateway .
                            </li>
                            <li>Charger Management Software (CMS): Remote diagnostics, billing, & management</li>
                            <li> Smart Load Management: Features for optimized energy demand management .</li>
                            <li> Backup Battery: Ensures power & charging transaction updates during power outages. </li>
                            <li> Fault Protection: Safeguards charging operations for user & vehicle safety.</li>
                            <li> Mobile App: Configure, control & monitor charging sessions via a user-friendly mobile
                                application. </li>
                            <li>Sleek Design: Modern & ergonomic design enhances user experience & usability.</li> */}
                        </ul>




                        {/* <div>

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
                        </table>
                        </div> */}
                        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae quisquam ipsum, hic dicta magnam perferendis illo pariatur dolorum! Accusamus quidem nihil voluptate assumenda  
                           </p> */}
                           <p>1.AI-Driven Battery Health Prediction: Our EMS uses AI algorithms to predict the health status of batteries, helping to anticipate failures and optimize maintenance schedules, ensuring uninterrupted operations.</p>
                         <p> 2. Max Battery Backup Prediction: Leverage predictive analytics to accurately estimate how long your batteries will last, even during peak load periods, helping you make informed decisions on backup power usage.</p>
                         <p>3. Remaining Useful Life (RUL) & Battery Cycle Prediction: Using advanced machine learning models, we forecast the remaining useful life of your batteries and their cycle efficiency, optimizing replacements and minimizing downtime, all while reducing operational costs.</p>
                         <p>4. EB Gap analysis: Estimation of fuel consumption, while considering max back up hours of a battery.  </p>
                         <p>5. Source prioritization controller: Our intelligent source prioritization module automatically adjusts energy sources based on battery backup capacity, operational demands, and cost efficiency.</p>
                         <p>6. AC vs DC losses descrivitive analytics : Our system uses descriptive analytics to provide deep insights into the energy losses across AC and DC circuits, helping you understand where energy is being wasted and identify areas for efficiency improvements.</p>
                         <p>
                         7. AI to automate and enhance the verification process of electricity bills by leveraging data directly collected from the EB (electricity board) meters</p>
                         <p>
                         8. Operational Optimization with AI: The OPCO Load & Energy Analytics module helps optimize energy consumption across your operations. By analyzing load distribution, energy usage, and system performance, it delivers actionable insights that enhance operational efficiency and reduce costs</p>
                         <  p>9. The NOC dashboard provides a 360-degree view of your energy network, identifying inefficiencies, potential risks, and areas of improvement by AI, ensuring smooth and continuous operations with minimal disruptions</p>
                    </div>


                </div>
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
