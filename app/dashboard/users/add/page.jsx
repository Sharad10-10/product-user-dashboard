"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const AddUserPage = () => {

  const router = useRouter()

  const [formData, setFormData] = useState({
    username : '',
    email: '',
    password: '',
    phone: '',
    isAdmin: false,
    isActive: true,
    address: ''
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

    const response = await fetch(`/api/users` , {
      method : "POST",
      headers: {
        "Content-Type" : 'application/json'
      },
      body: JSON.stringify(formData)
    })

    toast.success("User added successfully")

    console.log(response)

    if(!response.ok) {
      throw new Error("Failed to create post")
  }    

    

    router.push('/dashboard/users')

  }


  return (
    <div className='bg-[#182237] mt-4 rounded-xl p-4'>
        <form onSubmit={handleSubmit} className='flex flex-wrap gap-8'>
                <input onChange={handleInput} className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name='username' placeholder='UserName' required/>
                <input onChange={handleInput} className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="email" name='email' placeholder='Email' required/>
                <input onChange={handleInput} className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="password" name='password' placeholder='Password' required/>
                <input onChange={handleInput} className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name='phone' placeholder='Phone' required maxLength={10}/>
                <select onChange={handleInput} className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' name="isAdmin" id="isAdmin" required>
                    <option value={false}>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <select onChange={handleInput} className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' name="isActive" id="isActive" required>
                    <option value={true}>Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <textarea onChange={handleInput} className='w-full outline-none p-2 border rounded-xl border-[#2e374a]' rows={10} name="address" id="address" placeholder='Address...'></textarea>
                <button className='bg-[#2e374a] px-4 py-2 rounded-xl cursor-pointer' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddUserPage