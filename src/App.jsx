import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mainpage from './Pages/Main/Mainpage'
import NotFound from './Pages/NotFound'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
