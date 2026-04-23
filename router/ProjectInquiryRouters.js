
import express from 'express';
import { submitInquiry } from '../controller/ProjectInquiryController.js';
import { validate } from '../middleware/validate.js';
import { validateUser } from '../middleware/validationUser.js';

const router = express.Router();

router.post('/submit', validate(validateUser), submitInquiry);


export default router;