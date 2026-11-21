import React from 'react'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import { Route, Routes } from 'react-router'
import Dashboardlayouts from './Dashboardlayouts/Dashboardlayouts'
import Dashboardhome from './pages/dashboard/Dashboardhome'
import Dashboardcontact from './pages/dashboard/Dashboardcontect'
import Counter from './pages/Counter'



const App = () => {
  return (
    <div>
       <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} /> */}
      <Route path="/" element={<Dashboardlayouts />} >
      <Route index element={<Dashboardhome />} />
      <Route path="contact" element={<Dashboardcontact />} />
      <Route path="counter" element={<Counter />} />
      
      </Route>
    </Routes>
    </div>
  )
}

export default App
