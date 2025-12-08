"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md'

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className='flex items-center justify-between bg-[#182237] p-4 rounded-xl'>
      <div>
        <h1 className='font-semibold capitalize'>{pathName.split('/').pop()}</h1>
      </div>

      <div className='flex gap-20'>
        <div className='flex items-center gap-2 bg-[#2e374a] rounded-xl p-1 pl-2'>
          <MdSearch />
          <input className='bg-transparent border-none outline-none' type='text' placeholder='Search...'></input>
        </div>

        <div className='flex gap-4 items-center'>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar