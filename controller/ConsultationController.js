import Consultation from '../Models/Consultation.js';


import { sendConsultationApproval ,sendConsultationNotification} from '../Utils/emails/consultationEmail.js';

export const bookConsultation = async (req, res,next) => {

    const { fullName, email, phoneNumber, services, preferredDate, preferredTime, consultationMode, message } = req.body;

  try {
    
        console.log('Received consultation booking request:', req.body);
    console.log(req.body)

    const consultation = await Consultation.create({
      fullName, email, phoneNumber, services, preferredDate, preferredTime, consultationMode, message,
    });

    // Notify admin
    await sendConsultationNotification(consultation);

    res.status(201).json({ message: 'Consultation booked successfully', consultation });
  } catch (error) {
    console.error('Error booking consultation:', error);
    res.status(500).json({ message: error.message });
    next(error)
  }
};

export const approveConsultation = async (req, res,next) => {
  try {
    const consultation = await Consultation.findById(req.params.id);

    if (!consultation) {
      return res.status(404).json({ message: 'Consultation not found' });
    }

    if (consultation.status !== 'pending') {
      return res.status(400).json({ message: `Consultation is already ${consultation.status}` });
    }

    consultation.status = 'confirmed';
    await consultation.save();

    // Notify client
    await sendConsultationApproval(consultation);

    res.status(200).json({ message: `Consultation approved. Email sent to ${consultation.email}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
    next(error)
    
  }
};