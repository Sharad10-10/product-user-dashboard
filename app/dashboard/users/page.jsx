import React from 'react'
import { MdSearch } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'
import Pagination from '@/app/ui/dashboard/pagination/Pagination'
import { fetchUsers } from '@/app/db/data.mjs'
import Search from '@/app/ui/dashboard/search/Search'
import DeleteUserButton from '@/app/ui/deleteButton/DeleteUserButton'
import { ToastContainer } from 'react-toastify'

const Users = async({ searchParams}) => {

 const params = await searchParams
 const q = params?.q || ''
 const page = params?.page || 1

 console.log(page)
 console.log(q)

  const {users, count} = await fetchUsers(q, page);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

 



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

         
          {users.map((users)=> {
            return (
              <tbody key={users.id}>
            <tr>
            <td className='flex items-center gap-2 py-3'>
                <Image className='rounded-4xl' src= {users.img ||'/noavatar.png'} alt='user-image' height={30} width={30} />
                <span>{users.username}</span>
            </td>
              <td>{users.email}</td>
              <td>{formatDate(users.createdAt)}</td>
              <td>{users.isAdmin ? "Admin" : "Client"}</td>
              <td>{users.isActive? "Active" : "Not Active"}</td>
              <td>
                <div className='flex gap-4'>
                  <Link href={`./users/${users.id}`}>
                    <button className='bg-green-600 rounded-lg px-2 py-1 cursor-pointer'>View</button>
                  </Link>

                <DeleteUserButton id = {users.id}/>
                </div>
              </td>
              
            </tr>
          </tbody>
            )
          })}
        </table>

        <Pagination  count = {count}/>
        <ToastContainer position='top-left'/>
       </div>


    </div>
  )
}

export default Users