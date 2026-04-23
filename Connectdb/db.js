import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


const uri =process.env.MONGO_URI
 export const CONNECT_DB=async()=>{
    console.log(uri)

    try {
        const conn=await mongoose.connect(uri)
        
        
    } catch (error) {
        console.error(`Error:${error}`)
        process.exit(1)
        
    }
 }
