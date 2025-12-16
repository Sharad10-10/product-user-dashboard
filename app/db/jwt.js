import jwt from "jsonwebtoken"


const DEFAULT_OPTIONS = {expiresIn:"2hr"}

export const signJwtAccessToken = (payload, options= DEFAULT_OPTIONS ) => {
   
    const secretKey = process.env.JWT_SECRET_KEY 
    const token = jwt.sign(payload, secretKey, options)
    return token

}

export const verifyJWT = (token)=> {

    try{
        const secretKey = process.env.JWT_SECRET_KEY
        const decoded = jwt.verify(token, secretKey)
        return decoded
    }

    catch(error) {
        console.log(error)
    }


}