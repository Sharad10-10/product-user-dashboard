import React from 'react'
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from './menuLink/MenuLink';
import Image from 'next/image';

const Sidebar = () => {

  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
  

  return (
  <div className='sticky top-10'>
    <div  className='flex items-center gap-5 mb-5'>
    <div>
      <Image src='/noavatar.png' alt='' height={50} width={50} className='rounded-4xl object-cover'></Image>
    </div>
    <div className='flex flex-col'>
      <span className='text-xl'>Sharad</span>
      <span className='text-sm text-[#b7bac1]'>Admin</span>
    </div>



    </div>
    <ul className='list-none'>
      {menuItems.map((menuItem)=> {
        return (
          <li key={menuItem.title}>
            <span>{menuItem.title}</span>
            {menuItem.list.map((menuList)=> {
              return (
                <MenuLink key={menuList.title} menuList = {menuList} />
              )
            })}
          </li>
        )
      })}
    </ul>

    <div  className='cursor-pointer hover:bg-[#2e374a] flex p-5 items-center gap-2 my-2 rounded-lg'>
      <MdLogout />
      <button className='cursor-pointer'> Logout</button>
    </div>
    </div>
  )
}

export default Sidebar

