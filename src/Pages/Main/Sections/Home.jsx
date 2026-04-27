import React, { forwardRef } from 'react'

const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className='flex items-center justify-center rounded-3xl] h-[85vh]'>
        <div className='bg-[#a6a6a6]/50 p-4! py-6! rounded-3xl mt-20! sm:mt-3! sm:w-87.5 max-w-87.5'>
          <img className='rounded-3xl sm:h-80 max-h-[99%]' src="./Image01.jpg" alt="" />
          <div className='flex flex-col gap-1 p-2! px-3!'>
            <div className='mt-1! flex justify-between'>
              <h2 className='' >Harsh Verma</h2>
              <h2>24</h2>
            </div>
            <h5 className='text-gray-700'>I am Frontend Developer Creating Advanced <b>Mobile First </b>Website using React.</h5>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Home
