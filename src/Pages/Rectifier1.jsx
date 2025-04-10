import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import HomeNavbar from "../Common/HomeNavbar";
import homeshade from "../assets/homeshade.png";
import homeeimg from "../assets/homeeimg.png";
import { home_hero_logos } from "../Data/home";
import "./product.css";
import Footer from "../Common/Footer";
import ProductSlider from "../Common/ProductSlider";
import { Link, NavLink } from "react-router-dom";
import primer from '../assets/primer.svg'
import kij from '../assets/kij.svg';

function Product() {
    let [activeTab, setActiveTab] = useState("description");

    useEffect(() => {
        // scrollTo(0, 0);
    }, []);

    const slides = [
        {
            title: "Rectifier AR48-1700",
            description: [
                "The AST R48-1700 rectifier efficiently converts standard AC supply voltages into stable nominal-48V DC voltage, tailored to meet the specific requirements of various applications.",
                "Featuring constant power output, this rectifier offers enhanced performance. To accommodate higher load capacities, multiple rectifiers can be connected in parallel, and for added intelligent control, a separate controller can be integrated.",
            ],
            reference: "REF. 4231/406",
        },
        //   {
        //     title: "Rectifier AR48-4000",
        //     description: [
        //       "The Applied Energy AR48-4000 rectifier efficiently converts standard AC supply voltages into stable nominal48V DC voltage, tailored to meet the specific requirements of various applications. ",
        //       "Featuring constant power output, this rectifier offers enhanced performance. To accommodate higher load capacities, multiple rectifiers can be connected in parallel, and for added intelligent control, a separate controller can be integrated."    
        // ],
        //     reference: "REF. 4231/407",
        //   },
        //   {
        //     title: "Rectifier AR48-850",
        //     description: [
        //       "The AST R48-850 rectifier efficiently converts standard AC supply voltages into stable nominal-48V DC voltage, tailored to meet the specific requirements of various applications.",
        //       "Featuring constant power output, this rectifier offers enhanced performance. To accommodate higher load capacities, multiple rectifiers can be connected in parallel, and for added intelligent control, a separate controller can be integrated.",
        //     ],
        //     reference: "REF. 4231/407",
        //   },
    ];

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
                        <h5>RECTIFIER MODULES</h5>
                    </div>
                </div>
            </section>

            <section className="products2wa">
                <div className="producwra_cont">
                    <div className="whosec2">
                        {/* Left Static Image */}
                        <div className="pros2coleft">
                            <div className="largpro_div">
                                <img
                                    src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742628052/images_7-removebg-preview_ema7xf.png"
                                    alt="largeimg"
                                    className="largeimg"
                                />
                            </div>
                        </div>

                        {/* Right Swiper for Text */}
                        <div className="procons2_right">
                            {/* <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
                  768: { slidesPerView: 1, spaceBetween: 15 }, // Tablet
                  1024: { slidesPerView: 1, spaceBetween: 20 }, // Desktop
                }}
                className="rectifier-text-swiper"
                style={{ width: "100%", padding: "20px" }} // Ensure full width
              > */}

                            <div className="headding">
                                {/* <h3>Remote Monitoring System</h3> */}
                                <h3>Rectifier AR48-4000</h3>
                            </div>

                            <p>The Applied Energy AR48-4000 rectifier efficiently converts standard AC supply voltages into stable nominal48V DC voltage, tailored to meet the specific requirements of various applications.</p>

                            <p>
                                Featuring constant power output, this rectifier offers enhanced performance. To accommodate higher load capacities, multiple rectifiers can be connected in parallel, and for added intelligent control, a separate controller can be integrated.
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

                    <div className="tab-section">
                        <div className="tab-container">
                            <p
                                className={`tab ${activeTab === "description" ? "active" : ""}`}
                                onClick={() => setActiveTab("description")}
                            >
                                Features
                            </p>
                           
                        </div>
                        
                        <div
                            className="tab-underline"
                            style={{
                                transform:
                                    activeTab === "description"
                                        ? "translateX(0%)"
                                        : "translateX(100%)",
                            }}
                        ></div>
                    </div>

                    <div className="description-content">
                        {activeTab === "description" && (
                            <>
                                <p>
                                    Reduce operational expenses by utilizing high-efficiency
                                    rectifiers, achieving an efficiency of 96.5% to meet the
                                    specific requirements of various applications.
                                </p>
                                <p>Operate your DC plant effectively in challenging
                                    environments thanks to its wide input voltage rang</p>
                                <ul>
                                    <li>
                                        High Efficiency - The rectifier boasts high efficiency, reducing power consumption and lowering operating costs.
                                    </li>
                                    <li>
                                        Stable DC Power - Converts standard AC supply voltages into a stable nominal -48V DC voltage, adjustable to application needs.
                                    </li>
                                    <li>
                                        Wide Operating Temperature Range - Operates effectively within a broad temperature range (-40°C to +75°C), meeting the demands of various environments.
                                    </li>
                                    <li>
                                        Reduced Footprint - Optimized depth allows installation in short-depth racks and cabinets.
                                    </li>
                                    <li>
                                        DSP Technology - Utilizes Digital Signal Processor (DSP) functionality for efficient operation and optimized load sharing, enhancing reliability.
                                    </li>
                                    <li>
                                        Hot Pluggable - Facilitates future extensions and maintenance without disrupting the system.
                                    </li>
                                </ul>
                            </>
                        )}
                    </div>

                    <section>
                        <a
                            href="/Datasheet_AR48_4000W_RM.pdf"
                            download="Datasheet_AR48_4000W_RM.pdf"
                        >
                            <div className="pfdd" style={{ padding: "0px 0px 45px 0px" }}>
                                <button className="five-d-btn">Download PDF</button>
                            </div>
                        </a>
                    </section>
                </div>



                {/* <ProductSlider /> */}
                <div className='whitee'>
                    {/* Cards Section */}

                    <div className='something'>
                        <h5>
                            Some of Other Rectifier Products
                        </h5>
                    </div>
                    <div className="cards-containeeee">

                        {/* onClick={() => setpop3(true)} */}
                        <Link to="/Rectifier">  <div  >
                            <img className="testy" width={40} height={40} src={kij} alt="kij" />
                            <div className="slidim_wrs sm_ty">
                                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742628052/images_7-removebg-preview_ema7xf.png" alt="Slide Image" />
                            </div>
                            <div className="slid_titlee">
                                <div className='subrr' >
                                    <h4>Rectifier AR48-1700</h4>
                                </div>
                                {/* <p style={{ fontWeight: "200", padding: "5px 0px 0px 0px" }}>REF. 4231/406</p> */}

                            </div>
                        </div></Link>


                        <NavLink to="/Rectifier2"> <div >
                            <img className="testy" width={40} height={40} src={kij} alt="kij" />
                            <div className="slidim_wrs sm_ty">
                                <img src="https://res.cloudinary.com/dbcmdtr3r/image/upload/v1742628052/images_7-removebg-preview_ema7xf.png" alt="Slide Image" />
                            </div>
                            <div className="slid_titlee">
                                <div className='subrr'>
                                    <h4>Rectifier AR48-850</h4>
                                </div>
                                {/* <p style={{fontWeight: "200", padding: "5px 0px 0px 0px"}}>REF. 4231/406</p> */}


                            </div>
                        </div></NavLink>


                    </div>






                </div>
                <Footer />
            </section>
        </div>
    );
}

export default Product;
