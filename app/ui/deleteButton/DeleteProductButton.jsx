
"use client"

import { useRouter } from "next/navigation"
import { toast } from "react-toastify";

const DeleteProductButton = ({id})=> {
    const router = useRouter();

     const handleDelete = async(id)=> {
       try {
        const user = await fetch(`http://localhost:3000/api/products/${id}`, {
            method : "DELETE",
            headers: {
              "Content-Type" : "application/json"
            }
          })
          
          toast.error("Product deleted successfully")

          router.push('/dashboard/products')
       }

       catch(error) {
        console.log(error)
       }
      }

    return (
        <button onClick={()=>handleDelete(id)} className='bg-red-600 rounded-lg px-2 py-1 cursor-pointer'>Delete</button>
    )
}

export default DeleteProductButton;