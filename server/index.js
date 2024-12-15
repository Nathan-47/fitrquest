import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bookModel from '../server/models/users.js'



const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/bookstore')

app.get('/getBook', (req, res) => {
    bookModel.find()
    .then(books => res.json(books))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log('Server is running')
})