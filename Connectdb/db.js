import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


const uri =process.env.MONGO_URI
 export const CONNECT_DB=async()=>{
    

    try {
        const conn=await mongoose.connect(uri)
        console.log(`Database Connected:${conn.connection.host}`)
        
        
    } catch (error) {
        console.error(`Error:${error}`)
        process.exit(1)
        
    }
 }
