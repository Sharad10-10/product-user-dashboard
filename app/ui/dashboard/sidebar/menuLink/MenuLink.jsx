"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const MenuLink = ({menuList}) => {
    const pathName = usePathname();
  return (
    <Link className={`flex p-5 items-center gap-2 my-2 rounded-lg hover:bg-[#2e374a] ${pathName === menuList.path ? 'bg-[#2e374a]' : ''} `} href={menuList.path}>
        {menuList.icon}
        {menuList.title}

    

       
    </Link>

    

  )
}

export default MenuLink