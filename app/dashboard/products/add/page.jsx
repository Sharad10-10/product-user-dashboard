"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const AddProductPage = () => {

        const router = useRouter()
        
          const [formData, setFormData] = useState({
            title : '',
            category: '',
            price: '',
            stock: '',
            color: '',
            size: '',
            description: ''
          })
        
          const handleInput = (e)=> {
            const {name, value} = e.target
            setFormData({
              ...formData,
              [name] : value
            })
        
          }
        
          const handleSubmit = async(e)=> {
            e.preventDefault()
        
            console.log(formData)
        
            const response = await fetch(`${process.env.NEXT_AUTH_URL}/api/products`|| "/api/products", {
              method : "POST",
              headers: {
                "Content-Type" : 'application/json'
              },
              body: JSON.stringify(formData)
            })
        
            toast.success("Product added successfully")
        
            if(!response.ok) {
              throw new Error("Failed to create post")
          }             
            router.push('/dashboard/products')
          }

  return (
    <div className='bg-[#182237] mt-4 rounded-xl p-4'>
        <form onSubmit={handleSubmit} className='flex flex-wrap gap-8'>
                <input onChange={handleInput} className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name='title' id='title' placeholder='Title' required />
                <select onChange={handleInput} className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' name="category" id="category" required>
                    <option value="kitchen">Choose a category...</option>
                    <option value="kitchen">Phone</option>
                    <option value="kitchen">Computer</option>
                    <option value="kitchen">Kitchen</option>
                </select>
                <input onChange={handleInput} className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="Number" name='price' placeholder='Price' required/>
                <input onChange={handleInput} className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name='stock' placeholder='Stock' required/>
                <input onChange={handleInput} className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name='color' placeholder='Color' required/>
                <input onChange={handleInput} className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name='size' placeholder='Size' required/>
                <textarea onChange={handleInput} className='w-full outline-none p-2 border rounded-xl border-[#2e374a]' rows={10} name="description" id="description" placeholder='Description...'></textarea>
                <button className='bg-[#2e374a] px-4 py-2 rounded-xl cursor-pointer' type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddProductPage