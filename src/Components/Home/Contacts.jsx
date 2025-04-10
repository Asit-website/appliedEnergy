 import React, { useState } from 'react'
 import contact2 from "../../assets/contactimg.png"
 import "./contact.css"
 import axios from 'axios';
 import toast from 'react-hot-toast';
 import remage from '../../assets/remage.svg'

 function Contacts() {

   let [registerUser, setRegisterUser] = useState({
     name: "",
     phone: "",
     email: "",
     website: "",
     message: "",
   });

   let RegisterHandle = (e) => {
     let { name, value } = e.target;
     setRegisterUser({ ...registerUser, [name]: value })
   };

   let RegisterSubmit = (e) => {
     e.preventDefault()
     console.log(registerUser)
     axios.post("http://localhost:5000/users", registerUser)
       .then(() => {
         toast("registered successfully")
         setRegisterUser({
           name: "",
           phone: "",
           email: "",
           website: "",
           message: "",
         })

       })
       .catch(() => {
         toast("not registered")
       })
   }

   return (
     <div className='contacT_wrap'>

       <div className="conac_cont">

         <div className="conga_left">

{/* 
           <p className='fornpars'>For a New World</p>
          <h4 className='hfdsfds'>Let’s Make </h4>
          <p className='fsfslines'><span className="conline"></span>Some Changes</p> */}

          {/* <p className="actuaconpa">
            The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.
          </p>  */}

          {/* <img src={contact2} alt="" />  */}

          <iframe
             className='test_try'
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.401142894372!2d77.07707637408822!3d28.497576390198923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19927b78fecf%3A0x743245c35f0e1a0d!2sApplied%20Energy%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1739543282996!5m2!1sen!2sin"
             width={530}
             height={578}
             style={{ border: 0 }}
            allowFullScreen=""
             loading="lazy"
             referrerPolicy="no-referrer-when-downgrade"
          />
           {/* <img src={remage} alt="remage" /> */}
         </div>

         <div className="conactofmr">
              <h3 className='for_new'>For a New World Let’s Make some changes</h3>
           <div className="flexconta">
             <input type="text" placeholder='First Name*' name='name' onChange={RegisterHandle} value={registerUser.name} required />
             <input type="text" placeholder='Last Name*' name='phone' onChange={RegisterHandle} value={registerUser.phone} required />
           </div>

           <div className="flexconta">
             <input type="text" placeholder='Email Address*' name='email' onChange={RegisterHandle} value={registerUser.email} required />
             <input type="text" placeholder='Phone Number*' name='website' onChange={RegisterHandle} value={registerUser.website} required />
           </div>

           <textarea placeholder='Message' name='message' onChange={RegisterHandle} value={registerUser.message} required></textarea>

           <button onClick={RegisterSubmit}><span>let’s connect</span></button>

         </div>

       </div>

    </div>
   )
 }

export default Contacts