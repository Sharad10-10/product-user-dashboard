import { userModel } from "@/app/db/model.mjs"
import { NextResponse } from "next/server"
import * as bcrypt from "bcrypt"
import { signJwtAccessToken } from "@/app/db/jwt"
import connectDB from "@/app/db/dbConfig.mjs"


export const POST = async(request)=>{

    await connectDB()

    const {username, password} = await request.json()
    console.log(username, password)

    const user = await userModel.findOne({username})

    if(!user) {
        return NextResponse.json({
            message: "Invalid email or password",
            success: false
        })
    }

    if (await bcrypt.compare(password, user.password)){
        const userObject = user.toObject()
        const {password: hashedPassword, ...result} = userObject
        const accessToken = signJwtAccessToken(result)
        return NextResponse.json({
            success: true,
            result
        }, {status: 200})
    }
    else {
            return NextResponse.json({
                message: "Invalid email or password",
                success: false
            })
        }
    }

   
