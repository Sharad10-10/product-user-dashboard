import React from 'react'

const AddProductPage = () => {
  return (
    <div className='bg-[#182237] mt-4 rounded-xl p-4'>
        <form className='flex flex-wrap gap-8'>
                <input className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name='title' placeholder='Title' required />
                <select className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' name="category" id="category" required>
                    <option value="kitchen">Choose a category...</option>
                    <option value="kitchen">Phone</option>
                    <option value="kitchen">Computer</option>
                    <option value="kitchen">Kitchen</option>
                </select>
                <input className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="Number" name='price' placeholder='Price' required/>
                <input className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name='stock' placeholder='Stock' required/>
                <input className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name='color' placeholder='Color' required/>
                <input className='w-[45%] outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name='size' placeholder='Size' required/>
                <textarea className='w-full outline-none p-2 border rounded-xl border-[#2e374a]' rows={10} name="description" id="description" placeholder='Description...'></textarea>
                <button className='bg-[#2e374a] px-4 py-2 rounded-xl cursor-pointer' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddProductPage