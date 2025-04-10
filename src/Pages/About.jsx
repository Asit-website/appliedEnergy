import "./about.css";
import React, { useState } from "react";
import HomeNavbar from "../Common/HomeNavbar";
import homeshade from "../assets/homeshade.png";
import logoo from "../assets/logoo.png";
import { home_hero_logos } from "../Data/home";
import WeFollow from "../Components/Home/WeFollow";
import CaseStudy from "../Components/Home/CaseStudy";
import NewsUpdate from "../Components/Home/NewsUpdate";
import OurClient from "../Components/Home/OurClient";
import Contact from "../Components/Home/Contact";
import Footer from "../Common/Footer";
import wr from "../assets/about_wr.png";
import wr2 from "../assets/wr2.png";
import AboutSec2 from "./AboutSec2";
import HomeNavbar1 from "../Common/HomeNavbar1";
import Faq1 from "../Pages/Faq1";
// import homeshade from '../assets/homeshade.png';

const About = () => {


  return (
    <div>

      <HomeNavbar />
      {/* <HomeNavbar1/> */}



      <section className="products1wrap">



        <img src={"https://res.cloudinary.com/dgif730br/image/upload/v1741859771/Frame_1597881763_h6xkun.png"} alt="homeheroimg" className="homeheroimg" />

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
            <h5>About Us</h5>
          </div>

        </div>
      </section>


      {/* <div className="home_logos">
          {home_hero_logos?.map((im, index) => (
            <div key={index} className="sing_ho_lg">
              <img src={im?.img} alt="" />
            </div>
          ))}
        </div> */}

      {/* <div className="hero_sec_con">
          <div className="her_seccpa ter_seccpa">
            <p className="her_lin"></p>
            <h4>About Us</h4>
            <p className="her_lin"></p>
          </div>
          <div className="pointpro tintro">
            <p>•</p>
            <span>Home</span>
            <p>•</p>
            <span>About Us</span>
          </div>
        </div> */}





      <AboutSec2 />

      {/* <div className="abouttt">
        <div className="abouutt">
        <div className="heading5">
          <h5>About Us</h5>
        </div>
        <div className="para5">
          <p>Applied Energy Technologies leverages decades of experience to transform how businesses manage and optimize their energy needs. As pioneers in cost-efficient, distributed, and sustainable energy solutions, we deliver comprehensive services across the EV, Telecom, and Banking sectors.</p>
        </div> <br />
        <div className="ulli">
          <ol>
            <li>
            <b> End-to-End Energy Management: </b>  From design and installation to ongoing operation and maintenance, we provide full-spectrum solutions.
            </li>
            <li> <b>AI/ML-Powered Platform:</b> Ensures long-term reliability, scalability, and peak performance for intelligent energy management, renewable integration, and advanced EV charging.</li>
            <li><b>Expert Team:</b> With over 2,000 engineers, technicians, and experts, we deliver tailored, innovative solutions that meet specific energy requirements.</li>
            <li><b>Next-Gen Technologies:</b> Our commitment to R&D keeps us at the forefront of cutting-edge energy advancements.</li>
          </ol>
        </div>
        <div> <br />
          <p>At Applied Energy, we don’t just provide energy solutions—we create possibilities for a smarter, more sustainable future.</p>
        </div>
      </div>
      </div> */}



      <Faq1 />
      <WeFollow />

      {/* <CaseStudy /> */}

      {/* <NewsUpdate /> */}

      <OurClient />

      {/* <Contact /> */}

      <Footer />
    </div>
  );
};

export default About;
