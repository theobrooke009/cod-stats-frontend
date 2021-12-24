import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WeaponSelect from './components/weapons/WeaponSelect.js'
import Register from './components/auth/Register.js'
import Login from './components/auth/Login.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/weapons" element={<WeaponSelect/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
