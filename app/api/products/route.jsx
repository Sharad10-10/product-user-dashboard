import connectDB from "@/app/db/dbConfig.mjs";
import { productModel } from "@/app/db/model.mjs";
import { NextResponse } from "next/server";

export const POST = async (request)=> {
    const data = await request.json()
    await connectDB();
   try {
    
    const {title, category, price, stock, size, description, color} = data

    
    const newUser = await productModel.create({
        title,
        category,
        price,
        stock,
        color,
        size,
        description
       
    })

    return NextResponse.json({
        success: true,
        message: "New product post created successfully",
    }, {status: 201})
   }
   catch (error) {
    console.log(error)
    return NextResponse.json({
        success: false,
        message: "Failed to create a new product post"
    }, {status: 500})
   }

}