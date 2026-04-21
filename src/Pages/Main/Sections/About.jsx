import React from 'react'

const About = () => {

  const imagesArray = [
    './Image 02.jpg',
    './Image 03.jpg',
    './Image 04.jpg',
  ]

  return (
    <div className='p-7! max-w-275 mx-auto!  ]'>
      <li className='text-[20px] ml-3!'><h2 className=''>about Myself</h2></li>
      <p className='mt-5!'>My name is Harsh Verma born in Jhansi, lived in Noida. completed my Masters in Computer Science.
        <br /> <br />
        I’m frontend developer who builds fast responsive websites. I enjoy exploring new technologies, improving my skills daily.
      </p>
      <div>
        {imagesArray.map((imgSrc, index) => {
          return (
            <img className='mt-5.5! h-full w-150' src={imgSrc} alt={`Image ${index + 1}`} />
          )
        })}
      </div>

    </div>
  )
}

export default About
