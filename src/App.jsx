import React from 'react'
import { gsap } from 'gsap'
import Lenis from 'lenis'

import { Route, Routes } from 'react-router-dom'
import Mainpage from './Pages/Main/Mainpage'
import NotFound from './Pages/NotFound'


const App = () => {

  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
    duration: 2,
  });

  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

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
