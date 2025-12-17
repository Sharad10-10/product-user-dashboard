"use client"

import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { useState } from "react";
import { toast } from "react-toastify";

const UpdateProductForm = ({products})=> {

      const router = useRouter();
    
       const id = products._id
    
        const [formData, setFormData] = useState({
            title: products?.title || '',
            price: products?.price || '',
            stock: products?.stock || '',
            color: products?.color || '',
            description: products?.description || '',
            category: products?.category || '',
            size: products?.size || ''
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
            const user = await fetch( `http://localhost:3000/api/products/${id}` || `${process.env.NEXTAUTH_URL}/api/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(formData)
            })
    
            toast.success("Products details updated successfully")
            
    
            router.push('/dashboard/products')
    
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">   

        <label htmlFor="username">Title</label>
        <input onChange={handleInput} className='outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name="title" id="title" />

        <label htmlFor="username">Price</label>
        <input onChange={handleInput} className='outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name="price" id="price" />

        <label htmlFor="username">Stock</label>
        <input onChange={handleInput} className='outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name="stock" id="stock" />

        <label htmlFor="category">Category</label>
        <select onChange={handleInput} className='outline-none p-2 border rounded-xl border-[#2e374a]' name="category" id="category">
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
        </select>

        <label htmlFor="username">Description</label>
        <textarea onChange={handleInput} className='outline-none p-2 border rounded-xl border-[#2e374a]' rows={6} name="description" id="description"></textarea>

        <button className='bg-[#2e374a] px-4 py-2 rounded-xl w-[full] cursor-pointer' type='submit'>Update</button>
    </form>

    )
}

export default UpdateProductForm;