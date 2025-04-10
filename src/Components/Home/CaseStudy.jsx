import React, { useState } from "react";
import { casestudy } from "../../Data/home";
import "./casestudy.css";
import downarrow  from "../../assets/down_arrow.png"

function CaseStudy() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCaseStudy = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="casesutdywrap">

      <div className="casestudy_cont">

        <div className="cs_iner">

          <div className="cas_head">
            <h3>Below Are Some Frequently Asked Question And Asnwers</h3>
          </div>

          <div className="case_study_back">
            <div className="padddd">
            {casestudy?.map((cstu, index) => (
              <div className="single_casesutdy">
              <div key={index} className="casesyudy">
                <div className="casdthe" onClick={() => toggleCaseStudy(index)}>
                  <h4>{index <= 9 ? `0${index+1}`:`${index+1}`}  &#160; {cstu.title}</h4>
                  <span className="cursor-pointer"> <img src={downarrow}  className={`${activeIndex === index ? " rorate90":"dontrowtat"}`} alt="downarrow" /> </span>
                </div>

               
              </div>
              <div  className={`case_content ${activeIndex === index ? "open" : ""}`}>
                  <p>{cstu.para}</p>
                </div>
             </div>
             
            ))}
          </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default CaseStudy;
