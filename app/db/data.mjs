import { productModel, userModel } from "./model.mjs"
import connectDB from "./dbConfig.mjs"



export const fetchUsers = async(q , page)=> {

    const regex = new RegExp(q, "i");

    const ITEMS_PER_PAGE = 2;
  
    try {
        connectDB();
        const users = await userModel.find({username: {$regex : regex}}).limit(ITEMS_PER_PAGE).skip(ITEMS_PER_PAGE * (page-1))

        const count = await userModel.find({username : {$regex : regex}}).countDocuments()
        
        return {users, count}
      
    }

    catch(error) {
        console.log(error)
        throw new Error("Failed to fetch data")
    }
}


export const fetchProducts = async(q, page)=> {

    const regex = new RegExp(q, "i");

    const ITEMS_PER_PAGE = 2

    try {
        connectDB()
        const products = await productModel.find({title: {$regex: regex}}).limit(ITEMS_PER_PAGE).skip(ITEMS_PER_PAGE * (page-1)) 
        const count = await productModel.find({title: {$regex: regex}}).countDocuments()
        return {products, count}
    }

    catch(error) {
        console.log(error)
        throw new Error("Failed to fetch products data")
    }

}