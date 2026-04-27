import React, { useRef } from 'react'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollToPlugin);

import Home from './Sections/Home'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'
import Navigation from '../../Components/Navigation/Navigation'

const Mainpage = () => {

  const customMouse = useRef()

  const refs = {
    home: useRef(),
    about: useRef(),
    skills: useRef(),
    project: useRef(),
    contact: useRef()
  }

  const handler = (e) => {
    gsap.to(customMouse.current, {
      x: e.clientX - 117,
      y: e.clientY - 110,
      duration: 0.5,
    })
  }

  const handleNavigate = (section) => {
    const target = refs[section];

    if (!target?.current) return;

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: target.current,
        offsetY: 80, // adjust if navbar is fixed
      },
      ease: "none",
    });
  };

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
      <Navigation onNavigate={handleNavigate} />
      <Home ref={refs.home} />
      <About ref={refs.about} />
      <Projects ref={refs.project} />
      <Skills ref={refs.skills} />
      <Contact ref={refs.contact} />
    </div>
  )
}

export default Mainpage
