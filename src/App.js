import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WeaponSelect from './components/weapons/WeaponSelect.js'
import WeaponProfile from './components/weapons/WeaponProfile.js'
import CreateAClass from './components/weapons/CreateAClass.js'
import UserWeaponSelect from './components/weapons/UserWeaponSelect.js'
import UserWeaponProfile from './components/weapons/UserWeaponProfile.js'
import User from './components/user/User.js'
import Navbar from './components/common/Navbar.js'
import Footer from './components/common/Footer.js'
import LoginRegister from './components/auth/LoginRegister.js'
// import Secure from './components/common/SecureRoute.js'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LoginRegister/>}/>
        <Route path="/weapons" element={<WeaponSelect/>}/>
        <Route path="/weapons/:weaponId" element={<WeaponProfile/>}/>
        <Route path="/weapons/:weaponId/build" element={<CreateAClass/>}/>
        <Route path="/userweapons" element={<UserWeaponSelect/>}/>
        <Route path="/userweapons/:userWeaponId" element={<UserWeaponProfile/>}/>
        <Route path="/profile" element={<User/>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
