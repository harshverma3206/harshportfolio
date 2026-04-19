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
    <div className='p-7!'>
      <li className='text-[20px] ml-3!'><h2>my projects</h2></li>
      <div className='flex flex-col'>
        {projectsData.map((project) => (
          <div className='p-5! border-b-2 border-gray-900 cursor-pointer' key={project.name}>
            <a className='' href={project.link} target="_blank" rel="noopener noreferrer">
              <h3 className='uppercase tracking-tighter text-[8vw]!'>{project.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
