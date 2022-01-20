import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WeaponSelect from './components/weapons/WeaponSelect.js'
import Register from './components/auth/Register.js'
import Login from './components/auth/Login.js'
import WeaponProfile from './components/weapons/WeaponProfile.js'
import CreateAClass from './components/weapons/CreateAClass.js'
import UserWeaponSelect from './components/weapons/UserWeaponSelect.js'
import UserWeaponProfile from './components/weapons/UserWeaponProfile.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/weapons" element={<WeaponSelect/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/weapons/:weaponId" element={<WeaponProfile/>}/>
        <Route path="/weapons/:weaponId/build" element={<CreateAClass/>}/>
        <Route path="/userweapons" element={<UserWeaponSelect/>}/>
        <Route path="/userweapons/:userWeaponId" element={<UserWeaponProfile/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
