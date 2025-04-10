import React from 'react'
import { weFollow } from '../../Data/home'
import "./follow.css"
import site2 from '../../assets/site2.svg';
// import Animation from "../Animation"'
import NewSec from '../Home/NewSec'

function WeFollow() {
  return (
    // <div className='wefolow_wrpa'>

    //   <div className="weffolo_cont">

        // <div className="wefolow_top">

    //       <div className="folow_left">
    //         <p className='folspara'> We Follow</p>
    //         <h4>4 D's</h4>
    //         <p className="linesfo"></p>
    //       </div>

    //       <p className='folwlefriparas'>At Applied Energy Technologies, we are dedicated to driving decarbonisation by offering advanced energy solutions tailored to our clients' needs. Our bespoke power systems help businesses minimize their carbon footprint </p>

    //     </div>

    //     <div className="wefolow_bottom">
    //       {
    //         weFollow?.map((folow, index) => (
    //           <div key={index} className="sngle_folow">
    //             <div className="drp-shadow">
    //               <img src={folow.img} alt="" />
    //             </div>
    //             <p>{folow.title}</p>
    //           </div>
    //         ))
    //       }
    //     </div>

    //   </div>

    // </div>


    
    <div className='we_follow'>

      <div className="we_follow1">
        <h3>4D's</h3>
        <p>At Applied Energy Technologies, we are dedicated to driving decarbonisation by offering advanced energy solutions tailored to our clients' needs. Our bespoke power systems help businesses minimize their carbon footprint </p>
      </div>

      {/* <div className='follow_set'>
        <div className="flw_box">
          <div className="flw_sox">
            <div className="flw_img">
              <img src={site2} alt="site2" />
            </div>
            <div className="flw_sx">
              <h3>Decarbonisation</h3>
              <p>Decarbonisation is the process of reducing CO₂ emissions by adopting cleaner energy, optimizing operations, and using sustainable technologies to combat climate change.</p>
            </div>
          </div>
        </div>
      </div>

       */}

<NewSec/>

     {/* <Animation /> */}

    </div>
  )
}

export default WeFollow