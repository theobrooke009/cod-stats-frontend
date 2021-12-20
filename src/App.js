import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WeaponSelect from './components/weapons/WeaponSelect.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/weapons" element={<WeaponSelect/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
