"use client"

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const UserCard = () => {

    const {data: session} = useSession()
    console.log(session)



  return (
    <div>

        <div  className='flex items-center gap-5 mb-5'>
            <div>
            <Image src= {'/noavatar.png'}  alt='' height={50} width={50} className='rounded-4xl object-cover' />
            </div>
            <div className='flex flex-col'>
            <span className='text-xl'>{session?.user?.username}</span>
            <span className='text-sm text-[#b7bac1]'>Admin</span>
            </div>
        </div>

    </div> )
  
}

export default UserCard