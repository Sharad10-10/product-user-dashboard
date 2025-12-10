import React from 'react'
import { MdSearch } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import Pagination from '@/app/ui/dashboard/pagination/Pagination'
import { fetchUsers } from '@/app/db/data.mjs'
import Search from '@/app/ui/dashboard/search/Search'

const Users = async({ searchParams }) => {

 const params = await searchParams
 const q = params?.q
 console.log(q)

  const getUsers = await fetchUsers(q);
  



  return (
    <div className='mt-4 bg-[#182237] p-4 rounded-xl'>
       <div className='flex justify-between'>
          <Search placeholder = {"Search for a user"}/>
        <div>
            <Link href={'./users/add'}><button className='bg-[#2e374a] px-4 py-2 rounded-lg cursor-pointer'>Add New</button></Link>
          </div>
       </div>

       <div className='mt-3'>
        <table className='w-full'>
          <thead>
           <tr>
            <td className='py-2'>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>isActive?</td>
           </tr>
          </thead>

          {/* map users to get data  */}
          {getUsers.map((users)=> {
            return (
              <tbody key={users.id}>
            <tr>
            <td className='flex items-center gap-2 py-3'>
                <Image className='rounded-4xl' src= {users.img ||'/noavatar.png'} alt='user-image' height={30} width={30} />
                <span>{users.username}</span>
            </td>
              <td>{users.email}</td>
              <td>{users.createdAt}</td>
              <td>{users.isAdmin ? "Admin" : "Client"}</td>
              <td>{users.isActive? "Active" : "Not Active"}</td>
              <td>
                <div className='flex gap-4'>
                  <Link href={`./users/${users.id}`}>
                    <button className='bg-green-600 rounded-lg px-2 py-1 cursor-pointer'>View</button>
                  </Link>

                  <button className='bg-red-600 rounded-lg px-2 py-1 cursor-pointer'>Delete</button>
                </div>
              </td>
              
            </tr>
          </tbody>
            )
          })}

          <tbody>
            <tr>
            <td className='flex items-center gap-2 py-3'>
                <Image className='rounded-4xl' src= '/noavatar.png' alt='user-image' height={30} width={30} />
                <span>Sharad Ghimire</span>
            </td>
              <td>Sharad@123</td>
              <td>2025.12.1</td>
              <td>{}</td>
              <td>{}</td>
              <td>
                <div className='flex gap-4'>
                  <Link href={'/'}>
                    <button className='bg-green-600 rounded-lg px-2 py-1 cursor-pointer'>View</button>
                  </Link>

                  <button className='bg-red-600 rounded-lg px-2 py-1 cursor-pointer'>Delete</button>
                </div>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td className='flex items-center gap-2 py-3'>
                <Image className='rounded-4xl' src= '/noavatar.png' alt='user-image' height={30} width={30} />
                <span>Sharad Ghimire</span>
            </td>
              <td>Sharad@123</td>
              <td>2025.12.1</td>
              <td>Web Developer</td>
              <td>Status</td>
              <td>
                <div className='flex gap-4'>
                  <Link href={'/'}>
                    <button className='bg-green-600 rounded-lg px-2 py-1 cursor-pointer'>View</button>
                  </Link>

                  <button className='bg-red-600 rounded-lg px-2 py-1 cursor-pointer'>Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <Pagination />
       </div>


    </div>
  )
}

export default Users