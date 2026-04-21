import React, { useRef } from 'react'
import { gsap } from 'gsap'

import Home from './Sections/Home'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'
import Navigation from '../../Components/Navigation/Navigation'

const Mainpage = () => {

  const customMouse = useRef()

  const handler = (e) => {
    console.log(e.clientX, e.clientY)

    gsap.to(customMouse.current, {
      x: e.clientX - 117,
      y: e.clientY - 110,
      duration: 0.5,
    })
  }

  return (
    <div
      onMouseMove={(e) => {
        handler(e)
      }}
      className='bg-gradient-to-r from-[#bfbfbf] to-[#ffffff] p-5! lg:px-10! sm:py-10! flex flex-col gap-25! relative'>
      <div
        className='bg-[#c0c0c0] h-40 w-40 fixed rounded-full pointer-events-none hidden lg:flex items-center justify-center mix-blend-difference'
        ref={customMouse}
      >
        a
      </div>
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default Mainpage
