import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import multer from 'multer';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './configs/db/index.js';
import route from './routes/index.js';

const app = express();
const port = 3000;
//Register
app.use(express.json());

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