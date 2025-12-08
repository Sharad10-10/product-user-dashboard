import Image from "next/image";

const SingleProductPage = ()=> {
    return (
        <div className="bg-[#182237] flex gap-10 mt-4 p-8 rounded-xl">
            <div className="flex flex-col gap-2">
                <Image src='/noavatar.png' height={150} width={150} alt="productInfo"/>
                <span>Product Details</span>
            </div>


            <div className="flex-3 ">
                <form className="flex flex-col gap-3">   
                    <label htmlFor="username">UserName</label>
                    <input className='outline-none p-2 border rounded-xl border-[#2e374a]'  type="text" name="username" id="username" />

                    <label htmlFor="username">Title</label>
                    <input className='outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name="title" id="title" />

                    <label htmlFor="username">Price</label>
                    <input className='outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name="price" id="price" />

                    <label htmlFor="username">Created At</label>
                    <input className='outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name="createdAt" id="createdAt" />

                    <label htmlFor="username">Stock</label>
                    <input className='outline-none p-2 border rounded-xl border-[#2e374a]' type="text" name="stock" id="stock" />

                    <label htmlFor="category">Category</label>
                    <select className='outline-none p-2 border rounded-xl border-[#2e374a]' name="category" id="category">
                        <option value="kitchen">Kitchen</option>
                        <option value="kitchen">Computer</option>
                    </select>

                    <label htmlFor="username">Description</label>
                    <textarea className='outline-none p-2 border rounded-xl border-[#2e374a]' rows={6} name="description" id="description"></textarea>




                    <button className='bg-[#2e374a] px-4 py-2 rounded-xl w-[full] cursor-pointer' type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage;