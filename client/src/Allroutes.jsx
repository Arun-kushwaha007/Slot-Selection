import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
function Allroutes({slideIn,handleSlideIn}) {
  return (
    <Routes>
        <Route path='/' element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
    </Routes>
  )
}

export default Allroutes