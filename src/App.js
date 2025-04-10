import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Product from './Pages/Product'
import About from './Pages/About'
import Rms from './Pages/Rms'
import Smps from './Pages/Smps'
import Rectifier from './Pages/Rectifier'
import Mppt from './Pages/Mppt'
import Ev from './Pages/Ev'
import Dcem from './Pages/Dcem'
import Battery from './Pages/Battery'
import Inverter from './Pages/Inverter'
import Dc from './Pages/Dc'
import Acsmart from './Pages/Acsmart'
import Dc1 from './Pages/Dc1'
import Aet from './Pages/Aet'
import Live from './Pages/Live'
import Field from'./Pages/Field'
import Fuel from './Pages/Fuel'

import Operations from './Pages/Operations '
import Site from './Pages/Site'
import Utilities from './Pages/Utilities'
import Power from './Pages/Power'
import EB from './Pages/EB'
import Contact from './Components/Home/Contact'
import Ups from './Pages/Ups'
import Ups1 from './Pages/Ups1'
import Tib from './Pages/Tib'
import Evcharge from './Pages/Evcharge'
import Bank from './Pages/Bank'
import Aiml from './Pages/Aiml'
import Faq1 from './Pages/Faq1'
import NewSec from './Components/Home/NewSec'
import Itc from './Pages/Itc'
import Atb from './Pages/Atb'
import Rectifier1 from './Pages/Rectifier1';
import Rectifier2 from './Pages/Rectifier2';
function App() {
  return (
    <div>
      <Routes>

      <Route path='/' element={<HomePage />}  />
      <Route path='/product' element={<Product /> } />
      <Route path='/about' element={<About /> } />
      <Route path='/Rms' element={<Rms/>}/>
      <Route path='/Smps' element={<Smps/>}/>
      <Route path='/Rectifier' element={<Rectifier/>}/>
      <Route path='/Rectifier1' element={<Rectifier1/>}/>
      <Route path='/Rectifier2' element={<Rectifier2/>}/>
      <Route path='/Ev' element={<Ev/>}/>
      <Route path='/Dcem' element={<Dcem/>}/>
      <Route path='/Battery' element={<Battery/>}/>
      <Route path='/Mppt' element={<Mppt/>}/>
      <Route path='/Inverter' element={<Inverter/>}/>
      <Route path='/Dc' element={<Dc/>}/>
      <Route path='/Acsmart' element={<Acsmart/>}/>
      <Route path='/Dc1' element={<Dc1/>}/>
      <Route path='/Aet' element={<Aet/>}/>
      <Route path='/Live' element={<Live/>}/>
      <Route path='/Field' element={<Field/>}/>
      <Route path='/Fuel' element={<Fuel/>}/>


     
      <Route path='/Operations' element={<Operations/>}/>
      <Route path='/Site' element={<Site/>}/>
      <Route path='/Utilities' element={<Utilities/>}/>
      <Route path='/Power' element={<Power/>}/>
      <Route path='/EB' element={<EB/>}/>
      {/* <Route path='/More' element={<More/>}/> */}
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/solution' element={<Ups/>}/>
      <Route path='/Ups1' element={<Ups1/>}/>
      <Route path='/Tib' element={<Tib/>}/>
      <Route path='/Evcharge'element={<Evcharge/>}/>
      <Route path='/Bank' element={<Bank/>}/>
      <Route path='/Aiml' element={<Aiml/>}/>
     <Route path='/Faq1' element={<Faq1/>}/>
     <Route path='/Newsec' element={<NewSec/>}/>
     <Route path='/Itc' element={<Itc/>}/>
     <Route path='/Atb' element={<Atb/>}/>
    


   

      </Routes>
    </div>
  )
}

export default App