import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/Pagination'
import Search from '@/app/ui/dashboard/search/Search'


const Products = async () => {
  

  return (
    <div>
        <div className='mt-4 bg-[#182237] p-4 rounded-xl'>
       <div className='flex justify-between'>
          <Search placeholder={"Search for a product"}/>

          <div>
            <Link href={'./products/add'}><button className='bg-[#2e374a] px-4 py-2 rounded-lg cursor-pointer'>Add New</button></Link>
          </div>
       </div>

       <div className='mt-3'>
        <table className='w-full'>
          <thead>
           <tr>
            <td className='py-2'>Name</td>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
           </tr>
          </thead>

          <tbody>
            <tr>
            <td className='flex items-center gap-2 py-3'>
                <Image className='rounded-4xl' src= '/noavatar.png' alt='user-image' height={30} width={30} />
                <span>Sharad Ghimire</span>
            </td>
              <td>Macbook Air</td>
              <td className='wrap-normal'>A powerful machine for everyday life</td>
              <td>$1099</td>
              <td>2025.12.1</td>
              <td>Available</td>
              <td>
                <div className='flex gap-4'>
                  <Link href={'./products/test'}>
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
              <td>Macbook Air</td>
              <td>A powerful machine for everyday life</td>
              <td>$1099</td>
              <td>2025.12.1</td>
              <td>Available</td>
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
              <td>Macbook Air</td>
              <td className='wrap-normal'>A powerful machine for everyday life</td>
              <td>$1099</td>
              <td>2025.12.1</td>
              <td>Available</td>
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




    </div>
  )
}

export default Products