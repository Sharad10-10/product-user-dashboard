import UpdateProductForm from "@/app/ui/updateForm/UpdateProductForm";
import Image from "next/image";

const SingleProductPage = async({params})=> {

    const {id} = await params
    console.log(id)

   const getProducts = async ()=> {
    try {
        // const response = await fetch(`http://localhost:3000/api/products/${id}`)
        const response = await fetch(`${process.env.NEXT_AUTH_URL}/api/products/${id}` || `api/products/${id}` )
        return response

    }
    catch(error) {
        console.log(error)
    }
   }

   const data = await getProducts();
   console.log(data)
   const {products} = await data.json();


    return (
        <div className="bg-[#182237] flex gap-10 mt-4 p-8 rounded-xl">
            <div className="flex flex-col gap-2">
                <Image src='/noavatar.png' height={150} width={150} alt="productInfo"/>
                <span>{products?.title}</span>
            </div>


            <div className="flex-3 ">
               <UpdateProductForm products= {products} />
            </div>
        </div>
    )
}

export default SingleProductPage;