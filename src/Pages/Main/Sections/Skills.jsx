import React from 'react'

const Skills = () => {

  const technologies = [
    { name: 'HTML', img: './Image01.jpg' },
    { name: 'CSS', img: './Image01.jpg' },
    { name: 'JavaScript', img: './Image01.jpg' },
    { name: 'React', img: './Image01.jpg' },
    { name: 'Tailwind CSS', img: './Image01.jpg' },
    { name: 'Redux', img: './Image01.jpg' },
    { name: 'GSAP', img: './Image01.jpg' },
  ];

  return (
    <div className='p-7! max-w-275 m-auto!'>
      <li className='text-[20px] ml-3!'><h2>technologies that i know about</h2></li>
      <div className='p-1! grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 mt-5!'>
        {Object.values(technologies).map((tech) => {
          return (
            <div className='h-25 w-25 sm:h-50 sm:w-50  flex items-center justify-center' key={tech.name}>
              <img className='h-full object-cover' src={tech.img} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
