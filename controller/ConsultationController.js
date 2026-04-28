import Consultation from '../Models/Consultation.js';




export const bookConsultation = async (req, res,next) => {

    const { fullName, email, phoneNumber, services, preferredDate, preferredTime, consultationMode, message } = req.body;

  try {
    
        console.log('Received consultation booking request:', req.body);
    console.log(req.body)

    const newconsultation = await Consultation.create({
      fullName, email, phoneNumber, services, preferredDate, preferredTime, consultationMode, message,
    });

    // Notify admin
  

    res.status(201).json({ message: 'Consultation booked successfully', newconsultation });
  } catch (error) {
    console.error('Error booking consultation:', error);
    res.status(500).json({ message: error.message });
    next(error)
  }
};
