import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();


const app = express();
const PORT = process.env.PORT;


app.get("/",(req,res)=>{
    res.end("Hello world");
})


app.listen(PORT ,()=>{
    console.log(`Server is running on PORT ${PORT}`)
    connectDB();
})









