import React from "react";
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
                   <div className="abouttt">
                    <h5>EB</h5>
                    {/* <div className="headding">
                <h3>EB Discom Bill Payment & Analytics</h3>
              </div> */}
                
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
        src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1741604158/slider3.7d2ae283bd3c4a99f100_1_jyojki-removebg-preview_p0qo5r.png" 
        alt="largeimg" 
        className="largeimg" 
      />
    </div>
  </div>

  <div className="procons2_right">
    <div className="headding">
      <h3> EB Discom Bill Payment Analytics</h3>
    </div>
    <p>
    This module manages electricity bill tracking, payment transactions, and related analytics for Discom Grid Bill. It ensures accurate grid billing, timely payments, and efficient handling of Grid bill payment-related issues through a streamlined process.



                            

                            </p>
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
                            This module manages electricity bill tracking, payment transactions, and related analytics for Discom Grid Bill. It ensures accurate grid billing, timely payments, and efficient handling of Grid bill payment-related issues through a streamlined process.
                            </p>

                            <h4>REF. <span>4231/406</span></h4>

                        </div>
                    </div> */}
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
                            <li> EB Bill Management</li>
                            <li> EB billing analytics Dashboard </li>
                            <li> EB discom credential master</li>
                            <li> Payment request log</li>
                            <li> Payment transaction enquiry</li>
                            <li> Payment Transaction Log</li>
                            <li> Payment Trouble Ticket Log</li>
                            <li> Quick Payment Approval Utility</li>
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
                           <p>1.Intelligent bill parsing: Automated detection and correction of parsing errors or faulty bill entries, ensuring high accuracy and reducing manual intervention.</p>
                         <p>2.Smart tariff analysis: AI-powered tariff change detection with actionable insights, enabling strategic financial planning and cost optimization.</p>
                         <p>3.Consumption-based recommendations: Machine learning algorithms analyse energy consumption and provide optimized payment suggestions, tailored to customer usage.</p>
                         <p>4.Hierarchical approval workflows: Automated and secure one-click payment approval process with role-based validation for faster turnaround.</p>
                         
                         <p>5.Anomaly detection: Advanced AI models identify and flag discrepancies in billed units or amounts, preventing incorrect payments and improving audit accuracy.</p>
                        <p> 6.Predictive analytics: AI-driven Grid Bill Analysis Dashboard to forecast grid energy availability, track month-on-month trends, and recommend optimal prepaid top-up amounts.</p>
                         <p>7.Automation-first insights: End-to-end automation of billing workflows, enhancing operational efficiency and delivering a smarter energy management experience.</p>    
                       <p>  8.Automated bill interpretation: Seamless understanding of grid bill data with auto-extraction of key metrics, reducing processing time.</p>
                         <p>9.The Grid Billing Dashboard utilizes AI-driven insights and Machine Learning (ML) to provide a comprehensive 360-degree view of your grid billing payment process. It automatically detects inefficiencies, identifies potential risks, and highlights areas for improvement through advanced predictive analytics.</p>
                    </div>

                    <section>
  <a 
    // href="/Datasheet_EV Charger_60.pdf" 
    download="Datasheet_EV Charger_60.pdf"
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
                <ProductSlider/>

                <Footer />
            </section>

        </div>
    );
}

export default Product;
