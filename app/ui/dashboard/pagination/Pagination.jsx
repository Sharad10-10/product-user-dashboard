import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-between mt-4'>
            <button disabled className='py-1 px-4 cursor-pointer bg-[#68717C] rounded-lg'>Prev</button>
            <button className='py-1 px-4 cursor-pointer bg-[white] text-black rounded-lg'>Next</button>
        
    </div>
  )
}

export default Pagination