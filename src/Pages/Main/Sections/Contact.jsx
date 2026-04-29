import React, { forwardRef, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const Contact = forwardRef((props, ref) => {

  const socialMedia = [
    {
      name: 'linked in',
      link: 'https://www.linkedin.com/in/harsh-verma-39a676331/?skipRedirect=true',
      p: 'what the achievements i have like all my minor to major projects, my certificates are updated on linked in.',
      img: './linked in.jpg'
    },
    {
      name: 'github',
      link: 'https://github.com/harshverma3206',
      p: 'building projects, exploring ideas, and thinking like a developer. check out my code and contributions on github.',
      img: './github.jpg'
    },
    {
      name: 'email',
      link: 'https://mail.google.com/mail/u/0/#inbox?compose=new',
      p: 'feel free to reach out to me via email for any inquiries or collaborations.',
      img: './email.jpg'
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/harshverma205_/',
      p: 'to watch my personal life, how a tech person live and thing why creating something follow me on instagram.',
      img: './instagram.jpg'
    }
  ]

  const socialRef = useRef([])
  const socialContainerRef = useRef()

  useGSAP(() => {
    gsap.from(socialRef.current, {
      y: 100,
      opacity: 0,
      duration: .1,
      stagger: .1,
      clearProps: "transform",
      scrollTrigger: {
        trigger: socialRef.current,
        // markers: true,
        start: "10% 85%",
        end: "10% 45%",
        scrub: true,
      }
    })
  }, { scope: socialContainerRef })

  return (
    <div ref={ref} className='p-5! max-w-282 mx-auto!'>
      <li className='text-[20px] ml-3!'><h2>contact me</h2></li>
      <div ref={socialContainerRef} className='mt-10!'>
        {socialMedia.map((media, index) => (
          <div
            ref={(el) => {
              socialRef.current[index] = el
            }}
            key={index}
            className='flex flex-col md:flex-row md:justify-between mb-10! md:mb-25! gap-4 md:gap-20'>
            <div className=''>
              <h3>{media.name}</h3>
              <h4 className='-mt-1! lg:w-150 md:w-100'>{media.p}</h4>
            </div>
            <div className='h-80 w-60 sm:h-100 sm:w-80 md:w-70 md:h-90 lg:h-130 lg:w-100 m-auto overflow-hidden'>
              <a
                className=''
                href={media.link}
                target='_blank'
                rel='noopener noreferrer'>
                <img className='h-full w-full object-cover! active:scale-75 hover:scale-90 transition-transform duration-300' src={media.img} alt={media.name} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})

export default Contact
