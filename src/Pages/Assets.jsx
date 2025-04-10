import React from "react";
import HomeNavbar from "../Common/HomeNavbar";
import homeshade from "../assets/homeshade.png";
import homeeimg from "../assets/homeeimg.png";
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
            <section className="products1wrap">
                <HomeNavbar />


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
                </div>
            </section>

            <section className="products2wa">
                <div className="producwra_cont">

                    <div className="whosec2">
                        <div className="pros2coleft">

                            <div className="largpro_div">
                                <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1738883526/Screenshot_7-2-2025_44156__owgfqv.jpg" alt="largeimg" className="largeimg" />
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
                            <h3>Assets Management & Reconciliation</h3>

                            <p>
                            "Assets Management & Reconciliation" tracks material assets, from procurement to installation and reconciliation. It ensures proper asset movement, reduces waste, and helps optimize material usage and procurement processes across sites. It manages the movement of materials from the warehouse to the site, installation, and the SRN process from the site back to the warehouse.






                            </p>
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
                            <li>  BOQ Template Master</li>
                            <li>Dispatch Instruction </li>
                            <li>Dispatched Log</li>
                            <li>Item Code Listing</li>
                            <li> Material At Site Log</li>
                            <li>Material Installation Tracking</li>
                            <li> Material PickUp</li>
                            <li> Material Reconciliation Analytics</li>
                            <li>Purchase Requisition</li>
                            <li>SRN Log</li>
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
                           <p>1. Logistics planning for the replacement of equipment based on RUL.</p>
                         <p>2. Text Extraction from Class-A equipment: Extraction of serial numbers from class-A equipment.</p>
                         <p>3. Field Engineer Efficiency: Incorporating automated text extraction can significantly enhance FE’s efficiency.  </p>
                         <p>4. Improved reconciliation: Automated text extraction reduces the probability of errors.</p>
                         {/* <p>5.Anomaly detection: Advanced AI models identify and flag discrepancies in billed units or amounts, preventing incorrect payments and improving audit accuracy.
                         6.Predictive analytics: AI-driven Grid Bill Analysis Dashboard to forecast grid energy availability, track month-on-month trends, and recommend optimal prepaid top-up amounts.</p>
                         <p>7.Automation-first insights: End-to-end automation of billing workflows, enhancing operational efficiency and delivering a smarter energy management experience.
                         8.Automated bill interpretation: Seamless understanding of grid bill data with auto-extraction of key metrics, reducing processing time.</p>
                         <p>9.The Grid Billing Dashboard utilizes AI-driven insights and Machine Learning (ML) to provide a comprehensive 360-degree view of your grid billing payment process. It automatically detects inefficiencies, identifies potential risks, and highlights areas for improvement through advanced predictive analytics</p> */}
                    </div>


                </div>
                <WeFollow />

                {/* <CaseStudy /> */}

                <NewsUpdate />

                <OurClient />

                {/* <Contact /> */}

                <Footer />
            </section>

        </div>
    );
}

export default Product;
