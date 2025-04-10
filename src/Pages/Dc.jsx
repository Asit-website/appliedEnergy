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
                    <h5>DC Charger   </h5>
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
      <h3> 60kW DC Charger </h3>
    </div>
   <p>Designed to provide a reliable, efficient, and 
convenient solution for charging electric vehicles. It 
aims to offer fast charging, ensure compatibility with 
various EV models, promote eco-friendly 
transportation, and support the transition to 
sustainable energy.</p>
    <div className="refff">
      <h4>REF. 4231/406</h4>
    </div>
  </div>
</div>
                    {/* 
                    <div className="descrbbtns2">
                        <button><span>Description</span></button>
                        <button><span>Reviews</span></button>
                    </div> */}

                    <div className="description-content">
                        <h1>Features </h1>
                        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae quisquam ipsum, hic dicta magnam perferendis illo pariatur dolorum! Accusamus quidem nihil voluptate assumenda fuga odit quas aperiam quo commodi!
                            Ullam corporis enim fugit dolorem dolore delectus atque voluptate, cupiditate dolorum soluta ipsum reiciendis ea aut minus architecto fuga quos explicabo error facere necessitatibus sunt. Officia repudiandae vel natus nemo?
                            Nisi distinctio, laboriosam vitae quo autem sapiente delectus tempore rerum consequatur quaerat dolore magni sed, assumenda inventore ipsam quos?</p> */}

                        <ul>
                            <li> More 25W Ideal Power Consumption </li>
                            <li>Built-in 10+ language </li>
                            <li>Easy Maintenance</li>
                            <li>Low noise design ≤ 60 dB (A)</li>
                            <li>Support APP, Touch, Plug & Charge</li>
                            <li>Unique module pre-installation design</li>
                            <li>Remote diagnostics and OTA upgrade</li>
                            <li>Display Debug log mode</li>
                        </ul>

                        
            
                       
                       <div>

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
                        </div>
                        

                        </div>



                        <section>
  <a 
    href="/Datasheet_EV Charger_60.pdf" 
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

                <Footer />
            </section>

        </div>
    );
}

export default Product;
