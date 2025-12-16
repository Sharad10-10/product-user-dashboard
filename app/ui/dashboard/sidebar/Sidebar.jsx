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
} from "react-icons/md";
import MenuLink from './menuLink/MenuLink';
import Image from 'next/image';
import Logout from '../logout/Logout';
import { useSession } from 'next-auth/react';
import UserCard from './userCard/UserCard';


const Sidebar = async() => {

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
    <UserCard />
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

      <Logout />
    </div>
  )
}

export default Sidebar

