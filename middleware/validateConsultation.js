
import Joi from "joi";



export const validateConsultation = (data) => {
  const schema = Joi.object({
    fullName: Joi.string().min(2).max(100).trim().required().messages({
      'string.min': 'Full name must be at least 2 characters',
      'string.max': 'Full name cannot exceed 100 characters',
      'any.required': 'Full name is required',
    }),
    email: Joi.string().email().lowercase().trim().required().messages({
      'string.email': 'Please enter a valid email address',
      'any.required': 'Email is required',
    }),
    phoneNumber: Joi.string()
      .pattern(/^\+?[\d\s\-().]{7,20}$/)
      .required()
      .messages({
        'string.pattern.base': 'Please enter a valid phone number',
        'any.required': 'Phone number is required',
      }),
    services: Joi.string()
      .valid(
        ' SEO Optimazation',
        'Social Media Management',
        'Web Design & Development',
        'Content Marketing',
        'Email Marketing',
        'Pay-Per-Click Advertising',
        'Ecommerce',
        'Logo design'
      )
      .required()
      .messages({
        'any.only': 'Please select a valid service',
        'any.required': 'Service is required',
      }),
    preferredDate: Joi.date().greater('now').required().messages({
      'date.greater': 'Preferred date must be in the future',
      'any.required': 'Preferred date is required',
    }),
    preferredTime: Joi.string()
      .valid(
        '08:00 AM',
        '09:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '02:00 PM',
        '03:00 PM',
        '04:00 PM'
      )
      .required()
      .messages({
        'any.only': 'Please select a valid time slot',
        'any.required': 'Preferred time is required',
      }),
    consultationMode: Joi.string()
      .valid('Video Call', 'Phone Call', 'In Person')
      .default('Video Call')
      .messages({
        'any.only': 'Please select a valid consultation mode',
      }),
    message: Joi.string().max(500).trim().optional().messages({
      'string.max': 'Message cannot exceed 500 characters',
    }),
  });

  return schema.validate(data, { abortEarly: false });
};