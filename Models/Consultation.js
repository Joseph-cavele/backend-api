
import mongoose from 'mongoose';

export const consultationSchema = new mongoose.Schema(
  {
    fullName: { type: String, trim: true },
    email: { type: String, lowercase: true, trim: true },
    phoneNumber: { type: String, trim: true },
    services: { type: String },
    preferredDate: { type: Date },
    preferredTime: { type: String },
    consultationMode: { type: String, default: 'Video Call' },
    message: { type: String, trim: true },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

const Consultation = mongoose.model('Consultation', consultationSchema);

export default Consultation;