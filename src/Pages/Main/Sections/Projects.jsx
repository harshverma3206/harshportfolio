import React from 'react'



const Projects = () => {


  const projectsData = [
    {
      name: 'Collaborate To-Do',
      img: './Image01.jpg',
    },
    {
      name: 'E-Commerce',
      img: './Image01.jpg',
    },
    {
      name: 'Weather App',
      img: './Image01.jpg',
    }
  ]
  return (
    <div className='md:p-3!'>
      <li className='text-[20px] ml-3!'><h2 >my projects</h2></li>
      <div className='flex flex-col mt-2.5!'>
        {projectsData.map((project) => (
          <div className='md:p-3! border-b-2 border-gray-900 cursor-pointer' key={project.name}>
            <a className='' href={project.link} target="_blank" rel="noopener noreferrer">
              <h3 className='uppercase tracking-tighter text-[8.5vw]!'>{project.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
