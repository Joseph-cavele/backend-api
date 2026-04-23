import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()


export  const CONNECT_DB=async()=>{

    try {
        await 
        mongoose.connect(process.env.MONGO_URI)
        console.log("Database is connected successfull")
        
    } catch (error) {
        console.error(`Error:Failed to connect to the database   ${error.message}`);
        process.exit(1)
        
    }
}



 