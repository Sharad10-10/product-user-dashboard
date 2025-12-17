import UpdateUserForm from "@/app/ui/updateForm/UpdateUserForm";
import Image from "next/image";


const SingleUserPage = async({params})=> {
    const {id} = await params
    console.log(id)

   const getUsers = async ()=> {
    try {
        // const response = await fetch(`http://localhost:3000/api/users/${id}`)
        const response = await fetch(`${process.env.NEXT_AUTH_URL}/api/users/${id}` || `http://localhost:3000/api/users/${id}`)
        return response

    }
    catch(error) {
        console.log(error)
    }
   }

   const data = await getUsers()
   const {users} = await data.json()


    return (
        <div className="bg-[#182237] flex gap-10 mt-4 p-8 rounded-xl">
            <div className="flex flex-col gap-2">
                <Image src={users?.img || '/noavatar.png'} height={150} width={150} alt="userInfo"/>
                <span>{users?.username}</span>
            </div>


            <div className="flex-3 ">
                <UpdateUserForm users = {users} />
            </div>
        </div>
    )
}

export default SingleUserPage;