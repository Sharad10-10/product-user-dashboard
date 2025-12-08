import React from 'react'

const AddUserPage = () => {
  return (
    <div className='bg-[#182237] mt-4 rounded-xl p-4'>
        <form className='flex flex-wrap gap-8'>
                <input className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name='username' placeholder='UserName' required/>
                <input className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="email" name='email' placeholder='Email' required/>
                <input className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="password" name='password' placeholder='Password' required/>
                <input className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name='phone' placeholder='Phone' required/>
                <select className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' name="isAdmin" id="isAdmin" required>
                    <option value={false}>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <select className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' name="isActive" id="isActive" required>
                    <option value={true}>Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <textarea className='w-full outline-none p-2 border rounded-xl border-[#2e374a]' rows={10} name="address" id="address" placeholder='Address...'></textarea>
                <button className='bg-[#2e374a] px-4 py-2 rounded-xl cursor-pointer' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddUserPage