
import Joi from 'joi';

export const validateUser = (data) => {
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
        
          'SEO Optimization',
          'Social Media Management',
          'Web Design & Development',
          'Content Marketing',
          'Email Marketing',
          'Pay-Per-Click Advertising',
          'Brand Strategy',
          'Graphic Design'
        )
      
      .min(1)
      .required()
      .messages({
        'array.min': 'Please select at least one service',
        'any.required': 'Please select at least one service',
      }),
    projectBudget: Joi.string()
      .valid(
        'Under R5,000',
        'R5,000 - R10,000',
        'R10,000 - R25,000',
        'R25,000 - R50,000',
        'R50,000 - R100,000',
        'Above R100,000'
      )
      .required()
      .messages({
        'any.only': 'Please select a valid budget range',
        'any.required': 'Project budget is required',
      }),
    message: Joi.string().min(20).max(1000).trim().required().messages({
      'string.min': 'Message must be at least 20 characters',
      'string.max': 'Message cannot exceed 1000 characters',
      'any.required': 'Please describe your project',
    }),
  });

  return schema.validate(data, { abortEarly: false });
};