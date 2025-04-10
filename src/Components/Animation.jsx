import "./animation.css"
import anim1 from "../assets/anim1.png"
import anim2 from "../assets/anim2.png"
import anim3 from "../assets/anim3.png"
import anim4 from "../assets/anim4.png"
import { useEffect, useState } from "react"

const texts = [
    {
        title:"Decarbonisation",
        desc:" At Applied Energy Technologies, we are dedicated to driving decarbonisation by offering advanced energy solutions tailored to our clients needs. ."
    },
    {
        title:"Democratisation" ,
        desc:"Democratisation is the process of reducing CO₂ emissions by adopting cleaner energy, optimizing operations, and using sustainable technologies to combat climate change."
    },
    {
        title:"Digitalisation" ,
        desc:"Digitalisation is the process of reducing CO₂ emissions by adopting cleaner energy, optimizing operations, and using sustainable technologies to combat climate change."
    },
    {
        title:"Decentralisation" ,
        desc:"Decentralisation is the process of reducing CO₂ emissions by adopting cleaner energy, optimizing operations, and using sustainable technologies to combat climate change."
    }
]

function Animation() {

    const [isAtTop, setIsAtTop] = useState(false);
    const [showtext , setShowText] = useState(0);
    const [animateText, setAnimateText] = useState(false);
    const [doit , setdo] = useState(false);


    const [howmuchscroll , sethowmuchscroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const img = document.querySelector(".anim1"); // Select the image
          if (!img) return;
    
          const rect = img.getBoundingClientRect();

          
          if (rect.top <= 100) {
            setdo(false);
            setIsAtTop(true);
          } else {
            setIsAtTop(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    useEffect(() => {
        const handleScroll = () => {
          const img = document.querySelector(".anim2"); 
          if (!img) return;
    
          const rect = img.getBoundingClientRect();

    
          if (rect.top <= 100) {
            setShowText(1)
            setdo(false);
          } 
          if(rect.top > 150){
            setShowText(0);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    useEffect(() => {
        const handleScroll = () => {
          const img = document.querySelector(".anim3"); // Select the image
          if (!img) return;
    
          const rect = img.getBoundingClientRect();

    
          if (rect.top <= 100) {
            setShowText(2)
          } else {
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    useEffect(() => {
        const handleScroll = () => {
          const img = document.querySelector(".anim4"); // Select the image
          if (!img) return;
    
          const rect = img.getBoundingClientRect();

    
          if (rect.top <= 20) {
            setIsAtTop(false);
            setdo(true);
          } 
          if(rect.top < 100){
            setShowText(3);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      
    useEffect(() => {
        const handleScroll = () => {
          const img = document.querySelector(".anim_cont"); // Select the image
          if (!img) return;
    
          const rect = img.getBoundingClientRect();
    
          if (rect.top <= 0) {
            sethowmuchscroll(Math.abs(rect.top)/2.7);
          } else {
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
 
      useEffect(() => {
        const aniCardContainer = document.querySelector(".ani_card_cont");

        if (aniCardContainer) {
            aniCardContainer.scrollTop = howmuchscroll; 
        }
    }, [howmuchscroll]); 

    useEffect(() => {
        setAnimateText(true);
        const timeout = setTimeout(() => setAnimateText(false), 400);
        return () => clearTimeout(timeout);
    }, [showtext]);



    
    
  return (
    <div className="ani_wrap">

        <div className="anim_cont">

             <img src={anim1} alt="" className="anim1" />
               <img src={anim2} alt="" className="anim2" />
               <img src={anim3} alt="" className="anim3" />
               <img src={anim4} alt="" className="anim4" />

        </div>

         <div className={` showmorethen1200  ${isAtTop ? "makeit_fixed": doit ? "doit":"ani_card_wrap"} `}>

            <div className="ani_card_cont">
                 <img src={anim1} alt="" className="sml_anni1" />
                 <img src={anim2} alt="" className="sml_anni2" />
                 <img src={anim3} alt="" className="sml_anni3" />
                 <img src={anim4} alt="" className="sml_anni4" />
            </div>

            <h3 className={`text-enter ${animateText ? "text-enter-active" : ""}`}>
                {texts[showtext].title}
            </h3>
            <p className={`text-enter ${animateText ? "text-enter-active" : ""}`}>
                {texts[showtext].desc}
            </p>

         </div>

        
        <div className="aninn_cont2">
        <div className="lessthen1200">
         <div className="ani_card_cont">
                 <img src={anim1} alt="" className="sml_anni1" />
                
            </div>

            <h3 className={`text-enter ${animateText ? "text-enter-active" : ""}`}>
            Decarbonisation
            </h3>
            <p className={`text-enter ${animateText ? "text-enter-active" : ""}`}>
            Decarbonisation is the process of reducing CO₂ emissions by adopting cleaner energy, optimizing operations, and using sustainable technologies to combat climate change.
            </p>
         </div>
         <div className="lessthen1200">
         <div className="ani_card_cont">
                
                 <img src={anim2} alt="" className="sml_anni2" />
               
            </div>

            <h3 className={`text-enter ${animateText ? "text-enter-active" : ""}`}>
            Democratisation
            </h3>
            <p className={`text-enter ${animateText ? "text-enter-active" : ""}`}>
            Democratisation is the process of reducing CO₂ emissions by adopting cleaner energy, optimizing operations, and using sustainable technologies to combat climate change.            </p>
         </div>
         <div className="lessthen1200">
         <div className="ani_card_cont">
                
                 <img src={anim3} alt="" className="sml_anni3" />
            </div>

            <h3 className={`text-enter ${animateText ? "text-enter-active" : ""}`}>
            Digitalisation
            </h3>
            <p className={`text-enter ${animateText ? "text-enter-active" : ""}`}>
            Digitalisation is the process of reducing CO₂ emissions by adopting cleaner energy, optimizing operations, and using sustainable technologies to combat climate change.            </p>
         </div>
         <div className="lessthen1200">
         <div className="ani_card_cont">
             
                 <img src={anim4} alt="" className="sml_anni4" />
            </div>

            <h3  style={{ fontSize: "17px" }}className={`text-enter ${animateText ? "text-enter-active" : ""}`}>
            Decentralisation
            </h3>
            <p className={`text-enter ${animateText ? "text-enter-active" : ""}`}>
            Decentralisation is the process of reducing CO₂ emissions by adopting cleaner energy, optimizing operations, and using sustainable technologies to combat climate change.            </p>
         </div>
        </div>
         
    </div>
  )
}

export default Animation