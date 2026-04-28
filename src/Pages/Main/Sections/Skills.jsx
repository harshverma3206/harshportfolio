import React, { forwardRef, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

const Skills = forwardRef((props, ref) => {
  const technologies = [
    { name: 'HTML', img: './html.svg' },
    { name: 'CSS', img: './Css.svg' },
    { name: 'JavaScript', img: './javascript.svg' },
    { name: 'React', img: './react.svg' },
    { name: 'Tailwind CSS', img: './tailwindcss.svg' },
    { name: 'Redux', img: './redux.svg' },
    { name: 'GSAP', img: './gsap-greensock.svg' },
  ];

  const skillsRef = useRef([])
  skillsRef.current = [];

  const skillContainerRef = useRef()


  useGSAP(() => {
    gsap.from(skillsRef.current, {
      y: 100,
      duration: .1,
      stagger: .1,
      ease: "power1.in",
      opacity: 0,
      clearProps: "transform",
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "-30% 50%",
        end: "-30% 30%",
        scrub: true
      }
    })
  }, { scope: skillContainerRef })

  return (
    <div ref={ref} className='p-7! max-w-275 m-auto! lg:my-18!'>
      <li className='text-[20px] ml-3!'><h2>technologies that i know about</h2></li>
      <div ref={skillContainerRef} className='p-1! grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 mt-10!'>
        {Object.values(technologies).map((tech, index) => {
          return (
            <div
              ref={(el) => {
                if (el) skillsRef.current[index] = el
              }}
              key={tech.name}
              className='transition-transform duration-300 hover:scale-70 hover:rounded-full h-25 w-25 sm:h-40 sm:w-40 lg:p-8! p-5! flex items-center justify-center lg:rounded-4xl rounded-2xl bg-[#a6a6a644]  shadow-[0_10px_30px_rgba(0,0,0,0.9), 0_0_15px_rgba(59,130,246,0.9), 0_0_30px_rgba(59,130,246,0.9)]'
            >
              <img className='h-full w-full object-contain! lg:rounded-2xl rounded-xl' src={tech.img} alt="" />
            </div>
          )
        })}
      </div>
    </div >
  )
})

export default Skills
