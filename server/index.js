"use strict";

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/user.js';
import protectedRoutes from './routes/protectedRoutes.js';


// Configure dotenv to load the .env file
dotenv.config();  

const app = express()
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


// for user login or signup
app.use('/user', userRoutes);

// for protected pages in this case the /comp page
app.use('/user/protected', protectedRoutes);


// connect to database
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Server connected', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})
