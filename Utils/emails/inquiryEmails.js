import { Resend } from "resend";


// ─── Admin Notification - New Inquiry ───────────────────────────────────────
const resend=new Resend(process.env.RESEND_API_KEY)
export const sendInquiryNotification = async (req, res) => {
  const { fullName, email, phoneNumber, services, projectBudget, message } =req 
  try {
    
  const data=await resend.emails.send({
    from: `"Cavele Digital" <${process.env.ADMIN_EMAIL}>`,
    to: email,
    subject: `New Project Inquiry - ${fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #111827;">New Project Inquiry</h2>
        <hr style="border-color: #e5e7eb;" />

        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Services:</strong> ${services}</p>
        <p><strong>Budget:</strong> ${projectBudget}</p>
        <p><strong>Message:</strong> ${message}</p>

        <hr style="border-color: #e5e7eb;" />
        <p style="color: #6b7280; font-size: 13px;">Cavele Digital — New client inquiry received</p>
      </div>
    `,
    
 
  });
  return data
   } catch (error) {
    console.error(error)
    
  }
};

// ─── Client Confirmation - Inquiry Received ──────────────────────────────────
export const sendInquiryConfirmation = async (user) => {

  try {
    

  const data=await resend.emails.send({
    from: `"Cavele Digital" <${process.env.ADMIN_EMAIL}>`,
    to: user.email,
    subject: `We received your inquiry - Cavele Digital`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #111827;">Hello ${user.fullName},</h2>
        <p>Thank you for reaching out to <strong>Cavele Digital</strong>. We have received your project inquiry and will get back to you shortly.</p>

        <hr style="border-color: #e5e7eb;" />

        <h3 style="color: #374151;">Your Inquiry Details</h3>
        <p><strong>Services:</strong> ${user.services}</p>
        <p><strong>Budget:</strong> ${user.projectBudget}</p>
        <p><strong>Message:</strong> ${user.projectMessage}</p>

        <hr style="border-color: #e5e7eb;" />
        <p>We typically respond within <strong>24–48 hours</strong>.</p>
        <p>— The Cavele Digital Team</p>
      </div>
    `,
  });


    return data
  } catch (error) {
    console.log(error)
    
  }
 }; 