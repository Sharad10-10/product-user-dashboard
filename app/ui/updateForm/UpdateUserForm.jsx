"use client"
import { useRouter } from 'next/navigation'
import { NextResponse } from 'next/server'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const UpdateUserForm = ({ users }) => {
    const router = useRouter();

   const id = users._id

    const [formData, setFormData] = useState({
        username: users?.username || '',
        email: users?.email || '',
        password: users?.password || '',
        phone: users?.phone || '',
        address: users?.address || '',
        isActive: users?.isActive || '',
        isAdmin: users?.isAdmin || ''
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

       try {
        const user = await fetch(`http://localhost:3000/api/users/${id}` || `${process.env.NEXTAUTH_URL}/api/users/${id}` , {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData)
        })

        toast.success("User details updated successfully")
        

        router.push('/dashboard/users')

       }
       catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "Failed to update the data",
            error
        }, {status: 500})
       }

    }



  return (
    <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">   
                    <label htmlFor="username">UserName</label>
                    <input onChange={handleInput} className='outline-none p-2 border rounded-xl border-[#2e374a]'  type="text" name="username" id="username" />

                    <label htmlFor="email">Email</label>
                    <input onChange={handleInput} className='outline-none p-2 border rounded-xl border-[#2e374a]' type="email" name="email" id="email" />

                    <label htmlFor="password">Password</label>
                    <input onChange={handleInput} className='outline-none p-2 border rounded-xl border-[#2e374a]' type="password" name="password" id="password" />

                    <label htmlFor="phone">Phone</label>
                    <input onChange={handleInput} className='outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name="phone" id="phone" maxLength={10}/>

                    <label htmlFor="address">Address</label>
                    <input onChange={handleInput} className='outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name="address" id="address" />

                    <label htmlFor="isActive">Is Active?</label>
                    <select onChange={handleInput} className='outline-none p-2 border rounded-xl border-[#2e374a]' name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <label htmlFor="isAdmin">Is Admin?</label>
                    <select onChange={handleInput} className='outline-none p-2 border rounded-xl border-[#2e374a]' name="isAdmin" id="isAdmin">
                        <option value={true}>No</option>
                        <option value={false}>Yes</option>
                    </select>

                    <button className='bg-[#2e374a] px-4 py-2 rounded-xl w-[full] cursor-pointer' type='submit'>Update</button>
                </form>
    </div>
  )
}

export default UpdateUserForm;