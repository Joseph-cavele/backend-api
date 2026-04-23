
import { transporter } from "./transporter.js"
import dotenv from 'dotenv'
dotenv.config()

export const ThankyouEmail=async(user)=>{

    await transporter.sendMail({

        from:`Cavele Digital <${process.env.EMAIL_USER}>`,
        to:user.email,
        subject:`Thank you for contacting Cavele digital`,
        html:`<h2>Hi  ${user.firstname},</h2>
        <p>Thank you for reaching out to 
        <strong>Cavele Digital </strong>.</p>
        <p>We've received your message and 
        will get back to you within 24 hours .</p>
        <p>We look forward to working with you.</p>
        </br>
        <p><strong>Cavele Digital </strong></p>


        
        
        
        `





    })




}