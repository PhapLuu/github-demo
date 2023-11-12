import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './configs/db/index.js'

const app = express();
const port = 3000;

//Use dotenv lib
dotenv.config();

//Use libraries
app.use(morgan('dev'));
app.use(cors());

//Connect to DB
db.connect();
app.listen(port, () =>{
    console.log(`Backend server is running at ${port}`)
})