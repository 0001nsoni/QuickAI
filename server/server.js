import express from "express"
import cors from 'cors';
import 'dotenv/config';
import {clerkMiddleware, requireAuth} from '@clerk/express'
import aiRouter from "./routes/aiRoutes.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware())
app.get('/',(req,res)=>res.send("Server is Live!"))
app.use(requireAuth())
app.use('/api/ai',aiRouter)
const Port = process.env.PORT || 3000;

app.listen(Port,()=>{
    console.log(`the app is listening on port ${Port}`)
})