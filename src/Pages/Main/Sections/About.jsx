import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
import React, { forwardRef, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const About = forwardRef((props, ref) => {

  useGSAP(() => {
    gsap.from(ref.current, {
      y: 1000,
      duration: 1.5,
      clearProps: "transform",
      scrollTrigger: {
        trigger: ref.current,
        start: '-35% 100%',
        end: 'top top'
      }
    })
  })

  const imagesArray = [
    './Image 02.jpg',
    './Image 04.jpg',
  ]

  return (
    <div ref={ref} className='p-7! max-w-275 mx-auto!  ]'>
      <li className='text-[20px] ml-3!'><h2 className=''>about Myself</h2></li>
      <p className='mt-5!'>My name is Harsh Verma born in Jhansi, lived in Noida. completed my Masters in Computer Science.
        <br /> <br />
        I’m frontend developer who builds fast responsive websites. I enjoy exploring new technologies, improving my skills daily.
      </p>
      <div>
        {imagesArray.map((imgSrc, index) => {
          return (
            <img
              className='mt-5.5! lg:h-200 sm:h-100'
              src={imgSrc}
              alt={`Image ${index + 1}`}
              key={index}
            />
          )
        })}
      </div>

    </div>
  )
})

export default About
