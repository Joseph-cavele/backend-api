
import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:[true,"First name is required"],
        trim:true

    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"email must be unique"],


    },
    message:{
        type:String,
        required:true

    }
},{timestamps:true})

export const UserModel=mongoose.model('Authuser',UserSchema)