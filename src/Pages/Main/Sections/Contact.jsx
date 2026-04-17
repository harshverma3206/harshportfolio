import React from 'react'

const Contact = () => {

  const socialMedia = [
    {
      name: 'linked in',
      link: 'https://www.linkedin.com/in/harsh-verma-9b1a4b1b3/',
      p: 'what the achievements i have like all my minor to major projects, my certificates are updated on linked in.',
      img: 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
    },
    {
      name: 'github',
      link: 'https://github.com/harshverma',
      p: 'check out my code and contributions on github.',
      img: 'https://cdn-icons-png.flaticon.com/512/733/733553.png'
    },
    {
      name: 'email',
      link: 'mailto:harshverma3206@gmail.com',
      p: 'feel free to reach out to me via email for any inquiries or collaborations.',
      img: 'https://cdn-icons-png.flaticon.com/512/732/732200.png'
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/harshverma_3206/',
      p: 'to watch my personal life, how a tech person live and thing why creating something follow me on instagram.',
      img: 'https://cdn-icons-png.flaticon.com/512/174/174855.png'
    }
  ]

  return (
    <div className='p-7! max-w-[1100px] mx-auto!'>
      <li className='text-[20px] ml-3!'><h2>contact me</h2></li>
      <div>
        {socialMedia.map((media, index) => (
          <div key={index} className='flex flex-col md:flex-row md:justify-between mb-15! md:mb-25! gap-5 md:gap-25'>
            <div className=''>
              <h3>{media.name}</h3>
              <h4 className='-mt-1!'>{media.p}</h4>
            </div>
            <img className='h-40 sm:h-60 md:h-70 lg:h-100 object-cover' src={media.img} alt={media.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact
