import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bookModel from '../server/models/users.js';
import { ObjectId } from 'mongodb';


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/bookstore')

// routes
app.get('/books', (req, res) => {

    bookModel.find() 
    .sort({ author: 1 })
    .then(books => res.json(books))
    .catch(() => {
        res.status(500).json({error: 'Could not fectch the documents'})
    })
})



// FINDING SINGLE DOCUMENTS //
app.get('/books/:id', (req, res) => {

    // If the id string is valid then execute the filtering
    if (ObjectId.isValid(req.params.id)) {

    // req.params.id allows access to what is within the URL
    bookModel.findOne({_id: new ObjectId(req.params.id)}) // find doc associated with ID
    .then(doc => {
        res.status(200).json(doc)
    })
    .catch(() => {
        res.status(500).json({error: 'Could not fetch the documents'})
    })
    } else {
        res.status(500).json({error: 'Not valid ID'})
    }
})


app.listen(3001, () => {
    console.log('Server is running')
})