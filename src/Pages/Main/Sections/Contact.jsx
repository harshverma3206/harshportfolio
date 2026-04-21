import React from 'react'

const Contact = () => {

  const socialMedia = [
    {
      name: 'linked in',
      link: 'https://www.linkedin.com/in/harsh-verma-9b1a4b1b3/',
      p: 'what the achievements i have like all my minor to major projects, my certificates are updated on linked in.',
      img: './Image01.jpg'
    },
    {
      name: 'github',
      link: 'https://github.com/harshverma',
      p: 'building projects, exploring ideas, and thinking like a developer. check out my code and contributions on github.',
      img: './Image01.jpg'
    },
    {
      name: 'email',
      link: 'mailto:harshverma3206@gmail.com',
      p: 'feel free to reach out to me via email for any inquiries or collaborations.',
      img: './Image01.jpg'
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/harshverma_3206/',
      p: 'to watch my personal life, how a tech person live and thing why creating something follow me on instagram.',
      img: './Image01.jpg'
    }
  ]

  return (
    <div className='p-5! max-w-282 mx-auto!'>
      <li className='text-[20px] ml-3!'><h2>contact me</h2></li>
      <div className='mt-10!'>
        {socialMedia.map((media, index) => (
          <div key={index} className='flex flex-col md:flex-row md:justify-between mb-10! md:mb-25! gap-4 md:gap-20'>
            <div className=''>
              <h3>{media.name}</h3>
              <h4 className='-mt-1!'>{media.p}</h4>
            </div>
            <img className='h-80 w-60 sm:h-100 sm:w-80 md:w-70 md:h-90 lg:h-130 lg:w-100 object-cover m-auto' src={media.img} alt={media.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact
