import { productModel, userModel } from "./model.mjs"
import connectDB from "./dbConfig.mjs"



export const fetchUsers = async(q)=> {

    const regex = new RegExp(q, "i")
  
    try {
        connectDB();
        const users = await userModel.find({username: {$regex : regex}})
        return users
      
    }

    catch(error) {
        console.log(error)
        throw new Error("Failed to fetch data")
    }
}
