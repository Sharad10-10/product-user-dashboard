"use client"
import { signOut } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'
import { MdLogout } from 'react-icons/md'

const Logout = () => {

  const handleLogOut = async()=> {
    await signOut({callbackUrl: '/login', redirect: true})
  } 

  return (
    <div>
        <div  className='cursor-pointer hover:bg-[#2e374a] flex p-5 items-center gap-2 my-2 rounded-lg'>
      <MdLogout />
      <button onClick={handleLogOut} className='cursor-pointer'> Logout</button>
    </div>
    </div>
  )
}

export default Logout