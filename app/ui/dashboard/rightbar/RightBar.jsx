import React from 'react'
import { MdTapAndPlay } from 'react-icons/md'

const RightBar = () => {
  return (
   <div className='fixed'>
           <div className='flex flex-col gap-4'> 
      <div className=' py-4 px-4 bg-[#182237] rounded-lg'>
          <h1 className='font-semibold'>🔥 Available Now</h1>
          <h2 className='font-semibold text-xl mt-4'>How to use new version of the admin Dashboard?</h2>
          <p className='text-[12px] mt-4 text-[#b7bac1]'>Takes 4 minutes to learn</p>
          <p className='text-[#b7bac1] text-[14px] mt-4'>Learn how to effectively navigate and utilize the updated features of the admin dashboard with this concise guide.</p>
          <button className='flex items-center bg-[#2e374a] mt-4 px-4 py-2 rounded-lg gap-1'> <MdTapAndPlay /> Watch</button>
      </div>

      <div className=' py-4 px-4 bg-[#182237] rounded-lg'>
          <h1 className='font-semibold'>🚀 Coming Soon</h1>
          <h2 className='font-semibold text-xl mt-4'>New server actions are available, partial pre-rendering is coming
          up!</h2>
          <p className='text-[12px] mt-4 text-[#b7bac1]'>Boost your productivity</p>
          <p className='text-[#b7bac1] text-[14px] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.</p>
          <button className='flex items-center bg-[#2e374a] mt-4 px-4 py-2 rounded-lg gap-1'> <MdTapAndPlay /> Go</button>
      </div>
    </div>
   </div>
  )
}

export default RightBar