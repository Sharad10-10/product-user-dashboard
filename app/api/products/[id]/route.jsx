import connectDB from "@/app/db/dbConfig.mjs";
import { productModel } from "@/app/db/model.mjs";
import { NextResponse } from "next/server";

export const GET = async(request, {params})=> {
    const {id} = await params
    console.log("ID", id)
    await connectDB();
    try{
        const products = await productModel.findById(id)
        if(!products) {
            return NextResponse.json({
                success: false,
                message: "No product found",
            }, {status: 404})
        }
        return NextResponse.json({
            success: true,
            message: "Products fetched successfully",
            products
        }, {status: 200})
    }
    catch(error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "Failed to get data",
            error
        }, {status: 500})
    }
}


export const PUT = async(request, {params})=> {
    const {id} = await params;
    await connectDB();

    try {
        const body = await request.json()
        const users = await productModel.findByIdAndUpdate(id, {
            title : body.title,
            price: body.price,
            stock: body.stock,
            size: body.size,
            color: body.color,
            description: body.description,
            category: body.category
        }, {new:true})

        return NextResponse.json({
            success: true,
            message: "Product updated successfully",
            users
        }, {status: 201})

    }

    catch (error) {
        console.log(error)
        return NextResponse.json({
            success: true,
            message: "Failed to update the product data",
            error
        }, {status: 500})
    }
    

}



export const DELETE = async(request, {params})=> {

    const {id} = await params;
    await connectDB();

    try {
        const product = await productModel.findByIdAndDelete(id)

        if(!product) {
            return NextResponse.json({
                success: false,
                message: "No user found to delete"
            })
        }

        return NextResponse.json({
            success: true,
            message: "Product deleted successfully",
            product
        })
    }

    catch(error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            message: "Failed to delete the data",
            error
        })
    }
}
