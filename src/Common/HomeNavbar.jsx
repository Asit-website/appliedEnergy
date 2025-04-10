import React, { useEffect, useState } from "react";
import "./homenav.css";
import logo from "../assets/homenavlogo.png";
import { homenavbardata } from "../Data/home";
import hnav1 from "../assets/hnal1.png";
import hnal2 from "../assets/hnal2.png";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import OutsideClickHandler from "react-outside-click-handler";
import black_logo from "../assets/black_logo.png";
import black_lines from "../assets/black_lines.png"
import navbarimg from "../assets/navbar_imgaes.png"
import { FaArrowDown } from "react-icons/fa";
// import suspen from '../assets/suspen.svg'
import logoo from '../assets/logoo.png'
import setu from '../assets/setu.svg'
import { link } from "d3";
import { Name } from "ajv";
const products = [
  {
    id: 1,
    title: "SMPS Cabinet",
    link: "/Smps",
  },
  {
    id: 2,
    title: "Rectifier Modules",
    link: "/Rectifier",
  },
  {
    id: 3,
    title: "Battery Banks",
    link: "/Battery",
  },
  {
    id: 4,
    title: "Battery",
    link: "/Battery",
  },
  {
    id: 5,
    title: "RMS",
    link: "/Rms",
  },
  {
    id: 6,
    title: "DCEM",
    link: "/Dcem",
  },
  {
    id: 7,
    title: "ACEM",
    link: "/Acsmart",
  },
  {
    id: 8,
    title: "MPPT controller",
    link: "/Mppt",
  },
  {
    id: 9,
    title: "EV Charger",
    link: "/Ev",
  },
];

const dropdownVariants = {
  hidden: { height: 0, opacity: 0, overflow: "hidden" },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};


const data = [
  {
    // img: navbarimg , 
    title:"About Us",
    link:"/about "
  },
  
  {
    // img: "https://res.cloudinary.com/dgif730br/image/upload/v1741864567/9a5398a7-3a20-4406-9039-d1d87c9c5f5f_iwzfr9.png" , 
    title:"Our Solutions",
    // subitems:["TiB", "UPS", "EV Charger", "Bank"],
    subitems:[
      {
        id:1,
        Name:"TIB",
        link:"/tib"
      },
      {
       id:2,
       Name: "UPS",
       link:"/ups1"
      },
      {
       id:3,
       Name: "EvCharger",
       link:"/Evcharge"
      },
      // {
      //   id:4,
      //   Name: "Bank",
      //   link: "/Bank"
      // },
      {
        id:5,
        Name: "AIML",
        link: "/Aiml"
      }
    ],
    link:"/solution"

  },
  
  {
    // img: "https://res.cloudinary.com/dgif730br/image/upload/v1741864567/9a28456b-08ce-4580-806f-1d28ade76820_i5kaw8.png" , 
    title:"Products",
    // subitems:["Rms","Smps", "Rectifier","Battery","Dcem", "3.3kW AC Smart Socket", "Fuel Management & Analytics"]
    subitems:[
      {
        id:1,
        Name:"RMS",
        link:"/Rms"
      },
      {
       id:2,
       Name: "SMPS",
       link:"/Smps"
      },
      {
       id:3,
       Name: "Rectifier",
       link:"/Rectifier"
      },
      {
        id:4,
        Name: "Battery",
        link: "/Battery"
      },
      {
        id:5,
        Name: "DCEM",
        link: "/Dcem"
      },
      
      ,
      {
        id:6,
        Name: "ATB4820T",
        link: "/Atb"
      },
      {
        id:7,
        Name: "ITC Edge Controller",
        link: "/Itc"
      },
      {
        id:8,
        Name: "Inverter AE48-2000",
        link: "/inverter"
      }
      
      //  {
      //     id: 12,
      //     title: "Inverter",
      //     link: "/inverter",
      //   },
      // {
      //   id:6,
      //   Name: "Live Site Operations",
      //   link: "/Live"
      // }, {
      //   id:7,
      //   Name: "Fuel Management & Analytics",
      //   link: "/Fuel"
      // }
      // , {
      //   id:8,
      //   Name: "AET-240kW",
      //   link: "/AET"
      // }
      // , {
      //   id:9,
      //   Name: "EB Discom Bill Payment & Analytics",
      //   link: "/EB"
      // },
      // {
      //   id:10,
      //   Name: "Field Resource Management & Analytics",
      //   link: "/Field"
      // }
      // ,{
      //   id:11,
      //   Name: "Operations Analytics",
      //   link: "/Operations"
      // },
      // ,{
      //   id:12,
      //   Name: "Field Resource Management & Analytics",
      //   link: "/Field"
      // },
      // {
      //   id:13,
      //   Name: "Power Analytics",
      //   link: "/Power"
      // },
      
      
    ],
  },
  {
    // img: "https://res.cloudinary.com/dgif730br/image/upload/v1741864564/b8c7165e-47d9-4c7d-9198-06dc733841f2_zl9xor.png" , 
    title:"Careers",
  },
  {
    // img: "https://res.cloudinary.com/dgif730br/image/upload/v1741864561/a0fc463a-1dae-45f7-b36b-f87cb87bf33b_jizka7.png" , 
    title:"Contact",
    link:"/contact"
  }

]

function HomeNavbar() {
  const [showslidebar, setShowslide] = useState(false);
  const [isHovered, setIshovered] = useState(false);
  const [isHovered2, setIshovered2] = useState(false);
  const navigate = useNavigate();
  const [showDrop, setShowDrop] = useState(false);
  const [showDrop2, setShowDrop2] = useState(false);
  

  const [isScrolled, setIsScrolled] = useState(false);

  const products =[
    { id: 1, title: "SMPS Cabinet", link: "/Smps" },
  { id: 2, title: "Rectifier Modules", link: "/Rectifier" },
  { id: 3, title: "Battery Banks", link: "/Battery" },
  { id: 4, title: "Battery", link: "/Battery" },
  { id: 5, title: "RMS", link: "/Rms" },
  { id: 6, title: "DCEM", link: "/Dcem" },
  { id: 7, title: "ACEM", link: "/Acsmart" },
  { id: 8, title: "MPPT controller", link: "/Mppt" },
  { id: 9, title: "EV Charger", link: "/Ev" },
  // {id: 12, title: "Inverter", link: "/inverter"}
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [dropdownClass, setDropdownClass] = useState("hide");
  const [dropdownClass2, setDropdownClass2] = useState("hide");



  useEffect(() => {
    if (isHovered) {
      setDropdownClass("show");
    } else {
      setDropdownClass("hide");
    }
  }, [isHovered]);

  useEffect(() => {
    if (isHovered2) {
      setDropdownClass2("show");
    } else {
      setDropdownClass2("hide");
    }
  }, [isHovered2]);

  const location = useLocation();


   const [hoverdImg , setHoverdImg] = useState("");

    const [showitems , setShowItems] = useState([]);
    const [showIndex , setShowIndex] = useState(null);

    const [showNavbar,setShowNavbar] = useState(true);

    // toggle

    const [showShadows, setShowShadows] = useState(false);

  return (
    
    <div className={`${isScrolled ? "scrolled-navbar" : "hoemnavbarwap"}`}>
      <nav className={`${isScrolled ? "hoemnavbar2" : "hoemnavbar"}`}>
        <img className="homeimg" onClick={() => navigate("/")} src={location.pathname === '/' || 'Rms' ? (isScrolled ? logoo : logo) : logoo} alt="" />

        <div className="nav_logos">
          <p className={`${isScrolled ? "menuWhite" : "menutext"}`}>Menu</p>
          {/* <img onClick={() => setShowShadows(true)} src={isScrolled ? setu : hnal2} alt="" /> */}
          <img onClick={() => {setShowShadows(true);setShowNavbar(false)}} src={isScrolled ? setu : hnal2} alt="" />

      
        </div>
      </nav>

      {showslidebar && (
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: "100vw" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="showsliderbar"
        >
          <div>
            <ImCross
              onClick={() => setShowslide(false)}
              className="ImCrossfsd"
            />
          </div>

          {homenavbardata?.map((item, index) =>
            item.title !== "Products" && item.title !== "Solutions" ? (
              <a onClick={() => navigate(item.redirect)} href="" key={index}>
                {item?.title}
              </a>
            ) : item.title === "Products" ? (
              <div className="showdropsal">
                <div
                  onClick={() => setShowDrop((prev) => !prev)}
                  className="producrrelatve cursor-pointer"
                >
                  <a key={index}>{item?.title}</a>
                  <IoIosArrowDown />
                </div>

                {showDrop && (
                  <ul className="showdropsd2">
                    {products?.map((prod, index) => (
                      <NavLink to={`${prod?.link}`}>
                        {" "}
                        <li key={index}>{prod.title}</li>
                      </NavLink>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <div className="showdropsal">
                <div
                  onClick={() => setShowDrop2((prev) => !prev)}
                  className="producrrelatve cursor-pointer"
                >
                  <a key={index}>{item?.title}</a>
                  <IoIosArrowDown />
                </div>

                {showDrop2 && (
                  <div className="showdrop2s">
                    <h5>Solutions</h5>
                    <div className="drop2paras">
                      <p>
                        Intelligent Energy Management System for Critical
                        Infrastructure
                      </p>
                      <ul>
                        <li>TiB</li>
                        <li>HPSC</li>
                      </ul>
                      <p>Retrofit Package for Existing Tower Co Sites</p>
                      <ul>
                        <li>Retrofit RMU </li>
                      </ul>
                    </div>
                    <div className="drop2paras">
                      <h6>(AI/ML)</h6>
                      <ul>
                        <li>OPCO Load and Energy Analytics </li>
                        <li>AC vs DC Energy Usage Analytics </li>
                        <li>Remote Monitoring of Data</li>
                        <li>SLA Analytics</li>
                        <li>EB Gap Analysis</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </motion.div>
      )}

{showShadows && (
  <div className="shadwow_wraps">
    <nav>
      {/* <img onClick={() => navigate("/")} src={black_logo} alt="" /> */}
      <img className="showimg" onClick={() => navigate("/")} src={logoo} alt="" />
      <div className="nav_logos">
        <p className="menutext2">Menu</p>
        <img onClick={() => setShowShadows(false)} src={black_lines} alt="" />
    

      </div>
    </nav>

    <hr />

          <div className="shadoconta">
          <div className="shadoconta">

    <div className="shadoconta">

      <img src={hoverdImg} alt="" className="shohoverdImg" />

      <div className="sha_righsid">
        {data.map((item, index) => (
          <div
            onMouseEnter={() => {
              setHoverdImg(item.img);
              setShowIndex(index);
              setShowItems(item?.subitems || []);
            }}
            onMouseLeave={() => {
              setHoverdImg("");
              setShowIndex(null);
              setShowItems([]);
            }}
            key={index}
            className="single_ahs cursor-pointer"
          >
            <div className="sinedrops">
              <NavLink to={item?.link || "#"}>
                <p>{item.title}</p>
              </NavLink>
              {item?.subitems?.length > 0 && <FaArrowDown />}
            </div>

            {/* Show subitems when hovered */}
            {showIndex === index && item?.subitems?.length > 0 && (
              <div className="show_indexsha">
                {showitems.map((subItem, idx) => (
                   <NavLink key={idx} to={subItem.link} className="showitms">
                   {subItem.Name}
                 </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
          </div>
          </div>

    </div>

  </div>
)}
   

      
    </div>
    
    
  );
}

export default HomeNavbar;
