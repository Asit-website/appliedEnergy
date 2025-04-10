import React, { useEffect, useState } from "react";
import "./homenav.css";
import logo from "../assets/homenavlogo.png";
import logoo from '../assets/logoo.png'
import { homenavbardata } from "../Data/home";
import hnav1 from "../assets/hnal1.png";
import hnal2 from "../assets/hnal2.png";
import { NavLink, useNavigate } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import OutsideClickHandler from "react-outside-click-handler";
// import logoo from "../assets/logoo.png"
import black_lines from "../assets/black_lines.png"
import navbarimg from "../assets/navbar_imgaes.png"
import { FaArrowDown } from "react-icons/fa";
import suspen from '../assets/suspen.svg'
import setu from '../assets/setu.svg'
import { link } from "d3";
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
    id: 10,
    title: "Inverter",
    link: "/inverter",
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
    img: navbarimg , 
    title:"About",
    link:"/about"
  },
  
  {
    img: navbarimg , 
    title:"Solutions",
    subitems:["item1","item2", "item3"],
    link:"/solution"
  },
  
  {
    img: navbarimg , 
    title:"Products",
    subitems:["item1","item2", "item3"]
  },
  {
    img: navbarimg , 
    title:"Careers",
  },
  {
    img: navbarimg , 
    title:"Contact",
    link:"/contact"
  }

]

function HomeNavbar1() {
  const [showslidebar, setShowslide] = useState(false);
  const [isHovered, setIshovered] = useState(false);
  const [isHovered2, setIshovered2] = useState(false);
  const navigate = useNavigate();
  const [showDrop, setShowDrop] = useState(false);
  const [showDrop2, setShowDrop2] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

  const [dropdownClass, setDropdownClass] = useState("hide");
  const [dropdownClass2, setDropdownClass2] = useState("hide");

  const [showShadows, setShowShadows] = useState(false);

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


   const [hoverdImg , setHoverdImg] = useState("");

    const [showitems , setShowItems] = useState([]);
    const [showIndex , setShowIndex] = useState(null);

  return (
    <div className="navbaarTransition">
    <div className="hoemnavbarwap">
      <nav  className="hoemnavbar">
        
        <img onClick={() => navigate("/")} src={logoo} alt="" />

        <div className="nav_logos">
          <p className="menutext">Menu</p>
          <img onClick={() => setShowShadows(true)} src={hnal2} alt="" />
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
            {/* <img onClick={() => navigate("/")} src={logoo} alt="" /> */}

            <div className="nav_logos">
              <p className="menutext2">Menu</p>
              <img onClick={() => setShowShadows(false)} src={black_lines} alt="" />
            </div>
          </nav>

          <hr />

          <div className="shadoconta">

              <img src={hoverdImg} alt="" className="shohoverdImg" />

               <div className="sha_righsid">
                 {
                  data.map((item , index)=>(
                     <div  onMouseEnter={() => setHoverdImg(item.img)} 
                     onMouseLeave={() => setHoverdImg('')} key={index} className="single_ahs cursor-pointer">

                            <div className="sinedrops">
                            <NavLink to={item?.link}>  <p onClick={()=>{
                                 if(item?.subitems?.length > 0){
                                  
                                   if(showIndex === index){
                                    setShowIndex(null);
                                    setShowItems([]);
                                   }
                                   else{
                                     setShowIndex(index);
                                     setShowItems(item.subitems);
                                   }

                                 }
                                 else{

                                 }
                              }}>{item.title}</p></NavLink>
                               {
                                item?.subitems?.length > 0 && 
                                <FaArrowDown />

                               }
                            </div>

                            {
                              showIndex === index && 
                              <div className="show_indexsha">
                                 {
                                  showitems?.map((item , index)=>(
                                     <p className="showitms" key={index}>{item}</p>
                                  ))
                                 }
                              </div>
                            }

                     </div>
                  ))
                 }
               </div>

          </div>

        </div>
      )}
    </div>
    </div>
  );
}

export default HomeNavbar1;
