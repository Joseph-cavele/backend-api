
import express from 'express';
import { bookConsultation} from '../controller/ConsultationController.js';
import { validate } from '../middleware/validate.js';
import { validateConsultation } from '../middleware/validateConsultation.js';

const router = express.Router();

router.post('/bookconsultation', validate(validateConsultation), bookConsultation);
console.log()



export default router;