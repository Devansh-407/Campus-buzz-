import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Events from './pages/Upcoming Events'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Events/>} />
        <Route path='/' element={<Events/>} />
      </Routes>

    </>
  )
}

export default App