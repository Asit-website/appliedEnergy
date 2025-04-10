import "./home.css";
import { useState, useEffect } from "react";
import HomeNavbar from "../Common/HomeNavbar";
import homeshade from "../assets/homeshade.png";
import homeheroimg from "../assets/homeheroimg.png";
import playicon from "../assets/play_icon.png";
import { ho_s2_box, home_hero_logos, hs3cont } from "../Data/home";
import dots from "../assets/home_s2_dots.png";
import s3img3 from "../assets/s3largimg.png";
import Slider from "../Common/Slider";
import Testimonial from "../Components/Home/Testimonial";
import WeFollow from "../Components/Home/WeFollow";
import CaseStudy from "../Components/Home/CaseStudy";
import NewsUpdate from "../Components/Home/NewsUpdate";
import Contact from "../Components/Home/Contact";
import Footer from "../Common/Footer";
import OurClient from "../Components/Home/OurClient";
import vid from "../assets/vedio.mp4";
import { sliderData, sliderData2 } from "../Data/home";
import allimg2 from "../assets/all_img2.png";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Testimonial2 from "../Components/Home/Testimonial2";
import NewSec from '../Components/Home/NewSec'
import renew from '../assets/renew.svg'
import site2 from '../assets/site2.svg'
import site3 from '../assets/site3.png'
import site4 from '../assets/site4.png'
import site5 from '../assets/site5.png'
import Contacts from "../Components/Home/Contacts";
import { NavLink } from "react-router-dom";
const sections = [
  { id: "section1", bgColor1: site2, content1: "Decarbonisation", content2: " At Applied Energy Technologies, we are dedicated to driving decarbonisation by offering advanced energy solutions tailored to our clients needs. .", bgColor: "url('https://res.cloudinary.com/dgif730br/image/upload/v1739980439/site1_vi52gs.svg')", content: "Welcome to Section 1" },
  { id: "section2", bgColor2: site3, content3: "Digitalisation", content4: "Digitalisation is the process of reducing CO₂ emissions by adopting cleaner energy, optimizing operations, and using sustainable technologies to combat climate change.", bgColor: " url('https://res.cloudinary.com/dgif730br/image/upload/v1739980893/digitization_1_e3khav.png')", content: "Now in Section 2" },
  { id: "section3", bgColor3: site4, content5: "Decentralisation", content6: "Decentralisation is the process of reducing CO₂ emissions by adopting cleaner energy, optimizing operations, and using sustainable technologies to combat climate change.", bgColor: "url('https://res.cloudinary.com/dbcmdtr3r/image/upload/v1739994284/1556905745722_1_1_1_dvhmal.png')", content: "You reached Section 3" },
  { id: "section4", bgColor4: site5, content7: "Democratisation", content8: "Democratisation is the process of reducing CO₂ emissions by adopting cleaner energy, optimizing operations, and using sustainable technologies to combat climate change.", bgColor: "url('https://res.cloudinary.com/dgif730br/image/upload/v1739980718/global-network-across-planet-earth-blockchain-global-network-across-planet-earth-blockchain-elements-image-136686433_3_edaf8c.png')", content: "You reached Section 4" }

];
function HomePage() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find((s) => s.id === entry.target.id);
            if (section) setActiveSection(section);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);



  return (
    <div>
      <section className="hero_sectionwrap">
        <HomeNavbar />

        <div className="video-container">
          <video autoPlay muted loop className="video-bg">
            <source src={vid} type="video/mp4" className="videoImg" />
          </video>
        </div>

        <img src={homeshade} alt="homeshade" className="homeshade" />



        {/* <div className="home_logos">
          {home_hero_logos?.map((im, index) => (
            <div key={index} className="sing_ho_lg">
              <img src={im?.img} alt="" />
            </div>
          ))}
        </div> */}



        {/* ===================== ==========================================================================*/}
        <div className="home_logos">
          {home_hero_logos
            ?.filter(im => im?.name !== "Twitter" && im?.name !== "Facebook")
            .map((im, index) => (
              <div key={index} className="sing_ho_lg">
                <img src={im?.img} alt={im?.name || "Logo"} />
              </div>
            ))}
        </div>


        {/* ======================================================== */}
        <div className="hero_sec_con">
          <h2>Powering Tomorrow: <span>Intelligent Energy</span>  Solutions at Scale</h2>

          <div className="her_seccpa">
            {/* <p className="her_lin"></p> */}
            <h4>
              {" "}
              Integrated Renewable Energy
            </h4>
            {/* <p className="her_lin"></p> */}
          </div>

          <NavLink to="/contact"><button className="contactnow_btn">
            <span>Contact Now</span> <img className="marg_btn" src={renew} alt="renew" />
          </button></NavLink>
        </div>
      </section>

      {/* <section className="home_sec2">
        <div className="home_s2_cont">
          {ho_s2_box?.map((item, index) => (
            <div key={index} className="sinel_s2">
              <img src={dots} alt="" />
              <div className="sin_s2_top">
                <h3>{item.title}</h3>
                <p className="itm_index">{index + 1}</p>
              </div>
              <p className="hs2_para">{item.para}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section className="home_sec3">
        <div className="home_s3_cont">
          <div className="hm_s3Fir">
            <img src={allimg2} className="allimg2" alt="allimg2" />

            <div className="hm_s3left">
              <p className="hm_s3tag">About Us</p>
              <h3>
                An end to end <span>Energy Solution</span> for your exacting
                needs
              </h3>

              <p className="sms3_par">
                Fully integrated, from design & installation, to operation &
                maintenance. Running on AI/ML Backed Energy Software Platform,
                our energy solutions are optimized for long term reliability and
                peace of mind.
              </p>
            </div>
          </div>

          <div className="hrs3_botms">
            {hs3cont?.map((item, index) => (
              <div key={index} className="singl_3con">
                <img src={item.img} alt="" />
                <h4>{item.title}</h4>
                <p>{item.para}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="home_sec4">
        <div className="hm_s4_cont">
          <div className="hrtop_wrass4">

            <div className="hms4_top">
              <p>
                Our Best-Selling <span>Products</span>
              </p>

              <h4>APPLIED ENERGY </h4>
              {/* “TIB SOLUTIONS”  */}

              <p className="itablicpower">Power Solutions</p>
            </div>

            {/* <div className="s4wraarows">
               <FaArrowLeftLong  className="aros" />
               <FaArrowRightLong className="aros"  />
             </div> */}

          </div>

          <div className="hms4_slider">
            {/* <Slider sliderData={sliderData2} />
            <br />
            <br /> */}
            <Slider sliderData={sliderData} />
          </div>
        </div>
      </section>


      <Testimonial2 />

      {/* ==========yaha testimonial======== */}

      {/* <NewSec/> */}

      <WeFollow />

      <CaseStudy />

      {/* <NewsUpdate /> */}


      <OurClient />

      {/* <Contacts /> */}

      {/* <div style={{ backgroundImage: activeSection.bgColor, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat", minHeight: "60vh", transition: "background 0.5s ease" }}>
      {sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            color: "#fff",
          }}
        >
      
           <div className='follow_set'>
        <div className="flw_box">
          <div className="flw_sox">
            <div className="flw_img">
              <img src={section?.bgColor1} alt="" />
              <img src={section?.bgColor2} alt="" />
              <img src={section?.bgColor3} alt="" />
              <img src={section?.bgColor4} alt="" />
              
            </div>
            <div className="flw_sx">
              <h3>{section.content1}</h3>
              <p>{section.content2}</p>
              <h3>{section.content3}</h3>
              <p>{section.content4}</p>
              <h3>{section.content5}</h3>
              <p>{section.content6}</p>
              <h3>{section.content7}</h3>
              <p>{section.content8}</p>
            </div>
          </div> 
        </div>
        
 
   </div>  

            
           
          </div>   
 
    
      ))}
    </div> */}



      <Footer />
    </div>
  );
}

export default HomePage;
