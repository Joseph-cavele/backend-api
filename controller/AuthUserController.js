import { AuthUserSchema } from "../middleware/AuthUser.js"
import { UserModel } from "../Models/UserModel.js"




    export const AuthUserController=async(req,res,next)=>{

            try {
                const {firstname,email,message}=req.body
                console.log(req.body)
                
                const {error,value}=AuthUserSchema.validate({firstname,email,message})
                if(error){
                   console.log("Validation Error",error.details[0].message) 
                    return res.status(400).json({
                        success:false,
                        message:error.details[0].message
                    })
                }

                const existingUser=await UserModel.findOne({email})
                if(existingUser){
                    return res.status(400).json({
                        success:false,
                        message:`User with ${email} already exist`
                    })
                }
               const newUser=new UserModel({
                firstname,
                email,
                message
               })

               await newUser.save()

               
            
               return res.status(200).json({
                success:true,
                message:"Email sent successfully"
               })
                
            } catch (err) {

                console.error(err)
                return res.status(500).json({
                    success:false,
                    message:"Server Error"
                })
            

                
            }



    }

    

