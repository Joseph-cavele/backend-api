
import express from 'express';
import { bookConsultation,approveConsultation } from '../controller/ConsultationController.js';
import { validate } from '../middleware/validate.js';
import { validateConsultation } from '../middleware/validateConsultation.js';

const router = express.Router();

router.post('/bookconsultation', validate(validateConsultation), bookConsultation);
console.log()

router.post('/approve/:id', approveConsultation);

export default router;