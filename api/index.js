import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './configs/db/index.js';
import route from './routes/index.js';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;
//MiddleWare
app.use(express.json());
app.use(cookieParser());
app.use((error, req, res, next)=> {
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Something went wrong!";

    return res.status(errorStatus).send(errorMessage);
})

//Use dotenv lib
dotenv.config();

//Use libraries
app.use(morgan('dev'));
app.use(cors());

//Route init
route(app);
//Connect to DB
db.connect();
app.listen(port, () =>{
    console.log(`Backend server is running at ${port}`)
})