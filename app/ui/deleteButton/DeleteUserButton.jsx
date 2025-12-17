
"use client"

import { useRouter } from "next/navigation"
import { toast } from "react-toastify";

const DeleteUserButton = ({id})=> {
    const router = useRouter();

     const handleDelete = async(id)=> {
       try {
        const user = await fetch(`http://localhost:3000/api/users/${id}` || `${process.env.NEXTAUTH_URL}/api/users/${id}`  , {
            method : "DELETE",
            headers: {
              "Content-Type" : "application/json"
            }
          })
          
          toast.error("User deleted successfully")

          router.push('/dashboard/users')
       }

       catch(error) {
        console.log(error)
       }
      }

    return (
        <button onClick={()=>handleDelete(id)} className='bg-red-600 rounded-lg px-2 py-1 cursor-pointer'>Delete</button>
    )
}

export default DeleteUserButton;