import connectDB from "@/app/db/dbConfig.mjs";
import { userModel } from "@/app/db/model.mjs";
import { NextResponse } from "next/server";

export const GET = async(request, {params})=> {
    const {id} = await params
    console.log("ID", id)
    await connectDB();
    try{
        const users = await userModel.findById(id)
        if(!users) {
            return NextResponse.json({
                success: false,
                message: "No users found",
            }, {status: 404})
        }
        return NextResponse.json({
            success: true,
            message: "Users fetched successfully",
            users
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
        const {username, email, password, isActive, isAdmin, address, phone} = body
        const users = await userModel.findByIdAndUpdate(id, {
            username, email, password, isActive, isAdmin, address, phone
        }, {new:true})

        return NextResponse.json({
            success: true,
            message: "User updated successfully",
            users
        })

    }

    catch (error) {
        console.log(error)
        return NextResponse.json({
            success: true,
            message: "Failed to update the data",
            error
        }, {status: 500})
    }
    

}


export const DELETE = async(request, {params})=> {

    const {id} = await params;
    await connectDB();

    try {
        const user = await userModel.findByIdAndDelete(id)

        if(!user) {
            return NextResponse.json({
                success: false,
                message: "No user found to delete"
            })
        }

        return NextResponse.json({
            success: true,
            message: "User deleted successfully",
            user
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

