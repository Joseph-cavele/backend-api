
import Joi from "joi";

export const AuthUserSchema=Joi.object({
    firstname:Joi.string()
                .required()
                .min(4)
                .max(100),
     email:Joi.string() 
                .required()
                .min(4) 
                .max(140),
     message:Joi.string() 
               .required() 
                    
})