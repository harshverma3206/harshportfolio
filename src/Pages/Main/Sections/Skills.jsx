import React from 'react'

const Skills = () => {

  const technologies = [
    { name: 'HTML', img: './html.svg' },
    { name: 'CSS', img: './Css.svg' },
    { name: 'JavaScript', img: './javascript.svg' },
    { name: 'React', img: './react.svg' },
    { name: 'Tailwind CSS', img: './tailwindcss.svg' },
    { name: 'Redux', img: './redux.svg' },
    { name: 'GSAP', img: './gsap-greensock.svg' },
  ];

  return (
    <div className='p-7! max-w-275 m-auto! lg:my-18!'>
      <li className='text-[20px] ml-3!'><h2>technologies that i know about</h2></li>
      <div className='p-1! grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 mt-10!'>
        {Object.values(technologies).map((tech) => {
          return (
            <div className='h-25 w-25 sm:h-40 sm:w-40 lg:p-8! p-5! flex items-center justify-center lg:rounded-4xl rounded-2xl bg-[#a6a6a644]  shadow-[0_10px_30px_rgba(0,0,0,0.9),
                    0_0_15px_rgba(59,130,246,0.9),
                    0_0_30px_rgba(59,130,246,0.9)]' key={tech.name}>
              <img className='h-full w-full object-contain! lg:rounded-2xl rounded-xl' src={tech.img} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
