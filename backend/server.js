import express from 'express' 
import dotenv from 'dotenv' 
import bookRouter from './routes/book.routes.js' 
import { connectDB } from './config/db.js' 
dotenv.config() 
const app = express() 
app.use(express.json());
app.use("/api/books", bookRouter) 
const PORT = process.env.PORT || 8000 
connectDB() 
app.listen(PORT, ()=>console.log(`server is running at ${PORT}`))