
import User from '../Models/ProjectInquiry.js';

import { sendInquiryConfirmation ,sendInquiryNotification} from '../Utils/emails/inquiryEmails.js';

export const submitInquiry = async (req, res) => {
  
   const { fullName, email, phoneNumber, services, projectBudget, message } = req.body;
  try {
   

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'This email has already submitted an inquiry' });
    }

    const user = await User.create({ fullName, email, phoneNumber, services, projectBudget, message });

    // Notify admin & confirm to client
    await sendInquiryNotification(user);
    await sendInquiryConfirmation(user);

    res.status(201).json({ message: 'Inquiry submitted successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};