import express from 'express';

import helmet from 'helmet';
import dotenv from "dotenv"
import morgan from 'morgan';
import { connectDB } from './DB/db.js';
import { sendConsultationApproval } from './Utils/emails/consultationEmail.js';
import ConsultationRouters from './router/ConsultationRouters.js';
import ProjectInquiryRouters from "./router/ProjectInquiryRouters.js"
import { errorHandle } from './middleware/AuthMiddleware.js';
import UserRouter from "./router/UserRouter.js"
import cors from "cors"






dotenv.config()

const app=express()
app.use(cors({
    origin:'http://localhost:5173',
    methods:'*'
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(morgan('dev'))


// Debugging middleware to log request headers
app.use((req, res, next) => {
    console.log('Request Headers:', req.headers);
    console.log(req.body)
    next();
});

app.use(helmet())

// connect db

connectDB()
//Consultations
app.use('/api',ConsultationRouters)

// bookingInquiry

app.use('/api',ProjectInquiryRouters)
app.use('/api',UserRouter)
















app.use(errorHandle)



const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server is running on http:${PORT}`)
})

