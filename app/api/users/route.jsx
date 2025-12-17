import connectDB from "@/app/db/dbConfig.mjs"
import { userModel } from "@/app/db/model.mjs"
import { NextResponse } from "next/server"
import * as bcrypt from 'bcrypt';
 


export const POST = async (request)=> {
    const data = await request.json()
    await connectDB();
   try {
    
    const {username, email, password, phone, isAdmin, isActive, address} = data

    const hashedPassword = await bcrypt.hash(password, 10)
    
    const newUser = await userModel.create({
        username,
        email,
        password : hashedPassword,
        phone,
        isAdmin,
        isActive,
        address
    })

    return NextResponse.json({
        success: true,
        message: "New user created successfully",
        newUser
    }, {status: 201})
   }
   catch (error) {
    console.log(error)
    return NextResponse.json({
        success: false,
        message: "Failed to create a new user"
    }, {status: 501})
   }

}