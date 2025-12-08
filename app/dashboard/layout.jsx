import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'
import Navbar from '../ui/dashboard/navbar/Navbar'


const layout = ({children}) => {
  return (
    <div className='flex'>

        <div className='flex-1 bg-[#182237] p-5'>{<Sidebar />}</div>
        <div className='flex-4 p-5'>
          {<Navbar />}
          {children}
        </div>
        




    </div>
  )
}

export default layout