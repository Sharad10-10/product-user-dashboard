import React from 'react'
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
  return (
    <div className='bg-[#182237] rounded-lg hover:bg-[#2e374a]'>
       <div className='flex gap-2 items-center p-4'>
        <MdSupervisedUserCircle />
        <p>Total Users</p>
       </div>
       <p className='font-semibold] px-10'>10.928</p>
       <p className='text-[12px] px-10 pb-4 mt-2'>12% more than previous week</p>
    </div>
  )
}

export default Card