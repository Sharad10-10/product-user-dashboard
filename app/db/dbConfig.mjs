import mongoose from 'mongoose';

const connectDB = async()=> {
    const mongoURL = process.env.DB_URL
    try{
        await mongoose.connect(mongoURL)
        console.log("Database Connected successfully")
    }
    
    catch(error){
        console.log("Error is: ", error)
    }
}

export default connectDB;

