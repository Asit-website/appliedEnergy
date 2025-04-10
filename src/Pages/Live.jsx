import React,{useEffect} from "react";
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
                    <h5>LSO </h5>
                   </div>
         
                </div>


{/* 
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
      <h3>Live Site Operations</h3>
    </div>
    <p>
       The "Live Site Operations" module provides real-time monitoring of site health using data from Remote Monitoring Systems (RMS). It tracks battery voltage and alarms, allowing users to quickly address performance issues and ensure site reliability.


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
                                The "Live Site Operations" module provides real-time monitoring of site health using data from Remote Monitoring Systems (RMS). It tracks battery voltage and alarms, allowing users to quickly address performance issues and ensure site reliability.







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
                        <p> <b>Live Site Operations</b> (LSO) refers to real-time monitoring, control, and optimization of industrial, construction, and energy sites for enhanced efficiency and safety.</p>
                        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae quisquam ipsum, hic dicta magnam perferendis illo pariatur dolorum! Accusamus quidem nihil voluptate assumenda fuga odit quas aperiam quo commodi!
                            Ullam corporis enim fugit dolorem dolore delectus atque voluptate, cupiditate dolorum soluta ipsum reiciendis ea aut minus architecto fuga quos explicabo error facere necessitatibus sunt. Officia repudiandae vel natus nemo?
                            Nisi distinctio, laboriosam vitae quo autem sapiente delectus tempore rerum consequatur quaerat dolore magni sed, assumenda inventore ipsam quos?</p> */}

                        <ul>
                            <li>  Workforce Tracking & Productivity – Monitors employee movements, attendance, and task completion using GPS and RFID. </li>
                            <li> Incident Management & Alerts – Detects safety hazards, sends instant notifications, and triggers emergency responses. </li>
                            <li>Data-Driven Decision Making – Uses AI and Big Data analytics to optimize energy usage and resource allocation.</li>
                            <li>Predictive Maintenance – AI-driven analytics detect potential failures before they occur, reducing downtime.</li>
                            <li>Real-Time Monitoring – Tracks site activities, equipment performance, and environmental conditions using IoT sensors.

</li>
<li>Energy Efficiency Optimization – Adjusts power consumption dynamically to minimize waste and reduce costs.</li>
<li>Security & Surveillance – Integrates CCTV, drones, and access control for enhanced site security.</li>
                            <br />
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
                           {/* <p>1. Smart Data Analysis Engine: Improve the overall data quality by monitoring alarm conditions and the state of the system, based on the combination of values from various sensors connected with RMS.</p>
                         <p> 2.Real-time Network Monitoring: Our Live Network Operations Center offers continuous, real-time monitoring of your entire energy network. Powered by AI-driven analytics, it provides instant insights into the performance of your assets, helping you stay ahead of potential issues.</p>
                         <p>3.Automated Alerts & Intelligent Reporting: The system automatically detects irregularities and sends customized alerts for faster response times. Our AI algorithms prioritize issues based on severity, ensuring you can act swiftly on critical faults.</p> */}
                    </div>


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
                <ProductSlider/>

                <Footer />
            </section>

        </div>
    );
}

export default Product;
