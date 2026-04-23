import { AuthUserController } from '../controller/AuthUserController.js';
import express from 'express'

  const router=express.Router()

router.post('/thankyou',AuthUserController)

export default router
