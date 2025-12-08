import Image from "next/image";

const SingleUserPage = ()=> {
    return (
        <div className="bg-[#182237] flex gap-10 mt-4 p-8 rounded-xl">
            <div className="flex flex-col gap-2">
                <Image src='/noavatar.png' height={150} width={150} alt="userInfo"/>
                <span>Sharad Ghimire</span>
            </div>


            <div className="flex-3 ">
                <form className="flex flex-col gap-3">   
                    <label htmlFor="username">UserName</label>
                    <input className='outline-none p-2 border rounded-xl border-[#2e374a]'  type="text" name="username" id="username" />

                    <label htmlFor="username">Email</label>
                    <input className='outline-none p-2 border rounded-xl border-[#2e374a]' type="email" name="email" id="email" />

                    <label htmlFor="username">Password</label>
                    <input className='outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name="password" id="password" />

                    <label htmlFor="username">Phone</label>
                    <input className='outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name="phone" id="phone" />

                    <label htmlFor="username">Address</label>
                    <input className='outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name="address" id="address" />

                    <label htmlFor="isActive">Is Active?</label>
                    <select className='outline-none p-2 border rounded-xl border-[#2e374a]' name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <label htmlFor="isAdmin">Is Admin?</label>
                    <select className='outline-none p-2 border rounded-xl border-[#2e374a]' name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <button className='bg-[#2e374a] px-4 py-2 rounded-xl w-[full] cursor-pointer' type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage;