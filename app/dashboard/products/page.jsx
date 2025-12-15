import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/Pagination'
import Search from '@/app/ui/dashboard/search/Search'
import { fetchProducts } from '@/app/db/data.mjs'
import DeleteProductButton from '@/app/ui/deleteButton/DeleteProductButton'
import { ToastContainer } from 'react-toastify'



const Products = async ({searchParams}) => {

  const params = await searchParams
  const q = params?.q
  const page = params?.page
  // console.log(q, page)

  const {products, count} = await fetchProducts(q, page);

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

          
           {products.map((product)=> {
                return (
                  <tbody key={product.id}>
                  <tr>
                  <td className='flex items-center gap-2 py-3'>
                      <Image className='rounded-4xl' src= {product?.img || '/noavatar.png'} alt='user-image' height={30} width={30} />
                  </td>
                    <td>{product.title}</td>
                    <td className='wrap-normal'>{product.description}</td>
                    <td>${product.price}</td>
                    <td>{formatDate(product?.createdAt)}</td>
                    <td>{product?.stock}</td>
                    <td>
                      <div className='flex gap-4'>
                        <Link href={`./products/${product.id}`}>
                          <button className='bg-green-600 rounded-lg px-2 py-1 cursor-pointer'>View</button>
                        </Link>

                        <DeleteProductButton id = {product.id}/>
                      </div>
                    </td>       
                  </tr>
                </tbody>
                )
              })}
        </table>
    
        <Pagination count = {count}/>
        <ToastContainer position='top-left'/>
       </div>


    </div>




    </div>
  )
}

export default Products