
import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, trim: true },
    email: { type: String, lowercase: true, trim: true, unique: true },
    phoneNumber: { type: String, trim: true },
    services: { type: String },
    projectBudget: { type: String },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;