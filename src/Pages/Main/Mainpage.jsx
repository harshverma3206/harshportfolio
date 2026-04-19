import React from 'react'
import Home from './Sections/Home'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'
import Navigation from '../../Components/Navigation/Navigation'

const Mainpage = () => {
  return (
    <div className='bg-gradient-to-r from-[#bfbfbf] to-[#ffffff] p-5! sm:px-15! sm:py-10! flex flex-col gap-25!'>
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
