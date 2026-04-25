import { Resend } from 'resend'

import dotenv from 'dotenv'
dotenv.config()

const resend=new Resend(process.env.RESEND_API_KEY)

export const ThankyouEmail=async(user)=>{


    try {
        const data=await resend.emails.send({
            from:`Cavele Digital < ${process.env.ADMIN_EMAI}>`,
            to:user.email,
            subject:"Thank you for reaching out to Cavele Digital !",
            text: `Hi ${user.firstname}! Thank you for reaching out to Cavele Digital .  `,
           
            html:`
                  <div style="font-family: 'DM Sans', sans-serif; background-color: #0c0c0f; padding: 40px 20px; min-height: 100vh;">
          <div style="max-width: 580px; margin: 0 auto; background-color: #141418; border: 1px solid #222; border-radius: 16px; overflow: hidden;">

        
            <div style="background-color: #d4af37; padding: 12px 32px;">
              <p style="margin: 0; font-size: 11px; letter-spacing: 3px; color: #0c0c0f; font-weight: 700;">CAVELE DIGITAL</p>
            </div>

            
            <div style="padding: 40px 32px;">
              <h1 style="font-size: 28px; color: #f5f0e8; font-weight: 400; margin: 0 0 24px;">
                Hi ${name}! 👋
              </h1>
              <p style="font-size: 16px; color: #aaa; line-height: 1.8; margin: 0 0 16px;">
                Thank you for reaching out to <strong style="color: #d4af37;">Cavele Digital</strong>. We've received your message and a member of our team will get back to you within 24 hours.
              </p>
              <p style="font-size: 16px; color: #aaa; line-height: 1.8; margin: 0 0 32px;">
                We're excited to learn more about your goals! 🚀
              </p>

            
              <a href="https://caveledigital.co.za" style="display: inline-block; background-color: #d4af37; color: #0c0c0f; text-decoration: none; padding: 14px 28px; border-radius: 10px; font-weight: 700; font-size: 14px; letter-spacing: 1px;">
                VISIT OUR WEBSITE →
              </a>
            </div>

            
            <div style="border-top: 1px solid #222; padding: 24px 32px; text-align: center;">
              <p style="margin: 0 0 4px; font-size: 12px; color: #555;">hello@caveledigital.com · We reply within 24h</p>
              <p style="margin: 0; font-size: 11px; color: #333;">© ${new Date().getFullYear()} Cavele Digital. All rights reserved.</p>
            </div>

          </div>
        </div>
                
            `



        })

        
    } catch (error) {
        console.log(error)
        
    }



}




  



