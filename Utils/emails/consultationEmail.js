import { Resend } from "resend";
const resend=new Resend(process.env.RESEND_API_KEY)
// ─── Client Notification - Consultation Approved ─────────────────────────────
export const sendConsultationApproval = async (consultation) => {
  console.log('Preparing to send consultation approval email to:', consultation.email);
  await resend.emails.send({
    from: `"Cavele Digital" <${process.env.EMAIL_USER}>`,
    to: consultation.email,
    subject: `Your Consultation is Confirmed - Cavele Digital`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #16a34a;">Your Consultation is Confirmed ✅</h2>
        <p>Hello <strong>${consultation.fullName}</strong>,</p>
        <p>Great news! Your consultation with <strong>Cavele Digital</strong> has been approved.</p>

        <hr style="border-color: #e5e7eb;" />

        <h3 style="color: #374151;">Booking Details</h3>
        <p><strong>Service:</strong> ${consultation.services}</p>
        <p><strong>Date:</strong> ${new Date(consultation.preferredDate).toDateString()}</p>
        <p><strong>Time:</strong> ${consultation.preferredTime}</p>
        <p><strong>Mode:</strong> ${consultation.consultationMode}</p>

        <hr style="border-color: #e5e7eb;" />
        <p>We look forward to speaking with you. If you have any questions before the
         consultation, feel free to reply to this email.</p>
        <p>— The Cavele Digital Team</p>
      </div>

    `,
  });


};




// ─── Admin Notification - New Consultation Booking ───────────────────────────
export const sendConsultationNotification = async (consultation) => {
  const approveUrl = `${process.env.BASE_URL}/api/consultations/${consultation._id}/approve`;

  await resend.emails.send({
    from: `"Cavele Digital" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Consultation Booking - ${consultation.fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <h2 style="color: #111827;">New Consultation Booking</h2>
        <hr style="border-color: #e5e7eb;" />

        <p><strong>Name:</strong> ${consultation.fullName}</p>
        <p><strong>Email:</strong> ${consultation.email}</p>
        <p><strong>Phone:</strong> ${consultation.phoneNumber}</p>
        <p><strong>Service:</strong> ${consultation.services}</p>
        <p><strong>Date:</strong> ${new Date(consultation.preferredDate).toDateString()}</p>
        <p><strong>Time:</strong> ${consultation.preferredTime}</p>
        <p><strong>Mode:</strong> ${consultation.consultationMode}</p>
        <p><strong>Message:</strong> ${consultation.message || 'N/A'}</p>
        <p><strong>Consultation ID:</strong> ${consultation._id}</p>

        <hr style="border-color: #e5e7eb;" />

        <a href="${approveUrl}" style="
          display: inline-block;
          background-color: #16a34a;
          color: white;
          padding: 12px 28px;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
          font-size: 15px;
        ">
          ✅ Approve Consultation
        </a>

        <hr style="border-color: #e5e7eb; margin-top: 24px;" />
        <p style="color: #6b7280; font-size: 13px;">Cavele Digital — New consultation booking received</p>
      </div>
    `,
  });
};
